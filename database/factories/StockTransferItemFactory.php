<?php
// database/factories/StockTransferItemFactory.php

namespace Database\Factories;

use App\Models\StockTransferItem;
use App\Models\StockTransfer;
use App\Models\Product;
use App\Models\Location;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<StockTransferItem>
 */
class StockTransferItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = StockTransferItem::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $stockTransfer = StockTransfer::inRandomOrder()->first() ?? StockTransfer::factory()->create();
        $product = Product::inRandomOrder()->first() ?? Product::factory()->create();

        $fromLocation = Location::where('warehouse_id', $stockTransfer->from_warehouse_id)
            ->inRandomOrder()
            ->first() ?? Location::factory()->forWarehouse($stockTransfer->from_warehouse_id)->create();

        $toLocation = Location::where('warehouse_id', $stockTransfer->to_warehouse_id)
            ->inRandomOrder()
            ->first() ?? Location::factory()->forWarehouse($stockTransfer->to_warehouse_id)->create();

        $quantityRequested = $this->faker->numberBetween(1, 100);

        // Determine shipped and received quantities based on transfer status
        $shipped = $this->getShippedQuantityForStatus($stockTransfer->status, $quantityRequested);
        $received = $this->getReceivedQuantityForStatus($stockTransfer->status, $shipped);

        // Determine if product has tracking requirements
        $hasBatch = $product->is_batch_tracked ?? $this->faker->boolean(25);
        $hasSerial = $product->is_serial_tracked ?? $this->faker->boolean(15);

        return [
            'stock_transfer_id' => $stockTransfer->id,
            'product_id' => $product->id,
            'from_location_id' => $fromLocation->id,
            'to_location_id' => $toLocation->id,
            'quantity_requested' => $quantityRequested,
            'quantity_shipped' => $shipped,
            'quantity_received' => $received,
            'batch_number' => $hasBatch ? $this->generateBatchNumber() : null,
            'serial_number' => $hasSerial ? $this->generateSerialNumber() : null,
            'unit_cost' => $product->unit_cost ?? $this->faker->randomFloat(2, 1, 500),
            'notes' => $this->faker->optional(0.2)->sentence(),
            'created_at' => $stockTransfer->request_date,
            'updated_at' => $this->faker->dateTimeBetween($stockTransfer->request_date, 'now'),
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
     * Get shipped quantity based on transfer status.
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
     * Get received quantity based on transfer status.
     */
    protected function getReceivedQuantityForStatus(string $status, int $shipped): int
    {
        return match ($status) {
            StockTransfer::STATUS_RECEIVED => $shipped,
            StockTransfer::STATUS_PARTIALLY_RECEIVED => $this->faker->numberBetween(1, max(1, $shipped - 1)),
            default => 0,
        };
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
                'quantity_requested' => 1, // Serial tracked items typically have quantity 1
                'quantity_shipped' => min(1, $attributes['quantity_shipped'] ?? 0),
                'quantity_received' => min(1, $attributes['quantity_received'] ?? 0),
            ];
        });
    }

    /**
     * Set for a specific stock transfer.
     */
    public function forStockTransfer(int $stockTransferId): static
    {
        return $this->state(function (array $attributes) use ($stockTransferId) {
            return [
                'stock_transfer_id' => $stockTransferId,
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
     * Set source location.
     */
    public function fromLocation(int $locationId): static
    {
        return $this->state(function (array $attributes) use ($locationId) {
            return [
                'from_location_id' => $locationId,
            ];
        });
    }

    /**
     * Set destination location.
     */
    public function toLocation(int $locationId): static
    {
        return $this->state(function (array $attributes) use ($locationId) {
            return [
                'to_location_id' => $locationId,
            ];
        });
    }

    /**
     * Set specific quantities.
     */
    public function withQuantities(int $requested, int $shipped = 0, int $received = 0): static
    {
        return $this->state(function (array $attributes) use ($requested, $shipped, $received) {
            return [
                'quantity_requested' => $requested,
                'quantity_shipped' => $shipped,
                'quantity_received' => $received,
            ];
        });
    }

    /**
     * Indicate pending item (not shipped).
     */
    public function pending(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'quantity_shipped' => 0,
                'quantity_received' => 0,
            ];
        });
    }

    /**
     * Indicate shipped item (not received).
     */
    public function shipped(): static
    {
        return $this->state(function (array $attributes) {
            $requested = $attributes['quantity_requested'] ?? $this->faker->numberBetween(1, 50);
            return [
                'quantity_requested' => $requested,
                'quantity_shipped' => $requested,
                'quantity_received' => 0,
            ];
        });
    }

    /**
     * Indicate partially received item.
     */
    public function partiallyReceived(): static
    {
        return $this->state(function (array $attributes) {
            $requested = $attributes['quantity_requested'] ?? $this->faker->numberBetween(10, 100);
            $received = $this->faker->numberBetween(1, $requested - 1);
            return [
                'quantity_requested' => $requested,
                'quantity_shipped' => $requested,
                'quantity_received' => $received,
            ];
        });
    }

    /**
     * Indicate received item.
     */
    public function received(): static
    {
        return $this->state(function (array $attributes) {
            $requested = $attributes['quantity_requested'] ?? $this->faker->numberBetween(1, 50);
            return [
                'quantity_requested' => $requested,
                'quantity_shipped' => $requested,
                'quantity_received' => $requested,
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
            $state['quantity_requested'] = 1;
        }

        return $this->state($state);
    }

    /**
     * Create item with specific unit cost.
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
     * Create item with special handling notes.
     */
    public function withNotes(string $notes): static
    {
        return $this->state(function (array $attributes) use ($notes) {
            return [
                'notes' => $notes,
            ];
        });
    }
}
