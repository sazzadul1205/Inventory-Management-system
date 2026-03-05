<?php
// app/Models/User.php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'username',
        'email',
        'password_hash',
        'first_name',
        'last_name',
        'role_id',
        'department_id',
        'is_active',
        'last_login',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password_hash',
        'two_factor_secret',
        'two_factor_recovery_codes',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'last_login' => 'datetime',
            'is_active' => 'boolean',
            'two_factor_confirmed_at' => 'datetime',
        ];
    }

    /**
     * Get the password for authentication.
     * This allows Laravel's auth to work with password_hash column
     */
    public function getAuthPassword()
    {
        return $this->password_hash;
    }

    /**
     * Get the role that owns the user.
     */
    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    /**
     * Get the department that the user belongs to.
     */
    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    /**
     * Get the department managed by this user.
     */
    public function managedDepartment(): HasOne
    {
        return $this->hasOne(Department::class, 'manager_id');
    }

    /**
     * Check if user has a specific role.
     */
    public function hasRole(string $roleName): bool
    {
        return $this->role && $this->role->name === $roleName;
    }

    /**
     * Check if user has any of the given roles.
     */
    public function hasAnyRole(array $roleNames): bool
    {
        return $this->role && in_array($this->role->name, $roleNames);
    }

    /**
     * Check if user has permission.
     */
    public function hasPermission(string $permission): bool
    {
        if (!$this->role || !$this->role->permissions) {
            return false;
        }

        $permissions = $this->role->permissions;

        // Check for wildcard or specific permission
        return isset($permissions['all']) && $permissions['all'] === true
            || isset($permissions[$permission]) && $permissions[$permission] === true;
    }

    /**
     * Get user's full name.
     */
    public function getFullNameAttribute(): string
    {
        return trim($this->first_name . ' ' . $this->last_name);
    }

    /**
     * Scope a query to only include active users.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to only include users by role.
     */
    public function scopeByRole($query, string $roleName)
    {
        return $query->whereHas('role', function ($q) use ($roleName) {
            $q->where('name', $roleName);
        });
    }

    /**
     * Scope a query to only include users by department.
     */
    public function scopeByDepartment($query, int $departmentId)
    {
        return $query->where('department_id', $departmentId);
    }

    /**
     * Get the name attribute for backward compatibility.
     * This helps if any existing code uses $user->name
     */
    public function getNameAttribute(): string
    {
        return $this->getFullNameAttribute();
    }

    /**
     * Set the name attribute for backward compatibility.
     * This helps if any existing code tries to set $user->name
     */
    public function setNameAttribute($value)
    {
        // Split name into first and last name if possible
        $nameParts = explode(' ', $value, 2);
        $this->first_name = $nameParts[0];
        $this->last_name = $nameParts[1] ?? '';
    }

    /**
     * Purchase orders created by this user
     */
    public function createdPurchaseOrders(): HasMany
    {
        return $this->hasMany(PurchaseOrder::class, 'created_by');
    }

    /**
     * Purchase orders approved by this user
     */
    public function approvedPurchaseOrders(): HasMany
    {
        return $this->hasMany(PurchaseOrder::class, 'approved_by');
    }

    /**
     * Sales orders created by this user
     */
    public function createdSalesOrders(): HasMany
    {
        return $this->hasMany(SalesOrder::class, 'created_by');
    }

    /**
     * Sales orders approved by this user
     */
    public function approvedSalesOrders(): HasMany
    {
        return $this->hasMany(SalesOrder::class, 'approved_by');
    }

    /**
     * Stock transfers requested by this user
     */
    public function requestedStockTransfers(): HasMany
    {
        return $this->hasMany(StockTransfer::class, 'requested_by');
    }

    /**
     * Stock transfers approved by this user
     */
    public function approvedStockTransfers(): HasMany
    {
        return $this->hasMany(StockTransfer::class, 'approved_by');
    }

    /**
     * Stock counts created by this user
     */
    public function createdStockCounts(): HasMany
    {
        return $this->hasMany(StockCount::class, 'created_by');
    }

    /**
     * Stock counts verified by this user
     */
    public function verifiedStockCounts(): HasMany
    {
        return $this->hasMany(StockCount::class, 'verified_by');
    }

    /**
     * Stock count items counted by this user
     */
    public function countedStockItems(): HasMany
    {
        return $this->hasMany(StockCountItem::class, 'counted_by');
    }

    /**
     * Stock count items approved by this user
     */
    public function approvedStockItems(): HasMany
    {
        return $this->hasMany(StockCountItem::class, 'approved_by');
    }

    /**
     * Shipments created by this user
     */
    public function createdShipments(): HasMany
    {
        return $this->hasMany(Shipment::class, 'shipped_by');
    }

    /**
     * Purchase receipts created by this user
     */
    public function createdPurchaseReceipts(): HasMany
    {
        return $this->hasMany(PurchaseReceipt::class, 'received_by');
    }

    /**
     * Audit logs for this user
     */
    public function auditLogs(): HasMany
    {
        return $this->hasMany(AuditLog::class, 'user_id');
    }

    /**
     * Inventory movements created by this user
     */
    public function inventoryMovements(): HasMany
    {
        return $this->hasMany(InventoryMovement::class, 'created_by');
    }
}
