<?php
// database/seeders/ProductSupplierSeeder.php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\ProductSupplier;
use App\Models\Product;
use App\Models\Supplier;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class ProductSupplierSeeder extends Seeder
{
    use ChecksDependencies;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       
        if (!$this->checkDependencies([
            Product::class => 'No products found',
            Supplier::class => 'No suppliers found',
        ])) {
            return;
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        ProductSupplier::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating product-supplier relationships...');
        $this->command->getOutput()->progressStart(100);

        $this->createProductSupplierRelationships();
        $this->createSpecializedSourcing();

        $this->command->getOutput()->progressFinish();
        $this->displayStatistics();
    }

    /**
     * Check if products and suppliers exist.
     */
    protected function checkPrerequisites(): void
    {
        if (Product::count() == 0) {
            $this->command->warn('No products found. Running ProductSeeder first...');
            $this->call(ProductSeeder::class);
        }

        if (Supplier::count() == 0) {
            $this->command->warn('No suppliers found. Running SupplierSeeder first...');
            $this->call(SupplierSeeder::class);
        }
    }

    /**
     * Create product-supplier relationships for all products.
     */
    protected function createProductSupplierRelationships(): void
    {
        $products = Product::with('category')->get();
        $suppliers = Supplier::all();

        $totalRelationships = 0;
        $targetRelationships = 50; // Was 800

        foreach ($products as $product) {
            // Determine number of suppliers per product based on category
            $supplierCount = $this->getSupplierCountForProduct($product);

            // Select random suppliers
            $selectedSuppliers = $suppliers->random(min($supplierCount, $suppliers->count()));

            foreach ($selectedSuppliers as $index => $supplier) {
                // First supplier is preferred for products with multiple suppliers
                $isPreferred = ($index === 0 && $supplierCount > 1) || $supplierCount === 1;

                ProductSupplier::factory()
                    ->forProduct($product->id)
                    ->fromSupplier($supplier->id)
                    ->when($isPreferred, fn($factory) => $factory->preferred())
                    ->create();

                $totalRelationships++;

                if ($totalRelationships % 20 === 0) {
                    $this->command->getOutput()->progressAdvance(5);
                }

                if ($totalRelationships >= $targetRelationships) {
                    break 2;
                }
            }
        }
    }

    /**
     * Get number of suppliers for a product based on category.
     */
    protected function getSupplierCountForProduct(Product $product): int
    {
        $categoryName = $product->category?->name ?? 'Default';

        return match ($categoryName) {
            'Raw Materials' => rand(1, 2), // Was rand(3,6)
            'Consumables' => rand(1, 2), // Was rand(3,6)
            'Office Supplies' => rand(1, 2), // Was rand(3,6)
            'Electronics' => rand(1, 2), // Was rand(3,6)
            'Automotive' => rand(1, 2), // Was rand(3,6)
            'Tools' => rand(1, 2), // Was rand(3,6)
            'Furniture' => rand(1, 2), // Was rand(3,6)
            'Pharmaceuticals' => rand(1, 2), // Was rand(3,6)
            default => rand(1, 2), // Was rand(3,6)
        };
    }

    /**
     * Create specialized sourcing scenarios.
     */
    protected function createSpecializedSourcing(): void
    {
        $this->command->info("\nCreating specialized sourcing scenarios...");

        // 1. Multi-sourcing scenario (product with many suppliers)
        $this->createMultiSourcingScenario();

        // 2. Sole supplier scenario
        $this->createSoleSupplierScenario();

        // 3. Competitive pricing scenario
        $this->createCompetitivePricingScenario();

        // 4. Fast delivery vs. low cost tradeoff
        $this->createDeliveryVsCostScenario();

        // 5. Bulk discount scenario
        $this->createBulkDiscountScenario();

        // 6. Local vs. international suppliers
        $this->createLocalVsInternationalScenario();

        // 7. Preferred supplier relationships
        $this->createPreferredSupplierRelationships();

        // 8. Seasonal supplier relationships
        $this->createSeasonalRelationships();
    }

    /**
     * Create multi-sourcing scenario (product with many suppliers).
     */
    protected function createMultiSourcingScenario(): void
    {
        $this->command->info('  - Creating multi-sourcing scenario...');

        $product = Product::where('name', 'like', '%Laptop%')
            ->orWhere('name', 'like', '%Computer%')
            ->first();

        if (!$product) {
            $product = Product::factory()
                ->inCategory(Category::where('name', 'Electronics')->first()?->id ?? 1)
                ->named('Business Laptop Pro')
                ->create();
        }

        // Create multiple suppliers for this product
        $suppliers = Supplier::inRandomOrder()->limit(5)->get();

        foreach ($suppliers as $index => $supplier) {
            $isPreferred = $index === 2; // Middle supplier is preferred

            ProductSupplier::factory()
                ->forProduct($product->id)
                ->fromSupplier($supplier->id)
                ->when($isPreferred, fn($factory) => $factory->preferred())
                ->state([
                    'unit_cost' => 800 + ($index * 50) + rand(-20, 20),
                    'minimum_order_quantity' => 5 + ($index * 2),
                    'lead_time_days' => 5 + ($index * 2),
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create sole supplier scenario.
     */
    protected function createSoleSupplierScenario(): void
    {
        $this->command->info('  - Creating sole supplier scenario...');

        $product = Product::factory()
            ->named('Specialized Medical Equipment')
            ->expirable()
            ->create();

        $supplier = Supplier::factory()
            ->medical()
            ->create();

        ProductSupplier::factory()
            ->forProduct($product->id)
            ->fromSupplier($supplier->id)
            ->preferred()
            ->state([
                'unit_cost' => 5000,
                'minimum_order_quantity' => 1,
                'lead_time_days' => 14,
                'supplier_sku' => 'MED-SPEC-001',
            ])
            ->create();

        $this->command->getOutput()->progressAdvance(1);
    }

    /**
     * Create competitive pricing scenario.
     */
    protected function createCompetitivePricingScenario(): void
    {
        $this->command->info('  - Creating competitive pricing scenario...');

        $product = Product::factory()
            ->named('Premium Office Chair')
            ->inCategory(Category::where('name', 'Furniture')->first()?->id ?? 1)
            ->create();

        $suppliers = Supplier::inRandomOrder()->limit(4)->get();

        foreach ($suppliers as $index => $supplier) {
            // Create a range of prices
            $basePrice = 150;
            $price = match ($index) {
                0 => $basePrice * 0.8,  // Budget
                1 => $basePrice,         // Standard
                2 => $basePrice * 1.2,   // Premium
                3 => $basePrice * 0.9,   // Competitive
            };

            ProductSupplier::factory()
                ->forProduct($product->id)
                ->fromSupplier($supplier->id)
                ->when($index === 3, fn($factory) => $factory->preferred())
                ->withUnitCost($price)
                ->withLeadTime(match ($index) {
                    0 => 10,  // Budget takes longer
                    1 => 7,
                    2 => 4,   // Premium is faster
                    3 => 5,   // Competitive is balanced
                })
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create fast delivery vs. low cost tradeoff scenario.
     */
    protected function createDeliveryVsCostScenario(): void
    {
        $this->command->info('  - Creating delivery vs. cost scenario...');

        $product = Product::factory()
            ->named('Industrial Components')
            ->bulkItem()
            ->create();

        // Fast local supplier (expensive)
        $localSupplier = Supplier::factory()
            ->local()
            ->create();

        ProductSupplier::factory()
            ->forProduct($product->id)
            ->fromSupplier($localSupplier->id)
            ->fastDelivery()
            ->withUnitCost(45)
            ->withMinOrderQty(10)
            ->create();

        // Cheap international supplier (slow)
        $internationalSupplier = Supplier::factory()
            ->international()
            ->create();

        ProductSupplier::factory()
            ->forProduct($product->id)
            ->fromSupplier($internationalSupplier->id)
            ->internationalSupplier()
            ->withUnitCost(25)
            ->withMinOrderQty(100)
            ->create();

        // Balanced supplier (preferred)
        $balancedSupplier = Supplier::factory()
            ->create();

        ProductSupplier::factory()
            ->forProduct($product->id)
            ->fromSupplier($balancedSupplier->id)
            ->preferred()
            ->withUnitCost(35)
            ->withMinOrderQty(50)
            ->withLeadTime(7)
            ->create();

        $this->command->getOutput()->progressAdvance(3);
    }

    /**
     * Create bulk discount scenario.
     */
    protected function createBulkDiscountScenario(): void
    {
        $this->command->info('  - Creating bulk discount scenario...');

        $product = Product::factory()
            ->named('Packaging Materials')
            ->bulkItem()
            ->create();

        // Create tiered pricing through different MOQs.
        // product_suppliers has a unique (product_id, supplier_id), so each tier
        // must be represented by a different supplier row.
        $tiers = [
            ['moq' => 100, 'price' => 2.50, 'lead_time' => 3],
            ['moq' => 500, 'price' => 2.25, 'lead_time' => 5],
            ['moq' => 1000, 'price' => 2.00, 'lead_time' => 7],
            ['moq' => 5000, 'price' => 1.75, 'lead_time' => 10],
        ];

        foreach ($tiers as $index => $tier) {
            $supplier = Supplier::factory()->create([
                'company_name' => 'Bulk Packaging Supply Co Tier ' . ($index + 1),
            ]);

            ProductSupplier::factory()
                ->forProduct($product->id)
                ->fromSupplier($supplier->id)
                ->withUnitCost($tier['price'])
                ->withMinOrderQty($tier['moq'])
                ->withLeadTime($tier['lead_time'])
                ->when($index === 2, fn($factory) => $factory->preferred())
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create local vs. international suppliers scenario.
     */
    protected function createLocalVsInternationalScenario(): void
    {
        $this->command->info('  - Creating local vs. international scenario...');

        $product = Product::factory()
            ->named('Electronic Components')
            ->serialTracked()
            ->create();

        // Local suppliers (3)
        for ($i = 0; $i < 3; $i++) {
            ProductSupplier::factory()
                ->forProduct($product->id)
                ->localSupplier()
                ->when($i === 1, fn($factory) => $factory->preferred())
                ->create();
        }

        // International suppliers (4)
        $countries = ['China', 'Vietnam', 'Taiwan', 'Malaysia'];
        foreach ($countries as $country) {
            $supplier = Supplier::factory()
                ->fromCountry($country)
                ->create();

            ProductSupplier::factory()
                ->forProduct($product->id)
                ->fromSupplier($supplier->id)
                ->internationalSupplier()
                ->create();
        }

        $this->command->getOutput()->progressAdvance(7);
    }

    /**
     * Create preferred supplier relationships.
     */
    protected function createPreferredSupplierRelationships(): void
    {
        $this->command->info('  - Setting preferred suppliers...');

        // For products with multiple suppliers, set one as preferred
        $products = Product::has('suppliers', '>', 1)->get();

        foreach ($products->take(30) as $product) {
            // Randomly select one supplier to be preferred
            $productSupplier = $product->productSuppliers()->inRandomOrder()->first();

            if ($productSupplier) {
                $productSupplier->setAsPreferred();
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create seasonal supplier relationships.
     */
    protected function createSeasonalRelationships(): void
    {
        $this->command->info('  - Creating seasonal relationships...');

        $product = Product::factory()
            ->named('Seasonal Holiday Items')
            ->fastMoving()
            ->create();

        // Primary supplier (year-round)
        $primarySupplier = Supplier::factory()
            ->create(['company_name' => 'Year-Round Supplies Inc']);

        ProductSupplier::factory()
            ->forProduct($product->id)
            ->fromSupplier($primarySupplier->id)
            ->preferred()
            ->withUnitCost(15)
            ->withLeadTime(5)
            ->create();

        // Seasonal supplier (Q4 only)
        $seasonalSupplier = Supplier::factory()
            ->create(['company_name' => 'Holiday Specialists Co']);

        ProductSupplier::factory()
            ->forProduct($product->id)
            ->fromSupplier($seasonalSupplier->id)
            ->withUnitCost(12)
            ->withMinOrderQty(500)
            ->withLeadTime(3)
            ->create();

        $this->command->getOutput()->progressAdvance(2);
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nProduct-Supplier Statistics:");

        $totalRelationships = ProductSupplier::count();
        $uniqueProducts = ProductSupplier::distinct('product_id')->count('product_id');
        $uniqueSuppliers = ProductSupplier::distinct('supplier_id')->count('supplier_id');
        $preferredCount = ProductSupplier::preferred()->count();

        $avgPrice = ProductSupplier::avg('unit_cost');
        $minPrice = ProductSupplier::min('unit_cost');
        $maxPrice = ProductSupplier::max('unit_cost');
        $avgLeadTime = ProductSupplier::avg('lead_time_days');

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Relationships', $totalRelationships],
                ['Unique Products', $uniqueProducts],
                ['Unique Suppliers', $uniqueSuppliers],
                ['Avg Suppliers per Product', round($totalRelationships / max($uniqueProducts, 1), 1)],
                ['Preferred Relationships', $preferredCount],
                ['Average Unit Cost', '$' . number_format($avgPrice, 2)],
                ['Price Range', '$' . number_format($minPrice, 2) . ' - $' . number_format($maxPrice, 2)],
                ['Average Lead Time', round($avgLeadTime, 1) . ' days'],
            ]
        );

        // Show products with most suppliers
        $this->command->info("\nTop 5 Products by Supplier Count:");
        $topProducts = ProductSupplier::select('product_id', DB::raw('count(*) as supplier_count'))
            ->with('product')
            ->groupBy('product_id')
            ->orderBy('supplier_count', 'desc')
            ->limit(5)
            ->get();

        $this->command->table(
            ['Product', 'Supplier Count', 'Preferred Supplier'],
            $topProducts->map(function ($item) {
                $preferred = ProductSupplier::byProduct($item->product_id)
                    ->preferred()
                    ->with('supplier')
                    ->first();

                return [
                    $item->product?->name ?? 'Unknown',
                    $item->supplier_count,
                    $preferred?->supplier?->company_name ?? 'None',
                ];
            })->toArray()
        );

        // Show price comparison for a sample product
        $this->command->info("\nSample Price Comparison:");
        $sampleProduct = ProductSupplier::with(['product', 'supplier'])
            ->whereHas('product')
            ->inRandomOrder()
            ->first();

        if ($sampleProduct) {
            $comparison = ProductSupplier::getPriceStatistics($sampleProduct->product_id);

            $this->command->table(
                ['Metric', 'Value'],
                [
                    ['Product', $sampleProduct->product->name],
                    ['Min Price', '$' . number_format($comparison['min_price'], 2)],
                    ['Max Price', '$' . number_format($comparison['max_price'], 2)],
                    ['Avg Price', '$' . number_format($comparison['avg_price'], 2)],
                    ['Supplier Count', $comparison['supplier_count']],
                    ['Preferred Supplier', $comparison['preferred_supplier']['name'] ?? 'None'],
                ]
            );
        }
    }
}
