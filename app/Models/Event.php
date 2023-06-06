<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory, HasUuids;

protected $fillable = [
    'title',
    'start',
    'end',
    'location',
    'description'
];

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }
}
