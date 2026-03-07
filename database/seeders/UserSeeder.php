<?php
// database/seeders/UserSeeder.php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use App\Models\Department;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    protected Faker $faker;

    /**
     * Number of users to create
     */
    protected const USER_COUNT = 10; // Was 100

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->faker = fake();

        // Disable foreign key checks temporarily
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        // Truncate the table
        User::truncate();

        // Enable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        // Ensure roles exist
        $this->ensureRoles();

        $this->command->info('Creating users...');
        $this->command->getOutput()->progressStart(self::USER_COUNT);

        // Create specific system users first
        $this->createSystemUsers();

        // Create users by role distribution
        $this->createUsersByRole();

        // Create specialized users
        $this->createSpecializedUsers();

        $this->command->getOutput()->progressFinish();

        // Display statistics
        $this->displayStatistics();
    }

    /**
     * Ensure roles exist before creating users.
     */
    protected function ensureRoles(): void
    {
        if (Role::count() == 0) {
            $this->command->warn('No roles found. Running RoleSeeder first...');
            $this->call(RoleSeeder::class);
        }
    }

    /**
     * Create system users (admin, managers, etc.).
     */
    protected function createSystemUsers(): void
    {
        $this->command->info("\nCreating system users...");

        // 1. System Administrator
        User::factory()
            ->admin()
            ->named('System', 'Administrator')
            ->withEmail('admin@company.com')
            ->withTwoFactor()
            ->departmentManager()
            ->create([
                'username' => 'admin',
                'is_active' => true,
            ]);
        $this->command->getOutput()->progressAdvance(1);

        // 2. Inventory Manager
        User::factory()
            ->inventoryManager()
            ->named('Alex', 'Chen')
            ->withEmail('inventory.manager@company.com')
            ->departmentManager()
            ->create();
        $this->command->getOutput()->progressAdvance(1);

        // 3. Warehouse Supervisor
        User::factory()
            ->warehouseSupervisor()
            ->named('Maria', 'Garcia')
            ->withEmail('warehouse.supervisor@company.com')
            ->departmentManager()
            ->create();
        $this->command->getOutput()->progressAdvance(1);

        // 4. Purchasing Manager
        User::factory()
            ->purchasingManager()
            ->named('Robert', 'Johnson')
            ->withEmail('purchasing@company.com')
            ->departmentManager()
            ->create();
        $this->command->getOutput()->progressAdvance(1);

        // 5. Sales Manager
        User::factory()
            ->salesManager()
            ->named('Sarah', 'Williams')
            ->withEmail('sales@company.com')
            ->departmentManager()
            ->create();
        $this->command->getOutput()->progressAdvance(1);

        // 6. IT Administrator
        User::factory()
            ->withRole('IT Administrator')
            ->named('David', 'Brown')
            ->withEmail('it@company.com')
            ->create();
        $this->command->getOutput()->progressAdvance(1);

        // 7. Quality Control Supervisor
        User::factory()
            ->withRole('Quality Control')
            ->named('Jennifer', 'Lee')
            ->withEmail('quality@company.com')
            ->departmentManager()
            ->create();
        $this->command->getOutput()->progressAdvance(1);
    }

    /**
     * Create users by role distribution.
     */
    protected function createUsersByRole(): void
    {
        $this->command->info("\nCreating users by role...");

        $roleDistribution = [
            'Receiving Clerk' => 2, // Was 12
            'Shipping Clerk' => 2, // Was 12
            'Sales Representative' => 2, // Was 10
            'Purchasing Agent' => 1, // Was 8
            'Cycle Counter' => 1, // Was 8
            'Warehouse Supervisor' => 3,
            'Temporary Worker' => 2, // Was 8
            'Financial Analyst' => 3,
            'Auditor' => 2,
            'Guest' => 2,
        ];

        foreach ($roleDistribution as $roleName => $count) {
            $this->command->info("  - Creating {$count} {$roleName}(s)");

            for ($i = 0; $i < $count; $i++) {
                User::factory()
                    ->withRole($roleName)
                    ->active()
                    ->withActivityHistory()
                    ->create();

                $this->command->getOutput()->progressAdvance(1);
            }
        }
    }

    /**
     * Create specialized users for specific scenarios.
     */
    protected function createSpecializedUsers(): void
    {
        $this->command->info("\nCreating specialized users...");

        // 1. Night shift workers
        $this->createNightShiftWorkers();

        // 2. Weekend workers
        $this->createWeekendWorkers();

        // 3. New hires (recently added)
        $this->createNewHires();

        // 4. Long-term employees
        $this->createLongTermEmployees();

        // 5. Part-time workers
        $this->createPartTimeWorkers();

        // 6. Remote workers
        $this->createRemoteWorkers();

        // 7. Users on leave (inactive)
        $this->createUsersOnLeave();

        // 8. Cross-trained users (multiple roles)
        $this->createCrossTrainedUsers();

        // 9. Supervisors with teams
        $this->createSupervisorsWithTeams();

        // 10. Trainees
        $this->createTrainees();
    }

    /**
     * Create night shift workers.
     */
    protected function createNightShiftWorkers(): void
    {
        $this->command->info('  - Creating night shift workers...');

        for ($i = 0; $i < 5; $i++) {
            User::factory()
                ->withRole('Warehouse Supervisor')
                ->named(
                    $this->faker->randomElement(['James', 'Michael', 'Robert']),
                    $this->faker->randomElement(['Davis', 'Miller', 'Wilson'])
                )
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }

        for ($i = 0; $i < 8; $i++) {
            User::factory()
                ->withRole('Receiving Clerk')
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create weekend workers.
     */
    protected function createWeekendWorkers(): void
    {
        $this->command->info('  - Creating weekend workers...');

        for ($i = 0; $i < 4; $i++) {
            User::factory()
                ->withRole('Shipping Clerk')
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create new hires.
     */
    protected function createNewHires(): void
    {
        $this->command->info('  - Creating new hires...');

        for ($i = 0; $i < 6; $i++) {
            User::factory()
                ->withRole($this->faker->randomElement([
                    'Receiving Clerk',
                    'Shipping Clerk',
                    'Sales Representative',
                    'Cycle Counter'
                ]))
                ->newUser()
                ->state([
                    'created_at' => $this->faker->dateTimeBetween('-1 month', 'now'),
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create long-term employees.
     */
    protected function createLongTermEmployees(): void
    {
        $this->command->info('  - Creating long-term employees...');

        for ($i = 0; $i < 5; $i++) {
            User::factory()
                ->withRole($this->faker->randomElement([
                    'Inventory Manager',
                    'Warehouse Supervisor',
                    'Purchasing Manager',
                    'Sales Manager'
                ]))
                ->state([
                    'created_at' => $this->faker->dateTimeBetween('-10 years', '-5 years'),
                ])
                ->withActivityHistory()
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create part-time workers.
     */
    protected function createPartTimeWorkers(): void
    {
        $this->command->info('  - Creating part-time workers...');

        for ($i = 0; $i < 4; $i++) {
            User::factory()
                ->withRole('Temporary Worker')
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create remote workers.
     */
    protected function createRemoteWorkers(): void
    {
        $this->command->info('  - Creating remote workers...');

        for ($i = 0; $i < 3; $i++) {
            User::factory()
                ->withRole($this->faker->randomElement([
                    'Sales Representative',
                    'Financial Analyst',
                    'Purchasing Agent'
                ]))
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create users on leave (inactive).
     */
    protected function createUsersOnLeave(): void
    {
        $this->command->info('  - Creating users on leave...');

        for ($i = 0; $i < 3; $i++) {
            User::factory()
                ->inactive()
                ->state([
                    'last_login' => $this->faker->dateTimeBetween('-3 months', '-1 month'),
                ])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create cross-trained users (multiple roles).
     */
    protected function createCrossTrainedUsers(): void
    {
        $this->command->info('  - Creating cross-trained users...');

        $users = [
            ['first' => 'Chris', 'last' => 'Martinez', 'role' => 'Warehouse Supervisor'],
            ['first' => 'Patricia', 'last' => 'Anderson', 'role' => 'Inventory Manager'],
            ['first' => 'Thomas', 'last' => 'Taylor', 'role' => 'Cycle Counter'],
        ];

        foreach ($users as $user) {
            User::factory()
                ->withRole($user['role'])
                ->named($user['first'], $user['last'])
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create supervisors with teams.
     */
    protected function createSupervisorsWithTeams(): void
    {
        $this->command->info('  - Creating supervisors with teams...');

        // Create a supervisor
        $supervisor = User::factory()
            ->warehouseSupervisor()
            ->named('Kevin', 'O\'Brien')
            ->departmentManager()
            ->create();

        $this->command->getOutput()->progressAdvance(1);

        $teamDepartmentId = $supervisor->department_id
            ?? $supervisor->managedDepartment?->id
            ?? Department::inRandomOrder()->value('id');

        // Create team members
        for ($i = 0; $i < 5; $i++) {
            $factory = User::factory()
                ->withRole('Receiving Clerk');

            if ($teamDepartmentId !== null) {
                $factory->inDepartment($teamDepartmentId);
            }

            $factory->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Create trainees.
     */
    protected function createTrainees(): void
    {
        $this->command->info('  - Creating trainees...');

        for ($i = 0; $i < 4; $i++) {
            User::factory()
                ->withRole('Temporary Worker')
                ->newUser()
                ->create();

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nUser Statistics:");

        $totalUsers = User::count();
        $activeUsers = User::active()->count();
        $admins = User::admins()->count();
        $managers = User::managers()->count();

        $usersByRole = User::with('role')
            ->get()
            ->groupBy('role.name')
            ->map(fn($group) => $group->count());

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Users', $totalUsers],
                ['Active Users', $activeUsers],
                ['Inactive Users', $totalUsers - $activeUsers],
                ['Administrators', $admins],
                ['Department Managers', $managers],
            ]
        );

        $this->command->info("\nUsers by Role:");
        $roleData = [];
        foreach ($usersByRole as $role => $count) {
            $roleData[] = [$role, $count];
        }
        $this->command->table(['Role', 'Count'], $roleData);

        $this->command->info("\nRecent Activity:");
        $recentActive = User::where('last_login', '>=', now()->subDays(7))->count();
        $neverLoggedIn = User::whereNull('last_login')->count();

        $this->command->table(
            ['Metric', 'Count'],
            [
                ['Logged in last 7 days', $recentActive],
                ['Never logged in', $neverLoggedIn],
            ]
        );

        // Show sample users
        $this->command->info("\nSample Users:");
        $sampleUsers = User::with(['role', 'department'])
            ->inRandomOrder()
            ->limit(5)
            ->get();

        $this->command->table(
            ['Name', 'Username', 'Role', 'Department', 'Status'],
            $sampleUsers->map(fn($user) => [
                $user->full_name,
                $user->username,
                $user->role?->name ?? 'N/A',
                $user->department?->name ?? 'N/A',
                $user->status_label,
            ])->toArray()
        );
    }
}
