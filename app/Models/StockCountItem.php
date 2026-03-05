<?php
// app/Models/StockCountItem.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\DB;

class StockCountItem extends Model
{
    use HasFactory;

    protected $table = 'stock_count_items';

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

    protected $casts = [
        'expected_quantity' => 'integer',
        'counted_quantity' => 'integer',
        'variance_quantity' => 'integer',
        'variance_percentage' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Status constants
    const STATUS_PENDING = 'pending';
    const STATUS_COUNTED = 'counted';
    const STATUS_VERIFIED = 'verified';
    const STATUS_APPROVED = 'approved';
    const STATUS_REJECTED = 'rejected';

    public static $statuses = [
        self::STATUS_PENDING => 'Pending',
        self::STATUS_COUNTED => 'Counted',
        self::STATUS_VERIFIED => 'Verified',
        self::STATUS_APPROVED => 'Approved',
        self::STATUS_REJECTED => 'Rejected'
    ];

    // Variance reason constants
    const REASON_DAMAGE = 'damage';
    const REASON_THEFT = 'theft';
    const REASON_MISPLACEMENT = 'misplacement';
    const REASON_SYSTEM_ERROR = 'system_error';
    const REASON_SUPPLIER_ERROR = 'supplier_error';
    const REASON_RETURN = 'return';
    const REASON_OTHER = 'other';

    public static $varianceReasons = [
        self::REASON_DAMAGE => 'Damaged Goods',
        self::REASON_THEFT => 'Theft/Loss',
        self::REASON_MISPLACEMENT => 'Misplaced',
        self::REASON_SYSTEM_ERROR => 'System Error',
        self::REASON_SUPPLIER_ERROR => 'Supplier Error',
        self::REASON_RETURN => 'Customer Return',
        self::REASON_OTHER => 'Other'
    ];

    // Relationships
    public function stockCount(): BelongsTo
    {
        return $this->belongsTo(StockCount::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    public function countedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'counted_by');
    }

    public function approvedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    // Scopes
    public function scopePending($query)
    {
        return $query->where('status', self::STATUS_PENDING);
    }

    public function scopeCounted($query)
    {
        return $query->where('status', self::STATUS_COUNTED);
    }

    public function scopeVerified($query)
    {
        return $query->where('status', self::STATUS_VERIFIED);
    }

    public function scopeWithVariance($query)
    {
        return $query->where('variance_quantity', '!=', 0);
    }

    public function scopeWithoutVariance($query)
    {
        return $query->where('variance_quantity', '=', 0);
    }

    public function scopePositiveVariance($query)
    {
        return $query->where('variance_quantity', '>', 0);
    }

    public function scopeNegativeVariance($query)
    {
        return $query->where('variance_quantity', '<', 0);
    }

    public function scopeForProduct($query, $productId)
    {
        return $query->where('product_id', $productId);
    }

    public function scopeInLocation($query, $locationId)
    {
        return $query->where('location_id', $locationId);
    }

    public function scopeByVarianceReason($query, $reason)
    {
        return $query->where('variance_reason', $reason);
    }

    // Accessors
    public function getStatusLabelAttribute(): string
    {
        return self::$statuses[$this->status] ?? $this->status;
    }

    public function getVarianceReasonLabelAttribute(): ?string
    {
        return $this->variance_reason ?
            (self::$varianceReasons[$this->variance_reason] ?? $this->variance_reason) :
            null;
    }

    public function getVarianceDirectionAttribute(): string
    {
        if ($this->variance_quantity > 0) {
            return 'surplus';
        } elseif ($this->variance_quantity < 0) {
            return 'shortage';
        }
        return 'exact';
    }

    public function getVarianceSignAttribute(): string
    {
        return $this->variance_quantity > 0 ? '+' : ($this->variance_quantity < 0 ? '-' : '');
    }

    public function getVarianceValueAttribute(): float
    {
        return ($this->product->unit_cost ?? 0) * $this->variance_quantity;
    }

    public function getVarianceValueFormattedAttribute(): string
    {
        $value = $this->variance_value;
        $sign = $value > 0 ? '+' : ($value < 0 ? '-' : '');
        return $sign . number_format(abs($value), 2);
    }

    public function getIsCountedAttribute(): bool
    {
        return $this->status !== self::STATUS_PENDING;
    }

    public function getHasVarianceAttribute(): bool
    {
        return $this->variance_quantity != 0;
    }

    public function getIsAccurateAttribute(): bool
    {
        return $this->variance_quantity == 0;
    }

    public function getAccuracyAttribute(): float
    {
        if ($this->expected_quantity == 0) {
            return $this->counted_quantity == 0 ? 100 : 0;
        }

        $difference = abs($this->expected_quantity - $this->counted_quantity);
        return round((($this->expected_quantity - $difference) / $this->expected_quantity) * 100, 2);
    }

    public function getLocationPathAttribute(): string
    {
        return $this->location ? $this->location->full_location_path : 'Not assigned';
    }

    // Methods
    public function recordCount(int $quantity, int $userId, ?string $notes = null): self
    {
        $this->counted_quantity = $quantity;
        $this->counted_by = $userId;
        $this->status = self::STATUS_COUNTED;

        if ($notes) {
            $this->notes = ($this->notes ? $this->notes . "\n" : '') . $notes;
        }

        $this->save();

        return $this;
    }

    public function approve(int $userId, ?string $reason = null, ?string $notes = null): self
    {
        if ($this->has_variance && !$reason) {
            throw new \Exception('Variance reason is required for items with variance');
        }

        $this->variance_reason = $reason;
        $this->approved_by = $userId;
        $this->status = self::STATUS_APPROVED;

        if ($notes) {
            $this->notes = ($this->notes ? $this->notes . "\n" : '') . $notes;
        }

        $this->save();

        return $this;
    }

    public function reject(int $userId, string $reason): self
    {
        $this->status = self::STATUS_REJECTED;
        $this->approved_by = $userId;
        $this->notes = ($this->notes ? $this->notes . "\n" : '') . "Rejected: {$reason}";

        $this->save();

        return $this;
    }

    public function applyAdjustment(int $userId): ?InventoryMovement
    {
        if ($this->variance_quantity == 0) {
            return null;
        }

        return DB::transaction(function () use ($userId) {
            // Find or create inventory record
            $inventory = Inventory::firstOrCreate(
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

            // Adjust inventory
            $inventory->adjust($this->counted_quantity, "Stock count adjustment #{$this->stockCount->count_number}");

            // Create movement record
            $movement = InventoryMovement::record(
                $this->product_id,
                InventoryMovement::TYPE_ADJUSTMENT,
                $this->variance_quantity,
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

            return $movement;
        });
    }

    public function getSuggestedVarianceReason(): ?string
    {
        if (!$this->has_variance) {
            return null;
        }

        // Logic to suggest variance reason based on patterns
        if ($this->variance_quantity < 0) {
            // Shortage
            if (abs($this->variance_quantity) <= 2) {
                return self::REASON_MISPLACEMENT;
            } elseif (abs($this->variance_percentage) > 20) {
                return self::REASON_THEFT;
            }
        } else {
            // Surplus
            if ($this->variance_percentage <= 5) {
                return self::REASON_SYSTEM_ERROR;
            } elseif ($this->variance_percentage > 20) {
                return self::REASON_SUPPLIER_ERROR;
            }
        }

        return self::REASON_OTHER;
    }
}
