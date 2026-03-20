<?php

namespace App\Models\Page;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class PageSection extends Model
{
    protected $table = 'page_sections';

    protected $fillable = [
        'page_id',
        'section_key',
        'variant',
        'order',
        'enabled',
        'props',
        'device',
        'locale'
    ];

    protected $casts = [
        'props' => 'array',
        'enabled' => 'boolean',
    ];

    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }

    // This clever relationship matches based on section_key AND variant
    public function variantConfig(): HasOne
    {
        return $this->hasOne(SectionVariant::class, 'section_key', 'section_key')
            ->whereColumn('variant', 'page_sections.variant');
    }

    // Helper to get the full config with props merged
    public function getFullConfigAttribute()
    {
        $config = $this->variantConfig?->config ?? [];

        // Merge with page-specific props (props override base config)
        if ($this->props) {
            $config = array_merge($config, $this->props);
        }

        return $config;
    }
}
