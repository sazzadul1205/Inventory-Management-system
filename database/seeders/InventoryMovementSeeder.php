<?php
// database/seeders/InventoryMovementSeeder.php

namespace Database\Seeders;

use App\Models\InventoryMovement;
use App\Models\Product;
use App\Models\Warehouse;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InventoryMovementSeeder extends Seeder
{
    /**
     * Number of movements to create
     */
    protected const MOVEMENT_COUNT = 50; // Was 5000

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Disable foreign key checks temporarily
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        // Truncate the table
        InventoryMovement::truncate();

        // Enable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        // Check prerequisites
        $this->checkPrerequisites();

        $this->command->info('Creating inventory movements...');
        $this->command->getOutput()->progressStart(self::MOVEMENT_COUNT);

        // Create movements in batches
        $batchSize = 100;
        $batches = ceil(self::MOVEMENT_COUNT / $batchSize);

        for ($i = 0; $i < $batches; $i++) {
            $this->createMovementBatch($batchSize);
            $this->command->getOutput()->progressAdvance($batchSize);
        }

        $this->command->getOutput()->progressFinish();

        // Create specialized movement patterns
        $this->createSpecializedMovements();

        // Show statistics
        $this->displayStatistics();
    }

    /**
     * Check if required data exists.
     */
    protected function checkPrerequisites(): void
    {
        if (Product::count() == 0) {
            $this->command->warn('No products found. Running ProductSeeder first...');
            $this->call(ProductSeeder::class);
        }

        if (Warehouse::count() == 0) {
            $this->command->warn('No warehouses found. Running WarehouseSeeder first...');
            $this->call(WarehouseSeeder::class);
        }

        if (User::count() == 0) {
            $this->command->warn('No users found. Running UserSeeder first...');
            $this->call(UserSeeder::class);
        }
    }

    /**
     * Create a batch of movements.
     */
    protected function createMovementBatch(int $count): void
    {
        $products = Product::inRandomOrder()->limit(20)->get();
        $users = User::inRandomOrder()->limit(10)->get();

        for ($i = 0; $i < $count; $i++) {
            $product = $products->random();
            $user = $users->random();

            InventoryMovement::factory()
                ->forProduct($product->id)
                ->createdBy($user->id)
                ->create();
        }
    }

    /**
     * Create specialized movement patterns.
     */
    protected function createSpecializedMovements(): void
    {
        $this->command->info("\nCreating specialized movement patterns...");

        // 1. Receiving pattern (PO receipt)
        $this->createReceivingPattern();

        // 2. Shipping pattern (SO fulfillment)
        $this->createShippingPattern();

        // 3. Transfer pattern (warehouse to warehouse)
        $this->createTransferPattern();

        // 4. Adjustment pattern (cycle count)
        $this->createAdjustmentPattern();

        // 5. Return pattern (customer returns)
        $this->createReturnPattern();

        // 6. Reservation pattern (order reservation)
        $this->createReservationPattern();

        // 7. Daily activity pattern
        $this->createDailyActivityPattern();

        // 8. Product lifecycle pattern
        $this->createProductLifecyclePattern();

        // 9. Batch movement pattern
        $this->createBatchMovementPattern();

        // 10. Serial number tracking pattern
        $this->createSerialNumberPattern();
    }

    /**
     * Create receiving pattern (PO receipt).
     */
    protected function createReceivingPattern(): void
    {
        $this->command->info('  - Creating receiving pattern...');

        $product = Product::inRandomOrder()->first();
        $user = User::inRandomOrder()->first();

        // Receive 1000 units in multiple shipments
        for ($i = 0; $i < 5; $i++) {
            InventoryMovement::factory()
                ->receive()
                ->forProduct($product->id)
                ->createdBy($user->id)
                ->state([
                    'quantity' => 200,
                    'unit_cost' => $product->unit_cost ?? 50,
                    'reference_id' => 1000 + $i,
                    'created_at' => now()->subDays(10 - $i),
                ])
                ->create();
        }
    }

    /**
     * Create shipping pattern (SO fulfillment).
     */
    protected function createShippingPattern(): void
    {
        $this->command->info('  - Creating shipping pattern...');

        $product = Product::inRandomOrder()->first();
        $user = User::inRandomOrder()->first();

        // Ship orders over time
        $shipments = [50, 75, 25, 100, 60, 45, 80, 55, 70, 90];

        foreach ($shipments as $index => $qty) {
            InventoryMovement::factory()
                ->ship()
                ->forProduct($product->id)
                ->createdBy($user->id)
                ->state([
                    'quantity' => $qty,
                    'reference_id' => 2000 + $index,
                    'created_at' => now()->subDays(30 - $index * 3),
                ])
                ->create();
        }
    }

    /**
     * Create transfer pattern (warehouse to warehouse).
     */
    protected function createTransferPattern(): void
    {
        $this->command->info('  - Creating transfer pattern...');

        $product = Product::inRandomOrder()->first();
        $user = User::inRandomOrder()->first();

        // Transfer stock between warehouses
        for ($i = 0; $i < 8; $i++) {
            InventoryMovement::factory()
                ->transfer()
                ->forProduct($product->id)
                ->createdBy($user->id)
                ->state([
                    'quantity' => rand(25, 150),
                    'created_at' => now()->subDays(rand(1, 45)),
                ])
                ->create();
        }
    }

    /**
     * Create adjustment pattern (cycle count).
     */
    protected function createAdjustmentPattern(): void
    {
        $this->command->info('  - Creating adjustment pattern...');

        $product = Product::inRandomOrder()->first();
        $user = User::inRandomOrder()->first();

        // Cycle count adjustments
        $adjustments = [
            ['qty' => 5, 'note' => 'Cycle count - found extra'],
            ['qty' => -3, 'note' => 'Cycle count - damaged'],
            ['qty' => 10, 'note' => 'Cycle count - miscount corrected'],
            ['qty' => -2, 'note' => 'Quality control rejection'],
            ['qty' => 7, 'note' => 'Cycle count - received not recorded'],
            ['qty' => -4, 'note' => 'Sample removal'],
        ];

        foreach ($adjustments as $adj) {
            InventoryMovement::factory()
                ->adjustment($adj['qty'])
                ->forProduct($product->id)
                ->createdBy($user->id)
                ->state([
                    'notes' => $adj['note'],
                    'created_at' => fake()->dateTimeBetween('-3 months', 'now'),
                ])
                ->create();
        }
    }

    /**
     * Create return pattern (customer returns).
     */
    protected function createReturnPattern(): void
    {
        $this->command->info('  - Creating return pattern...');

        $product = Product::inRandomOrder()->first();
        $user = User::inRandomOrder()->first();

        // Customer returns
        for ($i = 0; $i < 6; $i++) {
            InventoryMovement::factory()
                ->return()
                ->forProduct($product->id)
                ->createdBy($user->id)
                ->state([
                    'quantity' => rand(1, 5),
                    'notes' => 'Customer return - reason: ' . fake()->randomElement([
                        'defective',
                        'wrong item',
                        'changed mind',
                        'damaged',
                        'not needed'
                    ]),
                    'created_at' => fake()->dateTimeBetween('-2 months', 'now'),
                ])
                ->create();
        }
    }

    /**
     * Create reservation pattern (order reservation).
     */
    protected function createReservationPattern(): void
    {
        $this->command->info('  - Creating reservation pattern...');

        $product = Product::inRandomOrder()->first();
        $user = User::inRandomOrder()->first();

        // Reserve and unreserve pattern
        $dates = [
            now()->subDays(15),
            now()->subDays(12),
            now()->subDays(10),
            now()->subDays(8),
            now()->subDays(5),
        ];

        foreach ($dates as $date) {
            // Reserve
            InventoryMovement::factory()
                ->reserve()
                ->forProduct($product->id)
                ->createdBy($user->id)
                ->state([
                    'quantity' => 25,
                    'created_at' => $date,
                ])
                ->create();

            // Unreserve later (some orders cancelled)
            if (rand(0, 1)) {
                InventoryMovement::factory()
                    ->unreserve()
                    ->forProduct($product->id)
                    ->createdBy($user->id)
                    ->state([
                        'quantity' => 25,
                        'created_at' => $date->copy()->addDays(2),
                    ])
                    ->create();
            }
        }
    }

    /**
     * Create daily activity pattern.
     */
    protected function createDailyActivityPattern(): void
    {
        $this->command->info('  - Creating daily activity pattern...');

        $products = Product::inRandomOrder()->limit(5)->get();
        $user = User::inRandomOrder()->first();

        // Create movements for each day of the week with different volumes
        for ($day = 0; $day < 30; $day++) {
            $date = now()->subDays($day);
            $dayOfWeek = $date->dayOfWeek;

            // Weekend has less activity
            $activityMultiplier = ($dayOfWeek == 0 || $dayOfWeek == 6) ? 0.3 : 1;

            $movementCount = rand(5, 15) * $activityMultiplier;

            for ($i = 0; $i < $movementCount; $i++) {
                InventoryMovement::factory()
                    ->forProduct($products->random()->id)
                    ->createdBy($user->id)
                    ->state([
                        'created_at' => $date->copy()->addHours(rand(8, 17)),
                    ])
                    ->create();
            }
        }
    }

    /**
     * Create product lifecycle pattern.
     */
    protected function createProductLifecyclePattern(): void
    {
        $this->command->info('  - Creating product lifecycle pattern...');

        $product = Product::factory()->create(['name' => 'Seasonal Product']);
        $user = User::inRandomOrder()->first();

        // Receive in bulk
        InventoryMovement::factory()
            ->receive()
            ->forProduct($product->id)
            ->createdBy($user->id)
            ->state([
                'quantity' => 1000,
                'created_at' => now()->subMonths(6),
            ])
            ->create();

        // Ship over time (sales)
        for ($i = 0; $i < 20; $i++) {
            InventoryMovement::factory()
                ->ship()
                ->forProduct($product->id)
                ->createdBy($user->id)
                ->state([
                    'quantity' => rand(20, 80),
                    'created_at' => now()->subMonths(6)->addDays($i * 9),
                ])
                ->create();
        }

        // Adjustments throughout lifecycle
        for ($i = 0; $i < 3; $i++) {
            InventoryMovement::factory()
                ->adjustment(rand(-10, 15))
                ->forProduct($product->id)
                ->createdBy($user->id)
                ->state([
                    'created_at' => now()->subMonths(6)->addMonths($i),
                ])
                ->create();
        }
    }

    /**
     * Create batch movement pattern.
     */
    protected function createBatchMovementPattern(): void
    {
        $this->command->info('  - Creating batch movement pattern...');

        $product = Product::factory()->batchTracked()->create();
        $user = User::inRandomOrder()->first();
        $batchNumber = 'BATCH-' . date('y') . '-001';

        // Receive batch
        InventoryMovement::factory()
            ->receive()
            ->forProduct($product->id)
            ->forBatch($batchNumber)
            ->createdBy($user->id)
            ->state([
                'quantity' => 500,
                'created_at' => now()->subMonths(3),
            ])
            ->create();

        // Ship from batch over time
        for ($i = 0; $i < 8; $i++) {
            InventoryMovement::factory()
                ->ship()
                ->forProduct($product->id)
                ->forBatch($batchNumber)
                ->createdBy($user->id)
                ->state([
                    'quantity' => rand(30, 80),
                    'created_at' => now()->subMonths(3)->addDays($i * 10),
                ])
                ->create();
        }
    }

    /**
     * Create serial number tracking pattern.
     */
    protected function createSerialNumberPattern(): void
    {
        $this->command->info('  - Creating serial number pattern...');

        $product = Product::factory()->serialTracked()->create();
        $user = User::inRandomOrder()->first();

        // Create movements for individual serial numbers
        for ($i = 1; $i <= 20; $i++) {
            $serialNumber = 'SN-HQ-' . str_pad($i, 5, '0', STR_PAD_LEFT);

            // Receive
            InventoryMovement::factory()
                ->receive()
                ->forProduct($product->id)
                ->forSerial($serialNumber)
                ->createdBy($user->id)
                ->state([
                    'quantity' => 1,
                    'created_at' => now()->subMonths(rand(1, 4)),
                ])
                ->create();

            // Ship (some serial numbers)
            if ($i % 3 != 0) {
                InventoryMovement::factory()
                    ->ship()
                    ->forProduct($product->id)
                    ->forSerial($serialNumber)
                    ->createdBy($user->id)
                    ->state([
                        'quantity' => 1,
                        'created_at' => now()->subDays(rand(1, 60)),
                    ])
                    ->create();
            }
        }
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $movements = InventoryMovement::getMovementsByType(365);
        $dailySummary = InventoryMovement::getDailySummary(30);

        $this->command->info("\nInventory Movement Statistics:");
        $this->command->table(
            ['Movement Type', 'Count', 'Total Quantity'],
            $movements->map(function ($item) {
                return [
                    InventoryMovement::$movementTypes[$item->movement_type] ?? $item->movement_type,
                    $item->count,
                    number_format($item->total_quantity),
                ];
            })->toArray()
        );

        $this->command->info("\nRecent Daily Activity:");
        $this->command->table(
            ['Date', 'Inbound', 'Outbound', 'Total Movements'],
            $dailySummary->take(7)->map(function ($item) {
                return [
                    $item->date,
                    number_format($item->inbound),
                    number_format($item->outbound),
                    $item->total_movements,
                ];
            })->toArray()
        );

        $this->command->info("\nTotal Movements Created: " . InventoryMovement::count());
        $this->command->info("Date Range: " . InventoryMovement::min('created_at')->format('Y-m-d') .
            " to " . InventoryMovement::max('created_at')->format('Y-m-d'));
    }
}
