<?php
// app/Models/Shipment.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Shipment extends Model
{
    use HasFactory;

    protected $fillable = [
        'shipment_number',
        'sales_order_id',
        'warehouse_id',
        'shipped_date',
        'delivery_date',
        'carrier',
        'tracking_number',
        'shipping_method',
        'shipping_cost',
        'status',
        'notes',
        'shipped_by'
    ];

    protected $casts = [
        'shipped_date' => 'datetime',
        'delivery_date' => 'datetime',
        'shipping_cost' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Status constants
    const STATUS_PENDING = 'pending';
    const STATUS_PACKED = 'packed';
    const STATUS_SHIPPED = 'shipped';
    const STATUS_DELIVERED = 'delivered';
    const STATUS_CANCELLED = 'cancelled';

    public static $statuses = [
        self::STATUS_PENDING => 'Pending',
        self::STATUS_PACKED => 'Packed',
        self::STATUS_SHIPPED => 'Shipped',
        self::STATUS_DELIVERED => 'Delivered',
        self::STATUS_CANCELLED => 'Cancelled'
    ];

    // Relationships
    public function salesOrder(): BelongsTo
    {
        return $this->belongsTo(SalesOrder::class);
    }

    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(ShipmentItem::class);
    }

    public function shippedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'shipped_by');
    }

    // Scopes
    public function scopePending($query)
    {
        return $query->where('status', self::STATUS_PENDING);
    }

    public function scopeShipped($query)
    {
        return $query->where('status', self::STATUS_SHIPPED);
    }

    public function scopeDelivered($query)
    {
        return $query->where('status', self::STATUS_DELIVERED);
    }

    public function scopeForSalesOrder($query, $soId)
    {
        return $query->where('sales_order_id', $soId);
    }

    public function scopeForWarehouse($query, $warehouseId)
    {
        return $query->where('warehouse_id', $warehouseId);
    }

    public function scopeByCarrier($query, $carrier)
    {
        return $query->where('carrier', $carrier);
    }

    public function scopeBetweenDates($query, $startDate, $endDate)
    {
        return $query->whereBetween('shipped_date', [$startDate, $endDate]);
    }

    // Accessors
    public function getStatusLabelAttribute(): string
    {
        return self::$statuses[$this->status] ?? $this->status;
    }

    public function getTotalItemsAttribute(): int
    {
        return $this->items->count();
    }

    public function getTotalQuantityAttribute(): int
    {
        return $this->items->sum('quantity_shipped');
    }

    public function getTrackingUrlAttribute(): ?string
    {
        if (!$this->tracking_number || !$this->carrier) {
            return null;
        }

        // Add carrier tracking URLs as needed
        $carrierUrls = [
            'UPS' => 'https://www.ups.com/track?tracknum=',
            'FedEx' => 'https://www.fedex.com/fedextrack/?trknbr=',
            'USPS' => 'https://tools.usps.com/go/TrackConfirmAction?tLabels=',
            'DHL' => 'https://www.dhl.com/en/express/tracking.html?AWB='
        ];

        return ($carrierUrls[$this->carrier] ?? null) . $this->tracking_number;
    }

    // Methods
    public static function generateShipmentNumber(): string
    {
        $prefix = 'SHIP';
        $year = now()->format('Y');
        $month = now()->format('m');

        $lastShipment = self::whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastShipment) {
            $lastNumber = intval(substr($lastShipment->shipment_number, -4));
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$year}{$month}-{$newNumber}";
    }

    public function markAsDelivered(?string $notes = null): self
    {
        $this->status = self::STATUS_DELIVERED;
        $this->delivery_date = now();

        if ($notes) {
            $this->notes = ($this->notes ? $this->notes . "\n" : '') . "Delivered: " . $notes;
        }

        $this->save();

        return $this;
    }
}
