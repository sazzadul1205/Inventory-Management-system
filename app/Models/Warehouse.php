<?php
// app/Models/Warehouse.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Warehouse extends Model
{
    use HasFactory;

    protected $fillable = [
        'warehouse_code',
        'name',
        'type',
        'address',
        'city',
        'state',
        'country',
        'postal_code',
        'phone',
        'email',
        'manager_id',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Constants for warehouse types
    const TYPE_MAIN = 'main';
    const TYPE_DISTRIBUTION = 'distribution';
    const TYPE_STORAGE = 'storage';
    const TYPE_TRANSIT = 'transit';

    public static $types = [
        self::TYPE_MAIN => 'Main Warehouse',
        self::TYPE_DISTRIBUTION => 'Distribution Center',
        self::TYPE_STORAGE => 'Storage Facility',
        self::TYPE_TRANSIT => 'Transit Hub'
    ];

    // Relationships
    public function manager(): BelongsTo
    {
        return $this->belongsTo(User::class, 'manager_id');
    }

    public function locations(): HasMany
    {
        return $this->hasMany(Location::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeOfType($query, $type)
    {
        return $query->where('type', $type);
    }

    public function scopeByCountry($query, $country)
    {
        return $query->where('country', $country);
    }

    public function scopeByCity($query, $city)
    {
        return $query->where('city', $city);
    }

    public function scopeWithManager($query)
    {
        return $query->whereNotNull('manager_id');
    }

    // Accessors
    public function getTypeLabelAttribute(): string
    {
        return self::$types[$this->type] ?? $this->type;
    }

    public function getFullAddressAttribute(): string
    {
        $parts = array_filter([
            $this->address,
            $this->city,
            $this->state,
            $this->postal_code,
            $this->country
        ]);
        return implode(', ', $parts);
    }

    public function getLocationsCountAttribute(): int
    {
        return $this->locations()->count();
    }

    public function getActiveLocationsCountAttribute(): int
    {
        return $this->locations()->where('is_active', true)->count();
    }

    public function getTotalCapacityAttribute(): int
    {
        return $this->locations()->sum('max_capacity');
    }

    public function getTotalUtilizationAttribute(): int
    {
        return $this->locations()->sum('current_utilization');
    }

    public function getUtilizationPercentageAttribute(): float
    {
        $totalCapacity = $this->total_capacity;
        if ($totalCapacity <= 0) {
            return 0;
        }
        return round(($this->total_utilization / $totalCapacity) * 100, 2);
    }

    // Methods
    public function isFull(): bool
    {
        return $this->utilization_percentage >= 100;
    }

    public function hasAvailableSpace(): bool
    {
        return $this->utilization_percentage < 100;
    }


    /**
     * Get the inventory records for this warehouse
     */
    public function inventory(): HasMany
    {
        return $this->hasMany(Inventory::class);
    }

    /**
     * Get the purchase orders for this warehouse
     */
    public function purchaseOrders(): HasMany
    {
        return $this->hasMany(PurchaseOrder::class);
    }

    /**
     * Get the sales orders for this warehouse
     */
    public function salesOrders(): HasMany
    {
        return $this->hasMany(SalesOrder::class);
    }

    /**
     * Get the shipments from this warehouse
     */
    public function shipments(): HasMany
    {
        return $this->hasMany(Shipment::class);
    }

    /**
     * Get the stock transfers from this warehouse
     */
    public function fromStockTransfers(): HasMany
    {
        return $this->hasMany(StockTransfer::class, 'from_warehouse_id');
    }

    /**
     * Get the stock transfers to this warehouse
     */
    public function toStockTransfers(): HasMany
    {
        return $this->hasMany(StockTransfer::class, 'to_warehouse_id');
    }

    /**
     * Get the stock counts for this warehouse
     */
    public function stockCounts(): HasMany
    {
        return $this->hasMany(StockCount::class);
    }

    /**
     * Get the purchase receipts for this warehouse
     */
    public function purchaseReceipts(): HasMany
    {
        return $this->hasMany(PurchaseReceipt::class);
    }
}
