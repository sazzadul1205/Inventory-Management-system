<?php
// app/Models/Role.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

/**
 * Role Model
 * 
 * Represents a user role in the RBAC (Role-Based Access Control) system.
 * Manages permissions assigned to roles and provides methods for permission
 * checking and manipulation. Roles can be assigned to multiple users and
 * control access to various system features and functionalities.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property array $permissions
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read Collection|User[] $users
 * @property-read int $users_count
 * @property-read array $permissions_list
 * @property-read bool $is_admin
 * @property-read string $display_name
 */
class Role extends Model
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
        'name',
        'description',
        'permissions',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'permissions' => 'array',
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'permissions' => '{}',
    ];

    /**
     * --------------------------------------------------------------------------
     * Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Special permission that grants all access */
    const ALL_PERMISSION = 'all';

    /** @var string Default role names */
    const ROLE_ADMIN = 'admin';
    const ROLE_MANAGER = 'manager';
    const ROLE_USER = 'user';
    const ROLE_GUEST = 'guest';

    /**
     * Predefined role structures.
     *
     * @var array<string, array>
     */
    const PREDEFINED_ROLES = [
        self::ROLE_ADMIN => [
            'name' => 'Administrator',
            'description' => 'Full system access',
            'permissions' => ['all' => true]
        ],
        self::ROLE_MANAGER => [
            'name' => 'Manager',
            'description' => 'Management level access',
            'permissions' => []
        ],
        self::ROLE_USER => [
            'name' => 'User',
            'description' => 'Basic user access',
            'permissions' => []
        ],
        self::ROLE_GUEST => [
            'name' => 'Guest',
            'description' => 'Read-only access',
            'permissions' => []
        ]
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get all users assigned to this role.
     *
     * @return HasMany
     */
    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to filter roles by name.
     *
     * @param Builder $query
     * @param string $name
     * @return Builder
     */
    public function scopeNamed(Builder $query, string $name): Builder
    {
        return $query->where('name', $name);
    }

    /**
     * Scope to search roles by name or description.
     *
     * @param Builder $query
     * @param string $search
     * @return Builder
     */
    public function scopeSearch(Builder $query, string $search): Builder
    {
        return $query->where(function ($q) use ($search) {
            $q->where('name', 'like', "%{$search}%")
                ->orWhere('description', 'like', "%{$search}%");
        });
    }

    /**
     * Scope to get roles with at least one user.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithUsers(Builder $query): Builder
    {
        return $query->has('users', '>', 0);
    }

    /**
     * Scope to get roles with no users assigned.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeUnused(Builder $query): Builder
    {
        return $query->doesntHave('users');
    }

    /**
     * Scope to get roles that have a specific permission.
     *
     * @param Builder $query
     * @param string $permission
     * @return Builder
     */
    public function scopeWithPermission(Builder $query, string $permission): Builder
    {
        return $query->where(function ($q) use ($permission) {
            $q->whereJsonContains('permissions->all', true)
                ->orWhereJsonContains('permissions->' . $permission, true);
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get the list of granted permissions.
     *
     * @return array
     */
    public function getPermissionsListAttribute(): array
    {
        $permissions = $this->permissions ?? [];

        if (isset($permissions[self::ALL_PERMISSION]) && $permissions[self::ALL_PERMISSION] === true) {
            return ['*']; // All permissions
        }

        return array_keys(array_filter($permissions, function ($value) {
            return $value === true;
        }));
    }

    /**
     * Check if this is an admin role (has all permissions).
     *
     * @return bool
     */
    public function getIsAdminAttribute(): bool
    {
        return isset($this->permissions[self::ALL_PERMISSION]) &&
            $this->permissions[self::ALL_PERMISSION] === true;
    }

    /**
     * Get display name with user count.
     *
     * @return string
     */
    public function getDisplayNameAttribute(): string
    {
        $count = $this->users_count ?? $this->users()->count();
        return "{$this->name} ({$count} " . Str::plural('user', $count) . ")";
    }

    /**
     * Get the number of granted permissions.
     *
     * @return int
     */
    public function getPermissionsCountAttribute(): int
    {
        if ($this->is_admin) {
            return PHP_INT_MAX; // Effectively unlimited
        }

        return count($this->permissions_list);
    }

    /**
     * Get role summary.
     *
     * @return array
     */
    public function getSummaryAttribute(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'users_count' => $this->users_count ?? $this->users()->count(),
            'permissions_count' => $this->permissions_count,
            'is_admin' => $this->is_admin,
            'created_at' => $this->created_at?->format('Y-m-d')
        ];
    }

    /**
     * --------------------------------------------------------------------------
     * Permission Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Check if role has a specific permission.
     *
     * @param string $permission
     * @return bool
     */
    public function hasPermission(string $permission): bool
    {
        $permissions = $this->permissions ?? [];

        // Check for 'all' permission first (super admin)
        if (isset($permissions[self::ALL_PERMISSION]) && $permissions[self::ALL_PERMISSION] === true) {
            return true;
        }

        // Check specific permission
        return isset($permissions[$permission]) && $permissions[$permission] === true;
    }

    /**
     * Check if role has any of the given permissions.
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
     * Check if role has all of the given permissions.
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
     * Grant a permission to the role.
     *
     * @param string $permission
     * @return self
     */
    public function grantPermission(string $permission): self
    {
        $permissions = $this->permissions ?? [];
        $permissions[$permission] = true;

        // If granting 'all', clear other permissions?
        if ($permission === self::ALL_PERMISSION) {
            $permissions = [self::ALL_PERMISSION => true];
        }

        $this->permissions = $permissions;
        $this->save();

        return $this;
    }

    /**
     * Grant multiple permissions at once.
     *
     * @param array<string> $permissions
     * @return self
     */
    public function grantPermissions(array $permissions): self
    {
        foreach ($permissions as $permission) {
            $this->grantPermission($permission);
        }

        return $this;
    }

    /**
     * Revoke a permission from the role.
     *
     * @param string $permission
     * @return self
     */
    public function revokePermission(string $permission): self
    {
        $permissions = $this->permissions ?? [];

        if (isset($permissions[$permission])) {
            unset($permissions[$permission]);
            $this->permissions = $permissions;
            $this->save();
        }

        return $this;
    }

    /**
     * Revoke multiple permissions at once.
     *
     * @param array<string> $permissions
     * @return self
     */
    public function revokePermissions(array $permissions): self
    {
        foreach ($permissions as $permission) {
            $this->revokePermission($permission);
        }

        return $this;
    }

    /**
     * Grant all permissions (admin role).
     *
     * @return self
     */
    public function grantAllPermissions(): self
    {
        $this->permissions = [self::ALL_PERMISSION => true];
        $this->save();

        return $this;
    }

    /**
     * Sync permissions (replace existing with new set).
     *
     * @param array<string> $permissions
     * @return self
     */
    public function syncPermissions(array $permissions): self
    {
        $newPermissions = [];

        foreach ($permissions as $permission) {
            $newPermissions[$permission] = true;
        }

        $this->permissions = $newPermissions;
        $this->save();

        return $this;
    }

    /**
     * Clear all permissions.
     *
     * @return self
     */
    public function clearPermissions(): self
    {
        $this->permissions = [];
        $this->save();

        return $this;
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
        // Ensure role name is unique
        static::creating(function (self $role) {
            if (static::where('name', $role->name)->exists()) {
                return false;
            }
        });

        // Prevent deletion of system roles
        static::deleting(function (self $role) {
            if (in_array($role->name, array_keys(self::PREDEFINED_ROLES))) {
                throw new \Exception('Cannot delete system roles.');
            }

            // Check if role has users
            if ($role->users()->exists()) {
                throw new \Exception('Cannot delete role with assigned users.');
            }
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Static Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Create a predefined role.
     *
     * @param string $roleKey
     * @return self|null
     */
    public static function createPredefined(string $roleKey): ?self
    {
        if (!isset(self::PREDEFINED_ROLES[$roleKey])) {
            return null;
        }

        $config = self::PREDEFINED_ROLES[$roleKey];

        return self::create([
            'name' => $config['name'],
            'description' => $config['description'],
            'permissions' => $config['permissions']
        ]);
    }

    /**
     * Get admin role.
     *
     * @return self|null
     */
    public static function getAdminRole(): ?self
    {
        return self::where('name', self::ROLE_ADMIN)->first();
    }

    /**
     * Get or create default roles.
     *
     * @return void
     */
    public static function ensureDefaultRoles(): void
    {
        foreach (self::PREDEFINED_ROLES as $key => $config) {
            self::firstOrCreate(
                ['name' => $config['name']],
                [
                    'description' => $config['description'],
                    'permissions' => $config['permissions']
                ]
            );
        }
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get role usage statistics.
     *
     * @return array<string, mixed>
     */
    public static function getUsageStatistics(): array
    {
        $roles = self::withCount('users')->get();

        return [
            'total_roles' => $roles->count(),
            'total_users_in_roles' => $roles->sum('users_count'),
            'unused_roles' => $roles->filter(fn($r) => $r->users_count === 0)->count(),
            'most_popular' => $roles->sortByDesc('users_count')->first()?->name,
            'by_role' => $roles->mapWithKeys(fn($r) => [
                $r->name => [
                    'users' => $r->users_count,
                    'is_admin' => $r->is_admin,
                    'permissions' => $r->permissions_count
                ]
            ])
        ];
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
            'name' => $this->name,
            'description' => $this->description,
            'users_count' => $this->users()->count()
        ];
    }

    /**
     * Get permission categories.
     *
     * @return array
     */
    public function getPermissionCategories(): array
    {
        $permissions = $this->permissions_list;

        if ($permissions === ['*']) {
            return ['all' => ['*']];
        }

        $categories = [];

        foreach ($permissions as $permission) {
            $parts = explode('.', $permission);
            $category = $parts[0] ?? 'general';

            if (!isset($categories[$category])) {
                $categories[$category] = [];
            }

            $categories[$category][] = $permission;
        }

        return $categories;
    }

    /**
     * Check if role is system role (predefined).
     *
     * @return bool
     */
    public function isSystemRole(): bool
    {
        return in_array($this->name, array_keys(self::PREDEFINED_ROLES));
    }
}
