<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class WhatsappFormSection extends Model
{
    use HasFactory;

    protected $table = 'whatsappform_sections';

    public function attributes(): MorphMany
    {
        return $this->morphMany(SectionAttribute::class, 'attributable');
    }
}
