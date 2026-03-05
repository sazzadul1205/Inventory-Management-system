<?php
// app/Models/ProductSupplier.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductSupplier extends Model
{
    use HasFactory;

    protected $table = 'product_suppliers';

    protected $fillable = [
        'product_id',
        'supplier_id',
        'supplier_sku',
        'unit_cost',
        'minimum_order_quantity',
        'is_preferred',
        'lead_time_days'
    ];

    protected $casts = [
        'unit_cost' => 'decimal:2',
        'minimum_order_quantity' => 'integer',
        'is_preferred' => 'boolean',
        'lead_time_days' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Relationships
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class);
    }

    // Scopes
    public function scopePreferred($query)
    {
        return $query->where('is_preferred', true);
    }

    public function scopeBySupplier($query, $supplierId)
    {
        return $query->where('supplier_id', $supplierId);
    }

    public function scopeByProduct($query, $productId)
    {
        return $query->where('product_id', $productId);
    }

    // Accessors
    public function getTotalCostForMinimumOrderAttribute()
    {
        return $this->unit_cost * $this->minimum_order_quantity;
    }
}
