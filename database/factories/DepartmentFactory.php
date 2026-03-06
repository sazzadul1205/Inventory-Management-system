<?php
// database/factories/DepartmentFactory.php

namespace Database\Factories;

use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Department>
 */
class DepartmentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Department::class;

    /**
     * Inventory Management specific departments
     */
    protected array $departmentNames = [
        // Core Operations
        'Inventory Management',
        'Warehouse Operations',
        'Receiving Department',
        'Shipping Department',
        'Quality Control',
        'Procurement',
        'Purchasing',
        'Supply Chain',
        'Logistics',
        'Fulfillment Center',

        // Storage & Handling
        'Raw Materials Storage',
        'Finished Goods Warehouse',
        'Cold Storage',
        'Hazardous Materials',
        'Bulk Storage',
        'High-Value Items',
        'Returns Processing',
        'Damaged Goods',

        // Management & Planning
        'Inventory Planning',
        'Demand Forecasting',
        'Replenishment',
        'Vendor Management',
        'Supplier Relations',
        'Contract Management',

        // Support Functions
        'Maintenance Department',
        'Equipment Management',
        'Facilities',
        'Safety & Compliance',
        'Documentation',
        'Inventory Control',

        // Administrative
        'Administration',
        'Finance & Accounting',
        'IT Support',
        'HR & Training',
        'Security',

        // Specialized
        'Cycle Counting Team',
        'Physical Inventory',
        'Cross-Docking',
        'Value-Added Services',
        'Kit Assembly',
        'Packaging Department',
        'Labeling & Marking',

        // Distribution
        'Distribution Center 1',
        'Distribution Center 2',
        'Regional Warehouse - North',
        'Regional Warehouse - South',
        'Regional Warehouse - East',
        'Regional Warehouse - West',

        // Product Specific
        'Perishable Goods',
        'Pharmaceuticals',
        'Electronics',
        'Automotive Parts',
        'Construction Materials',
        'Office Supplies',
    ];

    /**
     * Department descriptions by category
     */
    protected array $descriptions = [
        'Inventory Management' => 'Manages overall inventory levels, stock optimization, and inventory planning.',
        'Warehouse Operations' => 'Handles day-to-day warehouse activities including receiving, putaway, and order fulfillment.',
        'Receiving Department' => 'Responsible for incoming shipments, quality checks, and putaway coordination.',
        'Shipping Department' => 'Manages outbound shipments, packing, carrier coordination, and shipping documentation.',
        'Quality Control' => 'Ensures product quality standards, inspections, and compliance with regulations.',
        'Procurement' => 'Handles vendor selection, negotiations, and purchase order management.',
        'Purchasing' => 'Executes purchase orders and manages vendor relationships.',
        'Supply Chain' => 'Oversees end-to-end supply chain operations from suppliers to customers.',
        'Logistics' => 'Manages transportation, routing, and carrier relationships.',
        'Fulfillment Center' => 'Handles customer order fulfillment and e-commerce operations.',
        'Raw Materials Storage' => 'Manages storage and issuance of raw materials for production.',
        'Finished Goods Warehouse' => 'Stores and manages finished products ready for sale.',
        'Cold Storage' => 'Specialized storage for temperature-sensitive items.',
        'Hazardous Materials' => 'Handles dangerous goods with special safety protocols.',
        'Bulk Storage' => 'Manages high-volume, bulk inventory items.',
        'High-Value Items' => 'Special handling and security for high-value inventory.',
        'Returns Processing' => 'Handles customer returns, inspections, and restocking.',
        'Damaged Goods' => 'Manages damaged inventory, write-offs, and disposal.',
        'Inventory Planning' => 'Forecasts demand and plans inventory levels.',
        'Demand Forecasting' => 'Analyzes trends and predicts future inventory needs.',
        'Replenishment' => 'Manages automated reordering and stock replenishment.',
        'Vendor Management' => 'Coordinates vendor performance and relationships.',
        'Supplier Relations' => 'Maintains strategic supplier partnerships.',
        'Contract Management' => 'Manages supplier contracts and compliance.',
        'Maintenance Department' => 'Maintains warehouse equipment and facilities.',
        'Equipment Management' => 'Manages forklifts, conveyors, and material handling equipment.',
        'Facilities' => 'Oversees warehouse facilities and infrastructure.',
        'Safety & Compliance' => 'Ensures OSHA compliance and workplace safety.',
        'Documentation' => 'Manages shipping documents, customs paperwork, and records.',
        'Inventory Control' => 'Monitors inventory accuracy and conducts cycle counts.',
        'Administration' => 'Provides administrative support to warehouse operations.',
        'Finance & Accounting' => 'Handles inventory valuation and financial reporting.',
        'IT Support' => 'Maintains WMS, scanners, and warehouse technology.',
        'HR & Training' => 'Manages staffing, training, and development.',
        'Security' => 'Ensures warehouse security and loss prevention.',
        'Cycle Counting Team' => 'Performs regular cycle counts to ensure inventory accuracy.',
        'Physical Inventory' => 'Conducts annual physical inventory counts.',
        'Cross-Docking' => 'Manages cross-docking operations for fast-moving items.',
        'Value-Added Services' => 'Provides kitting, labeling, and custom packaging.',
        'Kit Assembly' => 'Assembles product kits and bundles.',
        'Packaging Department' => 'Manages packaging materials and packing operations.',
        'Labeling & Marking' => 'Handles product labeling and barcode marking.',
        'Distribution Center 1' => 'Primary distribution center operations.',
        'Distribution Center 2' => 'Secondary distribution center for overflow.',
        'Regional Warehouse - North' => 'Serves northern region customers.',
        'Regional Warehouse - South' => 'Serves southern region customers.',
        'Regional Warehouse - East' => 'Serves eastern region customers.',
        'Regional Warehouse - West' => 'Serves western region customers.',
        'Perishable Goods' => 'Manages fresh, frozen, and temperature-sensitive items.',
        'Pharmaceuticals' => 'Handles medical supplies and pharmaceutical products.',
        'Electronics' => 'Manages sensitive electronic components and devices.',
        'Automotive Parts' => 'Stores and distributes automotive parts.',
        'Construction Materials' => 'Manages heavy building materials.',
        'Office Supplies' => 'Handles office supplies and stationery.',
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->unique()->randomElement($this->departmentNames);

        return [
            'name' => $name,
            'description' => $this->descriptions[$name] ?? $this->generateDescription($name),
            'manager_id' => null, // Will be set by state methods
            'created_at' => $this->faker->dateTimeBetween('-3 years', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Generate a description for departments not in the predefined list.
     */
    protected function generateDescription(string $departmentName): string
    {
        $templates = [
            "Responsible for all {$departmentName} operations and activities.",
            "Manages {$departmentName} functions and related processes.",
            "Handles {$departmentName} tasks and coordinates with other departments.",
            "Oversees {$departmentName} activities and ensures operational efficiency.",
            "Specializes in {$departmentName} operations within the warehouse.",
        ];

        return $this->faker->randomElement($templates);
    }

    /**
     * Set a specific manager for the department.
     */
    public function withManager(User $user = null): static
    {
        return $this->state(function (array $attributes) use ($user) {
            return [
                'manager_id' => $user ? $user->id : User::factory()->create(['department_id' => $attributes['id'] ?? null])->id,
            ];
        });
    }

    /**
     * Set no manager for the department.
     */
    public function withoutManager(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'manager_id' => null,
            ];
        });
    }

    /**
     * Create a department with a specific name.
     */
    public function named(string $name): static
    {
        return $this->state(function (array $attributes) use ($name) {
            return [
                'name' => $name,
                'description' => $this->descriptions[$name] ?? $this->generateDescription($name),
            ];
        });
    }

    /**
     * Create an operations department.
     */
    public function operations(): static
    {
        $opsDepts = ['Warehouse Operations', 'Inventory Management', 'Logistics', 'Supply Chain'];

        return $this->state(function (array $attributes) use ($opsDepts) {
            $name = $this->faker->randomElement($opsDepts);
            return [
                'name' => $name,
                'description' => $this->descriptions[$name],
            ];
        });
    }

    /**
     * Create a warehouse department.
     */
    public function warehouse(): static
    {
        $warehouseDepts = ['Receiving Department', 'Shipping Department', 'Returns Processing', 'Packaging Department'];

        return $this->state(function (array $attributes) use ($warehouseDepts) {
            $name = $this->faker->randomElement($warehouseDepts);
            return [
                'name' => $name,
                'description' => $this->descriptions[$name],
            ];
        });
    }

    /**
     * Create a specialized department (Cold Storage, Hazardous, etc.).
     */
    public function specialized(): static
    {
        $specializedDepts = ['Cold Storage', 'Hazardous Materials', 'High-Value Items', 'Pharmaceuticals'];

        return $this->state(function (array $attributes) use ($specializedDepts) {
            $name = $this->faker->randomElement($specializedDepts);
            return [
                'name' => $name,
                'description' => $this->descriptions[$name],
            ];
        });
    }

    /**
     * Create a regional distribution center.
     */
    public function regional(string $region = null): static
    {
        $regions = $region ? [$region] : ['North', 'South', 'East', 'West'];
        $region = $this->faker->randomElement($regions);

        return $this->state(function (array $attributes) use ($region) {
            $name = "Regional Warehouse - {$region}";
            return [
                'name' => $name,
                'description' => "Serves {$region}ern region customers with local inventory and quick shipping.",
            ];
        });
    }

    /**
     * Create a department with users.
     */
    public function withUsers(int $count = 5): static
    {
        return $this->afterCreating(function (Department $department) use ($count) {
            User::factory()
                ->count($count)
                ->state(['department_id' => $department->id])
                ->create();

            // Optionally set one as manager
            if ($this->faker->boolean(70)) { // 70% chance of having a manager
                $manager = $department->users()->inRandomOrder()->first();
                $department->manager_id = $manager->id;
                $department->save();

                // Mark user as manager
                $manager->is_manager = true;
                $manager->save();
            }
        });
    }

    /**
     * Create a department with specific number of users and optional manager.
     */
    public function withTeam(int $userCount = 5, bool $hasManager = true): static
    {
        return $this->afterCreating(function (Department $department) use ($userCount, $hasManager) {
            User::factory()
                ->count($userCount)
                ->state(['department_id' => $department->id])
                ->create();

            if ($hasManager) {
                $manager = $department->users()->inRandomOrder()->first();
                $department->manager_id = $manager->id;
                $department->save();

                $manager->is_manager = true;
                $manager->save();
            }
        });
    }

    /**
     * Create a department with purchase orders.
     */
    public function withPurchaseOrders(int $count = 5): static
    {
        return $this->afterCreating(function (Department $department) use ($count) {
            if (!class_exists('\App\Models\PurchaseOrder')) {
                return;
            }

            // Ensure department has users
            if ($department->users()->count() == 0) {
                User::factory()
                    ->count(3)
                    ->state(['department_id' => $department->id])
                    ->create();
            }

            $users = $department->users;

            for ($i = 0; $i < $count; $i++) {
                \App\Models\PurchaseOrder::factory()
                    ->forUser($users->random()->id)
                    ->create();
            }
        });
    }

    /**
     * Create a department with sales orders.
     */
    public function withSalesOrders(int $count = 5): static
    {
        return $this->afterCreating(function (Department $department) use ($count) {
            if (!class_exists('\App\Models\SalesOrder')) {
                return;
            }

            // Ensure department has users
            if ($department->users()->count() == 0) {
                User::factory()
                    ->count(3)
                    ->state(['department_id' => $department->id])
                    ->create();
            }

            $users = $department->users;

            for ($i = 0; $i < $count; $i++) {
                \App\Models\SalesOrder::factory()
                    ->forUser($users->random()->id)
                    ->create();
            }
        });
    }

    /**
     * Create a department with stock counts.
     */
    public function withStockCounts(int $count = 3): static
    {
        return $this->afterCreating(function (Department $department) use ($count) {
            if (!class_exists('\App\Models\StockCount')) {
                return;
            }

            // Ensure department has users
            if ($department->users()->count() == 0) {
                User::factory()
                    ->count(3)
                    ->state(['department_id' => $department->id])
                    ->create();
            }

            $users = $department->users;

            for ($i = 0; $i < $count; $i++) {
                \App\Models\StockCount::factory()
                    ->forUser($users->random()->id)
                    ->create();
            }
        });
    }

    /**
     * Create a department with all activities.
     */
    public function fullyOperational(): static
    {
        return $this->afterCreating(function (Department $department) {
            // Create team of users
            User::factory()
                ->count(rand(5, 15))
                ->state(['department_id' => $department->id])
                ->create();

            // Set manager
            $manager = $department->users()->inRandomOrder()->first();
            $department->manager_id = $manager->id;
            $department->save();

            $manager->is_manager = true;
            $manager->save();

            // Create various orders
            if (class_exists('\App\Models\PurchaseOrder')) {
                \App\Models\PurchaseOrder::factory()
                    ->count(rand(3, 8))
                    ->forUser($department->users->random()->id)
                    ->create();
            }

            if (class_exists('\App\Models\SalesOrder')) {
                \App\Models\SalesOrder::factory()
                    ->count(rand(5, 12))
                    ->forUser($department->users->random()->id)
                    ->create();
            }

            if (class_exists('\App\Models\StockCount')) {
                \App\Models\StockCount::factory()
                    ->count(rand(2, 5))
                    ->forUser($department->users->random()->id)
                    ->create();
            }
        });
    }
}
