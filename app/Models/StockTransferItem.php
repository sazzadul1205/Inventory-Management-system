<?php
// app/Models/StockTransferItem.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StockTransferItem extends Model
{
    use HasFactory;

    protected $table = 'stock_transfer_items';

    protected $fillable = [
        'stock_transfer_id',
        'product_id',
        'from_location_id',
        'to_location_id',
        'quantity_requested',
        'quantity_shipped',
        'quantity_received',
        'batch_number',
        'serial_number',
        'unit_cost',
        'notes'
    ];

    protected $casts = [
        'quantity_requested' => 'integer',
        'quantity_shipped' => 'integer',
        'quantity_received' => 'integer',
        'quantity_remaining' => 'integer',
        'unit_cost' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Virtual status values (matching the generated column)
    const STATUS_PENDING = 'pending';
    const STATUS_SHIPPED = 'shipped';
    const STATUS_PARTIALLY_RECEIVED = 'partially_received';
    const STATUS_RECEIVED = 'received';

    // Relationships
    public function stockTransfer(): BelongsTo
    {
        return $this->belongsTo(StockTransfer::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function fromLocation(): BelongsTo
    {
        return $this->belongsTo(Location::class, 'from_location_id');
    }

    public function toLocation(): BelongsTo
    {
        return $this->belongsTo(Location::class, 'to_location_id');
    }

    // Scopes
    public function scopePending($query)
    {
        return $query->whereRaw('quantity_shipped = 0');
    }

    public function scopeShipped($query)
    {
        return $query->whereRaw('quantity_shipped > 0 AND quantity_received = 0');
    }

    public function scopePartiallyReceived($query)
    {
        return $query->whereRaw('quantity_received > 0 AND quantity_received < quantity_requested');
    }

    public function scopeReceived($query)
    {
        return $query->whereRaw('quantity_received >= quantity_requested');
    }

    public function scopeForProduct($query, $productId)
    {
        return $query->where('product_id', $productId);
    }

    public function scopeWithBatch($query, $batchNumber)
    {
        return $query->where('batch_number', $batchNumber);
    }

    public function scopeWithSerial($query, $serialNumber)
    {
        return $query->where('serial_number', $serialNumber);
    }

    // Accessors
    public function getStatusAttribute(): string
    {
        if ($this->quantity_received >= $this->quantity_requested) {
            return self::STATUS_RECEIVED;
        } elseif ($this->quantity_received > 0) {
            return self::STATUS_PARTIALLY_RECEIVED;
        } elseif ($this->quantity_shipped > 0) {
            return self::STATUS_SHIPPED;
        }
        return self::STATUS_PENDING;
    }

    public function getStatusLabelAttribute(): string
    {
        $labels = [
            self::STATUS_PENDING => 'Pending',
            self::STATUS_SHIPPED => 'Shipped',
            self::STATUS_PARTIALLY_RECEIVED => 'Partially Received',
            self::STATUS_RECEIVED => 'Received'
        ];

        return $labels[$this->status] ?? $this->status;
    }

    public function getProgressAttribute(): array
    {
        return [
            'shipped' => $this->quantity_shipped,
            'received' => $this->quantity_received,
            'requested' => $this->quantity_requested,
            'shipped_percentage' => $this->quantity_requested > 0 ?
                round(($this->quantity_shipped / $this->quantity_requested) * 100, 2) : 0,
            'received_percentage' => $this->quantity_requested > 0 ?
                round(($this->quantity_received / $this->quantity_requested) * 100, 2) : 0
        ];
    }

    public function getRemainingToShipAttribute(): int
    {
        return $this->quantity_requested - $this->quantity_shipped;
    }

    public function getRemainingToReceiveAttribute(): int
    {
        return $this->quantity_shipped - $this->quantity_received;
    }

    public function getIsFullyShippedAttribute(): bool
    {
        return $this->quantity_shipped >= $this->quantity_requested;
    }

    public function getIsFullyReceivedAttribute(): bool
    {
        return $this->quantity_received >= $this->quantity_requested;
    }

    public function getTotalCostAttribute(): float
    {
        return ($this->unit_cost ?? 0) * $this->quantity_requested;
    }

    public function getFromLocationPathAttribute(): string
    {
        return $this->fromLocation ? $this->fromLocation->full_location_path : 'Not assigned';
    }

    public function getToLocationPathAttribute(): string
    {
        return $this->toLocation ? $this->toLocation->full_location_path : 'Not assigned';
    }

    public function getProductInfoAttribute(): string
    {
        $info = $this->product->name;

        if ($this->batch_number) {
            $info .= " (Batch: {$this->batch_number})";
        }

        if ($this->serial_number) {
            $info .= " (SN: {$this->serial_number})";
        }

        return $info;
    }

    // Methods
    public function canShip(): bool
    {
        return $this->quantity_shipped < $this->quantity_requested;
    }

    public function canReceive(): bool
    {
        return $this->quantity_received < $this->quantity_shipped;
    }

    public function getAvailableInventory(): int
    {
        return Inventory::available()
            ->byProduct($this->product_id)
            ->inWarehouse($this->stockTransfer->from_warehouse_id)
            ->where('location_id', $this->from_location_id)
            ->where('batch_number', $this->batch_number)
            ->where('serial_number', $this->serial_number)
            ->sum('quantity_available');
    }
}
