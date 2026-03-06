<?php
// database/seeders/CategorySeeder.php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Disable foreign key checks temporarily
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        // Truncate the table
        Category::truncate();

        // Enable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating inventory category hierarchy...');
        $this->command->getOutput()->progressStart(100);

        // Create main inventory category structure
        $this->createInventoryCategories();

        // Create sample categories with products
        $this->createSampleCategoriesWithProducts();

        $this->command->getOutput()->progressFinish();

        // Show statistics
        $this->command->info('Inventory categories created successfully!');
        $this->command->table(
            ['Metric', 'Count'],
            [
                ['Total Categories', Category::count()],
                ['Parent Categories', Category::parentCategories()->count()],
                ['Active Categories', Category::active()->count()],
                ['Max Depth', $this->getMaxDepth()],
            ]
        );
    }

    /**
     * Create comprehensive inventory category structure.
     */
    protected function createInventoryCategories(): void
    {
        // Level 1: Main inventory divisions
        $rawMaterials = Category::factory()
            ->active()
            ->named('Raw Materials')
            ->create(['description' => 'Base materials used in production']);

        $finishedGoods = Category::factory()
            ->active()
            ->named('Finished Goods')
            ->create(['description' => 'Completed products ready for sale']);

        $consumables = Category::factory()
            ->active()
            ->named('Consumables')
            ->create(['description' => 'Items consumed in operations']);

        $packaging = Category::factory()
            ->active()
            ->named('Packaging Materials')
            ->create(['description' => 'Materials for packaging products']);

        $spareParts = Category::factory()
            ->active()
            ->named('Spare Parts')
            ->create(['description' => 'Replacement parts for maintenance']);

        $tools = Category::factory()
            ->active()
            ->named('Tools & Equipment')
            ->create(['description' => 'Tools and equipment for operations']);

        // Level 2: Raw Materials subcategories
        $metals = Category::factory()
            ->active()
            ->childOf($rawMaterials->id)
            ->named('Metals')
            ->create();

        $plastics = Category::factory()
            ->active()
            ->childOf($rawMaterials->id)
            ->named('Plastics & Polymers')
            ->create();

        $wood = Category::factory()
            ->active()
            ->childOf($rawMaterials->id)
            ->named('Wood & Lumber')
            ->create();

        $chemicals = Category::factory()
            ->active()
            ->childOf($rawMaterials->id)
            ->named('Chemicals')
            ->create();

        $fabrics = Category::factory()
            ->active()
            ->childOf($rawMaterials->id)
            ->named('Fabrics & Textiles')
            ->create();

        $electronics_comp = Category::factory()
            ->active()
            ->childOf($rawMaterials->id)
            ->named('Electronic Components')
            ->create();

        // Level 3: Metal subcategories
        Category::factory()
            ->active()
            ->childOf($metals->id)
            ->named('Steel')
            ->withInventoryItems(8)
            ->create();

        Category::factory()
            ->active()
            ->childOf($metals->id)
            ->named('Aluminum')
            ->withInventoryItems(6)
            ->create();

        Category::factory()
            ->active()
            ->childOf($metals->id)
            ->named('Copper')
            ->withInventoryItems(4)
            ->create();

        Category::factory()
            ->active()
            ->childOf($metals->id)
            ->named('Stainless Steel')
            ->withInventoryItems(5)
            ->create();

        Category::factory()
            ->active()
            ->childOf($metals->id)
            ->named('Alloys')
            ->withInventoryItems(7)
            ->create();

        // Level 3: Plastic subcategories
        Category::factory()
            ->active()
            ->childOf($plastics->id)
            ->named('Polyethylene')
            ->withInventoryItems(5)
            ->create();

        Category::factory()
            ->active()
            ->childOf($plastics->id)
            ->named('Polypropylene')
            ->withInventoryItems(4)
            ->create();

        Category::factory()
            ->active()
            ->childOf($plastics->id)
            ->named('PVC')
            ->withInventoryItems(3)
            ->create();

        // Level 3: Chemical subcategories
        Category::factory()
            ->hazardous()
            ->childOf($chemicals->id)
            ->named('Solvents')
            ->withInventoryItems(6)
            ->create();

        Category::factory()
            ->hazardous()
            ->childOf($chemicals->id)
            ->named('Acids')
            ->withInventoryItems(4)
            ->create();

        Category::factory()
            ->active()
            ->childOf($chemicals->id)
            ->named('Adhesives')
            ->withInventoryItems(8)
            ->create();

        // Level 2: Finished Goods subcategories
        $electronics = Category::factory()
            ->finishedGood()
            ->childOf($finishedGoods->id)
            ->named('Electronics')
            ->withChildren(5)
            ->create();

        $furniture = Category::factory()
            ->finishedGood()
            ->childOf($finishedGoods->id)
            ->named('Furniture')
            ->withChildren(4)
            ->create();

        $machinery = Category::factory()
            ->finishedGood()
            ->childOf($finishedGoods->id)
            ->named('Machinery')
            ->withChildren(3)
            ->create();

        // Level 3: Electronics subcategories
        Category::factory()
            ->active()
            ->childOf($electronics->id)
            ->named('Computers')
            ->withInventoryItems(10)
            ->create();

        Category::factory()
            ->active()
            ->childOf($electronics->id)
            ->named('Mobile Devices')
            ->withInventoryItems(8)
            ->create();

        Category::factory()
            ->active()
            ->childOf($electronics->id)
            ->named('Audio Equipment')
            ->withInventoryItems(6)
            ->create();

        // Level 2: Consumables subcategories
        $officeSupplies = Category::factory()
            ->consumable()
            ->childOf($consumables->id)
            ->named('Office Supplies')
            ->withChildren(4)
            ->create();

        $cleaning = Category::factory()
            ->consumable()
            ->childOf($consumables->id)
            ->named('Cleaning Supplies')
            ->withChildren(3)
            ->create();

        $ppe = Category::factory()
            ->consumable()
            ->childOf($consumables->id)
            ->named('Safety Equipment')
            ->withChildren(5)
            ->create();

        // Level 3: PPE subcategories
        Category::factory()
            ->active()
            ->childOf($ppe->id)
            ->named('Gloves')
            ->withInventoryItems(12)
            ->create();

        Category::factory()
            ->active()
            ->childOf($ppe->id)
            ->named('Safety Glasses')
            ->withInventoryItems(8)
            ->create();

        Category::factory()
            ->active()
            ->childOf($ppe->id)
            ->named('Hard Hats')
            ->withInventoryItems(5)
            ->create();

        Category::factory()
            ->active()
            ->childOf($ppe->id)
            ->named('Safety Vests')
            ->withInventoryItems(6)
            ->create();

        Category::factory()
            ->active()
            ->childOf($ppe->id)
            ->named('Respirators')
            ->withInventoryItems(4)
            ->create();

        // Level 2: Packaging subcategories
        Category::factory()
            ->packaging()
            ->childOf($packaging->id)
            ->named('Boxes')
            ->withNestedChildren(2, 3)
            ->create();

        Category::factory()
            ->packaging()
            ->childOf($packaging->id)
            ->named('Pallets')
            ->withInventoryItems(6)
            ->create();

        Category::factory()
            ->packaging()
            ->childOf($packaging->id)
            ->named('Strapping')
            ->withInventoryItems(5)
            ->create();

        Category::factory()
            ->packaging()
            ->childOf($packaging->id)
            ->named('Labels')
            ->withInventoryItems(10)
            ->create();

        // Level 2: Spare Parts subcategories
        Category::factory()
            ->active()
            ->childOf($spareParts->id)
            ->named('Mechanical Parts')
            ->withChildren(4)
            ->create();

        Category::factory()
            ->active()
            ->childOf($spareParts->id)
            ->named('Electrical Parts')
            ->withChildren(4)
            ->create();

        Category::factory()
            ->active()
            ->childOf($spareParts->id)
            ->named('Hydraulic Parts')
            ->withChildren(3)
            ->create();

        // Level 2: Tools subcategories
        Category::factory()
            ->active()
            ->childOf($tools->id)
            ->named('Hand Tools')
            ->withInventoryItems(15)
            ->create();

        Category::factory()
            ->active()
            ->childOf($tools->id)
            ->named('Power Tools')
            ->withInventoryItems(12)
            ->create();

        Category::factory()
            ->active()
            ->childOf($tools->id)
            ->named('Measuring Tools')
            ->withInventoryItems(8)
            ->create();

        // Special categories
        Category::factory()
            ->highValue()
            ->withNestedChildren(2, 2)
            ->create();

        Category::factory()
            ->temperatureControlled()
            ->withNestedChildren(2, 3)
            ->create();

        Category::factory()
            ->inactive()
            ->count(5)
            ->create();

        Category::factory()
            ->hazardous()
            ->count(3)
            ->withNestedChildren(2, 2)
            ->create();
    }

    /**
     * Create sample categories with products for testing.
     */
    protected function createSampleCategoriesWithProducts(): void
    {
        // Create 10 random categories with products
        Category::factory()
            ->active()
            ->count(10)
            ->create()
            ->each(function ($category) {
                // Create 5-15 products for each category
                $productCount = rand(5, 15);

                if (class_exists('Product')) {
                    Product::factory()
                        ->count($productCount)
                        ->forCategory($category->id)
                        ->create();
                }
            });

        // Create 5 categories with deep hierarchy
        Category::factory()
            ->active()
            ->count(5)
            ->withNestedChildren(3, 2)
            ->create();

        // Create some slow-moving categories
        Category::factory()
            ->active()
            ->named('Slow Moving Items')
            ->withChildren(4)
            ->create();

        // Create some fast-moving categories
        Category::factory()
            ->active()
            ->named('Fast Moving Items')
            ->withChildren(6)
            ->create();
    }

    /**
     * Get the maximum depth of the category tree.
     */
    protected function getMaxDepth(): int
    {
        $maxDepth = 0;

        Category::all()->each(function ($category) use (&$maxDepth) {
            $depth = $category->getDepth();
            if ($depth > $maxDepth) {
                $maxDepth = $depth;
            }
        });

        return $maxDepth;
    }
}
