<?php
// database/migrations/2026_03_05_000021_create_stock_counts_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stock_counts', function (Blueprint $table) {
            $table->id();
            $table->string('count_number', 50)->unique();
            $table->foreignId('warehouse_id')->constrained()->cascadeOnDelete();
            $table->timestamp('count_date')->useCurrent();
            $table->string('count_type', 20)->comment('cycle, full, spot, annual');
            $table->string('status', 20)->default('in_progress')->comment('draft, in_progress, completed, verified, cancelled');
            $table->text('notes')->nullable();
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('verified_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();

            // Indexes
            $table->index('count_number');
            $table->index('warehouse_id');
            $table->index('count_date');
            $table->index('count_type');
            $table->index('status');
            $table->index('created_by');
            $table->index('verified_by');

            // Composite indexes
            $table->index(['warehouse_id', 'status']);
            $table->index(['warehouse_id', 'count_date']);
            $table->index(['count_type', 'status']);
            $table->index(['count_date', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stock_counts');
    }
};
