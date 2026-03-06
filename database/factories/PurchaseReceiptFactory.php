<?php
// database/factories/PurchaseReceiptFactory.php

namespace Database\Factories;

use App\Models\Product;
use App\Models\PurchaseReceipt;
use App\Models\PurchaseOrder;
use App\Models\PurchaseOrderItem;
use App\Models\PurchaseReceiptItem;
use App\Models\Warehouse;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<PurchaseReceipt>
 */
class PurchaseReceiptFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PurchaseReceipt::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $purchaseOrder = PurchaseOrder::inRandomOrder()->first() ?? PurchaseOrder::factory()->create();
        $warehouse = Warehouse::inRandomOrder()->first() ?? Warehouse::factory()->create();
        $user = User::inRandomOrder()->first() ?? User::factory()->create();

        $receiptDate = $this->getReceiptDateForPO($purchaseOrder);
        $status = $this->getStatusForPO($purchaseOrder);

        return [
            'receipt_number' => $this->generateReceiptNumber(),
            'purchase_order_id' => $purchaseOrder->id,
            'warehouse_id' => $warehouse->id,
            'receipt_date' => $receiptDate,
            'invoice_number' => $this->faker->optional(0.7)->bothify('INV-####-####'),
            'delivery_note_number' => $this->faker->optional(0.5)->bothify('DN-########'),
            'status' => $status,
            'notes' => $this->faker->optional(0.3)->sentence(),
            'received_by' => $user->id,
            'created_at' => $receiptDate,
            'updated_at' => $this->faker->dateTimeBetween($receiptDate, 'now'),
        ];
    }

    /**
     * Generate a unique receipt number.
     */
    protected function generateReceiptNumber(): string
    {
        $prefix = 'RCT';
        $year = now()->format('Y');
        $month = now()->format('m');
        $random = $this->faker->unique()->numberBetween(1000, 9999);

        return "{$prefix}-{$year}{$month}-{$random}";
    }

    /**
     * Get receipt date based on PO status.
     */
    protected function getReceiptDateForPO(PurchaseOrder $purchaseOrder): \DateTime
    {
        if ($purchaseOrder->actual_delivery_date) {
            return $purchaseOrder->actual_delivery_date;
        }

        if ($purchaseOrder->expected_delivery_date) {
            return $this->faker->dateTimeBetween(
                $purchaseOrder->expected_delivery_date->modify('-5 days'),
                $purchaseOrder->expected_delivery_date->modify('+10 days')
            );
        }

        return $this->faker->dateTimeBetween('-30 days', 'now');
    }

    /**
     * Get status based on PO.
     */
    protected function getStatusForPO(PurchaseOrder $purchaseOrder): string
    {
        return match ($purchaseOrder->status) {
            PurchaseOrder::STATUS_RECEIVED => PurchaseReceipt::STATUS_COMPLETED,
            PurchaseOrder::STATUS_PARTIALLY_RECEIVED => PurchaseReceipt::STATUS_RECEIVED,
            default => $this->faker->randomElement([
                PurchaseReceipt::STATUS_RECEIVED,
                PurchaseReceipt::STATUS_COMPLETED
            ]),
        };
    }

    /**
     * Indicate receipt is completed.
     */
    public function completed(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => PurchaseReceipt::STATUS_COMPLETED,
            ];
        });
    }

    /**
     * Indicate receipt is partially received.
     */
    public function partiallyReceived(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => PurchaseReceipt::STATUS_PARTIALLY_RECEIVED,
            ];
        });
    }

    /**
     * Indicate receipt is cancelled.
     */
    public function cancelled(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => PurchaseReceipt::STATUS_CANCELLED,
                'notes' => 'Receipt cancelled: ' . $this->faker->sentence(),
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
     * Set receipt date.
     */
    public function receivedOn(string $date): static
    {
        return $this->state(function (array $attributes) use ($date) {
            return [
                'receipt_date' => $date,
            ];
        });
    }

    /**
     * Set with invoice.
     */
    public function withInvoice(?string $invoiceNumber = null): static
    {
        return $this->state(function (array $attributes) use ($invoiceNumber) {
            return [
                'invoice_number' => $invoiceNumber ?? $this->faker->bothify('INV-####-####'),
            ];
        });
    }

    /**
     * Set without invoice.
     */
    public function withoutInvoice(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'invoice_number' => null,
            ];
        });
    }

    /**
     * Set with delivery note.
     */
    public function withDeliveryNote(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'delivery_note_number' => $this->faker->bothify('DN-########'),
            ];
        });
    }

    /**
     * Create receipt with items.
     */
    public function withItems(?int $count = null): static
    {
        return $this->afterCreating(function (PurchaseReceipt $receipt) use ($count) {
            if (class_exists('PurchaseReceiptItem')) {
                $poItems = $receipt->purchaseOrder->items;

                if ($poItems->isEmpty()) {
                    return;
                }

                $itemCount = $count ?? $this->faker->numberBetween(1, $poItems->count());

                foreach ($poItems->take($itemCount) as $poItem) {
                    $maxReceivable = $poItem->quantity_ordered - $poItem->quantity_received;

                    if ($maxReceivable <= 0) {
                        continue;
                    }

                    $quantity = $this->faker->numberBetween(1, min($maxReceivable, 50));

                    PurchaseReceiptItem::factory()
                        ->forPurchaseOrderItem($poItem->id)
                        ->forPurchaseReceipt($receipt->id)
                        ->withQuantity($quantity)
                        ->create();
                }

                // Update receipt totals and status
                $receipt->updateStatus();
            }
        });
    }

    /**
     * Create receipt with specific items.
     */
    public function withSpecificItems(array $items): static
    {
        return $this->afterCreating(function (PurchaseReceipt $receipt) use ($items) {
            if (class_exists('PurchaseReceiptItem')) {
                foreach ($items as $itemData) {
                    PurchaseReceiptItem::factory()
                        ->forPurchaseOrderItem($itemData['po_item_id'])
                        ->forPurchaseReceipt($receipt->id)
                        ->withQuantity($itemData['quantity'])
                        ->withLocation($itemData['location_id'] ?? null)
                        ->when(isset($itemData['batch']), fn($f) => $f->withBatch($itemData['batch']))
                        ->when(isset($itemData['serial']), fn($f) => $f->withSerial($itemData['serial']))
                        ->create();
                }

                $receipt->updateStatus();
            }
        });
    }

    /**
     * Create receipt with batch tracked items.
     */
    public function withBatchItems(int $count = 2): static
    {
        return $this->afterCreating(function (PurchaseReceipt $receipt) use ($count) {
            if (class_exists('PurchaseReceiptItem')) {
                $batchProducts = Product::where('is_batch_tracked', true)->get();

                if ($batchProducts->isEmpty()) {
                    $batchProducts = Product::factory()->batchTracked()->count(2)->create();
                }

                foreach ($batchProducts->take($count) as $product) {
                    $poItem = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                        ->where('product_id', $product->id)
                        ->first();

                    if (!$poItem) {
                        $poItem = PurchaseOrderItem::factory()
                            ->forPurchaseOrder($receipt->purchase_order_id)
                            ->forProduct($product->id)
                            ->pending()
                            ->create();
                    }

                    PurchaseReceiptItem::factory()
                        ->forPurchaseOrderItem($poItem->id)
                        ->forPurchaseReceipt($receipt->id)
                        ->withBatch()
                        ->create();
                }
            }
        });
    }

    /**
     * Create receipt with serial tracked items.
     */
    public function withSerialItems(int $count = 3): static
    {
        return $this->afterCreating(function (PurchaseReceipt $receipt) use ($count) {
            if (class_exists('PurchaseReceiptItem')) {
                $serialProducts = Product::where('is_serial_tracked', true)->get();

                if ($serialProducts->isEmpty()) {
                    $serialProducts = Product::factory()->serialTracked()->count(2)->create();
                }

                foreach ($serialProducts as $product) {
                    $poItem = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                        ->where('product_id', $product->id)
                        ->first();

                    if (!$poItem) {
                        $poItem = PurchaseOrderItem::factory()
                            ->forPurchaseOrder($receipt->purchase_order_id)
                            ->forProduct($product->id)
                            ->pending()
                            ->withQuantity($count, 100, 0)
                            ->create();
                    }

                    for ($i = 0; $i < $count; $i++) {
                        PurchaseReceiptItem::factory()
                            ->forPurchaseOrderItem($poItem->id)
                            ->forPurchaseReceipt($receipt->id)
                            ->withSerial()
                            ->create();
                    }
                }
            }
        });
    }

    /**
     * Create receipt with expiring items.
     */
    public function withExpiringItems(int $count = 2): static
    {
        return $this->afterCreating(function (PurchaseReceipt $receipt) use ($count) {
            if (class_exists('PurchaseReceiptItem')) {
                $expirableProducts = Product::where('is_expirable', true)->get();

                if ($expirableProducts->isEmpty()) {
                    $expirableProducts = Product::factory()->expirable()->count(2)->create();
                }

                foreach ($expirableProducts->take($count) as $product) {
                    $poItem = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                        ->where('product_id', $product->id)
                        ->first();

                    if (!$poItem) {
                        $poItem = PurchaseOrderItem::factory()
                            ->forPurchaseOrder($receipt->purchase_order_id)
                            ->forProduct($product->id)
                            ->pending()
                            ->create();
                    }

                    PurchaseReceiptItem::factory()
                        ->forPurchaseOrderItem($poItem->id)
                        ->forPurchaseReceipt($receipt->id)
                        ->withExpiry()
                        ->create();
                }
            }
        });
    }

    /**
     * Create a fully loaded receipt with all item types.
     */
    public function fullyLoaded(): static
    {
        return $this->afterCreating(function (PurchaseReceipt $receipt) {
            if (!class_exists('PurchaseReceiptItem')) {
                return;
            }

            // Add standard items
            $poItems = $receipt->purchaseOrder->items;
            foreach ($poItems->take(3) as $poItem) {
                $maxReceivable = $poItem->quantity_ordered - $poItem->quantity_received;
                if ($maxReceivable <= 0) {
                    continue;
                }

                PurchaseReceiptItem::factory()
                    ->forPurchaseOrderItem($poItem->id)
                    ->forPurchaseReceipt($receipt->id)
                    ->withQuantity($this->faker->numberBetween(1, min($maxReceivable, 50)))
                    ->create();
            }

            // Add batch tracked items
            $batchProduct = Product::where('is_batch_tracked', true)->first();
            if ($batchProduct) {
                $poItem = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                    ->where('product_id', $batchProduct->id)
                    ->first();

                if ($poItem) {
                    PurchaseReceiptItem::factory()
                        ->forPurchaseOrderItem($poItem->id)
                        ->forPurchaseReceipt($receipt->id)
                        ->withBatch()
                        ->create();
                }
            }

            // Add serial tracked items
            $serialProduct = Product::where('is_serial_tracked', true)->first();
            if ($serialProduct) {
                $poItem = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                    ->where('product_id', $serialProduct->id)
                    ->first();

                if ($poItem) {
                    for ($i = 0; $i < 2; $i++) {
                        PurchaseReceiptItem::factory()
                            ->forPurchaseOrderItem($poItem->id)
                            ->forPurchaseReceipt($receipt->id)
                            ->withSerial()
                            ->create();
                    }
                }
            }

            $receipt->updateStatus();
        });
    }
}
