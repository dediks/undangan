<?php

use App\Http\Controllers\AjaxInvitationController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\InvitationController;
use App\Http\Controllers\LoadInvitationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\Section\CoverController;
use App\Models\Invitation;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

Route::get('/test', function () {
    dd();
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('dashboard')->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
        Route::get('/events', [EventController::class, 'index']);
        Route::get('/events/create', [EventController::class, 'create']);
    });

    Route::prefix('invitation')->group(function () {
        Route::post('bridegroom', [InvitationController::class, 'store']);
        Route::get('bridegroom/create', [InvitationController::class, 'create']);
        Route::get('bridegroom/{bridegroom}/edit', [InvitationController::class, 'edit']);
        Route::put('bridegroom/{bridegroom}', [InvitationController::class, 'update']);

        Route::put('ajax/couple-id/update', [AjaxInvitationController::class, 'updateCoupleId']);

        Route::group(['namespace' => 'App\Http\Controllers\Section'], function () {
            Route::get('{invitationId}/cover', [CoverController::class, 'edit']);
            Route::put('cover/{id}', [CoverController::class, 'update']);
        });
    });


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::prefix('filepond')->group(function () {
        Route::get('/upload/restore/{id}', [UploadController::class, 'show']);
        Route::get('/upload/load/{load}', [UploadController::class, 'load']);
        Route::post('/upload/process', [UploadController::class, 'store']);
        Route::delete('/upload/revert', [UploadController::class, 'destroy']);
    });
});

// ourmarry.com/mbul-bojone?to=dedik
// ourmarry.com/apps
// ourmarry.com/apps/dashboard
// ourmarry.com/apps/invitation/1/edit
// ourmarry.com/apps/invitation/1
// ourmarry.com/apps/invitation/create

require __DIR__ . '/auth.php';

Route::get('/{couple}', LoadInvitationController::class);
