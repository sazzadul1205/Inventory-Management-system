<?php
// app/Models/Role.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
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
     * Get the users for the role.
     */
    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    /**
     * Check if role has a specific permission.
     */
    public function hasPermission(string $permission): bool
    {
        if (!$this->permissions) {
            return false;
        }

        return isset($this->permissions['all']) && $this->permissions['all'] === true
            || isset($this->permissions[$permission]) && $this->permissions[$permission] === true;
    }

    /**
     * Grant a permission to the role
     */
    public function grantPermission(string $permission): self
    {
        $permissions = $this->permissions ?? [];
        $permissions[$permission] = true;
        $this->permissions = $permissions;
        $this->save();

        return $this;
    }

    /**
     * Revoke a permission from the role
     */
    public function revokePermission(string $permission): self
    {
        $permissions = $this->permissions ?? [];
        unset($permissions[$permission]);
        $this->permissions = $permissions;
        $this->save();

        return $this;
    }

    /**
     * Grant all permissions (admin)
     */
    public function grantAllPermissions(): self
    {
        $this->permissions = ['all' => true];
        $this->save();

        return $this;
    }
}
