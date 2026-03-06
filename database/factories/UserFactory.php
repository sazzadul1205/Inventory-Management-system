<?php
// database/factories/UserFactory.php

namespace Database\Factories;

use App\Models\AuditLog;
use App\Models\User;
use App\Models\Role;
use App\Models\Department;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<User>
 */
class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * The current password being used by the factory.
     */
    protected static ?string $password = 'password';

    /**
     * User roles distribution for realistic assignments
     */
    protected array $roleDistribution = [
        'Administrator' => 10,
        'Inventory Manager' => 15,
        'Warehouse Supervisor' => 20,
        'Purchasing Manager' => 8,
        'Purchasing Agent' => 12,
        'Receiving Clerk' => 25,
        'Shipping Clerk' => 25,
        'Quality Control' => 10,
        'Sales Manager' => 8,
        'Sales Representative' => 20,
        'Inventory Planner' => 6,
        'Cycle Counter' => 15,
        'Financial Analyst' => 5,
        'IT Administrator' => 5,
        'Auditor' => 4,
        'Guest' => 2,
        'Temporary Worker' => 10,
    ];

    /**
     * Common first names for realistic data
     */
    protected array $firstNames = [
        'James',
        'John',
        'Robert',
        'Michael',
        'William',
        'David',
        'Richard',
        'Joseph',
        'Thomas',
        'Charles',
        'Mary',
        'Patricia',
        'Jennifer',
        'Linda',
        'Elizabeth',
        'Barbara',
        'Susan',
        'Jessica',
        'Sarah',
        'Karen',
        'Christopher',
        'Matthew',
        'Anthony',
        'Mark',
        'Donald',
        'Steven',
        'Paul',
        'Andrew',
        'Joshua',
        'Kenneth',
        'Lisa',
        'Nancy',
        'Betty',
        'Helen',
        'Sandra',
        'Donna',
        'Carol',
        'Ruth',
        'Sharon',
        'Michelle',
        'Daniel',
        'Kevin',
        'Brian',
        'George',
        'Edward',
        'Ronald',
        'Timothy',
        'Jason',
        'Jeffrey',
        'Ryan'
    ];

    /**
     * Common last names for realistic data
     */
    protected array $lastNames = [
        'Smith',
        'Johnson',
        'Williams',
        'Brown',
        'Jones',
        'Garcia',
        'Miller',
        'Davis',
        'Rodriguez',
        'Martinez',
        'Hernandez',
        'Lopez',
        'Gonzalez',
        'Wilson',
        'Anderson',
        'Thomas',
        'Taylor',
        'Moore',
        'Jackson',
        'Martin',
        'Lee',
        'Perez',
        'Thompson',
        'White',
        'Harris',
        'Sanchez',
        'Clark',
        'Ramirez',
        'Lewis',
        'Robinson',
        'Walker',
        'Young',
        'Allen',
        'King',
        'Wright',
        'Scott',
        'Torres',
        'Nguyen',
        'Hill',
        'Flores',
        'Green',
        'Adams',
        'Nelson',
        'Baker',
        'Hall',
        'Rivera',
        'Campbell',
        'Mitchell',
        'Carter',
        'Roberts'
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $firstName = $this->faker->randomElement($this->firstNames);
        $lastName = $this->faker->randomElement($this->lastNames);
        $email = strtolower($firstName . '.' . $lastName . '@' . $this->faker->randomElement([
            'company.com',
            'inventory.com',
            'warehouse.com',
            'supplychain.com'
        ]));

        // Get random role based on distribution
        $roleName = $this->getRandomRole();
        $role = Role::where('name', $roleName)->first() ?? Role::factory()->create(['name' => $roleName]);

        return [
            'username' => $this->generateUsername($firstName, $lastName),
            'email' => $email,
            'password_hash' => Hash::make(static::$password),
            'first_name' => $firstName,
            'last_name' => $lastName,
            'role_id' => $role->id,
            'department_id' => $this->assignDepartment($roleName),
            'is_active' => $this->faker->boolean(95), // 95% active
            'last_login' => $this->faker->optional(0.7)->dateTimeBetween('-30 days', 'now'),
            'email_verified_at' => $this->faker->optional(0.9)->dateTimeBetween('-1 year', 'now'),
            'two_factor_confirmed_at' => $this->faker->optional(0.2)->dateTimeBetween('-6 months', 'now'),
            'remember_token' => Str::random(10),
            'created_at' => $this->faker->dateTimeBetween('-5 years', '-1 month'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Get random role based on distribution.
     */
    protected function getRandomRole(): string
    {
        $rand = $this->faker->numberBetween(1, 100);
        $cumulative = 0;

        foreach ($this->roleDistribution as $role => $probability) {
            $cumulative += $probability;
            if ($rand <= $cumulative) {
                return $role;
            }
        }

        return 'User';
    }

    /**
     * Generate username from first and last name.
     */
    protected function generateUsername(string $firstName, string $lastName): string
    {
        $base = strtolower(substr($firstName, 0, 1) . $lastName);
        $base = preg_replace('/[^a-z0-9]/', '', $base);

        // Ensure uniqueness by adding random number if needed
        if (strlen($base) < 3) {
            $base = $base . $this->faker->randomNumber(3);
        }

        return $base;
    }

    /**
     * Assign department based on role.
     */
    protected function assignDepartment(string $roleName): ?int
    {
        $departmentMap = [
            'Inventory Manager' => 'Inventory Management',
            'Warehouse Supervisor' => 'Warehouse Operations',
            'Purchasing Manager' => 'Procurement',
            'Purchasing Agent' => 'Procurement',
            'Receiving Clerk' => 'Receiving Department',
            'Shipping Clerk' => 'Shipping Department',
            'Quality Control' => 'Quality Control',
            'Sales Manager' => 'Sales',
            'Sales Representative' => 'Sales',
            'Inventory Planner' => 'Inventory Planning',
            'Cycle Counter' => 'Cycle Counting Team',
            'Financial Analyst' => 'Finance & Accounting',
            'IT Administrator' => 'IT Support',
            'Auditor' => 'Audit',
        ];

        $deptName = $departmentMap[$roleName] ?? null;

        if ($deptName) {
            $department = Department::where('name', 'like', "%{$deptName}%")->first();
            return $department?->id;
        }

        return null;
    }

    /**
     * Indicate that the user is an admin.
     */
    public function admin(): static
    {
        $role = Role::where('name', 'Administrator')->first() ??
            Role::factory()->admin()->create();

        return $this->state(function (array $attributes) use ($role) {
            return [
                'role_id' => $role->id,
            ];
        });
    }

    /**
     * Indicate that the user is an inventory manager.
     */
    public function inventoryManager(): static
    {
        $role = Role::where('name', 'Inventory Manager')->first() ??
            Role::factory()->inventoryManager()->create();

        return $this->state(function (array $attributes) use ($role) {
            return [
                'role_id' => $role->id,
            ];
        });
    }

    /**
     * Indicate that the user is a warehouse supervisor.
     */
    public function warehouseSupervisor(): static
    {
        $role = Role::where('name', 'Warehouse Supervisor')->first() ??
            Role::factory()->warehouseSupervisor()->create();

        return $this->state(function (array $attributes) use ($role) {
            return [
                'role_id' => $role->id,
            ];
        });
    }

    /**
     * Indicate that the user is a purchasing manager.
     */
    public function purchasingManager(): static
    {
        $role = Role::where('name', 'Purchasing Manager')->first() ??
            Role::factory()->purchasingManager()->create();

        return $this->state(function (array $attributes) use ($role) {
            return [
                'role_id' => $role->id,
            ];
        });
    }

    /**
     * Indicate that the user is a receiving clerk.
     */
    public function receivingClerk(): static
    {
        $role = Role::where('name', 'Receiving Clerk')->first() ??
            Role::factory()->receivingClerk()->create();

        return $this->state(function (array $attributes) use ($role) {
            return [
                'role_id' => $role->id,
            ];
        });
    }

    /**
     * Indicate that the user is a shipping clerk.
     */
    public function shippingClerk(): static
    {
        $role = Role::where('name', 'Shipping Clerk')->first() ??
            Role::factory()->shippingClerk()->create();

        return $this->state(function (array $attributes) use ($role) {
            return [
                'role_id' => $role->id,
            ];
        });
    }

    /**
     * Indicate that the user is a sales manager.
     */
    public function salesManager(): static
    {
        $role = Role::where('name', 'Sales Manager')->first() ??
            Role::factory()->salesManager()->create();

        return $this->state(function (array $attributes) use ($role) {
            return [
                'role_id' => $role->id,
            ];
        });
    }

    /**
     * Indicate that the user is a cycle counter.
     */
    public function cycleCounter(): static
    {
        $role = Role::where('name', 'Cycle Counter')->first() ??
            Role::factory()->cycleCounter()->create();

        return $this->state(function (array $attributes) use ($role) {
            return [
                'role_id' => $role->id,
            ];
        });
    }

    /**
     * Indicate that the user is active.
     */
    public function active(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_active' => true,
            ];
        });
    }

    /**
     * Indicate that the user is inactive.
     */
    public function inactive(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_active' => false,
            ];
        });
    }

    /**
     * Indicate that the user is a department manager.
     */
    public function departmentManager(): static
    {
        return $this->afterCreating(function (User $user) {
            $department = Department::inRandomOrder()->first();
            if ($department) {
                $department->manager_id = $user->id;
                $department->save();
            }
        });
    }

    /**
     * Set user's department.
     */
    public function inDepartment(int $departmentId): static
    {
        return $this->state(function (array $attributes) use ($departmentId) {
            return [
                'department_id' => $departmentId,
            ];
        });
    }

    /**
     * Set specific role by name.
     */
    public function withRole(string $roleName): static
    {
        $role = Role::where('name', $roleName)->first();

        if (!$role) {
            $role = Role::factory()->named($roleName)->create();
        }

        return $this->state(function (array $attributes) use ($role) {
            return [
                'role_id' => $role->id,
            ];
        });
    }

    /**
     * Set specific first and last name.
     */
    public function named(string $firstName, string $lastName): static
    {
        return $this->state(function (array $attributes) use ($firstName, $lastName) {
            return [
                'first_name' => $firstName,
                'last_name' => $lastName,
                'username' => $this->generateUsername($firstName, $lastName),
                'email' => strtolower($firstName . '.' . $lastName . '@company.com'),
            ];
        });
    }

    /**
     * Set specific email.
     */
    public function withEmail(string $email): static
    {
        return $this->state(function (array $attributes) use ($email) {
            return [
                'email' => $email,
            ];
        });
    }

    /**
     * Indicate that the user has two-factor enabled.
     */
    public function withTwoFactor(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'two_factor_confirmed_at' => now(),
            ];
        });
    }

    /**
     * Indicate that the user hasn't logged in recently.
     */
    public function inactiveUser(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'last_login' => $this->faker->dateTimeBetween('-6 months', '-3 months'),
            ];
        });
    }

    /**
     * Indicate that the user is newly created (no login).
     */
    public function newUser(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'last_login' => null,
                'email_verified_at' => null,
            ];
        });
    }

    /**
     * Create user with activity history.
     */
    public function withActivityHistory(): static
    {
        return $this->afterCreating(function (User $user) {
            // Create some audit logs
            if (class_exists('AuditLog')) {
                $actions = ['login', 'logout', 'create', 'update', 'view', 'export'];

                for ($i = 0; $i < rand(5, 20); $i++) {
                    AuditLog::factory()
                        ->byUser($user->id)
                        ->create([
                            'created_at' => $this->faker->dateTimeBetween('-3 months', 'now'),
                        ]);
                }
            }
        });
    }

    /**
     * Create a fully loaded user.
     */
    public function fullyLoaded(): static
    {
        return $this->afterCreating(function (User $user) {
            if (class_exists('AuditLog')) {
                for ($i = 0; $i < rand(5, 20); $i++) {
                    AuditLog::factory()
                        ->byUser($user->id)
                        ->create([
                            'created_at' => $this->faker->dateTimeBetween('-3 months', 'now'),
                        ]);
                }
            }

            // If user is in a manager role, make them department manager
            if (in_array($user->role?->name, ['Warehouse Supervisor', 'Inventory Manager', 'Sales Manager'])) {
                $department = Department::whereNull('manager_id')->inRandomOrder()->first();
                if ($department) {
                    $department->manager_id = $user->id;
                    $department->save();
                }
            }
        });
    }
}
