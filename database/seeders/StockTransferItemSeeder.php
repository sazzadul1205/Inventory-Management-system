<?php
// database/seeders/StockTransferItemSeeder.php

namespace Database\Seeders;

use App\Models\StockTransferItem;
use App\Models\StockTransfer;
use App\Models\Product;
use App\Models\Location;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StockTransferItemSeeder extends Seeder
{
    protected Faker $faker;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->faker = fake();

        // Disable foreign key checks temporarily
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        // Truncate the table
        StockTransferItem::truncate();

        // Enable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        // Check prerequisites
        $this->checkPrerequisites();

        $this->command->info('Creating stock transfer items...');
        $this->command->getOutput()->progressStart(100);

        // Create items for existing stock transfers
        $this->createItemsForExistingTransfers();

        // Create specialized transfer items
        $this->createSpecializedTransferItems();

        $this->command->getOutput()->progressFinish();

        // Display statistics
        $this->displayStatistics();
    }

    /**
     * Check if required data exists.
     */
    protected function checkPrerequisites(): void
    {
        if (StockTransfer::count() == 0) {
            $this->command->warn('No stock transfers found. Running StockTransferSeeder first...');
            $this->call(StockTransferSeeder::class);
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
     * Create items for existing stock transfers.
     */
    protected function createItemsForExistingTransfers(): void
    {
        $stockTransfers = StockTransfer::with(['fromWarehouse', 'toWarehouse'])->get();

        foreach ($stockTransfers as $transfer) {
            // Number of items per transfer based on transfer type/status
            $itemCount = $this->getItemCountForTransfer($transfer);

            for ($i = 0; $i < $itemCount; $i++) {
                $product = Product::inRandomOrder()->first();

                $fromLocation = Location::where('warehouse_id', $transfer->from_warehouse_id)
                    ->inRandomOrder()
                    ->first();

                $toLocation = Location::where('warehouse_id', $transfer->to_warehouse_id)
                    ->inRandomOrder()
                    ->first();

                $quantityRequested = $this->faker->numberBetween(5, 50);

                // Set shipped/received based on transfer status
                $shipped = $this->getShippedForTransferStatus($transfer->status, $quantityRequested);
                $received = $this->getReceivedForTransferStatus($transfer->status, $shipped);

                StockTransferItem::factory()
                    ->forStockTransfer($transfer->id)
                    ->forProduct($product->id)
                    ->fromLocation($fromLocation->id)
                    ->toLocation($toLocation->id)
                    ->withQuantities($quantityRequested, $shipped, $received)
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Get number of items for a transfer.
     */
    protected function getItemCountForTransfer(StockTransfer $transfer): int
    {
        // More items for received/completed transfers, fewer for drafts
        return match ($transfer->status) {
            StockTransfer::STATUS_RECEIVED => $this->faker->numberBetween(3, 8),
            StockTransfer::STATUS_SHIPPED,
            StockTransfer::STATUS_PARTIALLY_RECEIVED => $this->faker->numberBetween(2, 6),
            default => $this->faker->numberBetween(1, 4),
        };
    }

    /**
     * Get shipped quantity based on transfer status.
     */
    protected function getShippedForTransferStatus(string $status, int $requested): int
    {
        return match ($status) {
            StockTransfer::STATUS_SHIPPED,
            StockTransfer::STATUS_PARTIALLY_RECEIVED,
            StockTransfer::STATUS_RECEIVED => $requested,
            default => 0,
        };
    }

    /**
     * Get received quantity based on transfer status.
     */
    protected function getReceivedForTransferStatus(string $status, int $shipped): int
    {
        return match ($status) {
            StockTransfer::STATUS_RECEIVED => $shipped,
            StockTransfer::STATUS_PARTIALLY_RECEIVED => $this->faker->numberBetween(1, $shipped - 1),
            default => 0,
        };
    }

    /**
     * Create specialized transfer items.
     */
    protected function createSpecializedTransferItems(): void
    {
        $this->command->info("\nCreating specialized transfer items...");

        // 1. Batch tracked items
        $this->createBatchTrackedItems();

        // 2. Serial tracked items
        $this->createSerialTrackedItems();

        // 3. High-value items
        $this->createHighValueItems();

        // 4. Bulk items
        $this->createBulkItems();

        // 5. Partial receipt scenarios
        $this->createPartialReceiptItems();

        // 6. Zero cost items
        $this->createZeroCostItems();

        // 7. Damaged/notes items
        $this->createDamagedItems();

        // 8. Multi-location transfers
        $this->createMultiLocationItems();

        // 9. Expedited transfers
        $this->createExpeditedItems();

        // 10. Transfer discrepancies
        $this->createDiscrepancyItems();

        // 11. Perishable items with expiry
        $this->createPerishableItems();

        // 12. Slow-moving items
        $this->createSlowMovingItems();
    }

    /**
     * Create batch tracked items.
     */
    protected function createBatchTrackedItems(): void
    {
        $this->command->info('  - Creating batch tracked items...');

        $batchProducts = Product::where('is_batch_tracked', true)->get();

        if ($batchProducts->isEmpty()) {
            $batchProducts = Product::factory()->batchTracked()->count(5)->create();
        }

        $transfers = StockTransfer::received()->inRandomOrder()->limit(5)->get();

        foreach ($transfers as $transfer) {
            foreach ($batchProducts->random(2) as $product) {
                StockTransferItem::factory()
                    ->forStockTransfer($transfer->id)
                    ->forProduct($product->id)
                    ->received()
                    ->withBatch()
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create serial tracked items.
     */
    protected function createSerialTrackedItems(): void
    {
        $this->command->info('  - Creating serial tracked items...');

        $serialProducts = Product::where('is_serial_tracked', true)->get();

        if ($serialProducts->isEmpty()) {
            $serialProducts = Product::factory()->serialTracked()->count(5)->create();
        }

        $transfers = StockTransfer::shipped()->inRandomOrder()->limit(4)->get();

        foreach ($transfers as $transfer) {
            foreach ($serialProducts->random(2) as $product) {
                // Create multiple serial numbers
                for ($i = 0; $i < 3; $i++) {
                    StockTransferItem::factory()
                        ->forStockTransfer($transfer->id)
                        ->forProduct($product->id)
                        ->shipped()
                        ->withSerial()
                        ->create();
                }

                $this->command->getOutput()->progressAdvance(2);
            }
        }
    }

    /**
     * Create high-value items.
     */
    protected function createHighValueItems(): void
    {
        $this->command->info('  - Creating high-value items...');

        $highValueProducts = Product::whereHas('productSuppliers', function ($q) {
            $q->where('unit_cost', '>', 500);
        })->limit(5)->get();

        if ($highValueProducts->isEmpty()) {
            $highValueProducts = Product::factory()->highValue()->count(3)->create();
        }

        $transfers = StockTransfer::approved()->inRandomOrder()->limit(3)->get();

        foreach ($transfers as $transfer) {
            foreach ($highValueProducts as $product) {
                StockTransferItem::factory()
                    ->forStockTransfer($transfer->id)
                    ->forProduct($product->id)
                    ->pending()
                    ->withUnitCost($this->faker->randomFloat(2, 500, 2000))
                    ->withQuantities(1, 0, 0)
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create bulk items.
     */
    protected function createBulkItems(): void
    {
        $this->command->info('  - Creating bulk items...');

        $bulkProducts = Product::whereHas('category', function ($q) {
            $q->where('name', 'like', '%Bulk%')
                ->orWhere('name', 'like', '%Raw Materials%');
        })->limit(5)->get();

        if ($bulkProducts->isEmpty()) {
            $bulkProducts = Product::factory()->bulkItem()->count(3)->create();
        }

        $transfers = StockTransfer::shipped()->inRandomOrder()->limit(4)->get();

        foreach ($transfers as $transfer) {
            foreach ($bulkProducts as $product) {
                StockTransferItem::factory()
                    ->forStockTransfer($transfer->id)
                    ->forProduct($product->id)
                    ->shipped()
                    ->withUnitCost($this->faker->randomFloat(2, 0.5, 5))
                    ->withQuantities($this->faker->numberBetween(100, 500), 100, 0)
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create partial receipt scenarios.
     */
    protected function createPartialReceiptItems(): void
    {
        $this->command->info('  - Creating partial receipt items...');

        $transfers = StockTransfer::partiallyReceived()->get();

        foreach ($transfers->take(5) as $transfer) {
            $product = Product::inRandomOrder()->first();

            StockTransferItem::factory()
                ->forStockTransfer($transfer->id)
                ->forProduct($product->id)
                ->partiallyReceived()
                ->state([
                    'notes' => 'Partial receipt - remaining in transit',
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create zero cost items.
     */
    protected function createZeroCostItems(): void
    {
        $this->command->info('  - Creating zero cost items...');

        $transfers = StockTransfer::inRandomOrder()->limit(3)->get();

        foreach ($transfers as $transfer) {
            StockTransferItem::factory()
                ->forStockTransfer($transfer->id)
                ->pending()
                ->withUnitCost(0)
                ->state([
                    'notes' => 'Zero cost item - sample/gratis',
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create damaged/notes items.
     */
    protected function createDamagedItems(): void
    {
        $this->command->info('  - Creating damaged items...');

        $transfers = StockTransfer::received()->inRandomOrder()->limit(3)->get();

        foreach ($transfers as $transfer) {
            StockTransferItem::factory()
                ->forStockTransfer($transfer->id)
                ->received()
                ->state([
                    'notes' => 'Items damaged during transfer - ' . $this->faker->randomElement([
                        'damaged packaging',
                        'crushed boxes',
                        'water damage',
                        'items broken',
                    ]),
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create multi-location transfers.
     */
    protected function createMultiLocationItems(): void
    {
        $this->command->info('  - Creating multi-location transfers...');

        $transfer = StockTransfer::factory()
            ->shipped()
            ->create();

        $product = Product::inRandomOrder()->first();

        $fromLocations = Location::where('warehouse_id', $transfer->from_warehouse_id)
            ->inRandomOrder()
            ->limit(3)
            ->get();

        $toLocation = Location::where('warehouse_id', $transfer->to_warehouse_id)
            ->inRandomOrder()
            ->first();

        $totalQuantity = 0;
        foreach ($fromLocations as $index => $fromLocation) {
            $quantity = $this->faker->numberBetween(5, 15);
            $totalQuantity += $quantity;

            StockTransferItem::factory()
                ->forStockTransfer($transfer->id)
                ->forProduct($product->id)
                ->fromLocation($fromLocation->id)
                ->toLocation($toLocation->id)
                ->withQuantities($quantity, $quantity, 0)
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create expedited items.
     */
    protected function createExpeditedItems(): void
    {
        $this->command->info('  - Creating expedited items...');

        $transfer = StockTransfer::factory()
            ->approved()
            ->create([
                'notes' => 'Expedited transfer - priority handling',
            ]);

        $products = Product::inRandomOrder()->limit(3)->get();

        foreach ($products as $product) {
            StockTransferItem::factory()
                ->forStockTransfer($transfer->id)
                ->forProduct($product->id)
                ->pending()
                ->state([
                    'notes' => 'Rush item - expedite shipping',
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create discrepancy items.
     */
    protected function createDiscrepancyItems(): void
    {
        $this->command->info('  - Creating discrepancy items...');

        $transfer = StockTransfer::factory()
            ->partiallyReceived()
            ->create();

        $product = Product::inRandomOrder()->first();

        // Requested 100, shipped 80, received 50
        StockTransferItem::factory()
            ->forStockTransfer($transfer->id)
            ->forProduct($product->id)
            ->withQuantities(100, 80, 50)
            ->state([
                'notes' => 'Transfer discrepancy - 30 units missing',
            ])
            ->create();

        $this->command->getOutput()->progressAdvance(1);
    }

    /**
     * Create perishable items with expiry.
     */
    protected function createPerishableItems(): void
    {
        $this->command->info('  - Creating perishable items...');

        $expirableProducts = Product::where('is_expirable', true)->get();

        if ($expirableProducts->isEmpty()) {
            $expirableProducts = Product::factory()->expirable()->count(3)->create();
        }

        $transfers = StockTransfer::shipped()->inRandomOrder()->limit(2)->get();

        foreach ($transfers as $transfer) {
            foreach ($expirableProducts as $product) {
                StockTransferItem::factory()
                    ->forStockTransfer($transfer->id)
                    ->forProduct($product->id)
                    ->shipped()
                    ->withBatch()
                    ->state([
                        'notes' => 'Perishable - expedite handling',
                    ])
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create slow-moving items.
     */
    protected function createSlowMovingItems(): void
    {
        $this->command->info('  - Creating slow-moving items...');

        $transfer = StockTransfer::factory()
            ->approved()
            ->create();

        $product = Product::inRandomOrder()->first();

        StockTransferItem::factory()
            ->forStockTransfer($transfer->id)
            ->forProduct($product->id)
            ->pending()
            ->withQuantities(5, 0, 0)
            ->state([
                'notes' => 'Slow-moving item - minimal transfer quantity',
            ])
            ->create();

        $this->command->getOutput()->progressAdvance(1);
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nStock Transfer Item Statistics:");

        $totalItems = StockTransferItem::count();
        $pendingItems = StockTransferItem::pending()->count();
        $shippedItems = StockTransferItem::shipped()->count();
        $partialItems = StockTransferItem::partiallyReceived()->count();
        $receivedItems = StockTransferItem::received()->count();

        $batchCount = StockTransferItem::whereNotNull('batch_number')->count();
        $serialCount = StockTransferItem::whereNotNull('serial_number')->count();

        $totalRequested = StockTransferItem::sum('quantity_requested');
        $totalShipped = StockTransferItem::sum('quantity_shipped');
        $totalReceived = StockTransferItem::sum('quantity_received');
        $totalValue = StockTransferItem::sum('total_cost');

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Items', $totalItems],
                ['Pending Items', $pendingItems],
                ['Shipped Items', $shippedItems],
                ['Partially Received', $partialItems],
                ['Fully Received', $receivedItems],
                ['Batch Tracked', $batchCount],
                ['Serial Tracked', $serialCount],
                ['Total Requested Qty', number_format($totalRequested)],
                ['Total Shipped Qty', number_format($totalShipped)],
                ['Total Received Qty', number_format($totalReceived)],
                ['Total Value', '$' . number_format($totalValue, 2)],
                ['Shipment Rate', $totalRequested > 0 ? round(($totalShipped / $totalRequested) * 100, 2) . '%' : '0%'],
                ['Receipt Rate', $totalShipped > 0 ? round(($totalReceived / $totalShipped) * 100, 2) . '%' : '0%'],
            ]
        );

        // Show product transfer summary for a sample product
        $sampleProduct = Product::inRandomOrder()->first();
        if ($sampleProduct) {
            $summary = StockTransferItem::getProductTransferSummary($sampleProduct->id, 90);

            $this->command->info("\nProduct Transfer Summary: {$sampleProduct->name}");
            $this->command->table(
                ['Metric', 'Value'],
                [
                    ['Total Transfers', $summary['total_transfers']],
                    ['Total Requested', $summary['total_requested']],
                    ['Total Shipped', $summary['total_shipped']],
                    ['Total Received', $summary['total_received']],
                    ['Completion Rate', $summary['completion_rate'] . '%'],
                    ['Pending Items', $summary['pending_items']],
                    ['In Transit', $summary['in_transit']],
                ]
            );
        }

        // Show items by status
        $this->command->info("\nItems by Status:");
        $statusCounts = [
            'Pending' => $pendingItems,
            'Shipped' => $shippedItems,
            'Partially Received' => $partialItems,
            'Received' => $receivedItems,
        ];

        $this->command->table(
            ['Status', 'Count'],
            collect($statusCounts)->map(fn($count, $status) => [$status, $count])->toArray()
        );
    }
}
