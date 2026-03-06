<?php
// database/factories/CategoryFactory.php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Category::class;

    /**
     * Inventory-specific category names
     */
    protected array $categoryNames = [
        // Raw Materials
        'Raw Materials',
        'Metals',
        'Plastics',
        'Wood',
        'Fabrics',
        'Chemicals',
        'Electronics Components',
        'Hardware',
        'Packaging Materials',
        'Adhesives',
        'Paints & Coatings',
        'Lumber',
        'Steel',
        'Aluminum',
        'Copper',
        'Wire',
        'Cables',
        'Fasteners',
        'Screws',
        'Nuts & Bolts',
        'Washers',
        'Bearings',
        'Belts',
        'Hoses',

        // Finished Goods
        'Finished Products',
        'Electronics',
        'Furniture',
        'Machinery',
        'Tools',
        'Equipment',
        'Appliances',
        'Vehicles',
        'Spare Parts',
        'Assemblies',
        'Sub-assemblies',
        'Components',

        // Consumables
        'Consumables',
        'Office Supplies',
        'Cleaning Supplies',
        'Safety Equipment',
        'PPE',
        'Gloves',
        'Masks',
        'Uniforms',
        'Lubricants',
        'Coolants',
        'Solvents',
        'Laboratory Supplies',

        // Packaging
        'Packaging',
        'Boxes',
        'Cartons',
        'Pallets',
        'Strapping',
        'Shrink Wrap',
        'Labels',
        'Tapes',
        'Cushioning',
        'Foam',
        'Bubble Wrap',

        // Warehouse Equipment
        'Warehouse Equipment',
        'Shelving',
        'Racks',
        'Forklifts',
        'Pallet Jacks',
        'Conveyors',
        'Scales',
        'Barcode Scanners',
        'Label Printers',

        // Maintenance
        'Maintenance Supplies',
        'Tools',
        'Spare Parts',
        'Repair Kits',
        'Lighting',
        'Electrical',
        'Plumbing',
        'HVAC',

        // Office & Admin
        'Office Equipment',
        'Stationery',
        'Furniture',
        'IT Equipment',
        'Printers',
        'Paper',
        'Toners',

        // Perishables
        'Perishable Goods',
        'Food Items',
        'Beverages',
        'Medical Supplies',
        'Pharmaceuticals',
        'Chemicals - Hazardous',

        // Returns & Damages
        'Damaged Goods',
        'Returns',
        'Refurbished Items',
        'Warranty Claims',

        // Special Categories
        'High Value Items',
        'Slow Moving Items',
        'Fast Moving Items',
        'Seasonal Items',
        'Imported Items',
        'Export Items',
        'Hazardous Materials',
        'Temperature Controlled',
        'Fragile Items',
        'Oversized Items',
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->unique()->randomElement($this->categoryNames);

        return [
            'name' => $name,
            'description' => $this->generateDescription($name),
            'parent_id' => null,
            'is_active' => $this->faker->boolean(95), // 95% chance of being active
            'created_at' => $this->faker->dateTimeBetween('-5 years', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Generate inventory-specific description.
     */
    protected function generateDescription(string $categoryName): string
    {
        $templates = [
            "{$categoryName} - Stock management and inventory control",
            "Inventory category for all {$categoryName} items",
            "Manage {$categoryName} stock levels and reordering",
            "Warehouse location: {$categoryName} section",
            "{$categoryName} - Track quantity, location, and movement",
            "Inventory items classified under {$categoryName}",
            "Stock keeping unit (SKU) category for {$categoryName}",
            "Reorder management for {$categoryName} items",
            "Quality control category: {$categoryName}",
            "Vendor supplies - {$categoryName} category",
            "Bin location tracking for {$categoryName}",
            "Inventory valuation category: {$categoryName}",
        ];

        return $this->faker->randomElement($templates);
    }

    /**
     * Indicate that the category is active.
     */
    public function active(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_active' => true,
            ];
        });
    }

    /**
     * Indicate that the category is inactive.
     */
    public function inactive(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_active' => false,
            ];
        });
    }

    /**
     * Create a parent category.
     */
    public function parent(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'parent_id' => null,
            ];
        });
    }

    /**
     * Create a child category for a specific parent.
     */
    public function childOf(int $parentId): static
    {
        return $this->state(function (array $attributes) use ($parentId) {
            $name = $this->faker->randomElement($this->categoryNames);

            return [
                'parent_id' => $parentId,
                'name' => $name . ' - ' . $this->faker->word,
            ];
        });
    }

    /**
     * Create a category with a specific name.
     */
    public function named(string $name): static
    {
        return $this->state(function (array $attributes) use ($name) {
            return [
                'name' => $name,
            ];
        });
    }

    /**
     * Create a raw materials category.
     */
    public function rawMaterial(): static
    {
        return $this->state(function (array $attributes) {
            $rawMaterials = ['Metals', 'Plastics', 'Wood', 'Fabrics', 'Chemicals', 'Components'];
            return [
                'name' => $this->faker->randomElement($rawMaterials),
                'description' => 'Raw materials for production and manufacturing',
            ];
        });
    }

    /**
     * Create a finished goods category.
     */
    public function finishedGood(): static
    {
        return $this->state(function (array $attributes) {
            $finishedGoods = ['Electronics', 'Furniture', 'Machinery', 'Tools', 'Equipment'];
            return [
                'name' => $this->faker->randomElement($finishedGoods),
                'description' => 'Finished products ready for sale or distribution',
            ];
        });
    }

    /**
     * Create a consumables category.
     */
    public function consumable(): static
    {
        return $this->state(function (array $attributes) {
            $consumables = ['Office Supplies', 'Cleaning Supplies', 'PPE', 'Lubricants'];
            return [
                'name' => $this->faker->randomElement($consumables),
                'description' => 'Consumable items that need regular replenishment',
            ];
        });
    }

    /**
     * Create a packaging category.
     */
    public function packaging(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Packaging',
                'description' => 'Packaging materials for shipping and storage',
            ];
        });
    }

    /**
     * Create a category with inventory items (products).
     */
    public function withInventoryItems(int $count = 5): static
    {
        return $this->afterCreating(function (Category $category) use ($count) {
            if (class_exists('\App\Models\Product')) {
                \App\Models\Product::factory()
                    ->count($count)
                    ->forCategory($category->id)
                    ->create();
            }
        });
    }

    /**
     * Create a category with children.
     */
    public function withChildren(int $count = 3): static
    {
        return $this->afterCreating(function (Category $category) use ($count) {
            Category::factory()
                ->count($count)
                ->childOf($category->id)
                ->create();
        });
    }

    /**
     * Create a deep nested category hierarchy.
     */
    public function withNestedChildren(int $depth = 3, int $childrenPerLevel = 2): static
    {
        return $this->afterCreating(function (Category $category) use ($depth, $childrenPerLevel) {
            if ($depth > 0) {
                Category::factory()
                    ->count($childrenPerLevel)
                    ->childOf($category->id)
                    ->withNestedChildren($depth - 1, $childrenPerLevel)
                    ->create();
            }
        });
    }

    /**
     * Create a high-value items category.
     */
    public function highValue(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'High Value Items',
                'description' => 'High-value inventory requiring special handling and security',
            ];
        });
    }

    /**
     * Create a hazardous materials category.
     */
    public function hazardous(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Hazardous Materials',
                'description' => 'Dangerous goods requiring special storage and handling',
            ];
        });
    }

    /**
     * Create a temperature-controlled category.
     */
    public function temperatureControlled(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Temperature Controlled',
                'description' => 'Items requiring specific temperature conditions',
            ];
        });
    }
}
