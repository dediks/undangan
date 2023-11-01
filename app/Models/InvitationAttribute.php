<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InvitationAttribute extends Model
{
    use HasFactory;

    public function Invitation(): BelongsTo
    {
        return $this->belongsTo(Invitation::class);
    }
}
