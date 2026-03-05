<?php
// app/Models/StockTransfer.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

class StockTransfer extends Model
{
    use HasFactory;

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

    protected $casts = [
        'request_date' => 'datetime',
        'expected_delivery_date' => 'date',
        'actual_delivery_date' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Status constants
    const STATUS_DRAFT = 'draft';
    const STATUS_PENDING = 'pending';
    const STATUS_APPROVED = 'approved';
    const STATUS_SHIPPED = 'shipped';
    const STATUS_PARTIALLY_RECEIVED = 'partially_received';
    const STATUS_RECEIVED = 'received';
    const STATUS_CANCELLED = 'cancelled';

    public static $statuses = [
        self::STATUS_DRAFT => 'Draft',
        self::STATUS_PENDING => 'Pending Approval',
        self::STATUS_APPROVED => 'Approved',
        self::STATUS_SHIPPED => 'Shipped',
        self::STATUS_PARTIALLY_RECEIVED => 'Partially Received',
        self::STATUS_RECEIVED => 'Received',
        self::STATUS_CANCELLED => 'Cancelled'
    ];

    // Relationships
    public function fromWarehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class, 'from_warehouse_id');
    }

    public function toWarehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class, 'to_warehouse_id');
    }

    public function items(): HasMany
    {
        return $this->hasMany(StockTransferItem::class);
    }

    public function requestedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'requested_by');
    }

    public function approvedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    // Scopes
    public function scopeDraft($query)
    {
        return $query->where('status', self::STATUS_DRAFT);
    }

    public function scopePending($query)
    {
        return $query->where('status', self::STATUS_PENDING);
    }

    public function scopeApproved($query)
    {
        return $query->where('status', self::STATUS_APPROVED);
    }

    public function scopeShipped($query)
    {
        return $query->where('status', self::STATUS_SHIPPED);
    }

    public function scopeReceived($query)
    {
        return $query->whereIn('status', [self::STATUS_PARTIALLY_RECEIVED, self::STATUS_RECEIVED]);
    }

    public function scopeFromWarehouse($query, $warehouseId)
    {
        return $query->where('from_warehouse_id', $warehouseId);
    }

    public function scopeToWarehouse($query, $warehouseId)
    {
        return $query->where('to_warehouse_id', $warehouseId);
    }

    public function scopeOverdue($query)
    {
        return $query->where('expected_delivery_date', '<', now())
            ->whereNotIn('status', [self::STATUS_RECEIVED, self::STATUS_CANCELLED]);
    }

    public function scopeBetweenDates($query, $startDate, $endDate)
    {
        return $query->whereBetween('request_date', [$startDate, $endDate]);
    }

    // Accessors
    public function getStatusLabelAttribute(): string
    {
        return self::$statuses[$this->status] ?? $this->status;
    }

    public function getTransferProgressAttribute(): array
    {
        $totalItems = $this->items->count();
        $fullyReceivedItems = $this->items->filter(function ($item) {
            return $item->quantity_received >= $item->quantity_requested;
        })->count();

        $partialItems = $this->items->filter(function ($item) {
            return $item->quantity_received > 0 && $item->quantity_received < $item->quantity_requested;
        })->count();

        $shippedItems = $this->items->filter(function ($item) {
            return $item->quantity_shipped > 0 && $item->quantity_received == 0;
        })->count();

        $pendingItems = $this->items->filter(function ($item) {
            return $item->quantity_shipped == 0;
        })->count();

        return [
            'total' => $totalItems,
            'fully_received' => $fullyReceivedItems,
            'partially_received' => $partialItems,
            'shipped' => $shippedItems,
            'pending' => $pendingItems,
            'received_percentage' => $totalItems > 0 ? round(($fullyReceivedItems / $totalItems) * 100, 2) : 0,
            'shipped_percentage' => $totalItems > 0 ? round((($shippedItems + $partialItems + $fullyReceivedItems) / $totalItems) * 100, 2) : 0
        ];
    }

    public function getIsFullyReceivedAttribute(): bool
    {
        return $this->items->every(function ($item) {
            return $item->quantity_received >= $item->quantity_requested;
        });
    }

    public function getIsFullyShippedAttribute(): bool
    {
        return $this->items->every(function ($item) {
            return $item->quantity_shipped >= $item->quantity_requested;
        });
    }

    public function getTotalQuantityAttribute(): int
    {
        return $this->items->sum('quantity_requested');
    }

    public function getTotalShippedAttribute(): int
    {
        return $this->items->sum('quantity_shipped');
    }

    public function getTotalReceivedAttribute(): int
    {
        return $this->items->sum('quantity_received');
    }

    public function getTotalValueAttribute(): float
    {
        return $this->items->sum(function ($item) {
            return ($item->unit_cost ?? 0) * $item->quantity_requested;
        });
    }

    // Methods
    public static function generateTransferNumber(): string
    {
        $prefix = 'TR';
        $year = now()->format('Y');
        $month = now()->format('m');

        $lastTransfer = self::whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastTransfer) {
            $lastNumber = intval(substr($lastTransfer->transfer_number, -4));
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$year}{$month}-{$newNumber}";
    }

    public function validateWarehouses(): bool
    {
        if ($this->from_warehouse_id === $this->to_warehouse_id) {
            throw new \Exception('Source and destination warehouses must be different');
        }
        return true;
    }

    public function approve(int $userId): self
    {
        $this->validateWarehouses();

        $this->status = self::STATUS_APPROVED;
        $this->approved_by = $userId;
        $this->save();

        return $this;
    }

    public function cancel(?string $reason = null): self
    {
        $this->status = self::STATUS_CANCELLED;
        $this->notes = ($this->notes ? $this->notes . "\n" : '') . "Cancelled: " . ($reason ?? 'No reason provided');
        $this->save();

        return $this;
    }

    public function ship(array $items): self
    {
        DB::transaction(function () use ($items) {
            foreach ($items as $itemData) {
                $transferItem = $this->items()->findOrFail($itemData['id']);

                // Find inventory at source
                $inventory = Inventory::where('product_id', $transferItem->product_id)
                    ->where('warehouse_id', $this->from_warehouse_id)
                    ->where('location_id', $itemData['from_location_id'] ?? $transferItem->from_location_id)
                    ->where('batch_number', $itemData['batch_number'] ?? $transferItem->batch_number)
                    ->where('serial_number', $itemData['serial_number'] ?? $transferItem->serial_number)
                    ->first();

                if (!$inventory) {
                    throw new \Exception("Inventory not found for product: {$transferItem->product->name}");
                }

                $shipQuantity = $itemData['quantity_shipped'] ?? $transferItem->quantity_requested;

                if ($shipQuantity > $inventory->quantity_available) {
                    throw new \Exception("Insufficient inventory for product: {$transferItem->product->name}. Available: {$inventory->quantity_available}, Requested: {$shipQuantity}");
                }

                // Reserve the inventory
                $inventory->reserve($shipQuantity);

                // Update transfer item
                $transferItem->quantity_shipped = $shipQuantity;
                $transferItem->from_location_id = $inventory->location_id;
                $transferItem->batch_number = $itemData['batch_number'] ?? $transferItem->batch_number;
                $transferItem->serial_number = $itemData['serial_number'] ?? $transferItem->serial_number;
                $transferItem->unit_cost = $inventory->unit_cost;
                $transferItem->save();

                // Create inventory movement record
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
                    "Stock transfer shipment"
                );
            }

            $this->status = self::STATUS_SHIPPED;
            $this->save();
        });

        return $this;
    }

    public function receive(array $items): self
    {
        DB::transaction(function () use ($items) {
            foreach ($items as $itemData) {
                $transferItem = $this->items()->findOrFail($itemData['id']);

                $receiveQuantity = $itemData['quantity_received'] ??
                    ($transferItem->quantity_shipped - $transferItem->quantity_received);

                if ($receiveQuantity > ($transferItem->quantity_shipped - $transferItem->quantity_received)) {
                    throw new \Exception("Cannot receive more than shipped quantity for product: {$transferItem->product->name}");
                }

                // Find or create inventory at destination
                $inventory = Inventory::firstOrCreate(
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

                // Receive inventory
                $inventory->receive($receiveQuantity, $transferItem->unit_cost);

                // Update transfer item
                $transferItem->quantity_received += $receiveQuantity;
                $transferItem->to_location_id = $inventory->location_id;
                $transferItem->save();

                // Create inventory movement record
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
                    "Stock transfer receipt"
                );

                // Unreserve from source
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

            // Update transfer status
            if ($this->is_fully_received) {
                $this->status = self::STATUS_RECEIVED;
                $this->actual_delivery_date = now();
            } elseif ($this->items->sum('quantity_received') > 0) {
                $this->status = self::STATUS_PARTIALLY_RECEIVED;
            }

            $this->save();
        });

        return $this;
    }

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
}
