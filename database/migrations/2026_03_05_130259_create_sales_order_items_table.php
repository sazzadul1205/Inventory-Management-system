<?php
// database/migrations/2026_03_05_000016_create_sales_order_items_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sales_order_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sales_order_id')->constrained()->cascadeOnDelete();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->integer('quantity_ordered');
            $table->integer('quantity_shipped')->default(0);
            $table->integer('quantity_remaining')->storedAs('quantity_ordered - quantity_shipped');
            $table->decimal('unit_price', 15, 2);
            $table->decimal('total_price', 15, 2)->storedAs('quantity_ordered * unit_price');
            $table->decimal('discount_percent', 5, 2)->default(0);
            $table->decimal('tax_percent', 5, 2)->default(0);
            $table->decimal('line_total', 15, 2)->storedAs('(quantity_ordered * unit_price) * (1 - discount_percent/100) * (1 + tax_percent/100)');
            $table->string('status', 20)->default('pending')->comment('pending, allocated, partially_shipped, shipped, cancelled');
            $table->text('notes')->nullable();
            $table->timestamps();

            // Indexes
            $table->index('sales_order_id');
            $table->index('product_id');
            $table->index('status');

            // Composite indexes
            $table->index(['sales_order_id', 'product_id']);
            $table->index(['sales_order_id', 'status']);
            $table->index(['product_id', 'status']);

            // Unique constraint
            $table->unique(['sales_order_id', 'product_id'], 'unique_so_product');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sales_order_items');
    }
};
