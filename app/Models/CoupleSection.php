<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class CoupleSection extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }

    public function attributes(): MorphMany
    {
        return $this->morphMany(SectionAttribute::class, 'attributable');
    }
}
