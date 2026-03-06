<?php
// app/Models/User.php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * User Model
 * 
 * Represents a system user with authentication, authorization, and profile information.
 * Implements role-based access control (RBAC) through relationships with Role model.
 * Tracks user activity across various business domains including purchases, sales,
 * inventory, and shipments. Supports two-factor authentication and audit logging.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $username
 * @property string $email
 * @property string $password_hash
 * @property string|null $first_name
 * @property string|null $last_name
 * @property int|null $role_id
 * @property int|null $department_id
 * @property bool $is_active
 * @property \Carbon\Carbon|null $last_login
 * @property \Carbon\Carbon|null $email_verified_at
 * @property string|null $two_factor_secret
 * @property string|null $two_factor_recovery_codes
 * @property \Carbon\Carbon|null $two_factor_confirmed_at
 * @property string|null $remember_token
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read Role|null $role
 * @property-read Department|null $department
 * @property-read Department|null $managedDepartment
 * @property-read string $full_name
 * @property-read string $name
 * @property-read string $initials
 * @property-read bool $is_admin
 * @property-read bool $is_manager
 * @property-read array $permissions_list
 * @property-read Collection|PurchaseOrder[] $createdPurchaseOrders
 * @property-read Collection|PurchaseOrder[] $approvedPurchaseOrders
 * @property-read Collection|SalesOrder[] $createdSalesOrders
 * @property-read Collection|SalesOrder[] $approvedSalesOrders
 * @property-read Collection|StockTransfer[] $requestedStockTransfers
 * @property-read Collection|StockTransfer[] $approvedStockTransfers
 * @property-read Collection|StockCount[] $createdStockCounts
 * @property-read Collection|StockCount[] $verifiedStockCounts
 * @property-read Collection|StockCountItem[] $countedStockItems
 * @property-read Collection|StockCountItem[] $approvedStockItems
 * @property-read Collection|Shipment[] $createdShipments
 * @property-read Collection|PurchaseReceipt[] $createdPurchaseReceipts
 * @property-read Collection|AuditLog[] $auditLogs
 * @property-read Collection|InventoryMovement[] $inventoryMovements
 */
