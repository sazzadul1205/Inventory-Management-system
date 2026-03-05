<?php
// app/Models/Location.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Location extends Model
{
    use HasFactory;

    protected $fillable = [
        'warehouse_id',
        'location_code',
        'zone',
        'aisle',
        'rack',
        'shelf',
        'bin',
        'barcode',
        'max_capacity',
        'current_utilization',
        'is_active'
    ];

    protected $casts = [
        'max_capacity' => 'integer',
        'current_utilization' => 'integer',
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Relationships
    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeInWarehouse($query, $warehouseId)
    {
        return $query->where('warehouse_id', $warehouseId);
    }

    public function scopeInZone($query, $zone)
    {
        return $query->where('zone', $zone);
    }

    public function scopeByLocationCode($query, $locationCode)
    {
        return $query->where('location_code', 'LIKE', "%{$locationCode}%");
    }

    public function scopeAvailable($query)
    {
        return $query->whereRaw('current_utilization < max_capacity');
    }

    public function scopeFull($query)
    {
        return $query->whereRaw('current_utilization >= max_capacity');
    }

    public function scopeEmpty($query)
    {
        return $query->where('current_utilization', 0);
    }

    public function scopeWithBarcode($query)
    {
        return $query->whereNotNull('barcode');
    }

    // Accessors
    public function getFullLocationPathAttribute(): string
    {
        $parts = array_filter([
            $this->warehouse?->name,
            $this->zone,
            $this->aisle,
            $this->rack,
            $this->shelf,
            $this->bin
        ]);
        return implode(' > ', $parts);
    }

    public function getShortLocationPathAttribute(): string
    {
        return $this->location_code;
    }

    public function getAvailableCapacityAttribute(): int
    {
        return ($this->max_capacity ?? 0) - $this->current_utilization;
    }

    public function getUtilizationPercentageAttribute(): float
    {
        if (!$this->max_capacity || $this->max_capacity <= 0) {
            return 0;
        }
        return round(($this->current_utilization / $this->max_capacity) * 100, 2);
    }

    public function getIsAvailableAttribute(): bool
    {
        return $this->is_active && $this->available_capacity > 0;
    }

    public function getIsFullAttribute(): bool
    {
        return $this->max_capacity && $this->current_utilization >= $this->max_capacity;
    }

    public function getLocationHierarchyAttribute(): array
    {
        return [
            'warehouse' => $this->warehouse?->name,
            'zone' => $this->zone,
            'aisle' => $this->aisle,
            'rack' => $this->rack,
            'shelf' => $this->shelf,
            'bin' => $this->bin
        ];
    }

    public function getBarcodeOrCodeAttribute(): string
    {
        return $this->barcode ?? $this->location_code;
    }

    // Methods
    public function canAccommodate(int $quantity): bool
    {
        return $this->is_active && $this->available_capacity >= $quantity;
    }

    public function reserveSpace(int $quantity): bool
    {
        if (!$this->canAccommodate($quantity)) {
            return false;
        }

        $this->current_utilization += $quantity;
        return $this->save();
    }

    public function releaseSpace(int $quantity): bool
    {
        $newUtilization = max(0, $this->current_utilization - $quantity);
        $this->current_utilization = $newUtilization;
        return $this->save();
    }

    public function clearSpace(): bool
    {
        $this->current_utilization = 0;
        return $this->save();
    }

    // Static methods
    public static function generateLocationCode($warehouseCode, $zone, $aisle, $rack, $shelf, $bin): string
    {
        $parts = array_filter([
            $warehouseCode,
            $zone,
            $aisle,
            $rack,
            $shelf,
            $bin
        ]);
        return implode('-', $parts);
    }

    /**
     * Get the inventory at this location
     */
    public function inventory(): HasMany
    {
        return $this->hasMany(Inventory::class);
    }

    /**
     * Get the stock transfer items from this location
     */
    public function fromStockTransferItems(): HasMany
    {
        return $this->hasMany(StockTransferItem::class, 'from_location_id');
    }

    /**
     * Get the stock transfer items to this location
     */
    public function toStockTransferItems(): HasMany
    {
        return $this->hasMany(StockTransferItem::class, 'to_location_id');
    }

    /**
     * Get the stock count items at this location
     */
    public function stockCountItems(): HasMany
    {
        return $this->hasMany(StockCountItem::class);
    }

    /**
     * Get the purchase receipt items at this location
     */
    public function purchaseReceiptItems(): HasMany
    {
        return $this->hasMany(PurchaseReceiptItem::class);
    }

    /**
     * Get the shipment items from this location
     */
    public function shipmentItems(): HasMany
    {
        return $this->hasMany(ShipmentItem::class);
    }
}
