<?php
// database/factories/UserFactory.php

namespace Database\Factories;

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
    protected static ?string $password = null;

    public function definition(): array
    {
        return [
            'username' => $this->faker->unique()->userName(),
            'email' => $this->faker->unique()->safeEmail(),
            'password_hash' => static::$password ??= Hash::make('password'),
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'role_id' => Role::factory(),
            'department_id' => null,
            'is_active' => $this->faker->boolean(90),
            'last_login' => $this->faker->optional(0.7)->dateTimeBetween('-1 month', 'now'),
            'remember_token' => Str::random(10),
            'created_at' => $this->faker->dateTimeBetween('-6 months', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'] ?? '-6 months', 'now');
            },
        ];
    }

    // -------- Inventory-specific roles --------

    public function superAdmin(): static
    {
        return $this->withRole('super_admin');
    }

    public function admin(): static
    {
        return $this->withRole('admin');
    }

    public function inventoryManager(): static
    {
        return $this->withRole('inventory_manager');
    }

    public function storeKeeper(): static
    {
        return $this->withRole('store_keeper');
    }

    public function salesStaff(): static
    {
        return $this->withRole('sales_staff');
    }

    public function auditor(): static
    {
        return $this->withRole('auditor');
    }

    // -------- Generic role assignment helper --------

    public function withRole(string $roleName): static
    {
        return $this->state(function () use ($roleName) {
            $role = Role::firstOrCreate(
                ['name' => $roleName],
                ['description' => ucfirst(str_replace('_', ' ', $roleName))]
            );

            return ['role_id' => $role->id];
        });
    }

    // -------- Department assignment --------

    public function inDepartment(Department $department): static
    {
        return $this->state(fn() => [
            'department_id' => $department->id,
        ]);
    }

    // -------- User status --------

    public function active(): static
    {
        return $this->state(fn() => ['is_active' => true]);
    }

    public function inactive(): static
    {
        return $this->state(fn() => ['is_active' => false]);
    }

    // -------- Name helper --------

    public function named(string $firstName, string $lastName): static
    {
        return $this->state(fn() => [
            'first_name' => $firstName,
            'last_name' => $lastName,
        ]);
    }
}
