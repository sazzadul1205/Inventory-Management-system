<?php
// database/factories/AuditLogFactory.php

namespace Database\Factories;

use App\Models\AuditLog;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<AuditLog>
 */
class AuditLogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = AuditLog::class;

    /**
     * Common table names in the application
     */
    protected array $commonTables = [
        'users',
        'roles',
        'permissions',
        'posts',
        'categories',
        'products',
        'orders',
        'customers',
        'invoices',
        'payments',
        'settings',
        'comments',
        'tags',
        'media',
        'notifications'
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $action = $this->faker->randomElement(array_keys(AuditLog::$actions));
        $tableName = $this->faker->randomElement($this->commonTables);
        $hasChanges = $this->faker->boolean(70); // 70% chance of having changes

        // Generate old and new values based on action type
        $oldValues = null;
        $newValues = null;
        $changes = null;

        if (in_array($action, [AuditLog::ACTION_CREATE, AuditLog::ACTION_UPDATE, AuditLog::ACTION_DELETE])) {
            if ($action === AuditLog::ACTION_CREATE) {
                $newValues = $this->generateRandomData($tableName);
            } elseif ($action === AuditLog::ACTION_UPDATE) {
                $oldValues = $this->generateRandomData($tableName);
                $newValues = $this->generateRandomData($tableName, true); // Slightly modified

                if ($hasChanges) {
                    $changes = $this->calculateChangesArray($oldValues, $newValues);
                }
            } elseif ($action === AuditLog::ACTION_DELETE) {
                $oldValues = $this->generateRandomData($tableName);
            }
        }

        // Generate description based on action
        $description = $this->generateDescription($action, $tableName);

        return [
            'user_id' => User::inRandomOrder()->first()?->id ?? User::factory(),
            'action' => $action,
            'table_name' => $tableName,
            'record_id' => $this->faker->optional(0.8)->numberBetween(1, 1000),
            'old_values' => $oldValues,
            'new_values' => $newValues,
            'changes' => $changes,
            'ip_address' => $this->faker->optional(0.9)->ipv4(),
            'user_agent' => $this->faker->optional(0.9)->userAgent(),
            'session_id' => $this->faker->optional(0.7)->uuid(),
            'request_method' => $this->faker->randomElement(['GET', 'POST', 'PUT', 'DELETE', 'PATCH']),
            'request_url' => $this->faker->optional(0.8)->url(),
            'description' => $description,
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now')
        ];
    }

    /**
     * Configure the factory to create a login log.
     */
    public function login(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'action' => AuditLog::ACTION_LOGIN,
                'table_name' => 'users',
                'old_values' => null,
                'new_values' => null,
                'changes' => null,
                'description' => 'User logged in successfully',
            ];
        });
    }

    /**
     * Configure the factory to create a logout log.
     */
    public function logout(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'action' => AuditLog::ACTION_LOGOUT,
                'table_name' => 'users',
                'old_values' => null,
                'new_values' => null,
                'changes' => null,
                'description' => 'User logged out',
            ];
        });
    }

    /**
     * Configure the factory to create a create action log.
     */
    public function asCreateAction(): static
    {
        return $this->state(function (array $attributes) {
            $tableName = $this->faker->randomElement($this->commonTables);
            $newValues = $this->generateRandomData($tableName);

            return [
                'action' => AuditLog::ACTION_CREATE,
                'old_values' => null,
                'new_values' => $newValues,
                'changes' => null,
                'description' => "Created new record in {$tableName}",
            ];
        });
    }

    /**
     * Configure the factory to create an update action log.
     */
    public function asUpdateAction(): static
    {
        return $this->state(function (array $attributes) {
            $tableName = $this->faker->randomElement($this->commonTables);
            $oldValues = $this->generateRandomData($tableName);
            $newValues = $this->generateRandomData($tableName, true);
            $changes = $this->calculateChangesArray($oldValues, $newValues);

            return [
                'action' => AuditLog::ACTION_UPDATE,
                'old_values' => $oldValues,
                'new_values' => $newValues,
                'changes' => $changes,
                'description' => "Updated record in {$tableName}",
            ];
        });
    }

    /**
     * Configure the factory to create a delete action log.
     */
    public function asDeleteAction(): static
    {
        return $this->state(function (array $attributes) {
            $tableName = $this->faker->randomElement($this->commonTables);
            $oldValues = $this->generateRandomData($tableName);

            return [
                'action' => AuditLog::ACTION_DELETE,
                'old_values' => $oldValues,
                'new_values' => null,
                'changes' => null,
                'description' => "Deleted record from {$tableName}",
            ];
        });
    }

    /**
     * Configure the factory to create a log for today.
     */
    public function today(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'created_at' => now(),
            ];
        });
    }

    /**
     * Configure the factory to create a log for a specific user.
     */
    public function forUser(int $userId): static
    {
        return $this->state(function (array $attributes) use ($userId) {
            return [
                'user_id' => $userId,
            ];
        });
    }

    /**
     * Configure the factory to create a log for a specific table.
     */
    public function forTable(string $tableName): static
    {
        return $this->state(function (array $attributes) use ($tableName) {
            return [
                'table_name' => $tableName,
            ];
        });
    }

    /**
     * Generate random data based on table name.
     */
    protected function generateRandomData(string $tableName, bool $modify = false): array
    {
        $data = [];

        switch ($tableName) {
            case 'users':
                $data = [
                    'name' => $this->faker->name(),
                    'email' => $this->faker->unique()->safeEmail(),
                    'role' => $this->faker->randomElement(['admin', 'editor', 'user']),
                    'status' => $this->faker->randomElement(['active', 'inactive']),
                ];
                break;

            case 'posts':
                $data = [
                    'title' => $this->faker->sentence(),
                    'content' => $this->faker->paragraphs(3, true),
                    'status' => $this->faker->randomElement(['draft', 'published', 'archived']),
                    'views' => $this->faker->numberBetween(0, 10000),
                ];
                break;

            case 'products':
                $data = [
                    'name' => $this->faker->words(3, true),
                    'price' => $this->faker->randomFloat(2, 10, 1000),
                    'stock' => $this->faker->numberBetween(0, 500),
                    'category' => $this->faker->randomElement(['electronics', 'clothing', 'books']),
                ];
                break;

            case 'orders':
                $data = [
                    'order_number' => $this->faker->unique()->bothify('ORD-####-????'),
                    'total' => $this->faker->randomFloat(2, 50, 5000),
                    'status' => $this->faker->randomElement(['pending', 'processing', 'completed', 'cancelled']),
                    'payment_method' => $this->faker->randomElement(['credit_card', 'paypal', 'bank_transfer']),
                ];
                break;

            case 'settings':
                $data = [
                    'key' => $this->faker->word(),
                    'value' => $this->faker->randomElement(['enabled', 'disabled', 'production', 'development']),
                    'type' => $this->faker->randomElement(['string', 'boolean', 'integer']),
                ];
                break;

            default:
                $data = [
                    'field1' => $this->faker->word(),
                    'field2' => $this->faker->sentence(),
                    'field3' => $this->faker->numberBetween(1, 100),
                ];
        }

        if ($modify) {
            // Modify some values to simulate changes
            foreach (array_rand($data, min(2, count($data))) as $key) {
                if (is_string($data[$key])) {
                    $data[$key] = $data[$key] . ' (updated)';
                } elseif (is_numeric($data[$key])) {
                    $data[$key] = $data[$key] + $this->faker->numberBetween(1, 50);
                }
            }
        }

        return $data;
    }

    /**
     * Calculate changes array from old and new values.
     */
    protected function calculateChangesArray(array $old, array $new): array
    {
        $changes = [];
        foreach ($new as $key => $value) {
            if (isset($old[$key]) && $old[$key] !== $value) {
                $changes[$key] = ['old' => $old[$key], 'new' => $value];
            }
        }
        return $changes;
    }

    /**
     * Generate description based on action and table.
     */
    protected function generateDescription(string $action, string $tableName): string
    {
        $actionLabels = [
            AuditLog::ACTION_CREATE => 'Created',
            AuditLog::ACTION_UPDATE => 'Updated',
            AuditLog::ACTION_DELETE => 'Deleted',
            AuditLog::ACTION_VIEW => 'Viewed',
            AuditLog::ACTION_LOGIN => 'Logged in',
            AuditLog::ACTION_LOGOUT => 'Logged out',
            AuditLog::ACTION_EXPORT => 'Exported',
            AuditLog::ACTION_IMPORT => 'Imported',
        ];

        $actionText = $actionLabels[$action] ?? $action;

        return $this->faker->randomElement([
            "{$actionText} a record in {$tableName}",
            "User performed {$action} on {$tableName}",
            "{$actionText} operation on {$tableName}",
            "Modified data in {$tableName} table",
            "{$actionText} by user",
        ]);
    }
}
