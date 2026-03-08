<?php
// app/Models/SalesOrder.php

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
 * Sales Order Model
 * 
 * Represents a customer sales order in the system. Manages the complete order
 * lifecycle from draft creation through approval, processing, shipping, and
 * delivery. Handles inventory allocation, credit limit checking, and integrates
 * with shipments and payments.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $so_number
 * @property int $customer_id
 * @property int $warehouse_id
 * @property \Carbon\Carbon $order_date
 * @property \Carbon\Carbon|null $required_date
 * @property \Carbon\Carbon|null $shipped_date
 * @property string $status
 * @property string|null $shipping_address
 * @property string|null $billing_address
 * @property string $payment_status
 * @property string|null $payment_method
 * @property float $subtotal
 * @property float $tax_amount
 * @property float $shipping_cost
 * @property float $discount_amount
 * @property float $total_amount
 * @property string|null $notes
 * @property int|null $created_by
 * @property int|null $approved_by
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read Customer $customer
 * @property-read Warehouse $warehouse
 * @property-read Collection|SalesOrderItem[] $items
 * @property-read Collection|Shipment[] $shipments
 * @property-read User|null $createdBy
 * @property-read User|null $approvedBy
 * @property-read string $status_label
 * @property-read string $payment_status_label
 * @property-read array $shipment_progress
 * @property-read bool $is_fully_shipped
 * @property-read bool $is_overdue
 * @property-read int|null $days_overdue
 */
