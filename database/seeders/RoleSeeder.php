<?php
// database/seeders/RoleSeeder.php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Role::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $roles = [

            [
                'name' => 'super_admin',
                'description' => 'Full system access',
                'permissions' => [
                    'all' => true,
                ],
            ],

            [
                'name' => 'admin',
                'description' => 'Administrative access for core system management',
                'permissions' => [
                    'all' => false,
                    'manage_products' => true,
                    'manage_categories' => true,
                    'manage_suppliers' => true,
                    'manage_purchases' => true,
                    'manage_sales' => true,
                    'adjust_stock' => true,
                    'view_stock' => true,
                    'view_reports' => true,
                    'manage_users' => true,
                    'manage_roles' => true,
                    'manage_departments' => true,
                ],
            ],

            [
                'name' => 'inventory_manager',
                'description' => 'Manages products, stock, suppliers, and reports',
                'permissions' => [
                    'all' => false,
                    'manage_products' => true,
                    'manage_categories' => true,
                    'manage_suppliers' => true,
                    'manage_purchases' => true,
                    'manage_sales' => true,
                    'adjust_stock' => true,
                    'view_stock' => true,
                    'view_reports' => true,
                    'manage_users' => true,
                ],
            ],

            [
                'name' => 'store_keeper',
                'description' => 'Handles stock receiving and warehouse operations',
                'permissions' => [
                    'all' => false,
                    'receive_stock' => true,
                    'adjust_stock' => true,
                    'view_products' => true,
                    'view_stock' => true,
                    'manage_products' => false,
                    'view_reports' => false,
                ],
            ],

            [
                'name' => 'sales_staff',
                'description' => 'Handles sales and invoicing',
                'permissions' => [
                    'all' => false,
                    'manage_sales' => true,
                    'create_invoice' => true,
                    'view_products' => true,
                    'view_stock' => true,
                    'view_reports' => false,
                ],
            ],

            [
                'name' => 'auditor',
                'description' => 'Read-only access for auditing and reporting',
                'permissions' => [
                    'all' => false,
                    'view_products' => true,
                    'view_stock' => true,
                    'view_purchases' => true,
                    'view_sales' => true,
                    'view_reports' => true,
                    'export_reports' => true,
                ],
            ],
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }

        $this->command->info('Inventory roles seeded successfully.');
    }
}
