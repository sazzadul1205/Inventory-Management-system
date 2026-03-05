<?php
// database/migrations/2026_03_05_000024_create_audit_logs_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('audit_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->string('action', 50)->comment('create, update, delete, login, logout, export, import, etc.');
            $table->string('table_name', 100)->nullable();
            $table->unsignedBigInteger('record_id')->nullable();
            $table->json('old_values')->nullable();
            $table->json('new_values')->nullable();
            $table->json('changes')->nullable()->comment('Only changed fields for updates');
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->string('session_id', 100)->nullable();
            $table->string('request_method', 10)->nullable();
            $table->string('request_url', 500)->nullable();
            $table->text('description')->nullable();
            $table->timestamp('created_at')->useCurrent();

            // Indexes
            $table->index('user_id');
            $table->index('action');
            $table->index('table_name');
            $table->index('record_id');
            $table->index('ip_address');
            $table->index('session_id');
            $table->index('created_at');

            // Composite indexes for common searches
            $table->index(['table_name', 'record_id']);
            $table->index(['user_id', 'action']);
            $table->index(['user_id', 'created_at']);
            $table->index(['action', 'created_at']);
            $table->index(['table_name', 'action']);

            // JSON-path expression indexes are engine/version-specific; keep base indexes portable.
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('audit_logs');
    }
};
