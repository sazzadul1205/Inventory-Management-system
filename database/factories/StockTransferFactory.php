<?php
// database/factories/StockTransferFactory.php

namespace Database\Factories;

use App\Models\Location;
use App\Models\Product;
use App\Models\StockTransfer;
use App\Models\StockTransferItem;
use App\Models\Warehouse;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<StockTransfer>
 */
class StockTransferFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = StockTransfer::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $fromWarehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();

        // Get a different warehouse for destination
        $toWarehouse = Warehouse::where('id', '!=', $fromWarehouse->id)
            ->inRandomOrder()
            ->first() ?? Warehouse::factory()->create();

        $user = User::inRandomOrder()->first() ?? User::factory()->create();

        $status = $this->getRandomStatus();
        $requestDate = $this->getRequestDateForStatus($status);
        $expectedDeliveryDate = $this->getExpectedDeliveryDate($requestDate);
        $actualDeliveryDate = $this->getActualDeliveryDate($status, $expectedDeliveryDate);

        return [
            'transfer_number' => $this->generateTransferNumber(),
            'from_warehouse_id' => $fromWarehouse->id,
            'to_warehouse_id' => $toWarehouse->id,
            'request_date' => $requestDate,
            'expected_delivery_date' => $expectedDeliveryDate,
            'actual_delivery_date' => $actualDeliveryDate,
            'status' => $status,
            'notes' => $this->faker->optional(0.3)->sentence(),
            'requested_by' => $user->id,
            'approved_by' => $this->getApprovedByForStatus($status, $user),
            'created_at' => $requestDate,
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Generate a unique transfer number.
     */
    protected function generateTransferNumber(): string
    {
        $prefix = 'TR';
        $year = now()->format('Y');
        $month = now()->format('m');
        $random = $this->faker->unique()->numberBetween(1000, 9999);

        return "{$prefix}-{$year}{$month}-{$random}";
    }

    /**
     * Get random status with realistic distribution.
     */
    protected function getRandomStatus(): string
    {
        $statuses = [
            StockTransfer::STATUS_DRAFT => 10,
            StockTransfer::STATUS_PENDING => 15,
            StockTransfer::STATUS_APPROVED => 20,
            StockTransfer::STATUS_SHIPPED => 20,
            StockTransfer::STATUS_PARTIALLY_RECEIVED => 15,
            StockTransfer::STATUS_RECEIVED => 15,
            StockTransfer::STATUS_CANCELLED => 5,
        ];

        $rand = $this->faker->numberBetween(1, 100);
        $cumulative = 0;

        foreach ($statuses as $status => $probability) {
            $cumulative += $probability;
            if ($rand <= $cumulative) {
                return $status;
            }
        }

        return StockTransfer::STATUS_DRAFT;
    }

    /**
     * Get request date based on status.
     */
    protected function getRequestDateForStatus(string $status): \DateTime
    {
        return match ($status) {
            StockTransfer::STATUS_RECEIVED,
            StockTransfer::STATUS_CANCELLED => $this->faker->dateTimeBetween('-6 months', '-1 month'),

            StockTransfer::STATUS_SHIPPED,
            StockTransfer::STATUS_PARTIALLY_RECEIVED => $this->faker->dateTimeBetween('-3 months', '-1 week'),

            StockTransfer::STATUS_APPROVED,
            StockTransfer::STATUS_PENDING => $this->faker->dateTimeBetween('-1 month', '-1 day'),

            StockTransfer::STATUS_DRAFT => $this->faker->dateTimeBetween('-1 week', 'now'),

            default => $this->faker->dateTimeBetween('-3 months', 'now'),
        };
    }

    /**
     * Get expected delivery date.
     */
    protected function getExpectedDeliveryDate(\DateTime $requestDate): ?\DateTime
    {
        if ($this->faker->boolean(80)) {
            $requestDateTime = \Carbon\Carbon::instance($requestDate);
            return $requestDateTime->addDays($this->faker->numberBetween(2, 10));
        }

        return null;
    }

    /**
     * Get actual delivery date based on status.
     */
    protected function getActualDeliveryDate(string $status, ?\DateTime $expectedDate): ?\DateTime
    {
        if (!in_array($status, [StockTransfer::STATUS_RECEIVED, StockTransfer::STATUS_PARTIALLY_RECEIVED])) {
            return null;
        }

        if ($expectedDate) {
            $expectedDateTime = \Carbon\Carbon::instance($expectedDate);
            return $this->faker->dateTimeBetween(
                $expectedDateTime->copy()->subDays(2),
                $expectedDateTime->copy()->addDays(5)
            );
        }

        return $this->faker->dateTimeBetween('-2 months', 'now');
    }

    /**
     * Get approved by user based on status.
     */
    protected function getApprovedByForStatus(string $status, User $defaultUser): ?int
    {
        $approvedStatuses = [
            StockTransfer::STATUS_APPROVED,
            StockTransfer::STATUS_SHIPPED,
            StockTransfer::STATUS_PARTIALLY_RECEIVED,
            StockTransfer::STATUS_RECEIVED
        ];

        if (in_array($status, $approvedStatuses) && $this->faker->boolean(80)) {
            return $defaultUser->id;
        }

        return null;
    }

    /**
     * Indicate draft status.
     */
    public function draft(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => StockTransfer::STATUS_DRAFT,
                'approved_by' => null,
                'actual_delivery_date' => null,
            ];
        });
    }

    /**
     * Indicate pending status.
     */
    public function pending(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => StockTransfer::STATUS_PENDING,
                'approved_by' => null,
                'actual_delivery_date' => null,
            ];
        });
    }

    /**
     * Indicate approved status.
     */
    public function approved(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => StockTransfer::STATUS_APPROVED,
                'actual_delivery_date' => null,
            ];
        });
    }

    /**
     * Indicate shipped status.
     */
    public function shipped(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => StockTransfer::STATUS_SHIPPED,
                'actual_delivery_date' => null,
            ];
        });
    }

    /**
     * Indicate partially received status.
     */
    public function partiallyReceived(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => StockTransfer::STATUS_PARTIALLY_RECEIVED,
            ];
        });
    }

    /**
     * Indicate received status.
     */
    public function received(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => StockTransfer::STATUS_RECEIVED,
            ];
        });
    }

    /**
     * Indicate cancelled status.
     */
    public function cancelled(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => StockTransfer::STATUS_CANCELLED,
                'approved_by' => null,
                'actual_delivery_date' => null,
                'notes' => 'Transfer cancelled: ' . $this->faker->sentence(),
            ];
        });
    }

    /**
     * Indicate overdue transfer.
     */
    public function overdue(): static
    {
        $requestDate = $this->faker->dateTimeBetween('-3 months', '-1 month');
        $expectedDate = \Carbon\Carbon::instance($requestDate)->addDays(5);

        return $this->state(function (array $attributes) use ($requestDate, $expectedDate) {
            return [
                'status' => StockTransfer::STATUS_SHIPPED,
                'request_date' => $requestDate,
                'expected_delivery_date' => $expectedDate,
                'actual_delivery_date' => null,
                'notes' => 'Overdue - follow up required',
            ];
        });
    }

    /**
     * Set specific source warehouse.
     */
    public function fromWarehouse(int $warehouseId): static
    {
        return $this->state(function (array $attributes) use ($warehouseId) {
            return [
                'from_warehouse_id' => $warehouseId,
            ];
        });
    }

    /**
     * Set specific destination warehouse.
     */
    public function toWarehouse(int $warehouseId): static
    {
        return $this->state(function (array $attributes) use ($warehouseId) {
            return [
                'to_warehouse_id' => $warehouseId,
            ];
        });
    }

    /**
     * Set requested by specific user.
     */
    public function requestedBy(int $userId): static
    {
        return $this->state(function (array $attributes) use ($userId) {
            return [
                'requested_by' => $userId,
            ];
        });
    }

    /**
     * Create transfer with items.
     */
    public function withItems(int $count = 3): static
    {
        return $this->afterCreating(function (StockTransfer $transfer) use ($count) {
            $this->createRandomItemsForTransfer($transfer, $count);
        });
    }

    /**
     * Get shipped quantity based on status.
     */
    protected function getShippedQuantityForStatus(string $status, int $requested): int
    {
        return match ($status) {
            StockTransfer::STATUS_SHIPPED,
            StockTransfer::STATUS_PARTIALLY_RECEIVED,
            StockTransfer::STATUS_RECEIVED => $requested,
            default => 0,
        };
    }

    /**
     * Get received quantity based on status.
     */
    protected function getReceivedQuantityForStatus(string $status, int $requested, int $shipped): int
    {
        return match ($status) {
            StockTransfer::STATUS_RECEIVED => $shipped,
            StockTransfer::STATUS_PARTIALLY_RECEIVED => $this->faker->numberBetween(1, $shipped - 1),
            default => 0,
        };
    }

    /**
     * Create transfer with specific items.
     */
    public function withSpecificItems(array $items): static
    {
        return $this->afterCreating(function (StockTransfer $transfer) use ($items) {
            if (class_exists('StockTransferItem')) {
                foreach ($items as $itemData) {
                    StockTransferItem::factory()
                        ->forStockTransfer($transfer->id)
                        ->forProduct($itemData['product_id'])
                        ->withQuantities(
                            $itemData['quantity'],
                            $itemData['shipped'] ?? 0,
                            $itemData['received'] ?? 0
                        )
                        ->create();
                }
            }
        });
    }

    /**
     * Create transfer with batch tracked items.
     */
    public function withBatchItems(int $count = 2): static
    {
        return $this->afterCreating(function (StockTransfer $transfer) use ($count) {
            $this->createBatchItemsForTransfer($transfer, $count);
        });
    }

    /**
     * Create transfer with serial tracked items.
     */
    public function withSerialItems(int $count = 3): static
    {
        return $this->afterCreating(function (StockTransfer $transfer) use ($count) {
            $this->createSerialItemsForTransfer($transfer, $count);
        });
    }

    /**
     * Create a fully loaded transfer.
     */
    public function fullyLoaded(): static
    {
        return $this->afterCreating(function (StockTransfer $transfer) {
            $this->createRandomItemsForTransfer($transfer, rand(3, 6));

            if ($this->faker->boolean(30)) {
                $this->createBatchItemsForTransfer($transfer, rand(1, 2));
            }

            if ($this->faker->boolean(20)) {
                $this->createSerialItemsForTransfer($transfer, rand(1, 3));
            }
        });
    }

    protected function createRandomItemsForTransfer(StockTransfer $transfer, int $count): void
    {
        if (!class_exists('StockTransferItem')) {
            return;
        }

        $products = Product::inRandomOrder()->limit($count)->get();

        foreach ($products as $product) {
            $quantity = $this->faker->numberBetween(5, 50);

            $fromLocation = Location::where('warehouse_id', $transfer->from_warehouse_id)
                ->inRandomOrder()
                ->first();

            $toLocation = Location::where('warehouse_id', $transfer->to_warehouse_id)
                ->inRandomOrder()
                ->first();

            $shipped = $this->getShippedQuantityForStatus($transfer->status, $quantity);
            $received = $this->getReceivedQuantityForStatus($transfer->status, $quantity, $shipped);

            StockTransferItem::factory()
                ->forStockTransfer($transfer->id)
                ->forProduct($product->id)
                ->fromLocation($fromLocation?->id)
                ->toLocation($toLocation?->id)
                ->withQuantities($quantity, $shipped, $received)
                ->create();
        }
    }

    protected function createBatchItemsForTransfer(StockTransfer $transfer, int $count): void
    {
        if (!class_exists('StockTransferItem')) {
            return;
        }

        $batchProducts = Product::where('is_batch_tracked', true)->get();

        if ($batchProducts->isEmpty()) {
            $batchProducts = Product::factory()->batchTracked()->count(2)->create();
        }

        foreach ($batchProducts->take($count) as $product) {
            StockTransferItem::factory()
                ->forStockTransfer($transfer->id)
                ->forProduct($product->id)
                ->withBatch()
                ->create();
        }
    }

    protected function createSerialItemsForTransfer(StockTransfer $transfer, int $count): void
    {
        if (!class_exists('StockTransferItem')) {
            return;
        }

        $serialProducts = Product::where('is_serial_tracked', true)->get();

        if ($serialProducts->isEmpty()) {
            $serialProducts = Product::factory()->serialTracked()->count(2)->create();
        }

        foreach ($serialProducts as $product) {
            for ($i = 0; $i < $count; $i++) {
                StockTransferItem::factory()
                    ->forStockTransfer($transfer->id)
                    ->forProduct($product->id)
                    ->withSerial()
                    ->create();
            }
        }
    }
}
