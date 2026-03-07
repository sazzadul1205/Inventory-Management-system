<?php
// database/factories/PurchaseOrderFactory.php

namespace Database\Factories;

use App\Models\Product;
use App\Models\PurchaseOrder;
use App\Models\PurchaseOrderItem;
use App\Models\PurchaseReceipt;
use App\Models\Supplier;
use App\Models\Warehouse;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<PurchaseOrder>
 */
class PurchaseOrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PurchaseOrder::class;

    /**
     * Payment terms options
     */
    protected array $paymentTerms = [
        'Net 30',
        'Net 45',
        'Net 60',
        'Due on Receipt',
        '2/10 Net 30',
        '1/10 Net 30',
        'COD',
        'Prepaid',
        'Letter of Credit'
    ];

    /**
     * Shipping methods
     */
    protected array $shippingMethods = [
        'Standard Ground',
        'Expedited',
        'Next Day Air',
        '2-Day Air',
        'Freight - LTL',
        'Freight - FTL',
        'Air Freight',
        'Ocean Freight',
        'Rail Freight',
        'Courier',
        'Pickup'
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $supplier = Supplier::inRandomOrder()->first() ?? Supplier::factory()->create();
        $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
        $user = User::inRandomOrder()->first() ?? User::factory()->create();

        $status = $this->getRandomStatus();
        $orderDate = $this->getOrderDateForStatus($status);
        $expectedDeliveryDate = $this->getExpectedDeliveryDate($orderDate, $supplier);
        $actualDeliveryDate = $this->getActualDeliveryDate($status, $expectedDeliveryDate);

        $subtotal = $this->faker->randomFloat(2, 500, 50000);
        $taxAmount = $subtotal * 0.08; // 8% tax
        $shippingCost = $this->faker->randomFloat(2, 20, 500);
        $totalAmount = $subtotal + $taxAmount + $shippingCost;

        // Ensure created_at is a Carbon instance
        $createdAt = Carbon::instance($orderDate)->setTimeFromTimeString($this->faker->time());

        return [
            'po_number' => $this->generatePONumber(),
            'supplier_id' => $supplier->id,
            'warehouse_id' => $warehouse->id,
            'order_date' => $orderDate,
            'expected_delivery_date' => $expectedDeliveryDate,
            'actual_delivery_date' => $actualDeliveryDate,
            'status' => $status,
            'payment_terms' => $this->faker->randomElement($this->paymentTerms),
            'shipping_method' => $this->faker->randomElement($this->shippingMethods),
            'tracking_number' => $this->faker->optional(0.4)->bothify('TRK-##########'),
            'subtotal' => $subtotal,
            'tax_amount' => $taxAmount,
            'shipping_cost' => $shippingCost,
            'total_amount' => $totalAmount,
            'notes' => $this->faker->optional(0.3)->paragraph(),
            'created_by' => $user->id,
            'approved_by' => $this->getApprovedByForStatus($status, $user),
            'created_at' => $createdAt,
            'updated_at' => function (array $attributes) use ($createdAt) {
                // Ensure created_at is not greater than now
                $now = Carbon::now();

                // If created_at is in the future, use now as the start
                $startDate = $createdAt <= $now ? $createdAt : $now;

                // Make sure start date is before end date
                if ($startDate >= $now) {
                    return $now;
                }

                try {
                    return $this->faker->dateTimeBetween($startDate, $now);
                } catch (\InvalidArgumentException $e) {
                    // Fallback to a safe date
                    return $this->faker->dateTimeBetween($now->copy()->subDays(1), $now);
                }
            },
        ];
    }

    /**
     * Generate a unique PO number.
     */
    protected function generatePONumber(): string
    {
        $prefix = 'PO';
        $year = now()->format('Y');
        $month = now()->format('m');

        // Use a static array to track generated numbers in memory
        static $generatedNumbers = [];

        $attempts = 0;
        $maxAttempts = 100;

        do {
            $random = $this->faker->numberBetween(1000, 9999);
            $poNumber = "{$prefix}-{$year}{$month}-{$random}";
            $attempts++;

            // Check if already generated in this factory instance
            $exists = in_array($poNumber, $generatedNumbers);

            // Check if exists in database
            if (!$exists) {
                $exists = PurchaseOrder::where('po_number', $poNumber)->exists();
            }

            if ($attempts >= $maxAttempts) {
                // Fallback: add timestamp to ensure uniqueness
                $poNumber = "{$prefix}-{$year}{$month}-" . time() . '-' . rand(100, 999);
                break;
            }
        } while ($exists);

        $generatedNumbers[] = $poNumber;

        return $poNumber;
    }

    /**
     * Get random status with realistic distribution.
     */
    protected function getRandomStatus(): string
    {
        $statuses = [
            PurchaseOrder::STATUS_DRAFT => 10,
            PurchaseOrder::STATUS_PENDING => 15,
            PurchaseOrder::STATUS_APPROVED => 20,
            PurchaseOrder::STATUS_SHIPPED => 15,
            PurchaseOrder::STATUS_PARTIALLY_RECEIVED => 15,
            PurchaseOrder::STATUS_RECEIVED => 20,
            PurchaseOrder::STATUS_CANCELLED => 5,
        ];

        $rand = $this->faker->numberBetween(1, 100);
        $cumulative = 0;

        foreach ($statuses as $status => $probability) {
            $cumulative += $probability;
            if ($rand <= $cumulative) {
                return $status;
            }
        }

        return PurchaseOrder::STATUS_DRAFT;
    }

    /**
     * Get order date based on status.
     */
    protected function getOrderDateForStatus(string $status): \DateTime
    {
        $now = Carbon::now();

        try {
            return match ($status) {
                PurchaseOrder::STATUS_RECEIVED,
                PurchaseOrder::STATUS_CANCELLED,
                PurchaseOrder::STATUS_PARTIALLY_RECEIVED => $this->faker->dateTimeBetween(
                    $now->copy()->subMonths(6)->startOfDay(),
                    $now->copy()->subMonths(1)->endOfDay()
                ),

                PurchaseOrder::STATUS_SHIPPED,
                PurchaseOrder::STATUS_APPROVED => $this->faker->dateTimeBetween(
                    $now->copy()->subMonths(3)->startOfDay(),
                    $now->copy()->subWeek()->endOfDay()
                ),

                PurchaseOrder::STATUS_PENDING => $this->faker->dateTimeBetween(
                    $now->copy()->subMonth()->startOfDay(),
                    $now->copy()->subDay()->endOfDay()
                ),

                PurchaseOrder::STATUS_DRAFT => $this->faker->dateTimeBetween(
                    $now->copy()->subWeek()->startOfDay(),
                    $now
                ),

                default => $this->faker->dateTimeBetween(
                    $now->copy()->subMonths(3),
                    $now
                ),
            };
        } catch (\InvalidArgumentException $e) {
            // Fallback to a safe date if there's any issue
            return $this->faker->dateTimeBetween($now->copy()->subDays(30), $now);
        }
    }

    /**
     * Get expected delivery date based on order date and supplier.
     */
    protected function getExpectedDeliveryDate(\DateTime $orderDate, Supplier $supplier): \DateTime
    {
        $leadTime = $supplier->default_lead_time ?? $this->faker->numberBetween(3, 21);
        $orderDateTime = \Carbon\Carbon::instance($orderDate);

        return $orderDateTime->addDays($leadTime)->setTime(0, 0, 0);
    }

    /**
     * Get actual delivery date based on status.
     */
    protected function getActualDeliveryDate(string $status, \DateTime $expectedDate): ?\DateTime
    {
        if (!in_array($status, [
            PurchaseOrder::STATUS_RECEIVED,
            PurchaseOrder::STATUS_PARTIALLY_RECEIVED
        ])) {
            return null;
        }

        $expectedCarbon = Carbon::instance($expectedDate);

        // Ensure start date is before end date
        $startDate = $expectedCarbon->copy()->subDays(5);
        $endDate = $expectedCarbon->copy()->addDays(10);

        // Make sure start date is not after end date
        if ($startDate > $endDate) {
            // Swap if they're in wrong order
            $temp = $startDate;
            $startDate = $endDate;
            $endDate = $temp;
        }

        return $this->faker->dateTimeBetween($startDate, $endDate);
    }

    /**
     * Get approved by user ID based on status.
     */
    protected function getApprovedByForStatus(string $status, User $defaultUser): ?int
    {
        $approvedStatuses = [
            PurchaseOrder::STATUS_APPROVED,
            PurchaseOrder::STATUS_SHIPPED,
            PurchaseOrder::STATUS_PARTIALLY_RECEIVED,
            PurchaseOrder::STATUS_RECEIVED
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
                'status' => PurchaseOrder::STATUS_DRAFT,
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
                'status' => PurchaseOrder::STATUS_PENDING,
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
                'status' => PurchaseOrder::STATUS_APPROVED,
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
                'status' => PurchaseOrder::STATUS_SHIPPED,
                'actual_delivery_date' => null,
                'tracking_number' => $this->faker->bothify('TRK-##########'),
            ];
        });
    }

    /**
     * Indicate received status.
     */
    public function received(): static
    {
        $now = Carbon::now();
        $orderDate = $this->faker->dateTimeBetween(
            $now->copy()->subMonths(6),
            $now->copy()->subMonths(3)
        );

        $expectedDate = $this->faker->dateTimeBetween(
            Carbon::instance($orderDate)->addDays(3),
            Carbon::instance($orderDate)->addDays(21)
        );

        // Ensure actual delivery date is after expected date
        $actualDate = $this->faker->dateTimeBetween(
            $expectedDate,
            $now
        );

        return $this->state(function (array $attributes) use ($orderDate, $expectedDate, $actualDate) {
            return [
                'status' => PurchaseOrder::STATUS_RECEIVED,
                'order_date' => $orderDate,
                'expected_delivery_date' => $expectedDate,
                'actual_delivery_date' => $actualDate,
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
                'status' => PurchaseOrder::STATUS_PARTIALLY_RECEIVED,
                'actual_delivery_date' => null,
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
                'status' => PurchaseOrder::STATUS_CANCELLED,
                'approved_by' => null,
                'actual_delivery_date' => null,
                'notes' => 'Order cancelled: ' . $this->faker->sentence(),
            ];
        });
    }

    /**
     * Indicate overdue order.
     */
    public function overdue(): static
    {
        $now = Carbon::now();

        try {
            $expectedDate = $this->faker->dateTimeBetween(
                $now->copy()->subDays(30),
                $now->copy()->subDays(5)
            );
        } catch (\InvalidArgumentException $e) {
            $expectedDate = $now->copy()->subDays(10);
        }

        try {
            $orderDate = $this->faker->dateTimeBetween(
                Carbon::instance($expectedDate)->subDays(21),
                Carbon::instance($expectedDate)->subDays(7)
            );
        } catch (\InvalidArgumentException $e) {
            $orderDate = Carbon::instance($expectedDate)->subDays(14);
        }

        return $this->state(function (array $attributes) use ($orderDate, $expectedDate) {
            return [
                'status' => PurchaseOrder::STATUS_APPROVED,
                'order_date' => $orderDate,
                'expected_delivery_date' => $expectedDate,
                'actual_delivery_date' => null,
                'notes' => 'Overdue - follow up with supplier',
            ];
        });
    }

    /**
     * Indicate high value order.
     */
    public function highValue(): static
    {
        return $this->state(function (array $attributes) {
            $subtotal = $this->faker->randomFloat(2, 50000, 500000);
            $taxAmount = $subtotal * 0.08;
            $shippingCost = $this->faker->randomFloat(2, 500, 5000);

            return [
                'subtotal' => $subtotal,
                'tax_amount' => $taxAmount,
                'shipping_cost' => $shippingCost,
                'total_amount' => $subtotal + $taxAmount + $shippingCost,
                'notes' => 'High value purchase order - requires additional approval',
            ];
        });
    }

    /**
     * Indicate urgent order (expedited shipping).
     */
    public function urgent(): static
    {
        return $this->state(function (array $attributes) {
            $now = Carbon::now();
            $expectedDate = $now->copy()->addDays($this->faker->numberBetween(2, 5));

            return [
                'shipping_method' => $this->faker->randomElement(['Next Day Air', '2-Day Air', 'Expedited']),
                'expected_delivery_date' => $expectedDate,
                'shipping_cost' => $this->faker->randomFloat(2, 100, 500),
            ];
        });
    }

    /**
     * Set for specific supplier.
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
     * Set for specific warehouse.
     */
    public function toWarehouse(int $warehouseId): static
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
     * Create PO with items.
     */
    /**
     * Create PO with items.
     */
    public function withItems(int $count = 3): static
    {
        return $this->afterCreating(function (PurchaseOrder $po) use ($count) {
            if (class_exists('PurchaseOrderItem')) {
                // Get all product IDs that might already be used
                $usedProductIds = $po->items()->pluck('product_id')->toArray();

                // Get random products excluding already used ones
                $products = Product::whereNotIn('id', $usedProductIds)
                    ->inRandomOrder()
                    ->limit($count)
                    ->get();

                // If we don't have enough products, get more from the pool
                if ($products->count() < $count) {
                    $additionalNeeded = $count - $products->count();
                    $additionalProducts = Product::inRandomOrder()
                        ->limit($additionalNeeded)
                        ->get();
                    $products = $products->concat($additionalProducts);
                }

                foreach ($products as $index => $product) {
                    $quantity = $this->faker->numberBetween(1, 100);
                    $unitPrice = $product->lowest_unit_cost ?? $this->faker->randomFloat(2, 10, 500);
                    $received = $this->calculateReceivedQuantity($po->status, $quantity);

                    PurchaseOrderItem::factory()
                        ->forProduct($product->id)
                        ->forPurchaseOrder($po->id)
                        ->withQuantity($quantity, $unitPrice, $received)
                        ->create();
                }

                // Recalculate PO totals
                $po->calculateTotals();
            }
        });
    }

    /**
     * Calculate received quantity based on PO status.
     */
    protected function calculateReceivedQuantity(string $status, int $ordered): int
    {
        return match ($status) {
            PurchaseOrder::STATUS_RECEIVED => $ordered,
            PurchaseOrder::STATUS_PARTIALLY_RECEIVED => $this->faker->numberBetween(1, $ordered - 1),
            default => 0,
        };
    }

    /**
     * Create PO with receipts.
     */
    public function withReceipts(int $count = 1): static
    {
        return $this->afterCreating(function (PurchaseOrder $po) use ($count) {
            if (class_exists('PurchaseReceipt') && $po->items()->exists()) {
                for ($i = 0; $i < $count; $i++) {
                    PurchaseReceipt::factory()
                        ->forPurchaseOrder($po->id)
                        ->create();
                }

                // Update PO status based on receipts
                $po->updateStatus();
            }
        });
    }

    /**
     * Create fully loaded PO with items and receipts.
     */
    /**
     * Create fully loaded PO with items and receipts.
     */
    public function fullyLoaded(): static
    {
        return $this->afterCreating(function (PurchaseOrder $po) {
            $itemCount = $this->faker->numberBetween(2, 5);
            if (class_exists('PurchaseOrderItem')) {
                // Get products not already in this PO
                $usedProductIds = $po->items()->pluck('product_id')->toArray();

                $products = Product::whereNotIn('id', $usedProductIds)
                    ->inRandomOrder()
                    ->limit($itemCount)
                    ->get();

                // If we don't have enough products, get more
                if ($products->count() < $itemCount) {
                    $additionalNeeded = $itemCount - $products->count();
                    $additionalProducts = Product::inRandomOrder()
                        ->limit($additionalNeeded)
                        ->get();
                    $products = $products->concat($additionalProducts);
                }

                foreach ($products as $product) {
                    $quantity = $this->faker->numberBetween(1, 100);
                    $unitPrice = $product->lowest_unit_cost ?? $this->faker->randomFloat(2, 10, 500);
                    $received = $this->calculateReceivedQuantity($po->status, $quantity);

                    PurchaseOrderItem::factory()
                        ->forProduct($product->id)
                        ->forPurchaseOrder($po->id)
                        ->withQuantity($quantity, $unitPrice, $received)
                        ->create();
                }

                $po->calculateTotals();
            }

            if (in_array($po->status, [
                PurchaseOrder::STATUS_PARTIALLY_RECEIVED,
                PurchaseOrder::STATUS_RECEIVED
            ])) {
                $receiptCount = $po->status === PurchaseOrder::STATUS_RECEIVED ? 1 : $this->faker->numberBetween(1, 2);

                if (class_exists('PurchaseReceipt') && $po->items()->exists()) {
                    for ($i = 0; $i < $receiptCount; $i++) {
                        PurchaseReceipt::factory()
                            ->forPurchaseOrder($po->id)
                            ->create();
                    }

                    $po->updateStatus();
                }
            }
        });
    }
}
