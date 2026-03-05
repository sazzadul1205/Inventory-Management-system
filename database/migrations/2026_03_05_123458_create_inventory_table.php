<?php
// database/migrations/2026_03_05_000008_create_inventory_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('inventory', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('warehouse_id')->constrained()->cascadeOnDelete();
            $table->foreignId('location_id')->nullable()->constrained()->nullOnDelete();
            $table->string('batch_number', 100)->nullable();
            $table->string('serial_number', 100)->nullable();
            $table->date('expiry_date')->nullable();
            $table->integer('quantity_on_hand')->default(0);
            $table->integer('quantity_reserved')->default(0);
            $table->integer('quantity_available')->default(0);
            $table->integer('quantity_in_transit')->default(0);
            $table->integer('quantity_on_order')->default(0);
            $table->decimal('unit_cost', 15, 2)->nullable();
            $table->decimal('total_value', 15, 2)->nullable();
            $table->timestamp('last_count_date')->nullable();
            $table->timestamp('last_movement_date')->nullable();
            $table->string('status', 20)->default('available')->comment('available, reserved, quarantined, damaged, expired');
            $table->timestamps();

            // Unique constraint for product-location-batch-serial combination
            $table->unique(['product_id', 'warehouse_id', 'location_id', 'batch_number', 'serial_number'], 'inventory_unique_constraint');

            // Indexes for efficient querying
            $table->index('product_id');
            $table->index('warehouse_id');
            $table->index('location_id');
            $table->index('batch_number');
            $table->index('serial_number');
            $table->index('expiry_date');
            $table->index('status');
            $table->index('last_count_date');
            $table->index('last_movement_date');

            // Composite indexes
            $table->index(['product_id', 'warehouse_id']);
            $table->index(['product_id', 'batch_number']);
            $table->index(['product_id', 'serial_number']);
            $table->index(['warehouse_id', 'status']);
            $table->index(['expiry_date', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inventory');
    }
};
