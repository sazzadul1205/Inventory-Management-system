<?php
// database/migrations/2026_03_05_000009_create_inventory_movements_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('inventory_movements', function (Blueprint $table) {
            $table->id();
            $table->string('movement_number', 50)->unique();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('from_warehouse_id')->nullable()->constrained('warehouses')->nullOnDelete();
            $table->foreignId('to_warehouse_id')->nullable()->constrained('warehouses')->nullOnDelete();
            $table->foreignId('from_location_id')->nullable()->constrained('locations')->nullOnDelete();
            $table->foreignId('to_location_id')->nullable()->constrained('locations')->nullOnDelete();
            $table->string('movement_type', 50);
            $table->string('reference_type', 50)->nullable()->comment('purchase_order, sales_order, transfer, adjustment, count');
            $table->unsignedBigInteger('reference_id')->nullable();
            $table->string('batch_number', 100)->nullable();
            $table->string('serial_number', 100)->nullable();
            $table->integer('quantity');
            $table->decimal('unit_cost', 15, 2)->nullable();
            $table->decimal('total_cost', 15, 2)->nullable();
            $table->text('notes')->nullable();
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('created_at')->useCurrent();

            // Indexes
            $table->index('movement_number');
            $table->index('product_id');
            $table->index('from_warehouse_id');
            $table->index('to_warehouse_id');
            $table->index('from_location_id');
            $table->index('to_location_id');
            $table->index('movement_type');
            $table->index('reference_type');
            $table->index('reference_id');
            $table->index('batch_number');
            $table->index('serial_number');
            $table->index('created_by');
            $table->index('created_at');

            // Composite indexes
            $table->index(['reference_type', 'reference_id']);
            $table->index(['product_id', 'movement_type']);
            $table->index(['product_id', 'batch_number']);
            $table->index(['product_id', 'serial_number']);
            $table->index(['from_warehouse_id', 'to_warehouse_id']);
            $table->index(['created_at', 'movement_type']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inventory_movements');
    }
};
