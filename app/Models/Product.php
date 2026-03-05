<?php
// app/Models/Product.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

/**
 * Product Model
 * 
 * Represents a product/item in the inventory system with comprehensive
 * product information, tracking capabilities, and relationships to
 * suppliers, inventory, orders, and movements. Supports various tracking
 * methods including serial numbers, batch numbers, and expiry dates.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $sku
 * @property string|null $barcode
 * @property string $name
 * @property string|null $description
 * @property int|null $category_id
 * @property string|null $brand
 * @property string|null $unit_of_measure
 * @property int $minimum_stock
 * @property int $maximum_stock
 * @property int $reorder_point
 * @property int $reorder_quantity
 * @property float|null $weight
 * @property string|null $weight_unit
 * @property string|null $dimensions
 * @property bool $is_active
 * @property bool $is_serial_tracked
 * @property bool $is_batch_tracked
 * @property bool $is_expirable
 * @property string|null $image_url
 * @property string|null $notes
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read Category|null $category
 * @property-read Collection|Supplier[] $suppliers
 * @property-read Collection|ProductSupplier[] $productSuppliers
 * @property-read Collection|Inventory[] $inventory
 * @property-read Collection|PurchaseOrderItem[] $purchaseOrderItems
 * @property-read Collection|SalesOrderItem[] $salesOrderItems
 * @property-read Collection|StockTransferItem[] $stockTransferItems
 * @property-read Collection|StockCountItem[] $stockCountItems
 * @property-read Collection|ShipmentItem[] $shipmentItems
 * @property-read Collection|PurchaseReceiptItem[] $purchaseReceiptItems
 * @property-read string $display_name
 * @property-read array $tracking_methods
 * @property-read string $tracking_methods_text
 * @property-read Supplier|null $preferred_supplier
 * @property-read float|null $lowest_unit_cost
 * @property-read int $current_stock
 * @property-read float $total_inventory_value
 * @property-read bool $is_low_stock
 * @property-read bool $needs_reorder
 */
