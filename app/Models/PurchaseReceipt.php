<?php
// app/Models/PurchaseReceipt.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

/**
 * Purchase Receipt Model
 * 
 * Represents a receipt of goods against a purchase order. Records the physical
 * receipt of inventory, tracks received items, and updates inventory levels.
 * Provides a complete audit trail for goods received and integrates with
 * purchase orders, inventory, and warehouse management.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $receipt_number
 * @property int $purchase_order_id
 * @property int $warehouse_id
 * @property \Carbon\Carbon $receipt_date
 * @property string|null $invoice_number
 * @property string|null $delivery_note_number
 * @property string $status
 * @property string|null $notes
 * @property int|null $received_by
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read PurchaseOrder $purchaseOrder
 * @property-read Warehouse $warehouse
 * @property-read Collection|PurchaseReceiptItem[] $items
 * @property-read User|null $receivedBy
 * @property-read string $status_label
 * @property-read int $total_items
 * @property-read int $total_quantity
 * @property-read float $total_cost
 * @property-read array $summary
 */
class PurchaseReceipt extends Model
{
    use HasFactory;

    /**
     * --------------------------------------------------------------------------
     * Configuration
     * --------------------------------------------------------------------------
     */

    /** @var string Database table name */
    protected $table = 'purchase_receipts';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'receipt_number',
        'purchase_order_id',
        'warehouse_id',
        'receipt_date',
        'invoice_number',
        'delivery_note_number',
        'status',
        'notes',
        'received_by'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'receipt_date' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'status' => self::STATUS_RECEIVED
    ];

    /**
     * --------------------------------------------------------------------------
     * Status Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Goods have been received */
    const STATUS_RECEIVED = 'received';

    /** @var string Partial receipt (should align with PO status) */
    const STATUS_PARTIALLY_RECEIVED = 'partially_received';

    /** @var string Receipt process completed */
    const STATUS_COMPLETED = 'completed';

    /** @var string Receipt cancelled */
    const STATUS_CANCELLED = 'cancelled';

    /**
     * Human-readable status labels.
     *
     * @var array<string, string>
     */
    public static $statuses = [
        self::STATUS_RECEIVED => 'Received',
        self::STATUS_PARTIALLY_RECEIVED => 'Partially Received',
        self::STATUS_COMPLETED => 'Completed',
        self::STATUS_CANCELLED => 'Cancelled'
    ];

    /**
     * Statuses that indicate the receipt is active.
     *
     * @var array<string>
     */
    const ACTIVE_STATUSES = [
        self::STATUS_RECEIVED,
        self::STATUS_PARTIALLY_RECEIVED,
        self::STATUS_COMPLETED
    ];

    /**
     * Statuses that indicate the receipt is closed.
     *
     * @var array<string>
     */
    const CLOSED_STATUSES = [
        self::STATUS_COMPLETED,
        self::STATUS_CANCELLED
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the purchase order this receipt belongs to.
     *
     * @return BelongsTo
     */
    public function purchaseOrder(): BelongsTo
    {
        return $this->belongsTo(PurchaseOrder::class);
    }

    /**
     * Get the warehouse where goods were received.
     *
     * @return BelongsTo
     */
    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    /**
     * Get all items in this receipt.
     *
     * @return HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(PurchaseReceiptItem::class);
    }

    /**
     * Get the user who received the goods.
     *
     * @return BelongsTo
     */
    public function receivedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'received_by');
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to filter by purchase order.
     *
     * @param Builder $query
     * @param int $poId
     * @return Builder
     */
    public function scopeForPurchaseOrder(Builder $query, int $poId): Builder
    {
        return $query->where('purchase_order_id', $poId);
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
     * Scope to filter by date range.
     *
     * @param Builder $query
     * @param string $startDate
     * @param string $endDate
     * @return Builder
     */
    public function scopeBetweenDates(Builder $query, string $startDate, string $endDate): Builder
    {
        return $query->whereBetween('receipt_date', [$startDate, $endDate]);
    }

    /**
     * Scope to filter by status.
     *
     * @param Builder $query
     * @param string $status
     * @return Builder
     */
    public function scopeWithStatus(Builder $query, string $status): Builder
    {
        return $query->where('status', $status);
    }

    /**
     * Scope to active receipts.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->whereIn('status', self::ACTIVE_STATUSES);
    }

    /**
     * Scope to receipts with invoice.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithInvoice(Builder $query): Builder
    {
        return $query->whereNotNull('invoice_number');
    }

    /**
     * Scope to receipts by receiver.
     *
     * @param Builder $query
     * @param int $userId
     * @return Builder
     */
    public function scopeReceivedBy(Builder $query, int $userId): Builder
    {
        return $query->where('received_by', $userId);
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
     * Get total number of items in this receipt.
     *
     * @return int
     */
    public function getTotalItemsAttribute(): int
    {
        return $this->items->count();
    }

    /**
     * Get total quantity received.
     *
     * @return int
     */
    public function getTotalQuantityAttribute(): int
    {
        return $this->items->sum('quantity_received');
    }

    /**
     * Get total cost of received items.
     *
     * @return float
     */
    public function getTotalCostAttribute(): float
    {
        return $this->items->sum('total_cost');
    }

    /**
     * Get the receipt summary.
     *
     * @return array
     */
    public function getSummaryAttribute(): array
    {
        return [
            'id' => $this->id,
            'receipt_number' => $this->receipt_number,
            'po_number' => $this->purchaseOrder->po_number,
            'supplier' => $this->purchaseOrder->supplier->name,
            'warehouse' => $this->warehouse->name,
            'receipt_date' => $this->receipt_date->format('Y-m-d'),
            'total_items' => $this->total_items,
            'total_quantity' => $this->total_quantity,
            'total_cost' => $this->total_cost,
            'status' => $this->status_label,
            'received_by' => $this->receivedBy?->name
        ];
    }

    /**
     * Get the display number with PO reference.
     *
     * @return string
     */
    public function getDisplayNumberAttribute(): string
    {
        return "{$this->receipt_number} (PO: {$this->purchaseOrder->po_number})";
    }

    /**
     * Check if receipt is complete.
     *
     * @return bool
     */
    public function getIsCompleteAttribute(): bool
    {
        return $this->status === self::STATUS_COMPLETED;
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Generate a unique receipt number.
     * Format: RCT-YYYYMM-XXXX where XXXX is sequential.
     *
     * @return string
     */
    public static function generateReceiptNumber(): string
    {
        $prefix = 'RCT';
        $yearMonth = now()->format('Ym');

        $lastReceipt = self::whereYear('created_at', now()->year)
            ->whereMonth('created_at', now()->month)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastReceipt && preg_match('/-(\d{4})$/', $lastReceipt->receipt_number, $matches)) {
            $lastNumber = (int) $matches[1];
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$yearMonth}-{$newNumber}";
    }

    /**
     * Add items to this receipt.
     *
     * @param array $items
     * @return Collection
     * @throws \Exception
     */
    public function addItems(array $items): Collection
    {
        return DB::transaction(function () use ($items) {
            $createdItems = collect();

            foreach ($items as $itemData) {
                // Validate PO item exists and is from the correct PO
                $poItem = PurchaseOrderItem::where('purchase_order_id', $this->purchase_order_id)
                    ->where('id', $itemData['purchase_order_item_id'])
                    ->firstOrFail();

                // Check if we're not exceeding ordered quantity
                $totalReceived = $poItem->quantity_received + $itemData['quantity_received'];
                if ($totalReceived > $poItem->quantity_ordered) {
                    throw new \Exception("Cannot receive more than ordered quantity for product: {$poItem->product->name}");
                }

                // Create receipt item
                $receiptItem = $this->items()->create([
                    'purchase_order_item_id' => $poItem->id,
                    'product_id' => $poItem->product_id,
                    'location_id' => $itemData['location_id'],
                    'quantity_received' => $itemData['quantity_received'],
                    'unit_cost' => $itemData['unit_cost'] ?? $poItem->unit_price,
                    'batch_number' => $itemData['batch_number'] ?? null,
                    'serial_number' => $itemData['serial_number'] ?? null,
                    'expiry_date' => $itemData['expiry_date'] ?? null,
                    'notes' => $itemData['notes'] ?? null
                ]);

                // Update PO item
                $poItem->receive($itemData['quantity_received']);

                // Update inventory
                $this->updateInventory($poItem, $receiptItem, $itemData);

                $createdItems->push($receiptItem);
            }

            // Update receipt status
            $this->updateStatus();

            return $createdItems;
        });
    }

    /**
     * Update inventory after receipt.
     *
     * @param PurchaseOrderItem $poItem
     * @param PurchaseReceiptItem $receiptItem
     * @param array $itemData
     * @return void
     */
    protected function updateInventory(PurchaseOrderItem $poItem, PurchaseReceiptItem $receiptItem, array $itemData): void
    {
        $inventory = Inventory::firstOrCreate(
            [
                'product_id' => $poItem->product_id,
                'warehouse_id' => $this->warehouse_id,
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

        // Record inventory movement
        InventoryMovement::recordReceipt(
            $poItem->product_id,
            $itemData['quantity_received'],
            $itemData['unit_cost'] ?? $poItem->unit_price,
            $this->warehouse_id,
            $itemData['location_id'],
            ['type' => InventoryMovement::REF_PURCHASE_ORDER, 'id' => $this->purchase_order_id],
            $itemData['batch_number'] ?? null,
            $itemData['serial_number'] ?? null,
            "Received via receipt: {$this->receipt_number}"
        );
    }

    /**
     * Update receipt status based on items.
     *
     * @return self
     */
    public function updateStatus(): self
    {
        return DB::transaction(function () {
            if ($this->status === self::STATUS_CANCELLED) {
                return $this;
            }

            $po = $this->purchaseOrder;

            if ($po->is_fully_received) {
                $this->status = self::STATUS_COMPLETED;
            } elseif ($this->items->count() > 0) {
                $this->status = self::STATUS_RECEIVED;
            }

            $this->saveQuietly();

            return $this;
        });
    }

    /**
     * Cancel this receipt.
     *
     * @param string|null $reason
     * @return bool
     * @throws \Exception
     */
    public function cancel(?string $reason = null): bool
    {
        return DB::transaction(function () use ($reason) {
            // Reverse inventory updates
            foreach ($this->items as $item) {
                $this->reverseInventoryUpdate($item);

                // Update PO item
                $poItem = $item->purchaseOrderItem;
                $poItem->quantity_received -= $item->quantity_received;
                $poItem->quantity_remaining = $poItem->quantity_ordered - $poItem->quantity_received;
                $poItem->status = $poItem->determineStatus();
                $poItem->save();
            }

            $this->status = self::STATUS_CANCELLED;

            if ($reason) {
                $this->notes = ($this->notes ? $this->notes . "\n" : '') . "Cancelled: {$reason}";
            }

            return $this->save();
        });
    }

    /**
     * Reverse inventory updates for a cancelled receipt.
     *
     * @param PurchaseReceiptItem $item
     * @return void
     */
    protected function reverseInventoryUpdate(PurchaseReceiptItem $item): void
    {
        $inventory = Inventory::where([
            'product_id' => $item->product_id,
            'warehouse_id' => $this->warehouse_id,
            'location_id' => $item->location_id,
            'batch_number' => $item->batch_number,
            'serial_number' => $item->serial_number
        ])->first();

        if ($inventory) {
            $inventory->ship($item->quantity_received);

            // Record reversal movement
            InventoryMovement::record(
                $item->product_id,
                InventoryMovement::TYPE_ADJUSTMENT,
                $item->quantity_received,
                $item->unit_cost,
                ['from_warehouse' => $this->warehouse_id, 'from_location' => $item->location_id],
                ['type' => 'receipt_cancellation', 'id' => $this->id],
                $item->batch_number,
                $item->serial_number,
                "Receipt cancelled: {$this->receipt_number}"
            );
        }
    }

    /**
     * Check if receipt can be modified.
     *
     * @return bool
     */
    public function isModifiable(): bool
    {
        return !in_array($this->status, [self::STATUS_COMPLETED, self::STATUS_CANCELLED]);
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
        // Auto-generate receipt number
        static::creating(function (self $receipt) {
            if (empty($receipt->receipt_number)) {
                $receipt->receipt_number = self::generateReceiptNumber();
            }

            if (empty($receipt->receipt_date)) {
                $receipt->receipt_date = now();
            }
        });

        // Prevent modification of completed receipts
        static::updating(function (self $receipt) {
            if ($receipt->getOriginal('status') === self::STATUS_COMPLETED) {
                return false;
            }
            return true;
        });

        // Clean up items before deletion
        static::deleting(function (self $receipt) {
            if ($receipt->items()->exists()) {
                throw new \Exception('Cannot delete receipt with items. Cancel it first.');
            }
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get receipt statistics.
     *
     * @param int $days
     * @return array<string, mixed>
     */
    public static function getStatistics(int $days = 30): array
    {
        $since = now()->subDays($days);

        $stats = self::where('receipt_date', '>=', $since)
            ->selectRaw('
                COUNT(*) as total_receipts,
                COUNT(DISTINCT purchase_order_id) as unique_pos,
                SUM(total_quantity) as total_items_received,
                SUM(total_cost) as total_value_received
            ')
            ->first();

        $byDay = self::where('receipt_date', '>=', $since)
            ->select(
                DB::raw('DATE(receipt_date) as date'),
                DB::raw('COUNT(*) as receipt_count'),
                DB::raw('SUM(total_quantity) as items_received'),
                DB::raw('SUM(total_cost) as value_received')
            )
            ->groupBy(DB::raw('DATE(receipt_date)'))
            ->orderBy('date', 'desc')
            ->get();

        return [
            'period_days' => $days,
            'total_receipts' => $stats->total_receipts ?? 0,
            'unique_pos' => $stats->unique_pos ?? 0,
            'total_items_received' => $stats->total_items_received ?? 0,
            'total_value_received' => $stats->total_value_received ?? 0,
            'daily_summary' => $byDay,
            'average_per_day' => $stats->total_receipts > 0
                ? round($stats->total_receipts / $days, 2)
                : 0
        ];
    }

    /**
     * Get receipts by supplier.
     *
     * @param int $supplierId
     * @param int $days
     * @return Collection
     */
    public static function getBySupplier(int $supplierId, int $days = 90): Collection
    {
        return self::whereHas('purchaseOrder', function ($q) use ($supplierId) {
            $q->where('supplier_id', $supplierId);
        })
            ->where('receipt_date', '>=', now()->subDays($days))
            ->with(['purchaseOrder', 'warehouse'])
            ->orderBy('receipt_date', 'desc')
            ->get();
    }

    /**
     * --------------------------------------------------------------------------
     * Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Format for dropdown selection.
     *
     * @return array
     */
    public function toSelectOption(): array
    {
        return [
            'id' => $this->id,
            'text' => $this->display_number,
            'receipt_number' => $this->receipt_number,
            'po_number' => $this->purchaseOrder->po_number,
            'date' => $this->receipt_date->format('Y-m-d'),
            'total_items' => $this->total_items,
            'total_cost' => $this->total_cost
        ];
    }

    /**
     * Get quality control status (placeholder for future expansion).
     *
     * @return string
     */
    public function getQcStatusAttribute(): string
    {
        // This could be expanded with actual QC tracking
        return 'pending';
    }

    /**
     * Check if invoice is matched.
     *
     * @return bool
     */
    public function getInvoiceMatchedAttribute(): bool
    {
        return !is_null($this->invoice_number);
    }
}
