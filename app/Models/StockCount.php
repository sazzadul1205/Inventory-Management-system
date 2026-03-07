<?php
// app/Models/StockCount.php

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
 * Stock Count Model
 * 
 * Manages physical inventory counting processes including cycle counts,
 * full inventories, and spot checks. Tracks expected vs actual quantities,
 * calculates variances, and provides mechanisms for inventory adjustment
 * and verification.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $count_number
 * @property int $warehouse_id
 * @property \Carbon\Carbon $count_date
 * @property string $count_type
 * @property string $status
 * @property string|null $notes
 * @property int|null $created_by
 * @property int|null $verified_by\
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read Warehouse $warehouse
 * @property-read Collection|StockCountItem[] $items
 * @property-read User|null $createdBy
 * @property-read User|null $verifiedBy
 * @property-read string $count_type_label
 * @property-read string $status_label
 * @property-read array $progress
 * @property-read array $variance_summary
 * @property-read float $accuracy
 * @property-read int $total_items
 * @property-read int $counted_items
 * @property-read int $items_with_variance
 */
class StockCount extends Model
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
        'count_number',
        'warehouse_id',
        'count_date',
        'count_type',
        'status',
        'notes',
        'created_by',
        'verified_by'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'count_date' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'status' => self::STATUS_DRAFT,
        'count_date' => null, // Will be set in boot method
    ];

    /**
     * --------------------------------------------------------------------------
     * Type Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Cycle count (rotating basis) */
    const TYPE_CYCLE = 'cycle';

    /** @var string Full inventory count */
    const TYPE_FULL = 'full';

    /** @var string Spot check of specific items */
    const TYPE_SPOT = 'spot';

    /** @var string Annual physical inventory */
    const TYPE_ANNUAL = 'annual';

    /**
     * Human-readable count type labels.
     *
     * @var array<string, string>
     */
    public static $countTypes = [
        self::TYPE_CYCLE => 'Cycle Count',
        self::TYPE_FULL => 'Full Inventory',
        self::TYPE_SPOT => 'Spot Check',
        self::TYPE_ANNUAL => 'Annual Count'
    ];

    /**
     * --------------------------------------------------------------------------
     * Status Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Initial draft state */
    const STATUS_DRAFT = 'draft';

    /** @var string Counting in progress */
    const STATUS_IN_PROGRESS = 'in_progress';

    /** @var string Counting completed */
    const STATUS_COMPLETED = 'completed';

    /** @var string Count verified */
    const STATUS_VERIFIED = 'verified';

    /** @var string Count cancelled */
    const STATUS_CANCELLED = 'cancelled';

    /**
     * Human-readable status labels.
     *
     * @var array<string, string>
     */
    public static $statuses = [
        self::STATUS_DRAFT => 'Draft',
        self::STATUS_IN_PROGRESS => 'In Progress',
        self::STATUS_COMPLETED => 'Completed',
        self::STATUS_VERIFIED => 'Verified',
        self::STATUS_CANCELLED => 'Cancelled'
    ];

    /**
     * Statuses that indicate the count is active.
     *
     * @var array<string>
     */
    const ACTIVE_STATUSES = [
        self::STATUS_IN_PROGRESS,
        self::STATUS_COMPLETED
    ];

    /**
     * Statuses that indicate the count is finalized.
     *
     * @var array<string>
     */
    const FINALIZED_STATUSES = [
        self::STATUS_VERIFIED,
        self::STATUS_CANCELLED
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the warehouse being counted.
     *
     * @return BelongsTo
     */
    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    /**
     * Get all items in this count.
     *
     * @return HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(StockCountItem::class);
    }

    /**
     * Get the user who created this count.
     *
     * @return BelongsTo
     */
    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the user who verified this count.
     *
     * @return BelongsTo
     */
    public function verifiedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'verified_by');
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to draft counts.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeDraft(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_DRAFT);
    }

    /**
     * Scope to in-progress counts.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeInProgress(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_IN_PROGRESS);
    }

    /**
     * Scope to completed counts.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeCompleted(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_COMPLETED);
    }

    /**
     * Scope to verified counts.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeVerified(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_VERIFIED);
    }

    /**
     * Scope to active counts.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->whereIn('status', self::ACTIVE_STATUSES);
    }

    /**
     * Scope to finalized counts.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeFinalized(Builder $query): Builder
    {
        return $query->whereIn('status', self::FINALIZED_STATUSES);
    }

    /**
     * Scope to filter by warehouse.
     *
     * @param Builder $query
     * @param int $warehouseId
     * @return Builder
     */
    public function scopeForWarehouse(Builder $query, int $warehouseId): Builder
    {
        return $query->where('warehouse_id', $warehouseId);
    }

    /**
     * Scope to filter by count type.
     *
     * @param Builder $query
     * @param string $type
     * @return Builder
     */
    public function scopeOfType(Builder $query, string $type): Builder
    {
        return $query->where('count_type', $type);
    }

    /**
     * Scope to filter by date range.
     *
     * @param Builder $query
     * @param string $startDate
     * @param string $endDate
     * @return Builder
     */
    public function scopeBetweenDates(Builder $query, string $startDate, string $endDate): Builder
    {
        return $query->whereBetween('count_date', [$startDate, $endDate]);
    }

    /**
     * Scope to counts with variances.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithVariances(Builder $query): Builder
    {
        return $query->whereHas('items', function ($q) {
            $q->where('variance_quantity', '!=', 0);
        });
    }

    /**
     * Scope to counts with significant variances.
     *
     * @param Builder $query
     * @param float $threshold
     * @return Builder
     */
    public function scopeWithSignificantVariances(Builder $query, float $threshold = 5.0): Builder
    {
        return $query->whereHas('items', function ($q) use ($threshold) {
            $q->whereRaw('ABS(variance_percentage) >= ?', [$threshold]);
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get human-readable count type label.
     *
     * @return string
     */
    public function getCountTypeLabelAttribute(): string
    {
        return self::$countTypes[$this->count_type] ?? ucfirst($this->count_type);
    }

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
     * Get count progress statistics.
     *
     * @return array<string, mixed>
     */
    public function getProgressAttribute(): array
    {
        $totalItems = $this->items->count();

        if ($totalItems === 0) {
            return $this->getEmptyProgress();
        }

        $countedItems = $this->items->where('status', '!=', StockCountItem::STATUS_PENDING)->count();
        $verifiedItems = $this->items->where('status', StockCountItem::STATUS_VERIFIED)->count();
        $itemsWithVariance = $this->items->where('variance_quantity', '!=', 0)->count();

        return [
            'total' => $totalItems,
            'counted' => $countedItems,
            'verified' => $verifiedItems,
            'with_variance' => $itemsWithVariance,
            'counted_percentage' => round(($countedItems / $totalItems) * 100, 2),
            'verified_percentage' => round(($verifiedItems / $totalItems) * 100, 2),
            'variance_percentage' => round(($itemsWithVariance / $totalItems) * 100, 2)
        ];
    }

    /**
     * Get empty progress array.
     *
     * @return array
     */
    protected function getEmptyProgress(): array
    {
        return [
            'total' => 0,
            'counted' => 0,
            'verified' => 0,
            'with_variance' => 0,
            'counted_percentage' => 0,
            'verified_percentage' => 0,
            'variance_percentage' => 0
        ];
    }

    /**
     * Get variance summary.
     *
     * @return array<string, mixed>
     */
    public function getVarianceSummaryAttribute(): array
    {
        $positiveVariance = $this->items->where('variance_quantity', '>', 0)->sum('variance_quantity');
        $negativeVariance = $this->items->where('variance_quantity', '<', 0)->sum('variance_quantity');

        return [
            'total_variance' => $this->items->sum('variance_quantity'),
            'absolute_variance' => $this->items->sum(fn($item) => abs($item->variance_quantity)),
            'positive_variance' => $positiveVariance,
            'negative_variance' => abs($negativeVariance),
            'variance_count' => $this->items->where('variance_quantity', '!=', 0)->count(),
            'variance_value' => $this->items->sum(function ($item) {
                return ($item->product->unit_cost ?? 0) * $item->variance_quantity;
            })
        ];
    }

    /**
     * Calculate inventory accuracy percentage.
     *
     * @return float
     */
    public function getAccuracyAttribute(): float
    {
        $totalExpected = $this->items->sum('expected_quantity');

        if ($totalExpected <= 0) {
            return 100.0;
        }

        $totalAbsoluteVariance = $this->items->sum(fn($item) => abs($item->variance_quantity));

        return round((($totalExpected - $totalAbsoluteVariance) / $totalExpected) * 100, 2);
    }

    /**
     * Get total items count.
     *
     * @return int
     */
    public function getTotalItemsAttribute(): int
    {
        return $this->items->count();
    }

    /**
     * Get counted items count.
     *
     * @return int
     */
    public function getCountedItemsAttribute(): int
    {
        return $this->items->where('status', '!=', StockCountItem::STATUS_PENDING)->count();
    }

    /**
     * Get items with variance count.
     *
     * @return int
     */
    public function getItemsWithVarianceAttribute(): int
    {
        return $this->items->where('variance_quantity', '!=', 0)->count();
    }

    /**
     * Get count summary.
     *
     * @return array
     */
    public function getSummaryAttribute(): array
    {
        return [
            'id' => $this->id,
            'count_number' => $this->count_number,
            'warehouse' => $this->warehouse->name,
            'type' => $this->count_type_label,
            'count_date' => $this->count_date->format('Y-m-d'),
            'status' => $this->status_label,
            'progress' => $this->progress,
            'accuracy' => $this->accuracy . '%',
            'total_items' => $this->total_items,
            'created_by' => $this->createdBy?->name,
            'verified_by' => $this->verifiedBy?->name
        ];
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Generate a unique count number.
     * Format: CNT-YYYYMM-XXXX where XXXX is sequential.
     *
     * @return string
     */
    public static function generateCountNumber(): string
    {
        $prefix = 'CNT';
        $yearMonth = now()->format('Ym');

        $lastCount = self::whereYear('created_at', now()->year)
            ->whereMonth('created_at', now()->month)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastCount && preg_match('/-(\d{4})$/', $lastCount->count_number, $matches)) {
            $lastNumber = (int) $matches[1];
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$yearMonth}-{$newNumber}";
    }

    /**
     * Create a cycle count.
     *
     * @param int $warehouseId
     * @param array<int> $productIds
     * @param int|null $createdBy
     * @return self
     */
    public static function createCycleCount(int $warehouseId, array $productIds = [], ?int $createdBy = null): self
    {
        return DB::transaction(function () use ($warehouseId, $productIds, $createdBy) {
            $count = self::create([
                'count_number' => self::generateCountNumber(),
                'warehouse_id' => $warehouseId,
                'count_type' => self::TYPE_CYCLE,
                'status' => self::STATUS_DRAFT,
                'created_by' => $createdBy ?? Auth::id()
            ]);

            $inventoryQuery = Inventory::inWarehouse($warehouseId)
                ->where('quantity_on_hand', '>', 0);

            if (!empty($productIds)) {
                $inventoryQuery->whereIn('product_id', $productIds);
            }

            $inventoryItems = $inventoryQuery->get();

            foreach ($inventoryItems as $inventory) {
                $count->items()->create([
                    'product_id' => $inventory->product_id,
                    'location_id' => $inventory->location_id,
                    'expected_quantity' => $inventory->quantity_on_hand,
                    'counted_quantity' => 0,
                    'status' => StockCountItem::STATUS_PENDING
                ]);
            }

            return $count;
        });
    }

    /**
     * Create a full inventory count.
     *
     * @param int $warehouseId
     * @param int|null $createdBy
     * @return self
     */
    public static function createFullCount(int $warehouseId, ?int $createdBy = null): self
    {
        return DB::transaction(function () use ($warehouseId, $createdBy) {
            $count = self::create([
                'count_number' => self::generateCountNumber(),
                'warehouse_id' => $warehouseId,
                'count_type' => self::TYPE_FULL,
                'status' => self::STATUS_DRAFT,
                'created_by' => $createdBy ?? Auth::id()
            ]);

            $products = Product::where('is_active', true)->get();
            $locations = Location::where('warehouse_id', $warehouseId)
                ->where('is_active', true)
                ->get();

            foreach ($products as $product) {
                foreach ($locations as $location) {
                    $inventory = Inventory::where('product_id', $product->id)
                        ->where('location_id', $location->id)
                        ->first();

                    $count->items()->create([
                        'product_id' => $product->id,
                        'location_id' => $location->id,
                        'expected_quantity' => $inventory->quantity_on_hand ?? 0,
                        'counted_quantity' => 0,
                        'status' => StockCountItem::STATUS_PENDING
                    ]);
                }
            }

            return $count;
        });
    }

    /**
     * Start the counting process.
     *
     * @return self
     */
    public function start(): self
    {
        if ($this->status !== self::STATUS_DRAFT) {
            throw new \Exception('Only draft counts can be started.');
        }

        $this->status = self::STATUS_IN_PROGRESS;
        $this->save();

        return $this;
    }

    /**
     * Complete the counting process.
     *
     * @param int|null $verifiedBy
     * @return self
     */
    public function complete(?int $verifiedBy = null): self
    {
        return DB::transaction(function () use ($verifiedBy) {
            // Auto-complete any pending items with zero count
            $this->items()->where('status', StockCountItem::STATUS_PENDING)
                ->update([
                    'counted_quantity' => 0,
                    'status' => StockCountItem::STATUS_COUNTED,
                    'notes' => DB::raw("CONCAT(IFNULL(notes, ''), ' Auto-counted as zero on completion')")
                ]);

            $this->status = self::STATUS_COMPLETED;

            if ($verifiedBy) {
                $this->verified_by = $verifiedBy;
            }

            $this->save();

            return $this;
        });
    }

    /**
     * Verify the count and optionally apply adjustments.
     *
     * @param int $userId
     * @param bool $applyAdjustments
     * @return self
     */
    public function verify(int $userId, bool $applyAdjustments = true): self
    {
        return DB::transaction(function () use ($userId, $applyAdjustments) {
            foreach ($this->items as $item) {
                if ($applyAdjustments && $item->variance_quantity != 0) {
                    $item->applyAdjustment($userId);
                }

                $item->status = StockCountItem::STATUS_VERIFIED;
                $item->approved_by = $userId;
                $item->save();
            }

            $this->status = self::STATUS_VERIFIED;
            $this->verified_by = $userId;
            $this->save();

            return $this;
        });
    }

    /**
     * Cancel the count.
     *
     * @param string|null $reason
     * @return self
     */
    public function cancel(?string $reason = null): self
    {
        return DB::transaction(function () use ($reason) {
            if (in_array($this->status, self::FINALIZED_STATUSES)) {
                throw new \Exception('Cannot cancel a finalized count.');
            }

            $this->status = self::STATUS_CANCELLED;

            if ($reason) {
                $this->notes = ($this->notes ? $this->notes . "\n" : '') . "Cancelled: {$reason}";
            }

            $this->save();

            return $this;
        });
    }

    /**
     * Get items grouped by variance type.
     *
     * @param string $type
     * @return Collection
     */
    public function getItemsByVariance(string $type = 'all'): Collection
    {
        return match ($type) {
            'positive' => $this->items()->where('variance_quantity', '>', 0)->get(),
            'negative' => $this->items()->where('variance_quantity', '<', 0)->get(),
            'zero' => $this->items()->where('variance_quantity', '=', 0)->get(),
            default => $this->items,
        };
    }

    /**
     * Get items with significant variance.
     *
     * @param float $threshold
     * @return Collection
     */
    public function getSignificantVarianceItems(float $threshold = 5.0): Collection
    {
        return $this->items()
            ->whereRaw('ABS(variance_percentage) >= ?', [$threshold])
            ->get();
    }

    /**
     * Check if count can be modified.
     *
     * @return bool
     */
    public function isModifiable(): bool
    {
        return !in_array($this->status, self::FINALIZED_STATUSES);
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
        // Auto-generate count number and set count date
        static::creating(function (self $count) {
            if (empty($count->count_number)) {
                $count->count_number = self::generateCountNumber();
            }

            if (empty($count->count_date)) {
                $count->count_date = now();
            }
        });

        // Prevent modification of finalized counts
        static::updating(function (self $count) {
            if ($count->getOriginal('status') !== $count->status) {
                // Status change is allowed
                return true;
            }

            if (in_array($count->getOriginal('status'), self::FINALIZED_STATUSES)) {
                return false;
            }

            return true;
        });

        // Clean up items before deletion
        static::deleting(function (self $count) {
            if (in_array($count->status, self::ACTIVE_STATUSES)) {
                throw new \Exception('Cannot delete an active count.');
            }

            $count->items()->delete();
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get stock count statistics.
     *
     * @param int $days
     * @return array
     */
    public static function getStatistics(int $days = 30): array
    {
        $query = self::where('count_date', '>=', now()->subDays($days));

        $totalCounts = $query->count();
        $verifiedCounts = $query->where('status', self::STATUS_VERIFIED)->count();
        $cancelledCounts = $query->where('status', self::STATUS_CANCELLED)->count();

        // Calculate average accuracy from related items, not from a non-existent column
        $completedCounts = self::whereIn('status', [self::STATUS_COMPLETED, self::STATUS_VERIFIED])
            ->where('count_date', '>=', now()->subDays($days))
            ->get();

        $totalAccuracy = 0;
        $accuracyCount = 0;

        foreach ($completedCounts as $count) {
            // Assuming accuracy is an accessor that calculates from items
            $totalAccuracy += $count->accuracy;
            $accuracyCount++;
        }

        $avgAccuracy = $accuracyCount > 0 ? round($totalAccuracy / $accuracyCount, 2) : 0;
        $completionRate = $totalCounts > 0 ? round(($verifiedCounts / $totalCounts) * 100, 2) : 0;

        return [
            'total_counts' => $totalCounts,
            'verified_counts' => $verifiedCounts,
            'cancelled_counts' => $cancelledCounts,
            'average_accuracy' => $avgAccuracy,
            'completion_rate' => $completionRate,
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
            'text' => "{$this->count_number} ({$this->warehouse->name})",
            'count_number' => $this->count_number,
            'warehouse' => $this->warehouse->name,
            'type' => $this->count_type_label,
            'status' => $this->status
        ];
    }

    /**
     * Get count report data.
     *
     * @return array
     */
    public function getReportData(): array
    {
        return [
            'count' => $this->summary,
            'items' => $this->items->map(fn($item) => $item->summary)->toArray(),
            'variance_summary' => $this->variance_summary,
            'progress' => $this->progress
        ];
    }

    /**
     * Check if count has any variances.
     *
     * @return bool
     */
    public function hasVariances(): bool
    {
        return $this->items()->where('variance_quantity', '!=', 0)->exists();
    }

    /**
     * Get the count duration in hours.
     *
     * @return float|null
     */
    public function getDurationAttribute(): ?float
    {
        if (!$this->count_date) {
            return null;
        }

        $endTime = $this->completed_at ?? $this->verified_at ?? now();

        return round($this->count_date->diffInMinutes($endTime) / 60, 2);
    }
}
