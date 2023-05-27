<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\EventController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\InvitationController;
use App\Http\Controllers\Section\CoverController;
use App\Http\Controllers\AjaxInvitationController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\LoadInvitationController;


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
    });

    Route::prefix('invitation')->group(function () {
        Route::get('events', [EventController::class, 'index']);
        Route::get('event/create', [EventController::class, 'create']);
        Route::post('/event', [EventController::class, 'store']);

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

require __DIR__ . '/auth.php';

Route::post('/guestbook/{invitationId}', [GuestController::class, 'store']);
Route::get('/{couple}', LoadInvitationController::class);
