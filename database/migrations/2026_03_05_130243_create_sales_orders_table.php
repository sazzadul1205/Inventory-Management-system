<?php
// database/migrations/2026_03_05_000015_create_sales_orders_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sales_orders', function (Blueprint $table) {
            $table->id();
            $table->string('so_number', 50)->unique();
            $table->foreignId('customer_id')->constrained()->cascadeOnDelete();
            $table->foreignId('warehouse_id')->constrained()->cascadeOnDelete();
            $table->date('order_date');
            $table->date('required_date')->nullable();
            $table->date('shipped_date')->nullable();
            $table->string('status', 20)->default('draft')->comment('draft, pending, approved, processing, partially_shipped, shipped, delivered, cancelled');
            $table->text('shipping_address')->nullable();
            $table->text('billing_address')->nullable();
            $table->string('payment_status', 20)->default('pending')->comment('pending, paid, partially_paid, refunded');
            $table->string('payment_method', 50)->nullable();
            $table->decimal('subtotal', 15, 2)->default(0);
            $table->decimal('tax_amount', 15, 2)->default(0);
            $table->decimal('shipping_cost', 15, 2)->default(0);
            $table->decimal('discount_amount', 15, 2)->default(0);
            $table->decimal('total_amount', 15, 2)->default(0);
            $table->text('notes')->nullable();
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('approved_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();

            // Indexes
            $table->index('so_number');
            $table->index('customer_id');
            $table->index('warehouse_id');
            $table->index('order_date');
            $table->index('required_date');
            $table->index('shipped_date');
            $table->index('status');
            $table->index('payment_status');
            $table->index('created_by');
            $table->index('approved_by');

            // Composite indexes
            $table->index(['customer_id', 'status']);
            $table->index(['status', 'order_date']);
            $table->index(['payment_status', 'status']);
            $table->index(['required_date', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sales_orders');
    }
};
