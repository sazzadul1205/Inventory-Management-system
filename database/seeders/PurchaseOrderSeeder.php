<?php
// database/seeders/PurchaseOrderSeeder.php

namespace Database\Seeders;

use App\Models\PurchaseOrder;
use App\Models\PurchaseReceipt;
use App\Models\Supplier;
use App\Models\Warehouse;
use App\Models\User;
use Illuminate\Support\Collection;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;
use Illuminate\Support\Facades\Schema;

class PurchaseOrderSeeder extends Seeder
{
    use ChecksDependencies;

    /**
     * Number of purchase orders to create
     */
    protected const PO_COUNT = 10; // Was 300

    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        if (!$this->checkDependencies([
            Supplier::class => 'No suppliers found',
            Warehouse::class => 'No warehouses found',
            User::class => 'No users found',
        ])) {
            return;
        }

        // DB::statement('SET FOREIGN_KEY_CHECKS=0');
        PurchaseOrder::truncate();
        // DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating purchase orders...');
        $this->command->getOutput()->progressStart(self::PO_COUNT);

        $this->createPurchaseOrdersByStatus();
        $this->createSpecializedPurchaseOrders();

        $this->command->getOutput()->progressFinish();
        $this->displayStatistics();
    }

    /**
     * Check if required data exists.
     */
    protected function checkPrerequisites(): void
    {
        if (Supplier::count() == 0) {
            $this->command->warn('No suppliers found. Running SupplierSeeder first...');
            $this->call(SupplierSeeder::class);
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
     * Create purchase orders by status distribution.
     */
    protected function createPurchaseOrdersByStatus(): void
    {
        $statusDistribution = [
            PurchaseOrder::STATUS_DRAFT => 30,
            PurchaseOrder::STATUS_PENDING => 40,
            PurchaseOrder::STATUS_APPROVED => 50,
            PurchaseOrder::STATUS_SHIPPED => 45,
            PurchaseOrder::STATUS_PARTIALLY_RECEIVED => 40,
            PurchaseOrder::STATUS_RECEIVED => 60,
            PurchaseOrder::STATUS_CANCELLED => 15,
        ];

        foreach ($statusDistribution as $status => $count) {
            $this->command->info("\nCreating {$count} {$status} purchase orders...");

            // Map the status constants to factory method names
            $factoryMethod = match ($status) {
                PurchaseOrder::STATUS_DRAFT => 'draft',
                PurchaseOrder::STATUS_PENDING => 'pending',
                PurchaseOrder::STATUS_APPROVED => 'approved',
                PurchaseOrder::STATUS_SHIPPED => 'shipped',
                PurchaseOrder::STATUS_PARTIALLY_RECEIVED => 'partiallyReceived',
                PurchaseOrder::STATUS_RECEIVED => 'received',
                PurchaseOrder::STATUS_CANCELLED => 'cancelled',
                default => 'draft'
            };

            for ($i = 0; $i < $count; $i++) {
                $factory = PurchaseOrder::factory()->{$factoryMethod}();

                $factory->withItems(rand(2, 6));

                if (in_array($status, [
                    PurchaseOrder::STATUS_PARTIALLY_RECEIVED,
                    PurchaseOrder::STATUS_RECEIVED
                ])) {
                    $factory->withReceipts(rand(1, 2));
                }

                $factory->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create specialized purchase order scenarios.
     */
    protected function createSpecializedPurchaseOrders(): void
    {
        $this->command->info("\nCreating specialized purchase orders...");

        // 1. High value orders
        $this->createHighValueOrders();

        // 2. Urgent/expedited orders
        $this->createUrgentOrders();

        // 3. Overdue orders
        $this->createOverdueOrders();

        // 4. Multi-receipt orders
        $this->createMultiReceiptOrders();

        // 5. Bulk orders from major suppliers
        $this->createBulkOrders();

        // 6. Seasonal orders
        $this->createSeasonalOrders();

        // 7. Recurring orders
        $this->createRecurringOrders();

        // 8. Problematic orders (disputes, quality issues)
        $this->createProblematicOrders();
    }

    /**
     * Create high value orders.
     */
    protected function createHighValueOrders(): void
    {
        $this->command->info('  - Creating high value orders...');

        for ($i = 0; $i < 8; $i++) {
            PurchaseOrder::factory()
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

        for ($i = 0; $i < 10; $i++) {
            PurchaseOrder::factory()
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

        for ($i = 0; $i < 12; $i++) {
            PurchaseOrder::factory()
                ->overdue()
                ->withItems(rand(2, 4))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create orders with multiple receipts (partial shipments).
     */
    protected function createMultiReceiptOrders(): void
    {
        $this->command->info('  - Creating multi-receipt orders...');

        for ($i = 0; $i < 8; $i++) {
            $po = PurchaseOrder::factory()
                ->partiallyReceived()
                ->withItems(4)
                ->create();

            // Create 2-3 partial receipts
            $receiptCount = rand(2, 3);
            for ($j = 0; $j < $receiptCount; $j++) {
                if (class_exists('PurchaseReceipt')) {
                    PurchaseReceipt::factory()
                        ->forPurchaseOrder($po->id)
                        ->create();
                }
            }

            // Update status to partially received
            $po->updateStatus();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create bulk orders from major suppliers.
     */
    protected function createBulkOrders(): void
    {
        $this->command->info('  - Creating bulk orders...');

        // First, let's check what columns exist in the suppliers table
        $supplierColumns = Schema::getColumnListing('suppliers');
        $this->command->info('Supplier columns: ' . implode(', ', $supplierColumns));

        // Determine the name column - common possibilities
        $nameColumn = null;
        $possibleNameColumns = ['name', 'supplier_name', 'company_name', 'business_name', 'supplier', 'company'];

        foreach ($possibleNameColumns as $column) {
            if (in_array($column, $supplierColumns)) {
                $nameColumn = $column;
                break;
            }
        }

        if (!$nameColumn) {
            $this->command->warn('Could not find a name column in suppliers table. Using first suppliers instead.');
            $majorSuppliers = Supplier::inRandomOrder()->limit(3)->get();
        } else {
            // Use the actual column name in the query
            $majorSuppliers = Supplier::where($nameColumn, 'like', '%International%')
                ->orWhere($nameColumn, 'like', '%Global%')
                ->limit(3)
                ->get();
        }

        /** @var Collection<int, Supplier> $majorSuppliers */
        if ($majorSuppliers->isEmpty()) {
            $this->command->info('No major suppliers found. Creating some...');
            $majorSuppliers = Supplier::factory()->count(3)->create();

            // Update the name using the correct column
            foreach ($majorSuppliers as $supplier) {
                if ($nameColumn) {
                    $supplier->update([$nameColumn => 'Major International Supplier']);
                } else {
                    // If we couldn't find a name column, try to update the first string column
                    foreach ($supplierColumns as $column) {
                        $columnType = Schema::getColumnType('suppliers', $column);
                        if ($columnType === 'string' || $columnType === 'varchar') {
                            $supplier->update([$column => 'Major International Supplier']);
                            break;
                        }
                    }
                }
            }
        }

        foreach ($majorSuppliers as $supplier) {
            for ($i = 0; $i < 3; $i++) {
                PurchaseOrder::factory()
                    ->fromSupplier($supplier->id)
                    ->approved()
                    ->withItems(rand(5, 10))
                    ->state([
                        'total_amount' => fake()->randomFloat(2, 20000, 100000),
                        'shipping_method' => 'Freight - FTL',
                    ])
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create seasonal orders (holiday peaks).
     */
    protected function createSeasonalOrders(): void
    {
        $this->command->info('  - Creating seasonal orders...');

        $seasons = [
            ['name' => 'Christmas', 'month' => 10, 'year' => 2023],
            ['name' => 'Back to School', 'month' => 7, 'year' => 2023],
            ['name' => 'Black Friday', 'month' => 10, 'year' => 2023],
            ['name' => 'Summer Sale', 'month' => 5, 'year' => 2023],
        ];

        foreach ($seasons as $season) {
            for ($i = 0; $i < 5; $i++) {
                $orderDate = \Carbon\Carbon::create($season['year'], $season['month'], rand(1, 28));

                PurchaseOrder::factory()
                    ->approved()
                    ->withItems(rand(4, 8))
                    ->state([
                        'order_date' => $orderDate,
                        'expected_delivery_date' => $orderDate->copy()->addDays(rand(7, 14)),
                        'notes' => "Seasonal order for {$season['name']}",
                    ])
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create recurring orders (regular supplies).
     */
    protected function createRecurringOrders(): void
    {
        $this->command->info('  - Creating recurring orders...');

        $regularSuppliers = Supplier::inRandomOrder()->limit(4)->get();

        foreach ($regularSuppliers as $supplier) {
            // Create monthly orders for the past 6 months
            for ($month = 0; $month < 6; $month++) {
                $orderDate = now()->subMonths($month)->startOfMonth()->addDays(rand(1, 5));

                PurchaseOrder::factory()
                    ->fromSupplier($supplier->id)
                    ->received()
                    ->withItems(3)
                    ->state([
                        'order_date' => $orderDate,
                        'expected_delivery_date' => $orderDate->copy()->addDays(7),
                        'actual_delivery_date' => $orderDate->copy()->addDays(rand(5, 10)),
                        'notes' => 'Monthly recurring order',
                    ])
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create problematic orders (disputes, quality issues).
     */
    protected function createProblematicOrders(): void
    {
        $this->command->info('  - Creating problematic orders...');

        $issues = [
            'Quality issues - partial rejection',
            'Short shipment - 50 units missing',
            'Damaged goods in transit',
            'Wrong items received',
            'Pricing dispute with supplier',
            'Late delivery - customer compensation',
            'Missing documentation',
            'Customs clearance delay',
        ];

        for ($i = 0; $i < 8; $i++) {
            PurchaseOrder::factory()
                ->partiallyReceived()
                ->withItems(rand(2, 4))
                ->state([
                    'notes' => fake()->randomElement($issues),
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Display statistics after seeding.
     */
    // protected function displayStatistics(): void
    // {
    //     $this->command->info("\nPurchase Order Statistics:");

    //     $stats = PurchaseOrder::getStatistics(365);

    //     $this->command->table(
    //         ['Metric', 'Value'],
    //         [
    //             ['Total Orders', $stats['total_orders']],
    //             ['Total Value', '$' . number_format($stats['total_value'], 2)],
    //             ['Average Order Value', '$' . number_format($stats['average_value'], 2)],
    //             ['Received Orders', $stats['received_orders']],
    //             ['Cancelled Orders', $stats['cancelled_orders']],
    //             ['Overdue Orders', $stats['overdue_count']],
    //             ['Completion Rate', $stats['completion_rate'] . '%'],
    //         ]
    //     );

    //     // Show status breakdown
    //     $this->command->info("\nOrders by Status:");
    //     $byStatus = PurchaseOrder::select('status', DB::raw('count(*) as count'))
    //         ->groupBy('status')
    //         ->get()
    //         ->mapWithKeys(function ($item) {
    //             return [$item->status => $item->count];
    //         });

    //     $statusData = [];
    //     foreach (PurchaseOrder::$statuses as $status => $label) {
    //         $statusData[] = [$label, $byStatus[$status] ?? 0];
    //     }

    //     $this->command->table(['Status', 'Count'], $statusData);

    //     // Show monthly summary
    //     $this->command->info("\nMonthly Order Summary:");
    //     $monthly = PurchaseOrder::getMonthlySummary(6);

    //     $this->command->table(
    //         ['Year-Month', 'Orders', 'Total Value', 'Avg Value'],
    //         $monthly->map(function ($item) {
    //             return [
    //                 $item->year . '-' . str_pad($item->month, 2, '0', STR_PAD_LEFT),
    //                 $item->order_count,
    //                 '$' . number_format($item->total_value, 2),
    //                 '$' . number_format($item->average_value, 2),
    //             ];
    //         })->toArray()
    //     );

    //     // Show overdue alert
    //     if ($stats['overdue_count'] > 0) {
    //         $this->command->warn("\n⚠️  There are {$stats['overdue_count']} overdue purchase orders!");

    //         $overduePOs = PurchaseOrder::overdue()
    //             ->with('supplier')
    //             ->limit(5)
    //             ->get();

    //         $this->command->table(
    //             ['PO Number', 'Supplier', 'Expected Date', 'Days Overdue'],
    //             $overduePOs->map(function ($po) {
    //                 return [
    //                     $po->po_number,
    //                     $po->supplier->name,
    //                     $po->expected_delivery_date->format('Y-m-d'),
    //                     $po->days_overdue,
    //                 ];
    //             })->toArray()
    //         );
    //     }
    // }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nPurchase Order Statistics:");

        $stats = PurchaseOrder::getStatistics(365);

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Orders', $stats['total_orders']],
                ['Total Value', '$' . number_format($stats['total_value'], 2)],
                ['Average Order Value', '$' . number_format($stats['average_value'], 2)],
                ['Received Orders', $stats['received_orders']],
                ['Cancelled Orders', $stats['cancelled_orders']],
                ['Overdue Orders', $stats['overdue_count']],
                ['Completion Rate', $stats['completion_rate'] . '%'],
            ]
        );

        // Show status breakdown - SQLite compatible
        $this->command->info("\nOrders by Status:");
        $byStatus = PurchaseOrder::select('status', DB::raw('count(*) as count'))
            ->groupBy('status')
            ->get()
            ->keyBy('status')
            ->map(function ($item) {
                return $item->count;
            });

        $statusData = [];
        foreach (PurchaseOrder::$statuses as $status => $label) {
            $statusData[] = [$label, $byStatus[$status] ?? 0];
        }

        $this->command->table(['Status', 'Count'], $statusData);

        // Show monthly summary - SQLite compatible
        $this->command->info("\nMonthly Order Summary:");

        // Get monthly summary using raw SQL that works with SQLite
        $monthly = PurchaseOrder::select(
            DB::raw("strftime('%Y', order_date) as year"),
            DB::raw("strftime('%m', order_date) as month"),
            DB::raw('count(*) as order_count'),
            DB::raw('SUM(total_amount) as total_value'),
            DB::raw('AVG(total_amount) as average_value')
        )
            ->where('order_date', '>=', now()->subMonths(6))
            ->groupBy(DB::raw("strftime('%Y', order_date)"), DB::raw("strftime('%m', order_date)"))
            ->orderBy('year', 'desc')
            ->orderBy('month', 'desc')
            ->get();

        if ($monthly->isNotEmpty()) {
            $this->command->table(
                ['Year-Month', 'Orders', 'Total Value', 'Avg Value'],
                $monthly->map(function ($item) {
                    return [
                        $item->year . '-' . str_pad($item->month, 2, '0', STR_PAD_LEFT),
                        $item->order_count,
                        '$' . number_format($item->total_value ?? 0, 2),
                        '$' . number_format($item->average_value ?? 0, 2),
                    ];
                })->toArray()
            );
        } else {
            $this->command->info("No monthly data available.");
        }

        // Show overdue alert - SQLite compatible
        if ($stats['overdue_count'] > 0) {
            $this->command->warn("\n⚠️  There are {$stats['overdue_count']} overdue purchase orders!");

            // Get overdue POs with supplier info - using collection filtering for SQLite compatibility
            $allPOs = PurchaseOrder::with('supplier')
                ->get()
                ->filter(function ($po) {
                    return $po->isOverdue();
                })
                ->sortByDesc('days_overdue')
                ->take(5);

            if ($allPOs->isNotEmpty()) {
                $this->command->table(
                    ['PO Number', 'Supplier', 'Expected Date', 'Days Overdue'],
                    $allPOs->map(function ($po) {
                        return [
                            $po->po_number,
                            $po->supplier->name ?? 'Unknown',
                            $po->expected_delivery_date ? $po->expected_delivery_date->format('Y-m-d') : 'N/A',
                            $po->days_overdue ?? 0,
                        ];
                    })->toArray()
                );
            }
        }
    }
}
