<?php
// database/seeders/SupplierSeeder.php

namespace Database\Seeders;

use App\Models\PurchaseOrder;
use App\Models\Supplier;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class SupplierSeeder extends Seeder
{
    protected Faker $faker;

    use ChecksDependencies;

    /**
     * Number of suppliers to create
     */
    protected const SUPPLIER_COUNT = 5; // Was 100

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->faker = fake();

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        Supplier::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating suppliers...');
        $this->command->getOutput()->progressStart(self::SUPPLIER_COUNT);

        $this->createDomesticSuppliers();
        $this->createInternationalSuppliers();
        $this->createPreferredSuppliers();
        $this->createSpecializedSuppliers();
        $this->createInactiveSuppliers();

        $this->command->getOutput()->progressFinish();
        $this->displayStatistics();
    }

    /**
     * Create domestic suppliers (USA-based).
     */
    protected function createDomesticSuppliers(): void
    {
        $this->command->info("\nCreating domestic suppliers...");

        $domesticCount = (int) (self::SUPPLIER_COUNT * 0.5); // 50% domestic

        for ($i = 0; $i < $domesticCount; $i++) {
            $supplier = Supplier::factory()
                ->domestic()
                ->withProducts(rand(3, 8))
                ->create();

            // 70% of domestic suppliers have some purchase history
            if ($this->faker->boolean(70)) {
                $this->addPurchaseHistory($supplier, rand(2, 10));
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create international suppliers.
     */
    protected function createInternationalSuppliers(): void
    {
        $this->command->info("\nCreating international suppliers...");

        $internationalCount = (int) (self::SUPPLIER_COUNT * 0.3); // 30% international

        for ($i = 0; $i < $internationalCount; $i++) {
            $supplier = Supplier::factory()
                ->international()
                ->slowDelivery() // International usually slower
                ->withProducts(rand(2, 5))
                ->create();

            // 50% of international suppliers have purchase history
            if ($this->faker->boolean(50)) {
                $this->addPurchaseHistory($supplier, rand(1, 5));
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create preferred suppliers (high rating).
     */
    protected function createPreferredSuppliers(): void
    {
        $this->command->info("\nCreating preferred suppliers...");

        $preferredCount = (int) (self::SUPPLIER_COUNT * 0.15); // 15% preferred

        for ($i = 0; $i < $preferredCount; $i++) {
            Supplier::factory()
                ->domestic()
                ->preferred()
                ->fastDelivery()
                ->withPreferredProducts(rand(3, 6))
                ->withProducts(rand(5, 10))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create specialized suppliers by industry.
     */
    protected function createSpecializedSuppliers(): void
    {
        $this->command->info("\nCreating specialized suppliers...");

        // Electronics suppliers
        for ($i = 0; $i < 5; $i++) {
            Supplier::factory()
                ->domestic()
                ->withLeadTime($this->faker->numberBetween(3, 10))
                ->state([
                    'company_name' => $this->generateSpecializedName('Electronics'),
                    'notes' => 'Specializes in electronic components',
                ])
                ->withProducts(rand(10, 20))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }

        // Raw materials suppliers
        for ($i = 0; $i < 4; $i++) {
            Supplier::factory()
                ->international()
                ->withLeadTime($this->faker->numberBetween(14, 30))
                ->state([
                    'company_name' => $this->generateSpecializedName('Materials'),
                    'notes' => 'Bulk raw materials supplier',
                ])
                ->withProducts(rand(5, 10))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }

        // Packaging suppliers
        for ($i = 0; $i < 3; $i++) {
            Supplier::factory()
                ->domestic()
                ->fastDelivery()
                ->state([
                    'company_name' => $this->generateSpecializedName('Packaging'),
                    'notes' => 'Packaging materials specialist',
                ])
                ->withProducts(rand(8, 15))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }

        // Chemical suppliers
        for ($i = 0; $i < 3; $i++) {
            Supplier::factory()
                ->international()
                ->state([
                    'company_name' => $this->generateSpecializedName('Chemical'),
                    'notes' => 'Industrial chemicals and solvents',
                ])
                ->withProducts(rand(4, 8))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }

        // Office supplies
        for ($i = 0; $i < 3; $i++) {
            Supplier::factory()
                ->domestic()
                ->standardDelivery()
                ->state([
                    'company_name' => $this->generateSpecializedName('Office'),
                    'notes' => 'Office supplies and stationery',
                ])
                ->withProducts(rand(15, 30))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Generate specialized company name.
     */
    protected function generateSpecializedName(string $industry): string
    {
        $names = [
            "Global {$industry} Supply",
            "Premier {$industry} Co",
            "{$industry} Solutions Inc",
            "Advanced {$industry} LLC",
            "Quality {$industry} Distributors",
            "{$industry} Pros International",
            "First Rate {$industry}",
            "{$industry} Source Direct",
        ];

        return $this->faker->randomElement($names);
    }

    /**
     * Create inactive suppliers (historical).
     */
    protected function createInactiveSuppliers(): void
    {
        $this->command->info("\nCreating inactive suppliers...");

        $inactiveCount = (int) (self::SUPPLIER_COUNT * 0.05); // 5% inactive

        for ($i = 0; $i < $inactiveCount; $i++) {
            Supplier::factory()
                ->inactive()
                ->lowRating()
                ->withProducts(rand(1, 3))
                ->state([
                    'notes' => 'Inactive - ' . $this->faker->randomElement([
                        'no longer in business',
                        'contract ended',
                        'quality issues',
                        'replaced by preferred supplier',
                        'minimum order requirements changed',
                    ]),
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Add purchase history to supplier.
     */
    protected function addPurchaseHistory(Supplier $supplier, int $orderCount): void
    {
        if (!class_exists('PurchaseOrder')) {
            return;
        }

        for ($i = 0; $i < $orderCount; $i++) {
            $orderDate = $this->faker->dateTimeBetween('-1 year', 'now');
            $expectedDate = (clone $orderDate)->modify('+' . $supplier->lead_time_days . ' days');

            // Determine if order is received, pending, or cancelled
            $statusRand = $this->faker->numberBetween(1, 100);

            if ($statusRand <= 70) {
                // Received order
                $status = PurchaseOrder::STATUS_RECEIVED;
                $actualDate = $this->faker->boolean(80)
                    ? $expectedDate
                    : (clone $expectedDate)->modify('+' . $this->faker->numberBetween(1, 5) . ' days');
            } elseif ($statusRand <= 90) {
                // Pending or approved
                $status = $this->faker->randomElement([
                    PurchaseOrder::STATUS_PENDING,
                    PurchaseOrder::STATUS_APPROVED,
                ]);
                $actualDate = null;
            } else {
                // Cancelled
                $status = PurchaseOrder::STATUS_CANCELLED;
                $actualDate = null;
            }

            PurchaseOrder::factory()
                ->forSupplier($supplier->id)
                ->state([
                    'order_date' => $orderDate,
                    'expected_delivery_date' => $expectedDate,
                    'actual_delivery_date' => $actualDate,
                    'status' => $status,
                ])
                ->create();
        }

        // Update supplier rating based on performance
        $supplier->updateRating();
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nSupplier Statistics:");

        $stats = Supplier::getStatistics();

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Suppliers', $stats['total_suppliers']],
                ['Active Suppliers', $stats['active_suppliers']],
                ['Inactive Suppliers', $stats['inactive_suppliers']],
                ['Average Rating', $stats['average_rating']],
                ['Activity Rate', $stats['activity_rate'] . '%'],
            ]
        );

        // Show top countries
        $this->command->info("\nTop Supplier Countries:");
        $countryData = [];
        foreach (array_slice($stats['top_countries'], 0, 5, true) as $country => $count) {
            $countryData[] = [$country, $count];
        }
        $this->command->table(['Country', 'Count'], $countryData);

        // Show top performers
        $this->command->info("\nTop Performing Suppliers:");
        $topPerformers = Supplier::getTopPerformers(5);

        $this->command->table(
            ['Supplier', 'Rating', 'Orders', 'Lead Time'],
            $topPerformers->map(fn($s) => [
                $s['name'],
                $s['rating'],
                $s['order_count'],
                $s['avg_lead_time'] . ' days',
            ])->toArray()
        );

        // Show supplier summary
        $this->command->info("\nSupplier Summary:");
        $suppliers = Supplier::withCount('purchaseOrders')
            ->withCount('products')
            ->orderBy('purchase_orders_count', 'desc')
            ->limit(5)
            ->get();

        $this->command->table(
            ['Supplier', 'Products', 'Orders', 'Rating', 'Lead Time'],
            $suppliers->map(function ($s) {
                return [
                    $s->company_name,
                    $s->products_count,
                    $s->purchase_orders_count,
                    $s->rating ?? 'N/A',
                    $s->lead_time_days . ' days',
                ];
            })->toArray()
        );
    }
}
