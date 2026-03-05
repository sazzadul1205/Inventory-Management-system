<?php
// database/migrations/2026_03_05_000012_create_purchase_receipts_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('purchase_receipts', function (Blueprint $table) {
            $table->id();
            $table->string('receipt_number', 50)->unique();
            $table->foreignId('purchase_order_id')->constrained()->cascadeOnDelete();
            $table->foreignId('warehouse_id')->constrained()->cascadeOnDelete();
            $table->timestamp('receipt_date')->useCurrent();
            $table->string('invoice_number', 100)->nullable();
            $table->string('delivery_note_number', 100)->nullable();
            $table->string('status', 20)->default('received')->comment('received, partially_received, completed, cancelled');
            $table->text('notes')->nullable();
            $table->foreignId('received_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();

            // Indexes
            $table->index('receipt_number');
            $table->index('purchase_order_id');
            $table->index('warehouse_id');
            $table->index('receipt_date');
            $table->index('invoice_number');
            $table->index('delivery_note_number');
            $table->index('status');
            $table->index('received_by');

            // Composite indexes
            $table->index(['purchase_order_id', 'status']);
            $table->index(['warehouse_id', 'receipt_date']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('purchase_receipts');
    }
};
