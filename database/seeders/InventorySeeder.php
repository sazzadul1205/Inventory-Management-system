<?php
// database/seeders/InventorySeeder.php

namespace Database\Seeders;

use App\Models\Inventory;
use App\Models\Product;
use App\Models\Warehouse;
use App\Models\Location;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class InventorySeeder extends Seeder
{

    use ChecksDependencies;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       
        if (!$this->checkDependencies([
            Product::class => 'No products found',
            Warehouse::class => 'No warehouses found',
        ])) {
            return;
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        Inventory::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating inventory records...');
        $this->command->getOutput()->progressStart(100);

        $this->createNormalStockInventory();
        $this->createLowStockInventory();
        $this->createReservedInventory();
        $this->createExpiringInventory();
        $this->createBatchTrackedInventory();
        $this->createSerialTrackedInventory();
        $this->createDamagedInventory();
        $this->createHighValueInventory();
        $this->createBulkInventory();
        $this->createCrossWarehouseInventory();

        $this->command->getOutput()->progressFinish();

        $summary = Inventory::getValuationSummary();
        $statusSummary = Inventory::getStockStatusSummary();

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Inventory Records', Inventory::count()],
                ['Total Products with Stock', Product::has('inventory')->count()],
                ['Total Units in Stock', number_format(Inventory::sum('quantity_on_hand'))],
                ['Total Inventory Value', '$' . number_format($summary['total_value'], 2)],
                ['Available Items', $statusSummary['available']],
                ['Reserved Items', $statusSummary['reserved']],
                ['Damaged Items', $statusSummary['damaged']],
                ['Expired Items', $statusSummary['expired']],
            ]
        );

        $this->showLowStockAlert();
    }

    /**
     * Create normal stock inventory (most common).
     */
    protected function createNormalStockInventory(): void
    {
        $this->command->info("\nCreating normal stock inventory...");

        // Create inventory for each product in main warehouse
        $products = Product::take(10)->get(); // Was 50
        $warehouses = Warehouse::take(2)->get(); // Was 3

        foreach ($products as $product) {
            foreach ($warehouses as $warehouse) {
                $location = Location::where('warehouse_id', $warehouse->id)
                    ->inRandomOrder()
                    ->first();

                Inventory::factory()
                    ->available()
                    ->forProduct($product->id)
                    ->inWarehouse($warehouse->id)
                    ->state([
                        'location_id' => $location?->id,
                        'unit_cost' => fake()->randomFloat(2, 5, 200),
                        'quantity_on_hand' => fake()->numberBetween(50, 500),
                        'last_count_date' => fake()->dateTimeBetween('-30 days', 'now'),
                    ])
                    ->withMovements(rand(3, 8))
                    ->create();
            }
            $this->command->getOutput()->progressAdvance();
        }

        // Create additional random inventory
        Inventory::factory()
            ->available()
            ->count(20) // Was 100
            ->withMovements(rand(1, 2)) // Was rand(2,5)
            ->create();

        $this->command->getOutput()->progressAdvance(20);
    }

    /**
     * Create low stock inventory.
     */
    protected function createLowStockInventory(): void
    {
        $this->command->info("\nCreating low stock inventory...");

        $products = Product::where('minimum_stock', '>', 0)->take(20)->get();

        foreach ($products as $product) {
            Inventory::factory()
                ->lowStock()
                ->forProduct($product->id)
                ->state([
                    'quantity_on_hand' => fake()->numberBetween(1, $product->minimum_stock),
                ])
                ->create();
        }

        // Additional low stock items
        Inventory::factory()
            ->lowStock()
            ->count(10) // Was 30
            ->create();

        $this->command->getOutput()->progressAdvance(15);
    }

    /**
     * Create reserved inventory.
     */
    protected function createReservedInventory(): void
    {
        $this->command->info("\nCreating reserved inventory...");

        Inventory::factory()
            ->reserved()
            ->count(10) // Was 40
            ->withMovements(3)
            ->create();

        $this->command->getOutput()->progressAdvance(8);
    }

    /**
     * Create expiring and expired inventory.
     */
    protected function createExpiringInventory(): void
    {
        $this->command->info("\nCreating expiring and expired inventory...");

        // Expiring soon (next 30 days)
        Inventory::factory()
            ->expiringSoon(30)
            ->count(5) // Was 25
            ->create();

        // Expiring in 30-60 days
        Inventory::factory()
            ->expiringSoon(60)
            ->count(5) // Was 20
            ->create();

        // Already expired
        Inventory::factory()
            ->expired()
            ->count(3) // Was 15
            ->create();

        $this->command->getOutput()->progressAdvance(12);
    }

    /**
     * Create batch tracked inventory.
     */
    protected function createBatchTrackedInventory(): void
    {
        $this->command->info("\nCreating batch tracked inventory...");

        $products = Product::where('is_batch_tracked', true)->get();

        if ($products->isEmpty()) {
            // Create some batch-tracked products
            $products = Product::factory()
                ->batchTracked()
                ->count(5)
                ->create();
        }

        foreach ($products as $product) {
            // Create multiple batches for each product
            $batchCount = rand(3, 6);

            for ($i = 0; $i < $batchCount; $i++) {
                Inventory::factory()
                    ->batchTracked()
                    ->forProduct($product->id)
                    ->state([
                        'batch_number' => 'BATCH-' . date('y') . '-' . str_pad($i + 1, 4, '0', STR_PAD_LEFT),
                        'quantity_on_hand' => fake()->numberBetween(100, 1000),
                    ])
                    ->create();
            }
        }

        $this->command->getOutput()->progressAdvance(10);
    }

    /**
     * Create serial tracked inventory.
     */
    protected function createSerialTrackedInventory(): void
    {
        $this->command->info("\nCreating serial tracked inventory...");

        $products = Product::where('is_serial_tracked', true)->get();

        if ($products->isEmpty()) {
            // Create some serial-tracked products
            $products = Product::factory()
                ->serialTracked()
                ->count(5)
                ->create();
        }

        foreach ($products as $product) {
            // Create individual serial numbers (quantity = 1 each)
            $serialCount = rand(5, 15);

            for ($i = 0; $i < $serialCount; $i++) {
                Inventory::factory()
                    ->serialTracked()
                    ->forProduct($product->id)
                    ->state([
                        'serial_number' => 'SN-' . strtoupper(fake()->bothify('??##??##')),
                        'quantity_on_hand' => 1,
                        'quantity_reserved' => 0,
                        'quantity_available' => 1,
                    ])
                    ->create();
            }
        }

        $this->command->getOutput()->progressAdvance(8);
    }

    /**
     * Create damaged inventory.
     */
    protected function createDamagedInventory(): void
    {
        $this->command->info("\nCreating damaged inventory...");

        Inventory::factory()
            ->damaged()
            ->count(5) // Was 20
            ->create();

        Inventory::factory()
            ->quarantined()
            ->count(3) // Was 10
            ->create();

        $this->command->getOutput()->progressAdvance(6);
    }

    /**
     * Create high value inventory.
     */
    protected function createHighValueInventory(): void
    {
        $this->command->info("\nCreating high value inventory...");

        Inventory::factory()
            ->highValue()
            ->count(5) // Was 25
            ->withMovements(2)
            ->create();

        $this->command->getOutput()->progressAdvance(5);
    }

    /**
     * Create bulk inventory (large quantities).
     */
    protected function createBulkInventory(): void
    {
        $this->command->info("\nCreating bulk inventory...");

        Inventory::factory()
            ->bulk()
            ->count(3) // Was 15
            ->create();

        $this->command->getOutput()->progressAdvance(4);
    }

    /**
     * Create inventory across multiple warehouses.
     */
    protected function createCrossWarehouseInventory(): void
    {
        $this->command->info("\nCreating cross-warehouse inventory...");

        $warehouses = Warehouse::all();
        $products = Product::take(10)->get();

        foreach ($products as $product) {
            foreach ($warehouses as $warehouse) {
                // Different quantities per warehouse
                $qty = $warehouse->name === 'Main Warehouse'
                    ? fake()->numberBetween(200, 500)
                    : fake()->numberBetween(50, 150);

                Inventory::factory()
                    ->forProduct($product->id)
                    ->inWarehouse($warehouse->id)
                    ->state([
                        'quantity_on_hand' => $qty,
                        'quantity_available' => $qty,
                    ])
                    ->create();
            }
        }

        $this->command->getOutput()->progressAdvance(8);
    }

    /**
     * Show low stock alert.
     */
    protected function showLowStockAlert(): void
    {
        $lowStockItems = Inventory::with('product')
            ->where('quantity_available', '>', 0)
            ->get()
            ->filter(function ($inventory) {
                return $inventory->is_low_stock;
            })
            ->take(10);

        if ($lowStockItems->isNotEmpty()) {
            $this->command->warn("\nLOW STOCK ALERT - Top 10 Items:");
            $this->command->table(
                ['Product', 'SKU', 'Available', 'Min Stock'],
                $lowStockItems->map(function ($item) {
                    return [
                        $item->product?->name ?? 'Unknown',
                        $item->product?->sku ?? 'N/A',
                        $item->quantity_available,
                        $item->product?->minimum_stock ?? 0,
                    ];
                })->toArray()
            );
        }
    }
}
