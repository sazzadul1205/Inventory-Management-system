<?php
// database/factories/LocationFactory.php

namespace Database\Factories;

use App\Models\Inventory;
use App\Models\Location;
use App\Models\Product;
use App\Models\Warehouse;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Location>
 */
class LocationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Location::class;

    /**
     * Zone identifiers
     */
    protected array $zones = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'NORTH',
        'SOUTH',
        'EAST',
        'WEST',
        'RAW',
        'FINISHED',
        'BULK',
        'PICKING',
        'COLD',
        'HAZMAT',
        'QUARANTINE',
        'RETURNS',
        'HIGH-VALUE',
        'OVERSIZE',
        'MEZZANINE'
    ];

    /**
     * Aisle identifiers
     */
    protected array $aisles = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        'A1',
        'A2',
        'A3',
        'B1',
        'B2',
        'B3',
        'C1',
        'C2',
        'C3',
        'MAIN',
        'SIDE',
        'CROSS'
    ];

    /**
     * Rack identifiers
     */
    protected array $racks = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        'R1',
        'R2',
        'R3',
        'R4',
        'R5',
        'R6',
        'R7',
        'R8',
        'R9',
        'R10'
    ];

    /**
     * Shelf identifiers
     */
    protected array $shelves = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        'TOP',
        'MID',
        'BOT',
        'LOW',
        'HIGH'
    ];

    /**
     * Bin identifiers
     */
    protected array $bins = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'L',
        'R',
        'F',
        'B',
        '1L',
        '1R',
        '2L',
        '2R'
    ];

    /**
     * Location types and their capacity ranges
     */
    protected array $locationTypes = [
        'pallet' => ['min' => 1, 'max' => 10, 'unit' => 'pallets'],
        'bin' => ['min' => 10, 'max' => 100, 'unit' => 'units'],
        'shelf' => ['min' => 50, 'max' => 500, 'unit' => 'units'],
        'bulk' => ['min' => 500, 'max' => 5000, 'unit' => 'units'],
        'drawer' => ['min' => 5, 'max' => 50, 'unit' => 'units'],
        'locker' => ['min' => 1, 'max' => 20, 'unit' => 'items'],
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();

        $zone = $this->faker->randomElement($this->zones);
        $aisle = $this->faker->randomElement($this->aisles);
        $rack = $this->faker->randomElement($this->racks);
        $shelf = $this->faker->randomElement($this->shelves);
        $bin = $this->faker->randomElement($this->bins);

        $locationCode = $this->generateLocationCode(
            $warehouse->warehouse_code ?? 'WH',
            $zone,
            $aisle,
            $rack,
            $shelf,
            $bin
        );

        $locationType = $this->faker->randomElement(array_keys($this->locationTypes));
        $capacity = $this->locationTypes[$locationType];
        $maxCapacity = $this->faker->numberBetween($capacity['min'], $capacity['max']);
        $currentUtilization = $this->faker->optional(0.7)->numberBetween(0, $maxCapacity) ?? 0;

        return [
            'warehouse_id' => $warehouse->id,
            'location_code' => $locationCode,
            'zone' => $zone,
            'aisle' => $aisle,
            'rack' => $rack,
            'shelf' => $shelf,
            'bin' => $bin,
            'barcode' => $this->faker->optional(0.8)->ean13(),
            'max_capacity' => $maxCapacity,
            'current_utilization' => $currentUtilization,
            'is_active' => $this->faker->boolean(95), // 95% active
            'created_at' => $this->faker->dateTimeBetween('-2 years', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Generate a location code from components.
     */
    protected function generateLocationCode(
        ?string $warehouseCode,
        ?string $zone,
        ?string $aisle,
        ?string $rack,
        ?string $shelf,
        ?string $bin
    ): string {
        $parts = array_filter([
            $warehouseCode,
            $zone,
            $aisle,
            $rack,
            $shelf,
            $bin
        ]);

        return implode('-', $parts);
    }

    /**
     * Indicate that the location is active.
     */
    public function active(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_active' => true,
            ];
        });
    }

    /**
     * Indicate that the location is inactive.
     */
    public function inactive(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_active' => false,
                'current_utilization' => 0, // Should be empty when inactive
            ];
        });
    }

    /**
     * Indicate that the location is empty.
     */
    public function empty(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'current_utilization' => 0,
            ];
        });
    }

    /**
     * Indicate that the location is full.
     */
    public function full(): static
    {
        return $this->state(function (array $attributes) {
            $maxCapacity = $attributes['max_capacity'] ?? $this->faker->numberBetween(10, 100);
            return [
                'max_capacity' => $maxCapacity,
                'current_utilization' => $maxCapacity,
            ];
        });
    }

    /**
     * Indicate that the location is partially filled.
     */
    public function partiallyFilled(int $percentage = 50): static
    {
        return $this->state(function (array $attributes) use ($percentage) {
            $maxCapacity = $attributes['max_capacity'] ?? $this->faker->numberBetween(10, 100);
            $utilization = (int) ($maxCapacity * ($percentage / 100));

            return [
                'max_capacity' => $maxCapacity,
                'current_utilization' => $utilization,
            ];
        });
    }

    /**
     * Set location type to pallet racking.
     */
    public function palletRacking(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'max_capacity' => $this->faker->numberBetween(1, 10),
                'zone' => $this->faker->randomElement(['PALLET', 'BULK', 'RACK']),
            ];
        });
    }

    /**
     * Set location type to bin shelving.
     */
    public function binShelving(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'max_capacity' => $this->faker->numberBetween(20, 100),
                'zone' => $this->faker->randomElement(['PICKING', 'BIN', 'SHELF']),
            ];
        });
    }

    /**
     * Set location type to bulk storage.
     */
    public function bulkStorage(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'max_capacity' => $this->faker->numberBetween(500, 5000),
                'zone' => 'BULK',
                'aisle' => null,
                'rack' => null,
                'shelf' => null,
                'bin' => null,
            ];
        });
    }

    /**
     * Set location type to cold storage.
     */
    public function coldStorage(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'zone' => 'COLD',
                'max_capacity' => $this->faker->numberBetween(50, 500),
            ];
        });
    }

    /**
     * Set location type to hazardous materials.
     */
    public function hazardous(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'zone' => 'HAZMAT',
                'max_capacity' => $this->faker->numberBetween(10, 100),
            ];
        });
    }

    /**
     * Set location type to high value / secure.
     */
    public function highValue(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'zone' => 'HIGH-VALUE',
                'max_capacity' => $this->faker->numberBetween(1, 20),
            ];
        });
    }

    /**
     * Set location type to quarantine.
     */
    public function quarantine(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'zone' => 'QUARANTINE',
                'is_active' => true,
            ];
        });
    }

    /**
     * Set location type to returns.
     */
    public function returns(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'zone' => 'RETURNS',
                'is_active' => true,
            ];
        });
    }

    /**
     * Create a location in a specific zone.
     */
    public function inZone(string $zone): static
    {
        return $this->state(function (array $attributes) use ($zone) {
            return [
                'zone' => $zone,
            ];
        });
    }

    /**
     * Create a location in a specific warehouse.
     */
    public function inWarehouse(int $warehouseId): static
    {
        return $this->state(function (array $attributes) use ($warehouseId) {
            return [
                'warehouse_id' => $warehouseId,
            ];
        });
    }

    /**
     * Create a location with a specific location code.
     */
    public function withCode(string $code): static
    {
        return $this->state(function (array $attributes) use ($code) {
            return [
                'location_code' => $code,
            ];
        });
    }

    /**
     * Create a location with a specific barcode.
     */
    public function withBarcode(string $barcode): static
    {
        return $this->state(function (array $attributes) use ($barcode) {
            return [
                'barcode' => $barcode,
            ];
        });
    }

    /**
     * Create a location with inventory items.
     */
    public function withInventory(int $count = 3): static
    {
        return $this->afterCreating(function (Location $location) use ($count) {
            if (class_exists('Inventory')) {
                $totalQuantity = 0;

                for ($i = 0; $i < $count; $i++) {
                    $product = Product::inRandomOrder()->first() ?? Product::factory()->create();
                    $quantity = $this->faker->numberBetween(1, 20);
                    $totalQuantity += $quantity;

                    // Don't exceed capacity
                    if ($location->max_capacity && $totalQuantity > $location->max_capacity) {
                        break;
                    }

                    Inventory::factory()
                        ->forProduct($product->id)
                        ->state([
                            'warehouse_id' => $location->warehouse_id,
                            'location_id' => $location->id,
                            'quantity_on_hand' => $quantity,
                        ])
                        ->create();
                }

                // Update utilization
                $location->current_utilization = $totalQuantity;
                $location->save();
            }
        });
    }

    /**
     * Create a location with a specific capacity and utilization.
     */
    public function withCapacity(int $maxCapacity, int $currentUtilization = 0): static
    {
        return $this->state(function (array $attributes) use ($maxCapacity, $currentUtilization) {
            return [
                'max_capacity' => $maxCapacity,
                'current_utilization' => min($currentUtilization, $maxCapacity),
            ];
        });
    }
}
