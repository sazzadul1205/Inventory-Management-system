<?php
// database/seeders/RoleSeeder.php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       // DB::statement('SET FOREIGN_KEY_CHECKS=0');
        Role::truncate();
         // DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating roles...');
        $this->command->getOutput()->progressStart(100);

        $this->createAllRoles();
        $this->createCustomRoles();

        $this->command->getOutput()->progressFinish();
        $this->displayStatistics();
    }


    /**
     * Create all roles with appropriate permissions.
     */
    protected function createAllRoles(): void
    {
        $this->command->info("\nCreating standard roles...");

        // 1. Administrator - full access
        Role::factory()
            ->admin()
            ->withUsers(rand(1, 3))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 2. Inventory Manager
        Role::factory()
            ->inventoryManager()
            ->withUsers(rand(2, 4))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 3. Warehouse Supervisor
        Role::factory()
            ->warehouseSupervisor()
            ->withUsers(rand(3, 5))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 4. Purchasing Manager
        Role::factory()
            ->purchasingManager()
            ->withUsers(rand(1, 3))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 5. Purchasing Agent
        Role::factory()
            ->purchasingManager() // Using purchasing manager as base
            ->named('Purchasing Agent')
            ->describedAs('Creates and manages purchase orders')
            ->withPermissions([
                'purchase.view',
                'purchase.create',
                'purchase.edit',
                'supplier.view',
                'inventory.view',
            ])
            ->withUsers(rand(2, 4))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 6. Receiving Clerk
        Role::factory()
            ->receivingClerk()
            ->withUsers(rand(4, 8))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 7. Shipping Clerk
        Role::factory()
            ->shippingClerk()
            ->withUsers(rand(4, 8))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 8. Quality Control
        Role::factory()
            ->qualityControl()
            ->withUsers(rand(2, 4))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 9. Sales Manager
        Role::factory()
            ->salesManager()
            ->withUsers(rand(1, 3))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 10. Sales Representative
        Role::factory()
            ->salesManager() // Using sales manager as base
            ->named('Sales Representative')
            ->describedAs('Creates and manages sales orders')
            ->withPermissions([
                'sales.view',
                'sales.create',
                'sales.edit',
                'customer.view',
                'inventory.view',
            ])
            ->withUsers(rand(3, 6))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 11. Inventory Planner
        Role::factory()
            ->inventoryManager() // Using inventory manager as base
            ->named('Inventory Planner')
            ->describedAs('Plans inventory levels and reorder points')
            ->withPermissions([
                'inventory.view',
                'inventory.plan',
                'reports.forecast',
                'reports.inventory',
                'purchase.view',
            ])
            ->withUsers(rand(1, 2))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 12. Cycle Counter
        Role::factory()
            ->cycleCounter()
            ->withUsers(rand(2, 4))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 13. Financial Analyst
        Role::factory()
            ->named('Financial Analyst')
            ->describedAs('Analyzes inventory costs and financial reports')
            ->withPermissions([
                'inventory.view',
                'reports.financial',
                'reports.inventory',
                'reports.cost',
            ])
            ->withUsers(rand(1, 2))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 14. IT Administrator
        Role::factory()
            ->itAdmin()
            ->withUsers(rand(1, 3))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 15. Auditor
        Role::factory()
            ->named('Auditor')
            ->describedAs('Views audit logs and compliance reports')
            ->withPermissions([
                'audit.view',
                'reports.audit',
                'inventory.view',
            ])
            ->withUsers(rand(1, 2))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 16. Guest
        Role::factory()
            ->guest()
            ->withUsers(rand(0, 1))
            ->create();
        $this->command->getOutput()->progressAdvance(5);

        // 17. Temporary Worker
        Role::factory()
            ->named('Temporary Worker')
            ->describedAs('Limited access for temporary staff')
            ->withPermissions([
                'inventory.view',
                'inventory.count',
                'location.view',
            ])
            ->withUsers(rand(0, 5))
            ->create();
        $this->command->getOutput()->progressAdvance(5);
    }

    /**
     * Create custom roles for specific scenarios.
     */
    protected function createCustomRoles(): void
    {
        $this->command->info("\nCreating custom roles...");

        // 1. Night Shift Supervisor
        Role::factory()
            ->warehouseSupervisor()
            ->named('Night Shift Supervisor')
            ->describedAs('Supervises night warehouse operations')
            ->withUsers(rand(1, 2))
            ->create();
        $this->command->getOutput()->progressAdvance(2);

        // 2. Hazardous Materials Specialist
        Role::factory()
            ->qualityControl()
            ->named('HazMat Specialist')
            ->describedAs('Handles hazardous materials and compliance')
            ->withPermissions([
                'inventory.view',
                'inventory.receive',
                'inventory.ship',
                'inventory.quarantine',
                'hazmat.manage',
                'safety.compliance',
            ])
            ->withUsers(rand(1, 2))
            ->create();
        $this->command->getOutput()->progressAdvance(2);

        // 3. Export Compliance Officer
        Role::factory()
            ->named('Export Compliance Officer')
            ->describedAs('Ensures export regulations compliance')
            ->withPermissions([
                'inventory.view',
                'sales.view',
                'customer.view',
                'export.manage',
                'compliance.review',
                'reports.export',
            ])
            ->withUsers(rand(0, 1))
            ->create();
        $this->command->getOutput()->progressAdvance(2);

        // 4. Returns Processing Specialist
        Role::factory()
            ->receivingClerk()
            ->named('Returns Specialist')
            ->describedAs('Processes customer returns and RMA')
            ->withPermissions([
                'inventory.view',
                'inventory.receive',
                'returns.process',
                'quality.inspect',
                'customer.view',
            ])
            ->withUsers(rand(1, 3))
            ->create();
        $this->command->getOutput()->progressAdvance(2);

        // 5. System Administrator (super user)
        Role::factory()
            ->admin()
            ->named('System Administrator')
            ->describedAs('Full system access including configuration')
            ->withUsers(rand(1, 2))
            ->create();
        $this->command->getOutput()->progressAdvance(2);

        // 6. Training Role (limited permissions for training)
        Role::factory()
            ->named('Trainee')
            ->describedAs('Limited access for training purposes')
            ->withPermissions([
                'inventory.view',
                'reports.view',
            ])
            ->withUsers(rand(2, 4))
            ->create();
        $this->command->getOutput()->progressAdvance(2);

        // 7. External Auditor
        Role::factory()
            ->named('External Auditor')
            ->describedAs('Temporary access for external audits')
            ->withPermissions([
                'inventory.view',
                'reports.audit',
                'reports.financial',
            ])
            ->withUsers(rand(0, 1))
            ->create();
        $this->command->getOutput()->progressAdvance(2);

        // 8. Maintenance Supervisor
        Role::factory()
            ->named('Maintenance Supervisor')
            ->describedAs('Manages equipment maintenance')
            ->withPermissions([
                'equipment.view',
                'maintenance.schedule',
                'maintenance.record',
                'inventory.view',
            ])
            ->withUsers(rand(1, 2))
            ->create();
        $this->command->getOutput()->progressAdvance(2);
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nRole Statistics:");

        $stats = Role::getUsageStatistics();

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Roles', $stats['total_roles']],
                ['Total Users in Roles', $stats['total_users_in_roles']],
                ['Unused Roles', $stats['unused_roles']],
                ['Most Popular Role', $stats['most_popular'] ?? 'N/A'],
            ]
        );

        // Show role details
        $this->command->info("\nRole Details:");
        $roles = Role::withCount('users')->orderBy('users_count', 'desc')->get();

        $roleData = $roles->map(function ($role) {
            return [
                $role->name,
                $role->users_count,
                $role->permissions_count === PHP_INT_MAX ? '∞' : $role->permissions_count,
                $role->is_admin ? 'Yes' : 'No',
                $role->isSystemRole() ? 'Yes' : 'No',
            ];
        })->toArray();

        $this->command->table(
            ['Role Name', 'Users', 'Permissions', 'Admin', 'System'],
            $roleData
        );

        // Show unused roles
        $unusedRoles = Role::unused()->get();
        if ($unusedRoles->isNotEmpty()) {
            $this->command->warn("\n⚠️  Unused Roles (" . $unusedRoles->count() . "):");
            $this->command->line($unusedRoles->pluck('name')->implode(', '));
        }

        // Show sample role permissions
        $sampleRole = Role::where('name', 'Inventory Manager')->first();
        if ($sampleRole) {
            $this->command->info("\nSample Permissions for 'Inventory Manager':");
            $permissions = $sampleRole->permissions_list;

            if ($permissions === ['*']) {
                $this->command->line('All permissions granted');
            } else {
                $this->command->table(
                    ['Category', 'Permissions'],
                    collect($sampleRole->getPermissionCategories())
                        ->map(fn($perms, $cat) => [$cat, implode(', ', $perms)])
                        ->toArray()
                );
            }
        }
    }
}
