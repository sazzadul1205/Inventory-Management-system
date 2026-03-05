<?php
// database/migrations/2026_03_05_000017_create_shipments_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('shipments', function (Blueprint $table) {
            $table->id();
            $table->string('shipment_number', 50)->unique();
            $table->foreignId('sales_order_id')->constrained()->cascadeOnDelete();
            $table->foreignId('warehouse_id')->constrained()->cascadeOnDelete();
            $table->timestamp('shipped_date')->useCurrent();
            $table->timestamp('delivery_date')->nullable();
            $table->string('carrier', 100)->nullable();
            $table->string('tracking_number', 100)->nullable();
            $table->string('shipping_method', 50)->nullable();
            $table->decimal('shipping_cost', 15, 2)->default(0);
            $table->string('status', 20)->default('pending')->comment('pending, packed, shipped, delivered, cancelled');
            $table->text('notes')->nullable();
            $table->foreignId('shipped_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();

            // Indexes
            $table->index('shipment_number');
            $table->index('sales_order_id');
            $table->index('warehouse_id');
            $table->index('shipped_date');
            $table->index('delivery_date');
            $table->index('carrier');
            $table->index('tracking_number');
            $table->index('status');
            $table->index('shipped_by');

            // Composite indexes
            $table->index(['sales_order_id', 'status']);
            $table->index(['warehouse_id', 'shipped_date']);
            $table->index(['carrier', 'tracking_number']);
            $table->index(['status', 'shipped_date']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('shipments');
    }
};
