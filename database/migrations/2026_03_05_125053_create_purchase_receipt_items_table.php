<?php
// database/migrations/2026_03_05_000013_create_purchase_receipt_items_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('purchase_receipt_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('purchase_receipt_id')->constrained()->cascadeOnDelete();
            $table->foreignId('purchase_order_item_id')->constrained()->cascadeOnDelete();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('location_id')->nullable()->constrained()->nullOnDelete();
            $table->integer('quantity_received');
            $table->string('batch_number', 100)->nullable();
            $table->string('serial_number', 100)->nullable();
            $table->date('expiry_date')->nullable();
            $table->decimal('unit_cost', 15, 2)->nullable();
            $table->decimal('total_cost', 15, 2)->storedAs('quantity_received * unit_cost');
            $table->text('notes')->nullable();
            $table->timestamps();

            // Indexes
            $table->index('purchase_receipt_id');
            $table->index('purchase_order_item_id');
            $table->index('product_id');
            $table->index('location_id');
            $table->index('batch_number');
            $table->index('serial_number');
            $table->index('expiry_date');

            // Composite indexes
            $table->index(['product_id', 'batch_number']);
            $table->index(['product_id', 'serial_number']);
            $table->index(['product_id', 'expiry_date']);
            $table->index(['purchase_receipt_id', 'product_id']);

            // Unique constraint for serial numbers if tracked
            $table->index(['serial_number', 'product_id'])->whereNotNull('serial_number');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('purchase_receipt_items');
    }
};
