<?php
// database/seeders/PurchaseOrderItemSeeder.php

namespace Database\Seeders;

use App\Models\PurchaseOrderItem;
use App\Models\PurchaseOrder;
use App\Models\Product;
use App\Models\PurchaseReceiptItem;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PurchaseOrderItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Disable foreign key checks temporarily
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        // Truncate the table
        PurchaseOrderItem::truncate();

        // Enable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        // Check prerequisites
        $this->checkPrerequisites();

        $this->command->info('Creating purchase order items...');
        $this->command->getOutput()->progressStart(100);

        // Create items for existing POs
        $this->createItemsForExistingPOs();

        // Create specialized item scenarios
        $this->createSpecializedItems();

        $this->command->getOutput()->progressFinish();

        // Display statistics
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
        $purchaseOrders = PurchaseOrder::with('supplier')->get();

        foreach ($purchaseOrders as $po) {
            // Number of items per PO based on PO type
            $itemCount = $this->getItemCountForPO($po); // Modify this method to return smaller numbers

            // Get products that this supplier provides
            $supplierProducts = $po->supplier->products ?? collect();
            $availableProducts = $supplierProducts->isNotEmpty()
                ? $supplierProducts
                : Product::inRandomOrder()->limit(20)->get();

            for ($i = 0; $i < $itemCount; $i++) {
                $product = $availableProducts->random();

                // Get supplier-specific pricing if available
                $productSupplier = $product->productSuppliers()
                    ->where('supplier_id', $po->supplier_id)
                    ->first();

                $unitPrice = $productSupplier
                    ? $productSupplier->unit_cost
                    : fake()->randomFloat(2, 10, 200);

                // Determine receipt status based on PO status
                $received = $this->getReceivedQuantityForPO($po->status);

                PurchaseOrderItem::factory()
                    ->forPurchaseOrder($po->id)
                    ->forProduct($product->id)
                    ->withQuantity(
                        $this->getQuantityForPO($po),
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
    protected function getReceivedQuantityForPO(string $poStatus): int
    {
        return match ($poStatus) {
            PurchaseOrder::STATUS_RECEIVED => 'full',
            PurchaseOrder::STATUS_PARTIALLY_RECEIVED => 'partial',
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

        $pos = PurchaseOrder::where('total_amount', '>', 10000)->get();

        foreach ($pos as $po) {
            PurchaseOrderItem::factory()
                ->forPurchaseOrder($po->id)
                ->highValue()
                ->count(rand(1, 3))
                ->create();

            $this->command->getOutput()->progressAdvance(2);
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

        $pos = PurchaseOrder::where('total_amount', '>', 5000)->get();

        foreach ($pos->take(5) as $po) {
            foreach ($bulkProducts->take(2) as $product) {
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

        $receivedPOs = PurchaseOrder::received()->get();

        foreach ($receivedPOs->take(8) as $po) {
            foreach ($batchProducts->take(2) as $product) {
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

        $receivedPOs = PurchaseOrder::received()->get();

        foreach ($receivedPOs->take(6) as $po) {
            foreach ($serialProducts->take(2) as $product) {
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

        $pos = PurchaseOrder::where('status', PurchaseOrder::STATUS_APPROVED)
            ->orWhere('status', PurchaseOrder::STATUS_RECEIVED)
            ->get()
            ->take(10);

        foreach ($pos as $po) {
            PurchaseOrderItem::factory()
                ->forPurchaseOrder($po->id)
                ->discounted(rand(5, 20))
                ->count(rand(1, 2))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create tax-exempt items.
     */
    protected function createTaxExemptItems(): void
    {
        $this->command->info('  - Creating tax-exempt items...');

        $pos = PurchaseOrder::inRandomOrder()->take(8)->get();

        foreach ($pos as $po) {
            PurchaseOrderItem::factory()
                ->forPurchaseOrder($po->id)
                ->state([
                    'tax_percent' => 0,
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create split shipment items (multiple receipts).
     */
    protected function createSplitShipmentItems(): void
    {
        $this->command->info('  - Creating split shipment items...');

        for ($i = 0; $i < 5; $i++) {
            $po = PurchaseOrder::factory()
                ->partiallyReceived()
                ->create();

            $ordered = rand(100, 500);
            $firstShipment = rand(30, 70);
            $secondShipment = rand(20, min(50, $ordered - $firstShipment));

            $item = PurchaseOrderItem::factory()
                ->forPurchaseOrder($po->id)
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
            $po = PurchaseOrder::factory()->approved()->create();

            PurchaseOrderItem::factory()
                ->forPurchaseOrder($po->id)
                ->pending()
                ->state([
                    'expected_delivery_date' => now()->subDays(rand(5, 30)),
                ])
                ->count(rand(2, 4))
                ->create();

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
            $po = PurchaseOrder::factory()->approved()->create();

            PurchaseOrderItem::factory()
                ->forPurchaseOrder($po->id)
                ->pending()
                ->state([
                    'expected_delivery_date' => now()->addDays(rand(15, 45)),
                    'notes' => 'Backordered - awaiting supplier stock',
                ])
                ->count(rand(1, 3))
                ->create();

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
            $po = PurchaseOrder::factory()->partiallyReceived()->create();
            $received = rand(5, 20);

            $item = PurchaseOrderItem::factory()
                ->forPurchaseOrder($po->id)
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
