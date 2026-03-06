<?php
// app/Models/SalesOrderItem.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

/**
 * Sales Order Item Model
 * 
 * Represents an individual line item within a sales order. Tracks product
 * quantities, pricing, shipment status, and provides calculations for
 * financial values and shipping progress. Manages the relationship between
 * sales orders, products, and shipments.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property int $sales_order_id
 * @property int $product_id
 * @property int $quantity_ordered
 * @property int $quantity_shipped
 * @property int $quantity_reserved
 * @property float $unit_price
 * @property float $discount_percent
 * @property float $tax_percent
 * @property string $status
 * @property string|null $notes
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read SalesOrder $salesOrder
 * @property-read Product $product
 * @property-read Collection|ShipmentItem[] $shipmentItems
 * @property-read string $status_label
 * @property-read float $shipment_progress
 * @property-read int $remaining_quantity
 * @property-read bool $is_fully_shipped
 * @property-read float $subtotal
 * @property-read float $discount_amount
 * @property-read float $tax_amount
 * @property-read float $line_total
 * @property-read float $line_total_calculated
 */
class SalesOrderItem extends Model
{
    use HasFactory;

    /**
     * --------------------------------------------------------------------------
     * Configuration
     * --------------------------------------------------------------------------
     */

    /** @var string Database table name */
    protected $table = 'sales_order_items';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'sales_order_id',
        'product_id',
        'quantity_ordered',
        'quantity_shipped',
        'unit_price',
        'discount_percent',
        'tax_percent',
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
        'quantity_shipped' => 'integer',
        'quantity_reserved' => 'integer',
        'unit_price' => 'decimal:2',
        'discount_percent' => 'decimal:2',
        'tax_percent' => 'decimal:2',
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
        'quantity_shipped' => 0,
        'quantity_reserved' => 0,
        'discount_percent' => 0,
        'tax_percent' => 0,
        'status' => self::STATUS_PENDING
    ];

    /**
     * --------------------------------------------------------------------------
     * Status Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Item awaiting allocation/shipment */
    const STATUS_PENDING = 'pending';

    /** @var string Inventory allocated */
    const STATUS_ALLOCATED = 'allocated';

    /** @var string Partially shipped */
    const STATUS_PARTIALLY_SHIPPED = 'partially_shipped';

    /** @var string Fully shipped */
    const STATUS_SHIPPED = 'shipped';

    /** @var string Item cancelled */
    const STATUS_CANCELLED = 'cancelled';

    /**
     * Human-readable status labels.
     *
     * @var array<string, string>
     */
    public static $statuses = [
        self::STATUS_PENDING => 'Pending',
        self::STATUS_ALLOCATED => 'Allocated',
        self::STATUS_PARTIALLY_SHIPPED => 'Partially Shipped',
        self::STATUS_SHIPPED => 'Shipped',
        self::STATUS_CANCELLED => 'Cancelled'
    ];

    /**
     * Statuses that indicate the item is still open.
     *
     * @var array<string>
     */
    const OPEN_STATUSES = [
        self::STATUS_PENDING,
        self::STATUS_ALLOCATED,
        self::STATUS_PARTIALLY_SHIPPED
    ];

    /**
     * Statuses that indicate the item is closed.
     *
     * @var array<string>
     */
    const CLOSED_STATUSES = [
        self::STATUS_SHIPPED,
        self::STATUS_CANCELLED
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the parent sales order.
     *
     * @return BelongsTo
     */
    public function salesOrder(): BelongsTo
    {
        return $this->belongsTo(SalesOrder::class);
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
     * Get all shipment items for this order item.
     *
     * @return HasMany
     */
    public function shipmentItems(): HasMany
    {
        return $this->hasMany(ShipmentItem::class, 'sales_order_item_id');
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
     * Scope to allocated items.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeAllocated(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_ALLOCATED);
    }

    /**
     * Scope to shipped items.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeShipped(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_SHIPPED);
    }

    /**
     * Scope to partially shipped items.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopePartiallyShipped(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_PARTIALLY_SHIPPED);
    }

    /**
     * Scope to open items (not shipped or cancelled).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeOpen(Builder $query): Builder
    {
        return $query->whereIn('status', self::OPEN_STATUSES);
    }

    /**
     * Scope to closed items (shipped or cancelled).
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
     * Scope to items needing shipment.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeNeedsShipment(Builder $query): Builder
    {
        return $query->whereRaw('quantity_shipped < quantity_ordered')
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
     * Calculate shipment progress percentage.
     *
     * @return float
     */
    public function getShipmentProgressAttribute(): float
    {
        if ($this->quantity_ordered <= 0) {
            return 0;
        }

        return round(($this->quantity_shipped / $this->quantity_ordered) * 100, 2);
    }

    /**
     * Get remaining quantity to be shipped.
     *
     * @return int
     */
    public function getRemainingQuantityAttribute(): int
    {
        return max(0, $this->quantity_ordered - $this->quantity_shipped);
    }

    /**
     * Check if item is fully shipped.
     *
     * @return bool
     */
    public function getIsFullyShippedAttribute(): bool
    {
        return $this->quantity_shipped >= $this->quantity_ordered;
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
     * Get the shipped value (quantity_shipped * unit_price).
     *
     * @return float
     */
    public function getShippedValueAttribute(): float
    {
        return $this->quantity_shipped * $this->unit_price;
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
            'shipped' => $this->quantity_shipped,
            'remaining' => $this->remaining_quantity,
            'unit_price' => $this->unit_price,
            'line_total' => $this->line_total,
            'progress' => $this->shipment_progress . '%',
            'status' => $this->status_label
        ];
    }

    /**
     * Get allocation status for inventory.
     *
     * @return string
     */
    public function getAllocationStatusAttribute(): string
    {
        if ($this->quantity_reserved >= $this->remaining_quantity) {
            return 'fully_allocated';
        } elseif ($this->quantity_reserved > 0) {
            return 'partially_allocated';
        }

        return 'not_allocated';
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Ship a quantity against this item.
     *
     * @param int $quantity
     * @return bool
     * @throws \Exception
     */
    public function ship(int $quantity): bool
    {
        if ($quantity <= 0) {
            throw new \Exception('Shipment quantity must be positive.');
        }

        if ($this->status === self::STATUS_CANCELLED) {
            throw new \Exception('Cannot ship cancelled item.');
        }

        $newShipped = $this->quantity_shipped + $quantity;

        if ($newShipped > $this->quantity_ordered) {
            throw new \Exception('Cannot ship more than ordered quantity.');
        }

        return DB::transaction(function () use ($quantity, $newShipped) {
            $this->quantity_shipped = $newShipped;
            $this->quantity_reserved = max(0, $this->quantity_reserved - $quantity);
            $this->status = $this->determineStatus();

            return $this->save();
        });
    }

    /**
     * Allocate inventory for this item.
     *
     * @param int $quantity
     * @return bool
     */
    public function allocate(int $quantity): bool
    {
        if ($quantity <= 0) {
            return false;
        }

        $remainingNeeded = $this->remaining_quantity - $this->quantity_reserved;

        if ($quantity > $remainingNeeded) {
            return false;
        }

        $this->quantity_reserved += $quantity;
        $this->status = $this->determineStatus();

        return $this->save();
    }

    /**
     * Release allocated inventory.
     *
     * @param int|null $quantity
     * @return bool
     */
    public function releaseAllocation(?int $quantity = null): bool
    {
        if ($quantity === null) {
            $this->quantity_reserved = 0;
        } else {
            $this->quantity_reserved = max(0, $this->quantity_reserved - $quantity);
        }

        $this->status = $this->determineStatus();

        return $this->save();
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
            if ($this->quantity_shipped > 0) {
                throw new \Exception('Cannot cancel item with shipped quantities.');
            }

            $this->status = self::STATUS_CANCELLED;
            $this->quantity_reserved = 0;

            if ($reason) {
                $this->notes = ($this->notes ? $this->notes . "\n" : '') . "Cancelled: {$reason}";
            }

            return $this->save();
        });
    }

    /**
     * Determine status based on shipment and allocation.
     *
     * @return string
     */
    protected function determineStatus(): string
    {
        if ($this->quantity_shipped <= 0) {
            if ($this->quantity_reserved > 0) {
                return self::STATUS_ALLOCATED;
            }
            return self::STATUS_PENDING;
        }

        if ($this->quantity_shipped >= $this->quantity_ordered) {
            return self::STATUS_SHIPPED;
        }

        return self::STATUS_PARTIALLY_SHIPPED;
    }

    /**
     * Check if item can be edited.
     *
     * @return bool
     */
    public function isEditable(): bool
    {
        return $this->quantity_shipped === 0 &&
            $this->status !== self::STATUS_CANCELLED;
    }

    /**
     * Get the required tracking methods based on product.
     *
     * @return array
     */
    public function getRequiredTracking(): array
    {
        $required = [];

        if ($this->product->is_batch_tracked) {
            $required[] = 'batch';
        }

        if ($this->product->is_serial_tracked) {
            $required[] = 'serial';
        }

        if ($this->product->is_expirable) {
            $required[] = 'expiry';
        }

        return $required;
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
        // Initialize remaining quantity
        static::creating(function (self $item) {
            if (empty($item->status)) {
                $item->status = self::STATUS_PENDING;
            }
        });

        // Validate quantities
        static::saving(function (self $item) {
            if ($item->quantity_ordered <= 0) {
                return false;
            }

            if ($item->quantity_shipped < 0) {
                return false;
            }

            if ($item->quantity_reserved < 0) {
                return false;
            }

            return true;
        });

        // Update sales order totals when item changes
        static::saved(function (self $item) {
            $item->salesOrder->calculateTotals()->saveQuietly();
        });

        static::deleted(function (self $item) {
            $item->salesOrder->calculateTotals()->saveQuietly();
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get product demand summary.
     *
     * @param int $productId
     * @param int $days
     * @return array
     */
    public static function getProductDemandSummary(int $productId, int $days = 30): array
    {
        $items = self::forProduct($productId)
            ->whereHas('salesOrder', function ($q) use ($days) {
                $q->where('order_date', '>=', now()->subDays($days))
                    ->whereNotIn('status', [SalesOrder::STATUS_CANCELLED]);
            })
            ->get();

        return [
            'total_ordered' => $items->sum('quantity_ordered'),
            'total_shipped' => $items->sum('quantity_shipped'),
            'outstanding' => $items->sum('remaining_quantity'),
            'total_value' => $items->sum('line_total'),
            'shipped_value' => $items->sum('shipped_value'),
            'outstanding_value' => $items->sum('outstanding_value'),
            'order_count' => $items->count(),
            'completion_rate' => $items->sum('quantity_ordered') > 0
                ? round(($items->sum('quantity_shipped') / $items->sum('quantity_ordered')) * 100, 2)
                : 0
        ];
    }

    /**
     * Get items pending shipment.
     *
     * @return Collection
     */
    public static function getPendingShipmentItems(): Collection
    {
        return self::with(['salesOrder.customer', 'product'])
            ->whereIn('status', [self::STATUS_PENDING, self::STATUS_ALLOCATED])
            ->whereRaw('quantity_shipped < quantity_ordered')
            ->orderBy('created_at')
            ->get();
    }

    /**
     * --------------------------------------------------------------------------
     * Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Format for shipment creation.
     *
     * @return array
     */
    public function toShipmentOption(): array
    {
        return [
            'id' => $this->id,
            'product_id' => $this->product_id,
            'product_name' => $this->product->name,
            'product_sku' => $this->product->sku,
            'quantity_ordered' => $this->quantity_ordered,
            'quantity_shipped' => $this->quantity_shipped,
            'quantity_remaining' => $this->remaining_quantity,
            'unit_price' => $this->unit_price,
            'batch_tracked' => $this->product->is_batch_tracked,
            'serial_tracked' => $this->product->is_serial_tracked,
            'expirable' => $this->product->is_expirable,
            'allocated' => $this->quantity_reserved
        ];
    }

    /**
     * Get shipping status for display.
     *
     * @return string
     */
    public function getShippingStatusAttribute(): string
    {
        if ($this->is_fully_shipped) {
            return 'Completed';
        }

        if ($this->quantity_shipped > 0) {
            return 'In Progress';
        }

        if ($this->quantity_reserved > 0) {
            return 'Ready to Ship';
        }

        return 'Pending';
    }
}
