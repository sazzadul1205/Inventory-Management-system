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
use Carbon\Carbon;

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
     * Static array to track generated receipt numbers in memory
     */
    protected static $generatedReceiptNumbers = [];

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

        // Safely generate updated_at
        $now = now();
        try {
            $updatedAt = $this->faker->dateTimeBetween($receiptDate, $now);
        } catch (\InvalidArgumentException $e) {
            $updatedAt = $this->faker->dateTimeBetween($now->copy()->subDays(1), $now);
        }

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
            'updated_at' => $updatedAt,
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

        $attempts = 0;
        $maxAttempts = 100;

        do {
            $random = $this->faker->numberBetween(1000, 9999);
            $receiptNumber = "{$prefix}-{$year}{$month}-{$random}";
            $attempts++;

            // Check if already generated in this factory instance
            $exists = in_array($receiptNumber, self::$generatedReceiptNumbers);

            // Check if exists in database
            if (!$exists) {
                $exists = PurchaseReceipt::where('receipt_number', $receiptNumber)->exists();
            }

            if ($attempts >= $maxAttempts) {
                // Fallback: add timestamp to ensure uniqueness
                $receiptNumber = "{$prefix}-{$year}{$month}-" . time() . '-' . rand(100, 999);
                break;
            }
        } while ($exists);

        self::$generatedReceiptNumbers[] = $receiptNumber;

        return $receiptNumber;
    }

    /**
     * Get receipt date based on PO status with safety checks.
     */
    protected function getReceiptDateForPO(PurchaseOrder $purchaseOrder): Carbon
    {
        $now = now();

        try {
            if ($purchaseOrder->actual_delivery_date) {
                return $purchaseOrder->actual_delivery_date instanceof Carbon
                    ? $purchaseOrder->actual_delivery_date
                    : Carbon::parse($purchaseOrder->actual_delivery_date);
            }

            if ($purchaseOrder->expected_delivery_date) {
                $expectedDate = $purchaseOrder->expected_delivery_date instanceof Carbon
                    ? $purchaseOrder->expected_delivery_date
                    : Carbon::parse($purchaseOrder->expected_delivery_date);

                $startDate = $expectedDate->copy()->subDays(5);
                $endDate = $expectedDate->copy()->addDays(10);

                // Ensure start <= end
                if ($startDate > $endDate) {
                    [$startDate, $endDate] = [$endDate, $startDate];
                }

                // Ensure dates are within reasonable bounds
                $minDate = $now->copy()->subMonths(6);
                $maxDate = $now->copy()->addDays(30);

                $startDate = $startDate->max($minDate)->min($maxDate);
                $endDate = $endDate->max($minDate)->min($maxDate);

                // Ensure start <= end after bounds checking
                if ($startDate > $endDate) {
                    $endDate = $startDate->copy()->addDays(5);
                }

                return Carbon::instance($this->faker->dateTimeBetween($startDate, $endDate));
            }

            return Carbon::instance($this->faker->dateTimeBetween('-30 days', 'now'));
        } catch (\Exception $e) {
            // Ultimate fallback
            return $now;
        }
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
     * Set receipt date with safety check.
     */
    public function receivedOn(string $date): static
    {
        return $this->state(function (array $attributes) use ($date) {
            try {
                $receiptDate = Carbon::parse($date);
                $now = now();

                // Ensure date is not too far in the future
                if ($receiptDate > $now->copy()->addDays(30)) {
                    $receiptDate = $now;
                }

                // Ensure date is not too far in the past
                if ($receiptDate < $now->copy()->subMonths(6)) {
                    $receiptDate = $now->copy()->subMonths(6);
                }

                return [
                    'receipt_date' => $receiptDate,
                    'created_at' => $receiptDate,
                    'updated_at' => $now,
                ];
            } catch (\Exception $e) {
                return [
                    'receipt_date' => now(),
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
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
     * Create receipt with items - with duplicate checking.
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
                $processedItems = [];

                foreach ($poItems->take($itemCount) as $poItem) {
                    // Skip if we've already processed this PO item
                    if (in_array($poItem->id, $processedItems)) {
                        continue;
                    }

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

                    $processedItems[] = $poItem->id;
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
                    // Check if this PO item already has a receipt item
                    $exists = PurchaseReceiptItem::where('purchase_order_item_id', $itemData['po_item_id'])
                        ->where('purchase_receipt_id', $receipt->id)
                        ->exists();

                    if (!$exists) {
                        PurchaseReceiptItem::factory()
                            ->forPurchaseOrderItem($itemData['po_item_id'])
                            ->forPurchaseReceipt($receipt->id)
                            ->withQuantity($itemData['quantity'])
                            ->withLocation($itemData['location_id'] ?? null)
                            ->when(isset($itemData['batch']), fn($f) => $f->withBatch($itemData['batch']))
                            ->when(isset($itemData['serial']), fn($f) => $f->withSerial($itemData['serial']))
                            ->create();
                    }
                }

                $receipt->updateStatus();
            }
        });
    }

    /**
     * Create receipt with batch tracked items - with duplicate checking.
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
                    // Check if this product already has a receipt item in this receipt
                    $existingPoItem = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                        ->where('product_id', $product->id)
                        ->first();

                    if ($existingPoItem) {
                        $exists = PurchaseReceiptItem::where('purchase_order_item_id', $existingPoItem->id)
                            ->where('purchase_receipt_id', $receipt->id)
                            ->exists();

                        if (!$exists) {
                            PurchaseReceiptItem::factory()
                                ->forPurchaseOrderItem($existingPoItem->id)
                                ->forPurchaseReceipt($receipt->id)
                                ->withBatch()
                                ->create();
                        }
                    } else {
                        $poItem = PurchaseOrderItem::factory()
                            ->forPurchaseOrder($receipt->purchase_order_id)
                            ->forProduct($product->id)
                            ->pending()
                            ->create();

                        PurchaseReceiptItem::factory()
                            ->forPurchaseOrderItem($poItem->id)
                            ->forPurchaseReceipt($receipt->id)
                            ->withBatch()
                            ->create();
                    }
                }
            }
        });
    }

    /**
     * Create receipt with serial tracked items - with duplicate checking.
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
                    // Check if this product already has a receipt item in this receipt
                    $existingPoItem = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                        ->where('product_id', $product->id)
                        ->first();

                    if ($existingPoItem) {
                        // Check existing serial count
                        $existingCount = PurchaseReceiptItem::where('purchase_order_item_id', $existingPoItem->id)
                            ->where('purchase_receipt_id', $receipt->id)
                            ->count();

                        $needed = $count - $existingCount;

                        for ($i = 0; $i < max(0, $needed); $i++) {
                            PurchaseReceiptItem::factory()
                                ->forPurchaseOrderItem($existingPoItem->id)
                                ->forPurchaseReceipt($receipt->id)
                                ->withSerial()
                                ->create();
                        }
                    } else {
                        $poItem = PurchaseOrderItem::factory()
                            ->forPurchaseOrder($receipt->purchase_order_id)
                            ->forProduct($product->id)
                            ->pending()
                            ->withQuantity($count, 100, 0)
                            ->create();

                        for ($i = 0; $i < $count; $i++) {
                            PurchaseReceiptItem::factory()
                                ->forPurchaseOrderItem($poItem->id)
                                ->forPurchaseReceipt($receipt->id)
                                ->withSerial()
                                ->create();
                        }
                    }
                }
            }
        });
    }

    /**
     * Create receipt with expiring items - with duplicate checking.
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
                    // Check if this product already has a receipt item in this receipt
                    $existingPoItem = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                        ->where('product_id', $product->id)
                        ->first();

                    if ($existingPoItem) {
                        $exists = PurchaseReceiptItem::where('purchase_order_item_id', $existingPoItem->id)
                            ->where('purchase_receipt_id', $receipt->id)
                            ->exists();

                        if (!$exists) {
                            PurchaseReceiptItem::factory()
                                ->forPurchaseOrderItem($existingPoItem->id)
                                ->forPurchaseReceipt($receipt->id)
                                ->withExpiry()
                                ->create();
                        }
                    } else {
                        $poItem = PurchaseOrderItem::factory()
                            ->forPurchaseOrder($receipt->purchase_order_id)
                            ->forProduct($product->id)
                            ->pending()
                            ->create();

                        PurchaseReceiptItem::factory()
                            ->forPurchaseOrderItem($poItem->id)
                            ->forPurchaseReceipt($receipt->id)
                            ->withExpiry()
                            ->create();
                    }
                }
            }
        });
    }

    /**
     * Create a fully loaded receipt with all item types - with duplicate checking.
     */
    public function fullyLoaded(): static
    {
        return $this->afterCreating(function (PurchaseReceipt $receipt) {
            if (!class_exists('PurchaseReceiptItem')) {
                return;
            }

            $processedItems = [];

            // Add standard items
            $poItems = $receipt->purchaseOrder->items;
            foreach ($poItems->take(3) as $poItem) {
                if (in_array($poItem->id, $processedItems)) {
                    continue;
                }

                $maxReceivable = $poItem->quantity_ordered - $poItem->quantity_received;
                if ($maxReceivable <= 0) {
                    continue;
                }

                PurchaseReceiptItem::factory()
                    ->forPurchaseOrderItem($poItem->id)
                    ->forPurchaseReceipt($receipt->id)
                    ->withQuantity($this->faker->numberBetween(1, min($maxReceivable, 50)))
                    ->create();

                $processedItems[] = $poItem->id;
            }

            // Add batch tracked items
            $batchProduct = Product::where('is_batch_tracked', true)->first();
            if ($batchProduct) {
                $poItem = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                    ->where('product_id', $batchProduct->id)
                    ->first();

                if ($poItem && !in_array($poItem->id, $processedItems)) {
                    PurchaseReceiptItem::factory()
                        ->forPurchaseOrderItem($poItem->id)
                        ->forPurchaseReceipt($receipt->id)
                        ->withBatch()
                        ->create();

                    $processedItems[] = $poItem->id;
                }
            }

            // Add serial tracked items
            $serialProduct = Product::where('is_serial_tracked', true)->first();
            if ($serialProduct) {
                $poItem = PurchaseOrderItem::where('purchase_order_id', $receipt->purchase_order_id)
                    ->where('product_id', $serialProduct->id)
                    ->first();

                if ($poItem && !in_array($poItem->id, $processedItems)) {
                    for ($i = 0; $i < 2; $i++) {
                        PurchaseReceiptItem::factory()
                            ->forPurchaseOrderItem($poItem->id)
                            ->forPurchaseReceipt($receipt->id)
                            ->withSerial()
                            ->create();
                    }

                    $processedItems[] = $poItem->id;
                }
            }

            $receipt->updateStatus();
        });
    }

    /**
     * Reset the static generated numbers (useful for testing).
     */
    public static function resetGeneratedNumbers(): void
    {
        self::$generatedReceiptNumbers = [];
    }
}
