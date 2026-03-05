<?php
// app/Models/Category.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Collection as SupportCollection;

/**
 * Category Model
 * 
 * Represents a product category in a hierarchical tree structure.
 * Supports parent-child relationships for nested categories and
 * maintains relationships with products.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property int|null $parent_id
 * @property bool $is_active
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read Category|null $parent
 * @property-read Collection|Category[] $children
 * @property-read Collection|Product[] $products
 * @property-read Collection|Category[] $descendants
 * @property-read string $full_path
 */
class Category extends Model
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
        'parent_id',
        'is_active'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the parent category of this category.
     *
     * @return BelongsTo
     */
    public function parent(): BelongsTo
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    /**
     * Get the child categories of this category.
     *
     * @return HasMany
     */
    public function children(): HasMany
    {
        return $this->hasMany(self::class, 'parent_id');
    }

    /**
     * Get all descendant categories recursively.
     * This eager loads all nested children for tree traversal.
     *
     * @return HasMany
     */
    public function descendants(): HasMany
    {
        return $this->hasMany(self::class, 'parent_id')->with('descendants');
    }

    /**
     * Get all products belonging to this category.
     *
     * @return HasMany
     */
    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope query to only include active categories.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope query to only include parent categories (those without a parent).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeParentCategories(Builder $query): Builder
    {
        return $query->whereNull('parent_id');
    }

    /**
     * Scope query to include categories with their full ancestor path.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithAncestors(Builder $query): Builder
    {
        return $query->with('parent');
    }

    /**
     * Scope query to search categories by name.
     *
     * @param Builder $query
     * @param string $searchTerm
     * @return Builder
     */
    public function scopeSearchByName(Builder $query, string $searchTerm): Builder
    {
        return $query->where('name', 'like', "%{$searchTerm}%");
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get the full hierarchical path of the category.
     * Example: "Electronics > Computers > Laptops"
     *
     * @return string
     */
    public function getFullPathAttribute(): string
    {
        if (!$this->parent) {
            return $this->name;
        }

        return $this->parent->full_path . ' > ' . $this->name;
    }

    /**
     * Get the display name with indentation for hierarchical select boxes.
     *
     * @return string
     */
    public function getIndentedNameAttribute(): string
    {
        $depth = $this->getDepth();
        $indent = str_repeat('— ', $depth);

        return $indent . $this->name;
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get all ancestors of this category (parent, grandparent, etc.).
     * Returns a collection ordered from nearest to farthest ancestor.
     *
     * @return SupportCollection|Category[]
     */
    public function getAncestors(): SupportCollection
    {
        $ancestors = collect();
        $parent = $this->parent;

        while ($parent) {
            $ancestors->push($parent);
            $parent = $parent->parent;
        }

        return $ancestors;
    }

    /**
     * Get the depth level of this category in the hierarchy.
     * Root categories have depth 0, their children depth 1, etc.
     *
     * @return int
     */
    public function getDepth(): int
    {
        $depth = 0;
        $parent = $this->parent;

        while ($parent) {
            $depth++;
            $parent = $parent->parent;
        }

        return $depth;
    }

    /**
     * Check if this category has any children.
     *
     * @return bool
     */
    public function hasChildren(): bool
    {
        return $this->children()->exists();
    }

    /**
     * Check if this category has a parent.
     *
     * @return bool
     */
    public function hasParent(): bool
    {
        return !is_null($this->parent_id);
    }

    /**
     * Get the root ancestor of this category.
     *
     * @return Category|null
     */
    public function getRootAncestor(): ?self
    {
        $ancestors = $this->getAncestors();

        return $ancestors->last() ?? $this;
    }

    /**
     * Get all siblings of this category (categories with the same parent).
     *
     * @return HasMany
     */
    public function siblings(): HasMany
    {
        return $this->hasMany(self::class, 'parent_id', 'parent_id')
            ->where('id', '!=', $this->id);
    }

    /**
     * Move this category to a new parent.
     *
     * @param int|null $newParentId
     * @return bool
     * @throws \InvalidArgumentException
     */
    public function moveTo(?int $newParentId): bool
    {
        // Prevent circular reference
        if ($newParentId && $this->wouldCreateCircularReference($newParentId)) {
            throw new \InvalidArgumentException('Moving to this parent would create a circular reference.');
        }

        $this->parent_id = $newParentId;
        return $this->save();
    }

    /**
     * Check if moving to a new parent would create a circular reference.
     *
     * @param int $newParentId
     * @return bool
     */
    protected function wouldCreateCircularReference(int $newParentId): bool
    {
        if ($newParentId === $this->id) {
            return true;
        }

        $newParent = self::find($newParentId);
        if (!$newParent) {
            return false;
        }

        // Check if new parent is a descendant of this category
        $ancestors = $newParent->getAncestors();

        return $ancestors->contains('id', $this->id);
    }

    /**
     * Get the total product count including products from descendant categories.
     *
     * @return int
     */
    public function getTotalProductCount(): int
    {
        $count = $this->products()->count();

        foreach ($this->children as $child) {
            $count += $child->getTotalProductCount();
        }

        return $count;
    }

    /**
     * --------------------------------------------------------------------------
     * Boot Methods
     * --------------------------------------------------------------------------
     */

    /**
     * The "booted" method of the model.
     * Used to set up model event listeners.
     *
     * @return void
     */
    protected static function booted(): void
    {
        // Prevent deletion if category has children
        static::deleting(function (self $category) {
            if ($category->children()->exists()) {
                throw new \Exception('Cannot delete category with children.');
            }
        });

        // Clear cache or perform other actions after save
        static::saved(function (self $category) {
            // Optional: Clear category cache here
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Additional Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Build a hierarchical tree of categories.
     *
     * @param Collection|null $categories
     * @return Collection
     */
    public static function buildTree(?Collection $categories = null): Collection
    {
        $categories = $categories ?? self::with('children')->get();

        return $categories->filter(function ($category) {
            return is_null($category->parent_id);
        })->map(function ($category) {
            $category->children = self::buildTree($category->children);
            return $category;
        })->values();
    }

    /**
     * Get all descendant IDs including current category.
     *
     * @return array<int>
     */
    public function getDescendantIds(): array
    {
        $ids = [$this->id];

        foreach ($this->children as $child) {
            $ids = array_merge($ids, $child->getDescendantIds());
        }

        return $ids;
    }

    /**
     * Activate the category.
     *
     * @return bool
     */
    public function activate(): bool
    {
        $this->is_active = true;
        return $this->save();
    }

    /**
     * Deactivate the category.
     *
     * @return bool
     */
    public function deactivate(): bool
    {
        $this->is_active = false;
        return $this->save();
    }
}
