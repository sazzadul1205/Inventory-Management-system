<?php
// app/Models/Inventory.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

/**
 * Inventory Model
 * 
 * Manages product inventory across warehouses and locations with comprehensive
 * tracking of quantities, costs, and movements. Implements inventory control
 * logic including reservations, adjustments, transfers, and FIFO/LIFO cost
 * calculations. Tracks batch numbers, serial numbers, and expiry dates for
 * advanced inventory management.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property int $product_id
 * @property int|null $warehouse_id
 * @property int|null $location_id
 * @property string|null $batch_number
 * @property string|null $serial_number
 * @property \Carbon\Carbon|null $expiry_date
 * @property int $quantity_on_hand
 * @property int $quantity_reserved
 * @property int $quantity_available
 * @property int $quantity_in_transit
 * @property int $quantity_on_order
 * @property float $unit_cost
 * @property float $total_value
 * @property \Carbon\Carbon|null $last_count_date
 * @property \Carbon\Carbon|null $last_movement_date
 * @property string $status
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read Product $product
 * @property-read Warehouse|null $warehouse
 * @property-read Location|null $location
 * @property-read Collection|InventoryMovement[] $movements
 * @property-read bool $is_low_stock
 * @property-read bool $is_out_of_stock
 * @property-read bool $is_expired
 * @property-read bool $is_expiring_soon
 * @property-read int|null $days_until_expiry
 * @property-read array $utilization
 */
class Inventory extends Model
{
    use HasFactory;

    /**
     * --------------------------------------------------------------------------
     * Configuration
     * --------------------------------------------------------------------------
     */

