<?php
// database/seeders/PurchaseOrderItemSeeder.php

namespace Database\Seeders;

use App\Models\PurchaseOrderItem;
use App\Models\PurchaseOrder;
use App\Models\Product;
use App\Models\PurchaseReceiptItem;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class PurchaseOrderItemSeeder extends Seeder
{
    use ChecksDependencies;
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        if (!$this->checkDependencies([
            PurchaseOrder::class => 'No purchase orders found',
            Product::class => 'No products found',
        ])) {
            return;
        }

       DB::statement('SET FOREIGN_KEY_CHECKS=0');
        PurchaseOrderItem::truncate();
       DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating purchase order items...');
        $this->command->getOutput()->progressStart(100);

        $this->createItemsForExistingPOs();
        $this->createSpecializedItems();

        $this->command->getOutput()->progressFinish();
        $this->displayStatistics();
    }

    /**
     * Check if POs and products exist.
     */
    protected function checkPrerequisites(): void
    {
        if (PurchaseOrder::count() == 0) {
            $this->command->warn('No purchase orders found. Running PurchaseOrderSeeder first...');
            $this->call(PurchaseOrderSeeder::class);
        }

        if (Product::count() == 0) {
            $this->command->warn('No products found. Running ProductSeeder first...');
            $this->call(ProductSeeder::class);
        }
    }

    /**
     * Create items for existing purchase orders.
     */
    protected function createItemsForExistingPOs(): void
    {
        // Get only POs that don't have any items yet
        $purchaseOrders = PurchaseOrder::doesntHave('items')->with('supplier')->get();

        if ($purchaseOrders->isEmpty()) {
            $this->command->info('All purchase orders already have items. Skipping...');
            return;
        }

        $this->command->info('Found ' . $purchaseOrders->count() . ' POs without items.');

        foreach ($purchaseOrders as $po) {
            // Number of items per PO based on PO type
            $itemCount = $this->getItemCountForPO($po);

            // Track products used in this PO to avoid duplicates
            $usedProductIds = [];

            // Get products that this supplier provides
            $supplierProducts = $po->supplier->products ?? collect();

            for ($i = 0; $i < $itemCount; $i++) {
                // Find a product not already used in this PO
                $product = null;
                $attempts = 0;
                $maxAttempts = 20;

                while (!$product && $attempts < $maxAttempts) {
                    if ($supplierProducts->isNotEmpty()) {
                        // Try to get a product from supplier's products not used yet
                        $availableProducts = $supplierProducts->whereNotIn('id', $usedProductIds);

                        if ($availableProducts->isNotEmpty()) {
                            $product = $availableProducts->random();
                        } else {
                            // If no more supplier products, get random products
                            $product = Product::whereNotIn('id', $usedProductIds)
                                ->inRandomOrder()
                                ->first();
                        }
                    } else {
                        // No supplier products, get random products
                        $product = Product::whereNotIn('id', $usedProductIds)
                            ->inRandomOrder()
                            ->first();
                    }

                    $attempts++;
                }

                // If we couldn't find a product after max attempts, break
                if (!$product) {
                    $this->command->warn("Could not find unique product for PO #{$po->id} after {$maxAttempts} attempts");
                    break;
                }

                // Add to used products
                $usedProductIds[] = $product->id;

                // Get supplier-specific pricing if available
                $productSupplier = $product->productSuppliers()
                    ->where('supplier_id', $po->supplier_id)
                    ->first();

                $unitPrice = $productSupplier
                    ? $productSupplier->unit_cost
                    : fake()->randomFloat(2, 10, 200);

                $quantityOrdered = $this->getQuantityForPO($po);

                // Determine receipt status based on PO status
                $received = $this->getReceivedQuantityForPO($po->status, $quantityOrdered);

                PurchaseOrderItem::factory()
                    ->forPurchaseOrder($po->id)
                    ->forProduct($product->id)
                    ->withQuantity(
                        $quantityOrdered,
                        $unitPrice,
                        $received
                    )
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Get number of items for a PO.
     */
    protected function getItemCountForPO(PurchaseOrder $po): int
    {
        return match ($po->total_amount) {
            $po->total_amount > 10000 => rand(1, 2), // Was rand(5,10)
            $po->total_amount > 5000 => rand(1, 2), // Was rand(3,6)
            default => rand(1, 2), // Was rand(1,4)
        };
    }

    /**
     * Get quantity for a PO based on PO type.
     */
    protected function getQuantityForPO(PurchaseOrder $po): int
    {
        if ($po->total_amount > 10000) {
            return rand(50, 200); // Bulk orders
        }

        if ($po->shipping_method === 'Next Day Air' || $po->shipping_method === 'Expedited') {
            return rand(1, 10); // Urgent orders, smaller quantities
        }

        return rand(5, 50); // Standard orders
    }

    /**
     * Get received quantity based on PO status.
     */
    protected function getReceivedQuantityForPO(string $poStatus, int $ordered): int
    {
        return match ($poStatus) {
            PurchaseOrder::STATUS_RECEIVED => $ordered,
            PurchaseOrder::STATUS_PARTIALLY_RECEIVED => fake()->numberBetween(1, max(1, $ordered - 1)),
            default => 0,
        };
    }

    /**
     * Create specialized item scenarios.
     */
    protected function createSpecializedItems(): void
    {
        $this->command->info("\nCreating specialized purchase order items...");

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

        // 7. Split shipments (multiple receipts)
        $this->createSplitShipmentItems();

        // 8. Overdue items
        $this->createOverdueItems();

        // 9. Backordered items
        $this->createBackorderedItems();

        // 10. Quality hold items
        $this->createQualityHoldItems();
    }

    /**
     * Create high value items.
     */
    protected function createHighValueItems(): void
    {
        $this->command->info('  - Creating high value items...');

        // Get POs that don't already have high value items
        $pos = PurchaseOrder::where('total_amount', '>', 10000)
            ->whereDoesntHave('items', function ($q) {
                $q->where('unit_price', '>', 500);
            })
            ->get();

        foreach ($pos as $po) {
            // Get existing products in this PO
            $existingProducts = PurchaseOrderItem::where('purchase_order_id', $po->id)
                ->pluck('product_id')
                ->toArray();

            // Get random products not already in this PO
            $products = Product::whereNotIn('id', $existingProducts)
                ->inRandomOrder()
                ->limit(rand(1, 3))
                ->get();

            foreach ($products as $product) {
                PurchaseOrderItem::factory()
                    ->forPurchaseOrder($po->id)
                    ->forProduct($product->id)
                    ->highValue()
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
            $q->where('name', 'like', '%Raw Materials%')
                ->orWhere('name', 'like', '%Bulk%');
        })->get();

        if ($bulkProducts->isEmpty()) {
            $bulkProducts = Product::factory()->bulkItem()->count(5)->create();
        }

        // Get POs that don't already have bulk items
        $pos = PurchaseOrder::where('total_amount', '>', 5000)
            ->whereDoesntHave('items', function ($q) use ($bulkProducts) {
                $q->whereIn('product_id', $bulkProducts->pluck('id'));
            })
            ->take(5)
            ->get();

        foreach ($pos as $po) {
            // Get existing products in this PO
            $existingProducts = PurchaseOrderItem::where('purchase_order_id', $po->id)
                ->pluck('product_id')
                ->toArray();

            // Get bulk products not already in this PO
            $availableProducts = $bulkProducts->whereNotIn('id', $existingProducts)->take(2);

            foreach ($availableProducts as $product) {
                PurchaseOrderItem::factory()
                    ->forPurchaseOrder($po->id)
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

        // Get received POs that don't already have batch tracked items
        $receivedPOs = PurchaseOrder::received()
            ->whereDoesntHave('items', function ($q) use ($batchProducts) {
                $q->whereIn('product_id', $batchProducts->pluck('id'));
            })
            ->take(8)
            ->get();

        foreach ($receivedPOs as $po) {
            // Get existing products in this PO
            $existingProducts = PurchaseOrderItem::where('purchase_order_id', $po->id)
                ->pluck('product_id')
                ->toArray();

            // Get batch products not already in this PO
            $availableProducts = $batchProducts->whereNotIn('id', $existingProducts)->take(2);

            foreach ($availableProducts as $product) {
                PurchaseOrderItem::factory()
                    ->forPurchaseOrder($po->id)
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

        // Get received POs that don't already have serial tracked items
        $receivedPOs = PurchaseOrder::received()
            ->whereDoesntHave('items', function ($q) use ($serialProducts) {
                $q->whereIn('product_id', $serialProducts->pluck('id'));
            })
            ->take(6)
            ->get();

        foreach ($receivedPOs as $po) {
            // Get existing products in this PO
            $existingProducts = PurchaseOrderItem::where('purchase_order_id', $po->id)
                ->pluck('product_id')
                ->toArray();

            // Get serial products not already in this PO
            $availableProducts = $serialProducts->whereNotIn('id', $existingProducts)->take(2);

            foreach ($availableProducts as $product) {
                $item = PurchaseOrderItem::factory()
                    ->forPurchaseOrder($po->id)
                    ->forProduct($product->id)
                    ->received()
                    ->withQuantity(rand(3, 8), rand(100, 500), rand(3, 8))
                    ->create();

                // Create serial numbers for each received unit
                for ($i = 0; $i < $item->quantity_received; $i++) {
                    if (class_exists('PurchaseReceiptItem')) {
                        PurchaseReceiptItem::factory()
                            ->forPurchaseOrderItem($item->id)
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

        // Get POs that don't already have discounted items
        $pos = PurchaseOrder::whereIn('status', [
            PurchaseOrder::STATUS_APPROVED,
            PurchaseOrder::STATUS_RECEIVED
        ])
            ->whereDoesntHave('items', function ($q) {
                $q->where('discount_percent', '>', 0);
            })
            ->take(10)
            ->get();

        foreach ($pos as $po) {
            // Get existing products in this PO
            $existingProducts = PurchaseOrderItem::where('purchase_order_id', $po->id)
                ->pluck('product_id')
                ->toArray();

            // Get random products not already in this PO
            $products = Product::whereNotIn('id', $existingProducts)
                ->inRandomOrder()
                ->limit(rand(1, 2))
                ->get();

            foreach ($products as $product) {
                PurchaseOrderItem::factory()
                    ->forPurchaseOrder($po->id)
                    ->forProduct($product->id)
                    ->discounted(rand(5, 20))
                    ->create();

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

        // Get POs that don't already have tax-exempt items
        $pos = PurchaseOrder::whereDoesntHave('items', function ($q) {
            $q->where('tax_percent', 0);
        })
            ->inRandomOrder()
            ->take(8)
            ->get();

        foreach ($pos as $po) {
            // Get existing products in this PO
            $existingProducts = PurchaseOrderItem::where('purchase_order_id', $po->id)
                ->pluck('product_id')
                ->toArray();

            // Get a random product not already in this PO
            $product = Product::whereNotIn('id', $existingProducts)
                ->inRandomOrder()
                ->first();

            if ($product) {
                PurchaseOrderItem::factory()
                    ->forPurchaseOrder($po->id)
                    ->forProduct($product->id)
                    ->state([
                        'tax_percent' => 0,
                    ])
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create split shipment items (multiple receipts).
     */
    protected function createSplitShipmentItems(): void
    {
        $this->command->info('  - Creating split shipment items...');

        for ($i = 0; $i < 5; $i++) {
            // Create a new PO specifically for split shipments
            $po = PurchaseOrder::factory()
                ->partiallyReceived()
                ->create();

            // Get a random product not used in other items of this PO (which will be none since it's new)
            $product = Product::inRandomOrder()->first();

            $ordered = rand(100, 500);
            $firstShipment = rand(30, 70);
            $secondShipment = rand(20, min(50, $ordered - $firstShipment));

            $item = PurchaseOrderItem::factory()
                ->forPurchaseOrder($po->id)
                ->forProduct($product->id)
                ->withQuantity($ordered, rand(10, 50), $firstShipment)
                ->create();

            // Create first receipt
            if (class_exists('PurchaseReceiptItem')) {
                PurchaseReceiptItem::factory()
                    ->forPurchaseOrderItem($item->id)
                    ->withQuantity($firstShipment)
                    ->create(['receipt_date' => now()->subDays(rand(5, 10))]);

                // Second receipt
                if ($secondShipment > 0) {
                    $item->receive($secondShipment);

                    PurchaseReceiptItem::factory()
                        ->forPurchaseOrderItem($item->id)
                        ->withQuantity($secondShipment)
                        ->create(['receipt_date' => now()->subDays(rand(1, 4))]);
                }
            }

            $this->command->getOutput()->progressAdvance(2);
        }
    }

    /**
     * Create overdue items.
     */
    protected function createOverdueItems(): void
    {
        $this->command->info('  - Creating overdue items...');

        for ($i = 0; $i < 8; $i++) {
            // Create a new PO specifically for overdue items
            $po = PurchaseOrder::factory()->approved()->create();

            // Get products not already in this PO (which will be none since it's new)
            $products = Product::inRandomOrder()->limit(rand(2, 4))->get();

            foreach ($products as $product) {
                PurchaseOrderItem::factory()
                    ->forPurchaseOrder($po->id)
                    ->forProduct($product->id)
                    ->pending()
                    ->state([
                        'expected_delivery_date' => now()->subDays(rand(5, 30)),
                    ])
                    ->create();
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
            // Create a new PO specifically for backordered items
            $po = PurchaseOrder::factory()->approved()->create();

            // Get products not already in this PO (which will be none since it's new)
            $products = Product::inRandomOrder()->limit(rand(1, 3))->get();

            foreach ($products as $product) {
                PurchaseOrderItem::factory()
                    ->forPurchaseOrder($po->id)
                    ->forProduct($product->id)
                    ->pending()
                    ->state([
                        'expected_delivery_date' => now()->addDays(rand(15, 45)),
                        'notes' => 'Backordered - awaiting supplier stock',
                    ])
                    ->create();
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create quality hold items.
     */
    protected function createQualityHoldItems(): void
    {
        $this->command->info('  - Creating quality hold items...');

        for ($i = 0; $i < 4; $i++) {
            // Create a new PO specifically for quality hold items
            $po = PurchaseOrder::factory()->partiallyReceived()->create();

            // Get a random product not already in this PO (which will be none since it's new)
            $product = Product::inRandomOrder()->first();

            $received = rand(5, 20);

            $item = PurchaseOrderItem::factory()
                ->forPurchaseOrder($po->id)
                ->forProduct($product->id)
                ->withQuantity(rand(20, 50), rand(10, 50), $received)
                ->create();

            if (class_exists('PurchaseReceiptItem')) {
                PurchaseReceiptItem::factory()
                    ->forPurchaseOrderItem($item->id)
                    ->withQuantity($received)
                    ->state([
                        'notes' => 'On quality hold - inspection pending',
                    ])
                    ->create();
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nPurchase Order Item Statistics:");

        $totalItems = PurchaseOrderItem::count();
        $pendingItems = PurchaseOrderItem::pending()->count();
        $partialItems = PurchaseOrderItem::partiallyReceived()->count();
        $receivedItems = PurchaseOrderItem::received()->count();
        $cancelledItems = PurchaseOrderItem::where('status', PurchaseOrderItem::STATUS_CANCELLED)->count();

        $totalOrdered = PurchaseOrderItem::sum('quantity_ordered');
        $totalReceived = PurchaseOrderItem::sum('quantity_received');
        $totalValue = PurchaseOrderItem::sum('line_total');

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Items', $totalItems],
                ['Pending Items', $pendingItems],
                ['Partially Received', $partialItems],
                ['Fully Received', $receivedItems],
                ['Cancelled', $cancelledItems],
                ['Total Ordered Qty', number_format($totalOrdered)],
                ['Total Received Qty', number_format($totalReceived)],
                ['Total Value', '$' . number_format($totalValue, 2)],
                ['Receipt Rate', $totalOrdered > 0 ? round(($totalReceived / $totalOrdered) * 100, 2) . '%' : '0%'],
            ]
        );

        // Show overdue items
        $overdueItems = PurchaseOrderItem::getOverdueItems();
        if ($overdueItems->isNotEmpty()) {
            $this->command->warn("\n⚠️  There are {$overdueItems->count()} overdue items!");

            $this->command->table(
                ['PO Number', 'Product', 'Supplier', 'Expected Date', 'Days Overdue'],
                $overdueItems->take(5)->map(function ($item) {
                    return [
                        $item->purchaseOrder->po_number,
                        $item->product->name,
                        $item->purchaseOrder->supplier->name,
                        $item->expected_delivery_date?->format('Y-m-d') ?? 'N/A',
                        now()->diffInDays($item->expected_delivery_date),
                    ];
                })->toArray()
            );
        }
    }
}
