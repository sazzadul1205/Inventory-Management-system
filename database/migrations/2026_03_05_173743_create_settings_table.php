<?php
// database/migrations/2026_03_05_000023_create_settings_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('setting_key', 100)->unique();
            $table->text('setting_value')->nullable();
            $table->string('setting_type', 50)->default('string')->comment('string, integer, boolean, json, array, float, date, datetime');
            $table->string('group', 100)->nullable()->comment('general, inventory, sales, purchases, notifications, etc.');
            $table->text('description')->nullable();
            $table->boolean('is_encrypted')->default(false);
            $table->boolean('is_system')->default(false)->comment('System settings cannot be deleted');
            $table->timestamps();

            // Indexes
            $table->index('setting_key');
            $table->index('group');
            $table->index('setting_type');
            $table->index('is_system');

            // Composite index for grouped queries
            $table->index(['group', 'setting_key']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
