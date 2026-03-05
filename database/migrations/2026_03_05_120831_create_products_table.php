<?php
// database/migrations/2026_03_05_000003_create_products_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('sku', 50)->unique();
            $table->string('barcode', 100)->unique()->nullable();
            $table->string('name', 200);
            $table->text('description')->nullable();
            $table->foreignId('category_id')->nullable()->constrained()->nullOnDelete();
            $table->string('brand', 100)->nullable();
            $table->string('unit_of_measure', 20)->nullable();
            $table->integer('minimum_stock')->default(0);
            $table->integer('maximum_stock')->nullable();
            $table->integer('reorder_point')->nullable();
            $table->integer('reorder_quantity')->nullable();
            $table->decimal('weight', 10, 2)->nullable();
            $table->string('weight_unit', 10)->nullable();
            $table->string('dimensions', 50)->nullable();
            $table->boolean('is_active')->default(true);
            $table->boolean('is_serial_tracked')->default(false);
            $table->boolean('is_batch_tracked')->default(false);
            $table->boolean('is_expirable')->default(false);
            $table->text('image_url')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();

            // Add indexes
            $table->index('name');
            $table->index('category_id');
            $table->index('brand');
            $table->index('is_active');
            $table->index(['is_serial_tracked', 'is_batch_tracked', 'is_expirable']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
