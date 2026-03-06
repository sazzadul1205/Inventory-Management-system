<?php
// database/factories/ShipmentFactory.php

namespace Database\Factories;

use App\Models\Location;
use App\Models\Product;
use App\Models\Shipment;
use App\Models\SalesOrder;
use App\Models\ShipmentItem;
use App\Models\Warehouse;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Shipment>
 */
class ShipmentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Shipment::class;

    /**
     * Carriers list
     */
    protected array $carriers = [
        'UPS',
        'FedEx',
        'USPS',
        'DHL',
        'Amazon Logistics',
        'Canada Post',
        'Royal Mail',
        'Deutsche Post',
        'Japan Post',
        'Freight Carrier',
        'Rail Carrier',
        'Ocean Carrier'
    ];

    /**
     * Shipping methods by carrier
     */
    protected array $shippingMethods = [
        'UPS' => ['Ground', '2nd Day Air', 'Next Day Air', '3 Day Select', 'Ground Saver'],
        'FedEx' => ['Ground', 'Express Saver', '2Day', 'Priority Overnight', 'Standard Overnight'],
        'USPS' => ['First Class', 'Priority Mail', 'Express Mail', 'Media Mail', 'Parcel Select'],
        'DHL' => ['Express Worldwide', 'Express 12:00', 'Express 9:00', 'Economy Select'],
        'Amazon' => ['Standard', 'Expedited', 'Priority', 'Same Day'],
        'default' => ['Standard', 'Expedited', 'Priority', 'Economy']
    ];

    /**
     * Tracking number formats by carrier
     */
    protected array $trackingFormats = [
        'UPS' => '1Z##########',
        'FedEx' => '#############',
        'USPS' => '##############',
        'DHL' => '#############',
        'Amazon' => '#############',
        'default' => 'TRK###########'
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $salesOrder = SalesOrder::inRandomOrder()->first() ?? SalesOrder::factory()->create();
        $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
        $user = User::inRandomOrder()->first() ?? User::factory()->create();

        $status = $this->getRandomStatus();
        $carrier = $this->faker->randomElement($this->carriers);
        $shippingMethod = $this->getShippingMethodForCarrier($carrier);
        $shippedDate = $this->getShippedDateForStatus($status);
        $deliveryDate = $this->getDeliveryDateForStatus($status, $shippedDate);

        return [
            'shipment_number' => $this->generateShipmentNumber(),
            'sales_order_id' => $salesOrder->id,
            'warehouse_id' => $warehouse->id,
            'shipped_date' => $shippedDate,
            'delivery_date' => $deliveryDate,
            'carrier' => $this->faker->optional(0.8)->randomElement($this->carriers),
            'tracking_number' => $this->generateTrackingNumber($carrier),
            'shipping_method' => $shippingMethod,
            'shipping_cost' => $this->faker->randomFloat(2, 5, 200),
            'status' => $status,
            'notes' => $this->faker->optional(0.3)->sentence(),
            'shipped_by' => $user->id,
            'created_at' => $shippedDate,
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Generate a unique shipment number.
     */
    protected function generateShipmentNumber(): string
    {
        $prefix = 'SHIP';
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
            Shipment::STATUS_PENDING => 20,
            Shipment::STATUS_PACKED => 20,
            Shipment::STATUS_SHIPPED => 30,
            Shipment::STATUS_DELIVERED => 25,
            Shipment::STATUS_CANCELLED => 5,
        ];

        $rand = $this->faker->numberBetween(1, 100);
        $cumulative = 0;

        foreach ($statuses as $status => $probability) {
            $cumulative += $probability;
            if ($rand <= $cumulative) {
                return $status;
            }
        }

        return Shipment::STATUS_PENDING;
    }

    /**
     * Get shipped date based on status.
     */
    protected function getShippedDateForStatus(string $status): \DateTime
    {
        return match ($status) {
            Shipment::STATUS_DELIVERED => $this->faker->dateTimeBetween('-60 days', '-10 days'),
            Shipment::STATUS_SHIPPED => $this->faker->dateTimeBetween('-30 days', '-2 days'),
            Shipment::STATUS_PACKED => $this->faker->dateTimeBetween('-10 days', '-1 day'),
            Shipment::STATUS_PENDING => $this->faker->dateTimeBetween('-2 days', 'now'),
            default => $this->faker->dateTimeBetween('-30 days', 'now'),
        };
    }

    /**
     * Get delivery date based on status.
     */
    protected function getDeliveryDateForStatus(string $status, \DateTime $shippedDate): ?\DateTime
    {
        if ($status !== Shipment::STATUS_DELIVERED) {
            return null;
        }

        $transitDays = $this->faker->numberBetween(1, 10);
        $shippedDateTime = \Carbon\Carbon::instance($shippedDate);

        return $shippedDateTime->addDays($transitDays);
    }

    /**
     * Generate tracking number for carrier.
     */
    protected function generateTrackingNumber(?string $carrier): ?string
    {
        if (!$carrier) {
            return null;
        }

        $format = $this->trackingFormats[$carrier] ?? $this->trackingFormats['default'];

        return $this->faker->bothify($format);
    }

    /**
     * Get shipping method for carrier.
     */
    protected function getShippingMethodForCarrier(?string $carrier): ?string
    {
        if (!$carrier) {
            return null;
        }

        $methods = $this->shippingMethods[$carrier] ?? $this->shippingMethods['default'];

        return $this->faker->randomElement($methods);
    }

    /**
     * Indicate pending status.
     */
    public function pending(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => Shipment::STATUS_PENDING,
                'shipped_date' => now(),
                'delivery_date' => null,
                'carrier' => null,
                'tracking_number' => null,
                'shipping_method' => null,
            ];
        });
    }

    /**
     * Indicate packed status.
     */
    public function packed(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => Shipment::STATUS_PACKED,
                'shipped_date' => now(),
                'delivery_date' => null,
                'carrier' => null,
                'tracking_number' => null,
                'shipping_method' => null,
            ];
        });
    }

    /**
     * Indicate shipped status.
     */
    public function shipped(): static
    {
        $carrier = $this->faker->randomElement($this->carriers);

        return $this->state(function (array $attributes) use ($carrier) {
            return [
                'status' => Shipment::STATUS_SHIPPED,
                'shipped_date' => $this->faker->dateTimeBetween('-14 days', '-2 days'),
                'delivery_date' => null,
                'carrier' => $carrier,
                'tracking_number' => $this->generateTrackingNumber($carrier),
                'shipping_method' => $this->getShippingMethodForCarrier($carrier),
            ];
        });
    }

    /**
     * Indicate delivered status.
     */
    public function delivered(): static
    {
        $carrier = $this->faker->randomElement($this->carriers);
        $shippedDate = $this->faker->dateTimeBetween('-30 days', '-10 days');
        $deliveryDate = \Carbon\Carbon::instance($shippedDate)->addDays($this->faker->numberBetween(2, 7));

        return $this->state(function (array $attributes) use ($carrier, $shippedDate, $deliveryDate) {
            return [
                'status' => Shipment::STATUS_DELIVERED,
                'shipped_date' => $shippedDate,
                'delivery_date' => $deliveryDate,
                'carrier' => $carrier,
                'tracking_number' => $this->generateTrackingNumber($carrier),
                'shipping_method' => $this->getShippingMethodForCarrier($carrier),
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
                'status' => Shipment::STATUS_CANCELLED,
                'delivery_date' => null,
                'notes' => 'Shipment cancelled: ' . $this->faker->sentence(),
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
     * Set for a specific warehouse.
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
     * Set specific carrier.
     */
    public function withCarrier(string $carrier): static
    {
        return $this->state(function (array $attributes) use ($carrier) {
            return [
                'carrier' => $carrier,
                'tracking_number' => $this->generateTrackingNumber($carrier),
                'shipping_method' => $this->getShippingMethodForCarrier($carrier),
            ];
        });
    }

    /**
     * Set specific tracking number.
     */
    public function withTracking(string $trackingNumber): static
    {
        return $this->state(function (array $attributes) use ($trackingNumber) {
            return [
                'tracking_number' => $trackingNumber,
            ];
        });
    }

    /**
     * Set without tracking.
     */
    public function withoutTracking(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'tracking_number' => null,
            ];
        });
    }

    /**
     * Set expedited shipping.
     */
    public function expedited(): static
    {
        return $this->state(function (array $attributes) {
            $carrier = $this->faker->randomElement(['UPS', 'FedEx', 'DHL']);

            return [
                'carrier' => $carrier,
                'shipping_method' => $this->faker->randomElement(['Next Day Air', 'Priority Overnight', 'Express 9:00']),
                'shipping_cost' => $this->faker->randomFloat(2, 20, 100),
            ];
        });
    }

    /**
     * Set economy shipping.
     */
    public function economy(): static
    {
        return $this->state(function (array $attributes) {
            $carrier = $this->faker->randomElement(['USPS', 'UPS', 'FedEx']);

            return [
                'carrier' => $carrier,
                'shipping_method' => $this->faker->randomElement(['Ground', 'Standard', 'Economy']),
                'shipping_cost' => $this->faker->randomFloat(2, 5, 30),
            ];
        });
    }

    /**
     * Set freight shipping (large items).
     */
    public function freight(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'carrier' => $this->faker->randomElement(['Freight Carrier', 'Rail Carrier', 'Ocean Carrier']),
                'shipping_method' => $this->faker->randomElement(['LTL', 'FTL', 'Rail', 'Ocean']),
                'shipping_cost' => $this->faker->randomFloat(2, 200, 2000),
            ];
        });
    }

    /**
     * Set international shipping.
     */
    public function international(): static
    {
        return $this->state(function (array $attributes) {
            $carrier = $this->faker->randomElement(['DHL', 'UPS', 'FedEx']);

            return [
                'carrier' => $carrier,
                'shipping_method' => $this->faker->randomElement(['Express Worldwide', 'International Priority', 'International Economy']),
                'shipping_cost' => $this->faker->randomFloat(2, 50, 500),
            ];
        });
    }

    /**
     * Create shipment with items.
     */
    public function withItems(?int $count = null): static
    {
        return $this->afterCreating(function (Shipment $shipment) use ($count) {
            if (class_exists('ShipmentItem')) {
                $soItems = $shipment->salesOrder->items()
                    ->whereRaw('quantity_shipped < quantity_ordered')
                    ->get();

                if ($soItems->isEmpty()) {
                    return;
                }

                $itemCount = $count ?? $this->faker->numberBetween(1, min(5, $soItems->count()));

                foreach ($soItems->take($itemCount) as $soItem) {
                    $remaining = $soItem->quantity_ordered - $soItem->quantity_shipped;
                    $quantity = $this->faker->numberBetween(1, min($remaining, 10));

                    $location = Location::where('warehouse_id', $shipment->warehouse_id)
                        ->inRandomOrder()
                        ->first();

                    ShipmentItem::factory()
                        ->forShipment($shipment->id)
                        ->forSalesOrderItem($soItem->id)
                        ->forProduct($soItem->product_id)
                        ->withQuantity($quantity)
                        ->withLocation($location?->id)
                        ->create();
                }
            }
        });
    }

    /**
     * Create shipment with specific items.
     */
    public function withSpecificItems(array $items): static
    {
        return $this->afterCreating(function (Shipment $shipment) use ($items) {
            if (class_exists('ShipmentItem')) {
                foreach ($items as $itemData) {
                    ShipmentItem::factory()
                        ->forShipment($shipment->id)
                        ->forSalesOrderItem($itemData['so_item_id'])
                        ->forProduct($itemData['product_id'] ?? null)
                        ->withQuantity($itemData['quantity'])
                        ->withLocation($itemData['location_id'] ?? null)
                        ->withBatch($itemData['batch'] ?? null)
                        ->withSerial($itemData['serial'] ?? null)
                        ->create();
                }
            }
        });
    }

    /**
     * Create shipment with batch tracked items.
     */
    public function withBatchItems(int $count = 2): static
    {
        return $this->afterCreating(function (Shipment $shipment) use ($count) {
            if (class_exists('ShipmentItem')) {
                $batchProducts = Product::where('is_batch_tracked', true)->get();

                if ($batchProducts->isEmpty()) {
                    $batchProducts = Product::factory()->batchTracked()->count(2)->create();
                }

                foreach ($batchProducts->take($count) as $product) {
                    $soItem = $shipment->salesOrder->items()
                        ->where('product_id', $product->id)
                        ->first();

                    if (!$soItem) {
                        continue;
                    }

                    ShipmentItem::factory()
                        ->forShipment($shipment->id)
                        ->forSalesOrderItem($soItem->id)
                        ->forProduct($product->id)
                        ->withBatch()
                        ->create();
                }
            }
        });
    }

    /**
     * Create shipment with serial tracked items.
     */
    public function withSerialItems(int $count = 3): static
    {
        return $this->afterCreating(function (Shipment $shipment) use ($count) {
            if (class_exists('ShipmentItem')) {
                $serialProducts = Product::where('is_serial_tracked', true)->get();

                if ($serialProducts->isEmpty()) {
                    $serialProducts = Product::factory()->serialTracked()->count(2)->create();
                }

                foreach ($serialProducts as $product) {
                    $soItem = $shipment->salesOrder->items()
                        ->where('product_id', $product->id)
                        ->first();

                    if (!$soItem) {
                        continue;
                    }

                    for ($i = 0; $i < $count; $i++) {
                        ShipmentItem::factory()
                            ->forShipment($shipment->id)
                            ->forSalesOrderItem($soItem->id)
                            ->forProduct($product->id)
                            ->withSerial()
                            ->create();
                    }
                }
            }
        });
    }

    /**
     * Create a fully loaded shipment.
     */
    public function fullyLoaded(): static
    {
        return $this->afterCreating(function (Shipment $shipment) {
            if (!class_exists('ShipmentItem')) {
                return;
            }

            $soItems = $shipment->salesOrder->items()
                ->whereRaw('quantity_shipped < quantity_ordered')
                ->get();

            if ($soItems->isEmpty()) {
                return;
            }

            $itemCount = rand(2, min(4, $soItems->count()));
            foreach ($soItems->take($itemCount) as $soItem) {
                $remaining = $soItem->quantity_ordered - $soItem->quantity_shipped;
                $quantity = $this->faker->numberBetween(1, min($remaining, 10));

                $location = Location::where('warehouse_id', $shipment->warehouse_id)
                    ->inRandomOrder()
                    ->first();

                ShipmentItem::factory()
                    ->forShipment($shipment->id)
                    ->forSalesOrderItem($soItem->id)
                    ->forProduct($soItem->product_id)
                    ->withQuantity($quantity)
                    ->withLocation($location?->id)
                    ->create();
            }

            if ($this->faker->boolean(30)) {
                $batchProducts = Product::where('is_batch_tracked', true)->take(rand(1, 2))->get();
                foreach ($batchProducts as $product) {
                    $soItem = $shipment->salesOrder->items()->where('product_id', $product->id)->first();
                    if (!$soItem) {
                        continue;
                    }

                    ShipmentItem::factory()
                        ->forShipment($shipment->id)
                        ->forSalesOrderItem($soItem->id)
                        ->forProduct($product->id)
                        ->withBatch()
                        ->create();
                }
            }

            if ($this->faker->boolean(20)) {
                $serialProducts = Product::where('is_serial_tracked', true)->take(1)->get();
                foreach ($serialProducts as $product) {
                    $soItem = $shipment->salesOrder->items()->where('product_id', $product->id)->first();
                    if (!$soItem) {
                        continue;
                    }

                    for ($i = 0; $i < rand(1, 3); $i++) {
                        ShipmentItem::factory()
                            ->forShipment($shipment->id)
                            ->forSalesOrderItem($soItem->id)
                            ->forProduct($product->id)
                            ->withSerial()
                            ->create();
                    }
                }
            }
        });
    }
}
