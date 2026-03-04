<?php
// database/factories/DepartmentFactory.php

namespace Database\Factories;

use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class DepartmentFactory extends Factory
{
    protected $model = Department::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->randomElement([
                'Warehouse',
                'Sales',
                'Purchasing',
                'Accounts',
                'Logistics',
                'Quality Control',
                'Customer Support',
            ]),
            'description' => $this->faker->sentence(),
            'manager_id' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    /*
    |--------------------------------------------------------------------------
    | States
    |--------------------------------------------------------------------------
    */

    public function withManager(): static
    {
        return $this->afterCreating(function (Department $department) {

            // Prefer inventory_manager role
            $manager = User::whereHas('role', function ($query) {
                $query->where('name', 'inventory_manager');
            })
                ->doesntHave('managedDepartment')
                ->inRandomOrder()
                ->first();

            if ($manager) {
                $department->update([
                    'manager_id' => $manager->id,
                ]);
            }
        });
    }

    public function named(string $name): static
    {
        return $this->state(fn() => [
            'name' => $name,
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | Quick Presets (Optional but Practical)
    |--------------------------------------------------------------------------
    */

    public function warehouse(): static
    {
        return $this->named('Warehouse');
    }

    public function sales(): static
    {
        return $this->named('Sales');
    }

    public function purchasing(): static
    {
        return $this->named('Purchasing');
    }
}
