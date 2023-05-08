<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $coupleId = Auth::user()->invitations()->first();

        // dd($coupleId);

        return Inertia::render('Dashboard');
    }
}
