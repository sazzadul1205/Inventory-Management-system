<?php
// database/factories/InventoryFactory.php

namespace Database\Factories;

use App\Models\Inventory;
use App\Models\Product;
use App\Models\Warehouse;
use App\Models\Location;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Inventory>
 */
class InventoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Inventory::class;

    /**
     * Common batch number formats
     */
    protected array $batchFormats = [
        'BATCH-##-####',
        'LOT-####-##',
        'BAT-####-YY',
        'LOT-YY-####',
        'BATCH-######',
        'LOT-######',
    ];

    /**
     * Common serial number formats
     */
    protected array $serialFormats = [
        'SN-########',
        'SRL-####-####',
        'S/N-########',
        'SERIAL-######',
        'SN-YY-####-###',
        'SRL-######-YY',
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $product = Product::inRandomOrder()->first() ?? Product::factory()->create();
        $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
        $location = Location::where('warehouse_id', $warehouse->id)->inRandomOrder()->first();

        $quantityOnHand = $this->faker->numberBetween(0, 1000);
        $quantityReserved = $this->faker->numberBetween(0, min($quantityOnHand, 200));
        $unitCost = $this->faker->randomFloat(2, 1, 500);

        $isBatchTracked = $product->is_batch_tracked ?? $this->faker->boolean(40);
        $isSerialTracked = $product->is_serial_tracked ?? $this->faker->boolean(20);
        $hasExpiry = $product->has_expiry ?? $this->faker->boolean(30);

        return [
            'product_id' => $product->id,
            'warehouse_id' => $warehouse->id,
            'location_id' => $location ? $location->id : null,
            'batch_number' => $isBatchTracked ? $this->generateBatchNumber() : null,
            'serial_number' => $isSerialTracked ? $this->generateSerialNumber() : null,
            'expiry_date' => $hasExpiry ? $this->generateExpiryDate() : null,
            'quantity_on_hand' => $quantityOnHand,
            'quantity_reserved' => $quantityReserved,
            'quantity_available' => $quantityOnHand - $quantityReserved,
            'quantity_in_transit' => $this->faker->optional(0.3)->numberBetween(0, 100),
            'quantity_on_order' => $this->faker->optional(0.2)->numberBetween(0, 50),
            'unit_cost' => $unitCost,
            'last_count_date' => $this->faker->optional(0.7)->dateTimeBetween('-6 months', 'now'),
            'last_movement_date' => $this->faker->optional(0.8)->dateTimeBetween('-3 months', 'now'),
            'status' => $this->determineStatus($quantityOnHand, $quantityReserved, $hasExpiry),
            'created_at' => $this->faker->dateTimeBetween('-2 years', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Generate a batch number.
     */
    protected function generateBatchNumber(): string
    {
        $format = $this->faker->randomElement($this->batchFormats);

        return $this->faker->numerify(str_replace(
            ['##', '####', '######', 'YY'],
            ['##', '####', '######', now()->format('y')],
            $format
        ));
    }

    /**
     * Generate a serial number.
     */
    protected function generateSerialNumber(): string
    {
        $format = $this->faker->randomElement($this->serialFormats);

        return $this->faker->bothify(str_replace(
            ['########', '####', '######', 'YY'],
            ['########', '####', '######', now()->format('y')],
            $format
        ));
    }

    /**
     * Generate an expiry date.
     */
    protected function generateExpiryDate(): ?\DateTime
    {
        // 70% chance of future expiry, 30% chance of expired
        if ($this->faker->boolean(70)) {
            return $this->faker->dateTimeBetween('now', '+2 years');
        } else {
            return $this->faker->dateTimeBetween('-1 year', 'now');
        }
    }

    /**
     * Determine inventory status based on conditions.
     */
    protected function determineStatus(int $onHand, int $reserved, bool $hasExpiry): string
    {
        // 5% chance of damaged
        if ($this->faker->boolean(5)) {
            return Inventory::STATUS_DAMAGED;
        }

        // 3% chance of quarantined
        if ($this->faker->boolean(3)) {
            return Inventory::STATUS_QUARANTINED;
        }

        // If all quantity is reserved
        if ($onHand > 0 && $reserved >= $onHand) {
            return Inventory::STATUS_RESERVED;
        }

        // If out of stock
        if ($onHand <= 0) {
            return Inventory::STATUS_AVAILABLE;
        }

        return Inventory::STATUS_AVAILABLE;
    }

    /**
     * Indicate available inventory.
     */
    public function available(): static
    {
        return $this->state(function (array $attributes) {
            $qty = $this->faker->numberBetween(10, 500);
            return [
                'quantity_on_hand' => $qty,
                'quantity_reserved' => 0,
                'quantity_available' => $qty,
                'status' => Inventory::STATUS_AVAILABLE,
            ];
        });
    }

    /**
     * Indicate reserved inventory.
     */
    public function reserved(): static
    {
        return $this->state(function (array $attributes) {
            $qty = $this->faker->numberBetween(10, 200);
            return [
                'quantity_on_hand' => $qty,
                'quantity_reserved' => $qty,
                'quantity_available' => 0,
                'status' => Inventory::STATUS_RESERVED,
            ];
        });
    }

    /**
     * Indicate low stock inventory.
     */
    public function lowStock(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'quantity_on_hand' => $this->faker->numberBetween(1, 5),
                'quantity_reserved' => 0,
                'quantity_available' => $this->faker->numberBetween(1, 5),
                'status' => Inventory::STATUS_AVAILABLE,
            ];
        });
    }

    /**
     * Indicate out of stock inventory.
     */
    public function outOfStock(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'quantity_on_hand' => 0,
                'quantity_reserved' => 0,
                'quantity_available' => 0,
                'status' => Inventory::STATUS_AVAILABLE,
            ];
        });
    }

    /**
     * Indicate damaged inventory.
     */
    public function damaged(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => Inventory::STATUS_DAMAGED,
                'quantity_reserved' => 0,
                'quantity_available' => 0,
            ];
        });
    }

    /**
     * Indicate quarantined inventory.
     */
    public function quarantined(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => Inventory::STATUS_QUARANTINED,
                'quantity_reserved' => 0,
                'quantity_available' => 0,
            ];
        });
    }

    /**
     * Indicate expired inventory.
     */
    public function expired(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'expiry_date' => $this->faker->dateTimeBetween('-6 months', '-1 day'),
                'status' => Inventory::STATUS_EXPIRED,
            ];
        });
    }

    /**
     * Indicate expiring soon inventory.
     */
    public function expiringSoon(int $days = 30): static
    {
        return $this->state(function (array $attributes) use ($days) {
            return [
                'expiry_date' => $this->faker->dateTimeBetween('now', "+{$days} days"),
                'status' => Inventory::STATUS_AVAILABLE,
            ];
        });
    }

    /**
     * Indicate batch tracked inventory.
     */
    public function batchTracked(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'batch_number' => $this->generateBatchNumber(),
                'serial_number' => null,
            ];
        });
    }

    /**
     * Indicate serial tracked inventory.
     */
    public function serialTracked(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'serial_number' => $this->generateSerialNumber(),
                'batch_number' => null,
            ];
        });
    }

    /**
     * Indicate high value inventory.
     */
    public function highValue(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'unit_cost' => $this->faker->randomFloat(2, 500, 5000),
                'quantity_on_hand' => $this->faker->numberBetween(1, 20),
            ];
        });
    }

    /**
     * Indicate bulk inventory.
     */
    public function bulk(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'unit_cost' => $this->faker->randomFloat(2, 0.5, 10),
                'quantity_on_hand' => $this->faker->numberBetween(1000, 10000),
            ];
        });
    }

    /**
     * Set inventory for a specific warehouse.
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
     * Set inventory for a specific product.
     */
    public function forProduct(int $productId): static
    {
        return $this->state(function (array $attributes) use ($productId) {
            return [
                'product_id' => $productId,
            ];
        });
    }

    /**
     * Create inventory with movements.
     */
    public function withMovements(int $count = 5): static
    {
        return $this->afterCreating(function (Inventory $inventory) use ($count) {
            if (class_exists('\App\Models\InventoryMovement')) {
                \App\Models\InventoryMovement::factory()
                    ->count($count)
                    ->forInventory($inventory)
                    ->create();
            }
        });
    }

    /**
     * Create inventory with specific quantity and reserve some.
     */
    public function withReservation(int $totalQty, int $reservedQty): static
    {
        return $this->state(function (array $attributes) use ($totalQty, $reservedQty) {
            return [
                'quantity_on_hand' => $totalQty,
                'quantity_reserved' => $reservedQty,
                'quantity_available' => $totalQty - $reservedQty,
            ];
        });
    }
}
