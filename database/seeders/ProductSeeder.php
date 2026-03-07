<?php
// database/seeders/ProductSeeder.php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class ProductSeeder extends Seeder
{
    use ChecksDependencies;

    /**
     * Number of products to create
     */
    protected const PRODUCT_COUNT = 5; // Was 500
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       
        if (!$this->checkDependencies([
            Category::class => 'No categories found',
        ])) {
            return;
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        Product::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating products...');
        $this->command->getOutput()->progressStart(self::PRODUCT_COUNT);

        $this->createProductsByCategory();
        $this->createSpecializedProducts();

        $this->command->getOutput()->progressFinish();
        $this->displayStatistics();
    }

    /**
     * Check if categories exist.
     */
    protected function checkPrerequisites(): void
    {
        if (Category::count() == 0) {
            $this->command->warn('No categories found. Running CategorySeeder first...');
            $this->call(CategorySeeder::class);
        }
    }

    /**
     * Create products distributed by category.
     */
    protected function createProductsByCategory(): void
    {
        $categories = Category::all();
        $productsPerCategory = (int) (self::PRODUCT_COUNT / max($categories->count(), 1));

        foreach ($categories as $category) {
            $this->command->info("\nCreating products for category: {$category->name}");

            $count = $category->name === 'Electronics' ? $productsPerCategory * 1.5 : $productsPerCategory;
            $count = min((int) $count, 100); // Cap at 100 per category

            for ($i = 0; $i < $count; $i++) {
                $trackingType = $this->determineTrackingType($category->name);

                $product = Product::factory()
                    ->inCategory($category->id)
                    ->{$trackingType}()
                    ->withSuppliers(rand(1, 3))
                    ->create();

                if ($i % 10 === 0) {
                    $this->command->getOutput()->progressAdvance(10);
                }
            }
        }
    }

    /**
     * Determine tracking type based on category.
     */
    protected function determineTrackingType(string $categoryName): string
    {
        return match ($categoryName) {
            'Electronics', 'Computers', 'Smartphones' => fake()->randomElement([
                'serialTracked',
                'serialTracked',
                'batchTracked',
                'standard'
            ]),
            'Food & Beverages', 'Perishable Goods' => fake()->randomElement([
                'expirable',
                'expirable',
                'batchTracked',
                'standard'
            ]),
            'Chemicals', 'Pharmaceuticals' => fake()->randomElement([
                'batchTracked',
                'expirable',
                'batchTracked',
                'serialTracked'
            ]),
            'Raw Materials' => fake()->randomElement([
                'batchTracked',
                'bulkItem',
                'standard',
                'standard'
            ]),
            default => 'standard'
        };
    }

    /**
     * Create specialized product types.
     */
    protected function createSpecializedProducts(): void
    {
        $this->command->info("\nCreating specialized products...");

        // High-value electronics
        $electronics = Category::where('name', 'Electronics')->first();
        if ($electronics) {
            for ($i = 0; $i < 10; $i++) {
                Product::factory()
                    ->inCategory($electronics->id)
                    ->highValue()
                    ->serialTracked()
                    ->withSuppliers(1)
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }

        // Perishable goods
        $perishable = Category::where('name', 'Food & Beverages')->first();
        if ($perishable) {
            for ($i = 0; $i < 15; $i++) {
                Product::factory()
                    ->inCategory($perishable->id)
                    ->expirable()
                    ->batchTracked()
                    ->withSuppliers(2)
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }

        // Bulk items
        $rawMaterials = Category::where('name', 'Raw Materials')->first();
        if ($rawMaterials) {
            for ($i = 0; $i < 8; $i++) {
                Product::factory()
                    ->inCategory($rawMaterials->id)
                    ->bulkItem()
                    ->batchTracked()
                    ->withSuppliers(2)
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }

        // Fast-moving consumables
        $consumables = Category::where('name', 'Consumables')->first();
        if ($consumables) {
            for ($i = 0; $i < 12; $i++) {
                Product::factory()
                    ->inCategory($consumables->id)
                    ->fastMoving()
                    ->withSuppliers(3)
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }

        // Slow-moving spare parts
        $spareParts = Category::where('name', 'Spare Parts')->first();
        if ($spareParts) {
            for ($i = 0; $i < 10; $i++) {
                Product::factory()
                    ->inCategory($spareParts->id)
                    ->slowMoving()
                    ->withSuppliers(2)
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }

        // Create some inactive products
        Product::factory()
            ->inactive()
            ->count(10)
            ->create();

        $this->command->getOutput()->progressAdvance(10);
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nProduct Statistics:");

        $totalProducts = Product::count();
        $activeProducts = Product::active()->count();
        $serialTracked = Product::where('is_serial_tracked', true)->count();
        $batchTracked = Product::where('is_batch_tracked', true)->count();
        $expirable = Product::where('is_expirable', true)->count();
        $lowStock = Product::lowStock()->count();
        $needsReorder = Product::needsReorder()->count();

        $this->command->table(
            ['Metric', 'Count'],
            [
                ['Total Products', $totalProducts],
                ['Active Products', $activeProducts],
                ['Inactive Products', $totalProducts - $activeProducts],
                ['Serial Tracked', $serialTracked],
                ['Batch Tracked', $batchTracked],
                ['Expirable', $expirable],
                ['Low Stock Items', $lowStock],
                ['Needs Reorder', $needsReorder],
            ]
        );

        // Show products by category
        $this->command->info("\nProducts by Category:");
        $byCategory = Product::select('category_id', DB::raw('count(*) as total'))
            ->with('category')
            ->groupBy('category_id')
            ->get();

        $this->command->table(
            ['Category', 'Product Count'],
            $byCategory->map(function ($item) {
                return [$item->category?->name ?? 'Uncategorized', $item->total];
            })->toArray()
        );

        // Show low stock alert
        if ($lowStock > 0) {
            $this->command->warn("\n⚠️  {$lowStock} products are low on stock!");

            $lowStockProducts = Product::lowStock()
                ->with('category')
                ->limit(10)
                ->get();

            $this->command->table(
                ['SKU', 'Product', 'Category', 'Current Stock', 'Min Stock'],
                $lowStockProducts->map(function ($product) {
                    return [
                        $product->sku,
                        $product->name,
                        $product->category?->name ?? 'N/A',
                        $product->current_stock,
                        $product->minimum_stock,
                    ];
                })->toArray()
            );
        }

        // Show reorder alert
        if ($needsReorder > 0) {
            $this->command->warn("\n📦  {$needsReorder} products need reordering!");
        }

        // Show tracking summary
        $this->command->info("\nTracking Methods Summary:");
        $this->command->table(
            ['Method', 'Count'],
            [
                ['Serial Tracked', $serialTracked],
                ['Batch Tracked', $batchTracked],
                ['Expirable', $expirable],
                ['No Tracking', $totalProducts - $serialTracked - $batchTracked - $expirable],
            ]
        );
    }
}
