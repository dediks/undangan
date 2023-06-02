<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Invitation extends Model
{
    use HasFactory, HasUlids;

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
        'groom_photo',
        'bride_photo',
        'couple_id'
    ];

    protected static function booted(): void
    {
        //laravel scope
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function guests()
    {
        return $this->hasMany(Guest::class);
    }

    public function cover()
    {
        return $this->hasOne(CoverSection::class);
    }

    public function galleries()
    {
        return $this->hasMany(ImageGallery::class);
    }

    public function event()
    {
        return $this->hasMany(Event::class);
    }

    protected static function boot()
    {
        parent::boot();

        static::created(function ($invitation) {
            $cover = new CoverSection();
            $cover->title = 'The wedding of';
            $invitation->cover()->save($cover);
        });
    }
}
