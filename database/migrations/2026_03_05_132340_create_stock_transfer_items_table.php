<?php
// database/migrations/2026_03_05_000020_create_stock_transfer_items_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stock_transfer_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('stock_transfer_id')->constrained()->cascadeOnDelete();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('from_location_id')->nullable()->constrained('locations')->nullOnDelete();
            $table->foreignId('to_location_id')->nullable()->constrained('locations')->nullOnDelete();
            $table->integer('quantity_requested');
            $table->integer('quantity_shipped')->default(0);
            $table->integer('quantity_received')->default(0);
            $table->integer('quantity_remaining')->storedAs('quantity_requested - quantity_received');
            // Generated status based on shipped/received quantities
            $table->string('status', 20)->virtualAs(
                'CASE
                    WHEN quantity_received >= quantity_requested THEN "received"
                    WHEN quantity_shipped > 0 AND quantity_received < quantity_requested THEN "partially_received"
                    WHEN quantity_shipped >= quantity_requested THEN "shipped"
                    ELSE "pending"
                END'
            );
            $table->string('batch_number', 100)->nullable();
            $table->string('serial_number', 100)->nullable();
            $table->decimal('unit_cost', 15, 2)->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();

            // Indexes
            $table->index('stock_transfer_id');
            $table->index('product_id');
            $table->index('from_location_id');
            $table->index('to_location_id');
            $table->index('batch_number');
            $table->index('serial_number');
            
            // Composite indexes
            $table->index(['stock_transfer_id', 'product_id']);
            $table->index(['product_id', 'batch_number']);
            $table->index(['product_id', 'serial_number']);
            $table->index(['from_location_id', 'to_location_id']);
            $table->index(['stock_transfer_id', 'status']);

            // Unique constraint for tracking
            $table->index(['stock_transfer_id', 'product_id', 'batch_number', 'serial_number'], 'transfer_item_tracking_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stock_transfer_items');
    }
};
