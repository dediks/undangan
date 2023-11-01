<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class SectionAttribute extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function attributable(): MorphTo
    {
        return $this->morphTo();
    }
}
