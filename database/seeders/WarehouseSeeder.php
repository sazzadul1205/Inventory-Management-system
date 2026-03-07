<?php
// database/seeders/WarehouseSeeder.php

namespace Database\Seeders;

use App\Models\Warehouse;
use App\Models\User;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class WarehouseSeeder extends Seeder
{
    protected Faker $faker;

    use ChecksDependencies;

    /**
     * Number of warehouses to create
     */
    protected const WAREHOUSE_COUNT = 2;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->faker = fake();

        if (!$this->checkDependencies([
            User::class => 'No users found for warehouse managers',
        ])) {
            return;
        }

       // DB::statement('SET FOREIGN_KEY_CHECKS=0');
        Warehouse::truncate();
         // DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating warehouses...');
        $this->command->getOutput()->progressStart(self::WAREHOUSE_COUNT);

        $this->createMainWarehouses();
        $this->createDistributionCenters();
        $this->createStorageFacilities();
        $this->createTransitHubs();
        $this->createInternationalWarehouses();

        $this->command->getOutput()->progressFinish();
        $this->displayStatistics();
    }

    /**
     * Check if users exist for managers.
     */
    protected function checkPrerequisites(): void
    {
        if (User::count() == 0) {
            $this->command->warn('No users found. Running UserSeeder first...');
            $this->call(UserSeeder::class);
        }
    }

    /**
     * Create main warehouses.
     */
    protected function createMainWarehouses(): void
    {
        $this->command->info("\nCreating main warehouses...");

        $mainWarehouses = [
            [
                'name' => 'Corporate Main Warehouse',
                'city' => 'Chicago',
                'state' => 'IL',
                'country' => 'USA',
                'manager' => 'admin',
            ],
            [
                'name' => 'East Coast Main DC',
                'city' => 'New York',
                'state' => 'NY',
                'country' => 'USA',
                'manager' => 'inventory.manager',
            ],
            [
                'name' => 'West Coast Main Facility',
                'city' => 'Los Angeles',
                'state' => 'CA',
                'country' => 'USA',
                'manager' => 'warehouse.supervisor',
            ],
        ];

        foreach ($mainWarehouses as $wh) {
            $manager = User::where('email', 'like', "%{$wh['manager']}%")->first();

            Warehouse::factory()
                ->main()
                ->named($wh['name'])
                ->inRegion($this->getRegionFromCity($wh['city']))
                ->withManager($manager?->id)
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create distribution centers.
     */
    protected function createDistributionCenters(): void
    {
        $this->command->info("\nCreating distribution centers...");

        $distributionCenters = [
            ['name' => 'Northeast Distribution Center', 'region' => 'Northeast'],
            ['name' => 'Southeast Regional DC', 'region' => 'Southeast'],
            ['name' => 'Midwest Distribution Hub', 'region' => 'Midwest'],
            ['name' => 'Southwest Regional DC', 'region' => 'Southwest'],
            ['name' => 'Pacific Northwest DC', 'region' => 'West Coast'],
        ];

        foreach ($distributionCenters as $dc) {
            $manager = User::inRandomOrder()->first();

            Warehouse::factory()
                ->distribution()
                ->named($dc['name'])
                ->inRegion($dc['region'])
                ->withManager($this->faker->optional(0.7)->randomElement([$manager?->id]))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create storage facilities.
     */
    protected function createStorageFacilities(): void
    {
        $this->command->info("\nCreating storage facilities...");

        $storageFacilities = [
            ['name' => 'Overflow Storage Facility', 'region' => 'Midwest'],
            ['name' => 'Raw Materials Warehouse', 'region' => 'Southeast'],
            ['name' => 'Finished Goods Storage', 'region' => 'Southwest'],
            ['name' => 'Seasonal Storage Center', 'region' => 'Northeast'],
            ['name' => 'Bulk Storage Warehouse', 'region' => 'West Coast'],
        ];

        foreach ($storageFacilities as $sf) {
            Warehouse::factory()
                ->storage()
                ->named($sf['name'])
                ->inRegion($sf['region'])
                ->withoutManager()
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create transit hubs.
     */
    protected function createTransitHubs(): void
    {
        $this->command->info("\nCreating transit hubs...");

        $transitHubs = [
            ['name' => 'Cross-Dock Hub - Chicago', 'region' => 'Midwest'],
            ['name' => 'Transit Center - Atlanta', 'region' => 'Southeast'],
            ['name' => 'Logistics Hub - Dallas', 'region' => 'Southwest'],
            ['name' => 'Sortation Center - LA', 'region' => 'West Coast'],
            ['name' => 'Transfer Station - Newark', 'region' => 'Northeast'],
        ];

        foreach ($transitHubs as $hub) {
            Warehouse::factory()
                ->transit()
                ->named($hub['name'])
                ->inRegion($hub['region'])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create international warehouses.
     */
    protected function createInternationalWarehouses(): void
    {
        $this->command->info("\nCreating international warehouses...");

        $international = [
            ['name' => 'Toronto Distribution Center', 'country' => 'Canada'],
            ['name' => 'Mexico City Warehouse', 'country' => 'Mexico'],
            ['name' => 'London Logistics Hub', 'country' => 'UK'],
            ['name' => 'Vancouver Transit Center', 'country' => 'Canada'],
            ['name' => 'Guadalajara Storage', 'country' => 'Mexico'],
        ];

        foreach ($international as $wh) {
            Warehouse::factory()
                ->distribution()
                ->named($wh['name'])
                ->inCountry($wh['country'])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Get region from city.
     */
    protected function getRegionFromCity(string $city): string
    {
        return match ($city) {
            'New York', 'Boston', 'Philadelphia' => 'Northeast',
            'Atlanta', 'Miami', 'Charlotte' => 'Southeast',
            'Chicago', 'Detroit', 'Cleveland' => 'Midwest',
            'Dallas', 'Houston', 'Phoenix' => 'Southwest',
            'Los Angeles', 'San Francisco', 'Seattle' => 'West Coast',
            default => 'Northeast',
        };
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nWarehouse Statistics:");

        $stats = Warehouse::getStatistics();

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Warehouses', $stats['total_warehouses']],
                ['Active Warehouses', $stats['active_warehouses']],
                ['Inactive Warehouses', $stats['inactive_warehouses']],
                ['Total Capacity', number_format($stats['total_capacity'])],
                ['Total Utilization', number_format($stats['total_utilization'])],
                ['Average Utilization', $stats['average_utilization'] . '%'],
                ['Activity Rate', $stats['activity_rate'] . '%'],
            ]
        );

        // Show breakdown by type
        $this->command->info("\nWarehouses by Type:");
        $byType = Warehouse::select('type', DB::raw('count(*) as count'))
            ->groupBy('type')
            ->get()
            ->mapWithKeys(function ($item) {
                return [$item->type => $item->count];
            });

        $typeData = [];
        foreach (Warehouse::$types as $type => $label) {
            $typeData[] = [$label, $byType[$type] ?? 0];
        }

        $this->command->table(['Type', 'Count'], $typeData);

        // Show capacity breakdown
        $this->command->info("\nWarehouse Capacity Summary:");

        $warehouses = Warehouse::withCount('locations')
            ->get()
            ->sortByDesc(fn($warehouse) => $warehouse->total_capacity)
            ->map(function ($warehouse) {
                return [
                    $warehouse->display_name,
                    $warehouse->type_label,
                    number_format($warehouse->total_capacity),
                    number_format($warehouse->total_utilization),
                    $warehouse->utilization_percentage . '%',
                    $warehouse->status_label,
                ];
            })->toArray();

        $this->command->table(
            ['Warehouse', 'Type', 'Capacity', 'Utilized', 'Utilization', 'Status'],
            $warehouses
        );

        // Show low capacity warehouses
        $lowCapacity = Warehouse::getLowCapacityWarehouses(85);
        if ($lowCapacity->isNotEmpty()) {
            $this->command->warn("\n⚠️  Warehouses at >85% capacity:");
            foreach ($lowCapacity as $warehouse) {
                $this->command->line("  - {$warehouse->name}: {$warehouse->utilization_percentage}% full");
            }
        }

        // Show capacity breakdown by location type for a sample warehouse
        $sampleWarehouse = Warehouse::first();
        if ($sampleWarehouse) {
            $this->command->info("\nCapacity Breakdown for {$sampleWarehouse->name}:");
            $breakdown = $sampleWarehouse->getCapacityBreakdown();

            $this->command->table(
                ['Location Type', 'Count', 'Capacity', 'Utilized'],
                $breakdown->map(function ($item) {
                    return [
                        $item->location_type,
                        $item->count,
                        number_format($item->total_capacity),
                        number_format($item->total_utilization),
                    ];
                })->toArray()
            );
        }
    }
}
