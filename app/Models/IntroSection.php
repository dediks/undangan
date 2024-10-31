<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class IntroSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'image',
    ];

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }

    public function attributes(): MorphMany
    {
        return $this->morphMany(SectionAttribute::class, 'attributable');
    }
}
