<?php
// database/factories/RoleFactory.php

namespace Database\Factories;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Role>
 */
class RoleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Role::class;

    /**
     * Role definitions with typical permissions for inventory management
     */
    protected array $roleDefinitions = [
        'Administrator' => [
            'description' => 'Full system access with all permissions',
            'permissions' => ['all' => true],
            'is_system' => true
        ],
        'Inventory Manager' => [
            'description' => 'Manages inventory levels, stock counts, and inventory adjustments',
            'permissions' => [
                'inventory.view' => true,
                'inventory.create' => true,
                'inventory.edit' => true,
                'inventory.delete' => true,
                'inventory.adjust' => true,
                'inventory.count' => true,
                'inventory.transfer' => true,
                'inventory.receive' => true,
                'inventory.ship' => true,
                'reports.inventory' => true,
            ]
        ],
        'Warehouse Supervisor' => [
            'description' => 'Oversees warehouse operations and staff',
            'permissions' => [
                'inventory.view' => true,
                'inventory.count' => true,
                'inventory.transfer' => true,
                'inventory.receive' => true,
                'inventory.ship' => true,
                'warehouse.view' => true,
                'warehouse.manage' => true,
                'location.manage' => true,
                'staff.view' => true,
                'reports.warehouse' => true,
            ]
        ],
        'Purchasing Manager' => [
            'description' => 'Manages purchase orders and supplier relationships',
            'permissions' => [
                'purchase.view' => true,
                'purchase.create' => true,
                'purchase.edit' => true,
                'purchase.approve' => true,
                'purchase.cancel' => true,
                'supplier.view' => true,
                'supplier.manage' => true,
                'reports.purchasing' => true,
                'inventory.view' => true,
            ]
        ],
        'Purchasing Agent' => [
            'description' => 'Creates and manages purchase orders',
            'permissions' => [
                'purchase.view' => true,
                'purchase.create' => true,
                'purchase.edit' => true,
                'supplier.view' => true,
                'inventory.view' => true,
            ]
        ],
        'Receiving Clerk' => [
            'description' => 'Receives incoming shipments and updates inventory',
            'permissions' => [
                'inventory.view' => true,
                'inventory.receive' => true,
                'purchase.view' => true,
                'location.view' => true,
            ]
        ],
        'Shipping Clerk' => [
            'description' => 'Processes outbound shipments',
            'permissions' => [
                'inventory.view' => true,
                'inventory.ship' => true,
                'sales.view' => true,
                'location.view' => true,
            ]
        ],
        'Quality Control' => [
            'description' => 'Inspects and approves incoming/outgoing goods',
            'permissions' => [
                'inventory.view' => true,
                'inventory.quarantine' => true,
                'inventory.release' => true,
                'quality.view' => true,
                'quality.inspect' => true,
                'reports.quality' => true,
            ]
        ],
        'Sales Manager' => [
            'description' => 'Manages sales orders and customer relationships',
            'permissions' => [
                'sales.view' => true,
                'sales.create' => true,
                'sales.edit' => true,
                'sales.approve' => true,
                'sales.cancel' => true,
                'customer.view' => true,
                'customer.manage' => true,
                'inventory.view' => true,
                'reports.sales' => true,
            ]
        ],
        'Sales Representative' => [
            'description' => 'Creates and manages sales orders',
            'permissions' => [
                'sales.view' => true,
                'sales.create' => true,
                'sales.edit' => true,
                'customer.view' => true,
                'inventory.view' => true,
            ]
        ],
        'Inventory Planner' => [
            'description' => 'Plans inventory levels and reorder points',
            'permissions' => [
                'inventory.view' => true,
                'inventory.plan' => true,
                'reports.forecast' => true,
                'reports.inventory' => true,
                'purchase.view' => true,
            ]
        ],
        'Cycle Counter' => [
            'description' => 'Performs cycle counts and inventory audits',
            'permissions' => [
                'inventory.view' => true,
                'inventory.count' => true,
                'inventory.adjust' => true,
                'reports.count' => true,
            ]
        ],
        'Financial Analyst' => [
            'description' => 'Analyzes inventory costs and financial reports',
            'permissions' => [
                'inventory.view' => true,
                'reports.financial' => true,
                'reports.inventory' => true,
                'reports.cost' => true,
            ]
        ],
        'IT Administrator' => [
            'description' => 'Manages system settings and user access',
            'permissions' => [
                'system.settings' => true,
                'user.view' => true,
                'user.create' => true,
                'user.edit' => true,
                'user.delete' => true,
                'role.manage' => true,
                'audit.view' => true,
            ]
        ],
        'Auditor' => [
            'description' => 'Views audit logs and compliance reports',
            'permissions' => [
                'audit.view' => true,
                'reports.audit' => true,
                'inventory.view' => true,
            ]
        ],
        'Guest' => [
            'description' => 'Read-only access for viewing reports',
            'permissions' => [
                'inventory.view' => true,
                'reports.view' => true,
            ]
        ],
        'Temporary Worker' => [
            'description' => 'Limited access for temporary staff',
            'permissions' => [
                'inventory.view' => true,
                'inventory.count' => true,
                'location.view' => true,
            ]
        ],
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $roleName = $this->faker->randomElement(array_keys($this->roleDefinitions));
        $definition = $this->roleDefinitions[$roleName];

        return [
            'name' => $roleName,
            'description' => $definition['description'],
            'permissions' => $definition['permissions'],
            'created_at' => $this->faker->dateTimeBetween('-2 years', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Indicate that the role is an administrator.
     */
    public function admin(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Administrator',
                'description' => 'Full system access with all permissions',
                'permissions' => ['all' => true],
            ];
        });
    }

    /**
     * Indicate that the role is an inventory manager.
     */
    public function inventoryManager(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Inventory Manager',
                'description' => 'Manages inventory levels, stock counts, and inventory adjustments',
                'permissions' => [
                    'inventory.view' => true,
                    'inventory.create' => true,
                    'inventory.edit' => true,
                    'inventory.delete' => true,
                    'inventory.adjust' => true,
                    'inventory.count' => true,
                    'inventory.transfer' => true,
                    'inventory.receive' => true,
                    'inventory.ship' => true,
                    'reports.inventory' => true,
                ],
            ];
        });
    }

    /**
     * Indicate that the role is a warehouse supervisor.
     */
    public function warehouseSupervisor(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Warehouse Supervisor',
                'description' => 'Oversees warehouse operations and staff',
                'permissions' => [
                    'inventory.view' => true,
                    'inventory.count' => true,
                    'inventory.transfer' => true,
                    'inventory.receive' => true,
                    'inventory.ship' => true,
                    'warehouse.view' => true,
                    'warehouse.manage' => true,
                    'location.manage' => true,
                    'staff.view' => true,
                    'reports.warehouse' => true,
                ],
            ];
        });
    }

    /**
     * Indicate that the role is a purchasing manager.
     */
    public function purchasingManager(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Purchasing Manager',
                'description' => 'Manages purchase orders and supplier relationships',
                'permissions' => [
                    'purchase.view' => true,
                    'purchase.create' => true,
                    'purchase.edit' => true,
                    'purchase.approve' => true,
                    'purchase.cancel' => true,
                    'supplier.view' => true,
                    'supplier.manage' => true,
                    'reports.purchasing' => true,
                    'inventory.view' => true,
                ],
            ];
        });
    }

    /**
     * Indicate that the role is a receiving clerk.
     */
    public function receivingClerk(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Receiving Clerk',
                'description' => 'Receives incoming shipments and updates inventory',
                'permissions' => [
                    'inventory.view' => true,
                    'inventory.receive' => true,
                    'purchase.view' => true,
                    'location.view' => true,
                ],
            ];
        });
    }

    /**
     * Indicate that the role is a shipping clerk.
     */
    public function shippingClerk(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Shipping Clerk',
                'description' => 'Processes outbound shipments',
                'permissions' => [
                    'inventory.view' => true,
                    'inventory.ship' => true,
                    'sales.view' => true,
                    'location.view' => true,
                ],
            ];
        });
    }

    /**
     * Indicate that the role is a quality control specialist.
     */
    public function qualityControl(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Quality Control',
                'description' => 'Inspects and approves incoming/outgoing goods',
                'permissions' => [
                    'inventory.view' => true,
                    'inventory.quarantine' => true,
                    'inventory.release' => true,
                    'quality.view' => true,
                    'quality.inspect' => true,
                    'reports.quality' => true,
                ],
            ];
        });
    }

    /**
     * Indicate that the role is a sales manager.
     */
    public function salesManager(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Sales Manager',
                'description' => 'Manages sales orders and customer relationships',
                'permissions' => [
                    'sales.view' => true,
                    'sales.create' => true,
                    'sales.edit' => true,
                    'sales.approve' => true,
                    'sales.cancel' => true,
                    'customer.view' => true,
                    'customer.manage' => true,
                    'inventory.view' => true,
                    'reports.sales' => true,
                ],
            ];
        });
    }

    /**
     * Indicate that the role is a cycle counter.
     */
    public function cycleCounter(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Cycle Counter',
                'description' => 'Performs cycle counts and inventory audits',
                'permissions' => [
                    'inventory.view' => true,
                    'inventory.count' => true,
                    'inventory.adjust' => true,
                    'reports.count' => true,
                ],
            ];
        });
    }

    /**
     * Indicate that the role is an IT administrator.
     */
    public function itAdmin(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'IT Administrator',
                'description' => 'Manages system settings and user access',
                'permissions' => [
                    'system.settings' => true,
                    'user.view' => true,
                    'user.create' => true,
                    'user.edit' => true,
                    'user.delete' => true,
                    'role.manage' => true,
                    'audit.view' => true,
                ],
            ];
        });
    }

    /**
     * Indicate that the role is a guest (read-only).
     */
    public function guest(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Guest',
                'description' => 'Read-only access for viewing reports',
                'permissions' => [
                    'inventory.view' => true,
                    'reports.view' => true,
                ],
            ];
        });
    }

    /**
     * Grant all permissions (admin role).
     */
    public function withAllPermissions(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'permissions' => ['all' => true],
            ];
        });
    }

    /**
     * Grant specific permissions.
     */
    public function withPermissions(array $permissions): static
    {
        return $this->state(function (array $attributes) use ($permissions) {
            $perms = [];
            foreach ($permissions as $permission) {
                $perms[$permission] = true;
            }
            return [
                'permissions' => $perms,
            ];
        });
    }

    /**
     * Set a specific role name.
     */
    public function named(string $name): static
    {
        return $this->state(function (array $attributes) use ($name) {
            return [
                'name' => $name,
            ];
        });
    }

    /**
     * Set role description.
     */
    public function describedAs(string $description): static
    {
        return $this->state(function (array $attributes) use ($description) {
            return [
                'description' => $description,
            ];
        });
    }

    /**
     * Create role with users.
     */
    public function withUsers(int $count = 3): static
    {
        return $this->afterCreating(function (Role $role) use ($count) {
            if (class_exists('User')) {
                User::factory()
                    ->count($count)
                    ->state(['role_id' => $role->id])
                    ->create();
            }
        });
    }

    /**
     * Create role with specific user count.
     */
    public function withUserCount(int $count): static
    {
        return $this->afterCreating(function (Role $role) use ($count) {
            if (class_exists('User')) {
                User::factory()
                    ->count($count)
                    ->state(['role_id' => $role->id])
                    ->create();
            }
        });
    }
}