<?php
// app/Models/PurchaseOrder.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;

class PurchaseOrder extends Model
{
    use HasFactory;

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
    public function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class);
    }

    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(PurchaseOrderItem::class);
    }

    public function receipts(): HasMany
    {
        return $this->hasMany(PurchaseReceipt::class);
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

    public function scopeShipped($query)
    {
        return $query->where('status', self::STATUS_SHIPPED);
    }

    public function scopeReceived($query)
    {
        return $query->whereIn('status', [self::STATUS_PARTIALLY_RECEIVED, self::STATUS_RECEIVED]);
    }

    public function scopeNotReceived($query)
    {
        return $query->whereNotIn('status', [self::STATUS_PARTIALLY_RECEIVED, self::STATUS_RECEIVED, self::STATUS_CANCELLED]);
    }

    public function scopeForSupplier($query, $supplierId)
    {
        return $query->where('supplier_id', $supplierId);
    }

    public function scopeForWarehouse($query, $warehouseId)
    {
        return $query->where('warehouse_id', $warehouseId);
    }

    public function scopeOverdue($query)
    {
        return $query->where('expected_delivery_date', '<', now())
            ->whereNotIn('status', [self::STATUS_RECEIVED, self::STATUS_CANCELLED]);
    }

    public function scopeDueToday($query)
    {
        return $query->whereDate('expected_delivery_date', now())
            ->whereNotIn('status', [self::STATUS_RECEIVED, self::STATUS_CANCELLED]);
    }

    public function scopeDueThisWeek($query)
    {
        return $query->whereBetween('expected_delivery_date', [now(), now()->addDays(7)])
            ->whereNotIn('status', [self::STATUS_RECEIVED, self::STATUS_CANCELLED]);
    }

    // Accessors
    public function getStatusLabelAttribute(): string
    {
        return self::$statuses[$this->status] ?? $this->status;
    }

    public function getReceiptProgressAttribute(): array
    {
        $totalItems = $this->items->count();
        $fullyReceivedItems = $this->items->filter(function ($item) {
            return $item->quantity_received >= $item->quantity_ordered;
        })->count();

        $partialItems = $this->items->filter(function ($item) {
            return $item->quantity_received > 0 && $item->quantity_received < $item->quantity_ordered;
        })->count();

        $pendingItems = $this->items->filter(function ($item) {
            return $item->quantity_received == 0;
        })->count();

        return [
            'total' => $totalItems,
            'fully_received' => $fullyReceivedItems,
            'partially_received' => $partialItems,
            'pending' => $pendingItems,
            'percentage' => $totalItems > 0 ? round(($fullyReceivedItems / $totalItems) * 100, 2) : 0
        ];
    }

    public function getIsFullyReceivedAttribute(): bool
    {
        return $this->items->every(function ($item) {
            return $item->quantity_received >= $item->quantity_ordered;
        });
    }

    public function getIsOverdueAttribute(): bool
    {
        return $this->expected_delivery_date &&
            $this->expected_delivery_date->isPast() &&
            !in_array($this->status, [self::STATUS_RECEIVED, self::STATUS_CANCELLED]);
    }

    public function getDaysOverdueAttribute(): ?int
    {
        if (!$this->is_overdue) {
            return null;
        }

        return $this->expected_delivery_date->diffInDays(now());
    }

    // Methods
    public static function generatePONumber(): string
    {
        $prefix = 'PO';
        $year = now()->format('Y');
        $month = now()->format('m');

        $lastPO = self::whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastPO) {
            $lastNumber = intval(substr($lastPO->po_number, -4));
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$year}{$month}-{$newNumber}";
    }

    public function calculateTotals(): self
    {
        $this->subtotal = $this->items->sum('total_price');
        $this->total_amount = $this->subtotal + $this->tax_amount + $this->shipping_cost;

        return $this;
    }

    public function updateStatus(): self
    {
        if ($this->status === self::STATUS_CANCELLED) {
            return $this;
        }

        if ($this->is_fully_received) {
            $this->status = self::STATUS_RECEIVED;
            $this->actual_delivery_date = now();
        } elseif ($this->items->sum('quantity_received') > 0) {
            $this->status = self::STATUS_PARTIALLY_RECEIVED;
        }

        return $this;
    }

    public function approve(int $userId): self
    {
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

    public function receive(array $receiptData, array $items): PurchaseReceipt
    {
        $receipt = $this->receipts()->create([
            'receipt_number' => PurchaseReceipt::generateReceiptNumber(),
            'warehouse_id' => $receiptData['warehouse_id'] ?? $this->warehouse_id,
            'receipt_date' => $receiptData['receipt_date'] ?? now(),
            'invoice_number' => $receiptData['invoice_number'] ?? null,
            'delivery_note_number' => $receiptData['delivery_note_number'] ?? null,
            'notes' => $receiptData['notes'] ?? null,
            'received_by' => Auth::id(),
        ]);

        foreach ($items as $itemData) {
            $poItem = $this->items()->findOrFail($itemData['purchase_order_item_id']);

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
            Inventory::updateOrCreate(
                [
                    'product_id' => $poItem->product_id,
                    'warehouse_id' => $receipt->warehouse_id,
                    'location_id' => $itemData['location_id'],
                    'batch_number' => $itemData['batch_number'] ?? null,
                    'serial_number' => $itemData['serial_number'] ?? null,
                    'expiry_date' => $itemData['expiry_date'] ?? null
                ],
                [
                    'unit_cost' => $itemData['unit_cost'] ?? $poItem->unit_price
                ]
            )->receive($itemData['quantity_received'], $itemData['unit_cost'] ?? $poItem->unit_price);
        }

        // Update PO status
        $this->updateStatus()->save();

        return $receipt;
    }
}
