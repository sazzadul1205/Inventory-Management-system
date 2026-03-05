<?php
// app/Models/PurchaseOrderItem.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

/**
 * Purchase Order Item Model
 * 
 * Represents a line item within a purchase order. Tracks product quantities,
 * pricing, receipt status, and provides calculations for financial values
 * and receipt progress. Manages the relationship between purchase orders,
 * products, and receipt transactions.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property int $purchase_order_id
 * @property int $product_id
 * @property int $quantity_ordered
 * @property int $quantity_received
 * @property int $quantity_remaining
 * @property float $unit_price
 * @property float $discount_percent
 * @property float $tax_percent
 * @property \Carbon\Carbon|null $expected_delivery_date
 * @property string $status
 * @property string|null $notes
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read PurchaseOrder $purchaseOrder
 * @property-read Product $product
 * @property-read Collection|PurchaseReceiptItem[] $receiptItems
 * @property-read string $status_label
 * @property-read float $receipt_progress
 * @property-read int $remaining_quantity
 * @property-read bool $is_fully_received
 * @property-read float $subtotal
 * @property-read float $discount_amount
 * @property-read float $tax_amount
 * @property-read float $line_total
 * @property-read float $line_total_calculated
 */
class PurchaseOrderItem extends Model
{
    use HasFactory;

    /**
     * --------------------------------------------------------------------------
     * Configuration
     * --------------------------------------------------------------------------
     */

