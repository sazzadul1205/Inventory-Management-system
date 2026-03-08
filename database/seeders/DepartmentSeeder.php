<?php
// database/seeders/DepartmentSeeder.php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class DepartmentSeeder extends Seeder
{

    use ChecksDependencies;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       DB::statement('SET FOREIGN_KEY_CHECKS=0');
        Department::truncate();
       DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating organizational departments...');
        $this->command->getOutput()->progressStart(100);

        $this->createCoreDepartments();
        $this->createWarehouseDepartments();
        $this->createSpecializedDepartments();
        $this->createRegionalDistributionCenters();
        $this->createSupportDepartments();
        $this->createAdministrativeDepartments();

        $this->command->getOutput()->progressFinish();

        $averageTeamSize = round(
            Department::withCount('users')->get()->avg('users_count') ?? 0,
            1
        );

        $this->command->table(
            ['Metric', 'Count'],
            [
                ['Total Departments', Department::count()],
                ['With Managers', Department::hasManager()->count()],
                ['Without Managers', Department::noManager()->count()],
                ['Total Department Users', User::whereNotNull('department_id')->count()],
                ['Average Team Size', $averageTeamSize],
            ]
        );

        $this->displayDepartmentHierarchy();
    }

    /**
     * Create core operational departments.
     */
    protected function createCoreDepartments(): void
    {
        $coreDepartments = [
            [
                'name' => 'Inventory Management',
                'users' => 8,
                'has_manager' => true,
                'with_purchase_orders' => true,
                'with_sales_orders' => true,
            ],
            [
                'name' => 'Supply Chain',
                'users' => 6,
                'has_manager' => true,
                'with_purchase_orders' => true,
            ],
            [
                'name' => 'Procurement',
                'users' => 5,
                'has_manager' => true,
                'with_purchase_orders' => true,
            ],
            [
                'name' => 'Logistics',
                'users' => 7,
                'has_manager' => true,
                'with_sales_orders' => true,
            ],
        ];

        foreach ($coreDepartments as $dept) {
            $department = Department::factory()
                ->named($dept['name'])
                ->withTeam($dept['users'], $dept['has_manager'])
                ->create();

            if ($dept['with_purchase_orders'] ?? false) {
                Department::factory()->withPurchaseOrders(rand(5, 10))->createQuietly();
            }

            if ($dept['with_sales_orders'] ?? false) {
                Department::factory()->withSalesOrders(rand(8, 15))->createQuietly();
            }

            $this->command->getOutput()->progressAdvance(2);
        }
    }

    /**
     * Create warehouse operations departments.
     */
    protected function createWarehouseDepartments(): void
    {
        $warehouseDepts = [
            ['name' => 'Receiving Department', 'users' => 12, 'has_manager' => true],
            ['name' => 'Shipping Department', 'users' => 15, 'has_manager' => true],
            ['name' => 'Returns Processing', 'users' => 6, 'has_manager' => true],
            ['name' => 'Packaging Department', 'users' => 10, 'has_manager' => true],
            ['name' => 'Quality Control', 'users' => 4, 'has_manager' => true],
            ['name' => 'Cycle Counting Team', 'users' => 3, 'has_manager' => false],
            ['name' => 'Cross-Docking', 'users' => 5, 'has_manager' => true],
            ['name' => 'Value-Added Services', 'users' => 4, 'has_manager' => true],
        ];

        foreach ($warehouseDepts as $dept) {
            Department::factory()
                ->named($dept['name'])
                ->withTeam($dept['users'], $dept['has_manager'])
                ->withStockCounts(rand(2, 5))
                ->create();

            $this->command->getOutput()->progressAdvance(2);
        }

        // Create additional warehouse departments
        Department::factory()
            ->warehouse()
            ->count(5)
            ->withTeam(rand(4, 8), true)
            ->withStockCounts(rand(1, 3))
            ->create();

        $this->command->getOutput()->progressAdvance(10);
    }

    /**
     * Create specialized storage departments.
     */
    protected function createSpecializedDepartments(): void
    {
        $specializedDepts = [
            [
                'name' => 'Raw Materials Storage',
                'users' => 6,
                'has_manager' => true,
                'description' => 'Stores and manages all raw materials for production',
            ],
            [
                'name' => 'Finished Goods Warehouse',
                'users' => 8,
                'has_manager' => true,
                'description' => 'Stores completed products ready for shipment',
            ],
            [
                'name' => 'Cold Storage',
                'users' => 4,
                'has_manager' => true,
                'description' => 'Temperature-controlled storage for perishable items',
            ],
            [
                'name' => 'Hazardous Materials',
                'users' => 3,
                'has_manager' => true,
                'description' => 'Special handling for dangerous goods and chemicals',
            ],
            [
                'name' => 'High-Value Items',
                'users' => 2,
                'has_manager' => true,
                'description' => 'Secure storage for high-value inventory',
            ],
            [
                'name' => 'Bulk Storage',
                'users' => 3,
                'has_manager' => false,
                'description' => 'Manages high-volume, bulk inventory items',
            ],
            [
                'name' => 'Damaged Goods',
                'users' => 2,
                'has_manager' => false,
                'description' => 'Handles damaged inventory and write-offs',
            ],
        ];

        foreach ($specializedDepts as $dept) {
            Department::factory()
                ->named($dept['name'])
                ->withTeam($dept['users'], $dept['has_manager'])
                ->create([
                    'description' => $dept['description'],
                ]);

            $this->command->getOutput()->progressAdvance(2);
        }

        // Create additional specialized departments
        Department::factory()
            ->specialized()
            ->count(4)
            ->withTeam(rand(2, 5), true)
            ->create();

        $this->command->getOutput()->progressAdvance(8);
    }

    /**
     * Create regional distribution centers.
     */
    protected function createRegionalDistributionCenters(): void
    {
        $regions = [
            ['name' => 'North', 'city' => 'Chicago', 'state' => 'IL', 'users' => 20],
            ['name' => 'South', 'city' => 'Atlanta', 'state' => 'GA', 'users' => 18],
            ['name' => 'East', 'city' => 'Philadelphia', 'state' => 'PA', 'users' => 22],
            ['name' => 'West', 'city' => 'Los Angeles', 'state' => 'CA', 'users' => 25],
            ['name' => 'Central', 'city' => 'Dallas', 'state' => 'TX', 'users' => 15],
            ['name' => 'Northwest', 'city' => 'Seattle', 'state' => 'WA', 'users' => 12],
            ['name' => 'Southeast', 'city' => 'Miami', 'state' => 'FL', 'users' => 14],
        ];

        foreach ($regions as $region) {
            $department = Department::factory()
                ->regional($region['name'])
                ->withTeam($region['users'], true)
                ->withPurchaseOrders(rand(10, 20))
                ->withSalesOrders(rand(15, 30))
                ->withStockCounts(rand(5, 10))
                ->create();

            // Add location-specific note
            $department->description .= " Located in {$region['city']}, {$region['state']}.";
            $department->save();

            $this->command->getOutput()->progressAdvance(3);
        }
    }

    /**
     * Create support departments.
     */
    protected function createSupportDepartments(): void
    {
        $supportDepts = [
            ['name' => 'Maintenance Department', 'users' => 8, 'has_manager' => true],
            ['name' => 'Equipment Management', 'users' => 5, 'has_manager' => true],
            ['name' => 'Facilities', 'users' => 6, 'has_manager' => true],
            ['name' => 'Safety & Compliance', 'users' => 4, 'has_manager' => true],
            ['name' => 'Documentation', 'users' => 3, 'has_manager' => false],
            ['name' => 'Inventory Control', 'users' => 4, 'has_manager' => true],
        ];

        foreach ($supportDepts as $dept) {
            Department::factory()
                ->named($dept['name'])
                ->withTeam($dept['users'], $dept['has_manager'])
                ->create();

            $this->command->getOutput()->progressAdvance(2);
        }
    }

    /**
     * Create administrative departments.
     */
    protected function createAdministrativeDepartments(): void
    {
        $adminDepts = [
            ['name' => 'Administration', 'users' => 5, 'has_manager' => true],
            ['name' => 'Finance & Accounting', 'users' => 4, 'has_manager' => true],
            ['name' => 'IT Support', 'users' => 3, 'has_manager' => true],
            ['name' => 'HR & Training', 'users' => 3, 'has_manager' => true],
            ['name' => 'Security', 'users' => 6, 'has_manager' => true],
        ];

        foreach ($adminDepts as $dept) {
            Department::factory()
                ->named($dept['name'])
                ->withTeam($dept['users'], $dept['has_manager'])
                ->create();

            $this->command->getOutput()->progressAdvance(2);
        }

        // Create some small departments without managers
        Department::factory()
            ->count(5)
            ->withTeam(rand(1, 3), false)
            ->create();

        $this->command->getOutput()->progressAdvance(5);
    }

    /**
     * Display department hierarchy with managers.
     */
    protected function displayDepartmentHierarchy(): void
    {
        $departments = Department::with(['manager', 'users'])->get();

        $this->command->info("\n" . str_repeat('-', 80));
        $this->command->info('DEPARTMENT ORGANIZATION CHART');
        $this->command->info(str_repeat('-', 80));

        foreach ($departments->sortBy('name') as $dept) {
            $managerName = $dept->manager ? $dept->manager->name : 'Vacant';
            $this->command->line(sprintf(
                "%-30s | Manager: %-20s | Team: %2d users",
                $dept->name,
                $managerName,
                $dept->user_count
            ));
        }

        $this->command->info(str_repeat('-', 80));
    }
}
