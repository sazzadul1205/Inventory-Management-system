<?php
// database/seeders/ShipmentItemSeeder.php

namespace Database\Seeders;

use App\Models\ShipmentItem;
use App\Models\Shipment;
use App\Models\SalesOrderItem;
use App\Models\Product;
use App\Models\Location;
use App\Models\SalesOrder;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class ShipmentItemSeeder extends Seeder
{
    use ChecksDependencies;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       
        if (!$this->checkDependencies([
            Shipment::class => 'No shipments found',
            SalesOrderItem::class => 'No sales order items found',
            Location::class => 'No locations found',
        ])) {
            return;
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        ShipmentItem::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating shipment items...');
        $this->command->getOutput()->progressStart(100);

        $this->createItemsForExistingShipments();
        $this->createSpecializedShipmentItems();

        $this->command->getOutput()->progressFinish();
        $this->displayStatistics();
    }

    /**
     * Check if required data exists.
     */
    protected function checkPrerequisites(): void
    {
        if (Shipment::count() == 0) {
            $this->command->warn('No shipments found. Running ShipmentSeeder first...');
            $this->call(ShipmentSeeder::class);
        }

        if (SalesOrderItem::count() == 0) {
            $this->command->warn('No sales order items found. Running SalesOrderItemSeeder first...');
            $this->call(SalesOrderItemSeeder::class);
        }

        if (Location::count() == 0) {
            $this->command->warn('No locations found. Running LocationSeeder first...');
            $this->call(LocationSeeder::class);
        }
    }

    /**
     * Create items for existing shipments.
     */
    protected function createItemsForExistingShipments(): void
    {
        $shipments = Shipment::with('salesOrder.items')->get();

        foreach ($shipments as $shipment) {
            $soItems = $shipment->salesOrder->items;

            if ($soItems->isEmpty()) {
                continue;
            }

            // Determine how many items to include in this shipment
            $itemsToShip = fake()->numberBetween(1, min(5, $soItems->count()));
            $selectedSOItems = $soItems->random(min($itemsToShip, $soItems->count()));

            foreach ($selectedSOItems as $soItem) {
                $remainingToShip = $soItem->quantity_ordered - $soItem->quantity_shipped;

                if ($remainingToShip <= 0) {
                    continue;
                }

                $location = Location::where('warehouse_id', $shipment->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                $quantity = fake()->numberBetween(1, min($remainingToShip, 10));

                ShipmentItem::factory()
                    ->forShipment($shipment->id)
                    ->forSalesOrderItem($soItem->id)
                    ->forProduct($soItem->product_id)
                    ->withLocation($location->id)
                    ->withQuantity($quantity)
                    ->create();

                // Update the sales order item's shipped quantity
                $soItem->ship($quantity);

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create specialized shipment items.
     */
    protected function createSpecializedShipmentItems(): void
    {
        $this->command->info("\nCreating specialized shipment items...");

        // 1. Batch tracked items
        $this->createBatchTrackedItems();

        // 2. Serial tracked items
        $this->createSerialTrackedItems();

        // 3. Multi-location shipments
        $this->createMultiLocationItems();

        // 4. Damaged items
        $this->createDamagedItems();

        // 5. Quality hold items
        $this->createQualityHoldItems();

        // 6. Expedited items
        $this->createExpeditedItems();

        // 7. Gift items
        $this->createGiftItems();

        // 8. Fragile items
        $this->createFragileItems();

        // 9. High-value items
        $this->createHighValueItems();

        // 10. Split shipments (same item across multiple shipments)
        $this->createSplitShipmentItems();

        // 11. Backordered items
        $this->createBackorderedItems();

        // 12. Substituted items
        $this->createSubstitutedItems();
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

        $shipments = Shipment::shipped()->inRandomOrder()->limit(10)->get();

        foreach ($shipments as $shipment) {
            foreach ($batchProducts->random(2) as $product) {
                $soItem = SalesOrderItem::where('product_id', $product->id)
                    ->whereHas('salesOrder', function ($q) use ($shipment) {
                        $q->where('id', $shipment->sales_order_id);
                    })
                    ->first();

                if (!$soItem) {
                    continue;
                }

                // Create multiple batches for the same product
                for ($i = 0; $i < 2; $i++) {
                    ShipmentItem::factory()
                        ->forShipment($shipment->id)
                        ->forSalesOrderItem($soItem->id)
                        ->forProduct($product->id)
                        ->withBatch('BATCH-' . date('y') . '-' . str_pad($i + 1, 3, '0', STR_PAD_LEFT))
                        ->withQuantity(fake()->numberBetween(1, 5))
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

        $shipments = Shipment::shipped()->inRandomOrder()->limit(8)->get();

        foreach ($shipments as $shipment) {
            foreach ($serialProducts->random(2) as $product) {
                $soItem = SalesOrderItem::where('product_id', $product->id)
                    ->whereHas('salesOrder', function ($q) use ($shipment) {
                        $q->where('id', $shipment->sales_order_id);
                    })
                    ->first();

                if (!$soItem) {
                    continue;
                }

                // Create individual serial numbers
                for ($i = 0; $i < 3; $i++) {
                    ShipmentItem::factory()
                        ->forShipment($shipment->id)
                        ->forSalesOrderItem($soItem->id)
                        ->forProduct($product->id)
                        ->withSerial()
                        ->withQuantity(1)
                        ->create();

                    $this->command->getOutput()->progressAdvance(1);
                }
            }
        }
    }

    /**
     * Create multi-location shipments.
     */
    protected function createMultiLocationItems(): void
    {
        $this->command->info('  - Creating multi-location shipments...');

        $shipments = Shipment::inRandomOrder()->limit(5)->get();

        foreach ($shipments as $shipment) {
            $soItem = $shipment->salesOrder->items()->first();

            if (!$soItem) {
                continue;
            }

            $locations = Location::where('warehouse_id', $shipment->warehouse_id)
                ->inRandomOrder()
                ->limit(3)
                ->get();

            $totalQuantity = 0;
            foreach ($locations as $location) {
                $quantity = fake()->numberBetween(1, 3);
                $totalQuantity += $quantity;

                ShipmentItem::factory()
                    ->forShipment($shipment->id)
                    ->forSalesOrderItem($soItem->id)
                    ->forProduct($soItem->product_id)
                    ->withLocation($location->id)
                    ->withQuantity($quantity)
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }

            // Update SO item with total shipped quantity
            $soItem->ship($totalQuantity);
        }
    }

    /**
     * Create damaged items.
     */
    protected function createDamagedItems(): void
    {
        $this->command->info('  - Creating damaged items...');

        $shipments = Shipment::shipped()->inRandomOrder()->limit(4)->get();

        foreach ($shipments as $shipment) {
            $soItem = $shipment->salesOrder->items()->first();

            if ($soItem) {
                ShipmentItem::factory()
                    ->forShipment($shipment->id)
                    ->forSalesOrderItem($soItem->id)
                    ->forProduct($soItem->product_id)
                    ->damaged()
                    ->withQuantity(fake()->numberBetween(1, 2))
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create quality hold items.
     */
    protected function createQualityHoldItems(): void
    {
        $this->command->info('  - Creating quality hold items...');

        $shipments = Shipment::packed()->inRandomOrder()->limit(3)->get();

        foreach ($shipments as $shipment) {
            $soItem = $shipment->salesOrder->items()->first();

            if ($soItem) {
                ShipmentItem::factory()
                    ->forShipment($shipment->id)
                    ->forSalesOrderItem($soItem->id)
                    ->forProduct($soItem->product_id)
                    ->qualityHold()
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create expedited items.
     */
    protected function createExpeditedItems(): void
    {
        $this->command->info('  - Creating expedited items...');

        $shipments = Shipment::whereHas('salesOrder', function ($q) {
            $q->where('shipping_method', 'like', '%Next Day%')
                ->orWhere('shipping_method', 'like', '%Expedited%');
        })->get();

        foreach ($shipments->take(5) as $shipment) {
            $soItems = $shipment->salesOrder->items()->limit(2)->get();

            foreach ($soItems as $soItem) {
                ShipmentItem::factory()
                    ->forShipment($shipment->id)
                    ->forSalesOrderItem($soItem->id)
                    ->forProduct($soItem->product_id)
                    ->expedited()
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create gift items.
     */
    protected function createGiftItems(): void
    {
        $this->command->info('  - Creating gift items...');

        $shipments = Shipment::inRandomOrder()->limit(4)->get();

        foreach ($shipments as $shipment) {
            $soItem = $shipment->salesOrder->items()->first();

            if ($soItem) {
                ShipmentItem::factory()
                    ->forShipment($shipment->id)
                    ->forSalesOrderItem($soItem->id)
                    ->forProduct($soItem->product_id)
                    ->giftWrapped()
                    ->withQuantity(1)
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create fragile items.
     */
    protected function createFragileItems(): void
    {
        $this->command->info('  - Creating fragile items...');

        $shipments = Shipment::shipped()->inRandomOrder()->limit(5)->get();

        foreach ($shipments as $shipment) {
            $soItem = $shipment->salesOrder->items()->first();

            if ($soItem) {
                ShipmentItem::factory()
                    ->forShipment($shipment->id)
                    ->forSalesOrderItem($soItem->id)
                    ->forProduct($soItem->product_id)
                    ->specialHandling()
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

        $highValueProducts = Product::whereHas('productSuppliers', function ($q) {
            $q->where('unit_cost', '>', 500);
        })->get();

        if ($highValueProducts->isEmpty()) {
            $highValueProducts = Product::factory()->highValue()->count(3)->create();
        }

        $shipments = Shipment::shipped()->inRandomOrder()->limit(5)->get();

        foreach ($shipments as $shipment) {
            foreach ($highValueProducts->random(2) as $product) {
                $soItem = SalesOrderItem::where('product_id', $product->id)
                    ->whereHas('salesOrder', function ($q) use ($shipment) {
                        $q->where('id', $shipment->sales_order_id);
                    })
                    ->first();

                if (!$soItem) {
                    continue;
                }

                ShipmentItem::factory()
                    ->forShipment($shipment->id)
                    ->forSalesOrderItem($soItem->id)
                    ->forProduct($product->id)
                    ->withQuantity(1)
                    ->state([
                        'notes' => 'High-value item - signature required',
                    ])
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create split shipment items.
     */
    protected function createSplitShipmentItems(): void
    {
        $this->command->info('  - Creating split shipment items...');

        for ($i = 0; $i < 4; $i++) {
            $so = SalesOrder::factory()->create();

            // Create a product with large quantity
            $product = Product::inRandomOrder()->first();
            $totalQuantity = fake()->numberBetween(20, 50);

            $soItem = SalesOrderItem::factory()
                ->forSalesOrder($so->id)
                ->forProduct($product->id)
                ->withQuantity($totalQuantity, $product->unit_cost ?? 50, 0, 0)
                ->create();

            // Create multiple shipments for this order
            $shipment1 = Shipment::factory()
                ->forSalesOrder($so->id)
                ->shipped()
                ->create();

            $qty1 = fake()->numberBetween(5, 15);
            ShipmentItem::factory()
                ->forShipment($shipment1->id)
                ->forSalesOrderItem($soItem->id)
                ->forProduct($product->id)
                ->withQuantity($qty1)
                ->create();

            $shipment2 = Shipment::factory()
                ->forSalesOrder($so->id)
                ->shipped()
                ->create();

            $qty2 = fake()->numberBetween(5, 15);
            ShipmentItem::factory()
                ->forShipment($shipment2->id)
                ->forSalesOrderItem($soItem->id)
                ->forProduct($product->id)
                ->withQuantity($qty2)
                ->create();

            // Update SO item total shipped
            $soItem->ship($qty1 + $qty2);

            $this->command->getOutput()->progressAdvance(3);
        }
    }

    /**
     * Create backordered items.
     */
    protected function createBackorderedItems(): void
    {
        $this->command->info('  - Creating backordered items...');

        for ($i = 0; $i < 4; $i++) {
            $so = SalesOrder::factory()->approved()->create();

            $product = Product::inRandomOrder()->first();

            $soItem = SalesOrderItem::factory()
                ->forSalesOrder($so->id)
                ->forProduct($product->id)
                ->withQuantity(10, $product->unit_cost ?? 50, 0, 5) // 5 shipped, 5 backordered
                ->create();

            $shipment = Shipment::factory()
                ->forSalesOrder($so->id)
                ->shipped()
                ->create();

            ShipmentItem::factory()
                ->forShipment($shipment->id)
                ->forSalesOrderItem($soItem->id)
                ->forProduct($product->id)
                ->withQuantity(5)
                ->state([
                    'notes' => 'Partial shipment - remaining items backordered',
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(2);
        }
    }

    /**
     * Create substituted items.
     */
    protected function createSubstitutedItems(): void
    {
        $this->command->info('  - Creating substituted items...');

        for ($i = 0; $i < 3; $i++) {
            $so = SalesOrder::factory()->approved()->create();

            $originalProduct = Product::inRandomOrder()->first();
            $substituteProduct = Product::where('id', '!=', $originalProduct->id)
                ->inRandomOrder()
                ->first();

            $soItem = SalesOrderItem::factory()
                ->forSalesOrder($so->id)
                ->forProduct($originalProduct->id)
                ->withQuantity(5, $originalProduct->unit_cost ?? 50, 0, 0)
                ->create();

            $shipment = Shipment::factory()
                ->forSalesOrder($so->id)
                ->shipped()
                ->create();

            // Ship substitute product instead
            ShipmentItem::factory()
                ->forShipment($shipment->id)
                ->forSalesOrderItem($soItem->id)
                ->forProduct($substituteProduct->id)
                ->withQuantity(5)
                ->state([
                    'notes' => 'Substituted with ' . $substituteProduct->name . ' - original out of stock',
                ])
                ->create();

            // Update SO item with shipped quantity
            $soItem->ship(5);

            $this->command->getOutput()->progressAdvance(2);
        }
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nShipment Item Statistics:");

        $totalItems = ShipmentItem::count();
        $totalQuantity = ShipmentItem::sum('quantity_shipped');
        $totalValue = ShipmentItem::sum('line_value');

        $batchCount = ShipmentItem::whereNotNull('batch_number')->count();
        $serialCount = ShipmentItem::whereNotNull('serial_number')->count();

        $uniqueProducts = ShipmentItem::distinct('product_id')->count('product_id');

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Shipment Items', $totalItems],
                ['Total Quantity Shipped', number_format($totalQuantity)],
                ['Total Value Shipped', '$' . number_format($totalValue, 2)],
                ['Average Items per Shipment', round($totalItems / max(Shipment::count(), 1), 2)],
                ['Batch Tracked Items', $batchCount],
                ['Serial Tracked Items', $serialCount],
                ['Unique Products Shipped', $uniqueProducts],
            ]
        );

        // Show product shipping summary for a sample product
        $sampleProduct = Product::inRandomOrder()->first();
        if ($sampleProduct) {
            $summary = ShipmentItem::getProductShippingSummary($sampleProduct->id, 90);

            $this->command->info("\nSample Product Shipping Summary: {$sampleProduct->name}");
            $this->command->table(
                ['Metric', 'Value'],
                [
                    ['Total Shipped', $summary['total_shipped']],
                    ['Total Value', '$' . number_format($summary['total_value'], 2)],
                    ['Shipment Count', $summary['shipment_count']],
                    ['Average per Shipment', $summary['average_per_shipment']],
                ]
            );
        }

        // Show items needing tracking validation
        $needingValidation = ShipmentItem::getItemsNeedingTrackingValidation();
        if ($needingValidation->isNotEmpty()) {
            $this->command->warn("\n⚠️  There are {$needingValidation->count()} items that need tracking validation!");
        }

        // Show top shipped products
        $this->command->info("\nTop 5 Shipped Products:");
        $topProducts = ShipmentItem::select('product_id', DB::raw('SUM(quantity_shipped) as total_shipped'))
            ->with('product')
            ->groupBy('product_id')
            ->orderBy('total_shipped', 'desc')
            ->limit(5)
            ->get();

        $this->command->table(
            ['Product', 'Quantity Shipped'],
            $topProducts->map(function ($item) {
                return [
                    $item->product->name ?? 'Unknown',
                    $item->total_shipped,
                ];
            })->toArray()
        );
    }
}
