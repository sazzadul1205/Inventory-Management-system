<?php
// app/Models/Location.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

/**
 * Location Model
 * 
 * Represents a physical storage location within a warehouse with hierarchical
 * addressing (zone, aisle, rack, shelf, bin). Tracks capacity utilization and
 * provides location management functionality for inventory placement and
 * movement operations.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property int $warehouse_id
 * @property string $location_code
 * @property string|null $zone
 * @property string|null $aisle
 * @property string|null $rack
 * @property string|null $shelf
 * @property string|null $bin
 * @property string|null $barcode
 * @property int|null $max_capacity
 * @property int $current_utilization
 * @property bool $is_active
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read Warehouse $warehouse
 * @property-read Collection|Inventory[] $inventory
 * @property-read Collection|StockTransferItem[] $fromStockTransferItems
 * @property-read Collection|StockTransferItem[] $toStockTransferItems
 * @property-read Collection|StockCountItem[] $stockCountItems
 * @property-read Collection|PurchaseReceiptItem[] $purchaseReceiptItems
 * @property-read Collection|ShipmentItem[] $shipmentItems
 * @property-read string $full_location_path
 * @property-read string $short_location_path
 * @property-read int $available_capacity
 * @property-read float $utilization_percentage
 * @property-read bool $is_available
 * @property-read bool $is_full
 * @property-read array $location_hierarchy
 * @property-read string $barcode_or_code
 */
class Location extends Model
{
    use HasFactory;

    /**
     * --------------------------------------------------------------------------
     * Configuration
     * --------------------------------------------------------------------------
     */

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
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

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'max_capacity' => 'integer',
        'current_utilization' => 'integer',
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'current_utilization' => 0,
        'is_active' => true
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the warehouse that contains this location.
     *
     * @return BelongsTo
     */
    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    /**
     * Get all inventory items stored at this location.
     *
     * @return HasMany
     */
    public function inventory(): HasMany
    {
        return $this->hasMany(Inventory::class);
    }

    /**
     * Get stock transfer items originating from this location.
     *
     * @return HasMany
     */
    public function fromStockTransferItems(): HasMany
    {
        return $this->hasMany(StockTransferItem::class, 'from_location_id');
    }

    /**
     * Get stock transfer items destined for this location.
     *
     * @return HasMany
     */
    public function toStockTransferItems(): HasMany
    {
        return $this->hasMany(StockTransferItem::class, 'to_location_id');
    }

    /**
     * Get stock count items recorded at this location.
     *
     * @return HasMany
     */
    public function stockCountItems(): HasMany
    {
        return $this->hasMany(StockCountItem::class);
    }

    /**
     * Get purchase receipt items stored at this location.
     *
     * @return HasMany
     */
    public function purchaseReceiptItems(): HasMany
    {
        return $this->hasMany(PurchaseReceiptItem::class);
    }

