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
        $this->command->getOutput()->progressStart(150); // Increased for more items

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
            $itemsToReceive = fake()->numberBetween(1, min(3, $poItems->count()));
            $selectedPOItems = $poItems->random(min($itemsToReceive, $poItems->count()));

            foreach ($selectedPOItems as $poItem) {
                // Check if this PO item has remaining quantity
                $remainingQuantity = $poItem->quantity_ordered - $poItem->quantity_received;

                if ($remainingQuantity <= 0) {
                    continue;
                }

                $location = Location::where('warehouse_id', $receipt->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                // Don't receive more than remaining
                $quantity = fake()->numberBetween(1, min($remainingQuantity, 50));

                PurchaseReceiptItem::factory()
                    ->forPurchaseReceipt($receipt->id)
                    ->forPurchaseOrderItem($poItem->id)
                    ->forProduct($poItem->product_id)
                    ->atLocation($location->id)
                    ->withQuantity($quantity)
                    ->withUnitCost($poItem->unit_price)
                    ->withProductTracking($poItem->product)
                    ->create();

                // Update the PO item's received quantity
                try {
                    $freshPoItem = PurchaseOrderItem::find($poItem->id);
                    $freshPoItem->receive($quantity);
                } catch (\Exception $e) {
                    $this->command->warn("Could not receive quantity for PO item #{$poItem->id}: " . $e->getMessage());
                }

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

        $receipts = PurchaseReceipt::inRandomOrder()->limit(8)->get();

        foreach ($receipts as $receipt) {
            // Track products used in this PO to avoid duplicates
            $usedProductIds = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                ->pluck('product_id')
                ->toArray();

            foreach ($batchProducts->random(min(2, $batchProducts->count())) as $product) {
                // Skip if this product is already in the PO
                if (in_array($product->id, $usedProductIds)) {
                    continue;
                }

                // Find or create PO item with enough remaining quantity
                $poItem = PurchaseOrderItem::where('product_id', $product->id)
                    ->where('purchase_order_id', $receipt->purchase_order_id)
                    ->whereRaw('quantity_received < quantity_ordered')
                    ->first();

                if (!$poItem) {
                    // Check again to avoid race conditions
                    $exists = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                        ->where('product_id', $product->id)
                        ->exists();

                    if ($exists) {
                        continue;
                    }

                    // Create with enough quantity for multiple batches
                    $poItem = PurchaseOrderItem::factory()
                        ->forPurchaseOrder($receipt->purchase_order_id)
                        ->forProduct($product->id)
                        ->withQuantity(200, fake()->randomFloat(2, 5, 50), 0)
                        ->create();

                    $usedProductIds[] = $product->id;
                }

                $location = Location::where('warehouse_id', $receipt->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                $remainingForProduct = $poItem->quantity_ordered - $poItem->quantity_received;
                $totalBatchQuantity = 0;
                $batchItems = [];

                // Determine how many batches we can create based on remaining quantity
                $numBatches = min(3, floor($remainingForProduct / 10));

                // Create multiple batches for the same product
                for ($i = 0; $i < $numBatches; $i++) {
                    $maxForThisBatch = min(50, $remainingForProduct - $totalBatchQuantity);

                    if ($maxForThisBatch <= 5) {
                        // If remaining is too small, add it to the last batch
                        if ($i === $numBatches - 1 && $remainingForProduct - $totalBatchQuantity > 0) {
                            $quantity = $remainingForProduct - $totalBatchQuantity;
                        } else {
                            break;
                        }
                    } else {
                        $quantity = fake()->numberBetween(5, $maxForThisBatch);
                    }

                    $quantity = min($quantity, $remainingForProduct - $totalBatchQuantity);

                    if ($quantity <= 0) {
                        continue;
                    }

                    $batchItem = PurchaseReceiptItem::factory()
                        ->forPurchaseReceipt($receipt->id)
                        ->forPurchaseOrderItem($poItem->id)
                        ->forProduct($product->id)
                        ->atLocation($location->id)
                        ->withBatch('BATCH-' . date('y') . '-' . str_pad($i + 1, 3, '0', STR_PAD_LEFT))
                        ->withQuantity($quantity)
                        ->withUnitCost(fake()->randomFloat(2, 5, 50))
                        ->create();

                    $batchItems[] = $batchItem;
                    $totalBatchQuantity += $quantity;
                    $this->command->getOutput()->progressAdvance(1);
                }

                // Update PO item received quantity only once with the total
                if ($totalBatchQuantity > 0) {
                    try {
                        $freshPoItem = PurchaseOrderItem::find($poItem->id);
                        $freshPoItem->receive($totalBatchQuantity);
                    } catch (\Exception $e) {
                        $this->command->warn("Could not receive quantity for PO item #{$poItem->id}: " . $e->getMessage());

                        // Clean up on failure
                        foreach ($batchItems as $item) {
                            $item->delete();
                        }
                    }
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

        $receipts = PurchaseReceipt::inRandomOrder()->limit(6)->get();

        foreach ($receipts as $receipt) {
            // Track products used in this PO to avoid duplicates
            $usedProductIds = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                ->pluck('product_id')
                ->toArray();

            foreach ($serialProducts->random(min(2, $serialProducts->count())) as $product) {
                // Skip if this product is already in the PO
                if (in_array($product->id, $usedProductIds)) {
                    continue;
                }

                // Find or create PO item with enough remaining quantity
                $poItem = PurchaseOrderItem::where('product_id', $product->id)
                    ->where('purchase_order_id', $receipt->purchase_order_id)
                    ->whereRaw('quantity_received < quantity_ordered')
                    ->first();

                if (!$poItem) {
                    // Check again to avoid race conditions
                    $exists = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                        ->where('product_id', $product->id)
                        ->exists();

                    if ($exists) {
                        continue;
                    }

                    $poItem = PurchaseOrderItem::factory()
                        ->forPurchaseOrder($receipt->purchase_order_id)
                        ->forProduct($product->id)
                        ->withQuantity(10, fake()->randomFloat(2, 50, 200), 0)
                        ->create();

                    $usedProductIds[] = $product->id;
                }

                $location = Location::where('warehouse_id', $receipt->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                $remainingForProduct = $poItem->quantity_ordered - $poItem->quantity_received;
                $serialCount = min(5, $remainingForProduct);
                $serialItems = [];

                // Create individual serial numbers
                for ($i = 0; $i < $serialCount; $i++) {
                    $serialItem = PurchaseReceiptItem::factory()
                        ->forPurchaseReceipt($receipt->id)
                        ->forPurchaseOrderItem($poItem->id)
                        ->forProduct($product->id)
                        ->atLocation($location->id)
                        ->withSerial()
                        ->withQuantity(1)
                        ->withUnitCost(fake()->randomFloat(2, 50, 200))
                        ->create();

                    $serialItems[] = $serialItem;
                    $this->command->getOutput()->progressAdvance(1);
                }

                // Update PO item with total received quantity
                if ($serialCount > 0) {
                    try {
                        $freshPoItem = PurchaseOrderItem::find($poItem->id);
                        $freshPoItem->receive($serialCount);
                    } catch (\Exception $e) {
                        $this->command->warn("Could not receive quantity for PO item #{$poItem->id}: " . $e->getMessage());

                        // Clean up on failure
                        foreach ($serialItems as $item) {
                            $item->delete();
                        }
                    }
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

        $receipts = PurchaseReceipt::inRandomOrder()->limit(5)->get();

        foreach ($receipts as $receipt) {
            // Track products used in this PO to avoid duplicates
            $usedProductIds = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                ->pluck('product_id')
                ->toArray();

            foreach ($expirableProducts->random(min(2, $expirableProducts->count())) as $product) {
                // Skip if this product is already in the PO
                if (in_array($product->id, $usedProductIds)) {
                    continue;
                }

                // Find or create PO item with enough remaining quantity
                $poItem = PurchaseOrderItem::where('product_id', $product->id)
                    ->where('purchase_order_id', $receipt->purchase_order_id)
                    ->whereRaw('quantity_received < quantity_ordered')
                    ->first();

                if (!$poItem) {
                    // Check again to avoid race conditions
                    $exists = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                        ->where('product_id', $product->id)
                        ->exists();

                    if ($exists) {
                        continue;
                    }

                    $poItem = PurchaseOrderItem::factory()
                        ->forPurchaseOrder($receipt->purchase_order_id)
                        ->forProduct($product->id)
                        ->withQuantity(50, fake()->randomFloat(2, 10, 30), 0)
                        ->create();

                    $usedProductIds[] = $product->id;
                }

                $location = Location::where('warehouse_id', $receipt->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                $remainingQuantity = $poItem->quantity_ordered - $poItem->quantity_received;
                $quantity = fake()->numberBetween(5, min(30, $remainingQuantity));

                if ($quantity > 0) {
                    $receiptItem = PurchaseReceiptItem::factory()
                        ->forPurchaseReceipt($receipt->id)
                        ->forPurchaseOrderItem($poItem->id)
                        ->forProduct($product->id)
                        ->atLocation($location->id)
                        ->withExpiry(now()->addMonths(fake()->numberBetween(1, 6))->format('Y-m-d'))
                        ->withQuantity($quantity)
                        ->create();

                    // Update PO item
                    try {
                        $freshPoItem = PurchaseOrderItem::find($poItem->id);
                        $freshPoItem->receive($quantity);
                    } catch (\Exception $e) {
                        $this->command->warn("Could not receive quantity for PO item #{$poItem->id}: " . $e->getMessage());
                        $receiptItem->delete();
                    }
                }

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
            // Track products used in this PO to avoid duplicates
            $usedProductIds = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                ->pluck('product_id')
                ->toArray();

            $products = Product::whereNotIn('id', $usedProductIds)
                ->inRandomOrder()
                ->limit(2)
                ->get();

            foreach ($products as $product) {
                // Find or create PO item with enough remaining quantity
                $poItem = PurchaseOrderItem::where('product_id', $product->id)
                    ->where('purchase_order_id', $receipt->purchase_order_id)
                    ->whereRaw('quantity_received < quantity_ordered')
                    ->first();

                if (!$poItem) {
                    // Check again to avoid race conditions
                    $exists = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                        ->where('product_id', $product->id)
                        ->exists();

                    if ($exists) {
                        continue;
                    }

                    $poItem = PurchaseOrderItem::factory()
                        ->forPurchaseOrder($receipt->purchase_order_id)
                        ->forProduct($product->id)
                        ->withQuantity(30, fake()->randomFloat(2, 5, 20), 0)
                        ->create();

                    $usedProductIds[] = $product->id;
                }

                $location = Location::where('warehouse_id', $receipt->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                $remainingQuantity = $poItem->quantity_ordered - $poItem->quantity_received;
                $quantity = fake()->numberBetween(5, min(15, $remainingQuantity));

                if ($quantity > 0) {
                    $receiptItem = PurchaseReceiptItem::factory()
                        ->forPurchaseReceipt($receipt->id)
                        ->forPurchaseOrderItem($poItem->id)
                        ->forProduct($product->id)
                        ->atLocation($location->id)
                        ->expired()
                        ->withQuantity($quantity)
                        ->create();

                    // Update PO item
                    try {
                        $freshPoItem = PurchaseOrderItem::find($poItem->id);
                        $freshPoItem->receive($quantity);
                    } catch (\Exception $e) {
                        $this->command->warn("Could not receive quantity for PO item #{$poItem->id}: " . $e->getMessage());
                        $receiptItem->delete();
                    }
                }

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

        $receipts = PurchaseReceipt::inRandomOrder()->limit(4)->get();

        foreach ($receipts as $receipt) {
            // Get a product not already in this PO
            $usedProductIds = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                ->pluck('product_id')
                ->toArray();

            $product = Product::whereNotIn('id', $usedProductIds)
                ->inRandomOrder()
                ->first();

            if (!$product) {
                continue;
            }

            // Get or create a PO item with enough quantity
            $poItem = PurchaseOrderItem::where('product_id', $product->id)
                ->where('purchase_order_id', $receipt->purchase_order_id)
                ->whereRaw('quantity_received < quantity_ordered')
                ->first();

            if (!$poItem) {
                // Check again to avoid race conditions
                $exists = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                    ->where('product_id', $product->id)
                    ->exists();

                if ($exists) {
                    continue;
                }

                // Create a new PO item with sufficient quantity
                $poItem = PurchaseOrderItem::factory()
                    ->forPurchaseOrder($receipt->purchase_order_id)
                    ->forProduct($product->id)
                    ->withQuantity(100, 50, 0)
                    ->create();
            }

            $locations = Location::where('warehouse_id', $receipt->warehouse_id)
                ->inRandomOrder()
                ->limit(3)
                ->get();

            // Calculate remaining quantity that can be received
            $remainingQuantity = $poItem->quantity_ordered - $poItem->quantity_received;
            $totalQuantity = 0;
            $itemsCreated = [];

            foreach ($locations as $index => $location) {
                // Calculate max quantity for this location
                $maxForThisLocation = $remainingQuantity - $totalQuantity;

                if ($maxForThisLocation <= 0) {
                    break;
                }

                // For the last location, use all remaining quantity
                if ($index === $locations->count() - 1) {
                    $quantity = $maxForThisLocation;
                } else {
                    // For other locations, take a portion
                    $maxPortion = min(25, floor($maxForThisLocation / 2));
                    $quantity = fake()->numberBetween(5, max(5, $maxPortion));
                }

                // Final safety check
                $quantity = min($quantity, $maxForThisLocation);

                if ($quantity <= 0) {
                    continue;
                }

                $receiptItem = PurchaseReceiptItem::factory()
                    ->forPurchaseReceipt($receipt->id)
                    ->forPurchaseOrderItem($poItem->id)
                    ->forProduct($product->id)
                    ->atLocation($location->id)
                    ->withQuantity($quantity)
                    ->withUnitCost($poItem->unit_price)
                    ->create();

                $itemsCreated[] = $receiptItem;
                $totalQuantity += $quantity;
                $this->command->getOutput()->progressAdvance(1);
            }

            // Update PO item received quantity only once with the total
            if ($totalQuantity > 0) {
                try {
                    // Use a fresh instance to avoid stale data
                    $freshPoItem = PurchaseOrderItem::find($poItem->id);
                    $freshPoItem->receive($totalQuantity);
                } catch (\Exception $e) {
                    $this->command->warn("Could not receive quantity for PO item #{$poItem->id}: " . $e->getMessage());

                    // If failed, delete the receipt items to maintain consistency
                    foreach ($itemsCreated as $item) {
                        $item->delete();
                    }
                }
            }
        }
    }

    /**
     * Create quality hold items.
     */
    protected function createQualityHoldItems(): void
    {
        $this->command->info('  - Creating quality hold items...');

        $receipts = PurchaseReceipt::inRandomOrder()->limit(3)->get();

        foreach ($receipts as $receipt) {
            // Get a PO item that has remaining quantity
            $poItem = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                ->whereRaw('quantity_received < quantity_ordered')
                ->inRandomOrder()
                ->first();

            if ($poItem) {
                $remainingQuantity = $poItem->quantity_ordered - $poItem->quantity_received;
                $quantity = fake()->numberBetween(5, min(10, $remainingQuantity));

                if ($quantity > 0) {
                    $receiptItem = PurchaseReceiptItem::factory()
                        ->forPurchaseReceipt($receipt->id)
                        ->forPurchaseOrderItem($poItem->id)
                        ->forProduct($poItem->product_id)
                        ->onQualityHold()
                        ->withQuantity($quantity)
                        ->create();

                    // Update PO item
                    try {
                        $freshPoItem = PurchaseOrderItem::find($poItem->id);
                        $freshPoItem->receive($quantity);
                    } catch (\Exception $e) {
                        $this->command->warn("Could not receive quantity for PO item #{$poItem->id}: " . $e->getMessage());
                        $receiptItem->delete();
                    }
                }

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
            // Get a PO item that has remaining quantity
            $poItem = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                ->whereRaw('quantity_received < quantity_ordered')
                ->inRandomOrder()
                ->first();

            if ($poItem) {
                $remainingQuantity = $poItem->quantity_ordered - $poItem->quantity_received;
                $quantity = fake()->numberBetween(2, min(5, $remainingQuantity));

                if ($quantity > 0) {
                    $receiptItem = PurchaseReceiptItem::factory()
                        ->forPurchaseReceipt($receipt->id)
                        ->forPurchaseOrderItem($poItem->id)
                        ->forProduct($poItem->product_id)
                        ->damaged()
                        ->withQuantity($quantity)
                        ->create();

                    // Update PO item
                    try {
                        $freshPoItem = PurchaseOrderItem::find($poItem->id);
                        $freshPoItem->receive($quantity);
                    } catch (\Exception $e) {
                        $this->command->warn("Could not receive quantity for PO item #{$poItem->id}: " . $e->getMessage());
                        $receiptItem->delete();
                    }
                }

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

        $receipts = PurchaseReceipt::inRandomOrder()->limit(4)->get();

        foreach ($receipts as $receipt) {
            // Get a product not already in this PO
            $usedProductIds = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                ->pluck('product_id')
                ->toArray();

            $product = Product::whereNotIn('id', $usedProductIds)
                ->inRandomOrder()
                ->first();

            if (!$product) {
                continue;
            }

            // Check if product already exists in this PO
            $exists = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                ->where('product_id', $product->id)
                ->exists();

            if ($exists) {
                continue;
            }

            // Create a new PO item specifically for this high-value item
            $poItem = PurchaseOrderItem::factory()
                ->forPurchaseOrder($receipt->purchase_order_id)
                ->forProduct($product->id)
                ->withQuantity(5, fake()->randomFloat(2, 500, 5000), 0)
                ->create();

            $location = Location::where('warehouse_id', $receipt->warehouse_id)
                ->inRandomOrder()
                ->first();

            $quantity = fake()->numberBetween(1, 3);

            $receiptItem = PurchaseReceiptItem::factory()
                ->forPurchaseReceipt($receipt->id)
                ->forPurchaseOrderItem($poItem->id)
                ->forProduct($product->id)
                ->atLocation($location->id)
                ->withUnitCost($poItem->unit_price)
                ->withQuantity($quantity)
                ->create();

            // Update PO item
            try {
                $freshPoItem = PurchaseOrderItem::find($poItem->id);
                $freshPoItem->receive($quantity);
            } catch (\Exception $e) {
                $this->command->warn("Could not receive quantity for PO item #{$poItem->id}: " . $e->getMessage());
                $receiptItem->delete();
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create bulk items.
     */
    protected function createBulkItems(): void
    {
        $this->command->info('  - Creating bulk items...');

        $receipts = PurchaseReceipt::inRandomOrder()->limit(3)->get();

        foreach ($receipts as $receipt) {
            // Get a product not already in this PO
            $usedProductIds = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                ->pluck('product_id')
                ->toArray();

            $product = Product::whereNotIn('id', $usedProductIds)
                ->inRandomOrder()
                ->first();

            if (!$product) {
                continue;
            }

            // Check if product already exists in this PO
            $exists = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                ->where('product_id', $product->id)
                ->exists();

            if ($exists) {
                continue;
            }

            // Create a new PO item specifically for this bulk item
            $poItem = PurchaseOrderItem::factory()
                ->forPurchaseOrder($receipt->purchase_order_id)
                ->forProduct($product->id)
                ->withQuantity(1000, fake()->randomFloat(2, 0.5, 5), 0)
                ->create();

            $location = Location::where('warehouse_id', $receipt->warehouse_id)
                ->inRandomOrder()
                ->first();

            $quantity = fake()->numberBetween(100, min(500, $poItem->quantity_ordered));

            $receiptItem = PurchaseReceiptItem::factory()
                ->forPurchaseReceipt($receipt->id)
                ->forPurchaseOrderItem($poItem->id)
                ->forProduct($product->id)
                ->atLocation($location->id)
                ->withUnitCost($poItem->unit_price)
                ->withQuantity($quantity)
                ->create();

            // Update PO item
            try {
                $freshPoItem = PurchaseOrderItem::find($poItem->id);
                $freshPoItem->receive($quantity);
            } catch (\Exception $e) {
                $this->command->warn("Could not receive quantity for PO item #{$poItem->id}: " . $e->getMessage());
                $receiptItem->delete();
            }

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
            // Get a product not already in this PO
            $usedProductIds = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                ->pluck('product_id')
                ->toArray();

            $product = Product::whereNotIn('id', $usedProductIds)
                ->inRandomOrder()
                ->first();

            if (!$product) {
                continue;
            }

            // Check if product already exists in this PO
            $exists = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                ->where('product_id', $product->id)
                ->exists();

            if ($exists) {
                continue;
            }

            // Create a new PO item specifically for cross-dock
            $poItem = PurchaseOrderItem::factory()
                ->forPurchaseOrder($receipt->purchase_order_id)
                ->forProduct($product->id)
                ->withQuantity(100, fake()->randomFloat(2, 10, 50), 0)
                ->create();

            $location = Location::where('warehouse_id', $receipt->warehouse_id)
                ->inRandomOrder()
                ->first();

            $quantity = fake()->numberBetween(20, 50);

            $receiptItem = PurchaseReceiptItem::factory()
                ->forPurchaseReceipt($receipt->id)
                ->forPurchaseOrderItem($poItem->id)
                ->forProduct($product->id)
                ->atLocation($location->id)
                ->withQuantity($quantity)
                ->withUnitCost($poItem->unit_price)
                ->state([
                    'notes' => 'Cross-dock - transferred to shipping',
                ])
                ->create();

            // Update PO item
            try {
                $freshPoItem = PurchaseOrderItem::find($poItem->id);
                $freshPoItem->receive($quantity);
            } catch (\Exception $e) {
                $this->command->warn("Could not receive quantity for PO item #{$poItem->id}: " . $e->getMessage());
                $receiptItem->delete();
            }

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

        // Use the correct scope names from the model
        $expiredCount = PurchaseReceiptItem::expired()->count();

        // For expiring soon, we need to use the getExpiringItems method instead of a scope
        $expiringSoon = PurchaseReceiptItem::getExpiringItems(30)->count();

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
