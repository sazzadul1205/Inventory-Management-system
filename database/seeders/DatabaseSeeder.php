<?php
// database/seeders/DatabaseSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

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
        $this->command->info('🚀 Starting database seeding...');
        $this->command->newLine();

        // ===========================================
        // STEP 1: Foundation Data (No Dependencies)
        // ===========================================
        $this->command->info('📦 Seeding foundation data...');
        $this->call(SettingSeeder::class);
        $this->call(RoleSeeder::class);

        // ===========================================
        // STEP 2: Core Structure (Depends on Foundation)
        // ===========================================
        $this->command->info('🏗️  Seeding core structure...');
        $this->call(UserSeeder::class);
        $this->call(DepartmentSeeder::class);

        // ===========================================
        // STEP 3: Warehouse & Locations
        // ===========================================
        $this->command->info('🏭 Seeding warehouse structure...');
        $this->call(WarehouseSeeder::class);
        $this->call(LocationSeeder::class);

        // ===========================================
        // STEP 4: Product Catalog
        // ===========================================
        $this->command->info('📦 Seeding product catalog...');
        $this->call(CategorySeeder::class);
        $this->call(ProductSeeder::class);

        // ===========================================
        // STEP 5: Suppliers & Customers
        // ===========================================
        $this->command->info('🤝 Seeding suppliers and customers...');
        $this->call(SupplierSeeder::class);
        $this->call(CustomerSeeder::class);

        // ===========================================
        // STEP 6: Product-Supplier Relationships
        // ===========================================
        $this->command->info('🔗 Seeding product-supplier relationships...');
        $this->call(ProductSupplierSeeder::class);

        // ===========================================
        // STEP 7: Inventory
        // ===========================================
        $this->command->info('📊 Seeding inventory...');
        $this->call(InventorySeeder::class);

        // ===========================================
        // STEP 8: Stock Operations
        // ===========================================
        $this->command->info('🔄 Seeding stock operations...');
        $this->call(StockCountSeeder::class);
        $this->call(StockCountItemSeeder::class);
        $this->call(StockTransferSeeder::class);
        $this->call(StockTransferItemSeeder::class);

        // ===========================================
        // STEP 9: Orders & Fulfillment
        // ===========================================
        $this->command->info('📋 Seeding orders and fulfillment...');
        $this->call(PurchaseOrderSeeder::class);
        $this->call(PurchaseOrderItemSeeder::class);
        $this->call(PurchaseReceiptSeeder::class);
        $this->call(PurchaseReceiptItemSeeder::class);
        $this->call(SalesOrderSeeder::class);
        $this->call(SalesOrderItemSeeder::class);
        $this->call(ShipmentSeeder::class);
        $this->call(ShipmentItemSeeder::class);

        // ===========================================
        // STEP 10: Movements & Logs
        // ===========================================
        $this->command->info('📝 Seeding movements and logs...');
        $this->call(InventoryMovementSeeder::class);
        $this->call(AuditLogSeeder::class);

        $this->command->newLine();
        $this->command->info('✅ Database seeding completed successfully!');
    }
}
