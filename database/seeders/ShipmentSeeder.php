<?php
// database/seeders/ShipmentSeeder.php

namespace Database\Seeders;

use App\Models\Location;
use App\Models\Shipment;
use App\Models\SalesOrder;
use App\Models\ShipmentItem;
use App\Models\Warehouse;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;


class ShipmentSeeder extends Seeder
{
    use ChecksDependencies;

    /**
     * Number of shipments to create
     */
    protected const SHIPMENT_COUNT = 30; // Was 300

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       
        if (!$this->checkDependencies([
            SalesOrder::class => 'No sales orders found',
            Warehouse::class => 'No warehouses found',
            User::class => 'No users found',
        ])) {
            return;
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        Shipment::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating shipments...');
        $this->command->getOutput()->progressStart(self::SHIPMENT_COUNT);

        $this->createShipmentsByStatus();
        $this->createSpecializedShipments();

        $this->command->getOutput()->progressFinish();
        $this->displayStatistics();
    }

    /**
     * Check if required data exists.
     */
    protected function checkPrerequisites(): void
    {
        if (SalesOrder::count() == 0) {
            $this->command->warn('No sales orders found. Running SalesOrderSeeder first...');
            $this->call(SalesOrderSeeder::class);
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
     * Create shipments by status distribution.
     */
    protected function createShipmentsByStatus(): void
    {
        $statusDistribution = [
            Shipment::STATUS_PENDING => 40,
            Shipment::STATUS_PACKED => 50,
            Shipment::STATUS_SHIPPED => 80,
            Shipment::STATUS_DELIVERED => 100,
            Shipment::STATUS_CANCELLED => 15,
        ];

        foreach ($statusDistribution as $status => $count) {
            $this->command->info("\nCreating {$count} {$status} shipments...");

            for ($i = 0; $i < $count; $i++) {
                $so = SalesOrder::inRandomOrder()->first() ?? SalesOrder::factory()->create();

                Shipment::factory()
                    ->{$status}()
                    ->forSalesOrder($so->id)
                    ->fromWarehouse($so->warehouse_id)
                    ->withItems(rand(1, 4))
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create specialized shipment scenarios.
     */
    protected function createSpecializedShipments(): void
    {
        $this->command->info("\nCreating specialized shipments...");

        // 1. Express/expedited shipments
        $this->createExpeditedShipments();

        // 2. International shipments
        $this->createInternationalShipments();

        // 3. Freight shipments
        $this->createFreightShipments();

        // 4. Multi-package shipments
        $this->createMultiPackageShipments();

        // 5. Split shipments (multiple shipments for one order)
        $this->createSplitShipments();

        // 6. Late deliveries
        $this->createLateDeliveries();

        // 7. Damaged/returned shipments
        $this->createDamagedShipments();

        // 8. Holiday season shipments
        $this->createHolidayShipments();

        // 9. Weekend shipments
        $this->createWeekendShipments();

        // 10. Bulk shipments
        $this->createBulkShipments();

        // 11. Same-day deliveries
        $this->createSameDayDeliveries();

        // 12. Cross-border shipments
        $this->createCrossBorderShipments();
    }

    /**
     * Create expedited shipments.
     */
    protected function createExpeditedShipments(): void
    {
        $this->command->info('  - Creating expedited shipments...');

        for ($i = 0; $i < 15; $i++) {
            $so = SalesOrder::factory()->urgent()->create();

            Shipment::factory()
                ->forSalesOrder($so->id)
                ->fromWarehouse($so->warehouse_id)
                ->expedited()
                ->shipped()
                ->withItems(rand(1, 3))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create international shipments.
     */
    protected function createInternationalShipments(): void
    {
        $this->command->info('  - Creating international shipments...');

        for ($i = 0; $i < 12; $i++) {
            $so = SalesOrder::factory()->create();

            Shipment::factory()
                ->forSalesOrder($so->id)
                ->fromWarehouse($so->warehouse_id)
                ->international()
                ->shipped()
                ->withItems(rand(3, 6))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create freight shipments.
     */
    protected function createFreightShipments(): void
    {
        $this->command->info('  - Creating freight shipments...');

        for ($i = 0; $i < 8; $i++) {
            $so = SalesOrder::factory()->highValue()->create();

            Shipment::factory()
                ->forSalesOrder($so->id)
                ->fromWarehouse($so->warehouse_id)
                ->freight()
                ->shipped()
                ->withItems(rand(2, 5))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create multi-package shipments.
     */
    protected function createMultiPackageShipments(): void
    {
        $this->command->info('  - Creating multi-package shipments...');

        for ($i = 0; $i < 10; $i++) {
            $so = SalesOrder::factory()->create();

            // Create multiple shipments for the same order
            $shipmentCount = rand(2, 4);

            for ($j = 0; $j < $shipmentCount; $j++) {
                $shipment = Shipment::factory()
                    ->forSalesOrder($so->id)
                    ->fromWarehouse($so->warehouse_id)
                    ->shipped()
                    ->create();

                // Add items to this shipment
                $this->addItemsToShipment($shipment, rand(1, 3));

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create split shipments.
     */
    protected function createSplitShipments(): void
    {
        $this->command->info('  - Creating split shipments...');

        for ($i = 0; $i < 8; $i++) {
            $so = SalesOrder::factory()->create();

            // Create multiple partial shipments
            $shipment1 = Shipment::factory()
                ->forSalesOrder($so->id)
                ->fromWarehouse($so->warehouse_id)
                ->shipped()
                ->create();

            $this->addItemsToShipment($shipment1, 2);

            $shipment2 = Shipment::factory()
                ->forSalesOrder($so->id)
                ->fromWarehouse($so->warehouse_id)
                ->shipped()
                ->create();

            $this->addItemsToShipment($shipment2, 2);

            $this->command->getOutput()->progressAdvance(2);
        }
    }

    /**
     * Create late deliveries.
     */
    protected function createLateDeliveries(): void
    {
        $this->command->info('  - Creating late deliveries...');

        for ($i = 0; $i < 10; $i++) {
            $shippedDate = now()->subDays(fake()->numberBetween(10, 20));
            $expectedTransit = fake()->numberBetween(3, 5);

            // Late by several days
            $deliveryDate = \Carbon\Carbon::instance($shippedDate)
                ->addDays($expectedTransit + fake()->numberBetween(2, 7));

            Shipment::factory()
                ->delivered()
                ->state([
                    'shipped_date' => $shippedDate,
                    'delivery_date' => $deliveryDate,
                    'notes' => 'Delayed due to ' . fake()->randomElement([
                        'weather',
                        'carrier issues',
                        'customs',
                        'address correction',
                        'peak volume'
                    ]),
                ])
                ->withItems(rand(1, 3))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create damaged shipments.
     */
    protected function createDamagedShipments(): void
    {
        $this->command->info('  - Creating damaged shipments...');

        for ($i = 0; $i < 6; $i++) {
            $shipment = Shipment::factory()
                ->delivered()
                ->withItems(2)
                ->create();

            // Mark some items as damaged
            if (class_exists('ShipmentItem')) {
                foreach ($shipment->items as $item) {
                    if (fake()->boolean(30)) {
                        $item->notes = 'Item damaged during transit';
                        $item->save();
                    }
                }
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create holiday season shipments.
     */
    protected function createHolidayShipments(): void
    {
        $this->command->info('  - Creating holiday season shipments...');

        $holidayDates = [
            \Carbon\Carbon::create(now()->year, 11, 25), // Black Friday
            \Carbon\Carbon::create(now()->year, 12, 15), // Christmas peak
            \Carbon\Carbon::create(now()->year, 12, 20), // Last shipping day
        ];

        foreach ($holidayDates as $date) {
            for ($i = 0; $i < 5; $i++) {
                Shipment::factory()
                    ->shipped()
                    ->state([
                        'shipped_date' => $date->copy()->addDays(rand(-3, 3)),
                        'notes' => 'Holiday season shipment',
                    ])
                    ->withItems(rand(2, 5))
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create weekend shipments.
     */
    protected function createWeekendShipments(): void
    {
        $this->command->info('  - Creating weekend shipments...');

        for ($i = 0; $i < 8; $i++) {
            // Find a weekend date
            $weekendDate = now()->subDays(rand(1, 60));
            while ($weekendDate->dayOfWeek !== 0 && $weekendDate->dayOfWeek !== 6) {
                $weekendDate = $weekendDate->subDay();
            }

            Shipment::factory()
                ->shipped()
                ->state([
                    'shipped_date' => $weekendDate,
                    'notes' => 'Weekend shipment',
                ])
                ->withItems(rand(1, 3))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create bulk shipments.
     */
    protected function createBulkShipments(): void
    {
        $this->command->info('  - Creating bulk shipments...');

        for ($i = 0; $i < 6; $i++) {
            $so = SalesOrder::factory()->highValue()->create();

            Shipment::factory()
                ->forSalesOrder($so->id)
                ->fromWarehouse($so->warehouse_id)
                ->freight()
                ->shipped()
                ->state([
                    'shipping_cost' => fake()->randomFloat(2, 300, 1500),
                ])
                ->withItems(rand(5, 10))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create same-day deliveries.
     */
    protected function createSameDayDeliveries(): void
    {
        $this->command->info('  - Creating same-day deliveries...');

        for ($i = 0; $i < 5; $i++) {
            $shippedDate = now()->subDays(fake()->numberBetween(1, 10))->setTime(9, 0);
            $deliveryDate = clone $shippedDate;
            $deliveryDate->setTime(16, 0); // Same day delivery

            Shipment::factory()
                ->delivered()
                ->state([
                    'carrier' => fake()->randomElement(['Local Courier', 'SameDay Delivery', 'Uber Direct']),
                    'shipping_method' => 'Same Day',
                    'shipped_date' => $shippedDate,
                    'delivery_date' => $deliveryDate,
                    'shipping_cost' => fake()->randomFloat(2, 15, 40),
                ])
                ->withItems(rand(1, 2))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create cross-border shipments.
     */
    protected function createCrossBorderShipments(): void
    {
        $this->command->info('  - Creating cross-border shipments...');

        for ($i = 0; $i < 7; $i++) {
            $shippedDate = now()->subDays(fake()->numberBetween(5, 20));
            $deliveryDate = \Carbon\Carbon::instance($shippedDate)->addDays(fake()->numberBetween(3, 10));

            Shipment::factory()
                ->delivered()
                ->state([
                    'carrier' => fake()->randomElement(['UPS', 'FedEx', 'DHL']),
                    'shipping_method' => 'Cross-border',
                    'shipped_date' => $shippedDate,
                    'delivery_date' => $deliveryDate,
                    'shipping_cost' => fake()->randomFloat(2, 30, 150),
                    'notes' => 'Cross-border shipment - customs cleared',
                ])
                ->withItems(rand(2, 4))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Add items to a shipment.
     */
    protected function addItemsToShipment(Shipment $shipment, int $count): void
    {
        if (!class_exists('ShipmentItem')) {
            return;
        }

        $soItems = $shipment->salesOrder->items()
            ->whereRaw('quantity_shipped < quantity_ordered')
            ->get();

        if ($soItems->isEmpty()) {
            return;
        }

        foreach ($soItems->take($count) as $soItem) {
            $remaining = $soItem->quantity_ordered - $soItem->quantity_shipped;
            $quantity = min($remaining, rand(1, 5));

            $location = Location::where('warehouse_id', $shipment->warehouse_id)
                ->inRandomOrder()
                ->first();

            ShipmentItem::factory()
                ->forShipment($shipment->id)
                ->forSalesOrderItem($soItem->id)
                ->forProduct($soItem->product_id)
                ->withQuantity($quantity)
                ->withLocation($location?->id)
                ->create();
        }
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nShipment Statistics:");

        $stats = Shipment::getStatistics(365);

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Shipments', $stats['total_shipments']],
                ['Delivered Shipments', $stats['delivered_shipments']],
                ['Cancelled Shipments', $stats['cancelled_shipments']],
                ['Total Shipping Cost', '$' . number_format($stats['total_shipping_cost'], 2)],
                ['Average Shipping Cost', '$' . number_format($stats['average_shipping_cost'], 2)],
                ['Delivery Rate', $stats['delivery_rate'] . '%'],
            ]
        );

        // Show status breakdown
        $this->command->info("\nShipments by Status:");
        $byStatus = Shipment::select('status', DB::raw('count(*) as count'))
            ->groupBy('status')
            ->get()
            ->mapWithKeys(function ($item) {
                return [$item->status => $item->count];
            });

        $statusData = [];
        foreach (Shipment::$statuses as $status => $label) {
            $statusData[] = [$label, $byStatus[$status] ?? 0];
        }

        $this->command->table(['Status', 'Count'], $statusData);

        // Show carrier breakdown
        $this->command->info("\nShipments by Carrier:");
        $this->command->table(
            ['Carrier', 'Shipments', 'Total Cost'],
            $stats['by_carrier']->map(function ($item, $carrier) {
                return [
                    $carrier,
                    $item['count'],
                    '$' . number_format($item['total_cost'], 2),
                ];
            })->toArray()
        );

        // Show shipments needing attention
        $needingAttention = Shipment::getShipmentsNeedingAttention();
        if ($needingAttention->isNotEmpty()) {
            $this->command->warn("\n⚠️  There are {$needingAttention->count()} shipments that need attention (in transit > 7 days)!");

            $this->command->table(
                ['Shipment', 'Order', 'Customer', 'Shipped Date', 'Days in Transit'],
                $needingAttention->take(5)->map(function ($shipment) {
                    return [
                        $shipment->shipment_number,
                        $shipment->salesOrder->so_number,
                        $shipment->salesOrder->customer->name,
                        $shipment->shipped_date->format('Y-m-d'),
                        $shipment->days_in_transit,
                    ];
                })->toArray()
            );
        }

        // Show average transit time
        $avgTransit = Shipment::where('status', Shipment::STATUS_DELIVERED)
            ->whereNotNull('delivery_date')
            ->get()
            ->avg(function ($shipment) {
                return $shipment->days_in_transit;
            });

        $this->command->info("\nAverage Transit Time: " . round($avgTransit ?? 0, 1) . " days");
    }
}
