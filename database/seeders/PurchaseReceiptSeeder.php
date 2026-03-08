<?php
// database/seeders/PurchaseReceiptSeeder.php

namespace Database\Seeders;

use App\Models\Location;
use App\Models\PurchaseReceipt;
use App\Models\PurchaseOrder;
use App\Models\PurchaseOrderItem;
use App\Models\PurchaseReceiptItem;
use App\Models\Warehouse;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class PurchaseReceiptSeeder extends Seeder
{
    use ChecksDependencies;

    /**
     * Number of receipts to create
     */
    protected const RECEIPT_COUNT = 10; // Was 200

    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        if (!$this->checkDependencies([
            PurchaseOrder::class => 'No purchase orders found',
            Warehouse::class => 'No warehouses found',
            User::class => 'No users found',
        ])) {
            return;
        }

       DB::statement('SET FOREIGN_KEY_CHECKS=0');
        PurchaseReceipt::truncate();
       DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating purchase receipts...');
        $this->command->getOutput()->progressStart(self::RECEIPT_COUNT);

        $this->createReceiptsForReceivedPOs();
        $this->createSpecializedReceipts();

        $this->command->getOutput()->progressFinish();
        $this->displayStatistics();
    }

    /**
     * Check if required data exists.
     */
    protected function checkPrerequisites(): void
    {
        if (PurchaseOrder::count() == 0) {
            $this->command->warn('No purchase orders found. Running PurchaseOrderSeeder first...');
            $this->call(PurchaseOrderSeeder::class);
        }

        if (Warehouse::count() == 0) {
            $this->command->warn('No warehouses found. Running WarehouseSeeder first...');
            $this->call(WarehouseSeeder::class);
        }

        if (User::count() == 0) {
            $this->command->warn('No users found. Running UserSeeder first...');
            $this->call(UserSeeder::class);
        }
    }

    /**
     * Create receipts for purchase orders with received status.
     */
    protected function createReceiptsForReceivedPOs(): void
    {
        $receivedPOs = PurchaseOrder::whereIn('status', [
            PurchaseOrder::STATUS_PARTIALLY_RECEIVED,
            PurchaseOrder::STATUS_RECEIVED
        ])->get();

        $receiptsPerPO = [
            PurchaseOrder::STATUS_RECEIVED => 1,
            PurchaseOrder::STATUS_PARTIALLY_RECEIVED => rand(2, 4)
        ];

        foreach ($receivedPOs as $po) {
            $receiptCount = $receiptsPerPO[$po->status] ?? 1;

            for ($i = 0; $i < $receiptCount; $i++) {
                $isLastReceipt = ($i === $receiptCount - 1);

                $receipt = PurchaseReceipt::factory()
                    ->forPurchaseOrder($po->id)
                    ->forWarehouse($po->warehouse_id)
                    ->when(
                        $po->status === PurchaseOrder::STATUS_RECEIVED && $isLastReceipt,
                        fn($f) => $f->completed(),
                        fn($f) => $f
                    )
                    ->create();

                // Add items to this receipt
                $this->addItemsToReceipt($receipt, $po, $isLastReceipt);

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Add items to a receipt.
     */
    protected function addItemsToReceipt(PurchaseReceipt $receipt, PurchaseOrder $po, bool $isLastReceipt): void
    {
        if (!class_exists('PurchaseReceiptItem')) {
            return;
        }

        $poItems = $po->items;
        $items = [];

        foreach ($poItems as $poItem) {
            $remaining = $poItem->quantity_ordered - $poItem->quantity_received;

            if ($remaining <= 0) {
                continue;
            }

            if ($isLastReceipt) {
                // Receive all remaining in last receipt
                $quantity = $remaining;
            } else {
                // Receive partial amount
                $quantity = rand(1, max(1, floor($remaining / 2)));
            }

            $location = Location::where('warehouse_id', $receipt->warehouse_id)
                ->inRandomOrder()
                ->first();

            $itemData = [
                'po_item_id' => $poItem->id,
                'quantity' => $quantity,
                'location_id' => $location?->id,
            ];

            // Add tracking info for tracked products
            if ($poItem->product->is_batch_tracked) {
                $itemData['batch'] = 'BATCH-' . date('y') . '-' . str_pad(rand(1, 999), 3, '0', STR_PAD_LEFT);
            }

            $items[] = $itemData;
        }

        if (!empty($items)) {
            $receipt->addItems($items);
        }
    }

    /**
     * Create specialized receipt scenarios.
     */
    protected function createSpecializedReceipts(): void
    {
        $this->command->info("\nCreating specialized receipts...");

        // 1. Receipts with batch tracking
        $this->createBatchTrackedReceipts();

        // 2. Receipts with serial tracking
        $this->createSerialTrackedReceipts();

        // 3. Receipts with expiring items
        $this->createExpiringItemsReceipts();

        // 4. Receipts without invoices
        $this->createReceiptsWithoutInvoices();

        // 5. Receipts with quality holds
        $this->createReceiptsWithQualityHolds();

        // 6. Split shipment receipts
        $this->createSplitShipmentReceipts();

        // 7. Emergency/expedited receipts
        $this->createEmergencyReceipts();

        // 8. Damaged goods receipts
        $this->createDamagedGoodsReceipts();

        // 9. Cross-dock receipts
        $this->createCrossDockReceipts();

        // 10. Weekend receipts
        $this->createWeekendReceipts();
    }

    /**
     * Create receipts with batch tracking.
     */
    protected function createBatchTrackedReceipts(): void
    {
        $this->command->info('  - Creating batch tracked receipts...');

        for ($i = 0; $i < 8; $i++) {
            try {
                $po = PurchaseOrder::factory()
                    ->approved()
                    ->create();

                PurchaseReceipt::factory()
                    ->forPurchaseOrder($po->id)
                    ->completed()
                    ->withBatchItems(rand(2, 4))
                    ->create();
            } catch (\Illuminate\Database\UniqueConstraintViolationException $e) {
                // If PO number duplicate, retry with a new one
                $this->command->warn('Duplicate PO number encountered, retrying...');
                $i--; // Decrement counter to retry this iteration
                continue;
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create receipts with serial tracking.
     */
    protected function createSerialTrackedReceipts(): void
    {
        $this->command->info('  - Creating serial tracked receipts...');

        for ($i = 0; $i < 6; $i++) {
            try {
                $po = PurchaseOrder::factory()
                    ->approved()
                    ->create();

                PurchaseReceipt::factory()
                    ->forPurchaseOrder($po->id)
                    ->completed()
                    ->withSerialItems(rand(3, 8))
                    ->create();
            } catch (\Illuminate\Database\UniqueConstraintViolationException $e) {
                $this->command->warn('Duplicate PO number encountered, retrying...');
                $i--;
                continue;
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create receipts with expiring items.
     */
    protected function createExpiringItemsReceipts(): void
    {
        $this->command->info('  - Creating expiring items receipts...');

        for ($i = 0; $i < 5; $i++) {
            $po = PurchaseOrder::factory()
                ->approved()
                ->create();

            PurchaseReceipt::factory()
                ->forPurchaseOrder($po->id)
                ->completed()
                ->withExpiringItems(rand(2, 3))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create receipts without invoices.
     */
    protected function createReceiptsWithoutInvoices(): void
    {
        $this->command->info('  - Creating receipts without invoices...');

        for ($i = 0; $i < 10; $i++) {
            $po = PurchaseOrder::factory()
                ->approved()
                ->create();

            PurchaseReceipt::factory()
                ->forPurchaseOrder($po->id)
                ->withoutInvoice()
                ->withItems(rand(2, 4))
                ->state([
                    'notes' => 'Invoice pending from supplier',
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create receipts with quality holds.
     */
    protected function createReceiptsWithQualityHolds(): void
    {
        $this->command->info('  - Creating receipts with quality holds...');

        for ($i = 0; $i < 5; $i++) {
            $po = PurchaseOrder::factory()
                ->approved()
                ->create();

            $receipt = PurchaseReceipt::factory()
                ->forPurchaseOrder($po->id)
                ->completed()
                ->create();

            // Add items with quality hold notes
            if (class_exists('PurchaseReceiptItem')) {
                $poItem = $po->items()->first() ?? PurchaseOrderItem::factory()
                    ->forPurchaseOrder($po->id)
                    ->create();

                PurchaseReceiptItem::factory()
                    ->forPurchaseOrderItem($poItem->id)
                    ->forPurchaseReceipt($receipt->id)
                    ->withQuantity(10)
                    ->state([
                        'notes' => 'On quality hold - awaiting inspection',
                    ])
                    ->create();
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create split shipment receipts.
     */
    protected function createSplitShipmentReceipts(): void
    {
        $this->command->info('  - Creating split shipment receipts...');

        for ($i = 0; $i < 4; $i++) {
            $po = PurchaseOrder::factory()
                ->approved()
                ->create();

            $totalQuantity = rand(100, 300);

            // Create multiple receipts for the same PO
            for ($j = 0; $j < 3; $j++) {
                $receipt = PurchaseReceipt::factory()
                    ->forPurchaseOrder($po->id)
                    ->partiallyReceived()
                    ->create();

                $quantity = $j === 2 ? $totalQuantity : rand(30, 50);
                $totalQuantity -= $quantity;

                if (class_exists('PurchaseReceiptItem')) {
                    $poItem = $po->items()->first() ?? PurchaseOrderItem::factory()
                        ->forPurchaseOrder($po->id)
                        ->withQuantity($totalQuantity + $quantity, 50, $j === 2 ? $totalQuantity + $quantity : 0)
                        ->create();

                    PurchaseReceiptItem::factory()
                        ->forPurchaseOrderItem($poItem->id)
                        ->forPurchaseReceipt($receipt->id)
                        ->withQuantity($quantity)
                        ->create();
                }

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create emergency/expedited receipts.
     */
    protected function createEmergencyReceipts(): void
    {
        $this->command->info('  - Creating emergency receipts...');

        for ($i = 0; $i < 6; $i++) {
            $po = PurchaseOrder::factory()
                ->urgent()
                ->create();

            PurchaseReceipt::factory()
                ->forPurchaseOrder($po->id)
                ->completed()
                ->withItems(rand(1, 3))
                ->state([
                    'notes' => 'Emergency receipt - expedited processing',
                    'receipt_date' => now()->subHours(rand(1, 24)),
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create damaged goods receipts.
     */
    protected function createDamagedGoodsReceipts(): void
    {
        $this->command->info('  - Creating damaged goods receipts...');

        for ($i = 0; $i < 4; $i++) {
            $po = PurchaseOrder::factory()
                ->approved()
                ->create();

            $receipt = PurchaseReceipt::factory()
                ->forPurchaseOrder($po->id)
                ->partiallyReceived()
                ->create();

            if (class_exists('PurchaseReceiptItem')) {
                $poItem = $po->items()->first() ?? PurchaseOrderItem::factory()
                    ->forPurchaseOrder($po->id)
                    ->withQuantity(50, 100, 30)
                    ->create();

                // Good items
                PurchaseReceiptItem::factory()
                    ->forPurchaseOrderItem($poItem->id)
                    ->forPurchaseReceipt($receipt->id)
                    ->withQuantity(25)
                    ->create();

                // Damaged items
                PurchaseReceiptItem::factory()
                    ->forPurchaseOrderItem($poItem->id)
                    ->forPurchaseReceipt($receipt->id)
                    ->withQuantity(5)
                    ->state([
                        'notes' => 'Items damaged in transit',
                    ])
                    ->create();
            }

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create cross-dock receipts (items moved directly to outbound).
     */
    protected function createCrossDockReceipts(): void
    {
        $this->command->info('  - Creating cross-dock receipts...');

        for ($i = 0; $i < 5; $i++) {
            $po = PurchaseOrder::factory()
                ->approved()
                ->create();

            PurchaseReceipt::factory()
                ->forPurchaseOrder($po->id)
                ->completed()
                ->withItems(rand(2, 4))
                ->state([
                    'notes' => 'Cross-dock - items transferred to shipping',
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create receipts from weekend deliveries.
     */
    protected function createWeekendReceipts(): void
    {
        $this->command->info('  - Creating weekend receipts...');

        for ($i = 0; $i < 4; $i++) {
            $po = PurchaseOrder::factory()
                ->approved()
                ->create();

            // Set receipt date to a weekend
            $weekendDate = now()->subDays(rand(1, 30));
            while ($weekendDate->dayOfWeek !== 0 && $weekendDate->dayOfWeek !== 6) {
                $weekendDate = $weekendDate->subDay();
            }

            PurchaseReceipt::factory()
                ->forPurchaseOrder($po->id)
                ->completed()
                ->withItems(rand(2, 4))
                ->receivedOn($weekendDate->format('Y-m-d'))
                ->state([
                    'notes' => 'Weekend delivery - special handling',
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nPurchase Receipt Statistics:");

        $stats = PurchaseReceipt::getStatistics(365);

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Receipts', $stats['total_receipts']],
                ['Unique Purchase Orders', $stats['unique_pos']],
                ['Total Items Received', number_format($stats['total_items_received'])],
                ['Total Value Received', '$' . number_format($stats['total_value_received'], 2)],
                ['Average per Day', $stats['average_per_day']],
            ]
        );

        // Show status breakdown
        $this->command->info("\nReceipts by Status:");
        $byStatus = PurchaseReceipt::select('status', DB::raw('count(*) as count'))
            ->groupBy('status')
            ->get()
            ->mapWithKeys(function ($item) {
                return [$item->status => $item->count];
            });

        $statusData = [];
        foreach (PurchaseReceipt::$statuses as $status => $label) {
            $statusData[] = [$label, $byStatus[$status] ?? 0];
        }

        $this->command->table(['Status', 'Count'], $statusData);

        // Show recent activity
        $this->command->info("\nRecent Receipt Activity:");
        $daily = $stats['daily_summary']->take(5);

        if ($daily->isNotEmpty()) {
            $this->command->table(
                ['Date', 'Receipts', 'Items', 'Value'],
                $daily->map(function ($item) {
                    return [
                        $item->date,
                        $item->receipt_count,
                        number_format($item->items_received),
                        '$' . number_format($item->value_received, 2),
                    ];
                })->toArray()
            );
        }

        // Show top receivers
        $this->command->info("\nTop Receivers:");
        $topReceivers = PurchaseReceipt::select('received_by', DB::raw('count(*) as receipt_count'))
            ->with('receivedBy')
            ->groupBy('received_by')
            ->orderBy('receipt_count', 'desc')
            ->limit(3)
            ->get();

        $this->command->table(
            ['User', 'Receipts Count'],
            $topReceivers->map(function ($item) {
                return [$item->receivedBy?->name ?? 'Unknown', $item->receipt_count];
            })->toArray()
        );
    }
}
