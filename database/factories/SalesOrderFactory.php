<?php
// database/factories/SalesOrderFactory.php

namespace Database\Factories;

use App\Models\SalesOrder;
use App\Models\Customer;
use App\Models\Product;
use App\Models\SalesOrderItem;
use App\Models\Shipment;
use App\Models\Warehouse;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<SalesOrder>
 */
class SalesOrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = SalesOrder::class;

    /**
     * Payment methods
     */
    protected array $paymentMethods = [
        'Credit Card',
        'Bank Transfer',
        'Check',
        'Cash',
        'PayPal',
        'Net 30',
        'Net 45',
        'Net 60',
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
        'Pickup',
        'Courier'
    ];

    /**
     * Carriers
     */
    protected array $carriers = [
        'UPS',
        'FedEx',
        'USPS',
        'DHL',
        'Amazon Logistics',
        'Freight Carrier',
        'Rail Carrier',
        'Ocean Carrier'
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $customer = Customer::inRandomOrder()->first() ?? Customer::factory()->create();
        $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
        $user = User::inRandomOrder()->first() ?? User::factory()->create();

        $status = $this->getRandomStatus();
        $orderDate = $this->getOrderDateForStatus($status);
        $requiredDate = $this->getRequiredDate($orderDate);
        $shippedDate = $this->getShippedDate($status, $requiredDate);

        $subtotal = $this->faker->randomFloat(2, 100, 10000);
        $discountAmount = $this->faker->optional(0.3)->randomFloat(2, 10, $subtotal * 0.2) ?? 0;
        $taxAmount = ($subtotal - $discountAmount) * 0.08; // 8% tax
        $shippingCost = $this->faker->randomFloat(2, 5, 200);
        $totalAmount = $subtotal - $discountAmount + $taxAmount + $shippingCost;

        $paymentStatus = $this->getPaymentStatusForOrder($status, $totalAmount);

        return [
            'so_number' => $this->generateSONumber(),
            'customer_id' => $customer->id,
            'warehouse_id' => $warehouse->id,
            'order_date' => $orderDate,
            'required_date' => $requiredDate,
            'shipped_date' => $shippedDate,
            'status' => $status,
            'shipping_address' => $customer->full_address ?? $this->faker->address(),
            'billing_address' => $customer->full_address ?? $this->faker->address(),
            'payment_status' => $paymentStatus,
            'payment_method' => $this->faker->optional(0.7)->randomElement($this->paymentMethods),
            'subtotal' => $subtotal,
            'tax_amount' => $taxAmount,
            'shipping_cost' => $shippingCost,
            'discount_amount' => $discountAmount,
            'total_amount' => $totalAmount,
            'notes' => $this->faker->optional(0.3)->sentence(),
            'created_by' => $user->id,
            'approved_by' => $this->getApprovedByForStatus($status, $user),
            'created_at' => $orderDate,
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Generate a unique SO number.
     */
    protected function generateSONumber(): string
    {
        $prefix = 'SO';
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
            SalesOrder::STATUS_DRAFT => 10,
            SalesOrder::STATUS_PENDING => 15,
            SalesOrder::STATUS_APPROVED => 15,
            SalesOrder::STATUS_PROCESSING => 15,
            SalesOrder::STATUS_PARTIALLY_SHIPPED => 10,
            SalesOrder::STATUS_SHIPPED => 15,
            SalesOrder::STATUS_DELIVERED => 15,
            SalesOrder::STATUS_CANCELLED => 5,
        ];

        $rand = $this->faker->numberBetween(1, 100);
        $cumulative = 0;

        foreach ($statuses as $status => $probability) {
            $cumulative += $probability;
            if ($rand <= $cumulative) {
                return $status;
            }
        }

        return SalesOrder::STATUS_DRAFT;
    }

    /**
     * Get order date based on status.
     */
    protected function getOrderDateForStatus(string $status): \DateTime
    {
        return match ($status) {
            SalesOrder::STATUS_DELIVERED,
            SalesOrder::STATUS_SHIPPED,
            SalesOrder::STATUS_CANCELLED => $this->faker->dateTimeBetween('-6 months', '-1 month'),

            SalesOrder::STATUS_PARTIALLY_SHIPPED,
            SalesOrder::STATUS_PROCESSING,
            SalesOrder::STATUS_APPROVED => $this->faker->dateTimeBetween('-3 months', '-1 week'),

            SalesOrder::STATUS_PENDING => $this->faker->dateTimeBetween('-1 month', '-1 day'),

            SalesOrder::STATUS_DRAFT => $this->faker->dateTimeBetween('-1 week', 'now'),

            default => $this->faker->dateTimeBetween('-3 months', 'now'),
        };
    }

    /**
     * Get required delivery date.
     */
    protected function getRequiredDate(\DateTime $orderDate): \DateTime
    {
        $orderDateTime = \Carbon\Carbon::instance($orderDate);
        return $orderDateTime->addDays($this->faker->numberBetween(3, 21));
    }

    /**
     * Get shipped date based on status.
     */
    protected function getShippedDate(string $status, \DateTime $requiredDate): ?\DateTime
    {
        return match ($status) {
            SalesOrder::STATUS_SHIPPED,
            SalesOrder::STATUS_DELIVERED => $this->faker->dateTimeBetween(
                $requiredDate->modify('-5 days'),
                $requiredDate->modify('+10 days')
            ),

            SalesOrder::STATUS_PARTIALLY_SHIPPED => $this->faker->dateTimeBetween(
                $requiredDate->modify('-2 days'),
                $requiredDate->modify('+5 days')
            ),

            default => null,
        };
    }

    /**
     * Get payment status based on order status and amount.
     */
    protected function getPaymentStatusForOrder(string $status, float $totalAmount): string
    {
        if ($status === SalesOrder::STATUS_CANCELLED) {
            return SalesOrder::PAYMENT_REFUNDED;
        }

        if ($status === SalesOrder::STATUS_DRAFT || $status === SalesOrder::STATUS_PENDING) {
            return SalesOrder::PAYMENT_PENDING;
        }

        $rand = $this->faker->numberBetween(1, 100);

        return match (true) {
            $rand <= 70 => SalesOrder::PAYMENT_PAID,
            $rand <= 90 => SalesOrder::PAYMENT_PARTIALLY_PAID,
            default => SalesOrder::PAYMENT_PENDING,
        };
    }

    /**
     * Get approved by user ID based on status.
     */
    protected function getApprovedByForStatus(string $status, User $defaultUser): ?int
    {
        $approvedStatuses = [
            SalesOrder::STATUS_APPROVED,
            SalesOrder::STATUS_PROCESSING,
            SalesOrder::STATUS_PARTIALLY_SHIPPED,
            SalesOrder::STATUS_SHIPPED,
            SalesOrder::STATUS_DELIVERED
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
                'status' => SalesOrder::STATUS_DRAFT,
                'approved_by' => null,
                'shipped_date' => null,
                'payment_status' => SalesOrder::PAYMENT_PENDING,
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
                'status' => SalesOrder::STATUS_PENDING,
                'approved_by' => null,
                'shipped_date' => null,
                'payment_status' => SalesOrder::PAYMENT_PENDING,
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
                'status' => SalesOrder::STATUS_APPROVED,
                'shipped_date' => null,
                'payment_status' => SalesOrder::PAYMENT_PENDING,
            ];
        });
    }

    /**
     * Indicate processing status.
     */
    public function processing(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => SalesOrder::STATUS_PROCESSING,
                'shipped_date' => null,
            ];
        });
    }

    /**
     * Indicate shipped status.
     */
    public function shipped(): static
    {
        $requiredDate = $this->faker->dateTimeBetween('-30 days', '-10 days');

        return $this->state(function (array $attributes) use ($requiredDate) {
            return [
                'status' => SalesOrder::STATUS_SHIPPED,
                'order_date' => $this->faker->dateTimeBetween('-45 days', '-31 days'),
                'required_date' => $requiredDate,
                'shipped_date' => $this->faker->dateTimeBetween($requiredDate->modify('-2 days'), $requiredDate->modify('+3 days')),
                'payment_status' => SalesOrder::PAYMENT_PAID,
            ];
        });
    }

    /**
     * Indicate delivered status.
     */
    public function delivered(): static
    {
        $shippedDate = $this->faker->dateTimeBetween('-60 days', '-30 days');

        return $this->state(function (array $attributes) use ($shippedDate) {
            return [
                'status' => SalesOrder::STATUS_DELIVERED,
                'order_date' => $this->faker->dateTimeBetween('-90 days', '-61 days'),
                'required_date' => $this->faker->dateTimeBetween('-75 days', '-45 days'),
                'shipped_date' => $shippedDate,
                'payment_status' => SalesOrder::PAYMENT_PAID,
            ];
        });
    }

    /**
     * Indicate partially shipped status.
     */
    public function partiallyShipped(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => SalesOrder::STATUS_PARTIALLY_SHIPPED,
                'payment_status' => $this->faker->randomElement([
                    SalesOrder::PAYMENT_PARTIALLY_PAID,
                    SalesOrder::PAYMENT_PAID
                ]),
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
                'status' => SalesOrder::STATUS_CANCELLED,
                'payment_status' => SalesOrder::PAYMENT_REFUNDED,
                'notes' => 'Order cancelled: ' . $this->faker->sentence(),
            ];
        });
    }

    /**
     * Indicate overdue order.
     */
    public function overdue(): static
    {
        $requiredDate = $this->faker->dateTimeBetween('-30 days', '-5 days');

        return $this->state(function (array $attributes) use ($requiredDate) {
            return [
                'status' => SalesOrder::STATUS_PROCESSING,
                'required_date' => $requiredDate,
                'shipped_date' => null,
                'notes' => 'Overdue - customer follow-up required',
            ];
        });
    }

    /**
     * Indicate high value order.
     */
    public function highValue(): static
    {
        return $this->state(function (array $attributes) {
            $subtotal = $this->faker->randomFloat(2, 10000, 100000);
            $discountAmount = $this->faker->optional(0.5)->randomFloat(2, 500, $subtotal * 0.1) ?? 0;
            $taxAmount = ($subtotal - $discountAmount) * 0.08;
            $shippingCost = $this->faker->randomFloat(2, 100, 500);

            return [
                'subtotal' => $subtotal,
                'discount_amount' => $discountAmount,
                'tax_amount' => $taxAmount,
                'shipping_cost' => $shippingCost,
                'total_amount' => $subtotal - $discountAmount + $taxAmount + $shippingCost,
                'notes' => 'High value order - priority processing',
            ];
        });
    }

    /**
     * Indicate urgent order (expedited shipping).
     */
    public function urgent(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'shipping_method' => $this->faker->randomElement(['Next Day Air', '2-Day Air', 'Expedited']),
                'required_date' => now()->addDays($this->faker->numberBetween(1, 3)),
                'shipping_cost' => $this->faker->randomFloat(2, 50, 200),
            ];
        });
    }

    /**
     * Set for specific customer.
     */
    public function forCustomer(int $customerId): static
    {
        return $this->state(function (array $attributes) use ($customerId) {
            return [
                'customer_id' => $customerId,
            ];
        });
    }

    /**
     * Set for specific warehouse.
     */
    public function fromWarehouse(int $warehouseId): static
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
     * Set payment status.
     */
    public function withPaymentStatus(string $status): static
    {
        return $this->state(function (array $attributes) use ($status) {
            return [
                'payment_status' => $status,
            ];
        });
    }

    /**
     * Create SO with items.
     */
    public function withItems(int $count = 3): static
    {
        return $this->afterCreating(function (SalesOrder $so) use ($count) {
            if (class_exists('SalesOrderItem')) {
                $products = Product::inRandomOrder()->limit($count)->get();

                foreach ($products as $index => $product) {
                    $quantity = $this->faker->numberBetween(1, 20);
                    $unitPrice = $product->lowest_unit_cost ?? $this->faker->randomFloat(2, 10, 500);
                    $discountPercent = $this->faker->optional(0.3)->randomFloat(2, 0, 15) ?? 0;

                    $shipped = $this->calculateShippedQuantity($so->status, $quantity);

                    SalesOrderItem::factory()
                        ->forProduct($product->id)
                        ->forSalesOrder($so->id)
                        ->withQuantity($quantity, $unitPrice, $discountPercent, $shipped)
                        ->create();
                }

                // Recalculate SO totals
                $so->calculateTotals();
            }
        });
    }

    /**
     * Calculate shipped quantity based on SO status.
     */
    protected function calculateShippedQuantity(string $status, int $ordered): int
    {
        return match ($status) {
            SalesOrder::STATUS_SHIPPED,
            SalesOrder::STATUS_DELIVERED => $ordered,
            SalesOrder::STATUS_PARTIALLY_SHIPPED => $this->faker->numberBetween(1, $ordered - 1),
            default => 0,
        };
    }

    /**
     * Create SO with shipments.
     */
    public function withShipments(int $count = 1): static
    {
        return $this->afterCreating(function (SalesOrder $so) use ($count) {
            if (class_exists('Shipment') && $so->items()->exists()) {
                for ($i = 0; $i < $count; $i++) {
                    Shipment::factory()
                        ->forSalesOrder($so->id)
                        ->create();
                }

                // Update SO status based on shipments
                $so->updateStatus();
            }
        });
    }

    /**
     * Create fully loaded SO with items and shipments.
     */
    public function fullyLoaded(): static
    {
        return $this->afterCreating(function (SalesOrder $so) {
            $itemCount = $this->faker->numberBetween(2, 5);
            if (class_exists('SalesOrderItem')) {
                $products = Product::inRandomOrder()->limit($itemCount)->get();

                foreach ($products as $product) {
                    $quantity = $this->faker->numberBetween(1, 20);
                    $unitPrice = $product->lowest_unit_cost ?? $this->faker->randomFloat(2, 10, 500);
                    $discountPercent = $this->faker->optional(0.3)->randomFloat(2, 0, 15) ?? 0;
                    $shipped = $this->calculateShippedQuantity($so->status, $quantity);

                    SalesOrderItem::factory()
                        ->forProduct($product->id)
                        ->forSalesOrder($so->id)
                        ->withQuantity($quantity, $unitPrice, $discountPercent, $shipped)
                        ->create();
                }

                $so->calculateTotals();
            }

            if (in_array($so->status, [
                SalesOrder::STATUS_PARTIALLY_SHIPPED,
                SalesOrder::STATUS_SHIPPED,
                SalesOrder::STATUS_DELIVERED
            ])) {
                $shipmentCount = $so->status === SalesOrder::STATUS_DELIVERED ? 1 : $this->faker->numberBetween(1, 2);

                if (class_exists('Shipment') && $so->items()->exists()) {
                    for ($i = 0; $i < $shipmentCount; $i++) {
                        Shipment::factory()
                            ->forSalesOrder($so->id)
                            ->create();
                    }

                    $so->updateStatus();
                }
            }
        });
    }

    /**
     * Create SO with credit check issues.
     */
    public function withCreditIssue(): static
    {
        return $this->state(function (array $attributes) {
            $customer = Customer::find($attributes['customer_id']);
            $creditLimit = $customer->credit_limit ?? 10000;

            return [
                'total_amount' => $creditLimit * 1.2, // Exceed credit limit by 20%
                'notes' => 'Credit limit exceeded - requires approval',
            ];
        });
    }
}
