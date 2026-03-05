<?php
// app/Models/PurchaseOrder.php

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
 * Purchase Order Model
 * 
 * Represents a purchase order sent to suppliers for procuring inventory.
 * Manages the complete lifecycle from draft creation through approval,
 * shipping, and receiving. Tracks costs, delivery dates, and receipt status
 * for inventory management and accounts payable.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $po_number
 * @property int $supplier_id
 * @property int $warehouse_id
 * @property \Carbon\Carbon $order_date
 * @property \Carbon\Carbon|null $expected_delivery_date
 * @property \Carbon\Carbon|null $actual_delivery_date
 * @property string $status
 * @property string|null $payment_terms
 * @property string|null $shipping_method
 * @property string|null $tracking_number
 * @property float $subtotal
 * @property float $tax_amount
 * @property float $shipping_cost
 * @property float $total_amount
 * @property string|null $notes
 * @property int|null $created_by
 * @property int|null $approved_by
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read Supplier $supplier
 * @property-read Warehouse $warehouse
 * @property-read Collection|PurchaseOrderItem[] $items
 * @property-read Collection|PurchaseReceipt[] $receipts
 * @property-read User|null $createdBy
 * @property-read User|null $approvedBy
 * @property-read string $status_label
 * @property-read array $receipt_progress
 * @property-read bool $is_fully_received
 * @property-read bool $is_overdue
 * @property-read int|null $days_overdue
 * @property-read float $received_percentage
 */
