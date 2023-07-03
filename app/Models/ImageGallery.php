<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageGallery extends Model
{
    use HasFactory;

    protected $table = 'image_galleries';

    protected $fillable = [
        'order',
        'image_url',
        'alt',
        'width',
        'height'
    ];


    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }

    public function getDates()
    {
        return ['created_at', 'updated_at'];
    }

    private function getCreatedAtValue()
    {
        return date('m/d/Y', strtotime($this->attributes['created_at']));
    }

    public function getCreatedAtAttribute($date)
    {
        return Carbon::parse($date)->diffForHumans();
    }
}
