<?php
// app/Models/Customer.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Customer Model
 * 
 * Represents a customer/client in the system with comprehensive contact information,
 * credit management capabilities, and sales order relationships. Handles customer-specific
 * business logic including credit limit checking and customer code generation.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $customer_code
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
 * @property float|null $credit_limit
 * @property string|null $notes
 * @property bool $is_active
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read Collection|SalesOrder[] $salesOrders
 * @property-read string $full_address
 * @property-read string $contact_info
 * @property-read float $total_sales
 * @property-read float $outstanding_orders
 */
class Customer extends Model
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
        'customer_code',
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
        'credit_limit',
        'notes',
        'is_active'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'credit_limit' => 'decimal:2',
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
        'country' => 'USA'
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get all sales orders belonging to this customer.
     * Orders are typically sorted by date descending.
     *
     * @return HasMany
     */
    public function salesOrders(): HasMany
    {
        return $this->hasMany(SalesOrder::class)->latest();
    }

    /**
     * Get approved and active sales orders.
     *
     * @return HasMany
     */
    public function activeOrders(): HasMany
    {
        return $this->salesOrders()
            ->whereIn('status', [
                SalesOrder::STATUS_APPROVED,
                SalesOrder::STATUS_PROCESSING,
                SalesOrder::STATUS_PARTIALLY_SHIPPED
            ]);
    }

    /**
     * Get completed sales orders.
     *
     * @return HasMany
     */
    public function completedOrders(): HasMany
    {
        return $this->salesOrders()
            ->whereIn('status', [
                SalesOrder::STATUS_SHIPPED,
                SalesOrder::STATUS_DELIVERED
            ]);
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope query to only include active customers.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope query to filter by country.
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
     * Scope query to filter by city.
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
     * Scope query to only include customers with credit limits.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithCreditLimit(Builder $query): Builder
    {
        return $query->whereNotNull('credit_limit');
    }

    /**
     * Scope query to search by company name or contact information.
     *
     * @param Builder $query
     * @param string $search
     * @return Builder
     */
    public function scopeSearch(Builder $query, string $search): Builder
    {
        return $query->where(function (Builder $q) use ($search) {
            $q->where('company_name', 'like', "%{$search}%")
                ->orWhere('contact_person', 'like', "%{$search}%")
                ->orWhere('email', 'like', "%{$search}%")
                ->orWhere('customer_code', 'like', "%{$search}%");
        });
    }

    /**
     * Scope query to filter by payment terms.
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
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get the full formatted address.
     * Combines address components into a single string.
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
     * Combines contact details with separators for display.
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
     * Get total sales amount from completed orders.
     *
     * @return float
     */
    public function getTotalSalesAttribute(): float
    {
        return (float) $this->completedOrders()->sum('total_amount');
    }

    /**
     * Get total value of outstanding (unfulfilled) orders.
     *
     * @return float
     */
    public function getOutstandingOrdersAttribute(): float
    {
        return (float) $this->activeOrders()->sum('total_amount');
    }

    /**
     * Get credit utilization percentage.
     *
     * @return float|null
     */
    public function getCreditUtilizationAttribute(): ?float
    {
        if (!$this->credit_limit || $this->credit_limit <= 0) {
            return null;
        }

        return round(($this->outstanding_orders / $this->credit_limit) * 100, 2);
    }

    /**
     * Get display name (company name with code).
     *
     * @return string
     */
    public function getDisplayNameAttribute(): string
    {
        return "{$this->company_name} ({$this->customer_code})";
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Generate a unique customer code.
     * Format: CUST-YYYY-XXXX where XXXX is a sequential number.
     *
     * @return string
     */
    public static function generateCustomerCode(): string
    {
        $prefix = 'CUST';
        $year = now()->format('Y');

        $lastCustomer = self::whereYear('created_at', $year)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastCustomer && preg_match('/-(\d{4})$/', $lastCustomer->customer_code, $matches)) {
            $lastNumber = (int) $matches[1];
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$year}-{$newNumber}";
    }

    /**
     * Check if an order amount would exceed the customer's credit limit.
     *
     * @param float $amount The amount to check against credit limit
     * @return bool True if within limit, false if would exceed
     */
    public function checkCreditLimit(float $amount): bool
    {
        // No credit limit set - unlimited
        if (is_null($this->credit_limit) || $this->credit_limit <= 0) {
            return true;
        }

        $currentExposure = $this->outstanding_orders;
        $newTotal = $currentExposure + $amount;

        return $newTotal <= $this->credit_limit;
    }

    /**
     * Get available credit amount.
     *
     * @return float|null Returns null if no credit limit, otherwise available amount
     */
    public function getAvailableCredit(): ?float
    {
        if (is_null($this->credit_limit)) {
            return null;
        }

        $available = $this->credit_limit - $this->outstanding_orders;
        return max(0, $available);
    }

    /**
     * Check if customer has any outstanding orders.
     *
     * @return bool
     */
    public function hasOutstandingOrders(): bool
    {
        return $this->activeOrders()->exists();
    }

    /**
     * Get the customer's most recent order.
     *
     * @return SalesOrder|null
     */
    public function getLastOrder(): ?SalesOrder
    {
        return $this->salesOrders()->first();
    }

    /**
     * Activate the customer.
     *
     * @return bool
     */
    public function activate(): bool
    {
        $this->is_active = true;
        return $this->save();
    }

    /**
     * Deactivate the customer.
     *
     * @return bool
     */
    public function deactivate(): bool
    {
        // Check if customer has active orders before deactivating
        if ($this->hasOutstandingOrders()) {
            throw new \Exception('Cannot deactivate customer with outstanding orders.');
        }

        $this->is_active = false;
        return $this->save();
    }

    /**
     * Update credit limit with validation.
     *
     * @param float|null $newLimit
     * @return bool
     */
    public function updateCreditLimit(?float $newLimit): bool
    {
        if ($newLimit !== null && $newLimit < 0) {
            throw new \InvalidArgumentException('Credit limit cannot be negative.');
        }

        $oldLimit = $this->credit_limit;
        $this->credit_limit = $newLimit;

        // Log credit limit change if you have an audit system
        // AuditLog::logCreditLimitChange($this, $oldLimit, $newLimit);

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
        // Auto-generate customer code before creating
        static::creating(function (self $customer) {
            if (empty($customer->customer_code)) {
                $customer->customer_code = self::generateCustomerCode();
            }
        });

        // Validate credit limit before saving
        static::saving(function (self $customer) {
            if ($customer->credit_limit !== null && $customer->credit_limit < 0) {
                return false;
            }
        });

        // Check for active orders before deletion
        static::deleting(function (self $customer) {
            if ($customer->salesOrders()->exists()) {
                throw new \Exception('Cannot delete customer with existing sales orders.');
            }
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Additional Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get customer statistics.
     *
     * @return array<string, mixed>
     */
    public function getStatistics(): array
    {
        return [
            'total_orders' => $this->salesOrders()->count(),
            'completed_orders' => $this->completedOrders()->count(),
            'active_orders' => $this->activeOrders()->count(),
            'total_sales' => $this->total_sales,
            'average_order_value' => $this->salesOrders()->avg('total_amount') ?? 0,
            'outstanding_amount' => $this->outstanding_orders,
            'credit_limit' => $this->credit_limit,
            'credit_utilization' => $this->credit_utilization,
            'last_order_date' => $this->getLastOrder()?->created_at,
            'customer_since' => $this->created_at
        ];
    }

    /**
     * Format payment terms for display.
     *
     * @return string
     */
    public function getFormattedPaymentTerms(): string
    {
        $terms = $this->payment_terms;

        return match ($terms) {
            'net_30' => 'Net 30 Days',
            'net_60' => 'Net 60 Days',
            'cod' => 'Cash on Delivery',
            'prepaid' => 'Prepaid',
            default => $terms ?? 'Not Set'
        };
    }
}
