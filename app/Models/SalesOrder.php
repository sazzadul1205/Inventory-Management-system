<?php
// app/Models/SalesOrder.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SalesOrder extends Model
{
    use HasFactory;

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

    // Status constants
    const STATUS_DRAFT = 'draft';
    const STATUS_PENDING = 'pending';
    const STATUS_APPROVED = 'approved';
    const STATUS_PROCESSING = 'processing';
    const STATUS_PARTIALLY_SHIPPED = 'partially_shipped';
    const STATUS_SHIPPED = 'shipped';
    const STATUS_DELIVERED = 'delivered';
    const STATUS_CANCELLED = 'cancelled';

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

    // Payment status constants
    const PAYMENT_PENDING = 'pending';
    const PAYMENT_PAID = 'paid';
    const PAYMENT_PARTIALLY_PAID = 'partially_paid';
    const PAYMENT_REFUNDED = 'refunded';

    public static $paymentStatuses = [
        self::PAYMENT_PENDING => 'Pending',
        self::PAYMENT_PAID => 'Paid',
        self::PAYMENT_PARTIALLY_PAID => 'Partially Paid',
        self::PAYMENT_REFUNDED => 'Refunded'
    ];

    // Relationships
    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(SalesOrderItem::class);
    }

    public function shipments(): HasMany
    {
        return $this->hasMany(Shipment::class);
    }

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
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

    public function scopeProcessing($query)
    {
        return $query->where('status', self::STATUS_PROCESSING);
    }

    public function scopeShipped($query)
    {
        return $query->whereIn('status', [self::STATUS_PARTIALLY_SHIPPED, self::STATUS_SHIPPED, self::STATUS_DELIVERED]);
    }

    public function scopeForCustomer($query, $customerId)
    {
        return $query->where('customer_id', $customerId);
    }

    public function scopeForWarehouse($query, $warehouseId)
    {
        return $query->where('warehouse_id', $warehouseId);
    }

    public function scopeOverdue($query)
    {
        return $query->where('required_date', '<', now())
            ->whereNotIn('status', [self::STATUS_DELIVERED, self::STATUS_CANCELLED]);
    }

    public function scopeDueToday($query)
    {
        return $query->whereDate('required_date', now())
            ->whereNotIn('status', [self::STATUS_DELIVERED, self::STATUS_CANCELLED]);
    }

    public function scopeDueThisWeek($query)
    {
        return $query->whereBetween('required_date', [now(), now()->addDays(7)])
            ->whereNotIn('status', [self::STATUS_DELIVERED, self::STATUS_CANCELLED]);
    }

    public function scopeByPaymentStatus($query, $status)
    {
        return $query->where('payment_status', $status);
    }

    // Accessors
    public function getStatusLabelAttribute(): string
    {
        return self::$statuses[$this->status] ?? $this->status;
    }

    public function getPaymentStatusLabelAttribute(): string
    {
        return self::$paymentStatuses[$this->payment_status] ?? $this->payment_status;
    }

    public function getShipmentProgressAttribute(): array
    {
        $totalItems = $this->items->count();
        $fullyShippedItems = $this->items->filter(function ($item) {
            return $item->quantity_shipped >= $item->quantity_ordered;
        })->count();

        $partialItems = $this->items->filter(function ($item) {
            return $item->quantity_shipped > 0 && $item->quantity_shipped < $item->quantity_ordered;
        })->count();

        $pendingItems = $this->items->filter(function ($item) {
            return $item->quantity_shipped == 0;
        })->count();

        return [
            'total' => $totalItems,
            'fully_shipped' => $fullyShippedItems,
            'partially_shipped' => $partialItems,
            'pending' => $pendingItems,
            'percentage' => $totalItems > 0 ? round(($fullyShippedItems / $totalItems) * 100, 2) : 0
        ];
    }

    public function getIsFullyShippedAttribute(): bool
    {
        return $this->items->every(function ($item) {
            return $item->quantity_shipped >= $item->quantity_ordered;
        });
    }

    public function getIsOverdueAttribute(): bool
    {
        return $this->required_date &&
            $this->required_date->isPast() &&
            !in_array($this->status, [self::STATUS_DELIVERED, self::STATUS_CANCELLED]);
    }

    public function getDaysOverdueAttribute(): ?int
    {
        if (!$this->is_overdue) {
            return null;
        }

        return $this->required_date->diffInDays(now());
    }

    // Methods
    public static function generateSONumber(): string
    {
        $prefix = 'SO';
        $year = now()->format('Y');
        $month = now()->format('m');

        $lastSO = self::whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastSO) {
            $lastNumber = intval(substr($lastSO->so_number, -4));
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$year}{$month}-{$newNumber}";
    }

    public function calculateTotals(): self
    {
        $this->subtotal = $this->items->sum('total_price');

        $discountedSubtotal = $this->subtotal - $this->discount_amount;
        $this->total_amount = $discountedSubtotal + $this->tax_amount + $this->shipping_cost;

        return $this;
    }

    public function updateStatus(): self
    {
        if ($this->status === self::STATUS_CANCELLED) {
            return $this;
        }

        if ($this->is_fully_shipped) {
            $this->status = self::STATUS_SHIPPED;
            $this->shipped_date = now();
        } elseif ($this->items->sum('quantity_shipped') > 0) {
            $this->status = self::STATUS_PARTIALLY_SHIPPED;
        }

        return $this;
    }

    public function approve(int $userId): self
    {
        if (!$this->customer->checkCreditLimit($this->total_amount)) {
            throw new \Exception('Order exceeds customer credit limit');
        }

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

                // Find available inventory
                $availableInventory = Inventory::available()
                    ->byProduct($item->product_id)
                    ->inWarehouse($this->warehouse_id)
                    ->orderBy('expiry_date')
                    ->orderBy('created_at')
                    ->get();

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

                        $allocated += $allocateQty;
                    }
                }

                if ($allocated < $remainingToAllocate) {
                    $errors[] = "Insufficient inventory for product: {$item->product->name}. Required: {$remainingToAllocate}, Available: {$allocated}";
                }
            }

            if (!empty($errors)) {
                throw new \Exception(implode("\n", $errors));
            }
        });

        return $allocations;
    }

    public function ship(array $shipmentData, array $items): Shipment
    {
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

        foreach ($items as $itemData) {
            $soItem = $this->items()->findOrFail($itemData['sales_order_item_id']);

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
            $soItem->status = $soItem->quantity_shipped >= $soItem->quantity_ordered ?
                SalesOrderItem::STATUS_SHIPPED :
                SalesOrderItem::STATUS_PARTIALLY_SHIPPED;
            $soItem->save();

            // Update inventory (ship out)
            $inventory = Inventory::where('product_id', $soItem->product_id)
                ->where('warehouse_id', $shipment->warehouse_id)
                ->where('location_id', $itemData['location_id'])
                ->where('batch_number', $itemData['batch_number'] ?? null)
                ->where('serial_number', $itemData['serial_number'] ?? null)
                ->first();

            if ($inventory) {
                $inventory->ship($itemData['quantity_shipped']);
            }
        }

        // Update SO status
        $this->updateStatus()->save();

        return $shipment;
    }
}
