<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GiftSection extends Model
{
    use HasFactory;

    
    public function giftSection()
    {
        return $this->belongsTo(Invitation::class);
    }
}
