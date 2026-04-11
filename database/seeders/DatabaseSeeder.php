<?php
// database/seeders/DatabaseSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;

// Seeder Classes
use Database\Seeders\PageRelatedSeeders\PageSeeders;
use Database\Seeders\PageRelatedSeeders\PageSectionsSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     * 
     * IMPORTANT: This master seeder controls the order.
     * DO NOT call other seeders from within individual seeders.
     */
    public function run(): void
    {
        // Check if running in production
        if (app()->environment('production')) {
            $confirm = $this->command->confirm('⚠️  You are in PRODUCTION environment! Seeding will modify your database. Are you sure you want to continue?');

            if (!$confirm) {
                $this->command->error('❌ Seeding cancelled.');
                return;
            }
        }

        $this->command->newLine();
        $this->command->info('🎯 Database Seeder Menu');
        $this->command->line('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

        // Ask which part to seed
        $choice = $this->command->choice(
            'What would you like to seed?',
            [
                'all' => '🚀 Seed Everything (Pages + Data)',
                'pages' => '📄 Seed Only Pages & Sections',
                'data' => '📦 Seed Only Data (Products, Orders, etc.)',
                'cancel' => '❌ Cancel',
            ],
            'all'
        );

        // Handle cancellation
        if ($choice === 'cancel') {
            $this->command->info('❌ Seeding cancelled.');
            return;
        }

        $this->command->newLine();

        // ===========================================
        // SEED PAGES & SECTIONS
        // ===========================================
        if ($choice === 'all' || $choice === 'pages') {
            $this->seedPagesAndSections();
        }

        // ===========================================
        // SEED DATA (Products, Orders, etc.)
        // ===========================================
        if ($choice === 'all' || $choice === 'data') {
            $this->seedData();
        }

        $this->command->newLine();
        $this->command->info('✅ Database seeding completed successfully!');
    }

    /**
     * Seed Pages and Sections only
     */
    protected function seedPagesAndSections(): void
    {
        $this->command->info('📄 Seeding Pages and Sections...');
        $this->command->line('──────────────────────────────────────────');

        // Confirm pages seeding
        $confirm = $this->command->confirm('Do you want to seed Pages?', true);
        if ($confirm) {
            $this->call(PageSeeders::class);
            $this->call(PageSectionsSeeder::class);
            $this->command->info('✅ Pages and Sections seeded successfully!');
        } else {
            $this->command->warn('⚠️  Skipped Pages and Sections seeding.');
        }
    }

    /**
     * Seed Data (Products, Orders, etc.)
     */
    protected function seedData(): void
    {
        $this->command->info('📦 Seeding Data (Products, Orders, etc.)...');
        $this->command->line('──────────────────────────────────────────');

        // Confirm data seeding
        $confirm = $this->command->confirm('Do you want to seed all data?', true);

        if (!$confirm) {
            $this->command->warn('⚠️  Skipped Data seeding.');
            return;
        }

        // Ask for specific data seeding
        $seedOption = $this->command->choice(
            'What data would you like to seed?',
            [
                'all_data' => '📦 Seed All Data',
                'selective' => '🎯 Select Specific Data',
                'skip' => '⏭️  Skip',
            ],
            'all_data'
        );

        if ($seedOption === 'skip') {
            $this->command->warn('⚠️  Skipped Data seeding.');
            return;
        }

        if ($seedOption === 'selective') {
            $this->seedSelectiveData();
            return;
        }

        // Seed all data
        $this->seedAllData();
    }

    /**
     * Seed all data
     */
    protected function seedAllData(): void
    {
        // ===========================================
        // STEP 1: Foundation Data (No Dependencies)
        // ===========================================
        $this->command->info('📦 Seeding foundation data...');
        $this->callIfExists('SettingSeeder');
        $this->callIfExists('RoleSeeder');

        // ===========================================
        // STEP 2: Core Structure (Depends on Foundation)
        // ===========================================
        $this->command->info('🏗️  Seeding core structure...');
        $this->callIfExists('UserSeeder');
        $this->callIfExists('DepartmentSeeder');

        // ===========================================
        // STEP 3: Warehouse & Locations
        // ===========================================
        $this->command->info('🏭 Seeding warehouse structure...');
        $this->callIfExists('WarehouseSeeder');
        $this->callIfExists('LocationSeeder');

        // ===========================================
        // STEP 4: Product Catalog
        // ===========================================
        $this->command->info('📦 Seeding product catalog...');
        $this->callIfExists('CategorySeeder');
        $this->callIfExists('ProductSeeder');

        // ===========================================
        // STEP 5: Suppliers & Customers
        // ===========================================
        $this->command->info('🤝 Seeding suppliers and customers...');
        $this->callIfExists('SupplierSeeder');
        $this->callIfExists('CustomerSeeder');

        // ===========================================
        // STEP 6: Product-Supplier Relationships
        // ===========================================
        $this->command->info('🔗 Seeding product-supplier relationships...');
        $this->callIfExists('ProductSupplierSeeder');

        // ===========================================
        // STEP 7: Inventory
        // ===========================================
        $this->command->info('📊 Seeding inventory...');
        $this->callIfExists('InventorySeeder');

        // ===========================================
        // STEP 8: Stock Operations
        // ===========================================
        $this->command->info('🔄 Seeding stock operations...');
        $this->callIfExists('StockCountSeeder');
        $this->callIfExists('StockCountItemSeeder');
        $this->callIfExists('StockTransferSeeder');
        $this->callIfExists('StockTransferItemSeeder');

        // ===========================================
        // STEP 9: Orders & Fulfillment
        // ===========================================
        $this->command->info('📋 Seeding orders and fulfillment...');
        $this->callIfExists('PurchaseOrderSeeder');
        $this->callIfExists('PurchaseOrderItemSeeder');
        $this->callIfExists('PurchaseReceiptSeeder');
        $this->callIfExists('PurchaseReceiptItemSeeder');
        $this->callIfExists('SalesOrderSeeder');
        $this->callIfExists('SalesOrderItemSeeder');
        $this->callIfExists('ShipmentSeeder');
        $this->callIfExists('ShipmentItemSeeder');

        // ===========================================
        // STEP 10: Movements & Logs
        // ===========================================
        $this->command->info('📝 Seeding movements and logs...');
        $this->callIfExists('InventoryMovementSeeder');
        $this->callIfExists('AuditLogSeeder');
    }

    /**
     * Seed selective data with interactive prompts
     */
    protected function seedSelectiveData(): void
    {
        $choices = $this->command->choice(
            'Select which data to seed (comma separated numbers or type "all")',
            [
                '1' => '🏢 Foundation (Settings, Roles)',
                '2' => '👤 Core (Users, Departments)',
                '3' => '🏭 Warehouse & Locations',
                '4' => '📦 Product Catalog',
                '5' => '🤝 Suppliers & Customers',
                '6' => '🔗 Product-Supplier Relationships',
                '7' => '📊 Inventory',
                '8' => '🔄 Stock Operations',
                '9' => '📋 Orders & Fulfillment',
                '10' => '📝 Movements & Logs',
                'all' => '📦 Seed All Data',
            ],
            'all',
            null,
            true // Multiple selections allowed
        );

        // Convert to array if string
        if (is_string($choices)) {
            $choices = explode(',', $choices);
        }

        if (in_array('all', $choices) || $choices === 'all') {
            $this->seedAllData();
            return;
        }

        // Seed selected categories
        if (in_array('1', $choices)) {
            $this->command->info('📦 Seeding foundation data...');
            $this->callIfExists('SettingSeeder');
            $this->callIfExists('RoleSeeder');
        }

        if (in_array('2', $choices)) {
            $this->command->info('🏗️  Seeding core structure...');
            $this->callIfExists('UserSeeder');
            $this->callIfExists('DepartmentSeeder');
        }

        if (in_array('3', $choices)) {
            $this->command->info('🏭 Seeding warehouse structure...');
            $this->callIfExists('WarehouseSeeder');
            $this->callIfExists('LocationSeeder');
        }

        if (in_array('4', $choices)) {
            $this->command->info('📦 Seeding product catalog...');
            $this->callIfExists('CategorySeeder');
            $this->callIfExists('ProductSeeder');
        }

        if (in_array('5', $choices)) {
            $this->command->info('🤝 Seeding suppliers and customers...');
            $this->callIfExists('SupplierSeeder');
            $this->callIfExists('CustomerSeeder');
        }

        if (in_array('6', $choices)) {
            $this->command->info('🔗 Seeding product-supplier relationships...');
            $this->callIfExists('ProductSupplierSeeder');
        }

        if (in_array('7', $choices)) {
            $this->command->info('📊 Seeding inventory...');
            $this->callIfExists('InventorySeeder');
        }

        if (in_array('8', $choices)) {
            $this->command->info('🔄 Seeding stock operations...');
            $this->callIfExists('StockCountSeeder');
            $this->callIfExists('StockCountItemSeeder');
            $this->callIfExists('StockTransferSeeder');
            $this->callIfExists('StockTransferItemSeeder');
        }

        if (in_array('9', $choices)) {
            $this->command->info('📋 Seeding orders and fulfillment...');
            $this->callIfExists('PurchaseOrderSeeder');
            $this->callIfExists('PurchaseOrderItemSeeder');
            $this->callIfExists('PurchaseReceiptSeeder');
            $this->callIfExists('PurchaseReceiptItemSeeder');
            $this->callIfExists('SalesOrderSeeder');
            $this->callIfExists('SalesOrderItemSeeder');
            $this->callIfExists('ShipmentSeeder');
            $this->callIfExists('ShipmentItemSeeder');
        }

        if (in_array('10', $choices)) {
            $this->command->info('📝 Seeding movements and logs...');
            $this->callIfExists('InventoryMovementSeeder');
            $this->callIfExists('AuditLogSeeder');
        }
    }

    /**
     * Call seeder if it exists
     */
    protected function callIfExists(string $seederClass): void
    {
        $fullClass = "Database\\Seeders\\{$seederClass}";

        if (class_exists($fullClass)) {
            $this->call($fullClass);
        } else {
            $this->command->warn("⚠️  Seeder not found: {$seederClass}");
        }
    }
}
