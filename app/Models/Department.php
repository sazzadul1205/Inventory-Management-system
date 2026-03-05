<?php
// app/Models/Department.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Support\Str;

/**
 * Department Model
 * 
 * Represents an organizational department within the company. Manages department-specific
 * resources including users, inventory counts, and order tracking. Supports hierarchical
 * reporting through manager relationships and provides aggregated metrics for
 * departmental performance.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property int|null $manager_id
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read User|null $manager
 * @property-read Collection|User[] $users
 * @property-read Collection|StockCount[] $stockCounts
 * @property-read Collection|PurchaseOrder[] $purchaseOrders
 * @property-read Collection|SalesOrder[] $salesOrders
 * @property-read int $user_count
 * @property-read bool $has_manager
 * @property-read string $display_name
 * @property-read array $performance_metrics
 */
class Department extends Model
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
        'manager_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'description' => null,
        'manager_id' => null
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get all users belonging to this department.
     * Users are typically ordered by name for consistency.
     *
     * @return HasMany
     */
    public function users(): HasMany
    {
        return $this->hasMany(User::class)->orderBy('name');
    }

    /**
     * Get the manager (user) of this department.
     * The manager is typically a user with supervisory role.
     *
     * @return BelongsTo
     */
    public function manager(): BelongsTo
    {
        return $this->belongsTo(User::class, 'manager_id');
    }

    /**
     * Get stock counts created by users in this department.
     * Links to StockCount model through the created_by field.
     *
     * @return HasMany
     */
    public function stockCounts(): HasMany
    {
        return $this->hasMany(StockCount::class, 'created_by', 'id')
            ->whereHas('user', function ($query) {
                $query->where('department_id', $this->id);
            });
    }

    /**
     * Get all purchase orders created by users in this department.
     * Uses HasManyThrough to traverse through the User model.
     *
     * @return HasManyThrough
     */
    public function purchaseOrders(): HasManyThrough
    {
        return $this->hasManyThrough(
            PurchaseOrder::class,
            User::class,
            'department_id', // Foreign key on users table
            'created_by',    // Foreign key on purchase_orders table
            'id',            // Local key on departments table
            'id'             // Local key on users table
        )->latest('purchase_orders.created_at');
    }

    /**
     * Get all sales orders created by users in this department.
     * Uses HasManyThrough to traverse through the User model.
     *
     * @return HasManyThrough
     */
    public function salesOrders(): HasManyThrough
    {
        return $this->hasManyThrough(
            SalesOrder::class,
            User::class,
            'department_id', // Foreign key on users table
            'created_by',    // Foreign key on sales_orders table
            'id',            // Local key on departments table
            'id'             // Local key on users table
        )->latest('sales_orders.created_at');
    }

    /**
     * Get active managers (users who are managers of some department).
     *
     * @return HasMany
     */
    public function activeManagers(): HasMany
    {
        return $this->users()->where('is_manager', true);
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope query to only include departments with a manager.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeHasManager(Builder $query): Builder
    {
        return $query->whereNotNull('manager_id');
    }

    /**
     * Scope query to only include departments without a manager.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeNoManager(Builder $query): Builder
    {
        return $query->whereNull('manager_id');
    }

    /**
     * Scope query to include departments with minimum user count.
     *
     * @param Builder $query
     * @param int $count
     * @return Builder
     */
    public function scopeMinUsers(Builder $query, int $count): Builder
    {
        return $query->has('users', '>=', $count);
    }

    /**
     * Scope query to search departments by name.
     *
     * @param Builder $query
     * @param string $search
     * @return Builder
     */
    public function scopeSearch(Builder $query, string $search): Builder
    {
        return $query->where('name', 'like', "%{$search}%")
            ->orWhere('description', 'like', "%{$search}%");
    }

    /**
     * Scope query to get departments with their manager information.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithManagerDetails(Builder $query): Builder
    {
        return $query->with(['manager' => function ($query) {
            $query->select('id', 'name', 'email', 'position');
        }]);
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get the total number of users in this department.
     * Cached accessor to prevent N+1 queries.
     *
     * @return int
     */
    public function getUserCountAttribute(): int
    {
        return $this->users()->count();
    }

    /**
     * Check if the department has a manager assigned.
     *
     * @return bool
     */
    public function getHasManagerAttribute(): bool
    {
        return !is_null($this->manager_id);
    }

    /**
     * Get the display name with user count.
     *
     * @return string
     */
    public function getDisplayNameAttribute(): string
    {
        $count = $this->getUserCountAttribute();
        return "{$this->name} ({$count} " . Str::plural('user', $count) . ")";
    }

    /**
     * Get the manager's name if available.
     *
     * @return string|null
     */
    public function getManagerNameAttribute(): ?string
    {
        return $this->manager?->name;
    }

    /**
     * Get performance metrics for the department.
     *
     * @return array<string, mixed>
     */
    public function getPerformanceMetricsAttribute(): array
    {
        return [
            'user_count' => $this->user_count,
            'active_users' => $this->users()->where('is_active', true)->count(),
            'total_purchase_orders' => $this->purchaseOrders()->count(),
            'total_sales_orders' => $this->salesOrders()->count(),
            'pending_purchase_orders' => $this->purchaseOrders()
                ->whereIn('status', ['draft', 'submitted', 'approved'])
                ->count(),
            'pending_sales_orders' => $this->salesOrders()
                ->whereIn('status', ['draft', 'approved', 'processing'])
                ->count(),
            'recent_stock_counts' => $this->stockCounts()
                ->where('created_at', '>=', now()->subDays(30))
                ->count(),
        ];
    }

    /**
     * Get department statistics summary.
     *
     * @return array<string, mixed>
     */
    public function getStatisticsAttribute(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'manager' => $this->manager_name,
            'team_size' => $this->user_count,
            'created_at' => $this->created_at->format('Y-m-d'),
            'has_manager' => $this->has_manager
        ];
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Assign a manager to this department.
     *
     * @param User $user
     * @return bool
     * @throws \InvalidArgumentException
     */
    public function assignManager(User $user): bool
    {
        // Check if user belongs to this department
        if ($user->department_id !== $this->id) {
            throw new \InvalidArgumentException('Manager must be a member of the department.');
        }

        $this->manager_id = $user->id;
        return $this->save();
    }

    /**
     * Remove the current manager from this department.
     *
     * @return bool
     */
    public function removeManager(): bool
    {
        $this->manager_id = null;
        return $this->save();
    }

    /**
     * Check if a user is the manager of this department.
     *
     * @param User $user
     * @return bool
     */
    public function isManager(User $user): bool
    {
        return $this->manager_id === $user->id;
    }

    /**
     * Get all department activity summary.
     *
     * @param int $days
     * @return array<string, mixed>
     */
    public function getActivitySummary(int $days = 30): array
    {
        $since = now()->subDays($days);

        return [
            'period_days' => $days,
            'new_purchase_orders' => $this->purchaseOrders()
                ->where('created_at', '>=', $since)
                ->count(),
            'new_sales_orders' => $this->salesOrders()
                ->where('created_at', '>=', $since)
                ->count(),
            'stock_counts' => $this->stockCounts()
                ->where('created_at', '>=', $since)
                ->count(),
            'total_order_value' => [
                'purchase' => $this->purchaseOrders()
                    ->where('created_at', '>=', $since)
                    ->sum('total_amount'),
                'sales' => $this->salesOrders()
                    ->where('created_at', '>=', $since)
                    ->sum('total_amount'),
            ],
            'active_users' => $this->users()
                ->whereHas('purchaseOrders', function ($q) use ($since) {
                    $q->where('created_at', '>=', $since);
                })
                ->orWhereHas('salesOrders', function ($q) use ($since) {
                    $q->where('created_at', '>=', $since);
                })
                ->count()
        ];
    }

    /**
     * Get users eligible for manager position.
     *
     * @return Collection|User[]
     */
    public function getEligibleManagers(): Collection
    {
        return $this->users()
            ->where(function ($query) {
                $query->where('is_manager', true)
                    ->orWhere('role', 'admin')
                    ->orWhere('role', 'supervisor');
            })
            ->orderBy('name')
            ->get();
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
        // Validate manager assignment
        static::saving(function (self $department) {
            if ($department->manager_id) {
                $manager = User::find($department->manager_id);

                if (!$manager || $manager->department_id !== $department->id) {
                    return false;
                }
            }
        });

        // Clean up relationships when department is deleted
        static::deleting(function (self $department) {
            // Remove manager reference but don't delete users
            if ($department->manager_id) {
                $department->manager_id = null;
                $department->saveQuietly();
            }
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Additional Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get department hierarchy (if you implement nested departments).
     *
     * @return Collection
     */
    public function getHierarchy(): Collection
    {
        // Placeholder for future implementation if needed
        return collect([
            'department' => $this,
            'users' => $this->users,
            'sub_departments' => [] // For future nested structure
        ]);
    }

    /**
     * Get formatted department info for dropdowns.
     *
     * @return array
     */
    public function toSelectOption(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'user_count' => $this->user_count,
            'has_manager' => $this->has_manager,
            'manager_name' => $this->manager_name
        ];
    }

    /**
     * Check if department is active (has users).
     *
     * @return bool
     */
    public function isActive(): bool
    {
        return $this->user_count > 0;
    }
}
