<?php
// app/Models/Supplier.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

/**
 * Supplier Model
 * 
 * Represents a vendor or supplier that provides products to the company.
 * Manages supplier information, contact details, performance metrics,
 * and relationships with products and purchase orders.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $supplier_code
 * @property string $company_name
 * @property string|null $contact_person
 * @property string|null $email
 * @property string|null $phone
 * @property string|null $mobile
 * @property string|null $address
 * @property string|null $city
 * @property string|null $state
 * @property string|null $country
 * @property string|null $postal_code
 * @property string|null $tax_id
 * @property string|null $payment_terms
 * @property int|null $lead_time_days
 * @property float|null $rating
 * @property string|null $notes
 * @property bool $is_active
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read Collection|Product[] $products
 * @property-read Collection|ProductSupplier[] $productSuppliers
 * @property-read Collection|PurchaseOrder[] $purchaseOrders
 * @property-read string $full_address
 * @property-read string $contact_info
 * @property-read float $average_product_cost
 * @property-read int $total_products_supplied
 * @property-read array $performance_metrics
 * @property-read string $rating_stars
 * @property-read string $status_label
 * @property-read string $display_name
 */
class Supplier extends Model
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
        'supplier_code',
        'company_name',
        'contact_person',
        'email',
        'phone',
        'mobile',
        'address',
        'city',
        'state',
        'country',
        'postal_code',
        'tax_id',
        'payment_terms',
        'lead_time_days',
        'rating',
        'notes',
        'is_active'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'rating' => 'decimal:2',
        'lead_time_days' => 'integer',
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'is_active' => true,
        'rating' => 0,
        'lead_time_days' => 0
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get all products supplied by this supplier (many-to-many).
     *
     * @return BelongsToMany
     */
    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'product_suppliers')
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
     * Get all product-supplier pivot records.
     *
     * @return HasMany
     */
    public function productSuppliers(): HasMany
    {
        return $this->hasMany(ProductSupplier::class);
    }

    /**
     * Get all purchase orders placed with this supplier.
     *
     * @return HasMany
     */
    public function purchaseOrders(): HasMany
    {
        return $this->hasMany(PurchaseOrder::class);
    }

    /**
     * Get preferred products from this supplier.
     *
     * @return BelongsToMany
     */
    public function preferredProducts(): BelongsToMany
    {
        return $this->products()
            ->wherePivot('is_preferred', true);
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to only include active suppliers.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope to filter by country.
     *
     * @param Builder $query
     * @param string $country
     * @return Builder
     */
    public function scopeByCountry(Builder $query, string $country): Builder
    {
        return $query->where('country', $country);
    }

    /**
     * Scope to filter by city.
     *
     * @param Builder $query
     * @param string $city
     * @return Builder
     */
    public function scopeByCity(Builder $query, string $city): Builder
    {
        return $query->where('city', $city);
    }

    /**
     * Scope to filter suppliers with minimum rating.
     *
     * @param Builder $query
     * @param float $minRating
     * @return Builder
     */
    public function scopeWithMinRating(Builder $query, float $minRating = 4.0): Builder
    {
        return $query->where('rating', '>=', $minRating);
    }

    /**
     * Scope to search suppliers by name or contact.
     *
     * @param Builder $query
     * @param string $search
     * @return Builder
     */
    public function scopeSearch(Builder $query, string $search): Builder
    {
        return $query->where(function ($q) use ($search) {
            $q->where('company_name', 'like', "%{$search}%")
                ->orWhere('supplier_code', 'like', "%{$search}%")
                ->orWhere('contact_person', 'like', "%{$search}%")
                ->orWhere('email', 'like', "%{$search}%");
        });
    }

    /**
     * Scope to filter by payment terms.
     *
     * @param Builder $query
     * @param string $terms
     * @return Builder
     */
    public function scopeByPaymentTerms(Builder $query, string $terms): Builder
    {
        return $query->where('payment_terms', $terms);
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
     * Scope to get top-rated suppliers.
     *
     * @param Builder $query
     * @param int $limit
     * @return Builder
     */
    public function scopeTopRated(Builder $query, int $limit = 10): Builder
    {
        return $query->orderBy('rating', 'desc')
            ->where('rating', '>', 0)
            ->limit($limit);
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get the full formatted address.
     *
     * @return string
     */
    public function getFullAddressAttribute(): string
    {
        $parts = array_filter([
            $this->address,
            $this->city,
            $this->state,
            $this->postal_code,
            $this->country
        ]);

        return implode(', ', $parts);
    }

    /**
     * Get formatted contact information.
     *
     * @return string
     */
    public function getContactInfoAttribute(): string
    {
        return collect([
            $this->contact_person,
            $this->email,
            $this->phone,
            $this->mobile
        ])->filter()->implode(' | ');
    }

    /**
     * Calculate average product cost from this supplier.
     *
     * @return float
     */
    public function getAverageProductCostAttribute(): float
    {
        return (float) $this->productSuppliers()->avg('unit_cost') ?? 0;
    }

    /**
     * Get total number of products supplied.
     *
     * @return int
     */
    public function getTotalProductsSuppliedAttribute(): int
    {
        return $this->products()->count();
    }

    /**
     * Get performance metrics.
     *
     * @return array<string, mixed>
     */
    public function getPerformanceMetricsAttribute(): array
    {
        $totalOrders = $this->purchaseOrders()->count();
        $completedOrders = $this->purchaseOrders()
            ->where('status', PurchaseOrder::STATUS_RECEIVED)
            ->count();

        $onTimeDeliveries = $this->purchaseOrders()
            ->where('status', PurchaseOrder::STATUS_RECEIVED)
            ->whereNotNull('actual_delivery_date')
            ->whereNotNull('expected_delivery_date')
            ->whereColumn('actual_delivery_date', '<=', 'expected_delivery_date')
            ->count();

        return [
            'total_orders' => $totalOrders,
            'completed_orders' => $completedOrders,
            'pending_orders' => $this->purchaseOrders()->whereIn(
                'status',
                [PurchaseOrder::STATUS_PENDING, PurchaseOrder::STATUS_APPROVED]
            )->count(),
            'completion_rate' => $totalOrders > 0
                ? round(($completedOrders / $totalOrders) * 100, 2)
                : 0,
            'on_time_delivery_rate' => $completedOrders > 0
                ? round(($onTimeDeliveries / $completedOrders) * 100, 2)
                : 0,
            'average_lead_time' => $this->lead_time_days,
            'rating' => $this->rating
        ];
    }

    /**
     * Get rating as stars for display.
     *
     * @return string
     */
    public function getRatingStarsAttribute(): string
    {
        if (!$this->rating) {
            return 'No ratings yet';
        }

        $fullStars = floor($this->rating);
        $halfStar = ($this->rating - $fullStars) >= 0.5;
        $emptyStars = 5 - $fullStars - ($halfStar ? 1 : 0);

        $stars = str_repeat('★', $fullStars);
        if ($halfStar) {
            $stars .= '½';
        }
        $stars .= str_repeat('☆', $emptyStars);

        return $stars . " ({$this->rating})";
    }

    /**
     * Get status label.
     *
     * @return string
     */
    public function getStatusLabelAttribute(): string
    {
        return $this->is_active ? 'Active' : 'Inactive';
    }

    /**
     * Get display name with code.
     *
     * @return string
     */
    public function getDisplayNameAttribute(): string
    {
        return "{$this->company_name} ({$this->supplier_code})";
    }

    /**
     * Get supplier summary.
     *
     * @return array
     */
    public function getSummaryAttribute(): array
    {
        return [
            'id' => $this->id,
            'code' => $this->supplier_code,
            'name' => $this->company_name,
            'contact' => $this->contact_person,
            'email' => $this->email,
            'phone' => $this->phone,
            'location' => $this->city . ', ' . $this->country,
            'rating' => $this->rating,
            'products_supplied' => $this->total_products_supplied,
            'status' => $this->status_label,
            'lead_time' => $this->lead_time_days
        ];
    }

    /**
     * Get lead time as text.
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
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Generate a unique supplier code.
     *
     * @return string
     */
    public static function generateSupplierCode(): string
    {
        $prefix = 'SUP';
        $year = now()->format('Y');

        $lastSupplier = self::whereYear('created_at', $year)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastSupplier && preg_match('/-(\d{4})$/', $lastSupplier->supplier_code, $matches)) {
            $lastNumber = (int) $matches[1];
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$year}-{$newNumber}";
    }

    /**
     * Update supplier rating based on performance.
     *
     * @return self
     */
    public function updateRating(): self
    {
        $completedOrders = $this->purchaseOrders()
            ->where('status', PurchaseOrder::STATUS_RECEIVED)
            ->get();

        if ($completedOrders->isEmpty()) {
            $this->rating = null;
            $this->save();
            return $this;
        }

        $totalScore = 0;
        $metrics = 0;

        // On-time delivery score (40% weight)
        $onTimeCount = $completedOrders->filter(function ($order) {
            return $order->actual_delivery_date &&
                $order->expected_delivery_date &&
                $order->actual_delivery_date <= $order->expected_delivery_date;
        })->count();

        if ($completedOrders->count() > 0) {
            $onTimeScore = ($onTimeCount / $completedOrders->count()) * 40;
            $totalScore += $onTimeScore;
            $metrics++;
        }

        // Order completeness score (30% weight)
        $completeOrders = $completedOrders->filter(function ($order) {
            return $order->is_fully_received;
        })->count();

        if ($completedOrders->count() > 0) {
            $completeScore = ($completeOrders / $completedOrders->count()) * 30;
            $totalScore += $completeScore;
            $metrics++;
        }

        // Quality score based on returns (30% weight) - placeholder logic
        // This would need actual returns data
        $totalScore += 25; // Placeholder
        $metrics++;

        $this->rating = round($totalScore / $metrics, 2);
        $this->save();

        return $this;
    }

    /**
     * Get preferred products for this supplier.
     *
     * @return Collection
     */
    public function getPreferredProducts(): Collection
    {
        return $this->products()
            ->wherePivot('is_preferred', true)
            ->get();
    }

    /**
     * Check if supplier supplies a specific product.
     *
     * @param int $productId
     * @return bool
     */
    public function suppliesProduct(int $productId): bool
    {
        return $this->products()->where('product_id', $productId)->exists();
    }

    /**
     * Get product cost for a specific product.
     *
     * @param int $productId
     * @return float|null
     */
    public function getProductCost(int $productId): ?float
    {
        $productSupplier = $this->productSuppliers()
            ->where('product_id', $productId)
            ->first();

        return $productSupplier?->unit_cost;
    }

    /**
     * Get supplier performance over time.
     *
     * @param int $months
     * @return Collection
     */
    public function getPerformanceHistory(int $months = 12): Collection
    {
        return $this->purchaseOrders()
            ->where('status', PurchaseOrder::STATUS_RECEIVED)
            ->where('created_at', '>=', now()->subMonths($months))
            ->selectRaw('
                DATE_FORMAT(created_at, "%Y-%m") as month,
                COUNT(*) as order_count,
                AVG(total_amount) as avg_order_value,
                SUM(total_amount) as total_spent,
                AVG(CASE 
                    WHEN actual_delivery_date <= expected_delivery_date 
                    THEN 1 ELSE 0 
                END) as on_time_rate
            ')
            ->groupBy('month')
            ->orderBy('month')
            ->get();
    }

    /**
     * Activate the supplier.
     *
     * @return bool
     */
    public function activate(): bool
    {
        $this->is_active = true;
        return $this->save();
    }

    /**
     * Deactivate the supplier.
     *
     * @return bool
     * @throws \Exception
     */
    public function deactivate(): bool
    {
        // Check for pending purchase orders
        if ($this->purchaseOrders()->whereIn('status', [
            PurchaseOrder::STATUS_PENDING,
            PurchaseOrder::STATUS_APPROVED,
            PurchaseOrder::STATUS_SHIPPED
        ])->exists()) {
            throw new \Exception('Cannot deactivate supplier with pending purchase orders.');
        }

        $this->is_active = false;
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
        // Auto-generate supplier code
        static::creating(function (self $supplier) {
            if (empty($supplier->supplier_code)) {
                $supplier->supplier_code = self::generateSupplierCode();
            }
        });

        // Validate rating range
        static::saving(function (self $supplier) {
            if ($supplier->rating !== null && ($supplier->rating < 0 || $supplier->rating > 5)) {
                return false;
            }
            return true;
        });

        // Check for dependencies before deletion
        static::deleting(function (self $supplier) {
            if ($supplier->purchaseOrders()->exists()) {
                throw new \Exception('Cannot delete supplier with existing purchase orders.');
            }

            if ($supplier->products()->exists()) {
                throw new \Exception('Cannot delete supplier with associated products.');
            }
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get supplier statistics.
     *
     * @return array<string, mixed>
     */
    public static function getStatistics(): array
    {
        $totalSuppliers = self::count();
        $activeSuppliers = self::active()->count();

        $avgRating = self::whereNotNull('rating')
            ->where('rating', '>', 0)
            ->avg('rating');

        $byCountry = self::select('country', DB::raw('COUNT(*) as count'))
            ->whereNotNull('country')
            ->groupBy('country')
            ->orderBy('count', 'desc')
            ->get()
            ->pluck('count', 'country')
            ->toArray();

        return [
            'total_suppliers' => $totalSuppliers,
            'active_suppliers' => $activeSuppliers,
            'inactive_suppliers' => $totalSuppliers - $activeSuppliers,
            'average_rating' => round($avgRating ?? 0, 2),
            'top_countries' => $byCountry,
            'activity_rate' => $totalSuppliers > 0
                ? round(($activeSuppliers / $totalSuppliers) * 100, 2)
                : 0
        ];
    }

    /**
     * Get top performing suppliers based on rating and order count.
     *
     * @param int $limit
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public static function getTopPerformers(int $limit = 10): \Illuminate\Database\Eloquent\Collection
    {
        $suppliers = self::active()
            ->withCount('purchaseOrders')
            ->having('purchase_orders_count', '>', 0)
            ->whereNotNull('rating')
            ->orderBy('rating', 'desc')
            ->orderBy('purchase_orders_count', 'desc')
            ->limit($limit)
            ->get();

        // Add the performance data as a custom attribute
        foreach ($suppliers as $supplier) {
            $supplier->performance_data = [
                'name' => $supplier->company_name,
                'rating' => $supplier->rating,
                'order_count' => $supplier->purchase_orders_count,
                'avg_lead_time' => $supplier->lead_time_days
            ];
        }

        return $suppliers; // This is still an Eloquent Collection
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
            'text' => $this->display_name,
            'code' => $this->supplier_code,
            'rating' => $this->rating,
            'lead_time' => $this->lead_time_days,
            'is_active' => $this->is_active
        ];
    }

    /**
     * Get supplier card data for dashboard.
     *
     * @return array
     */
    public function toCardData(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->company_name,
            'code' => $this->supplier_code,
            'contact' => $this->contact_person,
            'email' => $this->email,
            'phone' => $this->phone,
            'rating' => $this->rating_stars,
            'products_count' => $this->total_products_supplied,
            'pending_orders' => $this->purchaseOrders()
                ->whereIn('status', [
                    PurchaseOrder::STATUS_PENDING,
                    PurchaseOrder::STATUS_APPROVED
                ])->count(),
            'status' => $this->status_label
        ];
    }

    /**
     * Check if supplier has preferred status for any product.
     *
     * @return bool
     */
    public function hasPreferredProducts(): bool
    {
        return $this->productSuppliers()
            ->where('is_preferred', true)
            ->exists();
    }
}
