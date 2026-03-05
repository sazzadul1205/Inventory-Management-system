<?php
// app/Models/Customer.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Customer extends Model
{
    use HasFactory;

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

    protected $casts = [
        'credit_limit' => 'decimal:2',
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Relationships
    public function salesOrders(): HasMany
    {
        return $this->hasMany(SalesOrder::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeByCountry($query, $country)
    {
        return $query->where('country', $country);
    }

    public function scopeByCity($query, $city)
    {
        return $query->where('city', $city);
    }

    public function scopeWithCreditLimit($query)
    {
        return $query->whereNotNull('credit_limit');
    }

    // Accessors
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

    public function getContactInfoAttribute(): string
    {
        $info = [];
        if ($this->contact_person) $info[] = $this->contact_person;
        if ($this->email) $info[] = $this->email;
        if ($this->phone) $info[] = $this->phone;
        if ($this->mobile) $info[] = $this->mobile;

        return implode(' | ', $info);
    }

    public function getTotalSalesAttribute(): float
    {
        return $this->salesOrders()
            ->whereIn('status', [SalesOrder::STATUS_SHIPPED, SalesOrder::STATUS_DELIVERED])
            ->sum('total_amount');
    }

    public function getOutstandingOrdersAttribute(): float
    {
        return $this->salesOrders()
            ->whereIn('status', [SalesOrder::STATUS_APPROVED, SalesOrder::STATUS_PROCESSING, SalesOrder::STATUS_PARTIALLY_SHIPPED])
            ->sum('total_amount');
    }

    // Methods
    public static function generateCustomerCode(): string
    {
        $prefix = 'CUST';
        $year = now()->format('Y');

        $lastCustomer = self::whereYear('created_at', $year)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastCustomer) {
            $lastNumber = intval(substr($lastCustomer->customer_code, -4));
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$year}-{$newNumber}";
    }

    public function checkCreditLimit(float $amount): bool
    {
        if (!$this->credit_limit) {
            return true;
        }

        $currentExposure = $this->outstanding_orders;
        return ($currentExposure + $amount) <= $this->credit_limit;
    }
}
