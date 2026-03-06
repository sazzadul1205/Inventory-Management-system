<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

/**
 * Warehouse Model
 * 
 * Represents a physical warehouse or storage facility in the inventory system.
 * Manages warehouse information, capacity tracking, and relationships with
 * locations, inventory, orders, and shipments. Supports different warehouse
 * types (main, distribution, storage, transit) for flexible logistics management.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $warehouse_code
 * @property string $name
 * @property string $type
 * @property string|null $address
 * @property string|null $city
 * @property string|null $state
 * @property string|null $country
 * @property string|null $postal_code
 * @property string|null $phone
 * @property string|null $email
 * @property int|null $manager_id
 * @property bool $is_active
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read User|null $manager
 * @property-read Collection|Location[] $locations
 * @property-read Collection|Inventory[] $inventory
 * @property-read Collection|PurchaseOrder[] $purchaseOrders
 * @property-read Collection|SalesOrder[] $salesOrders
 * @property-read Collection|Shipment[] $shipments
 * @property-read Collection|StockTransfer[] $fromStockTransfers
 * @property-read Collection|StockTransfer[] $toStockTransfers
 * @property-read Collection|StockCount[] $stockCounts
 * @property-read Collection|PurchaseReceipt[] $purchaseReceipts
 * @property-read string $type_label
 * @property-read string $full_address
 * @property-read int $locations_count
 * @property-read int $active_locations_count
 * @property-read int $total_capacity
 * @property-read int $total_utilization
 * @property-read float $utilization_percentage
 * @property-read bool $is_full
 * @property-read bool $has_available_space
 * @property-read string $status_label
 * @property-read string $display_name
 */
