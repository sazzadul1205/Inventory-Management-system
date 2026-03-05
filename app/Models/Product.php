<?php
// app/Models/Product.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'sku',
        'barcode',
        'name',
        'description',
        'category_id',
        'brand',
        'unit_of_measure',
        'minimum_stock',
        'maximum_stock',
        'reorder_point',
        'reorder_quantity',
        'weight',
        'weight_unit',
        'dimensions',
        'is_active',
        'is_serial_tracked',
        'is_batch_tracked',
        'is_expirable',
        'image_url',
        'notes'
    ];

    protected $casts = [
        'minimum_stock' => 'integer',
        'maximum_stock' => 'integer',
        'reorder_point' => 'integer',
        'reorder_quantity' => 'integer',
        'weight' => 'decimal:2',
        'is_active' => 'boolean',
        'is_serial_tracked' => 'boolean',
        'is_batch_tracked' => 'boolean',
        'is_expirable' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Relationships
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function suppliers(): BelongsToMany
    {
        return $this->belongsToMany(Supplier::class, 'product_suppliers')
            ->withPivot(['supplier_sku', 'unit_cost', 'minimum_order_quantity', 'is_preferred', 'lead_time_days'])
            ->withTimestamps();
    }

    public function productSuppliers(): HasMany
    {
        return $this->hasMany(ProductSupplier::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeInCategory($query, $categoryId)
    {
        return $query->where('category_id', $categoryId);
    }

    public function scopeByBrand($query, $brand)
    {
        return $query->where('brand', $brand);
    }

    public function scopeLowStock($query)
    {
        return $query->whereRaw('minimum_stock > 0')
            ->whereRaw('current_stock <= minimum_stock');
    }

    public function scopeTracked($query, $type = null)
    {
        switch ($type) {
            case 'serial':
                return $query->where('is_serial_tracked', true);
            case 'batch':
                return $query->where('is_batch_tracked', true);
            case 'expirable':
                return $query->where('is_expirable', true);
            default:
                return $query->where(function ($q) {
                    $q->where('is_serial_tracked', true)
                        ->orWhere('is_batch_tracked', true)
                        ->orWhere('is_expirable', true);
                });
        }
    }

    // Accessors
    public function getDisplayNameAttribute(): string
    {
        return "{$this->sku} - {$this->name}";
    }

    public function getTrackingMethodsAttribute(): array
    {
        $methods = [];
        if ($this->is_serial_tracked) $methods[] = 'Serial';
        if ($this->is_batch_tracked) $methods[] = 'Batch';
        if ($this->is_expirable) $methods[] = 'Expirable';

        return $methods;
    }

    public function getTrackingMethodsTextAttribute(): string
    {
        return implode(', ', $this->tracking_methods) ?: 'None';
    }

    public function getPreferredSupplierAttribute()
    {
        return $this->productSuppliers()
            ->where('is_preferred', true)
            ->with('supplier')
            ->first()?->supplier;
    }

    public function getLowestUnitCostAttribute()
    {
        return $this->productSuppliers()
            ->min('unit_cost');
    }


    /**
     * Get the inventory records for this product
     */
    public function inventory(): HasMany
    {
        return $this->hasMany(Inventory::class);
    }

    /**
     * Get the purchase order items for this product
     */
    public function purchaseOrderItems(): HasMany
    {
        return $this->hasMany(PurchaseOrderItem::class);
    }

    /**
     * Get the sales order items for this product
     */
    public function salesOrderItems(): HasMany
    {
        return $this->hasMany(SalesOrderItem::class);
    }

    /**
     * Get the stock transfer items for this product
     */
    public function stockTransferItems(): HasMany
    {
        return $this->hasMany(StockTransferItem::class);
    }

    /**
     * Get the stock count items for this product
     */
    public function stockCountItems(): HasMany
    {
        return $this->hasMany(StockCountItem::class);
    }

    /**
     * Get the shipment items for this product
     */
    public function shipmentItems(): HasMany
    {
        return $this->hasMany(ShipmentItem::class);
    }

    /**
     * Get the purchase receipt items for this product
     */
    public function purchaseReceiptItems(): HasMany
    {
        return $this->hasMany(PurchaseReceiptItem::class);
    }
}
