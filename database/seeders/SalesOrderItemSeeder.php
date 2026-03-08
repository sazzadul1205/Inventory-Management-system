<?php
// database/seeders/SalesOrderItemSeeder.php

namespace Database\Seeders;

use App\Models\SalesOrderItem;
use App\Models\SalesOrder;
use App\Models\Product;
use App\Models\ShipmentItem;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class SalesOrderItemSeeder extends Seeder
{
    use ChecksDependencies;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        if (!$this->checkDependencies([
            SalesOrder::class => 'No sales orders found',
            Product::class => 'No products found',
        ])) {
            return;
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        SalesOrderItem::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating sales order items...');
        $this->command->getOutput()->progressStart(100);

        $this->createItemsForExistingSOs();
        $this->createSpecializedItems();

        $this->command->getOutput()->progressFinish();
        $this->displayStatistics();
    }

    /**
     * Check if SOs and products exist.
     */
    protected function checkPrerequisites(): void
    {
        if (SalesOrder::count() == 0) {
            $this->command->warn('No sales orders found. Running SalesOrderSeeder first...');
            $this->call(SalesOrderSeeder::class);
        }

        if (Product::count() == 0) {
            $this->command->warn('No products found. Running ProductSeeder first...');
            $this->call(ProductSeeder::class);
        }
    }

    /**
     * Create items for existing sales orders.
     */
    protected function createItemsForExistingSOs(): void
    {
        $salesOrders = SalesOrder::with('customer')->get();

        foreach ($salesOrders as $so) {
            // Number of items per SO based on order type
            $itemCount = $this->getItemCountForSO($so);

            // Track used products for this sales order to avoid duplicates
            $usedProductIds = [];

            for ($i = 0; $i < $itemCount; $i++) {
                // Get a product that hasn't been used in this order yet
                $product = Product::whereNotIn('id', $usedProductIds)
                    ->inRandomOrder()
                    ->first();

                // If no more unique products available, break the loop
                if (!$product) {
                    break;
                }

                // Add to used products
                $usedProductIds[] = $product->id;

                // Determine item status based on SO status
                $itemStatus = $this->getItemStatusForSO($so->status);

                SalesOrderItem::factory()
                    ->forSalesOrder($so->id)
                    ->forProduct($product->id)
                    ->{$itemStatus}()
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Get number of items for an SO.
     */
    protected function getItemCountForSO(SalesOrder $so): int
    {
        return match (true) {
            $so->total_amount > 10000 => rand(5, 12), // Large orders
            $so->total_amount > 5000 => rand(3, 8),
            default => rand(1, 5),
        };
    }

    /**
     * Get item status based on SO status.
     */
    protected function getItemStatusForSO(string $soStatus): string
    {
        return match ($soStatus) {
            SalesOrder::STATUS_DRAFT,
            SalesOrder::STATUS_PENDING => 'pending',

            SalesOrder::STATUS_APPROVED => fake()->randomElement(['pending']),

            SalesOrder::STATUS_PROCESSING => fake()->randomElement(['pending', 'partiallyShipped']),

            SalesOrder::STATUS_PARTIALLY_SHIPPED => 'partiallyShipped',

            SalesOrder::STATUS_SHIPPED,
            SalesOrder::STATUS_DELIVERED => 'shipped',

            SalesOrder::STATUS_CANCELLED => 'cancelled',

            default => 'pending',
        };
    }

    /**
     * Create specialized item scenarios.
     */
    protected function createSpecializedItems(): void
    {
        $this->command->info("\nCreating specialized sales order items...");

        // 1. High value items
        $this->createHighValueItems();

        // 2. Bulk items
        $this->createBulkItems();

        // 3. Items with batch tracking
        $this->createBatchTrackedItems();

        // 4. Items with serial tracking
        $this->createSerialTrackedItems();

        // 5. Discounted items
        $this->createDiscountedItems();

        // 6. Tax-exempt items
        $this->createTaxExemptItems();

        // 7. Split shipment items
        $this->createSplitShipmentItems();

        // 8. Backordered items
        $this->createBackorderedItems();

        // 9. Rush/expedited items
        $this->createRushItems();

        // 10. Gift items (zero cost)
        $this->createGiftItems();
    }

    /**
     * Create high value items.
     */
    protected function createHighValueItems(): void
    {
        $this->command->info('  - Creating high value items...');

        $sos = SalesOrder::where('total_amount', '>', 10000)->get();

        foreach ($sos->take(8) as $so) {
            // Get ALL products already used in this sales order (from previous seeding)
            $existingProductIds = SalesOrderItem::where('sales_order_id', $so->id)
                ->pluck('product_id')
                ->toArray();

            $itemsToCreate = rand(1, 2);
            $createdCount = 0;

            for ($i = 0; $i < $itemsToCreate; $i++) {
                // Get a product that hasn't been used in this order yet
                $product = Product::whereNotIn('id', $existingProductIds)
                    ->inRandomOrder()
                    ->first();

                if (!$product) {
                    break;
                }

                // Add to existing products list
                $existingProductIds[] = $product->id;

                SalesOrderItem::factory()
                    ->forSalesOrder($so->id)
                    ->forProduct($product->id)
                    ->highValue()
                    ->create();

                $createdCount++;
                $this->command->getOutput()->progressAdvance(1);
            }

            if ($createdCount === 0) {
                $this->command->warn("    No unique products available for SO #{$so->id}");
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
            $q->where('name', 'like', '%Raw Materials%')
                ->orWhere('name', 'like', '%Bulk%');
        })->get();

        if ($bulkProducts->isEmpty()) {
            $bulkProducts = Product::factory()->bulkItem()->count(5)->create();
        }

        $sos = SalesOrder::where('total_amount', '>', 5000)->get();

        foreach ($sos->take(6) as $so) {
            // Get products already used in this order
            $existingProductIds = SalesOrderItem::where('sales_order_id', $so->id)
                ->pluck('product_id')
                ->toArray();

            // Filter bulk products to only those not used
            $availableProducts = $bulkProducts->whereNotIn('id', $existingProductIds);

            if ($availableProducts->count() < 2) {
                continue;
            }

            foreach ($availableProducts->random(2) as $product) {
                SalesOrderItem::factory()
                    ->forSalesOrder($so->id)
                    ->forProduct($product->id)
                    ->bulkItem()
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
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

        $shippedSOs = SalesOrder::shipped()->get();

        foreach ($shippedSOs->take(8) as $so) {
            // Get products already used in this order
            $existingProductIds = SalesOrderItem::where('sales_order_id', $so->id)
                ->pluck('product_id')
                ->toArray();

            // Filter batch products to only those not used
            $availableProducts = $batchProducts->whereNotIn('id', $existingProductIds);

            if ($availableProducts->count() < 2) {
                continue;
            }

            foreach ($availableProducts->random(2) as $product) {
                $item = SalesOrderItem::factory()
                    ->forSalesOrder($so->id)
                    ->forProduct($product->id)
                    ->shipped()
                    ->create();

                // Add shipment items with batch numbers
                if ($item->quantity_shipped > 0) {
                    for ($i = 0; $i < min(2, $item->quantity_shipped); $i++) {
                        if (class_exists('ShipmentItem')) {
                            ShipmentItem::factory()
                                ->forSalesOrderItem($item->id)
                                ->withBatch()
                                ->create();
                        }
                    }
                }

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

        $shippedSOs = SalesOrder::shipped()->get();

        foreach ($shippedSOs->take(6) as $so) {
            // Get products already used in this order
            $existingProductIds = SalesOrderItem::where('sales_order_id', $so->id)
                ->pluck('product_id')
                ->toArray();

            // Filter serial products to only those not used
            $availableProducts = $serialProducts->whereNotIn('id', $existingProductIds);

            if ($availableProducts->count() < 2) {
                continue;
            }

            foreach ($availableProducts->random(2) as $product) {
                $quantity = rand(2, 4);

                $item = SalesOrderItem::factory()
                    ->forSalesOrder($so->id)
                    ->forProduct($product->id)
                    ->withQuantity($quantity, rand(100, 500), 0, $quantity)
                    ->create();

                // Create shipment items with serial numbers for each unit
                for ($i = 0; $i < $quantity; $i++) {
                    if (class_exists('ShipmentItem')) {
                        ShipmentItem::factory()
                            ->forSalesOrderItem($item->id)
                            ->withSerial()
                            ->create();
                    }
                }

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }


    /**
     * Create discounted items.
     */
    protected function createDiscountedItems(): void
    {
        $this->command->info('  - Creating discounted items...');

        $sos = SalesOrder::where('status', SalesOrder::STATUS_APPROVED)
            ->orWhere('status', SalesOrder::STATUS_PROCESSING)
            ->orWhere('status', SalesOrder::STATUS_SHIPPED)
            ->get()
            ->take(10);

        foreach ($sos as $so) {
            // Get ALL products already used in this sales order
            $existingProductIds = SalesOrderItem::where('sales_order_id', $so->id)
                ->pluck('product_id')
                ->toArray();

            $itemsToCreate = rand(1, 2);
            $createdCount = 0;

            for ($i = 0; $i < $itemsToCreate; $i++) {
                $product = Product::whereNotIn('id', $existingProductIds)
                    ->inRandomOrder()
                    ->first();

                if (!$product) {
                    break;
                }

                $existingProductIds[] = $product->id;

                SalesOrderItem::factory()
                    ->forSalesOrder($so->id)
                    ->forProduct($product->id)
                    ->discounted(rand(5, 20))
                    ->create();

                $createdCount++;
                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }


    /**
     * Create tax-exempt items.
     */
    protected function createTaxExemptItems(): void
    {
        $this->command->info('  - Creating tax-exempt items...');

        $sos = SalesOrder::inRandomOrder()->take(8)->get();

        foreach ($sos as $so) {
            // Get products already used in this order
            $existingProductIds = SalesOrderItem::where('sales_order_id', $so->id)
                ->pluck('product_id')
                ->toArray();

            // Get a product not already used in this order
            $product = Product::whereNotIn('id', $existingProductIds)
                ->inRandomOrder()
                ->first();

            if (!$product) {
                continue;
            }

            SalesOrderItem::factory()
                ->forSalesOrder($so->id)
                ->forProduct($product->id)
                ->taxExempt()
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create split shipment items (multiple shipments).
     */
    protected function createSplitShipmentItems(): void
    {
        $this->command->info('  - Creating split shipment items...');

        for ($i = 0; $i < 5; $i++) {
            $so = SalesOrder::factory()
                ->partiallyShipped()
                ->create();

            // Get a product not already used in this order (new order, so no products yet)
            $product = Product::inRandomOrder()->first();

            $ordered = rand(50, 200);
            $firstShipment = rand(20, 60);
            $secondShipment = rand(10, min(40, $ordered - $firstShipment));

            $item = SalesOrderItem::factory()
                ->forSalesOrder($so->id)
                ->forProduct($product->id)
                ->withQuantity($ordered, rand(10, 50), 0, $firstShipment)
                ->create();

            // Create shipment items
            if (class_exists('ShipmentItem')) {
                ShipmentItem::factory()
                    ->forSalesOrderItem($item->id)
                    ->withQuantity($firstShipment)
                    ->create();

                if ($secondShipment > 0) {
                    $item->ship($secondShipment);

                    ShipmentItem::factory()
                        ->forSalesOrderItem($item->id)
                        ->withQuantity($secondShipment)
                        ->create();
                }
            }

            $this->command->getOutput()->progressAdvance(2);
        }
    }

    /**
     * Create backordered items.
     */
    protected function createBackorderedItems(): void
    {
        $this->command->info('  - Creating backordered items...');

        for ($i = 0; $i < 6; $i++) {
            $so = SalesOrder::factory()->approved()->create();

            // Get products already used in this order (should be empty for new orders)
            $existingProductIds = SalesOrderItem::where('sales_order_id', $so->id)
                ->pluck('product_id')
                ->toArray();

            $itemsToCreate = rand(1, 2);
            $createdCount = 0;

            for ($j = 0; $j < $itemsToCreate; $j++) {
                $product = Product::whereNotIn('id', $existingProductIds)
                    ->inRandomOrder()
                    ->first();

                if (!$product) {
                    break;
                }

                $existingProductIds[] = $product->id;

                SalesOrderItem::factory()
                    ->forSalesOrder($so->id)
                    ->forProduct($product->id)
                    ->pending()
                    ->state([
                        'notes' => 'Backordered - awaiting stock',
                    ])
                    ->create();

                $createdCount++;
                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }


    /**
     * Create rush/expedited items.
     */
    protected function createRushItems(): void
    {
        $this->command->info('  - Creating rush items...');

        // Instead of querying by shipping_method, get orders with urgent flag or recent orders
        $sos = SalesOrder::where('order_date', '>=', now()->subDays(7))
            ->orWhere('notes', 'like', '%rush%')
            ->orWhere('notes', 'like', '%expedite%')
            ->orWhere('notes', 'like', '%urgent%')
            ->get()
            ->take(5);

        if ($sos->isEmpty()) {
            // Create new urgent orders
            $sos = SalesOrder::factory()
                ->count(3)
                ->state([
                    'notes' => 'Rush order - urgent processing',
                ])
                ->create();
        }

        foreach ($sos as $so) {
            // Get ALL products already used in this sales order
            $existingProductIds = SalesOrderItem::where('sales_order_id', $so->id)
                ->pluck('product_id')
                ->toArray();

            $itemsToCreate = rand(1, 3);
            $createdCount = 0;

            for ($i = 0; $i < $itemsToCreate; $i++) {
                $product = Product::whereNotIn('id', $existingProductIds)
                    ->inRandomOrder()
                    ->first();

                if (!$product) {
                    break;
                }

                $existingProductIds[] = $product->id;

                SalesOrderItem::factory()
                    ->forSalesOrder($so->id)
                    ->forProduct($product->id)
                    ->pending()
                    ->state([
                        'notes' => 'Rush order - priority processing',
                    ])
                    ->create();

                $createdCount++;
                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }


    /**
     * Create gift items (zero cost).
     */
    protected function createGiftItems(): void
    {
        $this->command->info('  - Creating gift items...');

        $sos = SalesOrder::inRandomOrder()->take(4)->get();

        foreach ($sos as $so) {
            // Get products already used in this order
            $existingProductIds = SalesOrderItem::where('sales_order_id', $so->id)
                ->pluck('product_id')
                ->toArray();

            // Get a product not already used in this order
            $product = Product::whereNotIn('id', $existingProductIds)
                ->inRandomOrder()
                ->first();

            if (!$product) {
                continue;
            }

            SalesOrderItem::factory()
                ->forSalesOrder($so->id)
                ->forProduct($product->id)
                ->withQuantity(rand(1, 3), 0, 0, rand(0, 1))
                ->state([
                    'notes' => 'Complimentary gift item',
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
        $this->command->info("\nSales Order Item Statistics:");

        $totalItems = SalesOrderItem::count();
        $pendingItems = SalesOrderItem::pending()->count();
        $partialItems = SalesOrderItem::partiallyShipped()->count();
        $shippedItems = SalesOrderItem::shipped()->count();
        $cancelledItems = SalesOrderItem::where('status', SalesOrderItem::STATUS_CANCELLED)->count();

        $totalOrdered = SalesOrderItem::sum('quantity_ordered');
        $totalShipped = SalesOrderItem::sum('quantity_shipped');
        $totalValue = SalesOrderItem::sum('line_total');

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Items', $totalItems],
                ['Pending Items', $pendingItems],
                ['Partially Shipped', $partialItems],
                ['Fully Shipped', $shippedItems],
                ['Cancelled', $cancelledItems],
                ['Total Ordered Qty', number_format($totalOrdered)],
                ['Total Shipped Qty', number_format($totalShipped)],
                ['Total Value', '$' . number_format($totalValue, 2)],
                ['Shipment Rate', $totalOrdered > 0 ? round(($totalShipped / $totalOrdered) * 100, 2) . '%' : '0%'],
            ]
        );

        // Show pending shipment items
        $pendingShipment = SalesOrderItem::getPendingShipmentItems();
        if ($pendingShipment->isNotEmpty()) {
            $this->command->warn("\n⚠️  There are {$pendingShipment->count()} items pending shipment!");

            $this->command->table(
                ['SO Number', 'Customer', 'Product', 'Ordered', 'Shipped', 'Remaining'],
                $pendingShipment->take(5)->map(function ($item) {
                    return [
                        $item->salesOrder->so_number,
                        $item->salesOrder->customer->name,
                        $item->product->name,
                        $item->quantity_ordered,
                        $item->quantity_shipped,
                        $item->remaining_quantity,
                    ];
                })->toArray()
            );
        }

        // Show product demand for a sample product
        $sampleProduct = Product::inRandomOrder()->first();
        if ($sampleProduct) {
            $demand = SalesOrderItem::getProductDemandSummary($sampleProduct->id, 90);

            $this->command->info("\nSample Product Demand: {$sampleProduct->name}");
            $this->command->table(
                ['Metric', 'Value'],
                [
                    ['Total Ordered', $demand['total_ordered']],
                    ['Total Shipped', $demand['total_shipped']],
                    ['Outstanding', $demand['outstanding']],
                    ['Total Value', '$' . number_format($demand['total_value'], 2)],
                    ['Completion Rate', $demand['completion_rate'] . '%'],
                ]
            );
        }
    }
}
