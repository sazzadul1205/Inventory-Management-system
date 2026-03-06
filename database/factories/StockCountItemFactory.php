<?php
// database/factories/StockCountItemFactory.php

namespace Database\Factories;

use App\Models\StockCountItem;
use App\Models\StockCount;
use App\Models\Product;
use App\Models\Location;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<StockCountItem>
 */
class StockCountItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = StockCountItem::class;

    /**
     * Variance reasons distribution
     */
    protected array $varianceReasons = [
        StockCountItem::REASON_DAMAGE => 20,
        StockCountItem::REASON_THEFT => 5,
        StockCountItem::REASON_MISPLACEMENT => 25,
        StockCountItem::REASON_SYSTEM_ERROR => 15,
        StockCountItem::REASON_SUPPLIER_ERROR => 10,
        StockCountItem::REASON_RETURN => 5,
        StockCountItem::REASON_OTHER => 20,
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $stockCount = StockCount::inRandomOrder()->first() ?? StockCount::factory()->create();
        $product = Product::inRandomOrder()->first() ?? Product::factory()->create();
        $location = Location::where('warehouse_id', $stockCount->warehouse_id)
            ->inRandomOrder()
            ->first() ?? Location::factory()->forWarehouse($stockCount->warehouse_id)->create();
        $user = User::inRandomOrder()->first() ?? User::factory()->create();

        $expectedQuantity = $this->faker->numberBetween(0, 100);

        // Determine counted quantity based on status
        $status = $this->getRandomStatus($stockCount->status);
        $countedQuantity = $this->getCountedQuantityForStatus($status, $expectedQuantity);
        $hasVariance = $countedQuantity != $expectedQuantity;

        $varianceReason = $hasVariance ? $this->getRandomVarianceReason() : null;
        $countedBy = in_array($status, [StockCountItem::STATUS_COUNTED, StockCountItem::STATUS_VERIFIED, StockCountItem::STATUS_APPROVED])
            ? $user->id
            : null;
        $approvedBy = in_array($status, [StockCountItem::STATUS_APPROVED])
            ? $user->id
            : null;

        return [
            'stock_count_id' => $stockCount->id,
            'product_id' => $product->id,
            'location_id' => $location->id,
            'expected_quantity' => $expectedQuantity,
            'counted_quantity' => $countedQuantity,
            'variance_reason' => $varianceReason,
            'status' => $status,
            'counted_by' => $countedBy,
            'approved_by' => $approvedBy,
            'notes' => $this->generateNotes($status, $varianceReason),
            'created_at' => $stockCount->count_date,
            'updated_at' => $this->faker->dateTimeBetween($stockCount->count_date, 'now'),
        ];
    }

    /**
     * Get random status based on parent count status.
     */
    protected function getRandomStatus(string $parentStatus): string
    {
        $statusMap = [
            StockCount::STATUS_DRAFT => [
                StockCountItem::STATUS_PENDING => 100,
            ],
            StockCount::STATUS_IN_PROGRESS => [
                StockCountItem::STATUS_PENDING => 40,
                StockCountItem::STATUS_COUNTED => 60,
            ],
            StockCount::STATUS_COMPLETED => [
                StockCountItem::STATUS_COUNTED => 70,
                StockCountItem::STATUS_VERIFIED => 30,
            ],
            StockCount::STATUS_VERIFIED => [
                StockCountItem::STATUS_VERIFIED => 40,
                StockCountItem::STATUS_APPROVED => 60,
            ],
        ];

        $distribution = $statusMap[$parentStatus] ?? [
            StockCountItem::STATUS_PENDING => 100,
        ];

        $rand = $this->faker->numberBetween(1, 100);
        $cumulative = 0;

        foreach ($distribution as $status => $probability) {
            $cumulative += $probability;
            if ($rand <= $cumulative) {
                return $status;
            }
        }

        return StockCountItem::STATUS_PENDING;
    }

    /**
     * Get counted quantity based on status.
     */
    protected function getCountedQuantityForStatus(string $status, int $expected): int
    {
        if ($status === StockCountItem::STATUS_PENDING) {
            return 0;
        }

        // 70% chance of being accurate (±0), 30% chance of variance
        if ($this->faker->boolean(70)) {
            return $expected;
        }

        // Generate variance between -20 and +20, but not zero
        $variance = $this->faker->numberBetween(-20, 20);
        while ($variance === 0) {
            $variance = $this->faker->numberBetween(-20, 20);
        }

        return max(0, $expected + $variance);
    }

    /**
     * Get random variance reason.
     */
    protected function getRandomVarianceReason(): string
    {
        $rand = $this->faker->numberBetween(1, 100);
        $cumulative = 0;

        foreach ($this->varianceReasons as $reason => $probability) {
            $cumulative += $probability;
            if ($rand <= $cumulative) {
                return $reason;
            }
        }

        return StockCountItem::REASON_OTHER;
    }

    /**
     * Generate notes based on status and reason.
     */
    protected function generateNotes(string $status, ?string $varianceReason): ?string
    {
        if (!$this->faker->boolean(30)) {
            return null;
        }

        $notes = [];

        if ($varianceReason) {
            $notes[] = "Variance reason: " . ($varianceReason ?: 'unknown');
        }

        if ($status === StockCountItem::STATUS_REJECTED) {
            $notes[] = "Rejected due to " . $this->faker->randomElement([
                'incorrect count',
                'damaged product',
                'quality issues',
                'verification failed',
            ]);
        }

        if ($this->faker->boolean(20)) {
            $notes[] = $this->faker->sentence();
        }

        return !empty($notes) ? implode("\n", $notes) : null;
    }

    /**
     * Indicate pending item.
     */
    public function pending(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'counted_quantity' => 0,
                'status' => StockCountItem::STATUS_PENDING,
                'counted_by' => null,
                'approved_by' => null,
            ];
        });
    }

    /**
     * Indicate counted item.
     */
    public function counted(): static
    {
        return $this->state(function (array $attributes) {
            $counted = $this->faker->numberBetween(0, $attributes['expected_quantity'] + 5);
            return [
                'counted_quantity' => $counted,
                'status' => StockCountItem::STATUS_COUNTED,
            ];
        });
    }

    /**
     * Indicate verified item.
     */
    public function verified(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => StockCountItem::STATUS_VERIFIED,
            ];
        });
    }

    /**
     * Indicate approved item.
     */
    public function approved(): static
    {
        $user = User::inRandomOrder()->first() ?? User::factory()->create();

        return $this->state(function (array $attributes) use ($user) {
            $reason = $this->getRandomVarianceReason();

            return [
                'status' => StockCountItem::STATUS_APPROVED,
                'approved_by' => $user->id,
                'variance_reason' => $reason,
            ];
        });
    }

    /**
     * Indicate rejected item.
     */
    public function rejected(): static
    {
        $user = User::inRandomOrder()->first() ?? User::factory()->create();

        return $this->state(function (array $attributes) use ($user) {
            return [
                'status' => StockCountItem::STATUS_REJECTED,
                'approved_by' => $user->id,
                'notes' => 'Rejected: ' . $this->faker->sentence(),
            ];
        });
    }

    /**
     * Indicate accurate item (no variance).
     */
    public function accurate(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'counted_quantity' => $attributes['expected_quantity'],
                'variance_reason' => null,
            ];
        });
    }

    /**
     * Indicate positive variance (surplus).
     */
    public function positiveVariance(): static
    {
        return $this->state(function (array $attributes) {
            $variance = $this->faker->numberBetween(1, 20);
            return [
                'counted_quantity' => $attributes['expected_quantity'] + $variance,
                'variance_reason' => $this->faker->randomElement([
                    StockCountItem::REASON_SYSTEM_ERROR,
                    StockCountItem::REASON_SUPPLIER_ERROR,
                    StockCountItem::REASON_RETURN,
                ]),
            ];
        });
    }

    /**
     * Indicate negative variance (shortage).
     */
    public function negativeVariance(): static
    {
        return $this->state(function (array $attributes) {
            $expected = $attributes['expected_quantity'];
            $variance = $this->faker->numberBetween(1, min(20, $expected));
            return [
                'counted_quantity' => max(0, $expected - $variance),
                'variance_reason' => $this->faker->randomElement([
                    StockCountItem::REASON_DAMAGE,
                    StockCountItem::REASON_THEFT,
                    StockCountItem::REASON_MISPLACEMENT,
                ]),
            ];
        });
    }

    /**
     * Indicate significant variance (>10%).
     */
    public function significantVariance(): static
    {
        return $this->state(function (array $attributes) {
            $expected = $attributes['expected_quantity'] ?: 50;
            $variancePercent = $this->faker->randomFloat(2, 15, 50);
            $varianceDirection = $this->faker->randomElement([-1, 1]);
            $counted = $expected + ($expected * $variancePercent / 100 * $varianceDirection);

            return [
                'counted_quantity' => max(0, (int) $counted),
                'variance_reason' => $this->getRandomVarianceReason(),
            ];
        });
    }

    /**
     * Set for a specific stock count.
     */
    public function forStockCount(int $stockCountId): static
    {
        return $this->state(function (array $attributes) use ($stockCountId) {
            return [
                'stock_count_id' => $stockCountId,
            ];
        });
    }

    /**
     * Set for a specific product.
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
     * Set at a specific location.
     */
    public function atLocation(int $locationId): static
    {
        return $this->state(function (array $attributes) use ($locationId) {
            return [
                'location_id' => $locationId,
            ];
        });
    }

    /**
     * Set specific quantities.
     */
    public function withQuantities(int $expected, int $counted): static
    {
        return $this->state(function (array $attributes) use ($expected, $counted) {
            return [
                'expected_quantity' => $expected,
                'counted_quantity' => $counted,
            ];
        });
    }

    /**
     * Set with a specific variance reason.
     */
    public function withVarianceReason(string $reason): static
    {
        return $this->state(function (array $attributes) use ($reason) {
            return [
                'variance_reason' => $reason,
            ];
        });
    }

    /**
     * Set with specific status.
     */
    public function withStatus(string $status): static
    {
        $user = User::inRandomOrder()->first() ?? User::factory()->create();

        $state = ['status' => $status];

        if (in_array($status, [StockCountItem::STATUS_COUNTED, StockCountItem::STATUS_VERIFIED])) {
            $state['counted_by'] = $user->id;
        }

        if ($status === StockCountItem::STATUS_APPROVED) {
            $state['approved_by'] = $user->id;
            $state['variance_reason'] = $this->getRandomVarianceReason();
        }

        return $this->state($state);
    }
}
