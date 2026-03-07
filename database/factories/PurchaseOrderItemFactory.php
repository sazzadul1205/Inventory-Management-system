<?php
// database/factories/PurchaseOrderItemFactory.php

namespace Database\Factories;

use App\Models\PurchaseOrderItem;
use App\Models\PurchaseOrder;
use App\Models\Product;
use App\Models\PurchaseReceiptItem;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<PurchaseOrderItem>
 */
class PurchaseOrderItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PurchaseOrderItem::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $product = Product::inRandomOrder()->first() ?? Product::factory()->create();
        $purchaseOrder = PurchaseOrder::inRandomOrder()->first() ?? PurchaseOrder::factory()->create();

        $quantityOrdered = $this->getQuantityForProduct($product);
        $unitPrice = $this->getUnitPriceForProduct($product);
        $quantityReceived = $this->getQuantityReceived($purchaseOrder->status, $quantityOrdered);

        $discountPercent = $this->faker->optional(0.3, 0)->randomFloat(2, 0, 15) ?? 0;
        $taxPercent = $this->faker->optional(0.8, 0)->randomFloat(2, 5, 12) ?? 0;

        // Safely generate updated_at date
        $createdAt = $purchaseOrder->created_at ?? now()->subDays(rand(1, 30));
        $now = now();

        // Ensure created_at is not greater than now
        $startDate = $createdAt <= $now ? $createdAt : $now;

        try {
            $updatedAt = $this->faker->dateTimeBetween($startDate, $now);
        } catch (\InvalidArgumentException $e) {
            $updatedAt = $this->faker->dateTimeBetween($now->copy()->subDays(1), $now);
        }

        return [
            'purchase_order_id' => $purchaseOrder->id,
            'product_id' => $product->id,
            'quantity_ordered' => $quantityOrdered,
            'quantity_received' => $quantityReceived,
            'quantity_remaining' => $quantityOrdered - $quantityReceived,
            'unit_price' => $unitPrice,
            'discount_percent' => $discountPercent,
            'tax_percent' => $taxPercent,
            'expected_delivery_date' => $this->getExpectedDeliveryDate($purchaseOrder),
            'status' => $this->determineStatus($quantityOrdered, $quantityReceived),
            'notes' => $this->faker->optional(0.2)->sentence(),
            'created_at' => $createdAt,
            'updated_at' => $updatedAt,
        ];
    }

    /**
     * Get appropriate quantity based on product type.
     */
    protected function getQuantityForProduct(Product $product): int
    {
        $categoryName = $product->category?->name ?? 'Default';

        $ranges = [
            'Electronics' => [1, 50],
            'Computers' => [1, 20],
            'Smartphones' => [5, 100],
            'Furniture' => [1, 15],
            'Office Supplies' => [10, 500],
            'Raw Materials' => [100, 5000],
            'Consumables' => [24, 1000],
            'Tools' => [5, 50],
            'Automotive' => [10, 200],
            'Pharmaceuticals' => [50, 1000],
            'Food & Beverages' => [50, 2000],
            'Default' => [1, 100]
        ];

        $range = $ranges[$categoryName] ?? $ranges['Default'];

        return $this->faker->numberBetween($range[0], $range[1]);
    }

    /**
     * Get unit price based on product.
     */
    protected function getUnitPriceForProduct(Product $product): float
    {
        // Try to get from product-supplier relationship
        $productSupplier = $product->productSuppliers()->inRandomOrder()->first();

        if ($productSupplier) {
            return $productSupplier->unit_cost;
        }

        // Fallback to category-based pricing
        $categoryName = $product->category?->name ?? 'Default';

        $priceRanges = [
            'Electronics' => [50, 2000],
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
            'Default' => [10, 200]
        ];

        $range = $priceRanges[$categoryName] ?? $priceRanges['Default'];

        return $this->faker->randomFloat(2, $range[0], $range[1]);
    }

    /**
     * Get quantity received based on PO status.
     */
    protected function getQuantityReceived(string $poStatus, int $ordered): int
    {
        return match ($poStatus) {
            PurchaseOrder::STATUS_RECEIVED => $ordered,
            PurchaseOrder::STATUS_PARTIALLY_RECEIVED => $this->faker->numberBetween(1, $ordered - 1),
            default => 0,
        };
    }

    /**
     * Get expected delivery date.
     */
    protected function getExpectedDeliveryDate(PurchaseOrder $purchaseOrder): mixed
    {
        // If PO has an expected delivery date, use it
        if ($purchaseOrder->expected_delivery_date) {
            return $purchaseOrder->expected_delivery_date;
        }

        // Otherwise generate a random date, but ensure it's valid
        if ($this->faker->boolean(70)) {
            try {
                $now = now();
                $futureDate = $this->faker->dateTimeBetween('now', '+30 days');

                // Ensure the future date is actually in the future
                if ($futureDate < $now) {
                    return $now->copy()->addDays(rand(1, 30));
                }

                return $futureDate;
            } catch (\InvalidArgumentException $e) {
                // Fallback to a safe date
                return now()->addDays(rand(5, 15));
            }
        }

        return null;
    }

    /**
     * Determine item status based on quantities.
     */
    protected function determineStatus(int $ordered, int $received): string
    {
        if ($received <= 0) {
            return PurchaseOrderItem::STATUS_PENDING;
        }

        if ($received >= $ordered) {
            return PurchaseOrderItem::STATUS_RECEIVED;
        }

        return PurchaseOrderItem::STATUS_PARTIALLY_RECEIVED;
    }

    /**
     * Indicate pending item.
     */
    public function pending(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'quantity_received' => 0,
                'quantity_remaining' => $attributes['quantity_ordered'],
                'status' => PurchaseOrderItem::STATUS_PENDING,
            ];
        });
    }

    /**
     * Indicate partially received item.
     */
    public function partiallyReceived(): static
    {
        return $this->state(function (array $attributes) {
            $received = $this->faker->numberBetween(1, $attributes['quantity_ordered'] - 1);
            return [
                'quantity_received' => $received,
                'quantity_remaining' => $attributes['quantity_ordered'] - $received,
                'status' => PurchaseOrderItem::STATUS_PARTIALLY_RECEIVED,
            ];
        });
    }

    /**
     * Indicate received item.
     */
    public function received(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'quantity_received' => $attributes['quantity_ordered'],
                'quantity_remaining' => 0,
                'status' => PurchaseOrderItem::STATUS_RECEIVED,
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
                'quantity_received' => 0,
                'quantity_remaining' => 0,
                'status' => PurchaseOrderItem::STATUS_CANCELLED,
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
     * Set for a specific purchase order.
     */
    public function forPurchaseOrder(int $purchaseOrderId): static
    {
        return $this->state(function (array $attributes) use ($purchaseOrderId) {
            return [
                'purchase_order_id' => $purchaseOrderId,
            ];
        });
    }

    /**
     * Set specific quantity.
     */
    public function withQuantity(int $ordered, float $unitPrice, int $received = 0): static
    {
        return $this->state(function (array $attributes) use ($ordered, $unitPrice, $received) {
            return [
                'quantity_ordered' => $ordered,
                'quantity_received' => $received,
                'quantity_remaining' => $ordered - $received,
                'unit_price' => $unitPrice,
                'status' => $this->determineStatus($ordered, $received),
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
                'quantity_ordered' => $this->faker->numberBetween(1, 5),
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
                'unit_price' => $this->faker->randomFloat(2, 0.5, 10),
                'quantity_ordered' => $this->faker->numberBetween(500, 5000),
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
     * Create item with receipt items.
     */
    public function withReceiptItems(int $count = 1): static
    {
        return $this->afterCreating(function (PurchaseOrderItem $item) use ($count) {
            if (class_exists('PurchaseReceiptItem')) {
                for ($i = 0; $i < $count; $i++) {
                    PurchaseReceiptItem::factory()
                        ->forPurchaseOrderItem($item->id)
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
        return $this->afterCreating(function (PurchaseOrderItem $item) {
            if ($item->quantity_received > 0 && class_exists('PurchaseReceiptItem')) {
                PurchaseReceiptItem::factory()
                    ->forPurchaseOrderItem($item->id)
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
        return $this->afterCreating(function (PurchaseOrderItem $item) use ($count) {
            if ($item->quantity_received > 0 && class_exists('PurchaseReceiptItem')) {
                for ($i = 0; $i < min($count, $item->quantity_received); $i++) {
                    PurchaseReceiptItem::factory()
                        ->forPurchaseOrderItem($item->id)
                        ->withSerial()
                        ->create();
                }
            }
        });
    }
}
