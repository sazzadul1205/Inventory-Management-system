<?php
// database/migrations/2026_03_05_000004_create_product_suppliers_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('product_suppliers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('supplier_id')->constrained()->cascadeOnDelete();
            $table->string('supplier_sku', 100)->nullable();
            $table->decimal('unit_cost', 15, 2)->nullable();
            $table->integer('minimum_order_quantity')->default(1);
            $table->boolean('is_preferred')->default(false);
            $table->integer('lead_time_days')->nullable();
            $table->timestamps();

            // Add unique constraint to prevent duplicate product-supplier pairs
            $table->unique(['product_id', 'supplier_id']);

            // Add indexes
            $table->index('supplier_sku');
            $table->index('is_preferred');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('product_suppliers');
    }
};
