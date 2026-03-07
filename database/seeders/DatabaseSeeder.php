<?php
// database/seeders/DatabaseSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            SettingSeeder::class,
            RoleSeeder::class,
            UserSeeder::class,
            DepartmentSeeder::class,
            WarehouseSeeder::class, // Add this
            LocationSeeder::class,
            CategorySeeder::class,
            ProductSeeder::class,
            SupplierSeeder::class,
            ProductSupplierSeeder::class,
            CustomerSeeder::class,
            InventorySeeder::class,
            StockCountSeeder::class,
            StockCountItemSeeder::class,
            StockTransferSeeder::class,
            StockTransferItemSeeder::class,
            PurchaseOrderSeeder::class,
            PurchaseOrderItemSeeder::class,
            PurchaseReceiptSeeder::class,
            PurchaseReceiptItemSeeder::class,
            SalesOrderSeeder::class,
            SalesOrderItemSeeder::class,
            ShipmentSeeder::class,
            ShipmentItemSeeder::class,
            InventoryMovementSeeder::class,
        ]);
    }
}
