<?php
// database/factories/ProductSupplierFactory.php

namespace Database\Factories;

use App\Models\ProductSupplier;
use App\Models\Product;
use App\Models\Supplier;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductSupplier>
 */
class ProductSupplierFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductSupplier::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $product = Product::inRandomOrder()->first() ?? Product::factory()->create();
        $supplier = Supplier::inRandomOrder()->first() ?? Supplier::factory()->create();

        $unitCost = $this->generateUnitCost($product);
        $minOrderQty = $this->generateMinOrderQuantity($product);
        $leadTime = $this->generateLeadTime($supplier);

        return [
            'product_id' => $product->id,
            'supplier_id' => $supplier->id,
            'supplier_sku' => $this->faker->optional(0.8)->bothify('SUP-####-??##'),
            'unit_cost' => $unitCost,
            'minimum_order_quantity' => $minOrderQty,
            'is_preferred' => false, // Will be set by state or later logic
            'lead_time_days' => $leadTime,
            'created_at' => $this->faker->dateTimeBetween('-2 years', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Generate unit cost based on product type.
     */
    protected function generateUnitCost(Product $product): float
    {
        // Base cost range by product category
        $categoryName = $product->category?->name ?? 'Default';

        $ranges = [
            'Electronics' => [10, 2000],
            'Computers' => [300, 3000],
            'Smartphones' => [200, 1500],
            'Furniture' => [50, 1000],
            'Office Supplies' => [1, 50],
            'Raw Materials' => [0.5, 100],
            'Consumables' => [1, 30],
            'Tools' => [10, 200],
            'Automotive' => [5, 500],
            'Pharmaceuticals' => [5, 500],
            'Food & Beverages' => [0.5, 20],
            'Default' => [5, 200]
        ];

        $range = $ranges[$categoryName] ?? $ranges['Default'];

        return $this->faker->randomFloat(2, $range[0], $range[1]);
    }

    /**
     * Generate minimum order quantity based on product type.
     */
    protected function generateMinOrderQuantity(Product $product): int
    {
        $categoryName = $product->category?->name ?? 'Default';

        $moqRanges = [
            'Electronics' => [1, 5],
            'Computers' => [1, 3],
            'Smartphones' => [1, 10],
            'Furniture' => [1, 2],
            'Office Supplies' => [10, 100],
            'Raw Materials' => [100, 1000],
            'Consumables' => [12, 144],
            'Tools' => [5, 20],
            'Automotive' => [4, 24],
            'Pharmaceuticals' => [10, 100],
            'Food & Beverages' => [24, 288],
            'Default' => [1, 50]
        ];

        $range = $moqRanges[$categoryName] ?? $moqRanges['Default'];

        return $this->faker->numberBetween($range[0], $range[1]);
    }

    /**
     * Generate lead time based on supplier location.
     */
    protected function generateLeadTime(Supplier $supplier): int
    {
        $location = $supplier->country ?? 'USA';

        $leadTimes = [
            'USA' => [1, 5],
            'Canada' => [3, 7],
            'Mexico' => [3, 8],
            'China' => [14, 30],
            'Japan' => [7, 14],
            'Germany' => [5, 10],
            'UK' => [5, 10],
            'India' => [10, 21],
            'Vietnam' => [14, 28],
            'Brazil' => [10, 20],
            'Australia' => [7, 14],
            'Default' => [5, 15]
        ];

        $range = $leadTimes[$location] ?? $leadTimes['Default'];

        return $this->faker->numberBetween($range[0], $range[1]);
    }

    /**
     * Indicate that this is the preferred supplier.
     */
    public function preferred(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_preferred' => true,
            ];
        });
    }

    /**
     * Indicate not preferred.
     */
    public function notPreferred(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_preferred' => false,
            ];
        });
    }

    /**
     * Set specific unit cost.
     */
    public function withUnitCost(float $cost): static
    {
        return $this->state(function (array $attributes) use ($cost) {
            return [
                'unit_cost' => $cost,
            ];
        });
    }

    /**
     * Set specific minimum order quantity.
     */
    public function withMinOrderQty(int $qty): static
    {
        return $this->state(function (array $attributes) use ($qty) {
            return [
                'minimum_order_quantity' => $qty,
            ];
        });
    }

    /**
     * Set specific lead time.
     */
    public function withLeadTime(int $days): static
    {
        return $this->state(function (array $attributes) use ($days) {
            return [
                'lead_time_days' => $days,
            ];
        });
    }

    /**
     * Set supplier SKU.
     */
    public function withSupplierSku(string $sku): static
    {
        return $this->state(function (array $attributes) use ($sku) {
            return [
                'supplier_sku' => $sku,
            ];
        });
    }

    /**
     * Create for a specific product.
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
     * Create for a specific supplier.
     */
    public function fromSupplier(int $supplierId): static
    {
        return $this->state(function (array $attributes) use ($supplierId) {
            return [
                'supplier_id' => $supplierId,
            ];
        });
    }

    /**
     * Create with competitive pricing (below average).
     */
    public function competitivePricing(): static
    {
        return $this->state(function (array $attributes) {
            $avgCost = ProductSupplier::byProduct($attributes['product_id'] ?? 0)
                ->avg('unit_cost') ?? 50;

            return [
                'unit_cost' => $avgCost * $this->faker->randomFloat(2, 0.7, 0.9),
            ];
        });
    }

    /**
     * Create with premium pricing (above average).
     */
    public function premiumPricing(): static
    {
        return $this->state(function (array $attributes) {
            $avgCost = ProductSupplier::byProduct($attributes['product_id'] ?? 0)
                ->avg('unit_cost') ?? 50;

            return [
                'unit_cost' => $avgCost * $this->faker->randomFloat(2, 1.1, 1.3),
            ];
        });
    }

    /**
     * Create with fast delivery.
     */
    public function fastDelivery(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'lead_time_days' => $this->faker->numberBetween(1, 3),
            ];
        });
    }

    /**
     * Create with bulk discount pricing (higher MOQ, lower cost).
     */
    public function bulkDiscount(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'minimum_order_quantity' => $this->faker->numberBetween(100, 1000),
                'unit_cost' => $this->faker->randomFloat(2, 1, 10),
            ];
        });
    }

    /**
     * Create as local supplier (fast delivery).
     */
    public function localSupplier(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'lead_time_days' => $this->faker->numberBetween(1, 2),
                'unit_cost' => $this->faker->randomFloat(2, 10, 50), // Slightly higher
            ];
        });
    }

    /**
     * Create as international supplier (longer lead time, lower cost).
     */
    public function internationalSupplier(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'lead_time_days' => $this->faker->numberBetween(14, 30),
                'unit_cost' => $this->faker->randomFloat(2, 5, 30), // Lower cost
            ];
        });
    }
}
