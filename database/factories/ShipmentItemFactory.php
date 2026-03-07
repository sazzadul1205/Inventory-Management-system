<?php
// database/factories/ShipmentItemFactory.php

namespace Database\Factories;

use App\Models\ShipmentItem;
use App\Models\Shipment;
use App\Models\SalesOrderItem;
use App\Models\Product;
use App\Models\Location;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ShipmentItem>
 */
class ShipmentItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ShipmentItem::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $shipment = Shipment::inRandomOrder()->first() ?? Shipment::factory()->create();
        $salesOrderItem = SalesOrderItem::inRandomOrder()->first() ?? SalesOrderItem::factory()->create();
        $product = $salesOrderItem->product;
        $location = Location::where('warehouse_id', $shipment->warehouse_id)
            ->inRandomOrder()
            ->first() ?? Location::factory()->forWarehouse($shipment->warehouse_id)->create();

        // Determine quantity based on what's left to ship
        $remainingToShip = $salesOrderItem->quantity_ordered - $salesOrderItem->quantity_shipped;
        $quantity = $remainingToShip > 0
            ? $this->faker->numberBetween(1, min($remainingToShip, 10))
            : 1;

        // Determine if product has tracking requirements
        $hasBatch = $product->is_batch_tracked ?? $this->faker->boolean(25);
        $hasSerial = $product->is_serial_tracked ?? $this->faker->boolean(15);

        return [
            'shipment_id' => $shipment->id,
            'sales_order_item_id' => $salesOrderItem->id,
            'product_id' => $product->id,
            'location_id' => $location->id,
            'quantity_shipped' => $quantity,
            'batch_number' => $hasBatch ? $this->generateBatchNumber() : null,
            'serial_number' => $hasSerial ? $this->generateSerialNumber() : null,
            'notes' => $this->faker->optional(0.2)->sentence(),
            'created_at' => $shipment->shipped_date ?? $shipment->created_at,
            'updated_at' => $this->faker->dateTimeBetween($shipment->shipped_date ?? $shipment->created_at, 'now'),
        ];
    }

    /**
     * Generate a batch number.
     */
    protected function generateBatchNumber(): string
    {
        return 'BATCH-' . date('y') . '-' .
            strtoupper($this->faker->bothify('??##')) . '-' .
            str_pad($this->faker->numberBetween(1, 999), 3, '0', STR_PAD_LEFT);
    }

    /**
     * Generate a serial number.
     */
    protected function generateSerialNumber(): string
    {
        return 'SN-' . strtoupper($this->faker->bothify('??##??##')) . '-' .
            $this->faker->numberBetween(1000, 9999);
    }

    /**
     * Indicate the item has a batch number.
     */
    public function withBatch(?string $batchNumber = null): static
    {
        return $this->state(function (array $attributes) use ($batchNumber) {
            return [
                'batch_number' => $batchNumber ?? $this->generateBatchNumber(),
            ];
        });
    }

    /**
     * Indicate the item has a serial number.
     */
    public function withSerial(?string $serialNumber = null): static
    {
        return $this->state(function (array $attributes) use ($serialNumber) {
            return [
                'serial_number' => $serialNumber ?? $this->generateSerialNumber(),
                'quantity_shipped' => 1, // Serial tracked items typically have quantity 1
            ];
        });
    }

    /**
     * Set for a specific shipment.
     */
    public function forShipment(int $shipmentId): static
    {
        return $this->state(function (array $attributes) use ($shipmentId) {
            return [
                'shipment_id' => $shipmentId,
            ];
        });
    }

    /**
     * Set for a specific sales order item.
     */
    public function forSalesOrderItem(int $salesOrderItemId): static
    {
        return $this->state(function (array $attributes) use ($salesOrderItemId) {
            return [
                'sales_order_item_id' => $salesOrderItemId,
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
     * Set a specific location.
     */
    public function withLocation(int $locationId): static
    {
        return $this->state(function (array $attributes) use ($locationId) {
            return [
                'location_id' => $locationId,
            ];
        });
    }

    /**
     * Set a specific quantity.
     */
    public function withQuantity(int $quantity): static
    {
        return $this->state(function (array $attributes) use ($quantity) {
            return [
                'quantity_shipped' => $quantity,
            ];
        });
    }

    /**
     * Create item with product-specific tracking.
     */
    public function withProductTracking(Product $product): static
    {
        $state = [];

        if ($product->is_batch_tracked) {
            $state['batch_number'] = $this->generateBatchNumber();
        }

        if ($product->is_serial_tracked) {
            $state['serial_number'] = $this->generateSerialNumber();
            $state['quantity_shipped'] = 1;
        }

        return $this->state($state);
    }

    /**
     * Create item with damage notes.
     */
    public function damaged(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'notes' => 'Item damaged during transit - ' . $this->faker->randomElement([
                    'visible damage to packaging',
                    'product appears damaged',
                    'cosmetic damage noted',
                    'damaged in transit',
                ]),
            ];
        });
    }

    /**
     * Create item with quality hold notes.
     */
    public function qualityHold(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'notes' => 'On quality hold - awaiting inspection',
            ];
        });
    }

    /**
     * Create item with expedited handling notes.
     */
    public function expedited(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'notes' => 'Rush order - expedited handling',
            ];
        });
    }

    /**
     * Create item with gift wrapping.
     */
    public function giftWrapped(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'notes' => 'Gift wrapped item',
            ];
        });
    }

    /**
     * Create item with special handling instructions.
     */
    public function specialHandling(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'notes' => $this->faker->randomElement([
                    'Fragile - handle with care',
                    'This side up',
                    'Keep dry',
                    'Temperature sensitive',
                    'Heavy item - team lift required',
                ]),
            ];
        });
    }

    /**
     * Create multiple serial numbers for a product.
     */
    public function withMultipleSerials(int $count): static
    {
        return $this->afterCreating(function (ShipmentItem $item) use ($count) {
            // This would need to create multiple shipment items, one per serial
            for ($i = 1; $i < $count; $i++) {
                self::factory()
                    ->forShipment($item->shipment_id)
                    ->forSalesOrderItem($item->sales_order_item_id)
                    ->forProduct($item->product_id)
                    ->withLocation($item->location_id)
                    ->withSerial()
                    ->withQuantity(1)
                    ->create();
            }
        });
    }
}
