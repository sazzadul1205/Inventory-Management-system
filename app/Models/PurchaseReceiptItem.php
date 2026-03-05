<?php
// app/Models/PurchaseReceiptItem.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PurchaseReceiptItem extends Model
{
    use HasFactory;

    protected $table = 'purchase_receipt_items';

    protected $fillable = [
        'purchase_receipt_id',
        'purchase_order_item_id',
        'product_id',
        'location_id',
        'quantity_received',
        'batch_number',
        'serial_number',
        'expiry_date',
        'unit_cost',
        'notes'
    ];

    protected $casts = [
        'quantity_received' => 'integer',
        'unit_cost' => 'decimal:2',
        'total_cost' => 'decimal:2',
        'expiry_date' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Relationships
    public function purchaseReceipt(): BelongsTo
    {
        return $this->belongsTo(PurchaseReceipt::class);
    }

    public function purchaseOrderItem(): BelongsTo
    {
        return $this->belongsTo(PurchaseOrderItem::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    // Scopes
    public function scopeForProduct($query, $productId)
    {
        return $query->where('product_id', $productId);
    }

    public function scopeWithBatch($query, $batchNumber)
    {
        return $query->where('batch_number', $batchNumber);
    }

    public function scopeWithSerial($query, $serialNumber)
    {
        return $query->where('serial_number', $serialNumber);
    }

    public function scopeExpiringBefore($query, $date)
    {
        return $query->where('expiry_date', '<=', $date);
    }

    // Accessors
    public function getTotalCostAttribute(): float
    {
        return $this->quantity_received * ($this->unit_cost ?? 0);
    }

    public function getIsExpirableAttribute(): bool
    {
        return $this->expiry_date !== null;
    }

    public function getIsExpiredAttribute(): bool
    {
        return $this->expiry_date && $this->expiry_date->isPast();
    }

    public function getDaysUntilExpiryAttribute(): ?int
    {
        if (!$this->expiry_date) {
            return null;
        }

        return now()->diffInDays($this->expiry_date, false);
    }

    public function getLocationPathAttribute(): string
    {
        return $this->location ? $this->location->full_location_path : 'Not assigned';
    }
}
