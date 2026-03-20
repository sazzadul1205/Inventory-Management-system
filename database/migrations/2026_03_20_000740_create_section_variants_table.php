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
        Schema::create('section_variants', function (Blueprint $table) {
            $table->id();
            // Matches your sectionRegistry keys
            $table->string('section_key');

            // 'variant1', 'variant2', 'variant3'
            $table->string('variant');

            // The FULL JSON config that your components expect
            $table->json('config');

            $table->timestamps();

            // Ensure each section_key + variant combination is unique
            $table->unique(['section_key', 'variant']);

            // Index for quick lookups
            $table->index('section_key');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('section_variants');
    }
};
