<?php
// database/factories/StockCountFactory.php

namespace Database\Factories;

use App\Models\Inventory;
use App\Models\Location;
use App\Models\Product;
use App\Models\StockCount;
use App\Models\StockCountItem;
use App\Models\Warehouse;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<StockCount>
 */
class StockCountFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = StockCount::class;

    /**
     * Count types with probabilities
     */
    protected array $countTypeDistribution = [
        StockCount::TYPE_CYCLE => 50,
        StockCount::TYPE_SPOT => 20,
        StockCount::TYPE_FULL => 20,
        StockCount::TYPE_ANNUAL => 10,
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
        $user = User::inRandomOrder()->first() ?? User::factory()->create();

        $countType = $this->getRandomCountType();
        $status = $this->getRandomStatus($countType);
        $countDate = $this->getCountDateForStatus($status);

        $verifiedBy = $this->getVerifiedByForStatus($status, $user);

        return [
            'count_number' => $this->generateCountNumber(),
            'warehouse_id' => $warehouse->id,
            'count_date' => $countDate,
            'count_type' => $countType,
            'status' => $status,
            'notes' => $this->faker->optional(0.3)->sentence(),
            'created_by' => $user->id,
            'verified_by' => $verifiedBy,
            'created_at' => $countDate,
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Generate a unique count number.
     */
    protected function generateCountNumber(): string
    {
        $prefix = 'CNT';
        $year = now()->format('Y');
        $month = now()->format('m');
        $random = $this->faker->unique()->numberBetween(1000, 9999);

        return "{$prefix}-{$year}{$month}-{$random}";
    }

    /**
     * Get random count type based on distribution.
     */
    protected function getRandomCountType(): string
    {
        $rand = $this->faker->numberBetween(1, 100);
        $cumulative = 0;

        foreach ($this->countTypeDistribution as $type => $probability) {
            $cumulative += $probability;
            if ($rand <= $cumulative) {
                return $type;
            }
        }

        return StockCount::TYPE_CYCLE;
    }

    /**
     * Get random status based on count type.
     */
    protected function getRandomStatus(string $countType): string
    {
        // Different status distributions based on count type
        $statuses = match ($countType) {
            StockCount::TYPE_ANNUAL => [
                StockCount::STATUS_DRAFT => 5,
                StockCount::STATUS_IN_PROGRESS => 10,
                StockCount::STATUS_COMPLETED => 20,
                StockCount::STATUS_VERIFIED => 60,
                StockCount::STATUS_CANCELLED => 5,
            ],
            StockCount::TYPE_FULL => [
                StockCount::STATUS_DRAFT => 10,
                StockCount::STATUS_IN_PROGRESS => 15,
                StockCount::STATUS_COMPLETED => 25,
                StockCount::STATUS_VERIFIED => 45,
                StockCount::STATUS_CANCELLED => 5,
            ],
            StockCount::TYPE_CYCLE => [
                StockCount::STATUS_DRAFT => 15,
                StockCount::STATUS_IN_PROGRESS => 25,
                StockCount::STATUS_COMPLETED => 35,
                StockCount::STATUS_VERIFIED => 20,
                StockCount::STATUS_CANCELLED => 5,
            ],
            default => [
                StockCount::STATUS_DRAFT => 20,
                StockCount::STATUS_IN_PROGRESS => 30,
                StockCount::STATUS_COMPLETED => 30,
                StockCount::STATUS_VERIFIED => 15,
                StockCount::STATUS_CANCELLED => 5,
            ],
        };

        $rand = $this->faker->numberBetween(1, 100);
        $cumulative = 0;

        foreach ($statuses as $status => $probability) {
            $cumulative += $probability;
            if ($rand <= $cumulative) {
                return $status;
            }
        }

        return StockCount::STATUS_DRAFT;
    }

    /**
     * Get count date based on status.
     */
    protected function getCountDateForStatus(string $status): \DateTime
    {
        return match ($status) {
            StockCount::STATUS_VERIFIED => $this->faker->dateTimeBetween('-6 months', '-2 months'),
            StockCount::STATUS_COMPLETED => $this->faker->dateTimeBetween('-3 months', '-1 month'),
            StockCount::STATUS_IN_PROGRESS => $this->faker->dateTimeBetween('-1 month', '-1 week'),
            StockCount::STATUS_DRAFT => $this->faker->dateTimeBetween('-1 week', 'now'),
            default => $this->faker->dateTimeBetween('-3 months', 'now'),
        };
    }

    /**
     * Get verified by user based on status.
     */
    protected function getVerifiedByForStatus(string $status, User $defaultUser): ?int
    {
        if ($status === StockCount::STATUS_VERIFIED && $this->faker->boolean(80)) {
            return $defaultUser->id;
        }

        return null;
    }

    /**
     * Indicate cycle count.
     */
    public function cycleCount(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'count_type' => StockCount::TYPE_CYCLE,
            ];
        });
    }

    /**
     * Indicate full inventory count.
     */
    public function fullCount(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'count_type' => StockCount::TYPE_FULL,
            ];
        });
    }

    /**
     * Indicate spot check.
     */
    public function spotCheck(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'count_type' => StockCount::TYPE_SPOT,
            ];
        });
    }

    /**
     * Indicate annual count.
     */
    public function annualCount(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'count_type' => StockCount::TYPE_ANNUAL,
                'count_date' => $this->faker->dateTimeBetween('-1 year', '-11 months'),
                'notes' => 'Annual physical inventory',
            ];
        });
    }

    /**
     * Indicate draft status.
     */
    public function draft(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => StockCount::STATUS_DRAFT,
                'verified_by' => null,
            ];
        });
    }

    /**
     * Indicate in progress status.
     */
    public function inProgress(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => StockCount::STATUS_IN_PROGRESS,
                'verified_by' => null,
            ];
        });
    }

    /**
     * Indicate completed status.
     */
    public function completed(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => StockCount::STATUS_COMPLETED,
                'verified_by' => null,
            ];
        });
    }

    /**
     * Indicate verified status.
     */
    public function verified(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => StockCount::STATUS_VERIFIED,
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
                'status' => StockCount::STATUS_CANCELLED,
                'verified_by' => null,
                'notes' => 'Count cancelled: ' . $this->faker->sentence(),
            ];
        });
    }

    /**
     * Set for a specific warehouse.
     */
    public function forWarehouse(int $warehouseId): static
    {
        return $this->state(function (array $attributes) use ($warehouseId) {
            return [
                'warehouse_id' => $warehouseId,
            ];
        });
    }

    /**
     * Set created by specific user.
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
     * Create stock count with items.
     */
    public function withItems(?int $count = null): static
    {
        return $this->afterCreating(function (StockCount $stockCount) use ($count) {
            if (class_exists('StockCountItem')) {
                $products = Product::inRandomOrder()->limit($count ?? $this->faker->numberBetween(5, 20))->get();
                $locations = Location::where('warehouse_id', $stockCount->warehouse_id)->get();

                foreach ($products as $product) {
                    $location = $locations->random();

                    // Get expected quantity from inventory
                    $inventory = Inventory::where('product_id', $product->id)
                        ->where('location_id', $location->id)
                        ->first();

                    $expectedQty = $inventory?->quantity_on_hand ?? 0;

                    // Determine counted quantity based on status
                    $countedQty = $this->getCountedQuantityForStatus($stockCount->status, $expectedQty);

                    StockCountItem::factory()
                        ->forStockCount($stockCount->id)
                        ->forProduct($product->id)
                        ->atLocation($location->id)
                        ->withQuantities($expectedQty, $countedQty)
                        ->withStatus($stockCount->status)
                        ->create();
                }
            }
        });
    }

    /**
     * Get counted quantity based on status.
     */
    protected function getCountedQuantityForStatus(string $status, int $expectedQty): int
    {
        return match ($status) {
            StockCount::STATUS_VERIFIED,
            StockCount::STATUS_COMPLETED => $this->faker->numberBetween(
                max(0, $expectedQty - 5),
                $expectedQty + 5
            ),
            StockCount::STATUS_IN_PROGRESS => $this->faker->optional(0.6)->numberBetween(0, $expectedQty + 5) ?? 0,
            default => 0,
        };
    }

    /**
     * Create stock count with significant variances.
     */
    public function withSignificantVariances(): static
    {
        return $this->afterCreating(function (StockCount $stockCount) {
            if (class_exists('StockCountItem')) {
                $products = Product::inRandomOrder()->limit(5)->get();
                $locations = Location::where('warehouse_id', $stockCount->warehouse_id)->get();

                foreach ($products as $product) {
                    $location = $locations->random();
                    $expectedQty = $this->faker->numberBetween(10, 100);

                    // Create significant variance (±20-50%)
                    $variancePercent = $this->faker->randomFloat(2, 20, 50);
                    $varianceDirection = $this->faker->randomElement([-1, 1]);
                    $countedQty = $expectedQty + ($expectedQty * $variancePercent / 100 * $varianceDirection);

                    StockCountItem::factory()
                        ->forStockCount($stockCount->id)
                        ->forProduct($product->id)
                        ->atLocation($location->id)
                        ->withQuantities($expectedQty, (int) $countedQty)
                        ->withStatus($stockCount->status)
                        ->create();
                }
            }
        });
    }

    /**
     * Create stock count with zero variances.
     */
    public function withZeroVariances(): static
    {
        return $this->afterCreating(function (StockCount $stockCount) {
            if (class_exists('StockCountItem')) {
                $products = Product::inRandomOrder()->limit(10)->get();
                $locations = Location::where('warehouse_id', $stockCount->warehouse_id)->get();

                foreach ($products as $product) {
                    $location = $locations->random();
                    $expectedQty = $this->faker->numberBetween(1, 50);

                    StockCountItem::factory()
                        ->forStockCount($stockCount->id)
                        ->forProduct($product->id)
                        ->atLocation($location->id)
                        ->withQuantities($expectedQty, $expectedQty) // Exact match
                        ->withStatus($stockCount->status)
                        ->create();
                }
            }
        });
    }

    /**
     * Create a fully loaded stock count.
     */
    public function fullyLoaded(): static
    {
        return $this->afterCreating(function (StockCount $stockCount) {
            $itemCount = match ($stockCount->count_type) {
                StockCount::TYPE_ANNUAL => 50,
                StockCount::TYPE_FULL => 30,
                StockCount::TYPE_CYCLE => 20,
                default => 10,
            };

            if (!class_exists('StockCountItem')) {
                return;
            }

            $products = Product::inRandomOrder()->limit($itemCount)->get();
            $locations = Location::where('warehouse_id', $stockCount->warehouse_id)->get();

            if ($locations->isEmpty()) {
                return;
            }

            foreach ($products as $product) {
                $location = $locations->random();

                $inventory = Inventory::where('product_id', $product->id)
                    ->where('location_id', $location->id)
                    ->first();

                $expectedQty = $inventory?->quantity_on_hand ?? 0;
                $countedQty = $this->getCountedQuantityForStatus($stockCount->status, $expectedQty);

                StockCountItem::factory()
                    ->forStockCount($stockCount->id)
                    ->forProduct($product->id)
                    ->atLocation($location->id)
                    ->withQuantities($expectedQty, $countedQty)
                    ->withStatus($stockCount->status)
                    ->create();
            }
        });
    }
}
