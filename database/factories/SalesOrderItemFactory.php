<?php
// database/factories/SalesOrderItemFactory.php

namespace Database\Factories;

use App\Models\SalesOrderItem;
use App\Models\SalesOrder;
use App\Models\Product;
use App\Models\ShipmentItem;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<SalesOrderItem>
 */
class SalesOrderItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = SalesOrderItem::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $product = Product::inRandomOrder()->first() ?? Product::factory()->create();
        $salesOrder = SalesOrder::inRandomOrder()->first() ?? SalesOrder::factory()->create();

        $quantityOrdered = $this->getQuantityForProduct($product);
        $unitPrice = $this->getUnitPriceForProduct($product);
        $quantityShipped = $this->getQuantityShipped($salesOrder->status, $quantityOrdered);

        $discountPercent = $this->faker->optional(0.3)->randomFloat(2, 0, 15) ?? 0;
        $taxPercent = $this->faker->optional(0.8)->randomFloat(2, 5, 12) ?? 0;

        return [
            'sales_order_id' => $salesOrder->id,
            'product_id' => $product->id,
            'quantity_ordered' => $quantityOrdered,
            'quantity_shipped' => $quantityShipped,
            'unit_price' => $unitPrice,
            'discount_percent' => $discountPercent,
            'tax_percent' => $taxPercent,
            'status' => $this->determineStatus($quantityOrdered, $quantityShipped),
            'notes' => $this->faker->optional(0.2)->sentence(),
            'created_at' => $salesOrder->order_date,
            'updated_at' => $this->faker->dateTimeBetween($salesOrder->order_date, 'now'),
        ];
    }

    /**
     * Get appropriate quantity based on product type.
     */
    protected function getQuantityForProduct(Product $product): int
    {
        $categoryName = $product->category?->name ?? 'Default';

        $ranges = [
            'Electronics' => [1, 5],
            'Computers' => [1, 3],
            'Smartphones' => [1, 10],
            'Furniture' => [1, 2],
            'Office Supplies' => [5, 50],
            'Raw Materials' => [10, 200],
            'Consumables' => [10, 100],
            'Tools' => [1, 10],
            'Automotive' => [1, 20],
            'Pharmaceuticals' => [5, 50],
            'Food & Beverages' => [5, 50],
            'Default' => [1, 20]
        ];

        $range = $ranges[$categoryName] ?? $ranges['Default'];

        return $this->faker->numberBetween($range[0], $range[1]);
    }

    /**
     * Get unit price based on product.
     */
    protected function getUnitPriceForProduct(Product $product): float
    {
        // Try to get from product-supplier relationship (lowest cost + markup)
        $productSupplier = $product->productSuppliers()->orderBy('unit_cost')->first();

        if ($productSupplier) {
            // Add 20-50% markup
            return $productSupplier->unit_cost * $this->faker->randomFloat(2, 1.2, 1.5);
        }

        // Fallback to category-based pricing
        $categoryName = $product->category?->name ?? 'Default';

        $priceRanges = [
            'Electronics' => [50, 2000],
            'Computers' => [400, 3000],
            'Smartphones' => [300, 1500],
            'Furniture' => [100, 1500],
            'Office Supplies' => [2, 100],
            'Raw Materials' => [1, 150],
            'Consumables' => [2, 50],
            'Tools' => [15, 300],
            'Automotive' => [10, 600],
            'Pharmaceuticals' => [10, 800],
            'Food & Beverages' => [1, 50],
            'Default' => [15, 300]
        ];

        $range = $priceRanges[$categoryName] ?? $priceRanges['Default'];

        return $this->faker->randomFloat(2, $range[0], $range[1]);
    }

    /**
     * Get quantity shipped based on SO status.
     */
    protected function getQuantityShipped(string $soStatus, int $ordered): int
    {
        return match ($soStatus) {
            SalesOrder::STATUS_SHIPPED,
            SalesOrder::STATUS_DELIVERED => $ordered,

            SalesOrder::STATUS_PARTIALLY_SHIPPED => $this->faker->numberBetween(1, $ordered - 1),

            default => 0,
        };
    }

    /**
     * Determine item status based on quantities.
     */
    protected function determineStatus(int $ordered, int $shipped): string
    {
        if ($shipped <= 0) {
            return SalesOrderItem::STATUS_PENDING;
        }

        if ($shipped >= $ordered) {
            return SalesOrderItem::STATUS_SHIPPED;
        }

        return SalesOrderItem::STATUS_PARTIALLY_SHIPPED;
    }

    /**
     * Indicate pending item.
     */
    public function pending(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'quantity_shipped' => 0,
                'status' => SalesOrderItem::STATUS_PENDING,
            ];
        });
    }

    /**
     * Indicate partially shipped item.
     */
    public function partiallyShipped(): static
    {
        return $this->state(function (array $attributes) {
            $ordered = $attributes['quantity_ordered'];
            $shipped = $this->faker->numberBetween(1, $ordered - 1);

            return [
                'quantity_shipped' => $shipped,
                'status' => SalesOrderItem::STATUS_PARTIALLY_SHIPPED,
            ];
        });
    }

    /**
     * Indicate shipped item.
     */
    public function shipped(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'quantity_shipped' => $attributes['quantity_ordered'],
                'status' => SalesOrderItem::STATUS_SHIPPED,
            ];
        });
    }

    /**
     * Indicate cancelled item.
     */
    public function cancelled(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'quantity_shipped' => 0,
                'status' => SalesOrderItem::STATUS_CANCELLED,
                'notes' => 'Item cancelled: ' . $this->faker->sentence(),
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
     * Set for a specific sales order.
     */
    public function forSalesOrder(int $salesOrderId): static
    {
        return $this->state(function (array $attributes) use ($salesOrderId) {
            return [
                'sales_order_id' => $salesOrderId,
            ];
        });
    }

    /**
     * Set specific quantity.
     */
    public function withQuantity(int $ordered, float $unitPrice, float $discountPercent = 0, int $shipped = 0): static
    {
        return $this->state(function (array $attributes) use ($ordered, $unitPrice, $discountPercent, $shipped) {
            return [
                'quantity_ordered' => $ordered,
                'quantity_shipped' => $shipped,
                'unit_price' => $unitPrice,
                'discount_percent' => $discountPercent,
                'status' => $this->determineStatus($ordered, $shipped),
            ];
        });
    }

    /**
     * Set high value item.
     */
    public function highValue(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'unit_price' => $this->faker->randomFloat(2, 500, 5000),
                'quantity_ordered' => $this->faker->numberBetween(1, 3),
            ];
        });
    }

    /**
     * Set bulk item (low price, high quantity).
     */
    public function bulkItem(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'unit_price' => $this->faker->randomFloat(2, 1, 20),
                'quantity_ordered' => $this->faker->numberBetween(50, 500),
            ];
        });
    }

    /**
     * Set discounted item.
     */
    public function discounted(?float $discountPercent = null): static
    {
        return $this->state(function (array $attributes) use ($discountPercent) {
            return [
                'discount_percent' => $discountPercent ?? $this->faker->randomFloat(2, 5, 25),
            ];
        });
    }

    /**
     * Set taxable item.
     */
    public function taxable(?float $taxPercent = null): static
    {
        return $this->state(function (array $attributes) use ($taxPercent) {
            return [
                'tax_percent' => $taxPercent ?? $this->faker->randomFloat(2, 5, 12),
            ];
        });
    }

    /**
     * Set tax-exempt item.
     */
    public function taxExempt(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'tax_percent' => 0,
            ];
        });
    }

    /**
     * Create item with shipment items.
     */
    public function withShipmentItems(int $count = 1): static
    {
        return $this->afterCreating(function (SalesOrderItem $item) use ($count) {
            if (class_exists('ShipmentItem')) {
                for ($i = 0; $i < $count; $i++) {
                    ShipmentItem::factory()
                        ->forSalesOrderItem($item->id)
                        ->create();
                }
            }
        });
    }

    /**
     * Create item with batch tracking.
     */
    public function withBatch(): static
    {
        return $this->afterCreating(function (SalesOrderItem $item) {
            if ($item->quantity_shipped > 0 && class_exists('ShipmentItem')) {
                ShipmentItem::factory()
                    ->forSalesOrderItem($item->id)
                    ->withBatch()
                    ->create();
            }
        });
    }

    /**
     * Create item with serial numbers.
     */
    public function withSerialNumbers(int $count = 1): static
    {
        return $this->afterCreating(function (SalesOrderItem $item) use ($count) {
            if ($item->quantity_shipped > 0 && class_exists('ShipmentItem')) {
                for ($i = 0; $i < min($count, $item->quantity_shipped); $i++) {
                    ShipmentItem::factory()
                        ->forSalesOrderItem($item->id)
                        ->withSerial()
                        ->create();
                }
            }
        });
    }
}
