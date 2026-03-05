<?php
// app/Models/ProductSupplier.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

/**
 * Product Supplier Pivot Model
 * 
 * Represents the relationship between products and suppliers with additional
 * supplier-specific information such as pricing, SKU mapping, lead times,
 * and preferred status. Enables multi-sourcing and supplier comparison
 * for purchasing decisions.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property int $product_id
 * @property int $supplier_id
 * @property string|null $supplier_sku
 * @property float $unit_cost
 * @property int $minimum_order_quantity
 * @property bool $is_preferred
 * @property int $lead_time_days
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read Product $product
 * @property-read Supplier $supplier
 * @property-read float $total_cost_for_minimum_order
 */
class ProductSupplier extends Model
{
    use HasFactory;

    /**
     * --------------------------------------------------------------------------
     * Configuration
     * --------------------------------------------------------------------------
     */

    /** @var string Database table name */
    protected $table = 'product_suppliers';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'product_id',
        'supplier_id',
        'supplier_sku',
        'unit_cost',
        'minimum_order_quantity',
        'is_preferred',
        'lead_time_days'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'unit_cost' => 'decimal:2',
        'minimum_order_quantity' => 'integer',
        'is_preferred' => 'boolean',
        'lead_time_days' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'minimum_order_quantity' => 1,
        'is_preferred' => false,
        'lead_time_days' => 0
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the product associated with this supplier relationship.
     *
     * @return BelongsTo
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Get the supplier associated with this product relationship.
     *
     * @return BelongsTo
     */
    public function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class);
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to only include preferred supplier relationships.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopePreferred(Builder $query): Builder
    {
        return $query->where('is_preferred', true);
    }

    /**
     * Scope to filter by supplier.
     *
     * @param Builder $query
     * @param int $supplierId
     * @return Builder
     */
    public function scopeBySupplier(Builder $query, int $supplierId): Builder
    {
        return $query->where('supplier_id', $supplierId);
    }

    /**
     * Scope to filter by product.
     *
     * @param Builder $query
     * @param int $productId
     * @return Builder
     */
    public function scopeByProduct(Builder $query, int $productId): Builder
    {
        return $query->where('product_id', $productId);
    }

    /**
     * Scope to filter by maximum unit cost.
     *
     * @param Builder $query
     * @param float $maxCost
     * @return Builder
     */
    public function scopeMaxUnitCost(Builder $query, float $maxCost): Builder
    {
        return $query->where('unit_cost', '<=', $maxCost);
    }

    /**
     * Scope to filter by maximum lead time.
     *
     * @param Builder $query
     * @param int $maxDays
     * @return Builder
     */
    public function scopeMaxLeadTime(Builder $query, int $maxDays): Builder
    {
        return $query->where('lead_time_days', '<=', $maxDays);
    }

    /**
     * Scope to order by unit cost (cheapest first).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeCheapestFirst(Builder $query): Builder
    {
        return $query->orderBy('unit_cost', 'asc');
    }

    /**
     * Scope to order by lead time (fastest first).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeFastestFirst(Builder $query): Builder
    {
        return $query->orderBy('lead_time_days', 'asc');
    }

    /**
     * Scope to get relationships with both product and supplier loaded.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithDetails(Builder $query): Builder
    {
        return $query->with(['product', 'supplier']);
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Calculate the total cost for minimum order quantity.
     *
     * @return float
     */
    public function getTotalCostForMinimumOrderAttribute(): float
    {
        return $this->unit_cost * $this->minimum_order_quantity;
    }

    /**
     * Get the display name (supplier name + product name).
     *
     * @return string
     */
    public function getDisplayNameAttribute(): string
    {
        return $this->supplier->name . ' - ' . $this->product->name;
    }

    /**
     * Get the formatted unit cost with currency.
     *
     * @return string
     */
    public function getFormattedUnitCostAttribute(): string
    {
        return '$' . number_format($this->unit_cost, 2);
    }

    /**
     * Get the formatted total for minimum order.
     *
     * @return string
     */
    public function getFormattedMinimumOrderTotalAttribute(): string
    {
        return '$' . number_format($this->total_cost_for_minimum_order, 2);
    }

    /**
     * Get the lead time as text.
     *
     * @return string
     */
    public function getLeadTimeTextAttribute(): string
    {
        if ($this->lead_time_days <= 0) {
            return 'Same day';
        }

        return $this->lead_time_days . ' day' . ($this->lead_time_days > 1 ? 's' : '');
    }

    /**
     * Get the supplier SKU or fallback to product SKU.
     *
     * @return string
     */
    public function getSupplierSkuDisplayAttribute(): string
    {
        return $this->supplier_sku ?? $this->product->sku;
    }

    /**
     * Get price comparison with average.
     *
     * @return array|null
     */
    public function getPriceComparisonAttribute(): ?array
    {
        $averageCost = self::byProduct($this->product_id)
            ->where('id', '!=', $this->id)
            ->avg('unit_cost');

        if (!$averageCost) {
            return null;
        }

        $difference = $this->unit_cost - $averageCost;
        $percentage = ($difference / $averageCost) * 100;

        return [
            'average_cost' => $averageCost,
            'difference' => $difference,
            'percentage' => round($percentage, 2),
            'is_below_average' => $difference < 0
        ];
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Set this supplier as the preferred supplier for the product.
     *
     * @return bool
     */
    public function setAsPreferred(): bool
    {
        return DB::transaction(function () {
            // Remove preferred status from other suppliers for this product
            self::byProduct($this->product_id)
                ->where('id', '!=', $this->id)
                ->update(['is_preferred' => false]);

            // Set this as preferred
            $this->is_preferred = true;

            return $this->save();
        });
    }

    /**
     * Calculate estimated delivery date based on lead time.
     *
     * @return \Carbon\Carbon
     */
    public function getEstimatedDeliveryDate(): \Carbon\Carbon
    {
        return now()->addDays($this->lead_time_days);
    }

    /**
     * Check if this supplier can fulfill an order quantity.
     *
     * @param int $quantity
     * @return bool
     */
    public function canFulfillQuantity(int $quantity): bool
    {
        // This could be enhanced with supplier-specific logic
        // For now, just check minimum order quantity
        return $quantity >= $this->minimum_order_quantity;
    }

    /**
     * Get the recommended order quantity.
     *
     * @param int $desiredQuantity
     * @return int
     */
    public function getRecommendedOrderQuantity(int $desiredQuantity): int
    {
        // Round up to minimum order quantity if needed
        if ($desiredQuantity < $this->minimum_order_quantity) {
            return $this->minimum_order_quantity;
        }

        // Could add MOQ multiples logic here
        return $desiredQuantity;
    }

    /**
     * Calculate total cost for a given quantity.
     *
     * @param int $quantity
     * @return float
     */
    public function calculateTotalCost(int $quantity): float
    {
        return $this->unit_cost * $quantity;
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
        // Ensure only one preferred supplier per product
        static::saving(function (self $productSupplier) {
            if ($productSupplier->is_preferred) {
                self::byProduct($productSupplier->product_id)
                    ->where('id', '!=', $productSupplier->id)
                    ->update(['is_preferred' => false]);
            }
        });

        // Validate minimum order quantity
        static::saving(function (self $productSupplier) {
            if ($productSupplier->minimum_order_quantity <= 0) {
                $productSupplier->minimum_order_quantity = 1;
            }

            if ($productSupplier->lead_time_days < 0) {
                $productSupplier->lead_time_days = 0;
            }

            return true;
        });

        // Clear cache when supplier relationship changes
        static::saved(function (self $productSupplier) {
            // Optional: Clear product supplier cache
            cache()->forget("product_{$productSupplier->product_id}_suppliers");
        });

        static::deleted(function (self $productSupplier) {
            cache()->forget("product_{$productSupplier->product_id}_suppliers");
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get price statistics for a product.
     *
     * @param int $productId
     * @return array
     */
    public static function getPriceStatistics(int $productId): array
    {
        $stats = self::byProduct($productId)
            ->selectRaw('
                MIN(unit_cost) as min_price,
                MAX(unit_cost) as max_price,
                AVG(unit_cost) as avg_price,
                COUNT(*) as supplier_count
            ')
            ->first();

        $preferred = self::byProduct($productId)
            ->preferred()
            ->first();

        return [
            'min_price' => $stats->min_price ?? 0,
            'max_price' => $stats->max_price ?? 0,
            'avg_price' => $stats->avg_price ?? 0,
            'supplier_count' => $stats->supplier_count ?? 0,
            'preferred_supplier' => $preferred ? [
                'id' => $preferred->supplier_id,
                'name' => $preferred->supplier->name,
                'unit_cost' => $preferred->unit_cost,
                'lead_time' => $preferred->lead_time_days
            ] : null
        ];
    }

    /**
     * Get suppliers sorted by best value.
     *
     * @param int $productId
     * @param string $sortBy (price, lead_time, or combined)
     * @return Collection
     */
    public static function getBestValueSuppliers(int $productId, string $sortBy = 'combined'): Collection
    {
        $query = self::byProduct($productId)
            ->with('supplier')
            ->where('unit_cost', '>', 0);

        return match ($sortBy) {
            'price' => $query->cheapestFirst()->get(),
            'lead_time' => $query->fastestFirst()->get(),
            'combined' => $query->get()->sortBy(function ($item) {
                // Weighted score (lower is better)
                return ($item->unit_cost * 0.7) + ($item->lead_time_days * 0.3);
            }),
            default => $query->get()
        };
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
            'text' => $this->supplier->name . ' ($' . $this->unit_cost . ')',
            'supplier_id' => $this->supplier_id,
            'unit_cost' => $this->unit_cost,
            'lead_time' => $this->lead_time_days,
            'is_preferred' => $this->is_preferred
        ];
    }

    /**
     * Get supplier comparison data.
     *
     * @return array
     */
    public function getComparisonData(): array
    {
        return [
            'supplier_name' => $this->supplier->name,
            'supplier_sku' => $this->supplier_sku,
            'unit_cost' => $this->unit_cost,
            'formatted_cost' => $this->formatted_unit_cost,
            'min_order_qty' => $this->minimum_order_quantity,
            'min_order_total' => $this->formatted_minimum_order_total,
            'lead_time' => $this->lead_time_text,
            'is_preferred' => $this->is_preferred,
            'price_comparison' => $this->price_comparison
        ];
    }

    /**
     * Get the product-supplier summary.
     *
     * @return array
     */
    public function getSummary(): array
    {
        return [
            'id' => $this->id,
            'product' => [
                'id' => $this->product_id,
                'name' => $this->product->name,
                'sku' => $this->product->sku
            ],
            'supplier' => [
                'id' => $this->supplier_id,
                'name' => $this->supplier->name,
                'code' => $this->supplier->supplier_code
            ],
            'supplier_sku' => $this->supplier_sku,
            'unit_cost' => $this->unit_cost,
            'min_order_qty' => $this->minimum_order_quantity,
            'lead_time_days' => $this->lead_time_days,
            'is_preferred' => $this->is_preferred
        ];
    }
}
