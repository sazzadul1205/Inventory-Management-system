<?php
// app/Models/StockCountItem.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\DB;

/**
 * Stock Count Item Model
 * 
 * Represents an individual item within a stock count. Tracks expected vs actual
 * quantities, calculates variances, and manages the counting, verification, and
 * approval process. Provides comprehensive variance analysis and integrates with
 * inventory adjustments.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property int $stock_count_id
 * @property int $product_id
 * @property int|null $location_id
 * @property int $expected_quantity
 * @property int $counted_quantity
 * @property int $variance_quantity
 * @property float $variance_percentage
 * @property string|null $variance_reason
 * @property string $status
 * @property int|null $counted_by
 * @property int|null $approved_by
 * @property string|null $notes
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read StockCount $stockCount
 * @property-read Product $product
 * @property-read Location|null $location
 * @property-read User|null $countedBy
 * @property-read User|null $approvedBy
 * @property-read string $status_label
 * @property-read string|null $variance_reason_label
 * @property-read string $variance_direction
 * @property-read string $variance_sign
 * @property-read float $variance_value
 * @property-read string $variance_value_formatted
 * @property-read bool $is_counted
 * @property-read bool $has_variance
 * @property-read bool $is_accurate
 * @property-read float $accuracy
 * @property-read string $location_path
 * @property-read array $summary
 */
class StockCountItem extends Model
{
    use HasFactory;

    /**
     * --------------------------------------------------------------------------
     * Configuration
     * --------------------------------------------------------------------------
     */