class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, TwoFactorAuthenticatable;

    /**
     * --------------------------------------------------------------------------
     * Configuration
     * --------------------------------------------------------------------------
     */

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
     * The attributes that should be cast.
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
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'is_active' => true,
    ];

    /**
     * --------------------------------------------------------------------------
     * Authentication
     * --------------------------------------------------------------------------
     */

    /**
     * Get the password for authentication.
     * Maps password_hash column to Laravel's auth system.
     *
     * @return string
     */
    public function getAuthPassword(): string
    {
        return $this->password_hash;
    }

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the role assigned to this user.
     *
     * @return BelongsTo
     */
    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    /**
     * Get the department this user belongs to.
     *
     * @return BelongsTo
     */
    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    /**
     * Get the department managed by this user.
     *
     * @return HasOne
     */
    public function managedDepartment(): HasOne
    {
        return $this->hasOne(Department::class, 'manager_id');
    }

    /**
     * Purchase orders created by this user.
     *
     * @return HasMany
     */
    public function createdPurchaseOrders(): HasMany
    {
        return $this->hasMany(PurchaseOrder::class, 'created_by');
    }

    /**
     * Purchase orders approved by this user.
     *
     * @return HasMany
     */
    public function approvedPurchaseOrders(): HasMany
    {
        return $this->hasMany(PurchaseOrder::class, 'approved_by');
    }

    /**
     * Sales orders created by this user.
     *
     * @return HasMany
     */
    public function createdSalesOrders(): HasMany
    {
        return $this->hasMany(SalesOrder::class, 'created_by');
    }

    /**
     * Sales orders approved by this user.
     *
     * @return HasMany
     */
    public function approvedSalesOrders(): HasMany
    {
        return $this->hasMany(SalesOrder::class, 'approved_by');
    }

    /**
     * Stock transfers requested by this user.
     *
     * @return HasMany
     */
    public function requestedStockTransfers(): HasMany
    {
        return $this->hasMany(StockTransfer::class, 'requested_by');
    }

    /**
     * Stock transfers approved by this user.
     *
     * @return HasMany
     */
    public function approvedStockTransfers(): HasMany
    {
        return $this->hasMany(StockTransfer::class, 'approved_by');
    }

    /**
     * Stock counts created by this user.
     *
     * @return HasMany
     */
    public function createdStockCounts(): HasMany
    {
        return $this->hasMany(StockCount::class, 'created_by');
    }

    /**
     * Stock counts verified by this user.
     *
     * @return HasMany
     */
    public function verifiedStockCounts(): HasMany
    {
        return $this->hasMany(StockCount::class, 'verified_by');
    }

    /**
     * Stock count items counted by this user.
     *
     * @return HasMany
     */
    public function countedStockItems(): HasMany
    {
        return $this->hasMany(StockCountItem::class, 'counted_by');
    }

    /**
     * Stock count items approved by this user.
     *
     * @return HasMany
     */
    public function approvedStockItems(): HasMany
    {
        return $this->hasMany(StockCountItem::class, 'approved_by');
    }

    /**
     * Shipments created by this user.
     *
     * @return HasMany
     */
    public function createdShipments(): HasMany
    {
        return $this->hasMany(Shipment::class, 'shipped_by');
    }

    /**
     * Purchase receipts created by this user.
     *
     * @return HasMany
     */
    public function createdPurchaseReceipts(): HasMany
    {
        return $this->hasMany(PurchaseReceipt::class, 'received_by');
    }

    /**
     * Audit logs for actions performed by this user.
     *
     * @return HasMany
     */
    public function auditLogs(): HasMany
    {
        return $this->hasMany(AuditLog::class, 'user_id');
    }

    /**
     * Inventory movements created by this user.
     *
     * @return HasMany
     */
    public function inventoryMovements(): HasMany
    {
        return $this->hasMany(InventoryMovement::class, 'created_by');
    }

    /**
     * --------------------------------------------------------------------------
     * Role & Permission Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Check if user has a specific role.
     *
     * @param string $roleName
     * @return bool
     */
    public function hasRole(string $roleName): bool
    {
        return $this->role && $this->role->name === $roleName;
    }

    /**
     * Check if user has any of the given roles.
     *
     * @param array<string> $roleNames
     * @return bool
     */
    public function hasAnyRole(array $roleNames): bool
    {
        return $this->role && in_array($this->role->name, $roleNames);
    }

    /**
     * Check if user has all of the given roles.
     *
     * @param array<string> $roleNames
     * @return bool
     */
    public function hasAllRoles(array $roleNames): bool
    {
        if (!$this->role) {
            return false;
        }

        return !array_diff($roleNames, [$this->role->name]);
    }

    /**
     * Check if user has a specific permission.
     *
     * @param string $permission
     * @return bool
     */
    public function hasPermission(string $permission): bool
    {
        if (!$this->role || !$this->role->permissions) {
            return false;
        }

        $permissions = $this->role->permissions;

        // Check for wildcard (all permissions) or specific permission
        return (isset($permissions['all']) && $permissions['all'] === true) ||
            (isset($permissions[$permission]) && $permissions[$permission] === true);
    }

    /**
     * Check if user has any of the given permissions.
     *
     * @param array<string> $permissions
     * @return bool
     */
    public function hasAnyPermission(array $permissions): bool
    {
        foreach ($permissions as $permission) {
            if ($this->hasPermission($permission)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Check if user has all of the given permissions.
     *
     * @param array<string> $permissions
     * @return bool
     */
    public function hasAllPermissions(array $permissions): bool
    {
        foreach ($permissions as $permission) {
            if (!$this->hasPermission($permission)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Check if user is an admin (has all permissions).
     *
     * @return bool
     */
    public function getIsAdminAttribute(): bool
    {
        return $this->role && $this->role->is_admin;
    }

    /**
     * Check if user is a department manager.
     *
     * @return bool
     */
    public function getIsManagerAttribute(): bool
    {
        return $this->managedDepartment()->exists();
    }

    /**
     * Get list of user permissions.
     *
     * @return array
     */
    public function getPermissionsListAttribute(): array
    {
        return $this->role ? $this->role->permissions_list : [];
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get user's full name.
     *
     * @return string
     */
    public function getFullNameAttribute(): string
    {
        return trim($this->first_name . ' ' . $this->last_name);
    }

    /**
     * Get name attribute (for backward compatibility).
     * Maps to full_name for any code expecting $user->name.
     *
     * @return string
     */
    public function getNameAttribute(): string
    {
        return $this->full_name;
    }

    /**
     * Get user's initials.
     *
     * @return string
     */
    public function getInitialsAttribute(): string
    {
        $initials = '';

        if ($this->first_name) {
            $initials .= strtoupper(substr($this->first_name, 0, 1));
        }

        if ($this->last_name) {
            $initials .= strtoupper(substr($this->last_name, 0, 1));
        }

        return $initials ?: strtoupper(substr($this->username, 0, 2));
    }

    /**
     * Get user's display name (full name or username).
     *
     * @return string
     */
    public function getDisplayNameAttribute(): string
    {
        return $this->full_name ?: $this->username;
    }

    /**
     * Get user's status label.
     *
     * @return string
     */
    public function getStatusLabelAttribute(): string
    {
        return $this->is_active ? 'Active' : 'Inactive';
    }

    /**
     * Get user's role name.
     *
     * @return string|null
     */
    public function getRoleNameAttribute(): ?string
    {
        return $this->role?->name;
    }

    /**
     * Get user's department name.
     *
     * @return string|null
     */
    public function getDepartmentNameAttribute(): ?string
    {
        return $this->department?->name;
    }

    /**
     * Get user summary.
     *
     * @return array
     */
    public function getSummaryAttribute(): array
    {
        return [
            'id' => $this->id,
            'username' => $this->username,
            'email' => $this->email,
            'name' => $this->full_name,
            'initials' => $this->initials,
            'role' => $this->role_name,
            'department' => $this->department_name,
            'is_active' => $this->is_active,
            'status' => $this->status_label,
            'last_login' => $this->last_login?->diffForHumans(),
            'is_admin' => $this->is_admin,
            'is_manager' => $this->is_manager
        ];
    }

    /**
     * --------------------------------------------------------------------------
     * Mutators
     * --------------------------------------------------------------------------
     */

    /**
     * Set the name attribute (for backward compatibility).
     * Splits full name into first and last name.
     *
     * @param string $value
     * @return void
     */
    public function setNameAttribute(string $value): void
    {
        $nameParts = explode(' ', trim($value), 2);
        $this->first_name = $nameParts[0];
        $this->last_name = $nameParts[1] ?? '';
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to only include active users.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope to filter by role name.
     *
     * @param Builder $query
     * @param string $roleName
     * @return Builder
     */
    public function scopeByRole(Builder $query, string $roleName): Builder
    {
        return $query->whereHas('role', function ($q) use ($roleName) {
            $q->where('name', $roleName);
        });
    }

    /**
     * Scope to filter by department.
     *
     * @param Builder $query
     * @param int $departmentId
     * @return Builder
     */
    public function scopeByDepartment(Builder $query, int $departmentId): Builder
    {
        return $query->where('department_id', $departmentId);
    }

    /**
     * Scope to filter by role ID.
     *
     * @param Builder $query
     * @param int $roleId
     * @return Builder
     */
    public function scopeByRoleId(Builder $query, int $roleId): Builder
    {
        return $query->where('role_id', $roleId);
    }

    /**
     * Scope to search users by name, email, or username.
     *
     * @param Builder $query
     * @param string $search
     * @return Builder
     */
    public function scopeSearch(Builder $query, string $search): Builder
    {
        return $query->where(function ($q) use ($search) {
            $q->where('username', 'like', "%{$search}%")
                ->orWhere('email', 'like', "%{$search}%")
                ->orWhere('first_name', 'like', "%{$search}%")
                ->orWhere('last_name', 'like', "%{$search}%")
                ->orWhereRaw("CONCAT(first_name, ' ', last_name) LIKE ?", ["%{$search}%"]);
        });
    }

    /**
     * Scope to get managers (users who manage a department).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeManagers(Builder $query): Builder
    {
        return $query->whereHas('managedDepartment');
    }

    /**
     * Scope to get users with admin role.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeAdmins(Builder $query): Builder
    {
        return $query->whereHas('role', function ($q) {
            $q->where('permissions->all', true);
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Activate the user account.
     *
     * @return bool
     */
    public function activate(): bool
    {
        $this->is_active = true;
        return $this->save();
    }

    /**
     * Deactivate the user account.
     *
     * @return bool
     */
    public function deactivate(): bool
    {
        $this->is_active = false;
        return $this->save();
    }

    /**
     * Update last login timestamp.
     *
     * @return self
     */
    public function updateLastLogin(): self
    {
        $this->last_login = now();
        $this->save();

        return $this;
    }

    /**
     * Check if user belongs to a department.
     *
     * @return bool
     */
    public function hasDepartment(): bool
    {
        return !is_null($this->department_id);
    }

    /**
     * Get user activity statistics.
     *
     * @param int $days
     * @return array<string, mixed>
     */
    public function getActivityStats(int $days = 30): array
    {
        $since = now()->subDays($days);

        return [
            'purchase_orders_created' => $this->createdPurchaseOrders()
                ->where('created_at', '>=', $since)
                ->count(),
            'purchase_orders_approved' => $this->approvedPurchaseOrders()
                ->where('created_at', '>=', $since)
                ->count(),
            'sales_orders_created' => $this->createdSalesOrders()
                ->where('created_at', '>=', $since)
                ->count(),
            'sales_orders_approved' => $this->approvedSalesOrders()
                ->where('created_at', '>=', $since)
                ->count(),
            'stock_transfers_requested' => $this->requestedStockTransfers()
                ->where('created_at', '>=', $since)
                ->count(),
            'stock_transfers_approved' => $this->approvedStockTransfers()
                ->where('created_at', '>=', $since)
                ->count(),
            'stock_counts_created' => $this->createdStockCounts()
                ->where('created_at', '>=', $since)
                ->count(),
            'stock_counts_verified' => $this->verifiedStockCounts()
                ->where('created_at', '>=', $since)
                ->count(),
            'shipments_created' => $this->createdShipments()
                ->where('created_at', '>=', $since)
                ->count(),
            'receipts_created' => $this->createdPurchaseReceipts()
                ->where('created_at', '>=', $since)
                ->count(),
            'total_actions' => $this->auditLogs()
                ->where('created_at', '>=', $since)
                ->count()
        ];
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
        // Set default username if not provided
        static::creating(function (self $user) {
            if (empty($user->username)) {
                $user->username = self::generateUsername($user->email);
            }
        });

        // Log user activity on update (optional - can be handled by AuditLog)
        static::updating(function (self $user) {
            // Additional logic if needed
        });

        // Check for dependencies before deletion
        static::deleting(function (self $user) {
            // Check if user has created records
            if (
                $user->createdPurchaseOrders()->exists() ||
                $user->createdSalesOrders()->exists() ||
                $user->createdStockCounts()->exists() ||
                $user->createdShipments()->exists()
            ) {
                throw new \Exception('Cannot delete user with associated records.');
            }

            // Remove user from managed department
            if ($user->managedDepartment()->exists()) {
                $user->managedDepartment()->update(['manager_id' => null]);
            }
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Generate a unique username from email.
     *
     * @param string $email
     * @return string
     */
    protected static function generateUsername(string $email): string
    {
        $baseUsername = explode('@', $email)[0];
        $username = $baseUsername;
        $counter = 1;

        while (self::where('username', $username)->exists()) {
            $username = $baseUsername . $counter;
            $counter++;
        }

        return $username;
    }

    /**
     * Format for select dropdown.
     *
     * @return array
     */
    public function toSelectOption(): array
    {
        return [
            'id' => $this->id,
            'text' => $this->display_name . ' (' . $this->email . ')',
            'name' => $this->display_name,
            'email' => $this->email,
            'role' => $this->role_name,
            'department' => $this->department_name
        ];
    }

    /**
     * Get user card data for UI.
     *
     * @return array
     */
    public function toUserCard(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->display_name,
            'initials' => $this->initials,
            'email' => $this->email,
            'role' => $this->role_name,
            'department' => $this->department_name,
            'status' => $this->status_label,
            'last_login' => $this->last_login?->diffForHumans(),
            'is_admin' => $this->is_admin,
            'is_manager' => $this->is_manager
        ];
    }

    /**
     * Get user's notification channels.
     *
     * @return array
     */
    public function getNotificationChannels(): array
    {
        $channels = [];

        if ($this->email) {
            $channels[] = 'mail';
        }

        // Add other channels as needed (SMS, Slack, etc.)

        return $channels;
    }
}
