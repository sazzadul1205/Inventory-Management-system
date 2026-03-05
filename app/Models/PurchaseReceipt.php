<?php
// app/Models/PurchaseReceipt.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PurchaseReceipt extends Model
{
    use HasFactory;

    protected $table = 'purchase_receipts';

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

    protected $casts = [
        'receipt_date' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Status constants
    const STATUS_RECEIVED = 'received';
    const STATUS_PARTIALLY_RECEIVED = 'partially_received';
    const STATUS_COMPLETED = 'completed';
    const STATUS_CANCELLED = 'cancelled';

    public static $statuses = [
        self::STATUS_RECEIVED => 'Received',
        self::STATUS_PARTIALLY_RECEIVED => 'Partially Received',
        self::STATUS_COMPLETED => 'Completed',
        self::STATUS_CANCELLED => 'Cancelled'
    ];

    // Relationships
    public function purchaseOrder(): BelongsTo
    {
        return $this->belongsTo(PurchaseOrder::class);
    }

    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(PurchaseReceiptItem::class);
    }

    public function receivedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'received_by');
    }

    // Scopes
    public function scopeForPurchaseOrder($query, $poId)
    {
        return $query->where('purchase_order_id', $poId);
    }

    public function scopeForWarehouse($query, $warehouseId)
    {
        return $query->where('warehouse_id', $warehouseId);
    }

    public function scopeBetweenDates($query, $startDate, $endDate)
    {
        return $query->whereBetween('receipt_date', [$startDate, $endDate]);
    }

    // Accessors
    public function getStatusLabelAttribute(): string
    {
        return self::$statuses[$this->status] ?? $this->status;
    }

    public function getTotalItemsAttribute(): int
    {
        return $this->items->count();
    }

    public function getTotalQuantityAttribute(): int
    {
        return $this->items->sum('quantity_received');
    }

    public function getTotalCostAttribute(): float
    {
        return $this->items->sum('total_cost');
    }

    // Methods
    public static function generateReceiptNumber(): string
    {
        $prefix = 'RCT';
        $year = now()->format('Y');
        $month = now()->format('m');

        $lastReceipt = self::whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastReceipt) {
            $lastNumber = intval(substr($lastReceipt->receipt_number, -4));
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$year}{$month}-{$newNumber}";
    }
}
