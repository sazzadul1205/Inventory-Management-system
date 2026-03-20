<?php

namespace App\Models\Page;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Page extends Model
{
    protected $fillable = ['name', 'slug', 'meta', 'is_active', 'order'];

    protected $casts = [
        'meta' => 'array',
        'is_active' => 'boolean',
    ];

    public function sections(): HasMany
    {
        return $this->hasMany(PageSection::class)->orderBy('order');
    }

    // Helper to get active sections
    public function activeSections()
    {
        return $this->sections()->where('enabled', true);
    }
}