class SalesOrder extends Model
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
        'so_number',
        'customer_id',
        'warehouse_id',
        'order_date',
        'required_date',
        'shipped_date',
        'status',
        'shipping_address',
        'billing_address',
        'payment_status',
        'payment_method',
        'subtotal',
        'tax_amount',
        'shipping_cost',
        'discount_amount',
        'total_amount',
        'notes',
        'created_by',
        'approved_by'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'order_date' => 'date',
        'required_date' => 'date',
        'shipped_date' => 'date',
        'subtotal' => 'decimal:2',
        'tax_amount' => 'decimal:2',
        'shipping_cost' => 'decimal:2',
        'discount_amount' => 'decimal:2',
        'total_amount' => 'decimal:2',
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
        'payment_status' => self::PAYMENT_PENDING,
        'subtotal' => 0,
        'tax_amount' => 0,
        'shipping_cost' => 0,
        'discount_amount' => 0,
        'total_amount' => 0
    ];

    /**
     * --------------------------------------------------------------------------
     * Status Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Initial draft state */
    const STATUS_DRAFT = 'draft';

    /** @var string Submitted but not approved */
    const STATUS_PENDING = 'pending';

    /** @var string Approved and ready for processing */
    const STATUS_APPROVED = 'approved';

    /** @var string Being picked/packed */
    const STATUS_PROCESSING = 'processing';

    /** @var string Partially shipped */
    const STATUS_PARTIALLY_SHIPPED = 'partially_shipped';

    /** @var string Fully shipped */
    const STATUS_SHIPPED = 'shipped';

    /** @var string Delivered to customer */
    const STATUS_DELIVERED = 'delivered';

    /** @var string Order cancelled */
    const STATUS_CANCELLED = 'cancelled';

    /**
     * Human-readable status labels.
     *
     * @var array<string, string>
     */
    public static $statuses = [
        self::STATUS_DRAFT => 'Draft',
        self::STATUS_PENDING => 'Pending Approval',
        self::STATUS_APPROVED => 'Approved',
        self::STATUS_PROCESSING => 'Processing',
        self::STATUS_PARTIALLY_SHIPPED => 'Partially Shipped',
        self::STATUS_SHIPPED => 'Shipped',
        self::STATUS_DELIVERED => 'Delivered',
        self::STATUS_CANCELLED => 'Cancelled'
    ];

    /**
     * Statuses that indicate the order is active.
     *
     * @var array<string>
     */
    const ACTIVE_STATUSES = [
        self::STATUS_APPROVED,
        self::STATUS_PROCESSING,
        self::STATUS_PARTIALLY_SHIPPED,
        self::STATUS_SHIPPED
    ];

    /**
     * Statuses that indicate the order is closed.
     *
     * @var array<string>
     */
    const CLOSED_STATUSES = [
        self::STATUS_DELIVERED,
        self::STATUS_CANCELLED
    ];

    /**
     * --------------------------------------------------------------------------
     * Payment Status Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Payment pending */
    const PAYMENT_PENDING = 'pending';

    /** @var string Fully paid */
    const PAYMENT_PAID = 'paid';

    /** @var string Partially paid */
    const PAYMENT_PARTIALLY_PAID = 'partially_paid';

    /** @var string Payment refunded */
    const PAYMENT_REFUNDED = 'refunded';

    /**
     * Human-readable payment status labels.
     *
     * @var array<string, string>
     */
    public static $paymentStatuses = [
        self::PAYMENT_PENDING => 'Pending',
        self::PAYMENT_PAID => 'Paid',
        self::PAYMENT_PARTIALLY_PAID => 'Partially Paid',
        self::PAYMENT_REFUNDED => 'Refunded'
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the customer for this order.
     *
     * @return BelongsTo
     */
    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    /**
     * Get the warehouse fulfilling this order.
     *
     * @return BelongsTo
     */
    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    /**
     * Get all items in this order.
     *
     * @return HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(SalesOrderItem::class);
    }

    /**
     * Get all shipments for this order.
     *
     * @return HasMany
     */
    public function shipments(): HasMany
    {
        return $this->hasMany(Shipment::class);
    }

    /**
     * Get the user who created this order.
     *
     * @return BelongsTo
     */
    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the user who approved this order.
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
     * Scope to draft orders.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeDraft(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_DRAFT);
    }

    /**
     * Scope to pending orders.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopePending(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_PENDING);
    }

    /**
     * Scope to approved orders.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeApproved(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_APPROVED);
    }

    /**
     * Scope to processing orders.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeProcessing(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_PROCESSING);
    }

    /**
     * Scope to shipped orders (including partial).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeShipped(Builder $query): Builder
    {
        return $query->whereIn('status', [
            self::STATUS_PARTIALLY_SHIPPED,
            self::STATUS_SHIPPED,
            self::STATUS_DELIVERED
        ]);
    }

    /**
     * Scope to active orders.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->whereIn('status', self::ACTIVE_STATUSES);
    }

    /**
     * Scope to closed orders.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeClosed(Builder $query): Builder
    {
        return $query->whereIn('status', self::CLOSED_STATUSES);
    }

    /**
     * Scope to filter by customer.
     *
     * @param Builder $query
     * @param int $customerId
     * @return Builder
     */
    public function scopeForCustomer(Builder $query, int $customerId): Builder
    {
        return $query->where('customer_id', $customerId);
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
     * Scope to overdue orders.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeOverdue(Builder $query): Builder
    {
        return $query->where('required_date', '<', now())
            ->whereNotIn('status', self::CLOSED_STATUSES);
    }

    /**
     * Scope to orders due today.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeDueToday(Builder $query): Builder
    {
        return $query->whereDate('required_date', now())
            ->whereNotIn('status', self::CLOSED_STATUSES);
    }

    /**
     * Scope to orders due this week.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeDueThisWeek(Builder $query): Builder
    {
        return $query->whereBetween('required_date', [
            now()->startOfDay(),
            now()->addDays(7)->endOfDay()
        ])->whereNotIn('status', self::CLOSED_STATUSES);
    }

    /**
     * Scope to filter by payment status.
     *
     * @param Builder $query
     * @param string $status
     * @return Builder
     */
    public function scopeByPaymentStatus(Builder $query, string $status): Builder
    {
        return $query->where('payment_status', $status);
    }

    /**
     * Scope to orders with credit check issues.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeCreditIssues(Builder $query): Builder
    {
        return $query->whereHas('customer', function ($q) {
            $q->whereRaw('total_amount > credit_limit');
        });
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
     * Get human-readable payment status label.
     *
     * @return string
     */
    public function getPaymentStatusLabelAttribute(): string
    {
        return self::$paymentStatuses[$this->payment_status] ?? ucfirst($this->payment_status);
    }

    /**
     * Get shipment progress statistics.
     *
     * @return array<string, mixed>
     */
    public function getShipmentProgressAttribute(): array
    {
        $totalItems = $this->items->count();

        if ($totalItems === 0) {
            return [
                'total' => 0,
                'fully_shipped' => 0,
                'partially_shipped' => 0,
                'pending' => 0,
                'percentage' => 0
            ];
        }

        $fullyShippedItems = $this->items->filter(function ($item) {
            return $item->quantity_shipped >= $item->quantity_ordered;
        })->count();

        $partialItems = $this->items->filter(function ($item) {
            return $item->quantity_shipped > 0 &&
                $item->quantity_shipped < $item->quantity_ordered;
        })->count();

        $pendingItems = $this->items->filter(function ($item) {
            return $item->quantity_shipped == 0;
        })->count();

        return [
            'total' => $totalItems,
            'fully_shipped' => $fullyShippedItems,
            'partially_shipped' => $partialItems,
            'pending' => $pendingItems,
            'percentage' => round(($fullyShippedItems / $totalItems) * 100, 2)
        ];
    }

    /**
     * Check if order is fully shipped.
     *
     * @return bool
     */
    public function getIsFullyShippedAttribute(): bool
    {
        return $this->items->every(function ($item) {
            return $item->quantity_shipped >= $item->quantity_ordered;
        });
    }

    /**
     * Check if order is overdue.
     *
     * @return bool
     */
    public function getIsOverdueAttribute(): bool
    {
        return $this->required_date &&
            $this->required_date->isPast() &&
            !in_array($this->status, self::CLOSED_STATUSES);
    }

    /**
     * Get days overdue.
     *
     * @return int|null
     */
    public function getDaysOverdueAttribute(): ?int
    {
        if (!$this->is_overdue) {
            return null;
        }

        return $this->required_date->diffInDays(now());
    }

    /**
     * Get the order summary.
     *
     * @return array
     */
    public function getSummaryAttribute(): array
    {
        return [
            'id' => $this->id,
            'so_number' => $this->so_number,
            'customer' => $this->customer->name,
            'order_date' => $this->order_date?->format('Y-m-d'),
            'required_date' => $this->required_date?->format('Y-m-d'),
            'total_amount' => $this->total_amount,
            'status' => $this->status_label,
            'payment_status' => $this->payment_status_label,
            'item_count' => $this->items->count(),
            'shipment_progress' => $this->shipment_progress['percentage'] . '%'
        ];
    }

    /**
     * Get the display number with status.
     *
     * @return string
     */
    public function getDisplayNumberAttribute(): string
    {
        return "{$this->so_number} ({$this->status_label})";
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Generate a unique SO number.
     * Format: SO-YYYYMM-XXXX where XXXX is sequential.
     *
     * @return string
     */
    public static function generateSONumber(): string
    {
        $prefix = 'SO';
        $yearMonth = now()->format('Ym');

        $lastSO = self::whereYear('created_at', now()->year)
            ->whereMonth('created_at', now()->month)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastSO && preg_match('/-(\d{4})$/', $lastSO->so_number, $matches)) {
            $lastNumber = (int) $matches[1];
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$yearMonth}-{$newNumber}";
    }

    /**
     * Calculate and update order totals.
     *
     * @return self
     */
    public function calculateTotals(): self
    {
        return DB::transaction(function () {
            $this->subtotal = $this->items->sum('total_price');

            $discountedSubtotal = $this->subtotal - $this->discount_amount;
            $this->total_amount = $discountedSubtotal + $this->tax_amount + $this->shipping_cost;

            $this->saveQuietly();

            return $this;
        });
    }

    /**
     * Update order status based on shipment progress.
     *
     * @return self
     */
    public function updateStatus(): self
    {
        if ($this->status === self::STATUS_CANCELLED) {
            return $this;
        }

        return DB::transaction(function () {
            if ($this->is_fully_shipped) {
                $this->status = self::STATUS_SHIPPED;
                $this->shipped_date = now();
            } elseif ($this->items->sum('quantity_shipped') > 0) {
                $this->status = self::STATUS_PARTIALLY_SHIPPED;
            }

            $this->saveQuietly();

            return $this;
        });
    }

    /**
     * Approve the sales order.
     *
     * @param int $userId
     * @return self
     * @throws \Exception
     */
    public function approve(int $userId): self
    {
        return DB::transaction(function () use ($userId) {
            // Check customer credit limit
            if (!$this->customer->checkCreditLimit($this->total_amount)) {
                throw new \Exception('Order exceeds customer credit limit.');
            }

            $this->status = self::STATUS_APPROVED;
            $this->approved_by = $userId;
            $this->save();

            return $this;
        });
    }

    /**
     * Cancel the sales order.
     *
     * @param string|null $reason
     * @return self
     */
    public function cancel(?string $reason = null): self
    {
        return DB::transaction(function () use ($reason) {
            // Release any reserved inventory
            foreach ($this->items as $item) {
                if ($item->quantity_reserved > 0) {
                    // Release inventory reservation
                    Inventory::whereHas('product', function ($q) use ($item) {
                        $q->where('id', $item->product_id);
                    })->get()->each(function ($inventory) use ($item) {
                        $inventory->unreserve($item->quantity_reserved);
                    });
                }
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
     * Allocate inventory for this order.
     *
     * @return array
     * @throws \Exception
     */
    public function allocateInventory(): array
    {
        $allocations = [];
        $errors = [];

        DB::transaction(function () use (&$allocations, &$errors) {
            foreach ($this->items as $item) {
                $remainingToAllocate = $item->quantity_ordered - $item->quantity_shipped;

                if ($remainingToAllocate <= 0) {
                    continue;
                }

                // Find available inventory (FIFO by expiry date)
                $availableInventory = Inventory::available()
                    ->byProduct($item->product_id)
                    ->inWarehouse($this->warehouse_id)
                    ->orderBy('expiry_date')
                    ->orderBy('created_at')
                    ->get();

                $allocated = $this->allocateFromInventory($item, $availableInventory, $remainingToAllocate, $allocations);

                if ($allocated < $remainingToAllocate) {
                    $errors[] = "Insufficient inventory for product: {$item->product->name}. " .
                        "Required: {$remainingToAllocate}, Available: {$allocated}";
                }
            }

            if (!empty($errors)) {
                throw new \Exception(implode("\n", $errors));
            }
        });

        return $allocations;
    }

    /**
     * Allocate from available inventory.
     *
     * @param SalesOrderItem $item
     * @param Collection $availableInventory
     * @param int $remainingToAllocate
     * @param array &$allocations
     * @return int
     */
    protected function allocateFromInventory(
        SalesOrderItem $item,
        Collection $availableInventory,
        int $remainingToAllocate,
        array &$allocations
    ): int {
        $allocated = 0;

        foreach ($availableInventory as $inventory) {
            if ($allocated >= $remainingToAllocate) {
                break;
            }

            $availableQty = $inventory->quantity_available;
            $allocateQty = min($availableQty, $remainingToAllocate - $allocated);

            if ($allocateQty > 0) {
                $inventory->reserve($allocateQty);

                $allocations[] = [
                    'inventory_id' => $inventory->id,
                    'product_id' => $item->product_id,
                    'quantity' => $allocateQty,
                    'batch_number' => $inventory->batch_number,
                    'serial_number' => $inventory->serial_number,
                    'location_id' => $inventory->location_id
                ];

                $item->quantity_reserved += $allocateQty;
                $allocated += $allocateQty;
            }
        }

        $item->save();

        return $allocated;
    }

    /**
     * Ship items from this order.
     *
     * @param array $shipmentData
     * @param array $items
     * @return Shipment
     * @throws \Exception
     */
    public function ship(array $shipmentData, array $items): Shipment
    {
        return DB::transaction(function () use ($shipmentData, $items) {
            // Create shipment record
            $shipment = $this->shipments()->create([
                'shipment_number' => Shipment::generateShipmentNumber(),
                'warehouse_id' => $shipmentData['warehouse_id'] ?? $this->warehouse_id,
                'shipped_date' => $shipmentData['shipped_date'] ?? now(),
                'carrier' => $shipmentData['carrier'] ?? null,
                'tracking_number' => $shipmentData['tracking_number'] ?? null,
                'shipping_method' => $shipmentData['shipping_method'] ?? null,
                'shipping_cost' => $shipmentData['shipping_cost'] ?? 0,
                'notes' => $shipmentData['notes'] ?? null,
                'shipped_by' => Auth::id(),
            ]);

            // Process each shipped item
            foreach ($items as $itemData) {
                $this->processShippedItem($shipment, $itemData);
            }

            // Update order status
            $this->updateStatus()->save();

            return $shipment;
        });
    }

    /**
     * Process a single shipped item.
     *
     * @param Shipment $shipment
     * @param array $itemData
     * @return void
     * @throws \Exception
     */
    protected function processShippedItem(Shipment $shipment, array $itemData): void
    {
        $soItem = $this->items()->findOrFail($itemData['sales_order_item_id']);

        // Validate quantity
        if ($itemData['quantity_shipped'] <= 0) {
            throw new \Exception('Quantity shipped must be greater than zero.');
        }

        if (($soItem->quantity_shipped + $itemData['quantity_shipped']) > $soItem->quantity_ordered) {
            throw new \Exception('Cannot ship more than ordered quantity.');
        }

        // Create shipment item
        $shipment->items()->create([
            'sales_order_item_id' => $soItem->id,
            'product_id' => $soItem->product_id,
            'location_id' => $itemData['location_id'],
            'quantity_shipped' => $itemData['quantity_shipped'],
            'batch_number' => $itemData['batch_number'] ?? null,
            'serial_number' => $itemData['serial_number'] ?? null,
            'notes' => $itemData['notes'] ?? null
        ]);

        // Update SO item
        $soItem->quantity_shipped += $itemData['quantity_shipped'];
        $soItem->quantity_reserved -= $itemData['quantity_shipped'];
        $soItem->status = $soItem->quantity_shipped >= $soItem->quantity_ordered ?
            SalesOrderItem::STATUS_SHIPPED :
            SalesOrderItem::STATUS_PARTIALLY_SHIPPED;
        $soItem->save();

        // Update inventory
        $this->updateInventoryForShipment($soItem, $shipment, $itemData);
    }

    /**
     * Update inventory after shipment.
     *
     * @param SalesOrderItem $soItem
     * @param Shipment $shipment
     * @param array $itemData
     * @return void
     */
    protected function updateInventoryForShipment(SalesOrderItem $soItem, Shipment $shipment, array $itemData): void
    {
        $inventory = Inventory::where('product_id', $soItem->product_id)
            ->where('warehouse_id', $shipment->warehouse_id)
            ->where('location_id', $itemData['location_id'])
            ->where('batch_number', $itemData['batch_number'] ?? null)
            ->where('serial_number', $itemData['serial_number'] ?? null)
            ->first();

        if ($inventory) {
            $inventory->ship($itemData['quantity_shipped']);

            // Record inventory movement
            InventoryMovement::recordShipment(
                $soItem->product_id,
                $itemData['quantity_shipped'],
                $inventory->unit_cost,
                $shipment->warehouse_id,
                $itemData['location_id'],
                ['type' => InventoryMovement::REF_SALES_ORDER, 'id' => $this->id],
                $itemData['batch_number'] ?? null,
                $itemData['serial_number'] ?? null,
                "Shipped via SO: {$this->so_number}"
            );
        }
    }

    /**
     * Check if order can be modified.
     *
     * @return bool
     */
    public function isModifiable(): bool
    {
        return in_array($this->status, [self::STATUS_DRAFT, self::STATUS_PENDING]);
    }

    /**
     * Check if order can be cancelled.
     *
     * @return bool
     */
    public function isCancellable(): bool
    {
        return !in_array($this->status, [self::STATUS_DELIVERED, self::STATUS_CANCELLED]);
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
        // Auto-generate SO number and set order date
        static::creating(function (self $so) {
            if (empty($so->so_number)) {
                $so->so_number = self::generateSONumber();
            }

            if (empty($so->order_date)) {
                $so->order_date = now();
            }

            if (empty($so->created_by) && Auth::check()) {
                $so->created_by = Auth::id();
            }
        });

        // Update totals before saving
        static::saving(function (self $so) {
            if ($so->isModifiable()) {
                $so->calculateTotals();
            }
        });

        // Prevent modification of delivered/cancelled orders
        static::updating(function (self $so) {
            if ($so->getOriginal('status') !== $so->status) {
                // Status change is allowed
                return true;
            }

            if (in_array($so->getOriginal('status'), self::CLOSED_STATUSES)) {
                return false;
            }

            return true;
        });

        // Clean up related records before deletion
        static::deleting(function (self $so) {
            if ($so->shipments()->exists()) {
                throw new \Exception('Cannot delete sales order with shipments.');
            }

            // Delete items first
            $so->items()->delete();
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get sales order statistics.
     *
     * @param int $days
     * @return array<string, mixed>
     */
    public static function getStatistics(int $days = 30): array
    {
        $since = now()->subDays($days);

        $stats = self::where('order_date', '>=', $since)
            ->selectRaw('
                COUNT(*) as total_orders,
                SUM(CASE WHEN status = "delivered" THEN 1 ELSE 0 END) as completed_orders,
                SUM(CASE WHEN status = "cancelled" THEN 1 ELSE 0 END) as cancelled_orders,
                SUM(total_amount) as total_revenue,
                AVG(total_amount) as average_order_value
            ')
            ->first();

        $byStatus = self::where('order_date', '>=', $since)
            ->select('status', DB::raw('COUNT(*) as count'), DB::raw('SUM(total_amount) as value'))
            ->groupBy('status')
            ->get()
            ->keyBy('status');

        return [
            'period_days' => $days,
            'total_orders' => $stats->total_orders ?? 0,
            'total_revenue' => $stats->total_revenue ?? 0,
            'average_order_value' => $stats->average_order_value ?? 0,
            'completed_orders' => $stats->completed_orders ?? 0,
            'cancelled_orders' => $stats->cancelled_orders ?? 0,
            'by_status' => $byStatus,
            'completion_rate' => $stats->total_orders > 0
                ? round(($stats->completed_orders / $stats->total_orders) * 100, 2)
                : 0
        ];
    }

    /**
     * Get monthly sales summary.
     *
     * @param int $months
     * @return Collection
     */
    // public static function getMonthlySummary(int $months = 12): Collection
    // {
    //     return self::where('order_date', '>=', now()->subMonths($months))
    //         ->select(
    //             DB::raw('YEAR(order_date) as year'),
    //             DB::raw('MONTH(order_date) as month'),
    //             DB::raw('COUNT(*) as order_count'),
    //             DB::raw('SUM(total_amount) as revenue'),
    //             DB::raw('AVG(total_amount) as average_value')
    //         )
    //         ->groupBy('year', 'month')
    //         ->orderBy('year', 'desc')
    //         ->orderBy('month', 'desc')
    //         ->get();
    // }
    public static function getMonthlySummary(int $months = 12): Collection
    {
        // SQLite version only
        return self::where('order_date', '>=', now()->subMonths($months))
            ->select(
                DB::raw("strftime('%Y', order_date) as year"),
                DB::raw("strftime('%m', order_date) as month"),
                DB::raw('COUNT(*) as order_count'),
                DB::raw('SUM(total_amount) as revenue'),
                DB::raw('AVG(total_amount) as average_value')
            )
            ->groupBy(DB::raw("strftime('%Y', order_date)"), DB::raw("strftime('%m', order_date)"))
            ->orderBy('year', 'desc')
            ->orderBy('month', 'desc')
            ->get();
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
            'text' => $this->display_number,
            'so_number' => $this->so_number,
            'customer' => $this->customer->name,
            'total_amount' => $this->total_amount,
            'status' => $this->status
        ];
    }

    /**
     * Get customer performance for this order.
     *
     * @return array
     */
    public function getCustomerPerformance(): array
    {
        $onTime = !$this->required_date ||
            ($this->shipped_date && $this->shipped_date <= $this->required_date);

        return [
            'customer_name' => $this->customer->name,
            'so_number' => $this->so_number,
            'order_date' => $this->order_date?->format('Y-m-d'),
            'required_date' => $this->required_date?->format('Y-m-d'),
            'shipped_date' => $this->shipped_date?->format('Y-m-d'),
            'on_time' => $onTime,
            'days_difference' => $this->calculateShippingDifference(),
            'complete' => $this->is_fully_shipped
        ];
    }

    /**
     * Calculate shipping date difference.
     *
     * @return int|null
     */
    protected function calculateShippingDifference(): ?int
    {
        if (!$this->required_date || !$this->shipped_date) {
            return null;
        }

        return $this->required_date->diffInDays($this->shipped_date, false);
    }

    /**
     * Update payment status based on received payments.
     *
     * @param float $amountPaid
     * @return self
     */
    public function updatePaymentStatus(float $amountPaid): self
    {
        if ($amountPaid <= 0) {
            $this->payment_status = self::PAYMENT_PENDING;
        } elseif ($amountPaid >= $this->total_amount) {
            $this->payment_status = self::PAYMENT_PAID;
        } else {
            $this->payment_status = self::PAYMENT_PARTIALLY_PAID;
        }

        $this->save();

        return $this;
    }
}
