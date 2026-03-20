<?php

namespace App\Models\Page;

use Illuminate\Database\Eloquent\Model;

class SectionVariant extends Model
{
    protected $table = 'section_variants';

    protected $fillable = ['section_key', 'variant', 'config'];

    protected $casts = [
        'config' => 'array',
    ];

    // Helper to get the specific section config based on your naming convention
    public function getSectionConfigAttribute()
    {
        // Your configs are nested like: allServicesSection1, allServicesSection2, etc.
        $variantNumber = str_replace('variant', '', $this->variant);
        return $this->config["{$this->section_key}Section{$variantNumber}"] ?? $this->config;
    }
}