    /**
     * Get shipment items picked from this location.
     *
     * @return HasMany
     */
    public function shipmentItems(): HasMany
    {
        return $this->hasMany(ShipmentItem::class);
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to only include active locations.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope to filter by warehouse.
     *
     * @param Builder $query
     * @param int $warehouseId
     * @return Builder
     */
    public function scopeInWarehouse(Builder $query, int $warehouseId): Builder
    {
        return $query->where('warehouse_id', $warehouseId);
    }

    /**
     * Scope to filter by zone.
     *
     * @param Builder $query
     * @param string $zone
     * @return Builder
     */
    public function scopeInZone(Builder $query, string $zone): Builder
    {
        return $query->where('zone', $zone);
    }

    /**
     * Scope to search by location code.
     *
     * @param Builder $query
     * @param string $locationCode
     * @return Builder
     */
    public function scopeByLocationCode(Builder $query, string $locationCode): Builder
    {
        return $query->where('location_code', 'LIKE', "%{$locationCode}%");
    }

    /**
     * Scope to only include locations with available capacity.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeAvailable(Builder $query): Builder
    {
        return $query->whereRaw('current_utilization < max_capacity')
            ->where('is_active', true);
    }

    /**
     * Scope to only include full locations.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeFull(Builder $query): Builder
    {
        return $query->whereRaw('current_utilization >= max_capacity');
    }

    /**
     * Scope to only include empty locations.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeEmpty(Builder $query): Builder
    {
        return $query->where('current_utilization', 0);
    }

    /**
     * Scope to only include locations with barcode.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithBarcode(Builder $query): Builder
    {
        return $query->whereNotNull('barcode');
    }

    /**
     * Scope to filter by capacity threshold.
     *
     * @param Builder $query
     * @param int $percentage
     * @return Builder
     */
    public function scopeUtilizationAbove(Builder $query, int $percentage): Builder
    {
        return $query->whereRaw('(current_utilization * 100 / max_capacity) >= ?', [$percentage]);
    }

    /**
     * Scope to filter by capacity threshold.
     *
     * @param Builder $query
     * @param int $percentage
     * @return Builder
     */
    public function scopeUtilizationBelow(Builder $query, int $percentage): Builder
    {
        return $query->whereRaw('(current_utilization * 100 / max_capacity) <= ?', [$percentage]);
    }

    /**
     * Scope to get locations with their warehouse details.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithWarehouseDetails(Builder $query): Builder
    {
        return $query->with(['warehouse' => function ($q) {
            $q->select('id', 'name', 'code');
        }]);
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get the full hierarchical location path.
     * Format: Warehouse > Zone > Aisle > Rack > Shelf > Bin
     *
     * @return string
     */
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

    /**
     * Get the short location path (just the location code).
     *
     * @return string
     */
    public function getShortLocationPathAttribute(): string
    {
        return $this->location_code;
    }

    /**
     * Calculate available capacity.
     *
     * @return int
     */
    public function getAvailableCapacityAttribute(): int
    {
        if (is_null($this->max_capacity)) {
            return PHP_INT_MAX; // Unlimited capacity
        }

        return max(0, $this->max_capacity - $this->current_utilization);
    }

    /**
     * Calculate utilization percentage.
     *
     * @return float
     */
    public function getUtilizationPercentageAttribute(): float
    {
        if (!$this->max_capacity || $this->max_capacity <= 0) {
            return 0;
        }

        return round(($this->current_utilization / $this->max_capacity) * 100, 2);
    }

    /**
     * Check if location is available for storage.
     *
     * @return bool
     */
    public function getIsAvailableAttribute(): bool
    {
        return $this->is_active && $this->available_capacity > 0;
    }

    /**
     * Check if location is full.
     *
     * @return bool
     */
    public function getIsFullAttribute(): bool
    {
        return $this->max_capacity && $this->current_utilization >= $this->max_capacity;
    }

    /**
     * Get location hierarchy as an array.
     *
     * @return array<string, string|null>
     */
    public function getLocationHierarchyAttribute(): array
    {
        return [
            'warehouse' => $this->warehouse?->name,
            'warehouse_id' => $this->warehouse_id,
            'zone' => $this->zone,
            'aisle' => $this->aisle,
            'rack' => $this->rack,
            'shelf' => $this->shelf,
            'bin' => $this->bin
        ];
    }

    /**
     * Get barcode or fallback to location code.
     *
     * @return string
     */
    public function getBarcodeOrCodeAttribute(): string
    {
        return $this->barcode ?? $this->location_code;
    }

    /**
     * Get location type based on hierarchy depth.
     *
     * @return string
     */
    public function getLocationTypeAttribute(): string
    {
        return match (true) {
            !is_null($this->bin) => 'Bin',
            !is_null($this->shelf) => 'Shelf',
            !is_null($this->rack) => 'Rack',
            !is_null($this->aisle) => 'Aisle',
            !is_null($this->zone) => 'Zone',
            default => 'Area'
        };
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Check if location can accommodate a quantity.
     *
     * @param int $quantity
     * @return bool
     */
    public function canAccommodate(int $quantity): bool
    {
        return $this->is_active && $this->available_capacity >= $quantity;
    }

    /**
     * Reserve space in this location.
     *
     * @param int $quantity
     * @return bool
     */
    public function reserveSpace(int $quantity): bool
    {
        if (!$this->canAccommodate($quantity)) {
            return false;
        }

        return DB::transaction(function () use ($quantity) {
            $this->current_utilization += $quantity;
            return $this->save();
        });
    }

    /**
     * Release space from this location.
     *
     * @param int $quantity
     * @return bool
     */
    public function releaseSpace(int $quantity): bool
    {
        return DB::transaction(function () use ($quantity) {
            $this->current_utilization = max(0, $this->current_utilization - $quantity);
            return $this->save();
        });
    }

    /**
     * Clear all space in this location.
     *
     * @return bool
     */
    public function clearSpace(): bool
    {
        return DB::transaction(function () {
            $this->current_utilization = 0;
            return $this->save();
        });
    }

    /**
     * Update capacity settings.
     *
     * @param int|null $maxCapacity
     * @return bool
     */
    public function updateCapacity(?int $maxCapacity): bool
    {
        if ($maxCapacity !== null && $maxCapacity < $this->current_utilization) {
            return false; // Cannot set capacity below current utilization
        }

        $this->max_capacity = $maxCapacity;
        return $this->save();
    }

    /**
     * Activate this location.
     *
     * @return bool
     */
    public function activate(): bool
    {
        $this->is_active = true;
        return $this->save();
    }

    /**
     * Deactivate this location.
     *
     * @return bool
     * @throws \Exception
     */
    public function deactivate(): bool
    {
        // Check if location has inventory
        if ($this->current_utilization > 0) {
            throw new \Exception('Cannot deactivate location with existing inventory.');
        }

        $this->is_active = false;
        return $this->save();
    }

    /**
     * Generate a location code from components.
     *
     * @param string|null $warehouseCode
     * @param string|null $zone
     * @param string|null $aisle
     * @param string|null $rack
     * @param string|null $shelf
     * @param string|null $bin
     * @return string
     */
    public static function generateLocationCode(
        ?string $warehouseCode,
        ?string $zone,
        ?string $aisle,
        ?string $rack,
        ?string $shelf,
        ?string $bin
    ): string {
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
     * Get or create a location by path.
     *
     * @param int $warehouseId
     * @param array $hierarchy
     * @return self
     */
    public static function findOrCreateByPath(int $warehouseId, array $hierarchy): self
    {
        $locationCode = self::generateLocationCode(
            $hierarchy['warehouse_code'] ?? null,
            $hierarchy['zone'] ?? null,
            $hierarchy['aisle'] ?? null,
            $hierarchy['rack'] ?? null,
            $hierarchy['shelf'] ?? null,
            $hierarchy['bin'] ?? null
        );

        return self::firstOrCreate(
            [
                'warehouse_id' => $warehouseId,
                'location_code' => $locationCode
            ],
            [
                'zone' => $hierarchy['zone'] ?? null,
                'aisle' => $hierarchy['aisle'] ?? null,
                'rack' => $hierarchy['rack'] ?? null,
                'shelf' => $hierarchy['shelf'] ?? null,
                'bin' => $hierarchy['bin'] ?? null,
                'is_active' => true
            ]
        );
    }

    /**
     * --------------------------------------------------------------------------
     * Boot Methods
     * --------------------------------------------------------------------------
     */

    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted(): void
    {
        // Auto-generate location code if not provided
        static::creating(function (self $location) {
            if (empty($location->location_code)) {
                $location->location_code = self::generateLocationCode(
                    $location->warehouse?->code,
                    $location->zone,
                    $location->aisle,
                    $location->rack,
                    $location->shelf,
                    $location->bin
                );
            }
        });

        // Validate utilization doesn't exceed capacity
        static::saving(function (self $location) {
            if ($location->max_capacity && $location->current_utilization > $location->max_capacity) {
                return false;
            }
            return true;
        });

        // Clean up related records before deletion
        static::deleting(function (self $location) {
            if ($location->current_utilization > 0) {
                throw new \Exception('Cannot delete location with existing inventory.');
            }

            // Soft delete would be better, but for hard delete check related records
            if ($location->inventory()->exists()) {
                throw new \Exception('Cannot delete location with associated inventory records.');
            }
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get warehouse capacity summary.
     *
     * @param int $warehouseId
     * @return array<string, mixed>
     */
    public static function getWarehouseCapacitySummary(int $warehouseId): array
    {
        $stats = self::inWarehouse($warehouseId)
            ->select(
                DB::raw('COUNT(*) as total_locations'),
                DB::raw('SUM(max_capacity) as total_capacity'),
                DB::raw('SUM(current_utilization) as total_utilization'),
                DB::raw('COUNT(CASE WHEN is_active = 1 THEN 1 END) as active_locations'),
                DB::raw('COUNT(CASE WHEN current_utilization = 0 THEN 1 END) as empty_locations'),
                DB::raw('COUNT(CASE WHEN current_utilization >= max_capacity THEN 1 END) as full_locations')
            )
            ->first();

        $statsArray = $stats->toArray();
        $statsArray['utilization_percentage'] = $stats->total_capacity > 0
            ? round(($stats->total_utilization / $stats->total_capacity) * 100, 2)
            : 0;

        return $statsArray;
    }

    /**
     * Get zone utilization breakdown.
     *
     * @param int $warehouseId
     * @return Collection
     */
    public static function getZoneUtilization(int $warehouseId): Collection
    {
        return self::inWarehouse($warehouseId)
            ->whereNotNull('zone')
            ->select(
                'zone',
                DB::raw('COUNT(*) as location_count'),
                DB::raw('SUM(max_capacity) as total_capacity'),
                DB::raw('SUM(current_utilization) as current_utilization')
            )
            ->groupBy('zone')
            ->get();
    }

    /**
     * Get locations needing attention (high/low utilization).
     *
     * @param int $warehouseId
     * @param int $highThreshold
     * @param int $lowThreshold
     * @return Collection
     */
    public static function getLocationsNeedingAttention(
        int $warehouseId,
        int $highThreshold = 90,
        int $lowThreshold = 10
    ): Collection {
        return self::inWarehouse($warehouseId)
            ->active()
            ->whereNotNull('max_capacity')
            ->where(function ($query) use ($highThreshold, $lowThreshold) {
                $query->whereRaw('(current_utilization * 100 / max_capacity) >= ?', [$highThreshold])
                    ->orWhereRaw('(current_utilization * 100 / max_capacity) <= ?', [$lowThreshold]);
            })
            ->with('warehouse')
            ->get();
    }

    /**
     * --------------------------------------------------------------------------
     * Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get location for barcode scanning.
     *
     * @param string $barcode
     * @return self|null
     */
    public static function findByBarcode(string $barcode): ?self
    {
        return self::where('barcode', $barcode)
            ->orWhere('location_code', $barcode)
            ->first();
    }

    /**
     * Format location for dropdown options.
     *
     * @return array
     */
    public function toSelectOption(): array
    {
        return [
            'id' => $this->id,
            'code' => $this->location_code,
            'path' => $this->full_location_path,
            'available' => $this->available_capacity,
            'is_available' => $this->is_available,
            'utilization' => $this->utilization_percentage
        ];
    }
}
