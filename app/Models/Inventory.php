<?php
// app/Models/Inventory.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;

class Inventory extends Model
{
    use HasFactory;

    protected $table = 'inventory';

    protected $fillable = [
        'product_id',
        'warehouse_id',
        'location_id',
        'batch_number',
        'serial_number',
        'expiry_date',
        'quantity_on_hand',
        'quantity_reserved',
        'quantity_available',
        'quantity_in_transit',
        'quantity_on_order',
        'unit_cost',
        'total_value',
        'last_count_date',
        'last_movement_date',
        'status'
    ];

    protected $casts = [
        'expiry_date' => 'date',
        'last_count_date' => 'datetime',
        'last_movement_date' => 'datetime',
        'quantity_on_hand' => 'integer',
        'quantity_reserved' => 'integer',
        'quantity_available' => 'integer',
        'quantity_in_transit' => 'integer',
        'quantity_on_order' => 'integer',
        'unit_cost' => 'decimal:2',
        'total_value' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Status constants
    const STATUS_AVAILABLE = 'available';
    const STATUS_RESERVED = 'reserved';
    const STATUS_QUARANTINED = 'quarantined';
    const STATUS_DAMAGED = 'damaged';
    const STATUS_EXPIRED = 'expired';
    const STATUS_RETURNED = 'returned';

    public static $statuses = [
        self::STATUS_AVAILABLE => 'Available',
        self::STATUS_RESERVED => 'Reserved',
        self::STATUS_QUARANTINED => 'Quarantined',
        self::STATUS_DAMAGED => 'Damaged',
        self::STATUS_EXPIRED => 'Expired',
        self::STATUS_RETURNED => 'Returned'
    ];

    // Relationships
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    public function movements(): HasMany
    {
        return $this->hasMany(InventoryMovement::class, 'product_id', 'product_id')
            ->where(function ($query) {
                $query->where('batch_number', $this->batch_number)
                    ->orWhere('serial_number', $this->serial_number);
            });
    }

    // Scopes
    public function scopeAvailable($query)
    {
        return $query->where('status', self::STATUS_AVAILABLE)
            ->where('quantity_available', '>', 0);
    }

    public function scopeInWarehouse($query, $warehouseId)
    {
        return $query->where('warehouse_id', $warehouseId);
    }

    public function scopeInLocation($query, $locationId)
    {
        return $query->where('location_id', $locationId);
    }

    public function scopeByProduct($query, $productId)
    {
        return $query->where('product_id', $productId);
    }

    public function scopeByBatch($query, $batchNumber)
    {
        return $query->where('batch_number', $batchNumber);
    }

    public function scopeBySerial($query, $serialNumber)
    {
        return $query->where('serial_number', $serialNumber);
    }

    public function scopeExpiringBefore($query, $date)
    {
        return $query->where('expiry_date', '<=', $date)
            ->whereNotNull('expiry_date');
    }

    public function scopeExpired($query)
    {
        return $query->where('expiry_date', '<', now())
            ->whereNotNull('expiry_date');
    }

    public function scopeLowStock($query, $threshold = null)
    {
        return $query->whereHas('product', function ($q) use ($threshold) {
            $q->whereRaw('quantity_available <= minimum_stock');
        });
    }

    public function scopeOutOfStock($query)
    {
        return $query->where('quantity_available', '<=', 0);
    }

    public function scopeWithValue($query)
    {
        return $query->whereNotNull('total_value')
            ->where('total_value', '>', 0);
    }

    public function scopeByStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    // Accessors
    public function getIsLowStockAttribute(): bool
    {
        return $this->product &&
            $this->quantity_available <= $this->product->minimum_stock;
    }

    public function getIsOutOfStockAttribute(): bool
    {
        return $this->quantity_available <= 0;
    }

    public function getIsExpiredAttribute(): bool
    {
        return $this->expiry_date && $this->expiry_date->isPast();
    }

    public function getIsExpiringSoonAttribute(): bool
    {
        if (!$this->expiry_date) {
            return false;
        }

        $daysUntilExpiry = now()->diffInDays($this->expiry_date, false);
        return $daysUntilExpiry <= 30 && $daysUntilExpiry > 0;
    }

    public function getDaysUntilExpiryAttribute(): ?int
    {
        if (!$this->expiry_date) {
            return null;
        }

        return now()->diffInDays($this->expiry_date, false);
    }

    public function getTotalValueAttribute(): float
    {
        return $this->quantity_on_hand * ($this->unit_cost ?? 0);
    }

    public function getUtilizationAttribute(): array
    {
        return [
            'on_hand' => $this->quantity_on_hand,
            'reserved' => $this->quantity_reserved,
            'available' => $this->quantity_available,
            'in_transit' => $this->quantity_in_transit,
            'on_order' => $this->quantity_on_order
        ];
    }

    // Methods
    public function reserve(int $quantity): bool
    {
        if ($quantity > $this->quantity_available) {
            return false;
        }

        $this->quantity_reserved += $quantity;
        $this->quantity_available -= $quantity;
        $this->status = $this->quantity_available > 0 ? self::STATUS_AVAILABLE : self::STATUS_RESERVED;

        return $this->save();
    }

    public function unreserve(int $quantity): bool
    {
        $newReserved = max(0, $this->quantity_reserved - $quantity);
        $reservedDiff = $this->quantity_reserved - $newReserved;

        $this->quantity_reserved = $newReserved;
        $this->quantity_available += $reservedDiff;
        $this->status = self::STATUS_AVAILABLE;

        return $this->save();
    }

    public function receive(int $quantity, ?float $unitCost = null): bool
    {
        $oldTotalValue = $this->total_value;
        $oldQuantity = $this->quantity_on_hand;

        $this->quantity_on_hand += $quantity;
        $this->quantity_available += $quantity;

        if ($unitCost) {
            // Weighted average cost calculation
            $newTotalValue = $oldTotalValue + ($quantity * $unitCost);
            $this->unit_cost = $newTotalValue / $this->quantity_on_hand;
        }

        $this->total_value = $this->quantity_on_hand * $this->unit_cost;
        $this->last_movement_date = now();
        $this->status = self::STATUS_AVAILABLE;

        return $this->save();
    }

    public function ship(int $quantity): bool
    {
        if ($quantity > $this->quantity_available) {
            return false;
        }

        $this->quantity_on_hand -= $quantity;
        $this->quantity_available -= $quantity;
        $this->last_movement_date = now();

        if ($this->quantity_on_hand <= 0) {
            $this->status = self::STATUS_AVAILABLE; // Will show as out of stock
        }

        return $this->save();
    }

    public function adjust(int $newQuantity, string $reason = ''): bool
    {
        $oldQuantity = $this->quantity_on_hand;
        $difference = $newQuantity - $oldQuantity;

        $this->quantity_on_hand = $newQuantity;
        $this->quantity_available = $newQuantity - $this->quantity_reserved;
        $this->total_value = $newQuantity * ($this->unit_cost ?? 0);
        $this->last_count_date = now();
        $this->last_movement_date = now();

        return $this->save();
    }

    public function moveToLocation(Location $newLocation, int $quantity): ?InventoryMovement
    {
        if ($quantity > $this->quantity_available) {
            return null;
        }

        // Find or create inventory at new location
        $targetInventory = self::firstOrCreate([
            'product_id' => $this->product_id,
            'warehouse_id' => $newLocation->warehouse_id,
            'location_id' => $newLocation->id,
            'batch_number' => $this->batch_number,
            'serial_number' => $this->serial_number,
            'expiry_date' => $this->expiry_date
        ], [
            'unit_cost' => $this->unit_cost,
            'status' => self::STATUS_AVAILABLE
        ]);

        // Reduce from source
        $this->ship($quantity);

        // Add to target
        $targetInventory->receive($quantity, $this->unit_cost);

        // Create movement record
        return InventoryMovement::create([
            'movement_number' => InventoryMovement::generateMovementNumber(),
            'product_id' => $this->product_id,
            'from_warehouse_id' => $this->warehouse_id,
            'to_warehouse_id' => $targetInventory->warehouse_id,
            'from_location_id' => $this->location_id,
            'to_location_id' => $targetInventory->location_id,
            'movement_type' => InventoryMovement::TYPE_TRANSFER,
            'batch_number' => $this->batch_number,
            'serial_number' => $this->serial_number,
            'quantity' => $quantity,
            'unit_cost' => $this->unit_cost,
            'total_cost' => $quantity * $this->unit_cost,
            'created_by' => Auth::id()
        ]);
    }
}
