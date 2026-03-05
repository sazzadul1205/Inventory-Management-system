<?php
// app/Models/StockCount.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class StockCount extends Model
{
    use HasFactory;

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

    protected $casts = [
        'count_date' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Count type constants
    const TYPE_CYCLE = 'cycle';
    const TYPE_FULL = 'full';
    const TYPE_SPOT = 'spot';
    const TYPE_ANNUAL = 'annual';

    public static $countTypes = [
        self::TYPE_CYCLE => 'Cycle Count',
        self::TYPE_FULL => 'Full Inventory',
        self::TYPE_SPOT => 'Spot Check',
        self::TYPE_ANNUAL => 'Annual Count'
    ];

    // Status constants
    const STATUS_DRAFT = 'draft';
    const STATUS_IN_PROGRESS = 'in_progress';
    const STATUS_COMPLETED = 'completed';
    const STATUS_VERIFIED = 'verified';
    const STATUS_CANCELLED = 'cancelled';

    public static $statuses = [
        self::STATUS_DRAFT => 'Draft',
        self::STATUS_IN_PROGRESS => 'In Progress',
        self::STATUS_COMPLETED => 'Completed',
        self::STATUS_VERIFIED => 'Verified',
        self::STATUS_CANCELLED => 'Cancelled'
    ];

    // Relationships
    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(StockCountItem::class);
    }

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function verifiedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'verified_by');
    }

    // Scopes
    public function scopeDraft($query)
    {
        return $query->where('status', self::STATUS_DRAFT);
    }

    public function scopeInProgress($query)
    {
        return $query->where('status', self::STATUS_IN_PROGRESS);
    }

    public function scopeCompleted($query)
    {
        return $query->where('status', self::STATUS_COMPLETED);
    }

    public function scopeVerified($query)
    {
        return $query->where('status', self::STATUS_VERIFIED);
    }

    public function scopeForWarehouse($query, $warehouseId)
    {
        return $query->where('warehouse_id', $warehouseId);
    }

    public function scopeOfType($query, $type)
    {
        return $query->where('count_type', $type);
    }

    public function scopeBetweenDates($query, $startDate, $endDate)
    {
        return $query->whereBetween('count_date', [$startDate, $endDate]);
    }

    public function scopeWithVariances($query)
    {
        return $query->whereHas('items', function ($q) {
            $q->where('variance_quantity', '!=', 0);
        });
    }

    // Accessors
    public function getCountTypeLabelAttribute(): string
    {
        return self::$countTypes[$this->count_type] ?? $this->count_type;
    }

    public function getStatusLabelAttribute(): string
    {
        return self::$statuses[$this->status] ?? $this->status;
    }

    public function getProgressAttribute(): array
    {
        $totalItems = $this->items->count();
        $countedItems = $this->items->where('status', '!=', StockCountItem::STATUS_PENDING)->count();
        $verifiedItems = $this->items->where('status', StockCountItem::STATUS_VERIFIED)->count();
        $itemsWithVariance = $this->items->where('variance_quantity', '!=', 0)->count();

        return [
            'total' => $totalItems,
            'counted' => $countedItems,
            'verified' => $verifiedItems,
            'with_variance' => $itemsWithVariance,
            'counted_percentage' => $totalItems > 0 ? round(($countedItems / $totalItems) * 100, 2) : 0,
            'verified_percentage' => $totalItems > 0 ? round(($verifiedItems / $totalItems) * 100, 2) : 0,
            'variance_percentage' => $totalItems > 0 ? round(($itemsWithVariance / $totalItems) * 100, 2) : 0
        ];
    }

    public function getVarianceSummaryAttribute(): array
    {
        $positiveVariance = $this->items->sum('variance_quantity');
        $negativeVariance = $this->items->sum('variance_quantity');

        return [
            'total_variance' => $this->items->sum('variance_quantity'),
            'absolute_variance' => $this->items->sum(DB::raw('ABS(variance_quantity)')),
            'positive_variance' => $this->items->where('variance_quantity', '>', 0)->sum('variance_quantity'),
            'negative_variance' => abs($this->items->where('variance_quantity', '<', 0)->sum('variance_quantity')),
            'variance_count' => $this->items->where('variance_quantity', '!=', 0)->count(),
            'variance_value' => $this->items->sum(function ($item) {
                return ($item->product->unit_cost ?? 0) * $item->variance_quantity;
            })
        ];
    }

    public function getAccuracyAttribute(): float
    {
        $totalExpected = $this->items->sum('expected_quantity');
        if ($totalExpected <= 0) {
            return 100;
        }

        $totalVariance = abs($this->items->sum('variance_quantity'));
        return round((($totalExpected - $totalVariance) / $totalExpected) * 100, 2);
    }

    // Methods
    public static function generateCountNumber(): string
    {
        $prefix = 'CNT';
        $year = now()->format('Y');
        $month = now()->format('m');

        $lastCount = self::whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastCount) {
            $lastNumber = intval(substr($lastCount->count_number, -4));
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$year}{$month}-{$newNumber}";
    }

    public static function createCycleCount(int $warehouseId, array $productIds = [], ?int $createdBy = null): self
    {
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
    }

    public static function createFullCount(int $warehouseId, ?int $createdBy = null): self
    {
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
    }

    public function start(): self
    {
        $this->status = self::STATUS_IN_PROGRESS;
        $this->save();

        return $this;
    }

    public function complete(?int $verifiedBy = null): self
    {
        DB::transaction(function () use ($verifiedBy) {
            // Update any pending items to zero count if not counted
            $this->items()->where('status', StockCountItem::STATUS_PENDING)
                ->update([
                    'counted_quantity' => 0,
                    'status' => StockCountItem::STATUS_COUNTED,
                    'notes' => DB::raw("CONCAT(notes, ' Auto-counted as zero on completion')")
                ]);

            $this->status = self::STATUS_COMPLETED;

            if ($verifiedBy) {
                $this->verified_by = $verifiedBy;
            }

            $this->save();
        });

        return $this;
    }

    public function verify(int $userId, bool $applyAdjustments = true): self
    {
        DB::transaction(function () use ($userId, $applyAdjustments) {
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
        });

        return $this;
    }

    public function cancel(?string $reason = null): self
    {
        $this->status = self::STATUS_CANCELLED;
        $this->notes = ($this->notes ? $this->notes . "\n" : '') . "Cancelled: " . ($reason ?? 'No reason provided');
        $this->save();

        return $this;
    }

    public function getItemsByVariance($type = 'all')
    {
        switch ($type) {
            case 'positive':
                return $this->items()->where('variance_quantity', '>', 0)->get();
            case 'negative':
                return $this->items()->where('variance_quantity', '<', 0)->get();
            case 'zero':
                return $this->items()->where('variance_quantity', '=', 0)->get();
            default:
                return $this->items;
        }
    }
}