class PurchaseOrder extends Model
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
        'po_number',
        'supplier_id',
        'warehouse_id',
        'order_date',
        'expected_delivery_date',
        'actual_delivery_date',
        'status',
        'payment_terms',
        'shipping_method',
        'tracking_number',
        'subtotal',
        'tax_amount',
        'shipping_cost',
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
        'expected_delivery_date' => 'date',
        'actual_delivery_date' => 'date',
        'subtotal' => 'decimal:2',
        'tax_amount' => 'decimal:2',
        'shipping_cost' => 'decimal:2',
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
        'order_date' => null, // Will be set in boot method
        'subtotal' => 0,
        'tax_amount' => 0,
        'shipping_cost' => 0,
        'total_amount' => 0
    ];

    /**
     * --------------------------------------------------------------------------
     * Status Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Initial draft state */
    const STATUS_DRAFT = 'draft';

    /** @var string Submitted but not yet approved */
    const STATUS_PENDING = 'pending';

    /** @var string Approved and ready to send to supplier */
    const STATUS_APPROVED = 'approved';

    /** @var string Shipped by supplier */
    const STATUS_SHIPPED = 'shipped';

    /** @var string Partially received */
    const STATUS_PARTIALLY_RECEIVED = 'partially_received';

    /** @var string Fully received */
    const STATUS_RECEIVED = 'received';

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
        self::STATUS_SHIPPED => 'Shipped',
        self::STATUS_PARTIALLY_RECEIVED => 'Partially Received',
        self::STATUS_RECEIVED => 'Received',
        self::STATUS_CANCELLED => 'Cancelled'
    ];

    /**
     * Statuses that indicate the order is active/not final.
     *
     * @var array<string>
     */
    const ACTIVE_STATUSES = [
        self::STATUS_DRAFT,
        self::STATUS_PENDING,
        self::STATUS_APPROVED,
        self::STATUS_SHIPPED,
        self::STATUS_PARTIALLY_RECEIVED
    ];

    /**
     * Statuses that indicate the order is closed/completed.
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
     * Get the supplier for this purchase order.
     *
     * @return BelongsTo
     */
    public function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class);
    }

    /**
     * Get the warehouse where items will be received.
     *
     * @return BelongsTo
     */
    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    /**
     * Get all items in this purchase order.
     *
     * @return HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(PurchaseOrderItem::class);
    }

    /**
     * Get all receipts for this purchase order.
     *
     * @return HasMany
     */
    public function receipts(): HasMany
    {
        return $this->hasMany(PurchaseReceipt::class);
    }

    /**
     * Get the user who created this purchase order.
     *
     * @return BelongsTo
     */
    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the user who approved this purchase order.
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
     * Scope to shipped orders.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeShipped(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_SHIPPED);
    }

    /**
     * Scope to received orders (partial or full).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeReceived(Builder $query): Builder
    {
        return $query->whereIn('status', [
            self::STATUS_PARTIALLY_RECEIVED,
            self::STATUS_RECEIVED
        ]);
    }

    /**
     * Scope to active orders (not received or cancelled).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->whereIn('status', self::ACTIVE_STATUSES);
    }

    /**
     * Scope to closed orders (received or cancelled).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeClosed(Builder $query): Builder
    {
        return $query->whereIn('status', self::CLOSED_STATUSES);
    }

    /**
     * Scope to filter by supplier.
     *
     * @param Builder $query
     * @param int $supplierId
     * @return Builder
     */
    public function scopeForSupplier(Builder $query, int $supplierId): Builder
    {
        return $query->where('supplier_id', $supplierId);
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
        return $query->where('expected_delivery_date', '<', now())
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
        return $query->whereDate('expected_delivery_date', now())
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
        return $query->whereBetween('expected_delivery_date', [
            now()->startOfDay(),
            now()->addDays(7)->endOfDay()
        ])->whereNotIn('status', self::CLOSED_STATUSES);
    }

    /**
     * Scope to orders created by a user.
     *
     * @param Builder $query
     * @param int $userId
     * @return Builder
     */
    public function scopeCreatedBy(Builder $query, int $userId): Builder
    {
        return $query->where('created_by', $userId);
    }

    /**
     * Scope to orders by date range.
     *
     * @param Builder $query
     * @param string $startDate
     * @param string $endDate
     * @return Builder
     */
    public function scopeByDateRange(Builder $query, string $startDate, string $endDate): Builder
    {
        return $query->whereBetween('order_date', [$startDate, $endDate]);
    }

    /**
     * Scope to orders above a certain amount.
     *
     * @param Builder $query
     * @param float $amount
     * @return Builder
     */
    public function scopeAmountAbove(Builder $query, float $amount): Builder
    {
        return $query->where('total_amount', '>=', $amount);
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
     * Get receipt progress statistics.
     *
     * @return array<string, mixed>
     */
    public function getReceiptProgressAttribute(): array
    {
        $totalItems = $this->items->count();

        if ($totalItems === 0) {
            return [
                'total' => 0,
                'fully_received' => 0,
                'partially_received' => 0,
                'pending' => 0,
                'percentage' => 0
            ];
        }

        $fullyReceivedItems = $this->items->filter(function ($item) {
            return $item->quantity_received >= $item->quantity_ordered;
        })->count();

        $partialItems = $this->items->filter(function ($item) {
            return $item->quantity_received > 0 &&
                $item->quantity_received < $item->quantity_ordered;
        })->count();

        $pendingItems = $this->items->filter(function ($item) {
            return $item->quantity_received == 0;
        })->count();

        return [
            'total' => $totalItems,
            'fully_received' => $fullyReceivedItems,
            'partially_received' => $partialItems,
            'pending' => $pendingItems,
            'percentage' => round(($fullyReceivedItems / $totalItems) * 100, 2)
        ];
    }

    /**
     * Get receipt percentage.
     *
     * @return float
     */
    public function getReceivedPercentageAttribute(): float
    {
        $totalOrdered = $this->items->sum('quantity_ordered');

        if ($totalOrdered == 0) {
            return 0;
        }

        $totalReceived = $this->items->sum('quantity_received');

        return round(($totalReceived / $totalOrdered) * 100, 2);
    }

    /**
     * Check if order is fully received.
     *
     * @return bool
     */
    public function getIsFullyReceivedAttribute(): bool
    {
        return $this->items->every(function ($item) {
            return $item->quantity_received >= $item->quantity_ordered;
        });
    }

    /**
     * Check if order is overdue.
     *
     * @return bool
     */
    public function getIsOverdueAttribute(): bool
    {
        return $this->expected_delivery_date &&
            $this->expected_delivery_date->isPast() &&
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

        return $this->expected_delivery_date->diffInDays(now());
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
            'po_number' => $this->po_number,
            'supplier' => $this->supplier->name,
            'order_date' => $this->order_date?->format('Y-m-d'),
            'total_amount' => $this->total_amount,
            'status' => $this->status_label,
            'item_count' => $this->items->count(),
            'receipt_progress' => $this->receipt_progress['percentage'] . '%'
        ];
    }

    /**
     * Get the display number with status.
     *
     * @return string
     */
    public function getDisplayNumberAttribute(): string
    {
        return "{$this->po_number} ({$this->status_label})";
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Generate a unique PO number.
     * Format: PO-YYYYMM-XXXX where XXXX is sequential.
     *
     * @return string
     */
    public static function generatePONumber(): string
    {
        $prefix = 'PO';
        $yearMonth = now()->format('Ym');

        $lastPO = self::whereYear('created_at', now()->year)
            ->whereMonth('created_at', now()->month)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastPO && preg_match('/-(\d{4})$/', $lastPO->po_number, $matches)) {
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
            $this->total_amount = $this->subtotal + $this->tax_amount + $this->shipping_cost;
            $this->saveQuietly();

            return $this;
        });
    }

    /**
     * Update order status based on receipt progress.
     *
     * @return self
     */
    public function updateStatus(): self
    {
        if ($this->status === self::STATUS_CANCELLED) {
            return $this;
        }

        return DB::transaction(function () {
            if ($this->is_fully_received) {
                $this->status = self::STATUS_RECEIVED;
                $this->actual_delivery_date = now();
            } elseif ($this->items->sum('quantity_received') > 0) {
                $this->status = self::STATUS_PARTIALLY_RECEIVED;
            }

            $this->saveQuietly();

            return $this;
        });
    }

    /**
     * Approve the purchase order.
     *
     * @param int $userId
     * @return self
     */
    public function approve(int $userId): self
    {
        return DB::transaction(function () use ($userId) {
            $this->status = self::STATUS_APPROVED;
            $this->approved_by = $userId;
            $this->save();

            return $this;
        });
    }

    /**
     * Cancel the purchase order.
     *
     * @param string|null $reason
     * @return self
     */
    public function cancel(?string $reason = null): self
    {
        return DB::transaction(function () use ($reason) {
            $this->status = self::STATUS_CANCELLED;

            if ($reason) {
                $this->notes = ($this->notes ? $this->notes . "\n" : '') .
                    "Cancelled: {$reason}";
            }

            $this->save();

            return $this;
        });
    }

    /**
     * Receive items against this purchase order.
     *
     * @param array $receiptData
     * @param array $items
     * @return PurchaseReceipt
     * @throws \Exception
     */
    public function receive(array $receiptData, array $items): PurchaseReceipt
    {
        return DB::transaction(function () use ($receiptData, $items) {
            // Create receipt
            $receipt = $this->receipts()->create([
                'receipt_number' => PurchaseReceipt::generateReceiptNumber(),
                'warehouse_id' => $receiptData['warehouse_id'] ?? $this->warehouse_id,
                'receipt_date' => $receiptData['receipt_date'] ?? now(),
                'invoice_number' => $receiptData['invoice_number'] ?? null,
                'delivery_note_number' => $receiptData['delivery_note_number'] ?? null,
                'notes' => $receiptData['notes'] ?? null,
                'received_by' => Auth::id(),
            ]);

            // Process each received item
            foreach ($items as $itemData) {
                $this->processReceivedItem($receipt, $itemData);
            }

            // Update PO status
            $this->updateStatus()->save();

            return $receipt;
        });
    }

    /**
     * Process a single received item.
     *
     * @param PurchaseReceipt $receipt
     * @param array $itemData
     * @return void
     * @throws \Exception
     */
    protected function processReceivedItem(PurchaseReceipt $receipt, array $itemData): void
    {
        $poItem = $this->items()->findOrFail($itemData['purchase_order_item_id']);

        // Validate quantity
        if ($itemData['quantity_received'] <= 0) {
            throw new \Exception('Quantity received must be greater than zero.');
        }

        if (($poItem->quantity_received + $itemData['quantity_received']) > $poItem->quantity_ordered) {
            throw new \Exception('Cannot receive more than ordered quantity.');
        }

        // Create receipt item
        $receipt->items()->create([
            'purchase_order_item_id' => $poItem->id,
            'product_id' => $poItem->product_id,
            'location_id' => $itemData['location_id'],
            'quantity_received' => $itemData['quantity_received'],
            'batch_number' => $itemData['batch_number'] ?? null,
            'serial_number' => $itemData['serial_number'] ?? null,
            'expiry_date' => $itemData['expiry_date'] ?? null,
            'unit_cost' => $itemData['unit_cost'] ?? $poItem->unit_price,
            'notes' => $itemData['notes'] ?? null
        ]);

        // Update PO item
        $poItem->quantity_received += $itemData['quantity_received'];
        $poItem->quantity_remaining = $poItem->quantity_ordered - $poItem->quantity_received;
        $poItem->status = $poItem->quantity_received >= $poItem->quantity_ordered ?
            PurchaseOrderItem::STATUS_RECEIVED :
            PurchaseOrderItem::STATUS_PARTIALLY_RECEIVED;
        $poItem->save();

        // Update inventory
        $this->updateInventory($poItem, $receipt, $itemData);
    }

    /**
     * Update inventory after receipt.
     *
     * @param PurchaseOrderItem $poItem
     * @param PurchaseReceipt $receipt
     * @param array $itemData
     * @return void
     */
    protected function updateInventory(PurchaseOrderItem $poItem, PurchaseReceipt $receipt, array $itemData): void
    {
        $inventory = Inventory::firstOrCreate(
            [
                'product_id' => $poItem->product_id,
                'warehouse_id' => $receipt->warehouse_id,
                'location_id' => $itemData['location_id'],
                'batch_number' => $itemData['batch_number'] ?? null,
                'serial_number' => $itemData['serial_number'] ?? null,
                'expiry_date' => $itemData['expiry_date'] ?? null
            ],
            [
                'unit_cost' => $itemData['unit_cost'] ?? $poItem->unit_price,
                'status' => Inventory::STATUS_AVAILABLE
            ]
        );

        $inventory->receive(
            $itemData['quantity_received'],
            $itemData['unit_cost'] ?? $poItem->unit_price
        );

        // Create inventory movement record
        InventoryMovement::recordReceipt(
            $poItem->product_id,
            $itemData['quantity_received'],
            $itemData['unit_cost'] ?? $poItem->unit_price,
            $receipt->warehouse_id,
            $itemData['location_id'],
            ['type' => InventoryMovement::REF_PURCHASE_ORDER, 'id' => $this->id],
            $itemData['batch_number'] ?? null,
            $itemData['serial_number'] ?? null,
            "Received from PO: {$this->po_number}"
        );
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
        return !in_array($this->status, [self::STATUS_RECEIVED, self::STATUS_CANCELLED]);
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
        // Auto-generate PO number and set order date
        static::creating(function (self $po) {
            if (empty($po->po_number)) {
                $po->po_number = self::generatePONumber();
            }

            if (empty($po->order_date)) {
                $po->order_date = now();
            }

            if (empty($po->created_by) && Auth::check()) {
                $po->created_by = Auth::id();
            }
        });

        // Update totals before saving
        static::saving(function (self $po) {
            if ($po->isModifiable()) {
                // Recalculate totals based on items
                $po->calculateTotals();
            }
        });

        // Prevent modification of received/cancelled orders
        static::updating(function (self $po) {
            if ($po->getOriginal('status') !== $po->status) {
                // Status change is allowed
                return true;
            }

            if (in_array($po->getOriginal('status'), self::CLOSED_STATUSES)) {
                return false; // Cannot modify closed orders
            }

            return true;
        });

        // Clean up related records before deletion
        static::deleting(function (self $po) {
            if ($po->receipts()->exists()) {
                throw new \Exception('Cannot delete purchase order with receipts.');
            }

            // Delete items first
            $po->items()->delete();
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get purchase order statistics.
     *
     * @param int $days
     * @return array<string, mixed>
     */
    public static function getStatistics(int $days = 30): array
    {
        $since = now()->subDays($days);

        $stats = self::where('created_at', '>=', $since)
            ->selectRaw('
                COUNT(*) as total_orders,
                SUM(CASE WHEN status = "received" THEN 1 ELSE 0 END) as received_orders,
                SUM(CASE WHEN status = "cancelled" THEN 1 ELSE 0 END) as cancelled_orders,
                SUM(total_amount) as total_value,
                AVG(total_amount) as average_value,
                SUM(CASE WHEN expected_delivery_date < NOW() AND status NOT IN ("received", "cancelled") THEN 1 ELSE 0 END) as overdue_count
            ')
            ->first();

        $byStatus = self::where('created_at', '>=', $since)
            ->select('status', DB::raw('COUNT(*) as count'), DB::raw('SUM(total_amount) as value'))
            ->groupBy('status')
            ->get()
            ->keyBy('status');

        return [
            'period_days' => $days,
            'total_orders' => $stats->total_orders ?? 0,
            'total_value' => $stats->total_value ?? 0,
            'average_value' => $stats->average_value ?? 0,
            'received_orders' => $stats->received_orders ?? 0,
            'cancelled_orders' => $stats->cancelled_orders ?? 0,
            'overdue_count' => $stats->overdue_count ?? 0,
            'by_status' => $byStatus,
            'completion_rate' => $stats->total_orders > 0
                ? round(($stats->received_orders / $stats->total_orders) * 100, 2)
                : 0
        ];
    }

    /**
     * Get monthly purchase summary.
     *
     * @param int $months
     * @return Collection
     */
    public static function getMonthlySummary(int $months = 12): Collection
    {
        return self::where('created_at', '>=', now()->subMonths($months))
            ->select(
                DB::raw('YEAR(created_at) as year'),
                DB::raw('MONTH(created_at) as month'),
                DB::raw('COUNT(*) as order_count'),
                DB::raw('SUM(total_amount) as total_value'),
                DB::raw('AVG(total_amount) as average_value')
            )
            ->groupBy('year', 'month')
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
            'po_number' => $this->po_number,
            'supplier' => $this->supplier->name,
            'total_amount' => $this->total_amount,
            'status' => $this->status
        ];
    }

    /**
     * Get supplier performance for this order.
     *
     * @return array
     */
    public function getSupplierPerformance(): array
    {
        $onTime = !$this->expected_delivery_date ||
            ($this->actual_delivery_date &&
                $this->actual_delivery_date <= $this->expected_delivery_date);

        return [
            'supplier_name' => $this->supplier->name,
            'po_number' => $this->po_number,
            'order_date' => $this->order_date?->format('Y-m-d'),
            'expected_date' => $this->expected_delivery_date?->format('Y-m-d'),
            'actual_date' => $this->actual_delivery_date?->format('Y-m-d'),
            'on_time' => $onTime,
            'days_difference' => $this->calculateDeliveryDifference(),
            'complete' => $this->is_fully_received
        ];
    }

    /**
     * Calculate delivery date difference.
     *
     * @return int|null
     */
    protected function calculateDeliveryDifference(): ?int
    {
        if (!$this->expected_delivery_date || !$this->actual_delivery_date) {
            return null;
        }

        return $this->expected_delivery_date->diffInDays($this->actual_delivery_date, false);
    }
}
