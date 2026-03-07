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
use Database\Seeders\Traits\ChecksDependencies;

class StockTransferItemSeeder extends Seeder
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
            StockTransfer::class => 'No stock transfers found',
            Product::class => 'No products found',
            Location::class => 'No locations found',
        ])) {
            return;
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        StockTransferItem::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating stock transfer items...');
        $this->command->getOutput()->progressStart(100);

        $this->createItemsForExistingTransfers();
        $this->createSpecializedTransferItems();

        $this->command->getOutput()->progressFinish();
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

                if (!$fromLocation) {
                    $fromLocation = Location::factory()
                        ->forWarehouse($transfer->from_warehouse_id)
                        ->create();
                    $this->command->info("    Created missing from-location for warehouse {$transfer->from_warehouse_id}");
                }

                $toLocation = Location::where('warehouse_id', $transfer->to_warehouse_id)
                    ->inRandomOrder()
                    ->first();

                if (!$toLocation) {
                    $toLocation = Location::factory()
                        ->forWarehouse($transfer->to_warehouse_id)
                        ->create();
                    $this->command->info("    Created missing to-location for warehouse {$transfer->to_warehouse_id}");
                }

                $quantityRequested = $this->faker->numberBetween(5, 50);

                // Set shipped/received based on transfer status
                $shipped = $this->getShippedForTransferStatus($transfer->status, $quantityRequested);
                $received = $this->getReceivedForTransferStatus($transfer->status, $shipped);

                // Create item directly without using factory states
                StockTransferItem::create([
                    'stock_transfer_id' => $transfer->id,
                    'product_id' => $product->id,
                    'from_location_id' => $fromLocation->id,
                    'to_location_id' => $toLocation->id,
                    'quantity_requested' => $quantityRequested,
                    'quantity_shipped' => $shipped,
                    'quantity_received' => $received,
                    'unit_cost' => $product->unit_cost ?? $this->faker->randomFloat(2, 1, 500),
                    'notes' => $this->faker->optional(0.2)->sentence(),
                    'created_at' => $transfer->request_date,
                    'updated_at' => $this->faker->dateTimeBetween($transfer->request_date, 'now'),
                ]);

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
    /**
     * Create specialized transfer items.
     */
    protected function createSpecializedTransferItems(): void
    {
        $this->command->info("\nCreating specialized transfer items...");

        // First create all the specialized transfers and their items
        // These methods create their own transfers and items together

        // 1. Multi-location transfers (creates its own transfer)
        $this->createMultiLocationItems();

        // 2. Expedited transfers (creates its own transfer)
        $this->createExpeditedItems();

        // 3. Discrepancy items (creates its own transfer)
        $this->createDiscrepancyItems();

        // 4. Slow-moving items (creates its own transfer)
        $this->createSlowMovingItems();

        // Now create items for ALL existing transfers (including the ones we just created)
        // But we need to make sure we don't duplicate items

        // Then create specialized items that use existing transfers
        // 5. Batch tracked items
        $this->createBatchTrackedItems();

        // 6. Serial tracked items
        $this->createSerialTrackedItems();

        // 7. High-value items
        $this->createHighValueItems();

        // 8. Bulk items
        $this->createBulkItems();

        // 9. Partial receipt scenarios
        $this->createPartialReceiptItems();

        // 10. Zero cost items
        $this->createZeroCostItems();

        // 11. Damaged/notes items
        $this->createDamagedItems();

        // 12. Perishable items with expiry
        $this->createPerishableItems();
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
                $quantity = $this->faker->numberBetween(5, 20);

                StockTransferItem::create([
                    'stock_transfer_id' => $transfer->id,
                    'product_id' => $product->id,
                    'from_location_id' => Location::where('warehouse_id', $transfer->from_warehouse_id)->inRandomOrder()->first()->id ?? null,
                    'to_location_id' => Location::where('warehouse_id', $transfer->to_warehouse_id)->inRandomOrder()->first()->id ?? null,
                    'quantity_requested' => $quantity,
                    'quantity_shipped' => $quantity,
                    'quantity_received' => $quantity,
                    'batch_number' => 'BATCH-' . date('y') . '-' . strtoupper($this->faker->bothify('??##')) . '-' . str_pad($this->faker->numberBetween(1, 999), 3, '0', STR_PAD_LEFT),
                    'unit_cost' => $product->unit_cost ?? $this->faker->randomFloat(2, 10, 100),
                    'notes' => 'Batch tracked item',
                ]);

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
                    StockTransferItem::create([
                        'stock_transfer_id' => $transfer->id,
                        'product_id' => $product->id,
                        'from_location_id' => Location::where('warehouse_id', $transfer->from_warehouse_id)->inRandomOrder()->first()->id ?? null,
                        'to_location_id' => Location::where('warehouse_id', $transfer->to_warehouse_id)->inRandomOrder()->first()->id ?? null,
                        'quantity_requested' => 1,
                        'quantity_shipped' => 1,
                        'quantity_received' => 0,
                        'serial_number' => 'SN-' . strtoupper($this->faker->bothify('??##??##')) . '-' . $this->faker->numberBetween(1000, 9999),
                        'unit_cost' => $product->unit_cost ?? $this->faker->randomFloat(2, 50, 500),
                        'notes' => 'Serial tracked item',
                    ]);
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
                StockTransferItem::create([
                    'stock_transfer_id' => $transfer->id,
                    'product_id' => $product->id,
                    'from_location_id' => Location::where('warehouse_id', $transfer->from_warehouse_id)->inRandomOrder()->first()->id ?? null,
                    'to_location_id' => Location::where('warehouse_id', $transfer->to_warehouse_id)->inRandomOrder()->first()->id ?? null,
                    'quantity_requested' => 1,
                    'quantity_shipped' => 0,
                    'quantity_received' => 0,
                    'unit_cost' => $this->faker->randomFloat(2, 500, 2000),
                    'notes' => 'High-value item',
                ]);

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
                $quantity = $this->faker->numberBetween(100, 500);

                StockTransferItem::create([
                    'stock_transfer_id' => $transfer->id,
                    'product_id' => $product->id,
                    'from_location_id' => Location::where('warehouse_id', $transfer->from_warehouse_id)->inRandomOrder()->first()->id ?? null,
                    'to_location_id' => Location::where('warehouse_id', $transfer->to_warehouse_id)->inRandomOrder()->first()->id ?? null,
                    'quantity_requested' => $quantity,
                    'quantity_shipped' => 100,
                    'quantity_received' => 0,
                    'unit_cost' => $this->faker->randomFloat(2, 0.5, 5),
                    'notes' => 'Bulk item',
                ]);

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
            $quantity = $this->faker->numberBetween(20, 50);
            $received = $this->faker->numberBetween(5, $quantity - 1);

            StockTransferItem::create([
                'stock_transfer_id' => $transfer->id,
                'product_id' => $product->id,
                'from_location_id' => Location::where('warehouse_id', $transfer->from_warehouse_id)->inRandomOrder()->first()->id ?? null,
                'to_location_id' => Location::where('warehouse_id', $transfer->to_warehouse_id)->inRandomOrder()->first()->id ?? null,
                'quantity_requested' => $quantity,
                'quantity_shipped' => $quantity,
                'quantity_received' => $received,
                'unit_cost' => $product->unit_cost ?? $this->faker->randomFloat(2, 10, 100),
                'notes' => 'Partial receipt - remaining in transit',
            ]);

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
            StockTransferItem::create([
                'stock_transfer_id' => $transfer->id,
                'product_id' => Product::inRandomOrder()->first()->id,
                'from_location_id' => Location::where('warehouse_id', $transfer->from_warehouse_id)->inRandomOrder()->first()->id ?? null,
                'to_location_id' => Location::where('warehouse_id', $transfer->to_warehouse_id)->inRandomOrder()->first()->id ?? null,
                'quantity_requested' => $this->faker->numberBetween(1, 5),
                'quantity_shipped' => 0,
                'quantity_received' => 0,
                'unit_cost' => 0,
                'notes' => 'Zero cost item - sample/gratis',
            ]);

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
            $quantity = $this->faker->numberBetween(5, 15);

            StockTransferItem::create([
                'stock_transfer_id' => $transfer->id,
                'product_id' => Product::inRandomOrder()->first()->id,
                'from_location_id' => Location::where('warehouse_id', $transfer->from_warehouse_id)->inRandomOrder()->first()->id ?? null,
                'to_location_id' => Location::where('warehouse_id', $transfer->to_warehouse_id)->inRandomOrder()->first()->id ?? null,
                'quantity_requested' => $quantity,
                'quantity_shipped' => $quantity,
                'quantity_received' => $quantity,
                'unit_cost' => $this->faker->randomFloat(2, 10, 50),
                'notes' => 'Items damaged during transfer - ' . $this->faker->randomElement([
                    'damaged packaging',
                    'crushed boxes',
                    'water damage',
                    'items broken',
                ]),
            ]);

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

            StockTransferItem::create([
                'stock_transfer_id' => $transfer->id,
                'product_id' => $product->id,
                'from_location_id' => $fromLocation->id,
                'to_location_id' => $toLocation->id,
                'quantity_requested' => $quantity,
                'quantity_shipped' => $quantity,
                'quantity_received' => 0,
                'unit_cost' => $product->unit_cost ?? $this->faker->randomFloat(2, 10, 50),
            ]);

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
            StockTransferItem::create([
                'stock_transfer_id' => $transfer->id,
                'product_id' => $product->id,
                'from_location_id' => Location::where('warehouse_id', $transfer->from_warehouse_id)->inRandomOrder()->first()->id ?? null,
                'to_location_id' => Location::where('warehouse_id', $transfer->to_warehouse_id)->inRandomOrder()->first()->id ?? null,
                'quantity_requested' => $this->faker->numberBetween(1, 10),
                'quantity_shipped' => 0,
                'quantity_received' => 0,
                'notes' => 'Rush item - expedite shipping',
            ]);

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
        StockTransferItem::create([
            'stock_transfer_id' => $transfer->id,
            'product_id' => $product->id,
            'from_location_id' => Location::where('warehouse_id', $transfer->from_warehouse_id)->inRandomOrder()->first()->id ?? null,
            'to_location_id' => Location::where('warehouse_id', $transfer->to_warehouse_id)->inRandomOrder()->first()->id ?? null,
            'quantity_requested' => 100,
            'quantity_shipped' => 80,
            'quantity_received' => 50,
            'unit_cost' => $product->unit_cost ?? $this->faker->randomFloat(2, 10, 50),
            'notes' => 'Transfer discrepancy - 30 units missing',
        ]);

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
                $quantity = $this->faker->numberBetween(5, 15);

                StockTransferItem::create([
                    'stock_transfer_id' => $transfer->id,
                    'product_id' => $product->id,
                    'from_location_id' => Location::where('warehouse_id', $transfer->from_warehouse_id)->inRandomOrder()->first()->id ?? null,
                    'to_location_id' => Location::where('warehouse_id', $transfer->to_warehouse_id)->inRandomOrder()->first()->id ?? null,
                    'quantity_requested' => $quantity,
                    'quantity_shipped' => $quantity,
                    'quantity_received' => 0,
                    'batch_number' => 'BATCH-' . date('y') . '-' . strtoupper($this->faker->bothify('??##')),
                    'notes' => 'Perishable - expedite handling',
                ]);

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

        StockTransferItem::create([
            'stock_transfer_id' => $transfer->id,
            'product_id' => $product->id,
            'from_location_id' => Location::where('warehouse_id', $transfer->from_warehouse_id)->inRandomOrder()->first()->id ?? null,
            'to_location_id' => Location::where('warehouse_id', $transfer->to_warehouse_id)->inRandomOrder()->first()->id ?? null,
            'quantity_requested' => 5,
            'quantity_shipped' => 0,
            'quantity_received' => 0,
            'notes' => 'Slow-moving item - minimal transfer quantity',
        ]);

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
        $totalValue = StockTransferItem::sum(DB::raw('unit_cost * quantity_requested'));

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
