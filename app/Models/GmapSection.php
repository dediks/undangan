<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class GmapSection extends Model
{
    use HasFactory;

    const PLACE = 0;
    const VIEW = 1;
    const DIRECTIONS = 2;

    protected $fillable = [
        "title",
        "query",
        "latitude",
        "longitude",
        "zoom",
        "type",
        "show",
    ];

    protected $table = "gmap_sections";

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }

    public function attributes(): MorphMany
    {
        return $this->morphMany(SectionAttribute::class, 'attributable');
    }
}
