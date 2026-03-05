<?php
// app/Models/SalesOrderItem.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SalesOrderItem extends Model
{
    use HasFactory;

    protected $table = 'sales_order_items';

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

    protected $casts = [
        'quantity_ordered' => 'integer',
        'quantity_shipped' => 'integer',
        'quantity_remaining' => 'integer',
        'unit_price' => 'decimal:2',
        'total_price' => 'decimal:2',
        'discount_percent' => 'decimal:2',
        'tax_percent' => 'decimal:2',
        'line_total' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Status constants
    const STATUS_PENDING = 'pending';
    const STATUS_ALLOCATED = 'allocated';
    const STATUS_PARTIALLY_SHIPPED = 'partially_shipped';
    const STATUS_SHIPPED = 'shipped';
    const STATUS_CANCELLED = 'cancelled';

    public static $statuses = [
        self::STATUS_PENDING => 'Pending',
        self::STATUS_ALLOCATED => 'Allocated',
        self::STATUS_PARTIALLY_SHIPPED => 'Partially Shipped',
        self::STATUS_SHIPPED => 'Shipped',
        self::STATUS_CANCELLED => 'Cancelled'
    ];

    // Relationships
    public function salesOrder(): BelongsTo
    {
        return $this->belongsTo(SalesOrder::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function shipmentItems(): HasMany
    {
        return $this->hasMany(ShipmentItem::class, 'sales_order_item_id');
    }

    // Scopes
    public function scopePending($query)
    {
        return $query->where('status', self::STATUS_PENDING);
    }

    public function scopeAllocated($query)
    {
        return $query->where('status', self::STATUS_ALLOCATED);
    }

    public function scopeShipped($query)
    {
        return $query->where('status', self::STATUS_SHIPPED);
    }

    public function scopePartiallyShipped($query)
    {
        return $query->where('status', self::STATUS_PARTIALLY_SHIPPED);
    }

    public function scopeForProduct($query, $productId)
    {
        return $query->where('product_id', $productId);
    }

    // Accessors
    public function getStatusLabelAttribute(): string
    {
        return self::$statuses[$this->status] ?? $this->status;
    }

    public function getShipmentProgressAttribute(): float
    {
        if ($this->quantity_ordered <= 0) {
            return 0;
        }
        return round(($this->quantity_shipped / $this->quantity_ordered) * 100, 2);
    }

    public function getRemainingQuantityAttribute(): int
    {
        return $this->quantity_ordered - $this->quantity_shipped;
    }

    public function getIsFullyShippedAttribute(): bool
    {
        return $this->quantity_shipped >= $this->quantity_ordered;
    }

    public function getLineTotalCalculatedAttribute(): float
    {
        $subtotal = $this->quantity_ordered * $this->unit_price;
        $afterDiscount = $subtotal * (1 - ($this->discount_percent / 100));
        return $afterDiscount * (1 + ($this->tax_percent / 100));
    }
}
