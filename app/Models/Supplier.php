<?php
// app/Models/Supplier.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Supplier extends Model
{
    use HasFactory;

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

    protected $casts = [
        'rating' => 'decimal:2',
        'lead_time_days' => 'integer',
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Relationships
    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_suppliers')
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

    public function scopeByCountry($query, $country)
    {
        return $query->where('country', $country);
    }

    public function scopeByCity($query, $city)
    {
        return $query->where('city', $city);
    }

    public function scopeWithHighRating($query, $minRating = 4)
    {
        return $query->where('rating', '>=', $minRating);
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
}
