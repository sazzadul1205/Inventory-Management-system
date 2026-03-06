<?php
// app/Models/StockTransfer.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

/**
 * Stock Transfer Model
 * 
 * Manages the transfer of inventory between warehouses. Handles the complete
 * transfer lifecycle from request through approval, shipment, and receipt.
 * Tracks quantities, locations, and provides comprehensive status management
 * for inter-warehouse inventory movements.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $transfer_number
 * @property int $from_warehouse_id
 * @property int $to_warehouse_id
 * @property \Carbon\Carbon $request_date
 * @property \Carbon\Carbon|null $expected_delivery_date
 * @property \Carbon\Carbon|null $actual_delivery_date
 * @property string $status
 * @property string|null $notes
 * @property int|null $requested_by
 * @property int|null $approved_by
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read Warehouse $fromWarehouse
 * @property-read Warehouse $toWarehouse
 * @property-read Collection|StockTransferItem[] $items
 * @property-read User|null $requestedBy
 * @property-read User|null $approvedBy
 * @property-read string $status_label
 * @property-read array $transfer_progress
 * @property-read bool $is_fully_received
 * @property-read bool $is_fully_shipped
 * @property-read int $total_quantity
 * @property-read int $total_shipped
 * @property-read int $total_received
 * @property-read float $total_value
 */
