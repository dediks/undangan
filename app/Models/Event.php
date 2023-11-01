<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Event extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'title',
        'start',
        'end',
        'location',
        'description',
        'map_link'
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
