<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('page_sections', function (Blueprint $table) {
            $table->id();
            $table->foreignId('page_id')->constrained()->cascadeOnDelete();

            // Matches your sectionRegistry keys: 'allServices', 'warehouseManagement', etc.
            $table->string('section_key');

            // Matches your variants: 'variant1', 'variant2', 'variant3'
            $table->string('variant')->default('variant1');

            $table->integer('order')->default(0);
            $table->boolean('enabled')->default(true);

            // Extra props like your pageConfig.props
            $table->json('props')->nullable();

            // Optional: device/locale for responsive/i18n
            $table->string('device')->nullable(); // 'mobile', 'desktop'
            $table->string('locale')->nullable(); // 'en', 'bn'

            $table->timestamps();

            // Index for faster queries
            $table->index(['page_id', 'order']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('page_sections');
    }
};
