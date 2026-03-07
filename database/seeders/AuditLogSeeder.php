<?php
// database/seeders/AuditLogSeeder.php

namespace Database\Seeders;

use App\Models\AuditLog;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies; 

class AuditLogSeeder extends Seeder
{

    use ChecksDependencies; 

    /**
     * Number of logs to create
     */
    protected const LOG_COUNT = 20;


    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // ← ADD THIS DEPENDENCY CHECK BLOCK
        if (!$this->checkDependencies([
            User::class => 'No users found'
        ])) {
            return;
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        AuditLog::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $users = User::all();

        $this->command->info('Creating audit logs...');
        $this->command->getOutput()->progressStart(self::LOG_COUNT);

        for ($i = 0; $i < self::LOG_COUNT; $i++) {
            $this->createAuditLog($users);
        }

        $this->command->getOutput()->progressFinish();
        $this->createSpecializedLogs($users);

        $this->command->info('Audit logs created: ' . AuditLog::count());
    }

    /**
     * Create a single audit log with appropriate distribution
     */
    protected function createAuditLog($users): void
    {
        $randomNumber = rand(1, 100);

        // Distribute actions based on probability
        if ($randomNumber <= 30) { // 30% - Views
            $this->createViewLog($users);
        } elseif ($randomNumber <= 50) { // 20% - Creates
            $this->createCreateLog($users);
        } elseif ($randomNumber <= 75) { // 25% - Updates
            $this->createUpdateLog($users);
        } elseif ($randomNumber <= 85) { // 10% - Deletes
            $this->createDeleteLog($users);
        } elseif ($randomNumber <= 95) { // 10% - Authentication
            $this->createAuthLog($users);
        } else { // 5% - Other actions
            $this->createOtherLog($users);
        }
    }

    /**
     * Create a view log
     */
    protected function createViewLog($users): void
    {
        AuditLog::factory()
            ->forUser($users->random()->id)
            ->state([
                'action' => AuditLog::ACTION_VIEW,
                'old_values' => null,
                'new_values' => null,
                'changes' => null,
                'description' => 'User viewed records'
            ])
            ->create();
    }

    /**
     * Create a create log
     */
    protected function createCreateLog($users): void
    {
        AuditLog::factory()
            ->forUser($users->random()->id)
            ->asCreateAction()
            ->create();
    }

    /**
     * Create an update log
     */
    protected function createUpdateLog($users): void
    {
        AuditLog::factory()
            ->forUser($users->random()->id)
            ->asUpdateAction()
            ->create();
    }

    /**
     * Create a delete log
     */
    protected function createDeleteLog($users): void
    {
        AuditLog::factory()
            ->forUser($users->random()->id)
            ->asDeleteAction()
            ->create();
    }

    /**
     * Create an authentication log (login/logout)
     */
    protected function createAuthLog($users): void
    {
        $user = $users->random();

        if (rand(0, 1)) {
            AuditLog::factory()
                ->forUser($user->id)
                ->login()
                ->create();
        } else {
            AuditLog::factory()
                ->forUser($user->id)
                ->logout()
                ->create();
        }
    }

    /**
     * Create other types of logs
     */
    protected function createOtherLog($users): void
    {
        $otherActions = [
            AuditLog::ACTION_EXPORT,
            AuditLog::ACTION_IMPORT,
            AuditLog::ACTION_DOWNLOAD,
            AuditLog::ACTION_PRINT,
            AuditLog::ACTION_APPROVE,
            AuditLog::ACTION_REJECT,
            AuditLog::ACTION_BACKUP,
        ];

        AuditLog::factory()
            ->forUser($users->random()->id)
            ->state([
                'action' => $otherActions[array_rand($otherActions)],
                'old_values' => null,
                'new_values' => null,
                'changes' => null,
            ])
            ->create();
    }

    /**
     * Create specialized logs for specific scenarios
     */
    protected function createSpecializedLogs($users): void
    {
        $this->command->info('Creating specialized logs...');

        // 1. Create activity spikes for certain users
        $activeUser = $users->first();
        $this->command->info('Creating activity spike for user ID: ' . $activeUser->id);

        for ($i = 0; $i < 50; $i++) {
            AuditLog::factory()
                ->forUser($activeUser->id)
                ->state([
                    'created_at' => now()->subDays(rand(0, 7))->addHours(rand(9, 17))
                ])
                ->create();
        }

        // 2. Create logs for specific tables
        $tables = ['users', 'products', 'orders', 'invoices'];
        foreach ($tables as $table) {
            AuditLog::factory()
                ->forUser($users->random()->id)
                ->forTable($table)
                ->count(20)
                ->create();
        }

        // 3. Create logs for today (for testing "today" scope)
        AuditLog::factory()
            ->forUser($users->random()->id)
            ->today()
            ->count(30)
            ->create();

        // 4. Create logs for this week
        AuditLog::factory()
            ->forUser($users->random()->id)
            ->count(100)
            ->state([
                'created_at' => fake()->dateTimeBetween('-7 days', 'now')
            ])
            ->create();

        // 5. Create logs with heavy changes (for testing changes summary)
        for ($i = 0; $i < 10; $i++) {
            AuditLog::factory()
                ->forUser($users->random()->id)
                ->asUpdateAction()
                ->state([
                    'changes' => $this->generateHeavyChanges()
                ])
                ->create();
        }

        // 6. Create failed login attempts
        for ($i = 0; $i < 15; $i++) {
            AuditLog::factory()
                ->state([
                    'action' => 'login_failed',
                    'user_id' => $users->random()->id,
                    'description' => 'Failed login attempt',
                    'table_name' => 'users',
                ])
                ->create();
        }

        // 7. Create bulk operations logs
        for ($i = 0; $i < 5; $i++) {
            AuditLog::factory()
                ->forUser($users->random()->id)
                ->state([
                    'action' => AuditLog::ACTION_IMPORT,
                    'description' => "Imported " . rand(50, 500) . " records",
                ])
                ->create();
        }
    }

    /**
     * Generate heavy changes array for testing
     */
    protected function generateHeavyChanges(): array
    {
        $changes = [];
        for ($i = 0; $i < 20; $i++) {
            $changes['field_' . $i] = [
                'old' => 'old_value_' . $i,
                'new' => 'new_value_' . $i
            ];
        }
        return $changes;
    }
}
