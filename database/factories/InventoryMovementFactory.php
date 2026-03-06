<?php
// database/factories/InventoryMovementFactory.php

namespace Database\Factories;

use App\Models\InventoryMovement;
use App\Models\Product;
use App\Models\Warehouse;
use App\Models\Location;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<InventoryMovement>
 */
class InventoryMovementFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = InventoryMovement::class;

    /**
     * Movement types with their probabilities (weighted)
     */
    protected array $movementTypeDistribution = [
        InventoryMovement::TYPE_RECEIVE => 25,
        InventoryMovement::TYPE_SHIP => 25,
        InventoryMovement::TYPE_TRANSFER => 15,
        InventoryMovement::TYPE_ADJUSTMENT => 10,
        InventoryMovement::TYPE_RETURN => 8,
        InventoryMovement::TYPE_COUNT => 7,
        InventoryMovement::TYPE_RESERVE => 5,
        InventoryMovement::TYPE_UNRESERVE => 3,
        InventoryMovement::TYPE_QUARANTINE => 1,
        InventoryMovement::TYPE_RELEASE => 1,
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $product = Product::inRandomOrder()->first() ?? Product::factory()->create();
        $movementType = $this->getRandomMovementType();
        $quantity = $this->getQuantityForType($movementType);
        $unitCost = $product->unit_cost ?? $this->faker->randomFloat(2, 1, 500);

        // Determine warehouses and locations based on movement type
        $fromWarehouse = null;
        $toWarehouse = null;
        $fromLocation = null;
        $toLocation = null;

        switch ($movementType) {
            case InventoryMovement::TYPE_RECEIVE:
                $toWarehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
                $toLocation = Location::where('warehouse_id', $toWarehouse->id)->inRandomOrder()->first();
                break;

            case InventoryMovement::TYPE_SHIP:
                $fromWarehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
                $fromLocation = Location::where('warehouse_id', $fromWarehouse->id)->inRandomOrder()->first();
                break;

            case InventoryMovement::TYPE_TRANSFER:
                $warehouses = Warehouse::inRandomOrder()->limit(2)->get();
                if ($warehouses->count() >= 2) {
                    $fromWarehouse = $warehouses[0];
                    $toWarehouse = $warehouses[1];
                    $fromLocation = Location::where('warehouse_id', $fromWarehouse->id)->inRandomOrder()->first();
                    $toLocation = Location::where('warehouse_id', $toWarehouse->id)->inRandomOrder()->first();
                }
                break;

            case InventoryMovement::TYPE_ADJUSTMENT:
            case InventoryMovement::TYPE_COUNT:
                $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
                $location = Location::where('warehouse_id', $warehouse->id)->inRandomOrder()->first();
                // For positive adjustment (increase), it's to; for negative (decrease), it's from
                if ($quantity > 0) {
                    $toWarehouse = $warehouse;
                    $toLocation = $location;
                } else {
                    $fromWarehouse = $warehouse;
                    $fromLocation = $location;
                }
                $quantity = abs($quantity);
                break;

            case InventoryMovement::TYPE_RESERVE:
            case InventoryMovement::TYPE_UNRESERVE:
                $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
                $location = Location::where('warehouse_id', $warehouse->id)->inRandomOrder()->first();
                $fromWarehouse = $warehouse;
                $fromLocation = $location;
                break;
        }

        return [
            'movement_number' => InventoryMovement::generateMovementNumber(),
            'product_id' => $product->id,
            'from_warehouse_id' => $fromWarehouse?->id,
            'to_warehouse_id' => $toWarehouse?->id,
            'from_location_id' => $fromLocation?->id,
            'to_location_id' => $toLocation?->id,
            'movement_type' => $movementType,
            'reference_type' => $this->getReferenceType($movementType),
            'reference_id' => $this->faker->optional(0.7)->numberBetween(1000, 9999),
            'batch_number' => $this->faker->optional(0.3)->bothify('BATCH-####-??'),
            'serial_number' => $this->faker->optional(0.1)->bothify('SN-########'),
            'quantity' => $quantity,
            'unit_cost' => $unitCost,
            'total_cost' => $quantity * $unitCost,
            'notes' => $this->faker->optional(0.4)->sentence(),
            'created_by' => User::inRandomOrder()->first()?->id ?? User::factory(),
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }

    /**
     * Get random movement type based on distribution.
     */
    protected function getRandomMovementType(): string
    {
        $rand = $this->faker->numberBetween(1, 100);
        $cumulative = 0;

        foreach ($this->movementTypeDistribution as $type => $probability) {
            $cumulative += $probability;
            if ($rand <= $cumulative) {
                return $type;
            }
        }

        return InventoryMovement::TYPE_RECEIVE;
    }

    /**
     * Get appropriate quantity based on movement type.
     */
    protected function getQuantityForType(string $movementType): int
    {
        return match ($movementType) {
            InventoryMovement::TYPE_RECEIVE,
            InventoryMovement::TYPE_RETURN => $this->faker->numberBetween(10, 1000),

            InventoryMovement::TYPE_SHIP,
            InventoryMovement::TYPE_TRANSFER => $this->faker->numberBetween(1, 500),

            InventoryMovement::TYPE_ADJUSTMENT => $this->faker->numberBetween(-100, 100),

            InventoryMovement::TYPE_COUNT => $this->faker->numberBetween(0, 500),

            InventoryMovement::TYPE_RESERVE,
            InventoryMovement::TYPE_UNRESERVE => $this->faker->numberBetween(1, 200),

            InventoryMovement::TYPE_QUARANTINE,
            InventoryMovement::TYPE_RELEASE => $this->faker->numberBetween(1, 50),

            default => $this->faker->numberBetween(1, 100),
        };
    }

    /**
     * Get reference type based on movement type.
     */
    protected function getReferenceType(string $movementType): ?string
    {
        return match ($movementType) {
            InventoryMovement::TYPE_RECEIVE => $this->faker->optional(0.8)->randomElement([
                InventoryMovement::REF_PURCHASE_ORDER
            ]),

            InventoryMovement::TYPE_SHIP => $this->faker->optional(0.8)->randomElement([
                InventoryMovement::REF_SALES_ORDER
            ]),

            InventoryMovement::TYPE_RETURN => $this->faker->optional(0.7)->randomElement([
                InventoryMovement::REF_RETURN
            ]),

            InventoryMovement::TYPE_ADJUSTMENT => $this->faker->optional(0.6)->randomElement([
                InventoryMovement::REF_ADJUSTMENT
            ]),

            InventoryMovement::TYPE_COUNT => $this->faker->optional(0.9)->randomElement([
                InventoryMovement::REF_COUNT
            ]),

            default => null,
        };
    }

    /**
     * Indicate a receive movement.
     */
    public function receive(): static
    {
        return $this->state(function (array $attributes) {
            $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
            $location = Location::where('warehouse_id', $warehouse->id)->inRandomOrder()->first();

            return [
                'movement_type' => InventoryMovement::TYPE_RECEIVE,
                'to_warehouse_id' => $warehouse->id,
                'to_location_id' => $location?->id,
                'from_warehouse_id' => null,
                'from_location_id' => null,
                'quantity' => $this->faker->numberBetween(10, 1000),
                'reference_type' => InventoryMovement::REF_PURCHASE_ORDER,
            ];
        });
    }

    /**
     * Indicate a ship movement.
     */
    public function ship(): static
    {
        return $this->state(function (array $attributes) {
            $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
            $location = Location::where('warehouse_id', $warehouse->id)->inRandomOrder()->first();

            return [
                'movement_type' => InventoryMovement::TYPE_SHIP,
                'from_warehouse_id' => $warehouse->id,
                'from_location_id' => $location?->id,
                'to_warehouse_id' => null,
                'to_location_id' => null,
                'quantity' => $this->faker->numberBetween(1, 500),
                'reference_type' => InventoryMovement::REF_SALES_ORDER,
            ];
        });
    }

    /**
     * Indicate a transfer movement.
     */
    public function transfer(): static
    {
        return $this->state(function (array $attributes) {
            $warehouses = Warehouse::inRandomOrder()->limit(2)->get();
            if ($warehouses->count() < 2) {
                $warehouses = Warehouse::factory()->count(2)->create();
            }

            $fromLocation = Location::where('warehouse_id', $warehouses[0]->id)->inRandomOrder()->first();
            $toLocation = Location::where('warehouse_id', $warehouses[1]->id)->inRandomOrder()->first();

            return [
                'movement_type' => InventoryMovement::TYPE_TRANSFER,
                'from_warehouse_id' => $warehouses[0]->id,
                'to_warehouse_id' => $warehouses[1]->id,
                'from_location_id' => $fromLocation?->id,
                'to_location_id' => $toLocation?->id,
                'quantity' => $this->faker->numberBetween(1, 300),
            ];
        });
    }

    /**
     * Indicate an adjustment movement.
     */
    public function adjustment(?int $quantity = null): static
    {
        return $this->state(function (array $attributes) use ($quantity) {
            $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
            $location = Location::where('warehouse_id', $warehouse->id)->inRandomOrder()->first();
            $qty = $quantity ?? $this->faker->numberBetween(-100, 100);

            $data = [
                'movement_type' => InventoryMovement::TYPE_ADJUSTMENT,
                'quantity' => abs($qty),
                'reference_type' => InventoryMovement::REF_ADJUSTMENT,
                'notes' => 'Inventory adjustment: ' . $this->faker->sentence(),
            ];

            if ($qty > 0) {
                $data['to_warehouse_id'] = $warehouse->id;
                $data['to_location_id'] = $location?->id;
            } else {
                $data['from_warehouse_id'] = $warehouse->id;
                $data['from_location_id'] = $location?->id;
            }

            return $data;
        });
    }

    /**
     * Indicate a return movement.
     */
    public function return(): static
    {
        return $this->state(function (array $attributes) {
            $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
            $location = Location::where('warehouse_id', $warehouse->id)->inRandomOrder()->first();

            return [
                'movement_type' => InventoryMovement::TYPE_RETURN,
                'to_warehouse_id' => $warehouse->id,
                'to_location_id' => $location?->id,
                'quantity' => $this->faker->numberBetween(1, 50),
                'reference_type' => InventoryMovement::REF_RETURN,
                'notes' => 'Customer return',
            ];
        });
    }

    /**
     * Indicate a count movement.
     */
    public function asCountAction(): static
    {
        return $this->state(function (array $attributes) {
            $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
            $location = Location::where('warehouse_id', $warehouse->id)->inRandomOrder()->first();

            return [
                'movement_type' => InventoryMovement::TYPE_COUNT,
                'from_warehouse_id' => $warehouse->id,
                'from_location_id' => $location?->id,
                'quantity' => $this->faker->numberBetween(0, 500),
                'reference_type' => InventoryMovement::REF_COUNT,
                'notes' => 'Physical count',
            ];
        });
    }

    /**
     * Indicate a reserve movement.
     */
    public function reserve(): static
    {
        return $this->state(function (array $attributes) {
            $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
            $location = Location::where('warehouse_id', $warehouse->id)->inRandomOrder()->first();

            return [
                'movement_type' => InventoryMovement::TYPE_RESERVE,
                'from_warehouse_id' => $warehouse->id,
                'from_location_id' => $location?->id,
                'quantity' => $this->faker->numberBetween(1, 100),
                'notes' => 'Reserved for order',
            ];
        });
    }

    /**
     * Indicate an unreserve movement.
     */
    public function unreserve(): static
    {
        return $this->state(function (array $attributes) {
            $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
            $location = Location::where('warehouse_id', $warehouse->id)->inRandomOrder()->first();

            return [
                'movement_type' => InventoryMovement::TYPE_UNRESERVE,
                'from_warehouse_id' => $warehouse->id,
                'from_location_id' => $location?->id,
                'quantity' => $this->faker->numberBetween(1, 100),
                'notes' => 'Reservation released',
            ];
        });
    }

    /**
     * Set movement for a specific product.
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
     * Set movement for a specific warehouse.
     */
    public function inWarehouse(int $warehouseId): static
    {
        return $this->state(function (array $attributes) use ($warehouseId) {
            return [
                'from_warehouse_id' => $warehouseId,
                'to_warehouse_id' => $warehouseId,
            ];
        });
    }

    /**
     * Set movement for a specific batch.
     */
    public function forBatch(string $batchNumber): static
    {
        return $this->state(function (array $attributes) use ($batchNumber) {
            return [
                'batch_number' => $batchNumber,
            ];
        });
    }

    /**
     * Set movement for a specific serial number.
     */
    public function forSerial(string $serialNumber): static
    {
        return $this->state(function (array $attributes) use ($serialNumber) {
            return [
                'serial_number' => $serialNumber,
                'quantity' => 1, // Serial tracked items usually have quantity 1
            ];
        });
    }

    /**
     * Set movement for a specific inventory item.
     */
    public function forInventory($inventory): static
    {
        return $this->state(function (array $attributes) use ($inventory) {
            return [
                'product_id' => $inventory->product_id,
                'batch_number' => $inventory->batch_number,
                'serial_number' => $inventory->serial_number,
                'from_warehouse_id' => $inventory->warehouse_id,
                'from_location_id' => $inventory->location_id,
                'unit_cost' => $inventory->unit_cost,
            ];
        });
    }

    /**
     * Set movement created by a specific user.
     */
    public function createdBy(int $userId): static
    {
        return $this->state(function (array $attributes) use ($userId) {
            return [
                'created_by' => $userId,
            ];
        });
    }

    /**
     * Set movement date to today.
     */
    public function today(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'created_at' => now(),
            ];
        });
    }

    /**
     * Set movement date to this week.
     */
    public function thisWeek(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'created_at' => $this->faker->dateTimeBetween('-7 days', 'now'),
            ];
        });
    }

    /**
     * Set movement date to this month.
     */
    public function thisMonth(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'created_at' => $this->faker->dateTimeBetween('-30 days', 'now'),
            ];
        });
    }

    /**
     * Create movements with a specific pattern.
     */
    public function withPattern(string $pattern): static
    {
        return $this->afterMaking(function (InventoryMovement $movement) use ($pattern) {
            // Can be used to create specific movement patterns
            // For example: receive -> transfer -> ship
        });
    }
}