    /** @var string Database table name */
    protected $table = 'stock_count_items';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'stock_count_id',
        'product_id',
        'location_id',
        'expected_quantity',
        'counted_quantity',
        'variance_reason',
        'status',
        'counted_by',
        'approved_by',
        'notes'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'expected_quantity' => 'integer',
        'counted_quantity' => 'integer',
        'variance_quantity' => 'integer',
        'variance_percentage' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'expected_quantity' => 0,
        'counted_quantity' => 0,
        'status' => self::STATUS_PENDING
    ];

    /**
     * --------------------------------------------------------------------------
     * Status Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Item awaiting count */
    const STATUS_PENDING = 'pending';

    /** @var string Item has been counted */
    const STATUS_COUNTED = 'counted';

    /** @var string Item has been verified */
    const STATUS_VERIFIED = 'verified';

    /** @var string Item has been approved */
    const STATUS_APPROVED = 'approved';

    /** @var string Item has been rejected */
    const STATUS_REJECTED = 'rejected';

    /**
     * Human-readable status labels.
     *
     * @var array<string, string>
     */
    public static $statuses = [
        self::STATUS_PENDING => 'Pending',
        self::STATUS_COUNTED => 'Counted',
        self::STATUS_VERIFIED => 'Verified',
        self::STATUS_APPROVED => 'Approved',
        self::STATUS_REJECTED => 'Rejected'
    ];

    /**
     * --------------------------------------------------------------------------
     * Variance Reason Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Damaged goods */
    const REASON_DAMAGE = 'damage';

    /** @var string Theft or loss */
    const REASON_THEFT = 'theft';

    /** @var string Items misplaced */
    const REASON_MISPLACEMENT = 'misplacement';

    /** @var string System calculation error */
    const REASON_SYSTEM_ERROR = 'system_error';

    /** @var string Supplier shipping error */
    const REASON_SUPPLIER_ERROR = 'supplier_error';

    /** @var string Customer return */
    const REASON_RETURN = 'return';

    /** @var string Other reasons */
    const REASON_OTHER = 'other';

    /**
     * Human-readable variance reason labels.
     *
     * @var array<string, string>
     */
    public static $varianceReasons = [
        self::REASON_DAMAGE => 'Damaged Goods',
        self::REASON_THEFT => 'Theft/Loss',
        self::REASON_MISPLACEMENT => 'Misplaced',
        self::REASON_SYSTEM_ERROR => 'System Error',
        self::REASON_SUPPLIER_ERROR => 'Supplier Error',
        self::REASON_RETURN => 'Customer Return',
        self::REASON_OTHER => 'Other'
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the parent stock count.
     *
     * @return BelongsTo
     */
    public function stockCount(): BelongsTo
    {
        return $this->belongsTo(StockCount::class);
    }

    /**
     * Get the product being counted.
     *
     * @return BelongsTo
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Get the location where the product is stored.
     *
     * @return BelongsTo
     */
    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    /**
     * Get the user who counted this item.
     *
     * @return BelongsTo
     */
    public function countedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'counted_by');
    }

    /**
     * Get the user who approved this item.
     *
     * @return BelongsTo
     */
    public function approvedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to pending items.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopePending(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_PENDING);
    }

    /**
     * Scope to counted items.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeCounted(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_COUNTED);
    }

    /**
     * Scope to verified items.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeVerified(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_VERIFIED);
    }

    /**
     * Scope to approved items.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeApproved(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_APPROVED);
    }

    /**
     * Scope to rejected items.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeRejected(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_REJECTED);
    }

    /**
     * Scope to items with variance.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithVariance(Builder $query): Builder
    {
        return $query->where('variance_quantity', '!=', 0);
    }

    /**
     * Scope to items without variance.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithoutVariance(Builder $query): Builder
    {
        return $query->where('variance_quantity', '=', 0);
    }

    /**
     * Scope to positive variance (surplus).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopePositiveVariance(Builder $query): Builder
    {
        return $query->where('variance_quantity', '>', 0);
    }

    /**
     * Scope to negative variance (shortage).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeNegativeVariance(Builder $query): Builder
    {
        return $query->where('variance_quantity', '<', 0);
    }

    /**
     * Scope to filter by product.
     *
     * @param Builder $query
     * @param int $productId
     * @return Builder
     */
    public function scopeForProduct(Builder $query, int $productId): Builder
    {
        return $query->where('product_id', $productId);
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
     * Scope to filter by variance reason.
     *
     * @param Builder $query
     * @param string $reason
     * @return Builder
     */
    public function scopeByVarianceReason(Builder $query, string $reason): Builder
    {
        return $query->where('variance_reason', $reason);
    }

    /**
     * Scope to items with significant variance.
     *
     * @param Builder $query
     * @param float $threshold
     * @return Builder
     */
    public function scopeWithSignificantVariance(Builder $query, float $threshold = 5.0): Builder
    {
        return $query->whereRaw('ABS(variance_percentage) >= ?', [$threshold]);
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get human-readable status label.
     *
     * @return string
     */
    public function getStatusLabelAttribute(): string
    {
        return self::$statuses[$this->status] ?? ucfirst($this->status);
    }

    /**
     * Get human-readable variance reason label.
     *
     * @return string|null
     */
    public function getVarianceReasonLabelAttribute(): ?string
    {
        return $this->variance_reason
            ? (self::$varianceReasons[$this->variance_reason] ?? ucfirst($this->variance_reason))
            : null;
    }

    /**
     * Get variance direction (surplus/shortage/exact).
     *
     * @return string
     */
    public function getVarianceDirectionAttribute(): string
    {
        return match (true) {
            $this->variance_quantity > 0 => 'surplus',
            $this->variance_quantity < 0 => 'shortage',
            default => 'exact'
        };
    }

    /**
     * Get variance sign character.
     *
     * @return string
     */
    public function getVarianceSignAttribute(): string
    {
        return match (true) {
            $this->variance_quantity > 0 => '+',
            $this->variance_quantity < 0 => '-',
            default => ''
        };
    }

    /**
     * Calculate financial value of variance.
     *
     * @return float
     */
    public function getVarianceValueAttribute(): float
    {
        return ($this->product->unit_cost ?? 0) * $this->variance_quantity;
    }

    /**
     * Get formatted variance value with sign.
     *
     * @return string
     */
    public function getVarianceValueFormattedAttribute(): string
    {
        $value = $this->variance_value;
        $sign = $value > 0 ? '+' : ($value < 0 ? '-' : '');
        return $sign . '$' . number_format(abs($value), 2);
    }

    /**
     * Check if item has been counted.
     *
     * @return bool
     */
    public function getIsCountedAttribute(): bool
    {
        return $this->status !== self::STATUS_PENDING;
    }

    /**
     * Check if item has variance.
     *
     * @return bool
     */
    public function getHasVarianceAttribute(): bool
    {
        return $this->variance_quantity != 0;
    }

    /**
     * Check if item is accurate (no variance).
     *
     * @return bool
     */
    public function getIsAccurateAttribute(): bool
    {
        return $this->variance_quantity == 0;
    }

    /**
     * Calculate accuracy percentage.
     *
     * @return float
     */
    public function getAccuracyAttribute(): float
    {
        if ($this->expected_quantity == 0) {
            return $this->counted_quantity == 0 ? 100.0 : 0.0;
        }

        $difference = abs($this->expected_quantity - $this->counted_quantity);
        return round((($this->expected_quantity - $difference) / $this->expected_quantity) * 100, 2);
    }

    /**
     * Get full location path.
     *
     * @return string
     */
    public function getLocationPathAttribute(): string
    {
        return $this->location
            ? $this->location->full_location_path
            : 'Not assigned';
    }

    /**
     * Get item summary.
     *
     * @return array
     */
    public function getSummaryAttribute(): array
    {
        return [
            'id' => $this->id,
            'product' => [
                'id' => $this->product_id,
                'name' => $this->product->name,
                'sku' => $this->product->sku
            ],
            'location' => $this->location_path,
            'expected' => $this->expected_quantity,
            'counted' => $this->counted_quantity,
            'variance' => [
                'quantity' => $this->variance_quantity,
                'percentage' => $this->variance_percentage,
                'direction' => $this->variance_direction,
                'value' => $this->variance_value_formatted,
                'reason' => $this->variance_reason_label
            ],
            'accuracy' => $this->accuracy . '%',
            'status' => $this->status_label,
            'counted_by' => $this->countedBy?->name,
            'approved_by' => $this->approvedBy?->name
        ];
    }

    /**
     * Get the variance percentage (calculated).
     *
     * @return float
     */
    public function getVariancePercentageAttribute(): float
    {
        if ($this->expected_quantity == 0) {
            return $this->counted_quantity > 0 ? 100.0 : 0.0;
        }

        return round(($this->variance_quantity / $this->expected_quantity) * 100, 2);
    }

    /**
     * Get the variance quantity (calculated).
     *
     * @return int
     */
    public function getVarianceQuantityAttribute(): int
    {
        return $this->counted_quantity - $this->expected_quantity;
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Record a count for this item.
     *
     * @param int $quantity
     * @param int $userId
     * @param string|null $notes
     * @return self
     */
    public function recordCount(int $quantity, int $userId, ?string $notes = null): self
    {
        $this->counted_quantity = $quantity;
        $this->counted_by = $userId;
        $this->status = self::STATUS_COUNTED;

        if ($notes) {
            $this->notes = $this->appendNote($notes);
        }

        $this->save();

        return $this;
    }

    /**
     * Approve this counted item.
     *
     * @param int $userId
     * @param string|null $reason
     * @param string|null $notes
     * @return self
     * @throws \Exception
     */
    public function approve(int $userId, ?string $reason = null, ?string $notes = null): self
    {
        if ($this->has_variance && !$reason) {
            throw new \Exception('Variance reason is required for items with variance.');
        }

        $this->variance_reason = $reason;
        $this->approved_by = $userId;
        $this->status = self::STATUS_APPROVED;

        if ($notes) {
            $this->notes = $this->appendNote($notes);
        }

        $this->save();

        return $this;
    }

    /**
     * Reject this counted item.
     *
     * @param int $userId
     * @param string $reason
     * @return self
     */
    public function reject(int $userId, string $reason): self
    {
        $this->status = self::STATUS_REJECTED;
        $this->approved_by = $userId;
        $this->notes = $this->appendNote("Rejected: {$reason}");

        $this->save();

        return $this;
    }

    /**
     * Apply inventory adjustment based on count variance.
     *
     * @param int $userId
     * @return InventoryMovement|null
     */
    public function applyAdjustment(int $userId): ?InventoryMovement
    {
        if ($this->variance_quantity == 0) {
            return null;
        }

        return DB::transaction(function () use ($userId) {
            // Find or create inventory record
            $inventory = $this->findOrCreateInventory();

            // Adjust inventory
            $inventory->adjust($this->counted_quantity, "Stock count adjustment #{$this->stockCount->count_number}");

            // Create movement record
            return $this->createInventoryMovement($inventory, $userId);
        });
    }

    /**
     * Find or create inventory record for this item.
     *
     * @return Inventory
     */
    protected function findOrCreateInventory(): Inventory
    {
        return Inventory::firstOrCreate(
            [
                'product_id' => $this->product_id,
                'warehouse_id' => $this->stockCount->warehouse_id,
                'location_id' => $this->location_id,
            ],
            [
                'quantity_on_hand' => 0,
                'quantity_available' => 0,
                'unit_cost' => $this->product->unit_cost ?? 0,
                'status' => Inventory::STATUS_AVAILABLE
            ]
        );
    }

    /**
     * Create inventory movement record for adjustment.
     *
     * @param Inventory $inventory
     * @param int $userId
     * @return InventoryMovement
     */
    protected function createInventoryMovement(Inventory $inventory, int $userId): InventoryMovement
    {
        return InventoryMovement::record(
            $this->product_id,
            InventoryMovement::TYPE_ADJUSTMENT,
            abs($this->variance_quantity),
            $inventory->unit_cost,
            [
                'from_warehouse' => $this->stockCount->warehouse_id,
                'to_warehouse' => $this->stockCount->warehouse_id,
                'from_location' => $this->location_id,
                'to_location' => $this->location_id
            ],
            [
                'type' => 'stock_count',
                'id' => $this->stockCount->id
            ],
            null,
            null,
            "Stock count adjustment. Expected: {$this->expected_quantity}, Counted: {$this->counted_quantity}. Reason: {$this->variance_reason_label}"
        );
    }

    /**
     * Get suggested variance reason based on patterns.
     *
     * @return string|null
     */
    public function getSuggestedVarianceReason(): ?string
    {
        if (!$this->has_variance) {
            return null;
        }

        // Shortage (negative variance)
        if ($this->variance_quantity < 0) {
            if (abs($this->variance_quantity) <= 2) {
                return self::REASON_MISPLACEMENT;
            }
            if (abs($this->variance_percentage) > 20) {
                return self::REASON_THEFT;
            }
        }
        // Surplus (positive variance)
        else {
            if ($this->variance_percentage <= 5) {
                return self::REASON_SYSTEM_ERROR;
            }
            if ($this->variance_percentage > 20) {
                return self::REASON_SUPPLIER_ERROR;
            }
        }

        return self::REASON_OTHER;
    }

    /**
     * Append a note to existing notes.
     *
     * @param string $note
     * @return string
     */
    protected function appendNote(string $note): string
    {
        return ($this->notes ? $this->notes . "\n" : '') . $note;
    }

    /**
     * Check if item can be edited.
     *
     * @return bool
     */
    public function isEditable(): bool
    {
        return !in_array($this->status, [self::STATUS_APPROVED, self::STATUS_REJECTED]);
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
        // Auto-calculate variance fields before saving
        static::saving(function (self $item) {
            $item->variance_quantity = $item->counted_quantity - $item->expected_quantity;

            if ($item->expected_quantity > 0) {
                $item->variance_percentage = ($item->variance_quantity / $item->expected_quantity) * 100;
            } elseif ($item->counted_quantity > 0) {
                $item->variance_percentage = 100.0;
            } else {
                $item->variance_percentage = 0.0;
            }
        });

        // Prevent modification of approved/rejected items
        static::updating(function (self $item) {
            if (in_array($item->getOriginal('status'), [self::STATUS_APPROVED, self::STATUS_REJECTED])) {
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
     * Get variance analysis for a product.
     *
     * @param int $productId
     * @param int $days
     * @return array
     */
    public static function getProductVarianceAnalysis(int $productId, int $days = 90): array
    {
        $items = self::forProduct($productId)
            ->whereHas('stockCount', function ($q) use ($days) {
                $q->where('count_date', '>=', now()->subDays($days));
            })
            ->where('status', self::STATUS_APPROVED)
            ->get();

        if ($items->isEmpty()) {
            return [
                'counts' => 0,
                'avg_variance' => 0,
                'total_variance' => 0,
                'accuracy' => 100
            ];
        }

        return [
            'counts' => $items->count(),
            'avg_variance' => round($items->avg('variance_quantity'), 2),
            'avg_variance_percentage' => round($items->avg('variance_percentage'), 2),
            'total_variance' => $items->sum('variance_quantity'),
            'total_variance_value' => $items->sum('variance_value'),
            'accuracy' => round($items->avg('accuracy'), 2),
            'most_common_reason' => $items->groupBy('variance_reason')
                ->sortDesc()
                ->keys()
                ->first()
        ];
    }

    /**
     * --------------------------------------------------------------------------
     * Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Format for recount form.
     *
     * @return array
     */
    public function toCountForm(): array
    {
        return [
            'id' => $this->id,
            'product_name' => $this->product->name,
            'product_sku' => $this->product->sku,
            'location' => $this->location_path,
            'expected' => $this->expected_quantity,
            'unit' => $this->product->unit_of_measure,
            'batch_tracked' => $this->product->is_batch_tracked,
            'serial_tracked' => $this->product->is_serial_tracked,
            'status' => $this->status
        ];
    }
}
