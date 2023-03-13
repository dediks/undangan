<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Invitation extends Model
{
    use HasFactory;

    protected $fillable = [
        "bride_nickname",
        "groom_nickname",
        "groom_fullname",
        "bride_fullname",
        "bride_father",
        "bride_mother",
        "groom_mother",
        "groom_father",
        "bride_as_child_position",
        "groom_as_child_position",
    ];

    protected static function booted(): void
    {
        //laravel scope
    }
}
