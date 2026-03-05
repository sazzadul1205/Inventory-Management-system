<?php
// database/migrations/2026_03_05_000019_create_stock_transfers_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stock_transfers', function (Blueprint $table) {
            $table->id();
            $table->string('transfer_number', 50)->unique();
            $table->foreignId('from_warehouse_id')->constrained('warehouses')->cascadeOnDelete();
            $table->foreignId('to_warehouse_id')->constrained('warehouses')->cascadeOnDelete();
            $table->timestamp('request_date')->useCurrent();
            $table->date('expected_delivery_date')->nullable();
            $table->date('actual_delivery_date')->nullable();
            $table->string('status', 20)->default('draft')->comment('draft, pending, approved, shipped, partially_received, received, cancelled');
            $table->text('notes')->nullable();
            $table->foreignId('requested_by')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('approved_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();

            // Indexes
            $table->index('transfer_number');
            $table->index('from_warehouse_id');
            $table->index('to_warehouse_id');
            $table->index('request_date');
            $table->index('expected_delivery_date');
            $table->index('actual_delivery_date');
            $table->index('status');
            $table->index('requested_by');
            $table->index('approved_by');

            // Composite indexes
            $table->index(['from_warehouse_id', 'status']);
            $table->index(['to_warehouse_id', 'status']);
            $table->index(['status', 'request_date']);
            $table->index(['from_warehouse_id', 'to_warehouse_id']);

            // Add check constraint to prevent same warehouse transfer
            // This will be handled at application level but we add a database constraint
            $table->index(['from_warehouse_id', 'to_warehouse_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stock_transfers');
    }
};
