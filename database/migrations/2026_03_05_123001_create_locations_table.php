<?php
// database/migrations/2026_03_05_000006_create_locations_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('locations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('warehouse_id')->constrained()->cascadeOnDelete();
            $table->string('location_code', 50)->unique();
            $table->string('zone', 50)->nullable();
            $table->string('aisle', 50)->nullable();
            $table->string('rack', 50)->nullable();
            $table->string('shelf', 50)->nullable();
            $table->string('bin', 50)->nullable();
            $table->string('barcode', 100)->nullable();
            $table->integer('max_capacity')->nullable();
            $table->integer('current_utilization')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            // Add indexes for hierarchical location queries
            $table->index('warehouse_id');
            $table->index('location_code');
            $table->index('zone');
            $table->index('aisle');
            $table->index('rack');
            $table->index('shelf');
            $table->index('bin');
            $table->index('barcode');
            $table->index('is_active');

            // Composite index for warehouse location hierarchy
            $table->index(['warehouse_id', 'zone', 'aisle', 'rack', 'shelf', 'bin'], 'location_hierarchy_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('locations');
    }
};
