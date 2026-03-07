<?php
// database/seeders/StockCountItemSeeder.php

namespace Database\Seeders;

use App\Models\Inventory;
use App\Models\StockCountItem;
use App\Models\StockCount;
use App\Models\Product;
use App\Models\Location;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class StockCountItemSeeder extends Seeder
{
    protected Faker $faker;

    use ChecksDependencies;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->faker = fake();

        if (!$this->checkDependencies([
            StockCount::class => 'No stock counts found',
            Product::class => 'No products found',
            Location::class => 'No locations found',
        ])) {
            return;
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        StockCountItem::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating stock count items...');
        $this->command->getOutput()->progressStart(100);

        $this->createItemsForExistingCounts();
        $this->createSpecializedVarianceItems();

        $this->command->getOutput()->progressFinish();
        $this->displayStatistics();
    }

    /**
     * Check if required data exists.
     */
    protected function checkPrerequisites(): void
    {
        if (StockCount::count() == 0) {
            $this->command->warn('No stock counts found. Running StockCountSeeder first...');
            $this->call(StockCountSeeder::class);
        }

        if (Product::count() == 0) {
            $this->command->warn('No products found. Running ProductSeeder first...');
            $this->call(ProductSeeder::class);
        }

        if (Location::count() == 0) {
            $this->command->warn('No locations found. Running LocationSeeder first...');
            $this->call(LocationSeeder::class);
        }
    }

    /**
     * Create items for existing stock counts.
     */
    protected function createItemsForExistingCounts(): void
    {
        $stockCounts = StockCount::with('warehouse')->get();

        foreach ($stockCounts as $stockCount) {
            // Number of items per count based on count type
            $itemCount = $this->getItemCountForCount($stockCount);

            // Get locations for this warehouse
            $locations = Location::where('warehouse_id', $stockCount->warehouse_id)
                ->inRandomOrder()
                ->limit($itemCount)
                ->get();

            if ($locations->isEmpty()) {
                $locations = Location::factory()
                    ->forWarehouse($stockCount->warehouse_id)
                    ->count(5)
                    ->create();
            }

            foreach ($locations as $location) {
                $product = Product::inRandomOrder()->first();

                // Get expected quantity from inventory
                $inventory = Inventory::where('product_id', $product->id)
                    ->where('location_id', $location->id)
                    ->first();

                $expectedQty = $inventory?->quantity_on_hand ?? $this->faker->numberBetween(0, 50);

                // Determine item status based on count status
                $statusMethod = $this->getStatusMethodForCount($stockCount->status);

                StockCountItem::factory()
                    ->forStockCount($stockCount->id)
                    ->forProduct($product->id)
                    ->atLocation($location->id)
                    ->withQuantities($expectedQty, 0)
                    ->{$statusMethod}()
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Get number of items for a count.
     */
    protected function getItemCountForCount(StockCount $stockCount): int
    {
        return match ($stockCount->count_type) {
            StockCount::TYPE_ANNUAL => $this->faker->numberBetween(50, 100),
            StockCount::TYPE_FULL => $this->faker->numberBetween(30, 60),
            StockCount::TYPE_CYCLE => $this->faker->numberBetween(10, 30),
            StockCount::TYPE_SPOT => $this->faker->numberBetween(5, 15),
            default => $this->faker->numberBetween(5, 20),
        };
    }

    /**
     * Get status method based on count status.
     */
    protected function getStatusMethodForCount(string $countStatus): string
    {
        return match ($countStatus) {
            StockCount::STATUS_DRAFT => 'pending',
            StockCount::STATUS_IN_PROGRESS => $this->faker->randomElement(['pending', 'counted']),
            StockCount::STATUS_COMPLETED => $this->faker->randomElement(['counted', 'verified']),
            StockCount::STATUS_VERIFIED => $this->faker->randomElement(['verified', 'approved']),
            default => 'pending',
        };
    }

    /**
     * Create specialized variance scenarios.
     */
    protected function createSpecializedVarianceItems(): void
    {
        $this->command->info("\nCreating specialized variance scenarios...");

        // 1. Zero variance items
        $this->createZeroVarianceItems();

        // 2. Positive variance items
        $this->createPositiveVarianceItems();

        // 3. Negative variance items
        $this->createNegativeVarianceItems();

        // 4. Significant variance items
        $this->createSignificantVarianceItems();

        // 5. Damage-related variances
        $this->createDamageVarianceItems();

        // 6. Theft/loss variances
        $this->createTheftVarianceItems();

        // 7. System error variances
        $this->createSystemErrorVarianceItems();

        // 8. Supplier error variances
        $this->createSupplierErrorVarianceItems();

        // 9. Misplacement variances
        $this->createMisplacementVarianceItems();

        // 10. Return-related variances
        $this->createReturnVarianceItems();

        // 11. Rejected items
        $this->createRejectedItems();

        // 12. High-value item variances
        $this->createHighValueVarianceItems();

        // 13. Bulk item variances
        $this->createBulkItemVarianceItems();

        // 14. Expired item variances
        $this->createExpiredItemVarianceItems();

        // 15. New product variances
        $this->createNewProductVarianceItems();
    }

    /**
     * Create zero variance items.
     */
    protected function createZeroVarianceItems(): void
    {
        $this->command->info('  - Creating zero variance items...');

        $verifiedCounts = StockCount::verified()->get();

        foreach ($verifiedCounts->take(10) as $count) {
            StockCountItem::factory()
                ->forStockCount($count->id)
                ->approved()
                ->accurate()
                ->count(5)
                ->create();

            $this->command->getOutput()->progressAdvance(3);
        }
    }

    /**
     * Create positive variance items.
     */
    protected function createPositiveVarianceItems(): void
    {
        $this->command->info('  - Creating positive variance items...');

        $counts = StockCount::verified()->inRandomOrder()->limit(8)->get();

        foreach ($counts as $count) {
            StockCountItem::factory()
                ->forStockCount($count->id)
                ->approved()
                ->positiveVariance()
                ->count(3)
                ->create();

            $this->command->getOutput()->progressAdvance(2);
        }
    }

    /**
     * Create negative variance items.
     */
    protected function createNegativeVarianceItems(): void
    {
        $this->command->info('  - Creating negative variance items...');

        $counts = StockCount::verified()->inRandomOrder()->limit(8)->get();

        foreach ($counts as $count) {
            StockCountItem::factory()
                ->forStockCount($count->id)
                ->approved()
                ->negativeVariance()
                ->count(3)
                ->create();

            $this->command->getOutput()->progressAdvance(2);
        }
    }

    /**
     * Create significant variance items.
     */
    protected function createSignificantVarianceItems(): void
    {
        $this->command->info('  - Creating significant variance items...');

        $counts = StockCount::withSignificantVariances(10)->get();

        foreach ($counts->take(5) as $count) {
            StockCountItem::factory()
                ->forStockCount($count->id)
                ->significantVariance()
                ->count(2)
                ->create();

            $this->command->getOutput()->progressAdvance(2);
        }
    }

    /**
     * Create damage-related variances.
     */
    protected function createDamageVarianceItems(): void
    {
        $this->command->info('  - Creating damage-related variances...');

        $counts = StockCount::inRandomOrder()->limit(5)->get();

        foreach ($counts as $count) {
            StockCountItem::factory()
                ->forStockCount($count->id)
                ->negativeVariance()
                ->withVarianceReason(StockCountItem::REASON_DAMAGE)
                ->state([
                    'notes' => 'Items damaged during ' . $this->faker->randomElement([
                        'handling',
                        'storage',
                        'transit',
                        'inspection',
                    ]),
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create theft/loss variances.
     */
    protected function createTheftVarianceItems(): void
    {
        $this->command->info('  - Creating theft/loss variances...');

        $counts = StockCount::inRandomOrder()->limit(4)->get();

        foreach ($counts as $count) {
            StockCountItem::factory()
                ->forStockCount($count->id)
                ->negativeVariance()
                ->withVarianceReason(StockCountItem::REASON_THEFT)
                ->state([
                    'notes' => 'Potential theft - security notified',
                    'variance_percentage' => $this->faker->randomFloat(2, 20, 100),
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create system error variances.
     */
    protected function createSystemErrorVarianceItems(): void
    {
        $this->command->info('  - Creating system error variances...');

        $counts = StockCount::inRandomOrder()->limit(6)->get();

        foreach ($counts as $count) {
            StockCountItem::factory()
                ->forStockCount($count->id)
                ->positiveVariance()
                ->withVarianceReason(StockCountItem::REASON_SYSTEM_ERROR)
                ->state([
                    'notes' => 'System calculation error - transactions missing',
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create supplier error variances.
     */
    protected function createSupplierErrorVarianceItems(): void
    {
        $this->command->info('  - Creating supplier error variances...');

        $counts = StockCount::inRandomOrder()->limit(5)->get();

        foreach ($counts as $count) {
            StockCountItem::factory()
                ->forStockCount($count->id)
                ->positiveVariance()
                ->withVarianceReason(StockCountItem::REASON_SUPPLIER_ERROR)
                ->state([
                    'notes' => 'Supplier shipped extra units',
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create misplacement variances.
     */
    protected function createMisplacementVarianceItems(): void
    {
        $this->command->info('  - Creating misplacement variances...');

        $counts = StockCount::inRandomOrder()->limit(7)->get();

        foreach ($counts as $count) {
            StockCountItem::factory()
                ->forStockCount($count->id)
                ->negativeVariance()
                ->withVarianceReason(StockCountItem::REASON_MISPLACEMENT)
                ->state([
                    'notes' => 'Items found in wrong location',
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create return-related variances.
     */
    protected function createReturnVarianceItems(): void
    {
        $this->command->info('  - Creating return-related variances...');

        $counts = StockCount::inRandomOrder()->limit(4)->get();

        foreach ($counts as $count) {
            StockCountItem::factory()
                ->forStockCount($count->id)
                ->positiveVariance()
                ->withVarianceReason(StockCountItem::REASON_RETURN)
                ->state([
                    'notes' => 'Customer returns not processed in system',
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create rejected items.
     */
    protected function createRejectedItems(): void
    {
        $this->command->info('  - Creating rejected items...');

        $counts = StockCount::inRandomOrder()->limit(3)->get();

        foreach ($counts as $count) {
            StockCountItem::factory()
                ->forStockCount($count->id)
                ->rejected()
                ->count(2)
                ->create();

            $this->command->getOutput()->progressAdvance(2);
        }
    }

    /**
     * Create high-value item variances.
     */
    protected function createHighValueVarianceItems(): void
    {
        $this->command->info('  - Creating high-value item variances...');

        $highValueProducts = Product::whereHas('productSuppliers', function ($q) {
            $q->where('unit_cost', '>', 500);
        })->limit(5)->get();

        $counts = StockCount::verified()->inRandomOrder()->limit(3)->get();

        foreach ($counts as $count) {
            foreach ($highValueProducts as $product) {
                $location = Location::where('warehouse_id', $count->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                $expectedQty = $this->faker->numberBetween(1, 10);
                $variance = $this->faker->numberBetween(-2, 2);

                StockCountItem::factory()
                    ->forStockCount($count->id)
                    ->forProduct($product->id)
                    ->atLocation($location->id)
                    ->withQuantities($expectedQty, max(0, $expectedQty + $variance))
                    ->approved()
                    ->withVarianceReason($variance < 0 ? StockCountItem::REASON_THEFT : StockCountItem::REASON_SYSTEM_ERROR)
                    ->state([
                        'notes' => 'High-value item - variance requires investigation',
                    ])
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create bulk item variances.
     */
    protected function createBulkItemVarianceItems(): void
    {
        $this->command->info('  - Creating bulk item variances...');

        $bulkProducts = Product::whereHas('category', function ($q) {
            $q->where('name', 'like', '%Bulk%')
                ->orWhere('name', 'like', '%Raw Materials%');
        })->limit(5)->get();

        $counts = StockCount::verified()->inRandomOrder()->limit(3)->get();

        foreach ($counts as $count) {
            foreach ($bulkProducts as $product) {
                $location = Location::where('warehouse_id', $count->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                $expectedQty = $this->faker->numberBetween(500, 5000);
                $variance = $this->faker->numberBetween(-200, 200);

                StockCountItem::factory()
                    ->forStockCount($count->id)
                    ->forProduct($product->id)
                    ->atLocation($location->id)
                    ->withQuantities($expectedQty, max(0, $expectedQty + $variance))
                    ->approved()
                    ->withVarianceReason(StockCountItem::REASON_SYSTEM_ERROR)
                    ->state([
                        'notes' => 'Bulk item - variance within acceptable range',
                    ])
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create expired item variances.
     */
    protected function createExpiredItemVarianceItems(): void
    {
        $this->command->info('  - Creating expired item variances...');

        $expirableProducts = Product::where('is_expirable', true)->limit(5)->get();

        $counts = StockCount::inRandomOrder()->limit(3)->get();

        foreach ($counts as $count) {
            foreach ($expirableProducts as $product) {
                $location = Location::where('warehouse_id', $count->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                $expectedQty = $this->faker->numberBetween(10, 50);
                $expiredQty = $this->faker->numberBetween(1, 10);
                $countedQty = $expectedQty - $expiredQty;

                StockCountItem::factory()
                    ->forStockCount($count->id)
                    ->forProduct($product->id)
                    ->atLocation($location->id)
                    ->withQuantities($expectedQty, $countedQty)
                    ->approved()
                    ->withVarianceReason(StockCountItem::REASON_DAMAGE)
                    ->state([
                        'notes' => "{$expiredQty} units expired and removed",
                    ])
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create new product variances.
     */
    protected function createNewProductVarianceItems(): void
    {
        $this->command->info('  - Creating new product variances...');

        $newProducts = Product::where('created_at', '>', now()->subMonths(3))
            ->limit(5)
            ->get();

        $counts = StockCount::verified()->inRandomOrder()->limit(2)->get();

        foreach ($counts as $count) {
            foreach ($newProducts as $product) {
                $location = Location::where('warehouse_id', $count->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                StockCountItem::factory()
                    ->forStockCount($count->id)
                    ->forProduct($product->id)
                    ->atLocation($location->id)
                    ->accurate()
                    ->approved()
                    ->state([
                        'notes' => 'New product - initial count verification',
                    ])
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nStock Count Item Statistics:");

        $totalItems = StockCountItem::count();
        $pendingItems = StockCountItem::pending()->count();
        $countedItems = StockCountItem::counted()->count();
        $verifiedItems = StockCountItem::verified()->count();
        $approvedItems = StockCountItem::approved()->count();
        $rejectedItems = StockCountItem::rejected()->count();

        $withVariance = StockCountItem::withVariance()->count();
        $withoutVariance = StockCountItem::withoutVariance()->count();
        $positiveVariance = StockCountItem::positiveVariance()->count();
        $negativeVariance = StockCountItem::negativeVariance()->count();

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Items', $totalItems],
                ['Pending', $pendingItems],
                ['Counted', $countedItems],
                ['Verified', $verifiedItems],
                ['Approved', $approvedItems],
                ['Rejected', $rejectedItems],
                ['With Variance', $withVariance],
                ['Without Variance', $withoutVariance],
                ['Positive Variance', $positiveVariance],
                ['Negative Variance', $negativeVariance],
            ]
        );

        // Show variance by reason
        $this->command->info("\nVariance by Reason:");
        $byReason = StockCountItem::whereNotNull('variance_reason')
            ->select('variance_reason', DB::raw('count(*) as count'), DB::raw('sum(variance_quantity) as total_variance'))
            ->groupBy('variance_reason')
            ->get();

        $this->command->table(
            ['Reason', 'Count', 'Total Variance'],
            $byReason->map(function ($item) {
                return [
                    StockCountItem::$varianceReasons[$item->variance_reason] ?? $item->variance_reason,
                    $item->count,
                    $item->total_variance,
                ];
            })->toArray()
        );

        // Show product variance analysis for a sample product
        $sampleProduct = Product::inRandomOrder()->first();
        if ($sampleProduct) {
            $analysis = StockCountItem::getProductVarianceAnalysis($sampleProduct->id, 90);

            $this->command->info("\nProduct Variance Analysis: {$sampleProduct->name}");
            $this->command->table(
                ['Metric', 'Value'],
                [
                    ['Counts', $analysis['counts']],
                    ['Avg Variance', $analysis['avg_variance']],
                    ['Avg Variance %', $analysis['avg_variance_percentage'] . '%'],
                    ['Total Variance', $analysis['total_variance']],
                    ['Total Variance Value', '$' . number_format($analysis['total_variance_value'], 2)],
                    ['Accuracy', $analysis['accuracy'] . '%'],
                    ['Most Common Reason', $analysis['most_common_reason'] ?? 'N/A'],
                ]
            );
        }
    }
}
