<?php
// database/seeders/PurchaseReceiptItemSeeder.php

namespace Database\Seeders;

use App\Models\PurchaseReceiptItem;
use App\Models\PurchaseReceipt;
use App\Models\PurchaseOrderItem;
use App\Models\Product;
use App\Models\Location;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class PurchaseReceiptItemSeeder extends Seeder
{
    use ChecksDependencies;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       
        if (!$this->checkDependencies([
            PurchaseReceipt::class => 'No purchase receipts found',
            PurchaseOrderItem::class => 'No purchase order items found',
            Location::class => 'No locations found',
        ])) {
            return;
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        PurchaseReceiptItem::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating purchase receipt items...');
        $this->command->getOutput()->progressStart(100);

        $this->createItemsForExistingReceipts();
        $this->createSpecializedReceiptItems();

        $this->command->getOutput()->progressFinish();
        $this->displayStatistics();
    }

    /**
     * Check if required data exists.
     */
    protected function checkPrerequisites(): void
    {
        if (PurchaseReceipt::count() == 0) {
            $this->command->warn('No purchase receipts found. Running PurchaseReceiptSeeder first...');
            $this->call(PurchaseReceiptSeeder::class);
        }

        if (PurchaseOrderItem::count() == 0) {
            $this->command->warn('No purchase order items found. Running PurchaseOrderItemSeeder first...');
            $this->call(PurchaseOrderItemSeeder::class);
        }

        if (Location::count() == 0) {
            $this->command->warn('No locations found. Running LocationSeeder first...');
            $this->call(LocationSeeder::class);
        }
    }

    /**
     * Create items for existing receipts.
     */
    protected function createItemsForExistingReceipts(): void
    {
        $receipts = PurchaseReceipt::with('purchaseOrder.items')->get();

        foreach ($receipts as $receipt) {
            $poItems = $receipt->purchaseOrder->items;

            if ($poItems->isEmpty()) {
                continue;
            }

            // Determine how many items to receive (could be all or some)
            $itemsToReceive = fake()->numberBetween(1, $poItems->count());
            $selectedPOItems = $poItems->random(min($itemsToReceive, $poItems->count()));

            foreach ($selectedPOItems as $poItem) {
                $location = Location::where('warehouse_id', $receipt->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                $quantity = fake()->numberBetween(1, $poItem->quantity_ordered);

                PurchaseReceiptItem::factory()
                    ->forPurchaseReceipt($receipt->id)
                    ->forPurchaseOrderItem($poItem->id)
                    ->forProduct($poItem->product_id)
                    ->atLocation($location->id)
                    ->withQuantity(min($quantity, $poItem->quantity_ordered))
                    ->withUnitCost($poItem->unit_price)
                    ->withProductTracking($poItem->product)
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create specialized receipt items.
     */
    protected function createSpecializedReceiptItems(): void
    {
        $this->command->info("\nCreating specialized receipt items...");

        // 1. Batch tracked items
        $this->createBatchTrackedItems();

        // 2. Serial tracked items
        $this->createSerialTrackedItems();

        // 3. Expiring items
        $this->createExpiringItems();

        // 4. Expired items
        $this->createExpiredItems();

        // 5. Multi-location receipts
        $this->createMultiLocationItems();

        // 6. Quality hold items
        $this->createQualityHoldItems();

        // 7. Damaged items
        $this->createDamagedItems();

        // 8. High-value items
        $this->createHighValueItems();

        // 9. Bulk items
        $this->createBulkItems();

        // 10. Cross-dock items
        $this->createCrossDockItems();
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

        $receipts = PurchaseReceipt::inRandomOrder()->limit(10)->get();

        foreach ($receipts as $receipt) {
            foreach ($batchProducts->random(2) as $product) {
                $poItem = PurchaseOrderItem::where('product_id', $product->id)
                    ->inRandomOrder()
                    ->first() ?? PurchaseOrderItem::factory()
                    ->forProduct($product->id)
                    ->create();

                $location = Location::where('warehouse_id', $receipt->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                // Create multiple batches for the same product
                for ($i = 0; $i < 3; $i++) {
                    PurchaseReceiptItem::factory()
                        ->forPurchaseReceipt($receipt->id)
                        ->forPurchaseOrderItem($poItem->id)
                        ->forProduct($product->id)
                        ->atLocation($location->id)
                        ->withBatch('BATCH-' . date('y') . '-' . str_pad($i + 1, 3, '0', STR_PAD_LEFT))
                        ->withQuantity(fake()->numberBetween(10, 50))
                        ->withUnitCost(fake()->randomFloat(2, 5, 50))
                        ->create();

                    $this->command->getOutput()->progressAdvance(1);
                }
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

        $receipts = PurchaseReceipt::inRandomOrder()->limit(8)->get();

        foreach ($receipts as $receipt) {
            foreach ($serialProducts->random(2) as $product) {
                $poItem = PurchaseOrderItem::where('product_id', $product->id)
                    ->inRandomOrder()
                    ->first() ?? PurchaseOrderItem::factory()
                    ->forProduct($product->id)
                    ->withQuantity(10, 100, 0)
                    ->create();

                $location = Location::where('warehouse_id', $receipt->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                // Create individual serial numbers
                for ($i = 0; $i < 5; $i++) {
                    PurchaseReceiptItem::factory()
                        ->forPurchaseReceipt($receipt->id)
                        ->forPurchaseOrderItem($poItem->id)
                        ->forProduct($product->id)
                        ->atLocation($location->id)
                        ->withSerial()
                        ->withQuantity(1)
                        ->withUnitCost(fake()->randomFloat(2, 50, 200))
                        ->create();

                    $this->command->getOutput()->progressAdvance(1);
                }
            }
        }
    }

    /**
     * Create expiring items.
     */
    protected function createExpiringItems(): void
    {
        $this->command->info('  - Creating expiring items...');

        $expirableProducts = Product::where('is_expirable', true)->get();

        if ($expirableProducts->isEmpty()) {
            $expirableProducts = Product::factory()->expirable()->count(5)->create();
        }

        $receipts = PurchaseReceipt::inRandomOrder()->limit(6)->get();

        foreach ($receipts as $receipt) {
            foreach ($expirableProducts->random(2) as $product) {
                $poItem = PurchaseOrderItem::where('product_id', $product->id)
                    ->inRandomOrder()
                    ->first() ?? PurchaseOrderItem::factory()
                    ->forProduct($product->id)
                    ->create();

                $location = Location::where('warehouse_id', $receipt->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                PurchaseReceiptItem::factory()
                    ->forPurchaseReceipt($receipt->id)
                    ->forPurchaseOrderItem($poItem->id)
                    ->forProduct($product->id)
                    ->atLocation($location->id)
                    ->withExpiry(now()->addMonths(fake()->numberBetween(1, 6))->format('Y-m-d'))
                    ->withQuantity(fake()->numberBetween(10, 30))
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create expired items.
     */
    protected function createExpiredItems(): void
    {
        $this->command->info('  - Creating expired items...');

        $receipts = PurchaseReceipt::inRandomOrder()->limit(4)->get();

        foreach ($receipts as $receipt) {
            $products = Product::inRandomOrder()->limit(2)->get();

            foreach ($products as $product) {
                $poItem = PurchaseOrderItem::where('product_id', $product->id)
                    ->inRandomOrder()
                    ->first() ?? PurchaseOrderItem::factory()
                    ->forProduct($product->id)
                    ->create();

                $location = Location::where('warehouse_id', $receipt->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                PurchaseReceiptItem::factory()
                    ->forPurchaseReceipt($receipt->id)
                    ->forPurchaseOrderItem($poItem->id)
                    ->forProduct($product->id)
                    ->atLocation($location->id)
                    ->expired()
                    ->withQuantity(fake()->numberBetween(5, 15))
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create items received to multiple locations.
     */
    protected function createMultiLocationItems(): void
    {
        $this->command->info('  - Creating multi-location items...');

        $receipts = PurchaseReceipt::inRandomOrder()->limit(5)->get();

        foreach ($receipts as $receipt) {
            $product = Product::inRandomOrder()->first();
            $poItem = PurchaseOrderItem::where('product_id', $product->id)
                ->inRandomOrder()
                ->first() ?? PurchaseOrderItem::factory()
                ->forProduct($product->id)
                ->withQuantity(100, 50, 0)
                ->create();

            $locations = Location::where('warehouse_id', $receipt->warehouse_id)
                ->inRandomOrder()
                ->limit(3)
                ->get();

            $totalQuantity = 0;
            foreach ($locations as $location) {
                $quantity = fake()->numberBetween(10, 30);
                $totalQuantity += $quantity;

                PurchaseReceiptItem::factory()
                    ->forPurchaseReceipt($receipt->id)
                    ->forPurchaseOrderItem($poItem->id)
                    ->forProduct($product->id)
                    ->atLocation($location->id)
                    ->withQuantity($quantity)
                    ->withUnitCost($poItem->unit_price)
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }

            // Update PO item received quantity
            $poItem->receive($totalQuantity);
        }
    }

    /**
     * Create quality hold items.
     */
    protected function createQualityHoldItems(): void
    {
        $this->command->info('  - Creating quality hold items...');

        $receipts = PurchaseReceipt::inRandomOrder()->limit(4)->get();

        foreach ($receipts as $receipt) {
            $poItem = $receipt->purchaseOrder->items()->first();

            if ($poItem) {
                PurchaseReceiptItem::factory()
                    ->forPurchaseReceipt($receipt->id)
                    ->forPurchaseOrderItem($poItem->id)
                    ->forProduct($poItem->product_id)
                    ->onQualityHold()
                    ->withQuantity(fake()->numberBetween(5, 10))
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create damaged items.
     */
    protected function createDamagedItems(): void
    {
        $this->command->info('  - Creating damaged items...');

        $receipts = PurchaseReceipt::inRandomOrder()->limit(3)->get();

        foreach ($receipts as $receipt) {
            $poItem = $receipt->purchaseOrder->items()->first();

            if ($poItem) {
                PurchaseReceiptItem::factory()
                    ->forPurchaseReceipt($receipt->id)
                    ->forPurchaseOrderItem($poItem->id)
                    ->forProduct($poItem->product_id)
                    ->damaged()
                    ->withQuantity(fake()->numberBetween(2, 5))
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create high-value items.
     */
    protected function createHighValueItems(): void
    {
        $this->command->info('  - Creating high-value items...');

        $receipts = PurchaseReceipt::inRandomOrder()->limit(5)->get();

        foreach ($receipts as $receipt) {
            $product = Product::inRandomOrder()->first();

            PurchaseReceiptItem::factory()
                ->forPurchaseReceipt($receipt->id)
                ->forProduct($product->id)
                ->withUnitCost(fake()->randomFloat(2, 500, 5000))
                ->withQuantity(fake()->numberBetween(1, 3))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create bulk items.
     */
    protected function createBulkItems(): void
    {
        $this->command->info('  - Creating bulk items...');

        $receipts = PurchaseReceipt::inRandomOrder()->limit(4)->get();

        foreach ($receipts as $receipt) {
            $product = Product::inRandomOrder()->first();

            PurchaseReceiptItem::factory()
                ->forPurchaseReceipt($receipt->id)
                ->forProduct($product->id)
                ->withUnitCost(fake()->randomFloat(2, 0.5, 5))
                ->withQuantity(fake()->numberBetween(100, 1000))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create cross-dock items.
     */
    protected function createCrossDockItems(): void
    {
        $this->command->info('  - Creating cross-dock items...');

        $receipts = PurchaseReceipt::where('notes', 'like', '%cross-dock%')->get();

        if ($receipts->isEmpty()) {
            $receipts = PurchaseReceipt::inRandomOrder()->limit(3)->get();
        }

        foreach ($receipts as $receipt) {
            $product = Product::inRandomOrder()->first();

            PurchaseReceiptItem::factory()
                ->forPurchaseReceipt($receipt->id)
                ->forProduct($product->id)
                ->withQuantity(fake()->numberBetween(20, 50))
                ->state([
                    'notes' => 'Cross-dock - transferred to shipping',
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nPurchase Receipt Item Statistics:");

        $totalItems = PurchaseReceiptItem::count();
        $totalQuantity = PurchaseReceiptItem::sum('quantity_received');
        $totalValue = PurchaseReceiptItem::sum(DB::raw('quantity_received * unit_cost'));

        $batchCount = PurchaseReceiptItem::whereNotNull('batch_number')->count();
        $serialCount = PurchaseReceiptItem::whereNotNull('serial_number')->count();
        $expiryCount = PurchaseReceiptItem::whereNotNull('expiry_date')->count();

        $expiredCount = PurchaseReceiptItem::expired()->count();
        $expiringSoon = PurchaseReceiptItem::expiringSoon(30)->count();

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Receipt Items', $totalItems],
                ['Total Quantity Received', number_format($totalQuantity)],
                ['Total Value Received', '$' . number_format($totalValue, 2)],
                ['Average Item Value', '$' . number_format($totalValue / max($totalItems, 1), 2)],
                ['Batch Tracked Items', $batchCount],
                ['Serial Tracked Items', $serialCount],
                ['Expiry Tracked Items', $expiryCount],
                ['Expired Items', $expiredCount],
                ['Expiring Soon (30 days)', $expiringSoon],
            ]
        );

        // Show expiring items
        if ($expiringSoon > 0) {
            $this->command->warn("\n⚠️  Items expiring soon:");
            $expiringItems = PurchaseReceiptItem::getExpiringItems(30)->take(5);

            $this->command->table(
                ['Product', 'Batch', 'Location', 'Expiry Date', 'Days Left'],
                $expiringItems->map(function ($item) {
                    return [
                        $item->product->name,
                        $item->batch_number ?? 'N/A',
                        $item->location_path,
                        $item->expiry_date->format('Y-m-d'),
                        $item->days_until_expiry,
                    ];
                })->toArray()
            );
        }

        // Show product receipt summary for a sample product
        $sampleProduct = Product::inRandomOrder()->first();
        if ($sampleProduct) {
            $summary = PurchaseReceiptItem::getProductReceiptSummary($sampleProduct->id, 90);

            $this->command->info("\nSample Product Receipt Summary: {$sampleProduct->name}");
            $this->command->table(
                ['Metric', 'Value'],
                [
                    ['Total Quantity', $summary['total_quantity']],
                    ['Total Cost', '$' . number_format($summary['total_cost'], 2)],
                    ['Receipt Count', $summary['receipt_count']],
                    ['Average Unit Cost', '$' . number_format($summary['average_unit_cost'], 2)],
                ]
            );
        }
    }
}
