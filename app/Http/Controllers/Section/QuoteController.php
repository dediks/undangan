<?php

namespace App\Http\Controllers\Section;

use App\Http\Controllers\Controller;
use App\Models\ImageGallery;
use App\Models\Invitation;
use App\Models\QuoteSection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuoteController extends Controller
{
    public function edit($invitationId)
    {
        $quote_section = QuoteSection::where('invitation_id', $invitationId)->firstOrFail();

        // dd($quote_section);
        // $invitation = Invitation::with('quoteSection')->findOrFail($invitationId);

        // dd($invitation);

        // ImageGallery::all();

        return Inertia::render('Invitation/Section/QuoteSection', ['quoteData' => $quote_section]);
    }
}
