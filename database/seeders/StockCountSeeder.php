<?php
// database/seeders/StockCountSeeder.php

namespace Database\Seeders;

use App\Models\Inventory;
use App\Models\Location;
use App\Models\Product;
use App\Models\StockCount;
use App\Models\StockCountItem;
use App\Models\Warehouse;
use App\Models\User;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StockCountSeeder extends Seeder
{
    protected Faker $faker;

    /**
     * Number of stock counts to create
     */
    protected const STOCK_COUNT_COUNT = 150;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->faker = fake();

        // Disable foreign key checks temporarily
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        // Truncate the table
        StockCount::truncate();

        // Enable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        // Check prerequisites
        $this->checkPrerequisites();

        $this->command->info('Creating stock counts...');
        $this->command->getOutput()->progressStart(self::STOCK_COUNT_COUNT);

        // Create counts by type
        $this->createCountsByType();

        // Create specialized count scenarios
        $this->createSpecializedCounts();

        $this->command->getOutput()->progressFinish();

        // Display statistics
        $this->displayStatistics();
    }

    /**
     * Check if required data exists.
     */
    protected function checkPrerequisites(): void
    {
        if (Warehouse::count() == 0) {
            $this->command->warn('No warehouses found. Running WarehouseSeeder first...');
            $this->call(WarehouseSeeder::class);
        }

        if (User::count() == 0) {
            $this->command->warn('No users found. Running UserSeeder first...');
            $this->call(UserSeeder::class);
        }
    }

    /**
     * Create counts by type distribution.
     */
    protected function createCountsByType(): void
    {
        $typeDistribution = [
            StockCount::TYPE_CYCLE => 60,
            StockCount::TYPE_SPOT => 30,
            StockCount::TYPE_FULL => 40,
            StockCount::TYPE_ANNUAL => 10,
        ];

        foreach ($typeDistribution as $type => $count) {
            $this->command->info("\nCreating {$count} {$type} counts...");

            for ($i = 0; $i < $count; $i++) {
                $statusMethod = $this->getRandomStatusMethod();

                StockCount::factory()
                    ->{$type}()
                    ->{$statusMethod}()
                    ->withItems(rand(5, 30))
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Get random status method.
     */
    protected function getRandomStatusMethod(): string
    {
        $statuses = [
            'draft' => 15,
            'inProgress' => 20,
            'completed' => 30,
            'verified' => 30,
            'cancelled' => 5,
        ];

        $rand = $this->faker->numberBetween(1, 100);
        $cumulative = 0;

        foreach ($statuses as $method => $probability) {
            $cumulative += $probability;
            if ($rand <= $cumulative) {
                return $method;
            }
        }

        return 'draft';
    }

    /**
     * Create specialized count scenarios.
     */
    protected function createSpecializedCounts(): void
    {
        $this->command->info("\nCreating specialized stock counts...");

        // 1. Annual physical inventory
        $this->createAnnualInventory();

        // 2. High-accuracy counts
        $this->createHighAccuracyCounts();

        // 3. Significant variance counts
        $this->createSignificantVarianceCounts();

        // 4. Zero variance counts
        $this->createZeroVarianceCounts();

        // 5. Problem area counts (high shrinkage)
        $this->createProblemAreaCounts();

        // 6. Weekend counts
        $this->createWeekendCounts();

        // 7. Month-end counts
        $this->createMonthEndCounts();

        // 8. Quarter-end counts
        $this->createQuarterEndCounts();

        // 9. New warehouse counts
        $this->createNewWarehouseCounts();

        // 10. Abandoned/cancelled counts
        $this->createAbandonedCounts();

        // 11. Fast-mover cycle counts
        $this->createFastMoverCounts();

        // 12. Slow-mover cycle counts
        $this->createSlowMoverCounts();
    }

    /**
     * Create annual physical inventory.
     */
    protected function createAnnualInventory(): void
    {
        $this->command->info('  - Creating annual physical inventory...');

        $warehouses = Warehouse::all();

        foreach ($warehouses as $warehouse) {
            StockCount::factory()
                ->annualCount()
                ->verified()
                ->forWarehouse($warehouse->id)
                ->withItems(100)
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create high-accuracy counts.
     */
    protected function createHighAccuracyCounts(): void
    {
        $this->command->info('  - Creating high-accuracy counts...');

        for ($i = 0; $i < 8; $i++) {
            $count = StockCount::factory()
                ->cycleCount()
                ->verified()
                ->create();

            // Add items with exact matches (zero variance)
            if (class_exists('StockCountItem')) {
                $products = Product::inRandomOrder()->limit(15)->get();
                $locations = Location::where('warehouse_id', $count->warehouse_id)->get();

                foreach ($products as $product) {
                    $location = $locations->random();
                    $expectedQty = $this->faker->numberBetween(5, 50);

                    StockCountItem::factory()
                        ->forStockCount($count->id)
                        ->forProduct($product->id)
                        ->atLocation($location->id)
                        ->withQuantities($expectedQty, $expectedQty)
                        ->withStatus(StockCount::STATUS_VERIFIED)
                        ->create();
                }
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create significant variance counts.
     */
    protected function createSignificantVarianceCounts(): void
    {
        $this->command->info('  - Creating significant variance counts...');

        for ($i = 0; $i < 6; $i++) {
            StockCount::factory()
                ->cycleCount()
                ->withSignificantVariances()
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create zero variance counts.
     */
    protected function createZeroVarianceCounts(): void
    {
        $this->command->info('  - Creating zero variance counts...');

        for ($i = 0; $i < 5; $i++) {
            StockCount::factory()
                ->cycleCount()
                ->withZeroVariances()
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create problem area counts (high shrinkage).
     */
    protected function createProblemAreaCounts(): void
    {
        $this->command->info('  - Creating problem area counts...');

        $problemZones = ['A', 'B', 'C', 'D']; // Zones with high shrinkage

        foreach ($problemZones as $zone) {
            $warehouse = Warehouse::inRandomOrder()->first();

            $count = StockCount::factory()
                ->spotCheck()
                ->completed()
                ->forWarehouse($warehouse->id)
                ->state([
                    'notes' => "Problem area count - Zone {$zone} - High shrinkage detected",
                ])
                ->create();

            // Add items with significant negative variances
            if (class_exists('StockCountItem')) {
                $locations = Location::where('warehouse_id', $warehouse->id)
                    ->where('zone', $zone)
                    ->get();

                foreach ($locations->take(5) as $location) {
                    $inventory = Inventory::where('location_id', $location->id)
                        ->inRandomOrder()
                        ->first();

                    if ($inventory) {
                        $expectedQty = $inventory->quantity_on_hand;
                        // 20-40% shrinkage
                        $countedQty = (int) ($expectedQty * (1 - $this->faker->randomFloat(2, 0.2, 0.4)));

                        StockCountItem::factory()
                            ->forStockCount($count->id)
                            ->forProduct($inventory->product_id)
                            ->atLocation($location->id)
                            ->withQuantities($expectedQty, $countedQty)
                            ->withStatus(StockCount::STATUS_COMPLETED)
                            ->create();
                    }
                }
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create weekend counts.
     */
    protected function createWeekendCounts(): void
    {
        $this->command->info('  - Creating weekend counts...');

        for ($i = 0; $i < 5; $i++) {
            // Find a weekend date
            $weekendDate = now()->subDays(rand(1, 60));
            while ($weekendDate->dayOfWeek !== 0 && $weekendDate->dayOfWeek !== 6) {
                $weekendDate = $weekendDate->subDay();
            }

            StockCount::factory()
                ->fullCount()
                ->verified()
                ->state([
                    'count_date' => $weekendDate,
                    'notes' => 'Weekend count - minimal disruption to operations',
                ])
                ->withItems(30)
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create month-end counts.
     */
    protected function createMonthEndCounts(): void
    {
        $this->command->info('  - Creating month-end counts...');

        for ($month = 1; $month <= 6; $month++) {
            $monthEndDate = now()->subMonths($month)->endOfMonth();

            StockCount::factory()
                ->cycleCount()
                ->verified()
                ->state([
                    'count_date' => $monthEndDate,
                    'notes' => 'Month-end cycle count',
                ])
                ->withItems(20)
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create quarter-end counts.
     */
    protected function createQuarterEndCounts(): void
    {
        $this->command->info('  - Creating quarter-end counts...');

        for ($quarter = 1; $quarter <= 4; $quarter++) {
            $quarterEndDate = now()->subQuarters($quarter)->endOfQuarter();

            StockCount::factory()
                ->fullCount()
                ->verified()
                ->state([
                    'count_date' => $quarterEndDate,
                    'notes' => "Q{$quarter} {$quarterEndDate->year} - Quarterly inventory",
                ])
                ->withItems(50)
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create new warehouse counts.
     */
    protected function createNewWarehouseCounts(): void
    {
        $this->command->info('  - Creating new warehouse counts...');

        $newWarehouses = Warehouse::where('name', 'like', '%New%')
            ->orWhere('created_at', '>', now()->subMonths(3))
            ->get();

        foreach ($newWarehouses->take(3) as $warehouse) {
            StockCount::factory()
                ->fullCount()
                ->verified()
                ->forWarehouse($warehouse->id)
                ->state([
                    'notes' => 'Initial inventory for new warehouse',
                ])
                ->withItems(50)
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create abandoned/cancelled counts.
     */
    protected function createAbandonedCounts(): void
    {
        $this->command->info('  - Creating abandoned/cancelled counts...');

        for ($i = 0; $i < 5; $i++) {
            StockCount::factory()
                ->cycleCount()
                ->cancelled()
                ->withItems(10)
                ->state([
                    'notes' => 'Count abandoned - ' . $this->faker->randomElement([
                        'staff shortage',
                        'system issues',
                        'emergency operations',
                        'incorrect scope',
                        'double-booked',
                    ]),
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create fast-mover cycle counts.
     */
    protected function createFastMoverCounts(): void
    {
        $this->command->info('  - Creating fast-mover cycle counts...');

        $fastMovers = Product::whereHas('inventory', function ($q) {
            $q->where('quantity_on_hand', '>', 100);
        })->limit(10)->get();

        foreach ($fastMovers->chunk(5) as $chunk) {
            $count = StockCount::factory()
                ->cycleCount()
                ->verified()
                ->create();

            foreach ($chunk as $product) {
                $location = Location::whereHas('inventory', function ($q) use ($product) {
                    $q->where('product_id', $product->id);
                })->inRandomOrder()->first();

                if ($location) {
                    $inventory = Inventory::where('product_id', $product->id)
                        ->where('location_id', $location->id)
                        ->first();

                    $expectedQty = $inventory?->quantity_on_hand ?? 100;

                    StockCountItem::factory()
                        ->forStockCount($count->id)
                        ->forProduct($product->id)
                        ->atLocation($location->id)
                        ->withQuantities($expectedQty, $expectedQty)
                        ->withStatus(StockCount::STATUS_VERIFIED)
                        ->create();
                }
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create slow-mover cycle counts.
     */
    protected function createSlowMoverCounts(): void
    {
        $this->command->info('  - Creating slow-mover cycle counts...');

        $slowMovers = Product::whereHas('inventory', function ($q) {
            $q->where('quantity_on_hand', '<', 10)
                ->where('quantity_on_hand', '>', 0);
        })->limit(10)->get();

        foreach ($slowMovers->chunk(5) as $chunk) {
            $count = StockCount::factory()
                ->cycleCount()
                ->verified()
                ->create();

            foreach ($chunk as $product) {
                $location = Location::whereHas('inventory', function ($q) use ($product) {
                    $q->where('product_id', $product->id);
                })->inRandomOrder()->first();

                if ($location) {
                    $inventory = Inventory::where('product_id', $product->id)
                        ->where('location_id', $location->id)
                        ->first();

                    $expectedQty = $inventory?->quantity_on_hand ?? 5;

                    StockCountItem::factory()
                        ->forStockCount($count->id)
                        ->forProduct($product->id)
                        ->atLocation($location->id)
                        ->withQuantities($expectedQty, $expectedQty)
                        ->withStatus(StockCount::STATUS_VERIFIED)
                        ->create();
                }
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nStock Count Statistics:");

        $stats = StockCount::getStatistics(365);

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Counts', $stats['total_counts']],
                ['Verified Counts', $stats['verified_counts']],
                ['Cancelled Counts', $stats['cancelled_counts']],
                ['Average Accuracy', $stats['average_accuracy'] . '%'],
                ['Completion Rate', $stats['completion_rate'] . '%'],
            ]
        );

        // Show counts by type
        $this->command->info("\nCounts by Type:");
        $byType = StockCount::select('count_type', DB::raw('count(*) as count'))
            ->groupBy('count_type')
            ->get()
            ->mapWithKeys(function ($item) {
                return [$item->count_type => $item->count];
            });

        $typeData = [];
        foreach (StockCount::$countTypes as $type => $label) {
            $typeData[] = [$label, $byType[$type] ?? 0];
        }

        $this->command->table(['Type', 'Count'], $typeData);

        // Show counts by status
        $this->command->info("\nCounts by Status:");
        $byStatus = StockCount::select('status', DB::raw('count(*) as count'))
            ->groupBy('status')
            ->get()
            ->mapWithKeys(function ($item) {
                return [$item->status => $item->count];
            });

        $statusData = [];
        foreach (StockCount::$statuses as $status => $label) {
            $statusData[] = [$label, $byStatus[$status] ?? 0];
        }

        $this->command->table(['Status', 'Count'], $statusData);

        // Show accuracy by warehouse
        $this->command->info("\nAccuracy by Warehouse:");
        $accuracyByWarehouse = StockCount::where('status', StockCount::STATUS_VERIFIED)
            ->with('warehouse')
            ->get()
            ->groupBy('warehouse_id')
            ->map(function ($counts) {
                return [
                    'warehouse' => $counts->first()->warehouse->name,
                    'accuracy' => round($counts->avg('accuracy'), 2),
                    'counts' => $counts->count(),
                ];
            });

        $this->command->table(
            ['Warehouse', 'Avg Accuracy', 'Counts'],
            $accuracyByWarehouse->map(fn($item) => [
                $item['warehouse'],
                $item['accuracy'] . '%',
                $item['counts'],
            ])->toArray()
        );

        // Show counts with significant variances
        $significantVariance = StockCount::withSignificantVariances(10)->count();
        if ($significantVariance > 0) {
            $this->command->warn("\n⚠️  There are {$significantVariance} counts with significant variances (>10%)!");
        }
    }
}
