<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
