<?php
// database/factories/RoleFactory.php

namespace Database\Factories;

use App\Models\Role;
use Illuminate\Database\Eloquent\Factories\Factory;

class RoleFactory extends Factory
{
    protected $model = Role::class;

    public function definition(): array
    {
        $role = $this->faker->unique()->randomElement([
            'super_admin',
            'inventory_manager',
            'store_keeper',
            'sales_staff',
            'auditor'
        ]);

        return [
            'name' => $role,
            'description' => ucfirst(str_replace('_', ' ', $role)) . ' role',
            'permissions' => $this->permissionsByRole($role),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    private function permissionsByRole(string $role): array
    {
        $permissions = [

            'super_admin' => [
                'all' => true,
            ],

            'inventory_manager' => [
                'all' => false,
                'manage_products' => true,
                'manage_categories' => true,
                'manage_suppliers' => true,
                'manage_purchases' => true,
                'manage_sales' => true,
                'adjust_stock' => true,
                'view_reports' => true,
                'manage_users' => true,
            ],

            'store_keeper' => [
                'all' => false,
                'manage_products' => false,
                'manage_categories' => false,
                'manage_suppliers' => false,
                'manage_purchases' => true,
                'receive_stock' => true,
                'adjust_stock' => true,
                'view_reports' => false,
            ],

            'sales_staff' => [
                'all' => false,
                'manage_sales' => true,
                'create_invoice' => true,
                'view_products' => true,
                'view_stock' => true,
                'view_reports' => false,
            ],

            'auditor' => [
                'all' => false,
                'view_products' => true,
                'view_stock' => true,
                'view_purchases' => true,
                'view_sales' => true,
                'view_reports' => true,
            ],
        ];

        return $permissions[$role] ?? [
            'all' => false,
            'view_products' => true,
        ];
    }

    /*
    |--------------------------------------------------------------------------
    | Role States
    |--------------------------------------------------------------------------
    */

    public function superAdmin(): static
    {
        return $this->state(fn() => [
            'name' => 'super_admin',
            'description' => 'Full system access',
            'permissions' => [
                'all' => true,
            ],
        ]);
    }

    public function inventoryManager(): static
    {
        return $this->state(fn() => [
            'name' => 'inventory_manager',
            'description' => 'Manages stock, products, suppliers, and reports',
            'permissions' => $this->permissionsByRole('inventory_manager'),
        ]);
    }

    public function storeKeeper(): static
    {
        return $this->state(fn() => [
            'name' => 'store_keeper',
            'description' => 'Handles stock receiving and adjustments',
            'permissions' => $this->permissionsByRole('store_keeper'),
        ]);
    }

    public function salesStaff(): static
    {
        return $this->state(fn() => [
            'name' => 'sales_staff',
            'description' => 'Handles sales and invoices',
            'permissions' => $this->permissionsByRole('sales_staff'),
        ]);
    }

    public function auditor(): static
    {
        return $this->state(fn() => [
            'name' => 'auditor',
            'description' => 'Read-only access for auditing and reporting',
            'permissions' => $this->permissionsByRole('auditor'),
        ]);
    }
}
