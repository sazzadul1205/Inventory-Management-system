<?php
// database/seeders/DepartmentSeeder.php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentSeeder extends Seeder
{
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Department::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $departments = [

            [
                'name' => 'Warehouse',
                'description' => 'Handles stock storage, receiving, and inventory control',
            ],

            [
                'name' => 'Purchasing',
                'description' => 'Manages supplier relationships and stock procurement',
            ],

            [
                'name' => 'Sales',
                'description' => 'Handles sales transactions and customer orders',
            ],

            [
                'name' => 'Accounts',
                'description' => 'Manages financial records, payments, and invoices',
            ],

            [
                'name' => 'Logistics',
                'description' => 'Manages stock transfers, delivery, and distribution',
            ],

            [
                'name' => 'Inventory Control',
                'description' => 'Monitors stock levels, audits, and adjustments',
            ],

            [
                'name' => 'Customer Support',
                'description' => 'Handles customer issues related to orders and deliveries',
            ],
        ];

        foreach ($departments as $department) {
            Department::create($department);
        }

        $this->command->info('Inventory departments seeded successfully.');
    }
}