class Warehouse extends Model
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

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
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
        'type' => self::TYPE_MAIN,
        'is_active' => true
    ];

    /**
     * --------------------------------------------------------------------------
     * Type Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Main/primary warehouse */
    const TYPE_MAIN = 'main';

    /** @var string Distribution center */
    const TYPE_DISTRIBUTION = 'distribution';

    /** @var string Storage facility */
    const TYPE_STORAGE = 'storage';

    /** @var string Transit hub/cross-dock */
    const TYPE_TRANSIT = 'transit';

    /**
     * Human-readable type labels.
     *
     * @var array<string, string>
     */
    public static $types = [
        self::TYPE_MAIN => 'Main Warehouse',
        self::TYPE_DISTRIBUTION => 'Distribution Center',
        self::TYPE_STORAGE => 'Storage Facility',
        self::TYPE_TRANSIT => 'Transit Hub'
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the user who manages this warehouse.
     *
     * @return BelongsTo
     */
    public function manager(): BelongsTo
    {
        return $this->belongsTo(User::class, 'manager_id');
    }

    /**
     * Get all locations (bins, shelves, etc.) in this warehouse.
     *
     * @return HasMany
     */
    public function locations(): HasMany
    {
        return $this->hasMany(Location::class);
    }

    /**
     * Get all inventory records in this warehouse.
     *
     * @return HasMany
     */
    public function inventory(): HasMany
    {
        return $this->hasMany(Inventory::class);
    }

    /**
     * Get all purchase orders destined for this warehouse.
     *
     * @return HasMany
     */
    public function purchaseOrders(): HasMany
    {
        return $this->hasMany(PurchaseOrder::class);
    }

    /**
     * Get all sales orders fulfilled from this warehouse.
     *
     * @return HasMany
     */
    public function salesOrders(): HasMany
    {
        return $this->hasMany(SalesOrder::class);
    }

    /**
     * Get all shipments sent from this warehouse.
     *
     * @return HasMany
     */
    public function shipments(): HasMany
    {
        return $this->hasMany(Shipment::class);
    }

    /**
     * Get all stock transfers originating from this warehouse.
     *
     * @return HasMany
     */
    public function fromStockTransfers(): HasMany
    {
        return $this->hasMany(StockTransfer::class, 'from_warehouse_id');
    }

    /**
     * Get all stock transfers destined for this warehouse.
     *
     * @return HasMany
     */
    public function toStockTransfers(): HasMany
    {
        return $this->hasMany(StockTransfer::class, 'to_warehouse_id');
    }

    /**
     * Get all stock counts performed in this warehouse.
     *
     * @return HasMany
     */
    public function stockCounts(): HasMany
    {
        return $this->hasMany(StockCount::class);
    }

    /**
     * Get all purchase receipts received at this warehouse.
     *
     * @return HasMany
     */
    public function purchaseReceipts(): HasMany
    {
        return $this->hasMany(PurchaseReceipt::class);
    }

    /**
     * Get active locations in this warehouse.
     *
     * @return HasMany
     */
    public function activeLocations(): HasMany
    {
        return $this->locations()->where('is_active', true);
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to only include active warehouses.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope to filter by warehouse type.
     *
     * @param Builder $query
     * @param string $type
     * @return Builder
     */
    public function scopeOfType(Builder $query, string $type): Builder
    {
        return $query->where('type', $type);
    }

    /**
     * Scope to filter by country.
     *
     * @param Builder $query
     * @param string $country
     * @return Builder
     */
    public function scopeByCountry(Builder $query, string $country): Builder
    {
        return $query->where('country', $country);
    }

    /**
     * Scope to filter by city.
     *
     * @param Builder $query
     * @param string $city
     * @return Builder
     */
    public function scopeByCity(Builder $query, string $city): Builder
    {
        return $query->where('city', $city);
    }

    /**
     * Scope to warehouses with a manager assigned.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithManager(Builder $query): Builder
    {
        return $query->whereNotNull('manager_id');
    }

    /**
     * Scope to warehouses without a manager.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithoutManager(Builder $query): Builder
    {
        return $query->whereNull('manager_id');
    }

    /**
     * Scope to search warehouses by name, code, or location.
     *
     * @param Builder $query
     * @param string $search
     * @return Builder
     */
    public function scopeSearch(Builder $query, string $search): Builder
    {
        return $query->where(function ($q) use ($search) {
            $q->where('name', 'like', "%{$search}%")
                ->orWhere('warehouse_code', 'like', "%{$search}%")
                ->orWhere('city', 'like', "%{$search}%")
                ->orWhere('country', 'like', "%{$search}%");
        });
    }

    /**
     * Scope to warehouses with available capacity.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithAvailableSpace(Builder $query): Builder
    {
        return $query->whereHas('locations', function ($q) {
            $q->whereRaw('current_utilization < max_capacity');
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get human-readable type label.
     *
     * @return string
     */
    public function getTypeLabelAttribute(): string
    {
        return self::$types[$this->type] ?? ucfirst($this->type);
    }

    /**
     * Get the full formatted address.
     *
     * @return string
     */
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

    /**
     * Get total number of locations.
     *
     * @return int
     */
    public function getLocationsCountAttribute(): int
    {
        return $this->locations()->count();
    }

    /**
     * Get number of active locations.
     *
     * @return int
     */
    public function getActiveLocationsCountAttribute(): int
    {
        return $this->activeLocations()->count();
    }

    /**
     * Calculate total storage capacity.
     *
     * @return int
     */
    public function getTotalCapacityAttribute(): int
    {
        return $this->locations()->sum('max_capacity');
    }

    /**
     * Calculate total current utilization.
     *
     * @return int
     */
    public function getTotalUtilizationAttribute(): int
    {
        return $this->locations()->sum('current_utilization');
    }

    /**
     * Calculate overall utilization percentage.
     *
     * @return float
     */
    public function getUtilizationPercentageAttribute(): float
    {
        $totalCapacity = $this->total_capacity;

        if ($totalCapacity <= 0) {
            return 0;
        }

        return round(($this->total_utilization / $totalCapacity) * 100, 2);
    }

    /**
     * Check if warehouse is full.
     *
     * @return bool
     */
    public function getIsFullAttribute(): bool
    {
        return $this->utilization_percentage >= 100;
    }

    /**
     * Check if warehouse has available space.
     *
     * @return bool
     */
    public function getHasAvailableSpaceAttribute(): bool
    {
        return $this->utilization_percentage < 100;
    }

    /**
     * Get status label.
     *
     * @return string
     */
    public function getStatusLabelAttribute(): string
    {
        return $this->is_active ? 'Active' : 'Inactive';
    }

    /**
     * Get display name with code.
     *
     * @return string
     */
    public function getDisplayNameAttribute(): string
    {
        return "{$this->name} ({$this->warehouse_code})";
    }

    /**
     * Get available capacity.
     *
     * @return int
     */
    public function getAvailableCapacityAttribute(): int
    {
        return $this->total_capacity - $this->total_utilization;
    }

    /**
     * Get warehouse summary.
     *
     * @return array
     */
    public function getSummaryAttribute(): array
    {
        return [
            'id' => $this->id,
            'code' => $this->warehouse_code,
            'name' => $this->name,
            'type' => $this->type_label,
            'location' => $this->city . ', ' . $this->country,
            'manager' => $this->manager?->name,
            'locations' => $this->locations_count,
            'active_locations' => $this->active_locations_count,
            'capacity' => [
                'total' => $this->total_capacity,
                'utilized' => $this->total_utilization,
                'available' => $this->available_capacity,
                'percentage' => $this->utilization_percentage . '%'
            ],
            'status' => $this->status_label
        ];
    }

    /**
     * Get manager name (shortcut).
     *
     * @return string|null
     */
    public function getManagerNameAttribute(): ?string
    {
        return $this->manager?->name;
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Check if warehouse is full.
     *
     * @return bool
     */
    public function isFull(): bool
    {
        return $this->is_full;
    }

    /**
     * Check if warehouse has available space.
     *
     * @return bool
     */
    public function hasAvailableSpace(): bool
    {
        return $this->has_available_space;
    }

    /**
     * Generate a unique warehouse code.
     *
     * @param string $name
     * @return string
     */
    public static function generateWarehouseCode(string $name): string
    {
        $prefix = 'WH';
        $namePart = strtoupper(substr(preg_replace('/[^a-zA-Z]/', '', $name), 0, 3));

        $lastWarehouse = self::orderBy('id', 'desc')->first();

        if ($lastWarehouse && preg_match('/-(\d{3})$/', $lastWarehouse->warehouse_code, $matches)) {
            $lastNumber = (int) $matches[1];
            $newNumber = str_pad($lastNumber + 1, 3, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '001';
        }

        return "{$prefix}-{$namePart}-{$newNumber}";
    }

    /**
     * Activate the warehouse.
     *
     * @return bool
     */
    public function activate(): bool
    {
        $this->is_active = true;
        return $this->save();
    }

    /**
     * Deactivate the warehouse.
     *
     * @return bool
     * @throws \Exception
     */
    public function deactivate(): bool
    {
        // Check if warehouse has active inventory
        if ($this->inventory()->where('quantity_on_hand', '>', 0)->exists()) {
            throw new \Exception('Cannot deactivate warehouse with existing inventory.');
        }

        // Check for active orders
        if ($this->purchaseOrders()->whereIn('status', [
            PurchaseOrder::STATUS_PENDING,
            PurchaseOrder::STATUS_APPROVED,
            PurchaseOrder::STATUS_SHIPPED
        ])->exists()) {
            throw new \Exception('Cannot deactivate warehouse with active purchase orders.');
        }

        if ($this->salesOrders()->whereIn('status', [
            SalesOrder::STATUS_APPROVED,
            SalesOrder::STATUS_PROCESSING,
            SalesOrder::STATUS_PARTIALLY_SHIPPED
        ])->exists()) {
            throw new \Exception('Cannot deactivate warehouse with active sales orders.');
        }

        $this->is_active = false;
        return $this->save();
    }

    /**
     * Assign a manager to this warehouse.
     *
     * @param User $user
     * @return bool
     */
    public function assignManager(User $user): bool
    {
        $this->manager_id = $user->id;
        return $this->save();
    }

    /**
     * Remove the current manager.
     *
     * @return bool
     */
    public function removeManager(): bool
    {
        $this->manager_id = null;
        return $this->save();
    }

    /**
     * Get capacity breakdown by location type.
     *
     * @return Collection
     */
    public function getCapacityBreakdown(): Collection
    {
        return $this->locations()
            ->selectRaw('
                CASE 
                    WHEN bin IS NOT NULL THEN "Bin"
                    WHEN shelf IS NOT NULL THEN "Shelf"
                    WHEN rack IS NOT NULL THEN "Rack"
                    WHEN aisle IS NOT NULL THEN "Aisle"
                    WHEN zone IS NOT NULL THEN "Zone"
                    ELSE "Area"
                END as location_type,
                COUNT(*) as count,
                SUM(max_capacity) as total_capacity,
                SUM(current_utilization) as total_utilization
            ')
            ->groupBy('location_type')
            ->get();
    }

    /**
     * Get warehouses with low capacity.
     *
     * @param float $threshold
     * @return Collection
     */
    public static function getLowCapacityWarehouses(float $threshold = 90): Collection
    {
        return self::active()
            ->get()
            ->filter(fn($warehouse) => $warehouse->utilization_percentage >= $threshold)
            ->values();
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
        // Auto-generate warehouse code
        static::creating(function (self $warehouse) {
            if (empty($warehouse->warehouse_code)) {
                $warehouse->warehouse_code = self::generateWarehouseCode($warehouse->name);
            }
        });

        // Validate manager assignment
        static::saving(function (self $warehouse) {
            if ($warehouse->manager_id) {
                $manager = User::find($warehouse->manager_id);

                if (!$manager || !$manager->is_active) {
                    return false;
                }
            }

            return true;
        });

        // Clean up related records before deletion
        static::deleting(function (self $warehouse) {
            if ($warehouse->locations()->exists()) {
                throw new \Exception('Cannot delete warehouse with existing locations.');
            }

            if ($warehouse->inventory()->exists()) {
                throw new \Exception('Cannot delete warehouse with existing inventory.');
            }

            if (
                $warehouse->purchaseOrders()->exists() ||
                $warehouse->salesOrders()->exists() ||
                $warehouse->shipments()->exists()
            ) {
                throw new \Exception('Cannot delete warehouse with associated orders or shipments.');
            }
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get warehouse statistics.
     *
     * @return array<string, mixed>
     */
    public static function getStatistics(): array
    {
        $totalWarehouses = self::count();
        $activeWarehouses = self::active()->count();

        $byType = self::select('type', DB::raw('COUNT(*) as count'))
            ->groupBy('type')
            ->get()
            ->keyBy('type');

        $capacityStats = self::selectRaw('
            SUM(total_capacity) as total_capacity,
            SUM(total_utilization) as total_utilization,
            AVG(utilization_percentage) as avg_utilization
        )')->first();

        return [
            'total_warehouses' => $totalWarehouses,
            'active_warehouses' => $activeWarehouses,
            'inactive_warehouses' => $totalWarehouses - $activeWarehouses,
            'by_type' => $byType,
            'total_capacity' => $capacityStats->total_capacity ?? 0,
            'total_utilization' => $capacityStats->total_utilization ?? 0,
            'average_utilization' => round($capacityStats->avg_utilization ?? 0, 2),
            'activity_rate' => $totalWarehouses > 0
                ? round(($activeWarehouses / $totalWarehouses) * 100, 2)
                : 0
        ];
    }

    /**
     * --------------------------------------------------------------------------
     * Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Format for select dropdown.
     *
     * @return array
     */
    public function toSelectOption(): array
    {
        return [
            'id' => $this->id,
            'text' => $this->display_name,
            'code' => $this->warehouse_code,
            'location' => $this->city . ', ' . $this->country,
            'capacity' => $this->available_capacity,
            'is_active' => $this->is_active
        ];
    }

    /**
     * Get warehouse card data for dashboard.
     *
     * @return array
     */
    public function toCardData(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'code' => $this->warehouse_code,
            'type' => $this->type_label,
            'location' => $this->city . ', ' . $this->country,
            'manager' => $this->manager_name,
            'locations' => $this->locations_count,
            'utilization' => $this->utilization_percentage . '%',
            'status' => $this->status_label,
            'is_full' => $this->is_full
        ];
    }

    /**
     * Get inventory summary for this warehouse.
     *
     * @return array
     */
    public function getInventorySummary(): array
    {
        $inventory = $this->inventory()
            ->selectRaw('
                COUNT(*) as total_items,
                SUM(quantity_on_hand) as total_quantity,
                SUM(quantity_on_hand * unit_cost) as total_value
            ')
            ->first();

        return [
            'total_items' => $inventory->total_items ?? 0,
            'total_quantity' => $inventory->total_quantity ?? 0,
            'total_value' => $inventory->total_value ?? 0
        ];
    }
}
