<?php

namespace App\Http\Controllers\Section;

use App\Http\Controllers\Controller;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CoverController extends Controller
{
    public function edit(Invitation $invitation)
    {
        dd($invitation);

        return Inertia::render('Invitation/Section/Cover');
    }
}
