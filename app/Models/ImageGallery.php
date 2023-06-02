<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageGallery extends Model
{
    use HasFactory;

    protected $table = 'image_galleries';

    protected $fillable = [
        'order',
        'image_url',
    ];


    public function invitation()
    {
        return $this->belongsTo(Invitation::class);
    }
}
