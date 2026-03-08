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
            // Filter out cancelled items
            $soItems = $shipment->salesOrder->items->filter(function ($item) {
                return $item->status !== \App\Models\SalesOrderItem::STATUS_CANCELLED;
            });

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

                // Don't ship more than what's remaining
                $quantity = fake()->numberBetween(1, min($remainingToShip, 10));

                $shipmentItem = ShipmentItem::factory()
                    ->forShipment($shipment->id)
                    ->forSalesOrderItem($soItem->id)
                    ->forProduct($soItem->product_id)
                    ->withLocation($location->id)
                    ->withQuantity($quantity)
                    ->create();

                // Update the sales order item's shipped quantity
                try {
                    $soItem->ship($quantity);
                    $this->command->getOutput()->progressAdvance(1);
                } catch (\Exception $e) {
                    $this->command->warn("  - Error shipping: " . $e->getMessage());
                    // Rollback if ship fails
                    $shipmentItem->delete();
                }
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

            // Check if item is cancelled
            if ($soItem->status === \App\Models\SalesOrderItem::STATUS_CANCELLED) {
                $this->command->warn("    - Skipping cancelled item for shipment {$shipment->id}");
                continue;
            }

            $locations = Location::where('warehouse_id', $shipment->warehouse_id)
                ->inRandomOrder()
                ->limit(3)
                ->get();

            $remainingToShip = $soItem->quantity_ordered - $soItem->quantity_shipped;

            if ($remainingToShip <= 0) {
                $this->command->warn("    - No remaining quantity to ship for shipment {$shipment->id}");
                continue;
            }

            $totalQuantity = 0;
            $createdItems = [];

            foreach ($locations as $location) {
                // Calculate max quantity we can still ship from this location
                $maxForThisLocation = min(3, $remainingToShip - $totalQuantity);

                if ($maxForThisLocation <= 0) {
                    break;
                }

                $quantity = fake()->numberBetween(1, $maxForThisLocation);
                $totalQuantity += $quantity;

                $shipmentItem = ShipmentItem::factory()
                    ->forShipment($shipment->id)
                    ->forSalesOrderItem($soItem->id)
                    ->forProduct($soItem->product_id)
                    ->withLocation($location->id)
                    ->withQuantity($quantity)
                    ->create();

                $createdItems[] = $shipmentItem;
                $this->command->getOutput()->progressAdvance(1);
            }

            // Update SO item with total shipped quantity only if we created items
            if ($totalQuantity > 0) {
                try {
                    $soItem->ship($totalQuantity);
                    $this->command->info("    - Shipped {$totalQuantity} units for item {$soItem->id}");
                } catch (\Exception $e) {
                    $this->command->warn("    - Error shipping: " . $e->getMessage());
                    // Rollback created shipment items if ship fails
                    foreach ($createdItems as $item) {
                        $item->delete();
                    }
                }
            }
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

            // Make sure the item is not cancelled
            if ($soItem->status === SalesOrderItem::STATUS_CANCELLED) {
                continue;
            }

            // Create first shipment with unique number
            $shipment1 = Shipment::factory()
                ->forSalesOrder($so->id)
                ->shipped()
                ->state([
                    'shipment_number' => $this->generateUniqueShipmentNumber(),
                ])
                ->create();

            $qty1 = fake()->numberBetween(5, 15);
            $item1 = ShipmentItem::factory()
                ->forShipment($shipment1->id)
                ->forSalesOrderItem($soItem->id)
                ->forProduct($product->id)
                ->withQuantity($qty1)
                ->create();

            // Create second shipment with unique number
            $shipment2 = Shipment::factory()
                ->forSalesOrder($so->id)
                ->shipped()
                ->state([
                    'shipment_number' => $this->generateUniqueShipmentNumber(),
                ])
                ->create();

            $qty2 = fake()->numberBetween(5, 15);
            $item2 = ShipmentItem::factory()
                ->forShipment($shipment2->id)
                ->forSalesOrderItem($soItem->id)
                ->forProduct($product->id)
                ->withQuantity($qty2)
                ->create();

            // Update SO item total shipped
            try {
                $soItem->ship($qty1 + $qty2);
                $this->command->getOutput()->progressAdvance(3);
            } catch (\Exception $e) {
                $this->command->warn("  - Skipping split shipment: " . $e->getMessage());

                // Clean up created items and shipments
                // Delete items first (no restrictions on item deletion)
                if (isset($item1)) {
                    $item1->delete();
                }
                if (isset($item2)) {
                    $item2->delete();
                }

                // Delete shipments if they exist and are not shipped
                // Since they're already marked as shipped, we can't delete them
                // Instead, we'll just leave them and mark as cancelled if possible
                try {
                    if (isset($shipment1) && $shipment1->status === Shipment::STATUS_SHIPPED) {
                        // Can't delete, but we can mark as cancelled if the model allows
                        $shipment1->status = Shipment::STATUS_CANCELLED;
                        $shipment1->save();
                    }
                } catch (\Exception $ex) {
                    // If we can't change status, just leave it
                }

                try {
                    if (isset($shipment2) && $shipment2->status === Shipment::STATUS_SHIPPED) {
                        $shipment2->status = Shipment::STATUS_CANCELLED;
                        $shipment2->save();
                    }
                } catch (\Exception $ex) {
                    // If we can't change status, just leave it
                }

                continue;
            }
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

            // Make sure the item is not cancelled
            if ($soItem->status === SalesOrderItem::STATUS_CANCELLED) {
                continue;
            }

            // Generate a unique shipment number
            $shipmentNumber = $this->generateUniqueShipmentNumber();

            $shipment = Shipment::factory()
                ->forSalesOrder($so->id)
                ->shipped()
                ->state([
                    'shipment_number' => $shipmentNumber,
                ])
                ->create();

            $shipmentItem = ShipmentItem::factory()
                ->forShipment($shipment->id)
                ->forSalesOrderItem($soItem->id)
                ->forProduct($product->id)
                ->withQuantity(5)
                ->state([
                    'notes' => 'Partial shipment - remaining items backordered',
                ])
                ->create();

            try {
                $soItem->ship(5);
                $this->command->getOutput()->progressAdvance(2);
            } catch (\Exception $e) {
                $this->command->warn("  - Skipping backordered item: " . $e->getMessage());

                // Clean up created items
                if (isset($shipmentItem)) {
                    $shipmentItem->delete();
                }

                // Handle shipment cleanup
                try {
                    if (isset($shipment) && $shipment->status === Shipment::STATUS_SHIPPED) {
                        $shipment->status = Shipment::STATUS_CANCELLED;
                        $shipment->save();
                    }
                } catch (\Exception $ex) {
                    // If we can't change status, just leave it
                }

                continue;
            }
        }
    }

    /**
     * Generate a unique shipment number.
     */
    protected function generateUniqueShipmentNumber(): string
    {
        do {
            $number = 'SHIP-' . date('Ymd') . '-' . fake()->unique()->numberBetween(1000, 9999);
        } while (Shipment::where('shipment_number', $number)->exists());

        return $number;
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

            // Make sure the item is not cancelled
            if ($soItem->status === SalesOrderItem::STATUS_CANCELLED) {
                continue;
            }

            $shipment = Shipment::factory()
                ->forSalesOrder($so->id)
                ->shipped()
                ->state([
                    'shipment_number' => $this->generateUniqueShipmentNumber(),
                ])
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
            try {
                $soItem->ship(5);
            } catch (\Exception $e) {
                $this->command->warn("  - Skipping substituted item: " . $e->getMessage());
                $shipment->delete();
                continue;
            }

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