class Product extends Model
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

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
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

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'minimum_stock' => 0,
        'maximum_stock' => 0,
        'reorder_point' => 0,
        'reorder_quantity' => 0,
        'is_active' => true,
        'is_serial_tracked' => false,
        'is_batch_tracked' => false,
        'is_expirable' => false
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the category this product belongs to.
     *
     * @return BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Get all suppliers for this product (many-to-many).
     *
     * @return BelongsToMany
     */
    public function suppliers(): BelongsToMany
    {
        return $this->belongsToMany(Supplier::class, 'product_suppliers')
            ->withPivot([
                'supplier_sku',
                'unit_cost',
                'minimum_order_quantity',
                'is_preferred',
                'lead_time_days'
            ])
            ->withTimestamps();
    }

    /**
     * Get the product-supplier relationships.
     *
     * @return HasMany
     */
    public function productSuppliers(): HasMany
    {
        return $this->hasMany(ProductSupplier::class);
    }

    /**
     * Get all inventory records for this product.
     *
     * @return HasMany
     */
    public function inventory(): HasMany
    {
        return $this->hasMany(Inventory::class);
    }

    /**
     * Get all purchase order items for this product.
     *
     * @return HasMany
     */
    public function purchaseOrderItems(): HasMany
    {
        return $this->hasMany(PurchaseOrderItem::class);
    }

    /**
     * Get all sales order items for this product.
     *
     * @return HasMany
     */
    public function salesOrderItems(): HasMany
    {
        return $this->hasMany(SalesOrderItem::class);
    }

    /**
     * Get all stock transfer items for this product.
     *
     * @return HasMany
     */
    public function stockTransferItems(): HasMany
    {
        return $this->hasMany(StockTransferItem::class);
    }

    /**
     * Get all stock count items for this product.
     *
     * @return HasMany
     */
    public function stockCountItems(): HasMany
    {
        return $this->hasMany(StockCountItem::class);
    }

    /**
     * Get all shipment items for this product.
     *
     * @return HasMany
     */
    public function shipmentItems(): HasMany
    {
        return $this->hasMany(ShipmentItem::class);
    }

    /**
     * Get all purchase receipt items for this product.
     *
     * @return HasMany
     */
    public function purchaseReceiptItems(): HasMany
    {
        return $this->hasMany(PurchaseReceiptItem::class);
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to only include active products.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope to filter by category.
     *
     * @param Builder $query
     * @param int $categoryId
     * @return Builder
     */
    public function scopeInCategory(Builder $query, int $categoryId): Builder
    {
        return $query->where('category_id', $categoryId);
    }

    /**
     * Scope to filter by brand.
     *
     * @param Builder $query
     * @param string $brand
     * @return Builder
     */
    public function scopeByBrand(Builder $query, string $brand): Builder
    {
        return $query->where('brand', $brand);
    }

    /**
     * Scope to find products with low stock.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeLowStock(Builder $query): Builder
    {
        return $query->whereHas('inventory', function ($q) {
            $q->select(DB::raw('SUM(quantity_available) as total_stock'))
                ->groupBy('product_id')
                ->havingRaw('total_stock <= products.minimum_stock');
        });
    }

    /**
     * Scope to find products needing reorder.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeNeedsReorder(Builder $query): Builder
    {
        return $query->whereHas('inventory', function ($q) {
            $q->select(DB::raw('SUM(quantity_available) as total_stock'))
                ->groupBy('product_id')
                ->havingRaw('total_stock <= products.reorder_point');
        });
    }

    /**
     * Scope to filter by tracking method.
     *
     * @param Builder $query
     * @param string|null $type
     * @return Builder
     */
    public function scopeTracked(Builder $query, ?string $type = null): Builder
    {
        return match ($type) {
            'serial' => $query->where('is_serial_tracked', true),
            'batch' => $query->where('is_batch_tracked', true),
            'expirable' => $query->where('is_expirable', true),
            default => $query->where(function ($q) {
                $q->where('is_serial_tracked', true)
                    ->orWhere('is_batch_tracked', true)
                    ->orWhere('is_expirable', true);
            }),
        };
    }

    /**
     * Scope to search by SKU, name, or barcode.
     *
     * @param Builder $query
     * @param string $search
     * @return Builder
     */
    public function scopeSearch(Builder $query, string $search): Builder
    {
        return $query->where(function ($q) use ($search) {
            $q->where('sku', 'like', "%{$search}%")
                ->orWhere('name', 'like', "%{$search}%")
                ->orWhere('barcode', 'like', "%{$search}%")
                ->orWhere('brand', 'like', "%{$search}%");
        });
    }

    /**
     * Scope to get products with zero stock.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeOutOfStock(Builder $query): Builder
    {
        return $query->whereDoesntHave('inventory', function ($q) {
            $q->where('quantity_available', '>', 0);
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get display name (SKU + Name).
     *
     * @return string
     */
    public function getDisplayNameAttribute(): string
    {
        return "{$this->sku} - {$this->name}";
    }

    /**
     * Get all tracking methods as an array.
     *
     * @return array<string>
     */
    public function getTrackingMethodsAttribute(): array
    {
        $methods = [];

        if ($this->is_serial_tracked) {
            $methods[] = 'Serial';
        }
        if ($this->is_batch_tracked) {
            $methods[] = 'Batch';
        }
        if ($this->is_expirable) {
            $methods[] = 'Expirable';
        }

        return $methods;
    }

    /**
     * Get tracking methods as text.
     *
     * @return string
     */
    public function getTrackingMethodsTextAttribute(): string
    {
        $methods = $this->tracking_methods;
        return empty($methods) ? 'None' : implode(', ', $methods);
    }

    /**
     * Get the preferred supplier for this product.
     *
     * @return Supplier|null
     */
    public function getPreferredSupplierAttribute(): ?Supplier
    {
        return $this->productSuppliers()
            ->where('is_preferred', true)
            ->with('supplier')
            ->first()?->supplier;
    }

    /**
     * Get the lowest unit cost from all suppliers.
     *
     * @return float|null
     */
    public function getLowestUnitCostAttribute(): ?float
    {
        return $this->productSuppliers()
            ->min('unit_cost');
    }

    /**
     * Calculate current total stock across all inventory.
     *
     * @return int
     */
    public function getCurrentStockAttribute(): int
    {
        return (int) $this->inventory()
            ->sum('quantity_available');
    }

    /**
     * Calculate total inventory value.
     *
     * @return float
     */
    public function getTotalInventoryValueAttribute(): float
    {
        return (float) $this->inventory()
            ->select(DB::raw('SUM(quantity_on_hand * unit_cost) as total_value'))
            ->value('total_value') ?? 0;
    }

    /**
     * Check if product is low on stock.
     *
     * @return bool
     */
    public function getIsLowStockAttribute(): bool
    {
        return $this->minimum_stock > 0 &&
            $this->current_stock <= $this->minimum_stock;
    }

    /**
     * Check if product needs reorder.
     *
     * @return bool
     */
    public function getNeedsReorderAttribute(): bool
    {
        return $this->reorder_point > 0 &&
            $this->current_stock <= $this->reorder_point;
    }

    /**
     * Get product status label.
     *
     * @return string
     */
    public function getStatusLabelAttribute(): string
    {
        return match (true) {
            !$this->is_active => 'Inactive',
            $this->is_low_stock => 'Low Stock',
            $this->current_stock <= 0 => 'Out of Stock',
            default => 'Active'
        };
    }

    /**
     * Get the full product info for display.
     *
     * @return array
     */
    public function getProductInfoAttribute(): array
    {
        return [
            'id' => $this->id,
            'sku' => $this->sku,
            'name' => $this->name,
            'display' => $this->display_name,
            'current_stock' => $this->current_stock,
            'tracking' => $this->tracking_methods_text,
            'status' => $this->status_label
        ];
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Check if product has any stock available.
     *
     * @return bool
     */
    public function hasStock(): bool
    {
        return $this->current_stock > 0;
    }

    /**
     * Check if product can be tracked by serial numbers.
     *
     * @return bool
     */
    public function isSerialTracked(): bool
    {
        return $this->is_serial_tracked;
    }

    /**
     * Check if product can be tracked by batches.
     *
     * @return bool
     */
    public function isBatchTracked(): bool
    {
        return $this->is_batch_tracked;
    }

    /**
     * Check if product has expiry tracking.
     *
     * @return bool
     */
    public function isExpirable(): bool
    {
        return $this->is_expirable;
    }

    /**
     * Get reorder quantity (either specified or calculated).
     *
     * @return int
     */
    public function getReorderQuantity(): int
    {
        if ($this->reorder_quantity > 0) {
            return $this->reorder_quantity;
        }

        // Calculate based on average monthly usage (would need sales data)
        // For now, return minimum order quantity from preferred supplier
        $preferredSupplier = $this->preferred_supplier;

        if ($preferredSupplier) {
            $productSupplier = $this->productSuppliers()
                ->where('supplier_id', $preferredSupplier->id)
                ->first();

            return $productSupplier?->minimum_order_quantity ?? 1;
        }

        return 1;
    }

    /**
     * Activate the product.
     *
     * @return bool
     */
    public function activate(): bool
    {
        $this->is_active = true;
        return $this->save();
    }

    /**
     * Deactivate the product.
     *
     * @return bool
     */
    public function deactivate(): bool
    {
        // Check if product has pending orders before deactivating
        if ($this->hasPendingOrders()) {
            throw new \Exception('Cannot deactivate product with pending orders.');
        }

        $this->is_active = false;
        return $this->save();
    }

    /**
     * Check if product has any pending orders.
     *
     * @return bool
     */
    public function hasPendingOrders(): bool
    {
        $pendingPurchaseOrders = $this->purchaseOrderItems()
            ->whereHas('purchaseOrder', function ($q) {
                $q->whereIn('status', ['draft', 'submitted', 'approved']);
            })->exists();

        $pendingSalesOrders = $this->salesOrderItems()
            ->whereHas('salesOrder', function ($q) {
                $q->whereIn('status', ['draft', 'approved', 'processing']);
            })->exists();

        return $pendingPurchaseOrders || $pendingSalesOrders;
    }

    /**
     * Update tracking settings.
     *
     * @param array $settings
     * @return bool
     */
    public function updateTrackingSettings(array $settings): bool
    {
        // Validate settings based on existing inventory
        if ($this->inventory()->exists()) {
            // Can't disable tracking if inventory exists
            if (
                isset($settings['is_serial_tracked']) &&
                !$settings['is_serial_tracked'] &&
                $this->is_serial_tracked
            ) {
                throw new \Exception('Cannot disable serial tracking for product with existing inventory.');
            }

            if (
                isset($settings['is_batch_tracked']) &&
                !$settings['is_batch_tracked'] &&
                $this->is_batch_tracked
            ) {
                throw new \Exception('Cannot disable batch tracking for product with existing inventory.');
            }
        }

        $this->fill($settings);
        return $this->save();
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
        // Ensure SKU is unique
        static::creating(function (self $product) {
            if (empty($product->sku)) {
                $product->sku = self::generateSku($product->name);
            }
        });

        // Validate tracking settings
        static::saving(function (self $product) {
            // Expirable requires batch tracking
            if ($product->is_expirable && !$product->is_batch_tracked) {
                $product->is_batch_tracked = true;
            }

            return true;
        });

        // Clean up related records before deletion
        static::deleting(function (self $product) {
            if ($product->inventory()->exists()) {
                throw new \Exception('Cannot delete product with existing inventory.');
            }

            if ($product->hasPendingOrders()) {
                throw new \Exception('Cannot delete product with pending orders.');
            }
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get product sales history.
     *
     * @param int $days
     * @return Collection
     */
    public function getSalesHistory(int $days = 30): Collection
    {
        return $this->salesOrderItems()
            ->with('salesOrder')
            ->whereHas('salesOrder', function ($q) use ($days) {
                $q->where('created_at', '>=', now()->subDays($days))
                    ->whereIn('status', ['shipped', 'delivered', 'completed']);
            })
            ->select(
                'product_id',
                DB::raw('SUM(quantity) as total_quantity'),
                DB::raw('SUM(subtotal) as total_amount'),
                DB::raw('COUNT(*) as order_count')
            )
            ->groupBy('product_id')
            ->get();
    }

    /**
     * Get inventory by location summary.
     *
     * @return Collection
     */
    public function getInventoryByLocation(): Collection
    {
        return $this->inventory()
            ->with(['warehouse', 'location'])
            ->select(
                'warehouse_id',
                'location_id',
                DB::raw('SUM(quantity_on_hand) as total_quantity'),
                DB::raw('SUM(quantity_reserved) as total_reserved'),
                DB::raw('SUM(quantity_available) as total_available')
            )
            ->groupBy('warehouse_id', 'location_id')
            ->get();
    }

    /**
     * Get supplier price comparison.
     *
     * @return Collection
     */
    public function getSupplierPriceComparison(): Collection
    {
        return $this->productSuppliers()
            ->with('supplier')
            ->orderBy('unit_cost')
            ->get()
            ->map(function ($productSupplier) {
                return [
                    'supplier' => $productSupplier->supplier->name,
                    'supplier_sku' => $productSupplier->supplier_sku,
                    'unit_cost' => $productSupplier->unit_cost,
                    'min_order_qty' => $productSupplier->minimum_order_quantity,
                    'lead_time' => $productSupplier->lead_time_days,
                    'is_preferred' => $productSupplier->is_preferred
                ];
            });
    }

    /**
     * --------------------------------------------------------------------------
     * Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Generate a unique SKU from product name.
     *
     * @param string $name
     * @return string
     */
    protected static function generateSku(string $name): string
    {
        $prefix = strtoupper(substr(preg_replace('/[^a-zA-Z]/', '', $name), 0, 3));
        $timestamp = now()->format('ymd');
        $random = str_pad(random_int(1, 999), 3, '0', STR_PAD_LEFT);

        $sku = "{$prefix}-{$timestamp}-{$random}";

        // Ensure uniqueness
        while (self::where('sku', $sku)->exists()) {
            $random = str_pad(random_int(1, 999), 3, '0', STR_PAD_LEFT);
            $sku = "{$prefix}-{$timestamp}-{$random}";
        }

        return $sku;
    }

    /**
     * Find product by barcode or SKU.
     *
     * @param string $code
     * @return self|null
     */
    public static function findByCode(string $code): ?self
    {
        return self::where('barcode', $code)
            ->orWhere('sku', $code)
            ->first();
    }

    /**
     * Format product for select dropdown.
     *
     * @return array
     */
    public function toSelectOption(): array
    {
        return [
            'id' => $this->id,
            'text' => $this->display_name,
            'sku' => $this->sku,
            'current_stock' => $this->current_stock,
            'has_tracking' => $this->is_serial_tracked || $this->is_batch_tracked || $this->is_expirable
        ];
    }

    /**
     * Get product summary for reports.
     *
     * @return array
     */
    public function getSummary(): array
    {
        return [
            'id' => $this->id,
            'sku' => $this->sku,
            'name' => $this->name,
            'category' => $this->category?->name,
            'brand' => $this->brand,
            'current_stock' => $this->current_stock,
            'inventory_value' => $this->total_inventory_value,
            'status' => $this->status_label,
            'tracking_methods' => $this->tracking_methods_text,
            'preferred_supplier' => $this->preferred_supplier?->name,
            'created_at' => $this->created_at->format('Y-m-d')
        ];
    }
}
