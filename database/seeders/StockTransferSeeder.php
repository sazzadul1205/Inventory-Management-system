<?php
// database/seeders/StockTransferSeeder.php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\StockTransfer;
use App\Models\StockTransferItem;
use App\Models\Warehouse;
use App\Models\User;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class StockTransferSeeder extends Seeder
{
    protected Faker $faker;

    use ChecksDependencies;

    /**
     * Number of stock transfers to create
     */
    protected const TRANSFER_COUNT = 5; // Was 150

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->faker = fake();

        if (!$this->checkDependencies([
            Warehouse::class => 'No warehouses found',
            User::class => 'No users found',
        ])) {
            return;
        }

        if (Warehouse::count() < 2) {
            $this->command->error('❌ Need at least 2 warehouses to create stock transfers');
            return;
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        StockTransfer::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating stock transfers...');
        $this->command->getOutput()->progressStart(self::TRANSFER_COUNT);

        $this->createTransfersByStatus();
        $this->createSpecializedTransfers();

        $this->command->getOutput()->progressFinish();
        $this->displayStatistics();
    }

    /**
     * Check if required data exists.
     */
    protected function checkPrerequisites(): void
    {
        if (Warehouse::count() < 2) {
            $this->command->warn('Need at least 2 warehouses. Running WarehouseSeeder first...');
            $this->call(WarehouseSeeder::class);
        }

        if (User::count() == 0) {
            $this->command->warn('No users found. Running UserSeeder first...');
            $this->call(UserSeeder::class);
        }
    }

    /**
     * Create transfers by status distribution.
     */
    protected function createTransfersByStatus(): void
    {
        $statusDistribution = [
            StockTransfer::STATUS_DRAFT => 2,
            StockTransfer::STATUS_PENDING => 2,
            StockTransfer::STATUS_APPROVED => 2,
            StockTransfer::STATUS_SHIPPED => 2,
            StockTransfer::STATUS_PARTIALLY_RECEIVED => 2,
            StockTransfer::STATUS_RECEIVED => 3,
            StockTransfer::STATUS_CANCELLED => 1,
        ];

        // Map status constants to factory method names (camelCase)
        $statusMethodMap = [
            StockTransfer::STATUS_DRAFT => 'draft',
            StockTransfer::STATUS_PENDING => 'pending',
            StockTransfer::STATUS_APPROVED => 'approved',
            StockTransfer::STATUS_SHIPPED => 'shipped',
            StockTransfer::STATUS_PARTIALLY_RECEIVED => 'partiallyReceived', // Note: camelCase
            StockTransfer::STATUS_RECEIVED => 'received',
            StockTransfer::STATUS_CANCELLED => 'cancelled',
        ];

        foreach ($statusDistribution as $status => $count) {
            $this->command->info("\nCreating {$count} {$status} transfers...");

            for ($i = 0; $i < $count; $i++) {
                StockTransfer::factory()
                    ->{$statusMethodMap[$status]}() // Use the mapped method name
                    ->withItems(rand(2, 5))
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create specialized transfer scenarios.
     */
    protected function createSpecializedTransfers(): void
    {
        $this->command->info("\nCreating specialized stock transfers...");

        // 1. Replenishment transfers
        $this->createReplenishmentTransfers();

        // 2. Emergency transfers
        $this->createEmergencyTransfers();

        // 3. Inter-warehouse balancing
        $this->createBalancingTransfers();

        // 4. Returns to main warehouse
        $this->createReturnTransfers();

        // 5. Seasonal transfers
        $this->createSeasonalTransfers();

        // 6. High-value item transfers
        $this->createHighValueTransfers();

        // 7. Bulk item transfers
        $this->createBulkTransfers();

        // 8. Partial shipment transfers
        $this->createPartialShipmentTransfers();

        // 9. Overdue transfers
        $this->createOverdueTransfers();

        // 10. Transfers with tracking
        $this->createTrackedTransfers();

        // 11. Warehouse consolidation
        $this->createConsolidationTransfers();

        // 12. New warehouse setup
        $this->createNewWarehouseTransfers();
    }

    /**
     * Create replenishment transfers.
     */
    protected function createReplenishmentTransfers(): void
    {
        $this->command->info('  - Creating replenishment transfers...');

        $mainWarehouse = Warehouse::where('name', 'like', '%Main%')->first() ?? Warehouse::first();
        $satelliteWarehouses = Warehouse::where('id', '!=', $mainWarehouse->id)->limit(3)->get();

        foreach ($satelliteWarehouses as $satellite) {
            for ($i = 0; $i < 3; $i++) {
                StockTransfer::factory()
                    ->fromWarehouse($mainWarehouse->id)
                    ->toWarehouse($satellite->id)
                    ->received()
                    ->withItems(rand(3, 6))
                    ->state([
                        'notes' => 'Regular replenishment transfer',
                        'request_date' => $this->faker->dateTimeBetween('-2 months', '-1 week'),
                    ])
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create emergency transfers.
     */
    protected function createEmergencyTransfers(): void
    {
        $this->command->info('  - Creating emergency transfers...');

        for ($i = 0; $i < 5; $i++) {
            $fromWarehouse = Warehouse::inRandomOrder()->first();
            $toWarehouse = Warehouse::where('id', '!=', $fromWarehouse->id)
                ->inRandomOrder()
                ->first();

            StockTransfer::factory()
                ->fromWarehouse($fromWarehouse->id)
                ->toWarehouse($toWarehouse->id)
                ->shipped()
                ->withItems(rand(1, 3))
                ->state([
                    'notes' => 'EMERGENCY TRANSFER - Urgent stock requirement',
                    'expected_delivery_date' => now()->addDays(1),
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create balancing transfers.
     */
    protected function createBalancingTransfers(): void
    {
        $this->command->info('  - Creating balancing transfers...');

        $warehouses = Warehouse::all();

        for ($i = 0; $i < 6; $i++) {
            $fromWarehouse = $warehouses->random();
            $toWarehouse = $warehouses->where('id', '!=', $fromWarehouse->id)->random();

            StockTransfer::factory()
                ->fromWarehouse($fromWarehouse->id)
                ->toWarehouse($toWarehouse->id)
                ->received()
                ->withItems(rand(2, 4))
                ->state([
                    'notes' => 'Stock balancing transfer',
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create return transfers.
     */
    protected function createReturnTransfers(): void
    {
        $this->command->info('  - Creating return transfers...');

        $mainWarehouse = Warehouse::where('name', 'like', '%Main%')->first() ?? Warehouse::first();
        $satelliteWarehouses = Warehouse::where('id', '!=', $mainWarehouse->id)->limit(3)->get();

        foreach ($satelliteWarehouses as $satellite) {
            StockTransfer::factory()
                ->fromWarehouse($satellite->id)
                ->toWarehouse($mainWarehouse->id)
                ->received()
                ->withItems(rand(2, 4))
                ->state([
                    'notes' => 'Return to main warehouse',
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create seasonal transfers.
     */
    protected function createSeasonalTransfers(): void
    {
        $this->command->info('  - Creating seasonal transfers...');

        $seasonalWarehouse = Warehouse::where('name', 'like', '%Seasonal%')->first();
        if (!$seasonalWarehouse) {
            $seasonalWarehouse = Warehouse::factory()->create(['name' => 'Seasonal Distribution Center']);
        }

        $mainWarehouse = Warehouse::first();

        for ($i = 0; $i < 4; $i++) {
            StockTransfer::factory()
                ->fromWarehouse($mainWarehouse->id)
                ->toWarehouse($seasonalWarehouse->id)
                ->received()
                ->withItems(rand(4, 8))
                ->state([
                    'notes' => 'Seasonal inventory deployment',
                    'request_date' => $this->faker->dateTimeBetween('-4 months', '-2 months'),
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create high-value item transfers.
     */
    protected function createHighValueTransfers(): void
    {
        $this->command->info('  - Creating high-value transfers...');

        for ($i = 0; $i < 4; $i++) {
            $transfer = StockTransfer::factory()
                ->approved()
                ->create();

            // Add high-value items
            if (class_exists('StockTransferItem')) {
                $highValueProducts = Product::whereHas('productSuppliers', function ($q) {
                    $q->where('unit_cost', '>', 500);
                })->limit(2)->get();

                foreach ($highValueProducts as $product) {
                    StockTransferItem::factory()
                        ->forStockTransfer($transfer->id)
                        ->forProduct($product->id)
                        ->withQuantities(rand(1, 3), 0, 0)
                        ->withSerial()
                        ->create();
                }
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create bulk item transfers.
     */
    protected function createBulkTransfers(): void
    {
        $this->command->info('  - Creating bulk transfers...');

        for ($i = 0; $i < 5; $i++) {
            $transfer = StockTransfer::factory()
                ->shipped()
                ->create();

            if (class_exists('StockTransferItem')) {
                $bulkProducts = Product::whereHas('category', function ($q) {
                    $q->where('name', 'like', '%Bulk%')
                        ->orWhere('name', 'like', '%Raw Materials%');
                })->limit(2)->get();

                foreach ($bulkProducts as $product) {
                    StockTransferItem::factory()
                        ->forStockTransfer($transfer->id)
                        ->forProduct($product->id)
                        ->withQuantities(rand(100, 500), rand(100, 500), 0)
                        ->create();
                }
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create partial shipment transfers.
     */
    protected function createPartialShipmentTransfers(): void
    {
        $this->command->info('  - Creating partial shipment transfers...');

        for ($i = 0; $i < 4; $i++) {
            $transfer = StockTransfer::factory()
                ->partiallyReceived()
                ->create();

            if (class_exists('StockTransferItem')) {
                $product = Product::inRandomOrder()->first();
                $totalQty = 100;
                $shipped = 100;
                $received = 60; // Partial receipt

                StockTransferItem::factory()
                    ->forStockTransfer($transfer->id)
                    ->forProduct($product->id)
                    ->withQuantities($totalQty, $shipped, $received)
                    ->create();
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create overdue transfers.
     */
    protected function createOverdueTransfers(): void
    {
        $this->command->info('  - Creating overdue transfers...');

        for ($i = 0; $i < 5; $i++) {
            StockTransfer::factory()
                ->overdue()
                ->withItems(rand(2, 4))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create transfers with tracking.
     */
    protected function createTrackedTransfers(): void
    {
        $this->command->info('  - Creating tracked transfers...');

        for ($i = 0; $i < 3; $i++) {
            $transfer = StockTransfer::factory()
                ->shipped()
                ->withBatchItems(2)
                ->withSerialItems(3)
                ->create();

            $this->command->getOutput()->progressAdvance(2);
        }
    }

    /**
     * Create warehouse consolidation transfers.
     */
    /**
     * Create consolidation transfers.
     */
    protected function createConsolidationTransfers(): void
    {
        $this->command->info('  - Creating consolidation transfers...');

        // Get warehouses with multiple locations
        $warehouses = Warehouse::has('locations', '>=', 3)->get();

        if ($warehouses->count() < 2) {
            $this->command->warn('    Not enough warehouses with multiple locations for consolidation transfers');
            return;
        }

        // Pick two different warehouses
        $fromWarehouse = $warehouses->random();
        $toWarehouse = $warehouses->where('id', '!=', $fromWarehouse->id)->first();

        if (!$toWarehouse) {
            $toWarehouse = Warehouse::where('id', '!=', $fromWarehouse->id)->inRandomOrder()->first();
        }

        // Only create if we have both warehouses
        if ($fromWarehouse && $toWarehouse) {
            StockTransfer::factory()
                ->shipped()
                ->fromWarehouse($fromWarehouse->id)
                ->toWarehouse($toWarehouse->id)
                ->create([
                    'request_date' => now()->subDays(3),
                    'expected_delivery_date' => now()->addDays(2),
                    'notes' => 'Consolidation transfer - moving slow movers',
                ]);

            $this->command->getOutput()->progressAdvance(1);
        } else {
            $this->command->warn('    Could not find two distinct warehouses for consolidation transfer');
        }
    }

    /**
     * Create new warehouse setup transfers.
     */
    /**
     * Create new warehouse setup transfers.
     */
    protected function createNewWarehouseTransfers(): void
    {
        $this->command->info('  - Creating new warehouse setup transfers...');

        // Get a newly created warehouse (or any warehouse) to act as the new warehouse
        $newWarehouse = Warehouse::latest()->first();

        if (!$newWarehouse) {
            $this->command->warn('    No warehouses found for new warehouse setup');
            return;
        }

        // Get a different existing warehouse to transfer from
        $existingWarehouse = Warehouse::where('id', '!=', $newWarehouse->id)->inRandomOrder()->first();

        if (!$existingWarehouse) {
            $this->command->warn('    No other warehouses found for new warehouse setup');
            return;
        }

        // Create transfer from existing warehouse to new warehouse
        StockTransfer::factory()
            ->pending()
            ->fromWarehouse($existingWarehouse->id)
            ->toWarehouse($newWarehouse->id)
            ->create([
                'request_date' => now(),
                'expected_delivery_date' => now()->addDays(7),
                'notes' => 'Initial stock transfer to new warehouse',
            ]);

        $this->command->getOutput()->progressAdvance(1);
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nStock Transfer Statistics:");

        $stats = StockTransfer::getStatistics(365);

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Transfers', $stats['total_transfers']],
                ['Completed Transfers', $stats['completed_transfers']],
                ['Cancelled Transfers', $stats['cancelled_transfers']],
                ['Source Warehouses', $stats['source_warehouses']],
                ['Destination Warehouses', $stats['dest_warehouses']],
                ['Completion Rate', $stats['completion_rate'] . '%'],
            ]
        );

        // Show status breakdown
        $this->command->info("\nTransfers by Status:");
        $byStatus = StockTransfer::select('status', DB::raw('count(*) as count'))
            ->groupBy('status')
            ->get()
            ->mapWithKeys(function ($item) {
                return [$item->status => $item->count];
            });

        $statusData = [];
        foreach (StockTransfer::$statuses as $status => $label) {
            $statusData[] = [$label, $byStatus[$status] ?? 0];
        }

        $this->command->table(['Status', 'Count'], $statusData);

        // Show warehouse pair statistics - FIXED
        $this->command->info("\nTop Warehouse Pairs:");

        // Query that joins with stock_transfer_items to get actual quantities
        $topPairs = StockTransfer::select(
            'stock_transfers.from_warehouse_id',
            'stock_transfers.to_warehouse_id',
            DB::raw('COUNT(DISTINCT stock_transfers.id) as transfer_count'),
            DB::raw('COALESCE(SUM(stock_transfer_items.quantity_requested), 0) as total_quantity')
        )
            ->leftJoin('stock_transfer_items', 'stock_transfers.id', '=', 'stock_transfer_items.stock_transfer_id')
            ->with(['fromWarehouse', 'toWarehouse'])
            ->groupBy('stock_transfers.from_warehouse_id', 'stock_transfers.to_warehouse_id')
            ->orderBy('transfer_count', 'desc')
            ->limit(5)
            ->get();

        $this->command->table(
            ['From Warehouse', 'To Warehouse', 'Transfers', 'Total Qty'],
            $topPairs->map(function ($item) {
                return [
                    $item->fromWarehouse->name ?? 'Unknown',
                    $item->toWarehouse->name ?? 'Unknown',
                    $item->transfer_count,
                    number_format($item->total_quantity),
                ];
            })->toArray()
        );

        // Show overdue transfers
        $overdueCount = StockTransfer::overdue()->count();
        if ($overdueCount > 0) {
            $this->command->warn("\n⚠️  There are {$overdueCount} overdue transfers!");

            $overdueTransfers = StockTransfer::overdue()
                ->with(['fromWarehouse', 'toWarehouse'])
                ->limit(5)
                ->get();

            $this->command->table(
                ['Transfer', 'From', 'To', 'Expected Date', 'Days Overdue'],
                $overdueTransfers->map(function ($transfer) {
                    return [
                        $transfer->transfer_number,
                        $transfer->fromWarehouse->name ?? 'Unknown',
                        $transfer->toWarehouse->name ?? 'Unknown',
                        $transfer->expected_delivery_date?->format('Y-m-d'),
                        $transfer->expected_delivery_date ? now()->diffInDays($transfer->expected_delivery_date, false) : 'N/A',
                    ];
                })->toArray()
            );
        }

        // Show average transit time
        $avgTransit = StockTransfer::where('status', StockTransfer::STATUS_RECEIVED)
            ->whereNotNull('actual_delivery_date')
            ->whereNotNull('expected_delivery_date')
            ->get()
            ->avg(function ($transfer) {
                return $transfer->expected_delivery_date->diffInDays($transfer->actual_delivery_date);
            });

        $this->command->info("\nAverage Transit Time Variance: " . round($avgTransit ?? 0, 1) . " days");
    }
}
