<?php
// database/migrations/2026_03_05_000022_create_stock_count_items_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stock_count_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('stock_count_id')->constrained()->cascadeOnDelete();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('location_id')->nullable()->constrained()->nullOnDelete();
            $table->integer('expected_quantity')->default(0);
            $table->integer('counted_quantity')->default(0);
            $table->integer('variance_quantity')->storedAs('counted_quantity - expected_quantity');
            $table->decimal('variance_percentage', 8, 2)->storedAs('
                CASE 
                    WHEN expected_quantity = 0 THEN 
                        CASE WHEN counted_quantity = 0 THEN 0 ELSE 100 END
                    ELSE 
                        ((counted_quantity - expected_quantity) / expected_quantity) * 100 
                END
            ');
            $table->string('variance_reason', 100)->nullable()->comment('damage, theft, misplacement, system_error, etc.');
            $table->string('status', 20)->default('pending')->comment('pending, counted, verified, approved, rejected');
            $table->foreignId('counted_by')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('approved_by')->nullable()->constrained('users')->nullOnDelete();
            $table->text('notes')->nullable();
            $table->timestamps();

            // Indexes
            $table->index('stock_count_id');
            $table->index('product_id');
            $table->index('location_id');
            $table->index('status');
            $table->index('variance_reason');
            $table->index('counted_by');
            $table->index('approved_by');

            // Composite indexes
            $table->index(['stock_count_id', 'product_id']);
            $table->index(['stock_count_id', 'location_id']);
            $table->index(['product_id', 'location_id']);
            $table->index(['status', 'variance_reason']);
            $table->index(['stock_count_id', 'status']);

            // Index for items with variance
            $table->index(['variance_quantity', 'status']);

            // Unique constraint to prevent duplicate counts for same product/location in same count
            $table->unique(['stock_count_id', 'product_id', 'location_id'], 'unique_count_item');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stock_count_items');
    }
};
