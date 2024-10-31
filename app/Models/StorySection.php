<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class StorySection extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $table = 'story_sections';

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }

    public function attributes(): MorphMany
    {
        return $this->morphMany(SectionAttribute::class, 'attributable');
    }

    public function stories()
    {
        return $this->hasMany(Story::class);
    }
}