class StockTransfer extends Model
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
        'transfer_number',
        'from_warehouse_id',
        'to_warehouse_id',
        'request_date',
        'expected_delivery_date',
        'actual_delivery_date',
        'status',
        'notes',
        'requested_by',
        'approved_by'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'request_date' => 'datetime',
        'expected_delivery_date' => 'date',
        'actual_delivery_date' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'status' => self::STATUS_DRAFT
    ];

    /**
     * --------------------------------------------------------------------------
     * Status Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Initial draft state */
    const STATUS_DRAFT = 'draft';

    /** @var string Awaiting approval */
    const STATUS_PENDING = 'pending';

    /** @var string Approved and ready to ship */
    const STATUS_APPROVED = 'approved';

    /** @var string Shipped from source warehouse */
    const STATUS_SHIPPED = 'shipped';

    /** @var string Partially received at destination */
    const STATUS_PARTIALLY_RECEIVED = 'partially_received';

    /** @var string Fully received at destination */
    const STATUS_RECEIVED = 'received';

    /** @var string Transfer cancelled */
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
     * Statuses that indicate the transfer is active.
     *
     * @var array<string>
     */
    const ACTIVE_STATUSES = [
        self::STATUS_APPROVED,
        self::STATUS_SHIPPED,
        self::STATUS_PARTIALLY_RECEIVED
    ];

    /**
     * Statuses that indicate the transfer is completed.
     *
     * @var array<string>
     */
    const COMPLETED_STATUSES = [
        self::STATUS_RECEIVED,
        self::STATUS_CANCELLED
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the source warehouse.
     *
     * @return BelongsTo
     */
    public function fromWarehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class, 'from_warehouse_id');
    }

    /**
     * Get the destination warehouse.
     *
     * @return BelongsTo
     */
    public function toWarehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class, 'to_warehouse_id');
    }

    /**
     * Get all items in this transfer.
     *
     * @return HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(StockTransferItem::class);
    }

    /**
     * Get the user who requested this transfer.
     *
     * @return BelongsTo
     */
    public function requestedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'requested_by');
    }

    /**
     * Get the user who approved this transfer.
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
     * Scope to draft transfers.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeDraft(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_DRAFT);
    }

    /**
     * Scope to pending transfers.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopePending(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_PENDING);
    }

    /**
     * Scope to approved transfers.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeApproved(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_APPROVED);
    }

    /**
     * Scope to shipped transfers.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeShipped(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_SHIPPED);
    }

    /**
     * Scope to received transfers.
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
     * Scope to active transfers.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->whereIn('status', self::ACTIVE_STATUSES);
    }

    /**
     * Scope to completed transfers.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeCompleted(Builder $query): Builder
    {
        return $query->whereIn('status', self::COMPLETED_STATUSES);
    }

    /**
     * Scope to filter by source warehouse.
     *
     * @param Builder $query
     * @param int $warehouseId
     * @return Builder
     */
    public function scopeFromWarehouse(Builder $query, int $warehouseId): Builder
    {
        return $query->where('from_warehouse_id', $warehouseId);
    }

    /**
     * Scope to filter by destination warehouse.
     *
     * @param Builder $query
     * @param int $warehouseId
     * @return Builder
     */
    public function scopeToWarehouse(Builder $query, int $warehouseId): Builder
    {
        return $query->where('to_warehouse_id', $warehouseId);
    }

    /**
     * Scope to overdue transfers.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeOverdue(Builder $query): Builder
    {
        return $query->where('expected_delivery_date', '<', now())
            ->whereNotIn('status', [self::STATUS_RECEIVED, self::STATUS_CANCELLED]);
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
        return $query->whereBetween('request_date', [$startDate, $endDate]);
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
     * Get transfer progress statistics.
     *
     * @return array<string, mixed>
     */
    public function getTransferProgressAttribute(): array
    {
        $totalItems = $this->items->count();

        if ($totalItems === 0) {
            return $this->getEmptyProgress();
        }

        $fullyReceivedItems = $this->items->filter(
            fn($item) =>
            $item->quantity_received >= $item->quantity_requested
        )->count();

        $partialItems = $this->items->filter(
            fn($item) =>
            $item->quantity_received > 0 &&
                $item->quantity_received < $item->quantity_requested
        )->count();

        $shippedItems = $this->items->filter(
            fn($item) =>
            $item->quantity_shipped > 0 &&
                $item->quantity_received == 0
        )->count();

        $pendingItems = $this->items->filter(
            fn($item) =>
            $item->quantity_shipped == 0
        )->count();

        return [
            'total' => $totalItems,
            'fully_received' => $fullyReceivedItems,
            'partially_received' => $partialItems,
            'shipped' => $shippedItems,
            'pending' => $pendingItems,
            'received_percentage' => round(($fullyReceivedItems / $totalItems) * 100, 2),
            'shipped_percentage' => round((($shippedItems + $partialItems + $fullyReceivedItems) / $totalItems) * 100, 2)
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
            'fully_received' => 0,
            'partially_received' => 0,
            'shipped' => 0,
            'pending' => 0,
            'received_percentage' => 0,
            'shipped_percentage' => 0
        ];
    }

    /**
     * Check if transfer is fully received.
     *
     * @return bool
     */
    public function getIsFullyReceivedAttribute(): bool
    {
        return $this->items->every(
            fn($item) =>
            $item->quantity_received >= $item->quantity_requested
        );
    }

    /**
     * Check if transfer is fully shipped.
     *
     * @return bool
     */
    public function getIsFullyShippedAttribute(): bool
    {
        return $this->items->every(
            fn($item) =>
            $item->quantity_shipped >= $item->quantity_requested
        );
    }

    /**
     * Get total requested quantity.
     *
     * @return int
     */
    public function getTotalQuantityAttribute(): int
    {
        return $this->items->sum('quantity_requested');
    }

    /**
     * Get total shipped quantity.
     *
     * @return int
     */
    public function getTotalShippedAttribute(): int
    {
        return $this->items->sum('quantity_shipped');
    }

    /**
     * Get total received quantity.
     *
     * @return int
     */
    public function getTotalReceivedAttribute(): int
    {
        return $this->items->sum('quantity_received');
    }

    /**
     * Get total financial value.
     *
     * @return float
     */
    public function getTotalValueAttribute(): float
    {
        return $this->items->sum(
            fn($item) => ($item->unit_cost ?? 0) * $item->quantity_requested
        );
    }

    /**
     * Get transfer summary.
     *
     * @return array
     */
    public function getSummaryAttribute(): array
    {
        return [
            'id' => $this->id,
            'transfer_number' => $this->transfer_number,
            'from_warehouse' => $this->fromWarehouse->name,
            'to_warehouse' => $this->toWarehouse->name,
            'request_date' => $this->request_date->format('Y-m-d'),
            'status' => $this->status_label,
            'progress' => $this->transfer_progress,
            'total_items' => $this->items->count(),
            'total_quantity' => $this->total_quantity,
            'total_value' => $this->total_value,
            'requested_by' => $this->requestedBy?->name
        ];
    }

    /**
     * Get the display number with status.
     *
     * @return string
     */
    public function getDisplayNumberAttribute(): string
    {
        return "{$this->transfer_number} ({$this->status_label})";
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Generate a unique transfer number.
     * Format: TR-YYYYMM-XXXX where XXXX is sequential.
     *
     * @return string
     */
    public static function generateTransferNumber(): string
    {
        $prefix = 'TR';
        $yearMonth = now()->format('Ym');

        $lastTransfer = self::whereYear('created_at', now()->year)
            ->whereMonth('created_at', now()->month)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastTransfer && preg_match('/-(\d{4})$/', $lastTransfer->transfer_number, $matches)) {
            $lastNumber = (int) $matches[1];
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$yearMonth}-{$newNumber}";
    }

    /**
     * Validate source and destination warehouses are different.
     *
     * @return bool
     * @throws \Exception
     */
    public function validateWarehouses(): bool
    {
        if ($this->from_warehouse_id === $this->to_warehouse_id) {
            throw new \Exception('Source and destination warehouses must be different.');
        }
        return true;
    }

    /**
     * Approve the transfer.
     *
     * @param int $userId
     * @return self
     */
    public function approve(int $userId): self
    {
        return DB::transaction(function () use ($userId) {
            $this->validateWarehouses();

            $this->status = self::STATUS_APPROVED;
            $this->approved_by = $userId;
            $this->save();

            return $this;
        });
    }

    /**
     * Cancel the transfer.
     *
     * @param string|null $reason
     * @return self
     */
    public function cancel(?string $reason = null): self
    {
        return DB::transaction(function () use ($reason) {
            $this->status = self::STATUS_CANCELLED;

            if ($reason) {
                $this->notes = $this->appendNote("Cancelled: {$reason}");
            }

            $this->save();

            return $this;
        });
    }

    /**
     * Ship items from source warehouse.
     *
     * @param array $items
     * @return self
     * @throws \Exception
     */
    public function ship(array $items): self
    {
        return DB::transaction(function () use ($items) {
            foreach ($items as $itemData) {
                $this->processShipmentItem($itemData);
            }

            $this->status = self::STATUS_SHIPPED;
            $this->save();

            return $this;
        });
    }

    /**
     * Process a single shipment item.
     *
     * @param array $itemData
     * @return void
     * @throws \Exception
     */
    protected function processShipmentItem(array $itemData): void
    {
        $transferItem = $this->items()->findOrFail($itemData['id']);

        // Find inventory at source
        $inventory = $this->findSourceInventory($transferItem, $itemData);

        $shipQuantity = $itemData['quantity_shipped'] ?? $transferItem->quantity_requested;

        if ($shipQuantity > $inventory->quantity_available) {
            throw new \Exception(
                "Insufficient inventory for product: {$transferItem->product->name}. " .
                    "Available: {$inventory->quantity_available}, Requested: {$shipQuantity}"
            );
        }

        // Reserve the inventory
        $inventory->reserve($shipQuantity);

        // Update transfer item
        $this->updateTransferItemForShipment($transferItem, $inventory, $itemData, $shipQuantity);

        // Create inventory movement record
        $this->createShipmentMovement($transferItem, $inventory, $shipQuantity, $itemData);
    }

    /**
     * Find source inventory for transfer item.
     *
     * @param StockTransferItem $transferItem
     * @param array $itemData
     * @return Inventory
     * @throws \Exception
     */
    protected function findSourceInventory(StockTransferItem $transferItem, array $itemData): Inventory
    {
        $inventory = Inventory::where('product_id', $transferItem->product_id)
            ->where('warehouse_id', $this->from_warehouse_id)
            ->where('location_id', $itemData['from_location_id'] ?? $transferItem->from_location_id)
            ->where('batch_number', $itemData['batch_number'] ?? $transferItem->batch_number)
            ->where('serial_number', $itemData['serial_number'] ?? $transferItem->serial_number)
            ->first();

        if (!$inventory) {
            throw new \Exception("Inventory not found for product: {$transferItem->product->name}");
        }

        return $inventory;
    }

    /**
     * Update transfer item with shipment data.
     *
     * @param StockTransferItem $transferItem
     * @param Inventory $inventory
     * @param array $itemData
     * @param int $shipQuantity
     * @return void
     */
    protected function updateTransferItemForShipment(
        StockTransferItem $transferItem,
        Inventory $inventory,
        array $itemData,
        int $shipQuantity
    ): void {
        $transferItem->quantity_shipped = $shipQuantity;
        $transferItem->from_location_id = $inventory->location_id;
        $transferItem->batch_number = $itemData['batch_number'] ?? $transferItem->batch_number;
        $transferItem->serial_number = $itemData['serial_number'] ?? $transferItem->serial_number;
        $transferItem->unit_cost = $inventory->unit_cost;
        $transferItem->save();
    }

    /**
     * Create inventory movement for shipment.
     *
     * @param StockTransferItem $transferItem
     * @param Inventory $inventory
     * @param int $shipQuantity
     * @param array $itemData
     * @return void
     */
    protected function createShipmentMovement(
        StockTransferItem $transferItem,
        Inventory $inventory,
        int $shipQuantity,
        array $itemData
    ): void {
        InventoryMovement::record(
            $transferItem->product_id,
            InventoryMovement::TYPE_TRANSFER,
            $shipQuantity,
            $inventory->unit_cost,
            [
                'from_warehouse' => $this->from_warehouse_id,
                'to_warehouse' => $this->to_warehouse_id,
                'from_location' => $inventory->location_id,
                'to_location' => $itemData['to_location_id'] ?? $transferItem->to_location_id
            ],
            [
                'type' => 'stock_transfer',
                'id' => $this->id
            ],
            $transferItem->batch_number,
            $transferItem->serial_number,
            "Stock transfer shipment #{$this->transfer_number}"
        );
    }

    /**
     * Receive items at destination warehouse.
     *
     * @param array $items
     * @return self
     * @throws \Exception
     */
    public function receive(array $items): self
    {
        return DB::transaction(function () use ($items) {
            foreach ($items as $itemData) {
                $this->processReceiptItem($itemData);
            }

            // Update transfer status
            $this->updateReceiptStatus();

            return $this;
        });
    }

    /**
     * Process a single receipt item.
     *
     * @param array $itemData
     * @return void
     * @throws \Exception
     */
    protected function processReceiptItem(array $itemData): void
    {
        $transferItem = $this->items()->findOrFail($itemData['id']);

        $receiveQuantity = $itemData['quantity_received'] ??
            ($transferItem->quantity_shipped - $transferItem->quantity_received);

        $remainingToReceive = $transferItem->quantity_shipped - $transferItem->quantity_received;

        if ($receiveQuantity > $remainingToReceive) {
            throw new \Exception(
                "Cannot receive more than shipped quantity for product: {$transferItem->product->name}. " .
                    "Remaining: {$remainingToReceive}, Requested: {$receiveQuantity}"
            );
        }

        // Find or create inventory at destination
        $inventory = $this->findOrCreateDestinationInventory($transferItem, $itemData);

        // Receive inventory
        $inventory->receive($receiveQuantity, $transferItem->unit_cost);

        // Update transfer item
        $transferItem->quantity_received += $receiveQuantity;
        $transferItem->to_location_id = $inventory->location_id;
        $transferItem->save();

        // Create inventory movement record
        $this->createReceiptMovement($transferItem, $inventory, $receiveQuantity);

        // Unreserve from source
        $this->releaseSourceInventory($transferItem, $receiveQuantity);
    }

    /**
     * Find or create inventory at destination.
     *
     * @param StockTransferItem $transferItem
     * @param array $itemData
     * @return Inventory
     */
    protected function findOrCreateDestinationInventory(
        StockTransferItem $transferItem,
        array $itemData
    ): Inventory {
        return Inventory::firstOrCreate(
            [
                'product_id' => $transferItem->product_id,
                'warehouse_id' => $this->to_warehouse_id,
                'location_id' => $itemData['to_location_id'] ?? $transferItem->to_location_id,
                'batch_number' => $itemData['batch_number'] ?? $transferItem->batch_number,
                'serial_number' => $itemData['serial_number'] ?? $transferItem->serial_number,
            ],
            [
                'unit_cost' => $transferItem->unit_cost,
                'status' => Inventory::STATUS_AVAILABLE
            ]
        );
    }

    /**
     * Create inventory movement for receipt.
     *
     * @param StockTransferItem $transferItem
     * @param Inventory $inventory
     * @param int $receiveQuantity
     * @return void
     */
    protected function createReceiptMovement(
        StockTransferItem $transferItem,
        Inventory $inventory,
        int $receiveQuantity
    ): void {
        InventoryMovement::record(
            $transferItem->product_id,
            InventoryMovement::TYPE_RECEIVE,
            $receiveQuantity,
            $transferItem->unit_cost,
            [
                'to_warehouse' => $this->to_warehouse_id,
                'to_location' => $inventory->location_id
            ],
            [
                'type' => 'stock_transfer_receipt',
                'id' => $this->id
            ],
            $transferItem->batch_number,
            $transferItem->serial_number,
            "Stock transfer receipt #{$this->transfer_number}"
        );
    }

    /**
     * Release inventory at source after receipt.
     *
     * @param StockTransferItem $transferItem
     * @param int $receiveQuantity
     * @return void
     */
    protected function releaseSourceInventory(StockTransferItem $transferItem, int $receiveQuantity): void
    {
        $sourceInventory = Inventory::where('product_id', $transferItem->product_id)
            ->where('warehouse_id', $this->from_warehouse_id)
            ->where('batch_number', $transferItem->batch_number)
            ->where('serial_number', $transferItem->serial_number)
            ->first();

        if ($sourceInventory) {
            $sourceInventory->unreserve($receiveQuantity);
            $sourceInventory->ship($receiveQuantity);
        }
    }

    /**
     * Update transfer status after receipt.
     *
     * @return void
     */
    protected function updateReceiptStatus(): void
    {
        if ($this->is_fully_received) {
            $this->status = self::STATUS_RECEIVED;
            $this->actual_delivery_date = now();
        } elseif ($this->items->sum('quantity_received') > 0) {
            $this->status = self::STATUS_PARTIALLY_RECEIVED;
        }

        $this->save();
    }

    /**
     * Validate inventory availability before shipment.
     *
     * @return array<string, mixed>
     */
    public function validateInventory(): array
    {
        $validation = [
            'valid' => true,
            'items' => []
        ];

        foreach ($this->items as $item) {
            $availableQty = Inventory::available()
                ->byProduct($item->product_id)
                ->inWarehouse($this->from_warehouse_id)
                ->sum('quantity_available');

            $itemValidation = [
                'product_id' => $item->product_id,
                'product_name' => $item->product->name,
                'requested' => $item->quantity_requested,
                'available' => $availableQty,
                'sufficient' => $availableQty >= $item->quantity_requested
            ];

            if (!$itemValidation['sufficient']) {
                $validation['valid'] = false;
            }

            $validation['items'][] = $itemValidation;
        }

        return $validation;
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
     * Check if transfer can be modified.
     *
     * @return bool
     */
    public function isModifiable(): bool
    {
        return !in_array($this->status, self::COMPLETED_STATUSES);
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
        // Auto-generate transfer number
        static::creating(function (self $transfer) {
            if (empty($transfer->transfer_number)) {
                $transfer->transfer_number = self::generateTransferNumber();
            }

            if (empty($transfer->request_date)) {
                $transfer->request_date = now();
            }
        });

        // Validate warehouses before saving
        static::saving(function (self $transfer) {
            if ($transfer->isModifiable()) {
                $transfer->validateWarehouses();
            }
            return true;
        });

        // Prevent modification of completed transfers
        static::updating(function (self $transfer) {
            if ($transfer->getOriginal('status') !== $transfer->status) {
                // Status change is allowed
                return true;
            }

            if (in_array($transfer->getOriginal('status'), self::COMPLETED_STATUSES)) {
                return false;
            }

            return true;
        });

        // Clean up items before deletion
        static::deleting(function (self $transfer) {
            if (in_array($transfer->status, self::ACTIVE_STATUSES)) {
                throw new \Exception('Cannot delete an active transfer.');
            }

            $transfer->items()->delete();
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get transfer statistics.
     *
     * @param int $days
     * @return array<string, mixed>
     */
    public static function getStatistics(int $days = 30): array
    {
        $since = now()->subDays($days);

        $stats = self::where('request_date', '>=', $since)
            ->selectRaw('
                COUNT(*) as total_transfers,
                SUM(CASE WHEN status = "received" THEN 1 ELSE 0 END) as completed_transfers,
                SUM(CASE WHEN status = "cancelled" THEN 1 ELSE 0 END) as cancelled_transfers,
                COUNT(DISTINCT from_warehouse_id) as source_warehouses,
                COUNT(DISTINCT to_warehouse_id) as dest_warehouses
            ')
            ->first();

        $byStatus = self::where('request_date', '>=', $since)
            ->select('status', DB::raw('COUNT(*) as count'))
            ->groupBy('status')
            ->get()
            ->keyBy('status');

        return [
            'period_days' => $days,
            'total_transfers' => $stats->total_transfers ?? 0,
            'completed_transfers' => $stats->completed_transfers ?? 0,
            'cancelled_transfers' => $stats->cancelled_transfers ?? 0,
            'source_warehouses' => $stats->source_warehouses ?? 0,
            'dest_warehouses' => $stats->dest_warehouses ?? 0,
            'by_status' => $byStatus,
            'completion_rate' => $stats->total_transfers > 0
                ? round(($stats->completed_transfers / $stats->total_transfers) * 100, 2)
                : 0
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
            'text' => $this->display_number,
            'transfer_number' => $this->transfer_number,
            'from_warehouse' => $this->fromWarehouse->name,
            'to_warehouse' => $this->toWarehouse->name,
            'status' => $this->status
        ];
    }

    /**
     * Get warehouse pair performance.
     *
     * @return array
     */
    public function getWarehousePairPerformance(): array
    {
        return [
            'from_warehouse' => $this->fromWarehouse->name,
            'to_warehouse' => $this->toWarehouse->name,
            'transfer_count' => 1,
            'total_quantity' => $this->total_quantity,
            'total_value' => $this->total_value,
            'completed' => $this->status === self::STATUS_RECEIVED,
            'on_time' => $this->actual_delivery_date && $this->expected_delivery_date
                ? $this->actual_delivery_date <= $this->expected_delivery_date
                : null
        ];
    }
}
