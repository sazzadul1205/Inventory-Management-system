<?php
// database/migrations/2026_03_05_000011_create_purchase_order_items_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('purchase_order_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('purchase_order_id')->constrained()->cascadeOnDelete();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->integer('quantity_ordered');
            $table->integer('quantity_received')->default(0);
            $table->integer('quantity_remaining')->default(0);
            $table->decimal('unit_price', 15, 2);
            $table->decimal('total_price', 15, 2)->storedAs('quantity_ordered * unit_price');
            $table->decimal('discount_percent', 5, 2)->default(0);
            $table->decimal('tax_percent', 5, 2)->default(0);
            $table->decimal('line_total', 15, 2)->storedAs('(quantity_ordered * unit_price) * (1 - discount_percent/100) * (1 + tax_percent/100)');
            $table->date('expected_delivery_date')->nullable();
            $table->string('status', 20)->default('pending')->comment('pending, partially_received, received, cancelled');
            $table->text('notes')->nullable();
            $table->timestamps();

            // Indexes
            $table->index('purchase_order_id');
            $table->index('product_id');
            $table->index('status');
            $table->index('expected_delivery_date');

            // Composite indexes
            $table->index(['purchase_order_id', 'product_id']);
            $table->index(['purchase_order_id', 'status']);
            $table->index(['product_id', 'expected_delivery_date']);

            // Unique constraint to prevent duplicate products in same PO
            $table->unique(['purchase_order_id', 'product_id'], 'unique_po_product');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('purchase_order_items');
    }
};