    /** @var string Database table name */
    protected $table = 'inventory';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
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

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
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

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'quantity_on_hand' => 0,
        'quantity_reserved' => 0,
        'quantity_available' => 0,
        'quantity_in_transit' => 0,
        'quantity_on_order' => 0,
        'unit_cost' => 0,
        'total_value' => 0,
        'status' => self::STATUS_AVAILABLE
    ];

    /**
     * --------------------------------------------------------------------------
     * Status Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Inventory is available for use/sale */
    const STATUS_AVAILABLE = 'available';

    /** @var string Inventory has been reserved for orders */
    const STATUS_RESERVED = 'reserved';

    /** @var string Inventory is quarantined for inspection */
    const STATUS_QUARANTINED = 'quarantined';

    /** @var string Inventory is damaged and cannot be used */
    const STATUS_DAMAGED = 'damaged';

    /** @var string Inventory has expired */
    const STATUS_EXPIRED = 'expired';

    /** @var string Inventory has been returned */
    const STATUS_RETURNED = 'returned';

    /**
     * Human-readable status labels.
     *
     * @var array<string, string>
     */
    public static $statuses = [
        self::STATUS_AVAILABLE => 'Available',
        self::STATUS_RESERVED => 'Reserved',
        self::STATUS_QUARANTINED => 'Quarantined',
        self::STATUS_DAMAGED => 'Damaged',
        self::STATUS_EXPIRED => 'Expired',
        self::STATUS_RETURNED => 'Returned'
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the product associated with this inventory.
     *
     * @return BelongsTo
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Get the warehouse where this inventory is stored.
     *
     * @return BelongsTo
     */
    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    /**
     * Get the specific location where this inventory is stored.
     *
     * @return BelongsTo
     */
    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    /**
     * Get all movements associated with this inventory item.
     * Matches by product ID and batch/serial number.
     *
     * @return HasMany
     */
    public function movements(): HasMany
    {
        return $this->hasMany(InventoryMovement::class, 'product_id', 'product_id')
            ->where(function ($query) {
                $query->where('batch_number', $this->batch_number)
                    ->orWhere('serial_number', $this->serial_number);
            })
            ->orderBy('created_at', 'desc');
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to only include available inventory.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeAvailable(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_AVAILABLE)
            ->where('quantity_available', '>', 0);
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
     * Scope to filter by location.
     *
     * @param Builder $query
     * @param int $locationId
     * @return Builder
     */
    public function scopeInLocation(Builder $query, int $locationId): Builder
    {
        return $query->where('location_id', $locationId);
    }

    /**
     * Scope to filter by product.
     *
     * @param Builder $query
     * @param int $productId
     * @return Builder
     */
    public function scopeByProduct(Builder $query, int $productId): Builder
    {
        return $query->where('product_id', $productId);
    }

    /**
     * Scope to filter by batch number.
     *
     * @param Builder $query
     * @param string $batchNumber
     * @return Builder
     */
    public function scopeByBatch(Builder $query, string $batchNumber): Builder
    {
        return $query->where('batch_number', $batchNumber);
    }

    /**
     * Scope to filter by serial number.
     *
     * @param Builder $query
     * @param string $serialNumber
     * @return Builder
     */
    public function scopeBySerial(Builder $query, string $serialNumber): Builder
    {
        return $query->where('serial_number', $serialNumber);
    }

    /**
     * Scope to find inventory expiring before a given date.
     *
     * @param Builder $query
     * @param string $date
     * @return Builder
     */
    public function scopeExpiringBefore(Builder $query, string $date): Builder
    {
        return $query->where('expiry_date', '<=', $date)
            ->whereNotNull('expiry_date');
    }

    /**
     * Scope to find expired inventory.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeExpired(Builder $query): Builder
    {
        return $query->where('expiry_date', '<', now())
            ->whereNotNull('expiry_date');
    }

    /**
     * Scope to find low stock items.
     *
     * @param Builder $query
     * @param int|null $threshold
     * @return Builder
     */
    public function scopeLowStock(Builder $query, ?int $threshold = null): Builder
    {
        return $query->whereHas('product', function ($q) use ($threshold) {
            $field = $threshold ? 'minimum_stock' : 'minimum_stock';
            $q->whereRaw('quantity_available <= ' . $field);
        });
    }

    /**
     * Scope to find out of stock items.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeOutOfStock(Builder $query): Builder
    {
        return $query->where('quantity_available', '<=', 0);
    }

    /**
     * Scope to find inventory with positive value.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithValue(Builder $query): Builder
    {
        return $query->whereNotNull('total_value')
            ->where('total_value', '>', 0);
    }

    /**
     * Scope to filter by status.
     *
     * @param Builder $query
     * @param string $status
     * @return Builder
     */
    public function scopeByStatus(Builder $query, string $status): Builder
    {
        return $query->where('status', $status);
    }

    /**
     * Scope to filter by multiple statuses.
     *
     * @param Builder $query
     * @param array<string> $statuses
     * @return Builder
     */
    public function scopeInStatuses(Builder $query, array $statuses): Builder
    {
        return $query->whereIn('status', $statuses);
    }

    /**
     * Scope to include products with their inventory data.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithProductDetails(Builder $query): Builder
    {
        return $query->with(['product' => function ($q) {
            $q->select('id', 'name', 'sku', 'minimum_stock', 'maximum_stock');
        }]);
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Check if this inventory item is low on stock.
     *
     * @return bool
     */
    public function getIsLowStockAttribute(): bool
    {
        return $this->product &&
            $this->quantity_available <= $this->product->minimum_stock;
    }

    /**
     * Check if this inventory item is out of stock.
     *
     * @return bool
     */
    public function getIsOutOfStockAttribute(): bool
    {
        return $this->quantity_available <= 0;
    }

    /**
     * Check if this inventory item has expired.
     *
     * @return bool
     */
    public function getIsExpiredAttribute(): bool
    {
        return $this->expiry_date && $this->expiry_date->isPast();
    }

    /**
     * Check if this inventory item is expiring soon (within 30 days).
     *
     * @return bool
     */
    public function getIsExpiringSoonAttribute(): bool
    {
        if (!$this->expiry_date) {
            return false;
        }

        $daysUntilExpiry = now()->diffInDays($this->expiry_date, false);
        return $daysUntilExpiry <= 30 && $daysUntilExpiry > 0;
    }

    /**
     * Get the number of days until expiry.
     *
     * @return int|null
     */
    public function getDaysUntilExpiryAttribute(): ?int
    {
        if (!$this->expiry_date) {
            return null;
        }

        $diff = now()->diffInDays($this->expiry_date, false);
        return $diff > 0 ? $diff : 0;
    }

    /**
     * Calculate and return the total inventory value.
     * Overrides the database field with real-time calculation.
     *
     * @return float
     */
    public function getTotalValueAttribute(): float
    {
        return (float) ($this->quantity_on_hand * ($this->unit_cost ?? 0));
    }

    /**
     * Get utilization breakdown of inventory quantities.
     *
     * @return array<string, int>
     */
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

    /**
     * Get the status label.
     *
     * @return string
     */
    public function getStatusLabelAttribute(): string
    {
        return self::$statuses[$this->status] ?? ucfirst($this->status);
    }

    /**
     * Get the display name with batch/serial info.
     *
     * @return string
     */
    public function getDisplayNameAttribute(): string
    {
        $parts = [$this->product?->name ?? 'Unknown Product'];

        if ($this->batch_number) {
            $parts[] = "Batch: {$this->batch_number}";
        }

        if ($this->serial_number) {
            $parts[] = "SN: {$this->serial_number}";
        }

        return implode(' - ', $parts);
    }

    /**
     * --------------------------------------------------------------------------
     * Inventory Operations
     * --------------------------------------------------------------------------
     */

    /**
     * Reserve inventory for an order.
     *
     * @param int $quantity
     * @return bool
     */
    public function reserve(int $quantity): bool
    {
        if ($quantity > $this->quantity_available) {
            return false;
        }

        return DB::transaction(function () use ($quantity) {
            $this->quantity_reserved += $quantity;
            $this->quantity_available -= $quantity;
            $this->status = $this->determineStatus();

            return $this->save();
        });
    }

    /**
     * Unreserve previously reserved inventory.
     *
     * @param int $quantity
     * @return bool
     */
    public function unreserve(int $quantity): bool
    {
        return DB::transaction(function () use ($quantity) {
            $actualRelease = min($quantity, $this->quantity_reserved);

            $this->quantity_reserved -= $actualRelease;
            $this->quantity_available += $actualRelease;
            $this->status = $this->determineStatus();

            return $this->save();
        });
    }

    /**
     * Receive new inventory.
     *
     * @param int $quantity
     * @param float|null $unitCost
     * @return bool
     */
    public function receive(int $quantity, ?float $unitCost = null): bool
    {
        return DB::transaction(function () use ($quantity, $unitCost) {
            $oldQuantity = $this->quantity_on_hand;
            $oldTotalValue = $this->quantity_on_hand * $this->unit_cost;

            $this->quantity_on_hand += $quantity;
            $this->quantity_available += $quantity;

            if ($unitCost) {
                // Weighted average cost calculation
                $newTotalValue = $oldTotalValue + ($quantity * $unitCost);
                $this->unit_cost = $newTotalValue / $this->quantity_on_hand;
            }

            $this->last_movement_date = now();
            $this->status = $this->determineStatus();

            return $this->save();
        });
    }

    /**
     * Ship inventory (reduce on-hand quantity).
     *
     * @param int $quantity
     * @return bool
     */
    public function ship(int $quantity): bool
    {
        if ($quantity > $this->quantity_available) {
            return false;
        }

        return DB::transaction(function () use ($quantity) {
            $this->quantity_on_hand -= $quantity;
            $this->quantity_available -= $quantity;
            $this->last_movement_date = now();
            $this->status = $this->determineStatus();

            return $this->save();
        });
    }

    /**
     * Adjust inventory quantity (physical count adjustment).
     *
     * @param int $newQuantity
     * @param string $reason
     * @return bool
     */
    public function adjust(int $newQuantity, string $reason = ''): bool
    {
        return DB::transaction(function () use ($newQuantity, $reason) {
            $oldQuantity = $this->quantity_on_hand;
            $difference = $newQuantity - $oldQuantity;

            $this->quantity_on_hand = $newQuantity;
            $this->quantity_available = $newQuantity - $this->quantity_reserved;
            $this->last_count_date = now();
            $this->last_movement_date = now();
            $this->status = $this->determineStatus();

            $saved = $this->save();

            if ($saved && $difference != 0) {
                // Record the adjustment movement
                $this->recordAdjustment($difference, $reason);
            }

            return $saved;
        });
    }

    /**
     * Move inventory to a new location.
     *
     * @param Location $newLocation
     * @param int $quantity
     * @return InventoryMovement|null
     */
    public function moveToLocation(Location $newLocation, int $quantity): ?InventoryMovement
    {
        if ($quantity > $this->quantity_available) {
            return null;
        }

        return DB::transaction(function () use ($newLocation, $quantity) {
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
                'created_by' => Auth::id(),
                'created_at' => now()
            ]);
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Helper Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Determine the appropriate status based on current quantities.
     *
     * @return string
     */
    protected function determineStatus(): string
    {
        if (
            $this->status === self::STATUS_QUARANTINED ||
            $this->status === self::STATUS_DAMAGED
        ) {
            return $this->status; // Don't auto-change these statuses
        }

        if ($this->is_expired) {
            return self::STATUS_EXPIRED;
        }

        if ($this->quantity_available <= 0) {
            return self::STATUS_RESERVED;
        }

        return self::STATUS_AVAILABLE;
    }

    /**
     * Record an inventory adjustment movement.
     *
     * @param int $difference
     * @param string $reason
     * @return void
     */
    protected function recordAdjustment(int $difference, string $reason): void
    {
        InventoryMovement::create([
            'movement_number' => InventoryMovement::generateMovementNumber(),
            'product_id' => $this->product_id,
            'from_warehouse_id' => $difference < 0 ? $this->warehouse_id : null,
            'to_warehouse_id' => $difference > 0 ? $this->warehouse_id : null,
            'movement_type' => InventoryMovement::TYPE_ADJUSTMENT,
            'batch_number' => $this->batch_number,
            'serial_number' => $this->serial_number,
            'quantity' => abs($difference),
            'unit_cost' => $this->unit_cost,
            'total_cost' => abs($difference) * $this->unit_cost,
            'reference_document' => 'ADJ-' . now()->format('YmdHis'),
            'notes' => $reason,
            'created_by' => Auth::id(),
            'created_at' => now()
        ]);
    }

    /**
     * Check if this inventory is tracked by batch.
     *
     * @return bool
     */
    public function isBatchTracked(): bool
    {
        return !is_null($this->batch_number);
    }

    /**
     * Check if this inventory is tracked by serial number.
     *
     * @return bool
     */
    public function isSerialTracked(): bool
    {
        return !is_null($this->serial_number);
    }

    /**
     * Get the full location path.
     *
     * @return string
     */
    public function getLocationPath(): string
    {
        if (!$this->location) {
            return 'N/A';
        }

        return $this->location->full_path ?? $this->location->name;
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
        // Auto-calculate available quantity before saving
        static::saving(function (self $inventory) {
            $inventory->quantity_available = $inventory->quantity_on_hand - $inventory->quantity_reserved;
            $inventory->status = $inventory->determineStatus();
        });

        // Validate quantities
        static::saving(function (self $inventory) {
            if ($inventory->quantity_reserved > $inventory->quantity_on_hand) {
                return false;
            }

            if ($inventory->quantity_available < 0) {
                return false;
            }

            return true;
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get inventory valuation summary.
     *
     * @return array<string, mixed>
     */
    public static function getValuationSummary(): array
    {
        $total = self::where('quantity_on_hand', '>', 0)
            ->select(
                DB::raw('SUM(quantity_on_hand * unit_cost) as total_value'),
                DB::raw('SUM(quantity_on_hand) as total_units'),
                DB::raw('COUNT(DISTINCT product_id) as unique_products')
            )
            ->first();

        return [
            'total_value' => $total->total_value ?? 0,
            'total_units' => $total->total_units ?? 0,
            'unique_products' => $total->unique_products ?? 0,
            'average_unit_value' => $total->total_units > 0
                ? ($total->total_value / $total->total_units)
                : 0
        ];
    }

    /**
     * Get stock status summary.
     *
     * @return array<string, int>
     */
    public static function getStockStatusSummary(): array
    {
        return [
            'available' => self::where('status', self::STATUS_AVAILABLE)->count(),
            'reserved' => self::where('status', self::STATUS_RESERVED)->count(),
            'quarantined' => self::where('status', self::STATUS_QUARANTINED)->count(),
            'damaged' => self::where('status', self::STATUS_DAMAGED)->count(),
            'expired' => self::where('status', self::STATUS_EXPIRED)->count(),
            'returned' => self::where('status', self::STATUS_RETURNED)->count()
        ];
    }

    /**
     * Get expiring stock summary.
     *
     * @param int $days
     * @return Collection
     */
    public static function getExpiringStock(int $days = 30): Collection
    {
        return self::with('product')
            ->whereNotNull('expiry_date')
            ->where('expiry_date', '<=', now()->addDays($days))
            ->where('expiry_date', '>', now())
            ->orderBy('expiry_date')
            ->get()
            ->map(function ($item) {
                return [
                    'product' => $item->product->name ?? 'Unknown',
                    'batch' => $item->batch_number,
                    'quantity' => $item->quantity_available,
                    'expiry_date' => $item->expiry_date->format('Y-m-d'),
                    'days_until_expiry' => $item->days_until_expiry
                ];
            });
    }
}
