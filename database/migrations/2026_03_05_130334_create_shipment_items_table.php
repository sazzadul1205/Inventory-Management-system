<?php
// database/migrations/2026_03_05_000018_create_shipment_items_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('shipment_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('shipment_id')->constrained()->cascadeOnDelete();
            $table->foreignId('sales_order_item_id')->constrained()->cascadeOnDelete();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('location_id')->nullable()->constrained()->nullOnDelete();
            $table->integer('quantity_shipped');
            $table->string('batch_number', 100)->nullable();
            $table->string('serial_number', 100)->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();

            // Indexes
            $table->index('shipment_id');
            $table->index('sales_order_item_id');
            $table->index('product_id');
            $table->index('location_id');
            $table->index('batch_number');
            $table->index('serial_number');

            // Composite indexes
            $table->index(['shipment_id', 'product_id']);
            $table->index(['product_id', 'batch_number']);
            $table->index(['product_id', 'serial_number']);
            $table->index(['batch_number', 'serial_number']);

            // Unique constraint for serial numbers if tracked
            $table->index(['serial_number', 'product_id'])->whereNotNull('serial_number');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('shipment_items');
    }
};
