<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Guest extends Model
{
    use HasFactory;

    protected $fillable = [
        'nickname',
        'fullname',
        'address',
        'message',
        'will_attend',
        'invitation_id'
    ];

    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }

    private function getCreatedAtValue()
    {
        return date('m/d/Y', strtotime($this->attributes['created_at']));
    }

    private function getUpdatedAtValue()
    {
        return date('m/d/Y', strtotime($this->attributes['updated_at']));
    }

    public function getDates()
    {
        return ['created_at', 'updated_at'];
    }

    public function getCreatedAtAttribute($date)
    {
        return Carbon::parse($date)->diffForHumans();
    }
    public function getUpdatedAtAttribute($date)
    {
        return Carbon::parse($date)->diffForHumans();
    }

    public function attributes(): MorphMany
    {
        return $this->morphMany(SectionAttribute::class, 'attributable');
    }
}
