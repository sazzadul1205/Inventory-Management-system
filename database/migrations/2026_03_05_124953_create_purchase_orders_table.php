<?php
// database/migrations/2026_03_05_000010_create_purchase_orders_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('purchase_orders', function (Blueprint $table) {
            $table->id();
            $table->string('po_number', 50)->unique();
            $table->foreignId('supplier_id')->constrained()->cascadeOnDelete();
            $table->foreignId('warehouse_id')->constrained()->cascadeOnDelete();
            $table->date('order_date');
            $table->date('expected_delivery_date')->nullable();
            $table->date('actual_delivery_date')->nullable();
            $table->string('status', 20)->default('draft')->comment('draft, pending, approved, shipped, partially_received, received, cancelled');
            $table->string('payment_terms', 100)->nullable();
            $table->string('shipping_method', 100)->nullable();
            $table->string('tracking_number', 100)->nullable();
            $table->decimal('subtotal', 15, 2)->default(0);
            $table->decimal('tax_amount', 15, 2)->default(0);
            $table->decimal('shipping_cost', 15, 2)->default(0);
            $table->decimal('total_amount', 15, 2)->default(0);
            $table->text('notes')->nullable();
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('approved_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();

            // Indexes
            $table->index('po_number');
            $table->index('supplier_id');
            $table->index('warehouse_id');
            $table->index('order_date');
            $table->index('expected_delivery_date');
            $table->index('status');
            $table->index('created_by');
            $table->index('approved_by');

            // Composite indexes
            $table->index(['supplier_id', 'status']);
            $table->index(['status', 'expected_delivery_date']);
            $table->index(['created_at', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('purchase_orders');
    }
};
