<?php
// database/factories/PurchaseReceiptItemFactory.php

namespace Database\Factories;

use App\Models\PurchaseReceiptItem;
use App\Models\PurchaseReceipt;
use App\Models\PurchaseOrderItem;
use App\Models\Product;
use App\Models\Location;
use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PurchaseReceiptItem>
 */
class PurchaseReceiptItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PurchaseReceiptItem::class;

    /**
     * Static array to track generated serial numbers to avoid duplicates
     */
    protected static $generatedSerials = [];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $purchaseReceipt = PurchaseReceipt::inRandomOrder()->first() ?? PurchaseReceipt::factory()->create();
        $purchaseOrderItem = PurchaseOrderItem::inRandomOrder()->first() ?? PurchaseOrderItem::factory()->create();
        $product = $purchaseOrderItem->product;
        $location = Location::where('warehouse_id', $purchaseReceipt->warehouse_id)
            ->inRandomOrder()
            ->first() ?? Location::factory()->forWarehouse($purchaseReceipt->warehouse_id)->create();

        $quantity = $this->faker->numberBetween(1, 50);
        $unitCost = $purchaseOrderItem->unit_price ?? $this->faker->randomFloat(2, 5, 200);

        // Determine if product has tracking requirements
        $hasBatch = $product->is_batch_tracked ?? $this->faker->boolean(30);
        $hasSerial = $product->is_serial_tracked ?? $this->faker->boolean(10);
        $hasExpiry = $product->is_expirable ?? $this->faker->boolean(20);

        // Safely generate updated_at date
        $receiptDate = $purchaseReceipt->receipt_date ?? now()->subDays(rand(1, 30));
        $now = now();

        // Ensure receipt date is not greater than now
        $startDate = $receiptDate <= $now ? $receiptDate : $now;

        try {
            $updatedAt = $this->faker->dateTimeBetween($startDate, $now);
        } catch (\InvalidArgumentException $e) {
            $updatedAt = $this->faker->dateTimeBetween($now->copy()->subDays(1), $now);
        }

        return [
            'purchase_receipt_id' => $purchaseReceipt->id,
            'purchase_order_item_id' => $purchaseOrderItem->id,
            'product_id' => $product->id,
            'location_id' => $location->id,
            'quantity_received' => $quantity,
            'batch_number' => $hasBatch ? $this->generateBatchNumber() : null,
            'serial_number' => $hasSerial ? $this->generateSerialNumber() : null,
            'expiry_date' => $hasExpiry ? $this->generateExpiryDate() : null,
            'unit_cost' => $unitCost,
            'notes' => $this->faker->optional(0.2)->sentence(),
            'created_at' => $receiptDate,
            'updated_at' => $updatedAt,
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
     * Generate a unique serial number.
     */
    protected function generateSerialNumber(): string
    {
        $attempts = 0;
        $maxAttempts = 100;

        do {
            $serial = 'SN-' . strtoupper($this->faker->bothify('??##??##')) . '-' .
                $this->faker->numberBetween(1000, 9999);
            $attempts++;

            // Check if already generated in this factory instance
            $exists = in_array($serial, self::$generatedSerials);

            // Check if exists in database
            if (!$exists) {
                $exists = PurchaseReceiptItem::where('serial_number', $serial)->exists();
            }

            if ($attempts >= $maxAttempts) {
                // Fallback: add timestamp to ensure uniqueness
                $serial = 'SN-' . time() . '-' . rand(10000, 99999);
                break;
            }
        } while ($exists);

        self::$generatedSerials[] = $serial;

        return $serial;
    }

    /**
     * Generate an expiry date with proper bounds checking.
     */
    protected function generateExpiryDate(): Carbon
    {
        try {
            // 70% future, 30% past (expired)
            if ($this->faker->boolean(70)) {
                $startDate = now()->addMonth();
                $endDate = now()->addYears(2);

                // Ensure start is before end
                if ($startDate > $endDate) {
                    $endDate = $startDate->copy()->addMonths(11);
                }

                return Carbon::instance($this->faker->dateTimeBetween($startDate, $endDate));
            } else {
                $startDate = now()->subYear();
                $endDate = now()->subDay();

                // Ensure start is before end
                if ($startDate > $endDate) {
                    $endDate = $startDate->copy()->addDays(1);
                }

                return Carbon::instance($this->faker->dateTimeBetween($startDate, $endDate));
            }
        } catch (\InvalidArgumentException $e) {
            // Fallback to a safe date
            return now()->addMonths(6);
        }
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
                'quantity_received' => 1, // Serial tracked items typically have quantity 1
            ];
        });
    }

    /**
     * Indicate the item has an expiry date.
     */
    public function withExpiry(?string $expiryDate = null): static
    {
        return $this->state(function (array $attributes) use ($expiryDate) {
            try {
                $date = $expiryDate ? Carbon::parse($expiryDate) : $this->generateExpiryDate();
                return [
                    'expiry_date' => $date,
                ];
            } catch (\Exception $e) {
                return [
                    'expiry_date' => now()->addMonths(6),
                ];
            }
        });
    }

    /**
     * Indicate the item is expired.
     */
    public function expired(): static
    {
        return $this->state(function (array $attributes) {
            try {
                $startDate = now()->subYear();
                $endDate = now()->subDay();

                // Ensure start is before end
                if ($startDate > $endDate) {
                    $endDate = $startDate->copy()->addDays(1);
                }

                return [
                    'expiry_date' => Carbon::instance($this->faker->dateTimeBetween($startDate, $endDate)),
                ];
            } catch (\InvalidArgumentException $e) {
                return [
                    'expiry_date' => now()->subDays(30),
                ];
            }
        });
    }

    /**
     * Indicate the item is expiring soon.
     */
    public function expiringSoon(int $days = 30): static
    {
        return $this->state(function (array $attributes) use ($days) {
            try {
                $startDate = now();
                $endDate = now()->addDays($days);

                // Ensure start is before end
                if ($startDate > $endDate) {
                    $endDate = $startDate->copy()->addDays($days);
                }

                return [
                    'expiry_date' => Carbon::instance($this->faker->dateTimeBetween($startDate, $endDate)),
                ];
            } catch (\InvalidArgumentException $e) {
                return [
                    'expiry_date' => now()->addDays(15),
                ];
            }
        });
    }

    /**
     * Set for a specific purchase receipt.
     */
    public function forPurchaseReceipt(int $purchaseReceiptId): static
    {
        return $this->state(function (array $attributes) use ($purchaseReceiptId) {
            return [
                'purchase_receipt_id' => $purchaseReceiptId,
            ];
        });
    }

    /**
     * Set for a specific purchase order item.
     */
    public function forPurchaseOrderItem(int $purchaseOrderItemId): static
    {
        return $this->state(function (array $attributes) use ($purchaseOrderItemId) {
            return [
                'purchase_order_item_id' => $purchaseOrderItemId,
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
    public function atLocation(int $locationId): static
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
                'quantity_received' => $quantity,
            ];
        });
    }

    /**
     * Set a specific unit cost.
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
     * Create multiple serial numbers for a product with duplicate checking.
     */
    public function withMultipleSerials(int $count): static
    {
        return $this->afterCreating(function (PurchaseReceiptItem $item) use ($count) {
            $existingCount = PurchaseReceiptItem::where('purchase_order_item_id', $item->purchase_order_item_id)
                ->where('purchase_receipt_id', $item->purchase_receipt_id)
                ->count();

            $needed = $count - $existingCount;

            for ($i = 1; $i <= $needed; $i++) {
                // Check if this combination already exists
                $exists = PurchaseReceiptItem::where('purchase_receipt_id', $item->purchase_receipt_id)
                    ->where('purchase_order_item_id', $item->purchase_order_item_id)
                    ->where('serial_number', $this->generateSerialNumber())
                    ->exists();

                if (!$exists) {
                    self::factory()
                        ->forPurchaseReceipt($item->purchase_receipt_id)
                        ->forPurchaseOrderItem($item->purchase_order_item_id)
                        ->forProduct($item->product_id)
                        ->atLocation($item->location_id)
                        ->withSerial()
                        ->withQuantity(1)
                        ->create();
                }
            }
        });
    }

    /**
     * Create item with quality hold notes.
     */
    public function onQualityHold(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'notes' => 'On quality hold - awaiting inspection',
            ];
        });
    }

    /**
     * Create item with damage notes.
     */
    public function damaged(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'notes' => 'Item damaged during transit',
            ];
        });
    }

    /**
     * Create item with correct tracking based on product settings.
     */
    public function withProductTracking(Product $product): static
    {
        $state = [];

        if ($product->is_batch_tracked) {
            $state['batch_number'] = $this->generateBatchNumber();
        }

        if ($product->is_serial_tracked) {
            $state['serial_number'] = $this->generateSerialNumber();
            $state['quantity_received'] = 1;
        }

        if ($product->is_expirable) {
            try {
                $state['expiry_date'] = $this->generateExpiryDate();
            } catch (\Exception $e) {
                $state['expiry_date'] = now()->addMonths(6);
            }
        }

        return $this->state($state);
    }

    /**
     * Reset the static generated serials (useful for testing).
     */
    public static function resetGeneratedSerials(): void
    {
        self::$generatedSerials = [];
    }
}
