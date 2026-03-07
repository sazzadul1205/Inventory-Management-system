<?php
// database/seeders/LocationSeeder.php

namespace Database\Seeders;

use App\Models\Location;
use App\Models\Warehouse;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class LocationSeeder extends Seeder
{
    use ChecksDependencies;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       
        if (!$this->checkDependencies([
            Warehouse::class => 'No warehouses found',
        ])) {
            return;
        }

       // DB::statement('SET FOREIGN_KEY_CHECKS=0');
        Location::truncate();
         // DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating warehouse locations...');
        $this->command->getOutput()->progressStart(100);

        $warehouses = Warehouse::all();

        foreach ($warehouses as $warehouse) {
            $this->command->info("\nCreating locations for {$warehouse->name}...");

            $locationCount = 100;
            $this->createWarehouseLocations($warehouse, $locationCount);
        }

        $this->createSpecializedZones();
        $this->command->getOutput()->progressFinish();
    $this->displayStatistics();
    }

    /**
     * Check if warehouses exist.
     */
    protected function checkPrerequisites(): void
    {
        if (Warehouse::count() == 0) {
            $this->command->warn('No warehouses found. Running WarehouseSeeder first...');
            $this->call(WarehouseSeeder::class);
        }
    }

    /**
     * Create locations for a specific warehouse.
     */
    protected function createWarehouseLocations(Warehouse $warehouse, int $count): void
    {
        // Ensure we always work with a persisted warehouse row.
        $warehouse = Warehouse::query()->find($warehouse->id) ?? $warehouse;

        // Define zone structure based on warehouse type
        $zoneStructure = $this->getZoneStructure($warehouse);

        foreach ($zoneStructure as $zone => $config) {
            $zoneCount = (int) ($count * ($config['percentage'] / 100));

            $this->command->info("  - Creating {$zoneCount} locations in Zone {$zone}");

            for ($i = 0; $i < $zoneCount; $i++) {
                $this->createLocationInZone($warehouse, $zone, $config);

                if ($i % 50 === 0) {
                    $this->command->getOutput()->progressAdvance(5);
                }
            }
        }
    }

    /**
     * Get zone structure for a warehouse.
     */
    protected function getZoneStructure(Warehouse $warehouse): array
    {
        return [
            'A' => [
                'percentage' => 20,
                'type' => 'pallet',
                'capacity_range' => [1, 10],
                'utilization_range' => [0, 100],
            ],
            'B' => [
                'percentage' => 15,
                'type' => 'pallet',
                'capacity_range' => [1, 8],
                'utilization_range' => [0, 100],
            ],
            'C' => [
                'percentage' => 25,
                'type' => 'bin',
                'capacity_range' => [20, 100],
                'utilization_range' => [0, 100],
            ],
            'D' => [
                'percentage' => 10,
                'type' => 'bin',
                'capacity_range' => [10, 50],
                'utilization_range' => [0, 100],
            ],
            'E' => [
                'percentage' => 5,
                'type' => 'bulk',
                'capacity_range' => [500, 2000],
                'utilization_range' => [0, 100],
            ],
            'F' => [
                'percentage' => 5,
                'type' => 'bulk',
                'capacity_range' => [1000, 5000],
                'utilization_range' => [0, 100],
            ],
            'COLD' => [
                'percentage' => 5,
                'type' => 'cold',
                'capacity_range' => [50, 300],
                'utilization_range' => [0, 100],
            ],
            'HAZMAT' => [
                'percentage' => 3,
                'type' => 'hazardous',
                'capacity_range' => [10, 50],
                'utilization_range' => [0, 100],
            ],
            'HIGH-VALUE' => [
                'percentage' => 2,
                'type' => 'highValue',
                'capacity_range' => [1, 20],
                'utilization_range' => [0, 100],
            ],
            'QUARANTINE' => [
                'percentage' => 5,
                'type' => 'quarantine',
                'capacity_range' => [10, 100],
                'utilization_range' => [0, 50], // Usually not full
            ],
            'RETURNS' => [
                'percentage' => 5,
                'type' => 'returns',
                'capacity_range' => [10, 100],
                'utilization_range' => [0, 70],
            ],
        ];
    }

    /**
     * Create a location in a specific zone.
     */
    protected function createLocationInZone(Warehouse $warehouse, string $zone, array $config): void
    {
        // Guard against stale references during long-running seed operations.
        if (!$warehouse->exists || !Warehouse::query()->whereKey($warehouse->id)->exists()) {
            return;
        }

        // Generate hierarchy components
        $aisle = $this->generateAisle($zone);
        $rack = $this->generateRack($zone);
        $shelf = $this->generateShelf();
        $bin = $this->generateBin();

        // Calculate capacity and utilization
        $maxCapacity = fake()->numberBetween(
            $config['capacity_range'][0],
            $config['capacity_range'][1]
        );

        // Utilization percentage based on config
        $utilizationPercent = fake()->numberBetween(
            $config['utilization_range'][0],
            $config['utilization_range'][1]
        );
        $currentUtilization = (int) ($maxCapacity * ($utilizationPercent / 100));

        // Generate location code
        $baseLocationCode = Location::generateLocationCode(
            $warehouse->warehouse_code ?? 'WH',
            $zone,
            $aisle,
            $rack,
            $shelf,
            $bin
        );

        $locationCode = $baseLocationCode;
        $suffix = 1;
        while (Location::where('location_code', $locationCode)->exists()) {
            $locationCode = $baseLocationCode . '-' . $suffix;
            $suffix++;
        }

        Location::create([
            'warehouse_id' => $warehouse->id,
            'location_code' => $locationCode,
            'zone' => $zone,
            'aisle' => $aisle,
            'rack' => $rack,
            'shelf' => $shelf,
            'bin' => $bin,
            'barcode' => fake()->optional(0.9)->ean13(),
            'max_capacity' => $maxCapacity,
            'current_utilization' => $currentUtilization,
            'is_active' => fake()->boolean(95),
        ]);
    }

    /**
     * Generate aisle based on zone.
     */
    protected function generateAisle(string $zone): string
    {
        $aisles = [
            'A' => ['01', '02', '03', '04', '05'],
            'B' => ['06', '07', '08', '09', '10'],
            'C' => ['11', '12', '13', '14', '15'],
            'D' => ['16', '17', '18', '19', '20'],
            'E' => ['BULK-1', 'BULK-2', 'BULK-3'],
            'F' => ['BULK-4', 'BULK-5', 'BULK-6'],
            'COLD' => ['C1', 'C2', 'C3'],
            'HAZMAT' => ['H1', 'H2', 'H3'],
            'HIGH-VALUE' => ['V1', 'V2'],
            'QUARANTINE' => ['Q1', 'Q2'],
            'RETURNS' => ['R1', 'R2', 'R3'],
        ];

        return fake()->randomElement($aisles[$zone] ?? ['01', '02', '03']);
    }

    /**
     * Generate rack based on zone.
     */
    protected function generateRack(string $zone): string
    {
        return fake()->randomElement(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']);
    }

    /**
     * Generate shelf.
     */
    protected function generateShelf(): string
    {
        return fake()->randomElement(['A', 'B', 'C', 'D', 'TOP', 'MID', 'BOT']);
    }

    /**
     * Generate bin.
     */
    protected function generateBin(): string
    {
        return fake()->randomElement(['01', '02', '03', '04', '05', '1', '2', '3', '4', '5']);
    }

    /**
     * Create specialized zones across all warehouses.
     */
    protected function createSpecializedZones(): void
    {
        $this->command->info("\nCreating specialized zones...");

        $warehouses = Warehouse::all();

        // Cross-docking area (temporary storage)
        foreach ($warehouses as $warehouse) {
            for ($i = 1; $i <= 20; $i++) {
                $code = ($warehouse->warehouse_code ?? 'WH') . "-X_DOCK-{$i}";
                Location::factory()
                    ->inWarehouse($warehouse->id)
                    ->inZone('X_DOCK')
                    ->withCode($code)
                    ->state([
                        'aisle' => 'XD',
                        'rack' => null,
                        'shelf' => null,
                        'bin' => null,
                        'max_capacity' => 50,
                        'current_utilization' => fake()->numberBetween(0, 30),
                    ])
                    ->create();
            }
        }

        // Staging areas
        foreach ($warehouses as $warehouse) {
            for ($i = 1; $i <= 10; $i++) {
                $code = ($warehouse->warehouse_code ?? 'WH') . "-STAGE-{$i}";
                Location::factory()
                    ->inWarehouse($warehouse->id)
                    ->inZone('STAGE')
                    ->withCode($code)
                    ->state([
                        'aisle' => 'S',
                        'rack' => null,
                        'shelf' => null,
                        'bin' => null,
                        'max_capacity' => 100,
                        'current_utilization' => fake()->numberBetween(0, 50),
                    ])
                    ->create();
            }
        }

        // Receiving docks
        foreach ($warehouses as $warehouse) {
            for ($i = 1; $i <= 5; $i++) {
                $code = ($warehouse->warehouse_code ?? 'WH') . "-RECV-DOCK-{$i}";
                Location::factory()
                    ->inWarehouse($warehouse->id)
                    ->inZone('RECEIVE')
                    ->withCode($code)
                    ->state([
                        'aisle' => 'R',
                        'rack' => null,
                        'shelf' => null,
                        'bin' => null,
                        'max_capacity' => 200,
                        'current_utilization' => fake()->numberBetween(0, 100),
                    ])
                    ->create();
            }
        }

        // Shipping docks
        foreach ($warehouses as $warehouse) {
            for ($i = 1; $i <= 5; $i++) {
                $code = ($warehouse->warehouse_code ?? 'WH') . "-SHIP-DOCK-{$i}";
                Location::factory()
                    ->inWarehouse($warehouse->id)
                    ->inZone('SHIP')
                    ->withCode($code)
                    ->state([
                        'aisle' => 'S',
                        'rack' => null,
                        'shelf' => null,
                        'bin' => null,
                        'max_capacity' => 200,
                        'current_utilization' => fake()->numberBetween(0, 100),
                    ])
                    ->create();
            }
        }

        $this->command->getOutput()->progressAdvance(10);
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nLocation Statistics:");

        $totalLocations = Location::count();
        $activeLocations = Location::active()->count();
        $emptyLocations = Location::empty()->count();
        $fullLocations = Location::full()->count();

        $this->command->table(
            ['Metric', 'Count'],
            [
                ['Total Locations', $totalLocations],
                ['Active Locations', $activeLocations],
                ['Inactive Locations', $totalLocations - $activeLocations],
                ['Empty Locations', $emptyLocations],
                ['Full Locations', $fullLocations],
                ['Partially Filled', $totalLocations - $emptyLocations - $fullLocations],
            ]
        );

        // Show utilization by warehouse
        $warehouses = Warehouse::all();
        foreach ($warehouses as $warehouse) {
            $summary = Location::getWarehouseCapacitySummary($warehouse->id);

            $this->command->info("\n{$warehouse->name} Capacity Summary:");
            $this->command->table(
                ['Metric', 'Value'],
                [
                    ['Total Locations', $summary['total_locations']],
                    ['Active Locations', $summary['active_locations']],
                    ['Total Capacity', number_format($summary['total_capacity'])],
                    ['Current Utilization', number_format($summary['total_utilization'])],
                    ['Utilization %', $summary['utilization_percentage'] . '%'],
                    ['Empty Locations', $summary['empty_locations']],
                    ['Full Locations', $summary['full_locations']],
                ]
            );
        }

        // Show zones needing attention
        $this->command->info("\nLocations Needing Attention (High/ Low Utilization):");
        foreach ($warehouses as $warehouse) {
            $needingAttention = Location::getLocationsNeedingAttention($warehouse->id, 90, 10);

            if ($needingAttention->isNotEmpty()) {
                $this->command->warn("{$warehouse->name}: {$needingAttention->count()} locations need attention");
            }
        }
    }
}