    /** @var string Database table name */
    protected $table = 'purchase_order_items';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'purchase_order_id',
        'product_id',
        'quantity_ordered',
        'quantity_received',
        'quantity_remaining',
        'unit_price',
        'discount_percent',
        'tax_percent',
        'expected_delivery_date',
        'status',
        'notes'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'quantity_ordered' => 'integer',
        'quantity_received' => 'integer',
        'quantity_remaining' => 'integer',
        'unit_price' => 'decimal:2',
        'discount_percent' => 'decimal:2',
        'tax_percent' => 'decimal:2',
        'expected_delivery_date' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'quantity_ordered' => 1,
        'quantity_received' => 0,
        'quantity_remaining' => 0,
        'discount_percent' => 0,
        'tax_percent' => 0,
        'status' => self::STATUS_PENDING
    ];

    /**
     * --------------------------------------------------------------------------
     * Status Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Item awaiting receipt */
    const STATUS_PENDING = 'pending';

    /** @var string Partially received */
    const STATUS_PARTIALLY_RECEIVED = 'partially_received';

    /** @var string Fully received */
    const STATUS_RECEIVED = 'received';

    /** @var string Item cancelled */
    const STATUS_CANCELLED = 'cancelled';

    /**
     * Human-readable status labels.
     *
     * @var array<string, string>
     */
    public static $statuses = [
        self::STATUS_PENDING => 'Pending',
        self::STATUS_PARTIALLY_RECEIVED => 'Partially Received',
        self::STATUS_RECEIVED => 'Received',
        self::STATUS_CANCELLED => 'Cancelled'
    ];

    /**
     * Statuses that indicate the item is still open.
     *
     * @var array<string>
     */
    const OPEN_STATUSES = [
        self::STATUS_PENDING,
        self::STATUS_PARTIALLY_RECEIVED
    ];

    /**
     * Statuses that indicate the item is closed.
     *
     * @var array<string>
     */
    const CLOSED_STATUSES = [
        self::STATUS_RECEIVED,
        self::STATUS_CANCELLED
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the parent purchase order.
     *
     * @return BelongsTo
     */
    public function purchaseOrder(): BelongsTo
    {
        return $this->belongsTo(PurchaseOrder::class);
    }

    /**
     * Get the product being ordered.
     *
     * @return BelongsTo
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Get all receipt items for this PO item.
     *
     * @return HasMany
     */
    public function receiptItems(): HasMany
    {
        return $this->hasMany(PurchaseReceiptItem::class, 'purchase_order_item_id');
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
     * Scope to received items.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeReceived(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_RECEIVED);
    }

    /**
     * Scope to partially received items.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopePartiallyReceived(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_PARTIALLY_RECEIVED);
    }

    /**
     * Scope to open items (pending or partially received).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeOpen(Builder $query): Builder
    {
        return $query->whereIn('status', self::OPEN_STATUSES);
    }

    /**
     * Scope to closed items (received or cancelled).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeClosed(Builder $query): Builder
    {
        return $query->whereIn('status', self::CLOSED_STATUSES);
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
     * Scope to items with expected delivery date range.
     *
     * @param Builder $query
     * @param string $startDate
     * @param string $endDate
     * @return Builder
     */
    public function scopeExpectedBetween(Builder $query, string $startDate, string $endDate): Builder
    {
        return $query->whereBetween('expected_delivery_date', [$startDate, $endDate]);
    }

    /**
     * Scope to items needing receipt (not fully received).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeNeedsReceipt(Builder $query): Builder
    {
        return $query->whereRaw('quantity_received < quantity_ordered')
            ->whereNotIn('status', [self::STATUS_CANCELLED]);
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
     * Calculate receipt progress percentage.
     *
     * @return float
     */
    public function getReceiptProgressAttribute(): float
    {
        if ($this->quantity_ordered <= 0) {
            return 0;
        }

        return round(($this->quantity_received / $this->quantity_ordered) * 100, 2);
    }

    /**
     * Get remaining quantity to be received.
     *
     * @return int
     */
    public function getRemainingQuantityAttribute(): int
    {
        return max(0, $this->quantity_ordered - $this->quantity_received);
    }

    /**
     * Check if item is fully received.
     *
     * @return bool
     */
    public function getIsFullyReceivedAttribute(): bool
    {
        return $this->quantity_received >= $this->quantity_ordered;
    }

    /**
     * Calculate subtotal (quantity * unit price).
     *
     * @return float
     */
    public function getSubtotalAttribute(): float
    {
        return $this->quantity_ordered * $this->unit_price;
    }

    /**
     * Calculate discount amount.
     *
     * @return float
     */
    public function getDiscountAmountAttribute(): float
    {
        return $this->subtotal * ($this->discount_percent / 100);
    }

    /**
     * Calculate tax amount.
     *
     * @return float
     */
    public function getTaxAmountAttribute(): float
    {
        $afterDiscount = $this->subtotal - $this->discount_amount;
        return $afterDiscount * ($this->tax_percent / 100);
    }

    /**
     * Calculate line total (with discount and tax).
     *
     * @return float
     */
    public function getLineTotalAttribute(): float
    {
        return $this->subtotal - $this->discount_amount + $this->tax_amount;
    }

    /**
     * Calculate line total (alternative method for compatibility).
     *
     * @return float
     */
    public function getLineTotalCalculatedAttribute(): float
    {
        $subtotal = $this->quantity_ordered * $this->unit_price;
        $afterDiscount = $subtotal * (1 - ($this->discount_percent / 100));
        return $afterDiscount * (1 + ($this->tax_percent / 100));
    }

    /**
     * Get the received value (quantity_received * unit_price).
     *
     * @return float
     */
    public function getReceivedValueAttribute(): float
    {
        return $this->quantity_received * $this->unit_price;
    }

    /**
     * Get the outstanding value (remaining_quantity * unit_price).
     *
     * @return float
     */
    public function getOutstandingValueAttribute(): float
    {
        return $this->remaining_quantity * $this->unit_price;
    }

    /**
     * Get item summary for display.
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
            'ordered' => $this->quantity_ordered,
            'received' => $this->quantity_received,
            'remaining' => $this->remaining_quantity,
            'unit_price' => $this->unit_price,
            'line_total' => $this->line_total,
            'progress' => $this->receipt_progress . '%',
            'status' => $this->status_label
        ];
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Receive a quantity against this item.
     *
     * @param int $quantity
     * @return bool
     * @throws \Exception
     */
    public function receive(int $quantity): bool
    {
        return DB::transaction(function () use ($quantity) {
            if ($quantity <= 0) {
                throw new \Exception('Receipt quantity must be positive.');
            }

            if ($this->status === self::STATUS_CANCELLED) {
                throw new \Exception('Cannot receive cancelled item.');
            }

            $newReceived = $this->quantity_received + $quantity;

            if ($newReceived > $this->quantity_ordered) {
                throw new \Exception('Cannot receive more than ordered quantity.');
            }

            $this->quantity_received = $newReceived;
            $this->quantity_remaining = $this->quantity_ordered - $newReceived;
            $this->status = $this->determineStatus();

            return $this->save();
        });
    }

    /**
     * Cancel this item.
     *
     * @param string|null $reason
     * @return bool
     */
    public function cancel(?string $reason = null): bool
    {
        return DB::transaction(function () use ($reason) {
            if ($this->quantity_received > 0) {
                throw new \Exception('Cannot cancel item with received quantities.');
            }

            $this->status = self::STATUS_CANCELLED;

            if ($reason) {
                $this->notes = ($this->notes ? $this->notes . "\n" : '') . "Cancelled: {$reason}";
            }

            return $this->save();
        });
    }

    /**
     * Determine status based on receipt quantities.
     *
     * @return string
     */
    protected function determineStatus(): string
    {
        if ($this->quantity_received <= 0) {
            return self::STATUS_PENDING;
        }

        if ($this->quantity_received >= $this->quantity_ordered) {
            return self::STATUS_RECEIVED;
        }

        return self::STATUS_PARTIALLY_RECEIVED;
    }

    /**
     * Update expected delivery date.
     *
     * @param string|null $date
     * @return bool
     */
    public function updateExpectedDate(?string $date): bool
    {
        if ($date && $this->isFullyReceived) {
            throw new \Exception('Cannot update expected date for received item.');
        }

        $this->expected_delivery_date = $date;
        return $this->save();
    }

    /**
     * Check if item can be edited.
     *
     * @return bool
     */
    public function isEditable(): bool
    {
        return $this->quantity_received === 0 &&
            $this->status !== self::STATUS_CANCELLED;
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
        // Initialize quantity remaining
        static::creating(function (self $item) {
            $item->quantity_remaining = $item->quantity_ordered;

            if (empty($item->expected_delivery_date)) {
                $item->expected_delivery_date = $item->purchaseOrder?->expected_delivery_date;
            }
        });

        // Validate quantities
        static::saving(function (self $item) {
            if ($item->quantity_ordered <= 0) {
                return false;
            }

            if ($item->quantity_received < 0) {
                return false;
            }

            $item->quantity_remaining = $item->quantity_ordered - $item->quantity_received;

            return true;
        });

        // Update purchase order totals when item changes
        static::saved(function (self $item) {
            $item->purchaseOrder->calculateTotals()->saveQuietly();
        });

        static::deleted(function (self $item) {
            $item->purchaseOrder->calculateTotals()->saveQuietly();
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get receipt summary for a product.
     *
     * @param int $productId
     * @param int $days
     * @return array
     */
    public static function getProductReceiptSummary(int $productId, int $days = 30): array
    {
        $items = self::forProduct($productId)
            ->whereHas('purchaseOrder', function ($q) use ($days) {
                $q->where('created_at', '>=', now()->subDays($days));
            })
            ->get();

        return [
            'total_ordered' => $items->sum('quantity_ordered'),
            'total_received' => $items->sum('quantity_received'),
            'outstanding' => $items->sum('remaining_quantity'),
            'total_value' => $items->sum('line_total'),
            'received_value' => $items->sum('received_value'),
            'outstanding_value' => $items->sum('outstanding_value'),
            'item_count' => $items->count(),
            'completion_rate' => $items->sum('quantity_ordered') > 0
                ? round(($items->sum('quantity_received') / $items->sum('quantity_ordered')) * 100, 2)
                : 0
        ];
    }

    /**
     * Get overdue items.
     *
     * @return Collection
     */
    public static function getOverdueItems(): Collection
    {
        return self::with(['purchaseOrder.supplier', 'product'])
            ->whereIn('status', self::OPEN_STATUSES)
            ->whereNotNull('expected_delivery_date')
            ->where('expected_delivery_date', '<', now())
            ->orderBy('expected_delivery_date')
            ->get();
    }

    /**
     * --------------------------------------------------------------------------
     * Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Format for receipt entry.
     *
     * @return array
     */
    public function toReceiptOption(): array
    {
        return [
            'id' => $this->id,
            'product_id' => $this->product_id,
            'product_name' => $this->product->name,
            'product_sku' => $this->product->sku,
            'quantity_ordered' => $this->quantity_ordered,
            'quantity_received' => $this->quantity_received,
            'quantity_remaining' => $this->remaining_quantity,
            'unit_price' => $this->unit_price,
            'batch_tracked' => $this->product->is_batch_tracked,
            'serial_tracked' => $this->product->is_serial_tracked,
            'expirable' => $this->product->is_expirable
        ];
    }

    /**
     * Get expected delivery status.
     *
     * @return string
     */
    public function getDeliveryStatusAttribute(): string
    {
        if (!$this->expected_delivery_date) {
            return 'not_scheduled';
        }

        if ($this->isFullyReceived) {
            return 'received';
        }

        if ($this->expected_delivery_date->isPast()) {
            return 'overdue';
        }

        if ($this->expected_delivery_date->isToday()) {
            return 'due_today';
        }

        if ($this->expected_delivery_date->diffInDays(now()) <= 7) {
            return 'due_soon';
        }

        return 'on_schedule';
    }
}
