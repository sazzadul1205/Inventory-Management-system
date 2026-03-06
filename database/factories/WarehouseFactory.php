<?php
// database/factories/WarehouseFactory.php

namespace Database\Factories;

use App\Models\Inventory;
use App\Models\Location;
use App\Models\PurchaseOrder;
use App\Models\SalesOrder;
use App\Models\StockTransfer;
use App\Models\Warehouse;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Warehouse>
 */
class WarehouseFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Warehouse::class;

    /**
     * Warehouse names by type
     */
    protected array $warehouseNames = [
        'main' => [
            'Main Warehouse',
            'Central Distribution',
            'Primary DC',
            'Main Storage Facility',
            'Headquarters Warehouse',
            'Flagship Warehouse',
            'Corporate DC'
        ],
        'distribution' => [
            'East Coast DC',
            'West Coast DC',
            'Midwest DC',
            'Southern DC',
            'Northeast DC',
            'Regional Distribution Center',
            'Metro DC',
            'City Distribution Hub'
        ],
        'storage' => [
            'Overflow Storage',
            'Bulk Storage',
            'Raw Materials Warehouse',
            'Finished Goods Storage',
            'Seasonal Storage',
            'Long-term Storage',
            'Archive Warehouse'
        ],
        'transit' => [
            'Cross-Dock Facility',
            'Transit Hub',
            'Transfer Station',
            'Logistics Center',
            'Sortation Center',
            'Transshipment Point',
            'Intermodal Facility'
        ],
    ];

    /**
     * Cities by region for realistic locations
     */
    protected array $citiesByRegion = [
        'Northeast' => [
            ['city' => 'New York', 'state' => 'NY', 'country' => 'USA'],
            ['city' => 'Boston', 'state' => 'MA', 'country' => 'USA'],
            ['city' => 'Philadelphia', 'state' => 'PA', 'country' => 'USA'],
            ['city' => 'Pittsburgh', 'state' => 'PA', 'country' => 'USA'],
            ['city' => 'Newark', 'state' => 'NJ', 'country' => 'USA'],
        ],
        'Southeast' => [
            ['city' => 'Atlanta', 'state' => 'GA', 'country' => 'USA'],
            ['city' => 'Miami', 'state' => 'FL', 'country' => 'USA'],
            ['city' => 'Charlotte', 'state' => 'NC', 'country' => 'USA'],
            ['city' => 'Orlando', 'state' => 'FL', 'country' => 'USA'],
            ['city' => 'Nashville', 'state' => 'TN', 'country' => 'USA'],
        ],
        'Midwest' => [
            ['city' => 'Chicago', 'state' => 'IL', 'country' => 'USA'],
            ['city' => 'Detroit', 'state' => 'MI', 'country' => 'USA'],
            ['city' => 'Cleveland', 'state' => 'OH', 'country' => 'USA'],
            ['city' => 'Indianapolis', 'state' => 'IN', 'country' => 'USA'],
            ['city' => 'St. Louis', 'state' => 'MO', 'country' => 'USA'],
        ],
        'Southwest' => [
            ['city' => 'Dallas', 'state' => 'TX', 'country' => 'USA'],
            ['city' => 'Houston', 'state' => 'TX', 'country' => 'USA'],
            ['city' => 'Phoenix', 'state' => 'AZ', 'country' => 'USA'],
            ['city' => 'Denver', 'state' => 'CO', 'country' => 'USA'],
            ['city' => 'Salt Lake City', 'state' => 'UT', 'country' => 'USA'],
        ],
        'West Coast' => [
            ['city' => 'Los Angeles', 'state' => 'CA', 'country' => 'USA'],
            ['city' => 'San Francisco', 'state' => 'CA', 'country' => 'USA'],
            ['city' => 'Seattle', 'state' => 'WA', 'country' => 'USA'],
            ['city' => 'Portland', 'state' => 'OR', 'country' => 'USA'],
            ['city' => 'San Diego', 'state' => 'CA', 'country' => 'USA'],
        ],
        'International' => [
            ['city' => 'Toronto', 'state' => 'ON', 'country' => 'Canada'],
            ['city' => 'Vancouver', 'state' => 'BC', 'country' => 'Canada'],
            ['city' => 'Mexico City', 'state' => 'CDMX', 'country' => 'Mexico'],
            ['city' => 'Guadalajara', 'state' => 'JAL', 'country' => 'Mexico'],
            ['city' => 'London', 'state' => 'ENG', 'country' => 'UK'],
            ['city' => 'Manchester', 'state' => 'ENG', 'country' => 'UK'],
        ],
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $type = $this->faker->randomElement(array_keys($this->warehouseNames));
        $name = $this->faker->randomElement($this->warehouseNames[$type]);

        $region = $this->faker->randomElement(array_keys($this->citiesByRegion));
        $location = $this->faker->randomElement($this->citiesByRegion[$region]);

        $user = User::inRandomOrder()->first() ?? User::factory()->create();

        return [
            'warehouse_code' => $this->generateWarehouseCode($name),
            'name' => $name,
            'type' => $type,
            'address' => $this->faker->streetAddress(),
            'city' => $location['city'],
            'state' => $location['state'],
            'country' => $location['country'],
            'postal_code' => $this->faker->postcode(),
            'phone' => $this->faker->phoneNumber(),
            'email' => 'warehouse@' . strtolower(str_replace(' ', '', $name)) . '.com',
            'manager_id' => $this->faker->optional(0.7)->randomElement([$user->id]),
            'is_active' => $this->faker->boolean(95), // 95% active
            'created_at' => $this->faker->dateTimeBetween('-5 years', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Generate a unique warehouse code.
     */
    protected function generateWarehouseCode(string $name): string
    {
        $prefix = 'WH';
        $words = explode(' ', $name);
        $code = '';

        foreach ($words as $word) {
            $code .= strtoupper(substr(preg_replace('/[^a-zA-Z]/', '', $word), 0, 1));
        }

        $code = substr($code, 0, 3);
        if (strlen($code) < 3) {
            $code = str_pad($code, 3, 'X');
        }

        $number = $this->faker->unique()->numberBetween(1, 999);

        return "{$prefix}-{$code}-" . str_pad($number, 3, '0', STR_PAD_LEFT);
    }

    /**
     * Indicate that the warehouse is a main warehouse.
     */
    public function main(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'type' => Warehouse::TYPE_MAIN,
                'name' => $this->faker->randomElement($this->warehouseNames['main']),
            ];
        });
    }

    /**
     * Indicate that the warehouse is a distribution center.
     */
    public function distribution(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'type' => Warehouse::TYPE_DISTRIBUTION,
                'name' => $this->faker->randomElement($this->warehouseNames['distribution']),
            ];
        });
    }

    /**
     * Indicate that the warehouse is a storage facility.
     */
    public function storage(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'type' => Warehouse::TYPE_STORAGE,
                'name' => $this->faker->randomElement($this->warehouseNames['storage']),
            ];
        });
    }

    /**
     * Indicate that the warehouse is a transit hub.
     */
    public function transit(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'type' => Warehouse::TYPE_TRANSIT,
                'name' => $this->faker->randomElement($this->warehouseNames['transit']),
            ];
        });
    }

    /**
     * Indicate that the warehouse is active.
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
     * Indicate that the warehouse is inactive.
     */
    public function inactive(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_active' => false,
            ];
        });
    }

    /**
     * Set warehouse in a specific region.
     */
    public function inRegion(string $region): static
    {
        $location = $this->faker->randomElement($this->citiesByRegion[$region] ?? $this->citiesByRegion['Northeast']);

        return $this->state(function (array $attributes) use ($location) {
            return [
                'city' => $location['city'],
                'state' => $location['state'],
                'country' => $location['country'],
            ];
        });
    }

    /**
     * Set warehouse in a specific country.
     */
    public function inCountry(string $country): static
    {
        $locations = [];
        foreach ($this->citiesByRegion as $region => $cities) {
            foreach ($cities as $city) {
                if ($city['country'] === $country) {
                    $locations[] = $city;
                }
            }
        }

        $location = !empty($locations) ? $this->faker->randomElement($locations) :
            ['city' => 'New York', 'state' => 'NY', 'country' => 'USA'];

        return $this->state(function (array $attributes) use ($location) {
            return [
                'city' => $location['city'],
                'state' => $location['state'],
                'country' => $location['country'],
            ];
        });
    }

    /**
     * Set warehouse in the USA.
     */
    public function domestic(): static
    {
        return $this->inCountry('USA');
    }

    /**
     * Set warehouse internationally.
     */
    public function international(): static
    {
        $locations = [];
        foreach ($this->citiesByRegion as $region => $cities) {
            foreach ($cities as $city) {
                if ($city['country'] !== 'USA') {
                    $locations[] = $city;
                }
            }
        }

        $location = !empty($locations) ? $this->faker->randomElement($locations) :
            ['city' => 'Toronto', 'state' => 'ON', 'country' => 'Canada'];

        return $this->state(function (array $attributes) use ($location) {
            return [
                'city' => $location['city'],
                'state' => $location['state'],
                'country' => $location['country'],
            ];
        });
    }

    /**
     * Set a specific manager.
     */
    public function withManager(int $userId): static
    {
        return $this->state(function (array $attributes) use ($userId) {
            return [
                'manager_id' => $userId,
            ];
        });
    }

    /**
     * Set without a manager.
     */
    public function withoutManager(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'manager_id' => null,
            ];
        });
    }

    /**
     * Set a specific name.
     */
    public function named(string $name): static
    {
        return $this->state(function (array $attributes) use ($name) {
            return [
                'name' => $name,
                'warehouse_code' => $this->generateWarehouseCode($name),
            ];
        });
    }

    /**
     * Create warehouse with locations.
     */
    public function withLocations(int $count = 10): static
    {
        return $this->afterCreating(function (Warehouse $warehouse) use ($count) {
            if (class_exists('Location')) {
                // Create locations with appropriate capacity based on warehouse type
                $locationTypes = $this->getLocationTypesForWarehouse($warehouse->type);

                for ($i = 0; $i < $count; $i++) {
                    $type = $this->faker->randomElement($locationTypes);

                    Location::factory()
                        ->forWarehouse($warehouse->id)
                        ->{$type}()
                        ->create();
                }
            }
        });
    }

    /**
     * Get location types appropriate for warehouse type.
     */
    protected function getLocationTypesForWarehouse(string $warehouseType): array
    {
        return match ($warehouseType) {
            Warehouse::TYPE_MAIN => ['palletRacking', 'binShelving', 'bulkStorage', 'highValue'],
            Warehouse::TYPE_DISTRIBUTION => ['palletRacking', 'binShelving', 'bulkStorage'],
            Warehouse::TYPE_STORAGE => ['bulkStorage', 'palletRacking'],
            Warehouse::TYPE_TRANSIT => ['palletRacking', 'binShelving'],
            default => ['palletRacking', 'binShelving'],
        };
    }

    /**
     * Create warehouse with inventory.
     */
    public function withInventory(int $count = 20): static
    {
        return $this->afterCreating(function (Warehouse $warehouse) use ($count) {
            if (class_exists('Inventory')) {
                Inventory::factory()
                    ->count($count)
                    ->state(['warehouse_id' => $warehouse->id])
                    ->create();
            }
        });
    }

    /**
     * Create warehouse with purchase orders.
     */
    public function withPurchaseOrders(int $count = 5): static
    {
        return $this->afterCreating(function (Warehouse $warehouse) use ($count) {
            if (class_exists('PurchaseOrder')) {
                for ($i = 0; $i < $count; $i++) {
                    PurchaseOrder::factory()
                        ->forWarehouse($warehouse->id)
                        ->create();
                }
            }
        });
    }

    /**
     * Create warehouse with sales orders.
     */
    public function withSalesOrders(int $count = 5): static
    {
        return $this->afterCreating(function (Warehouse $warehouse) use ($count) {
            if (class_exists('SalesOrder')) {
                for ($i = 0; $i < $count; $i++) {
                    SalesOrder::factory()
                        ->fromWarehouse($warehouse->id)
                        ->create();
                }
            }
        });
    }

    /**
     * Create warehouse with stock transfers.
     */
    public function withStockTransfers(int $count = 3): static
    {
        return $this->afterCreating(function (Warehouse $warehouse) use ($count) {
            if (class_exists('StockTransfer')) {
                // Outgoing transfers
                for ($i = 0; $i < $count; $i++) {
                    StockTransfer::factory()
                        ->fromWarehouse($warehouse->id)
                        ->create();
                }

                // Incoming transfers
                for ($i = 0; $i < $count; $i++) {
                    StockTransfer::factory()
                        ->toWarehouse($warehouse->id)
                        ->create();
                }
            }
        });
    }

    /**
     * Create a fully loaded warehouse.
     */
    public function fullyLoaded(): static
    {
        return $this->afterCreating(function (Warehouse $warehouse) {
            $locationCount = match ($warehouse->type) {
                Warehouse::TYPE_MAIN => 50,
                Warehouse::TYPE_DISTRIBUTION => 30,
                Warehouse::TYPE_STORAGE => 40,
                Warehouse::TYPE_TRANSIT => 20,
                default => 25,
            };

            if (class_exists('Location')) {
                $locationTypes = $this->getLocationTypesForWarehouse($warehouse->type);
                for ($i = 0; $i < $locationCount; $i++) {
                    $type = $this->faker->randomElement($locationTypes);
                    Location::factory()
                        ->forWarehouse($warehouse->id)
                        ->{$type}()
                        ->create();
                }
            }

            if (class_exists('Inventory')) {
                Inventory::factory()
                    ->count(rand(30, 100))
                    ->state(['warehouse_id' => $warehouse->id])
                    ->create();
            }

            if (class_exists('PurchaseOrder')) {
                for ($i = 0; $i < rand(5, 15); $i++) {
                    PurchaseOrder::factory()
                        ->forWarehouse($warehouse->id)
                        ->create();
                }
            }

            if (class_exists('SalesOrder')) {
                for ($i = 0; $i < rand(10, 25); $i++) {
                    SalesOrder::factory()
                        ->fromWarehouse($warehouse->id)
                        ->create();
                }
            }

            if (class_exists('StockTransfer')) {
                $transferCount = rand(3, 8);
                for ($i = 0; $i < $transferCount; $i++) {
                    StockTransfer::factory()
                        ->fromWarehouse($warehouse->id)
                        ->create();
                }
                for ($i = 0; $i < $transferCount; $i++) {
                    StockTransfer::factory()
                        ->toWarehouse($warehouse->id)
                        ->create();
                }
            }
        });
    }
}
