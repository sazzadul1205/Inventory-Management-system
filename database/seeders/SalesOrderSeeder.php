<?php
// database/seeders/SalesOrderSeeder.php

namespace Database\Seeders;

use App\Models\SalesOrder;
use App\Models\Customer;
use App\Models\Shipment;
use App\Models\Warehouse;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class SalesOrderSeeder extends Seeder
{
    use ChecksDependencies;

    /**
     * Number of sales orders to create
     */
    protected const SO_COUNT = 10; // Was 400

    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        if (!$this->checkDependencies([
            Customer::class => 'No customers found',
            Warehouse::class => 'No warehouses found',
            User::class => 'No users found',
        ])) {
            return;
        }

       DB::statement('SET FOREIGN_KEY_CHECKS=0');
        SalesOrder::truncate();
       DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating sales orders...');
        $this->command->getOutput()->progressStart(self::SO_COUNT);

        $this->createSalesOrdersByStatus();
        $this->createSpecializedSalesOrders();

        $this->command->getOutput()->progressFinish();
        $this->displayStatistics();
    }

    /**
     * Check if required data exists.
     */
    protected function checkPrerequisites(): void
    {
        if (Customer::count() == 0) {
            $this->command->warn('No customers found. Running CustomerSeeder first...');
            $this->call(CustomerSeeder::class);
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
     * Create sales orders by status distribution.
     */
    protected function createSalesOrdersByStatus(): void
    {
        $statusDistribution = [
            SalesOrder::STATUS_DRAFT => 30,
            SalesOrder::STATUS_PENDING => 40,
            SalesOrder::STATUS_APPROVED => 40,
            SalesOrder::STATUS_PROCESSING => 40,
            SalesOrder::STATUS_PARTIALLY_SHIPPED => 40,
            SalesOrder::STATUS_SHIPPED => 50,
            SalesOrder::STATUS_DELIVERED => 40,
            SalesOrder::STATUS_CANCELLED => 20,
        ];

        foreach ($statusDistribution as $status => $count) {
            $this->command->info("\nCreating {$count} {$status} sales orders...");

            // Map the status constants to factory method names
            $factoryMethod = match ($status) {
                SalesOrder::STATUS_DRAFT => 'draft',
                SalesOrder::STATUS_PENDING => 'pending',
                SalesOrder::STATUS_APPROVED => 'approved',
                SalesOrder::STATUS_PROCESSING => 'processing',
                SalesOrder::STATUS_PARTIALLY_SHIPPED => 'partiallyShipped',
                SalesOrder::STATUS_SHIPPED => 'shipped',
                SalesOrder::STATUS_DELIVERED => 'delivered',
                SalesOrder::STATUS_CANCELLED => 'cancelled',
                default => 'draft'
            };

            for ($i = 0; $i < $count; $i++) {
                $factory = SalesOrder::factory()->{$factoryMethod}();

                $factory->withItems(rand(2, 6));

                if (in_array($status, [
                    SalesOrder::STATUS_PARTIALLY_SHIPPED,
                    SalesOrder::STATUS_SHIPPED,
                    SalesOrder::STATUS_DELIVERED
                ])) {
                    $factory->withShipments(rand(1, 2));
                }

                $factory->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create specialized sales order scenarios.
     */
    protected function createSpecializedSalesOrders(): void
    {
        $this->command->info("\nCreating specialized sales orders...");

        // 1. High value orders
        $this->createHighValueOrders();

        // 2. Urgent/expedited orders
        $this->createUrgentOrders();

        // 3. Overdue orders
        $this->createOverdueOrders();

        // 4. Multi-shipment orders
        $this->createMultiShipmentOrders();

        // 5. Bulk orders from major customers
        $this->createBulkOrders();

        // 6. Seasonal/holiday orders
        $this->createSeasonalOrders();

        // 7. Recurring orders (regular customers)
        $this->createRecurringOrders();

        // 8. Credit limit issues
        $this->createCreditIssueOrders();

        // 9. International orders
        $this->createInternationalOrders();

        // 10. Returns/RMA orders
        $this->createReturnOrders();
    }

    /**
     * Create high value orders.
     */
    protected function createHighValueOrders(): void
    {
        $this->command->info('  - Creating high value orders...');

        for ($i = 0; $i < 10; $i++) {
            SalesOrder::factory()
                ->approved()
                ->highValue()
                ->withItems(rand(3, 8))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create urgent/expedited orders.
     */
    protected function createUrgentOrders(): void
    {
        $this->command->info('  - Creating urgent orders...');

        for ($i = 0; $i < 12; $i++) {
            SalesOrder::factory()
                ->approved()
                ->urgent()
                ->withItems(rand(1, 3))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create overdue orders.
     */
    protected function createOverdueOrders(): void
    {
        $this->command->info('  - Creating overdue orders...');

        for ($i = 0; $i < 15; $i++) {
            SalesOrder::factory()
                ->overdue()
                ->withItems(rand(2, 4))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create orders with multiple shipments.
     */
    protected function createMultiShipmentOrders(): void
    {
        $this->command->info('  - Creating multi-shipment orders...');

        for ($i = 0; $i < 8; $i++) {
            $so = SalesOrder::factory()
                ->partiallyShipped()
                ->withItems(4)
                ->create();

            // Create 2-3 partial shipments
            $shipmentCount = rand(2, 3);
            for ($j = 0; $j < $shipmentCount; $j++) {
                if (class_exists('Shipment')) {
                    Shipment::factory()
                        ->forSalesOrder($so->id)
                        ->create();
                }
            }

            // Update status to partially shipped
            $so->updateStatus();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create bulk orders from major customers.
     */
    protected function createBulkOrders(): void
    {
        $this->command->info('  - Creating bulk orders...');

        $majorCustomers = Customer::where('company_name', 'like', '%International%')
            ->orWhere('company_name', 'like', '%Global%')
            ->orWhere('credit_limit', '>', 100000)
            ->limit(5)
            ->get();

        if ($majorCustomers->isEmpty()) {
            $majorCustomers = Customer::factory()->enterprise()->count(3)->create();
        }

        foreach ($majorCustomers as $customer) {
            for ($i = 0; $i < 3; $i++) {
                SalesOrder::factory()
                    ->forCustomer($customer->id)
                    ->delivered()
                    ->withItems(rand(5, 10))
                    ->state([
                        'total_amount' => fake()->randomFloat(2, 20000, 100000),
                        'notes' => 'Bulk order - Freight shipping', // Add note instead of shipping_method
                    ])
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create seasonal/holiday orders.
     */
    protected function createSeasonalOrders(): void
    {
        $this->command->info('  - Creating seasonal orders...');

        $seasons = [
            ['name' => 'Christmas', 'month' => 11, 'year' => 2023],
            ['name' => 'Back to School', 'month' => 7, 'year' => 2023],
            ['name' => 'Black Friday', 'month' => 11, 'year' => 2023],
            ['name' => 'Summer Sale', 'month' => 6, 'year' => 2023],
            ['name' => 'Valentine\'s Day', 'month' => 1, 'year' => 2024],
        ];

        foreach ($seasons as $season) {
            for ($i = 0; $i < 5; $i++) {
                $orderDate = \Carbon\Carbon::create($season['year'], $season['month'], rand(1, 28));

                SalesOrder::factory()
                    ->delivered()
                    ->withItems(rand(3, 6))
                    ->state([
                        'order_date' => $orderDate,
                        'required_date' => $orderDate->copy()->addDays(rand(5, 10)),
                        'notes' => "Seasonal order for {$season['name']}",
                    ])
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create recurring orders from regular customers.
     */
    protected function createRecurringOrders(): void
    {
        $this->command->info('  - Creating recurring orders...');

        $regularCustomers = Customer::inRandomOrder()->limit(6)->get();

        foreach ($regularCustomers as $customer) {
            // Create monthly orders for the past 6 months
            for ($month = 0; $month < 6; $month++) {
                $orderDate = now()->subMonths($month)->startOfMonth()->addDays(rand(1, 5));

                SalesOrder::factory()
                    ->forCustomer($customer->id)
                    ->delivered()
                    ->withItems(rand(2, 4))
                    ->state([
                        'order_date' => $orderDate,
                        'required_date' => $orderDate->copy()->addDays(7),
                        'shipped_date' => $orderDate->copy()->addDays(rand(5, 9)),
                        'notes' => 'Monthly recurring order',
                    ])
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create orders with credit limit issues.
     */
    protected function createCreditIssueOrders(): void
    {
        $this->command->info('  - Creating credit limit issue orders...');

        for ($i = 0; $i < 6; $i++) {
            SalesOrder::factory()
                ->pending() // Pending approval due to credit check
                ->withCreditIssue()
                ->withItems(rand(2, 3))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create international orders.
     */
    protected function createInternationalOrders(): void
    {
        $this->command->info('  - Creating international orders...');

        $internationalCustomers = Customer::where('country', '!=', 'USA')->get();

        if ($internationalCustomers->isEmpty()) {
            $internationalCustomers = Customer::factory()->international()->count(5)->create();
        }

        foreach ($internationalCustomers->take(8) as $customer) {
            SalesOrder::factory()
                ->forCustomer($customer->id)
                ->shipped()
                ->withItems(rand(3, 6))
                ->state([
                    'shipping_cost' => fake()->randomFloat(2, 500, 2000),
                    'notes' => fake()->randomElement(['Ocean Freight', 'Air Freight']) . ' - International shipping',
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create return orders (RMA).
     */
    protected function createReturnOrders(): void
    {
        $this->command->info('  - Creating return orders...');

        for ($i = 0; $i < 5; $i++) {
            $originalOrder = SalesOrder::factory()
                ->delivered()
                ->withItems(3)
                ->create();

            // Create return order (special handling)
            SalesOrder::factory()
                ->forCustomer($originalOrder->customer_id)
                ->fromWarehouse($originalOrder->warehouse_id)
                ->approved()
                ->withItems(rand(1, 2))
                ->state([
                    'notes' => 'Return/RMA for order: ' . $originalOrder->so_number,
                    'total_amount' => fake()->randomFloat(2, -500, -50), // Negative for returns
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
        $this->command->info("\nSales Order Statistics:");

        $stats = SalesOrder::getStatistics(365);

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Orders', $stats['total_orders']],
                ['Total Revenue', '$' . number_format($stats['total_revenue'], 2)],
                ['Average Order Value', '$' . number_format($stats['average_order_value'], 2)],
                ['Completed Orders', $stats['completed_orders']],
                ['Cancelled Orders', $stats['cancelled_orders']],
                ['Completion Rate', $stats['completion_rate'] . '%'],
            ]
        );

        // Show status breakdown
        $this->command->info("\nOrders by Status:");
        $byStatus = SalesOrder::select('status', DB::raw('count(*) as count'))
            ->groupBy('status')
            ->get()
            ->mapWithKeys(function ($item) {
                return [$item->status => $item->count];
            });

        $statusData = [];
        foreach (SalesOrder::$statuses as $status => $label) {
            $statusData[] = [$label, $byStatus[$status] ?? 0];
        }

        $this->command->table(['Status', 'Count'], $statusData);

        // Show payment status breakdown
        $this->command->info("\nOrders by Payment Status:");
        $byPayment = SalesOrder::select('payment_status', DB::raw('count(*) as count'))
            ->groupBy('payment_status')
            ->get()
            ->mapWithKeys(function ($item) {
                return [$item->payment_status => $item->count];
            });

        $paymentData = [];
        foreach (SalesOrder::$paymentStatuses as $status => $label) {
            $paymentData[] = [$label, $byPayment[$status] ?? 0];
        }

        $this->command->table(['Payment Status', 'Count'], $paymentData);

        // Show monthly summary
        $this->command->info("\nMonthly Sales Summary:");
        $monthly = SalesOrder::getMonthlySummary(6);

        $this->command->table(
            ['Year-Month', 'Orders', 'Revenue', 'Avg Value'],
            $monthly->map(function ($item) {
                return [
                    $item->year . '-' . str_pad($item->month, 2, '0', STR_PAD_LEFT),
                    $item->order_count,
                    '$' . number_format($item->revenue, 2),
                    '$' . number_format($item->average_value, 2),
                ];
            })->toArray()
        );

        // Show overdue alert
        $overdueCount = SalesOrder::overdue()->count();
        if ($overdueCount > 0) {
            $this->command->warn("\n⚠️  There are {$overdueCount} overdue sales orders!");

            $overdueSOs = SalesOrder::overdue()
                ->with('customer')
                ->limit(5)
                ->get();

            $this->command->table(
                ['SO Number', 'Customer', 'Required Date', 'Days Overdue'],
                $overdueSOs->map(function ($so) {
                    return [
                        $so->so_number,
                        $so->customer->name,
                        $so->required_date->format('Y-m-d'),
                        $so->days_overdue,
                    ];
                })->toArray()
            );
        }

        // Show credit issues
        $creditIssues = SalesOrder::creditIssues()->count();
        if ($creditIssues > 0) {
            $this->command->warn("\n⚠️  There are {$creditIssues} orders with credit limit issues!");
        }
    }
}
