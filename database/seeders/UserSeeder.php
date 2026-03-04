<?php
// database/seeders/UserSeeder.php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use App\Models\Department;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        User::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $departments = Department::all()->keyBy('name');
        $adminRole = Role::where('name', 'admin')->first();

        // Create super admin
        User::factory()
            ->withRole('super_admin')
            ->active()
            ->named('Super', 'Admin')
            ->create([
                'username' => 'super.admin',
                'email' => 'super.admin@example.com',
                'password_hash' => Hash::make('password'),
            ]);

        // Create admin user related to admin-level role
        User::factory()
            ->active()
            ->named('Admin', 'User')
            ->create([
                'username' => 'admin',
                'email' => 'admin@example.com',
                'password_hash' => Hash::make('password'),
                'role_id' => $adminRole?->id,
            ]);

        // Create inventory managers for relevant departments
        foreach (['Warehouse', 'Purchasing', 'Inventory Control'] as $deptName) {
            User::factory()
                ->inventoryManager()
                ->active()
                ->inDepartment($departments[$deptName])
                ->named("Manager", $deptName)
                ->create([
                    'username' => 'manager.' . strtolower(str_replace(' ', '.', $deptName)),
                    'email' => 'manager.' . strtolower(str_replace(' ', '.', $deptName)) . '@example.com',
                ]);
        }

        // Create store keepers for Warehouse
        User::factory()
            ->count(3)
            ->storeKeeper()
            ->active()
            ->inDepartment($departments['Warehouse'])
            ->create();

        // Create sales staff for Sales
        User::factory()
            ->count(5)
            ->salesStaff()
            ->active()
            ->inDepartment($departments['Sales'])
            ->create();

        // Create auditors (read-only)
        User::factory()
            ->count(3)
            ->auditor()
            ->active()
            ->create();

        // Fill remaining staff randomly
        foreach ($departments as $department) {
            User::factory()
                ->count(rand(2, 5))
                ->storeKeeper()
                ->active()
                ->inDepartment($department)
                ->create();
        }

        $this->command->info('Inventory users seeded successfully.');
    }
}
