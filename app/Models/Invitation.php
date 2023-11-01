<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
        'couple_id',
        'bride_domicile',
        'groom_domicile'
    ];

    protected static function booted(): void
    {
        //laravel scope
    }

    public function music(): BelongsTo
    {
        return $this->belongsTo(Music::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function guests()
    {
        return $this->hasMany(Guest::class);
    }

    public function quoteSection()
    {
        return $this->hasOne(QuoteSection::class);
    }

    public function couple()
    {
        return $this->hasOne(CoupleSection::class);
    }

    public function cover()
    {
        return $this->hasOne(CoverSection::class);
    }

    public function intro()
    {
        return $this->hasOne(IntroSection::class);
    }

    public function gmap()
    {
        return $this->hasOne(GmapSection::class);
    }

    public function gallery()
    {
        return $this->hasOne(GallerySection::class);
    }

    public function whatsappForm()
    {
        return $this->hasOne(WhatsappFormSection::class);
    }

    public function galleries()
    {
        return $this->hasMany(ImageGallery::class);
    }

    public function events()
    {
        return $this->hasMany(Event::class);
    }

    public function storySection()
    {
        return $this->hasOne(StorySection::class, 'invitation_id', 'id');
    }

    public function guestBookSection()
    {
        return $this->hasOne(GuestBookSection::class, 'invitation_id', 'id');
    }

    public function stories()
    {
        return $this->hasMany(Story::class);
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
