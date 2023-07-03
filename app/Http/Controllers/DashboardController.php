<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $invitation = Auth::user()->invitations()->with(['whatsappForm'])->first();

        return Inertia::render('Dashboard', ['section' => $invitation->getRelations()]);
    }
}
