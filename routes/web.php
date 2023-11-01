<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\EventController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\InvitationController;
use App\Http\Controllers\AjaxInvitationController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\LinkController;
use App\Http\Controllers\LoadInvitationController;
use App\Http\Controllers\MusicController;
use App\Http\Controllers\Section\CoverController;
use App\Http\Controllers\Section\IntroController;
use App\Http\Controllers\Section\GalleryController;
use App\Http\Controllers\Section\GmapController;
use App\Http\Controllers\Section\QuoteController;
use App\Http\Controllers\StoryController;
use App\Http\Controllers\Section\StoryController as StorySectionController;
use Illuminate\Support\Facades\File;

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
        Route::get('/{invitationId}/links', [LinkController::class, 'index']);

        Route::get('stories', [StoryController::class, 'index']);
        Route::get('/{invitationId}/stories/create', [StoryController::class, 'create']);
        Route::post('{invitationId}/stories', [StoryController::class, 'store']);

        Route::get('events', [EventController::class, 'index']);
        Route::get('/{invitationId}/events/create', [EventController::class, 'create']);
        Route::post('/{invitationId}/events', [EventController::class, 'store']);
        Route::delete('/events/{eventId}', [EventController::class, 'destroy']);
        Route::get('/events/{eventId}/edit', [EventController::class, 'edit']);
        Route::put('/{invitationId}/events/{eventId}', [EventController::class, 'update']);

        Route::get('guests', [GuestController::class, 'index']);
        Route::get('/guest/{guestId}/edit', [GuestController::class, 'edit']);
        Route::post('/{invitationId}/guest', [GuestController::class, 'store']);
        Route::put('/{invitationId}/guests/{guestId}', [GuestController::class, 'update']);
        Route::get('/{invitationId}/guest/create', [GuestController::class, 'create']);
        Route::delete('/guests/{guestId}', [GuestController::class, 'destroy']);

        Route::post('bridegroom', [InvitationController::class, 'store']);
        Route::get('bridegroom/create', [InvitationController::class, 'create']);
        Route::get('bridegroom/{bridegroom}/edit', [InvitationController::class, 'edit']);
        Route::put('bridegroom/{bridegroom}', [InvitationController::class, 'update']);

        Route::put('ajax/couple-id/update', [AjaxInvitationController::class, 'updateCoupleId']);

        Route::group(['namespace' => 'App\Http\Controllers\Section'], function () {
            Route::get('{invitationId}/cover', [CoverController::class, 'edit']);
            Route::put('cover/{id}', [CoverController::class, 'update']);

            Route::get('{invitationId}/intro', [IntroController::class, 'edit']);
            Route::put('intro/{id}', [IntroController::class, 'update']);
            Route::post('{invitationId}/intro', [IntroController::class, 'store']);

            Route::get('{invitationId}/quotes', [QuoteController::class, 'edit']);
            Route::put('intro/{id}', [IntroController::class, 'update']);

            Route::get('{invitationId}/stories', [StorySectionController::class, 'edit']);
            Route::put('story/{id}', [StorySectionController::class, 'update']);

            Route::get('{invitationId}/quotes', [QuoteController::class, 'edit']);
            Route::put('quotes/{id}', [IntroController::class, 'update']);
            Route::post('{invitationId}/quotes', [IntroController::class, 'store']);

            Route::get('{invitationId}/gmap', [GmapController::class, 'edit']);
            Route::put('gmap/{id}', [GmapController::class, 'update']);
            Route::post('{invitationId}/gmap', [GmapController::class, 'store']);

            Route::get('{invitationId}/galleries', [GalleryController::class, 'index']);
            Route::get('/{invitationId}/galleries/create', [GalleryController::class, 'create']);
            Route::put('galleries/{id}', [GalleryController::class, 'update']);
            Route::post('{invitationId}/galleries', [GalleryController::class, 'store']);
            Route::delete('/galleries/{galleryId}', [GalleryController::class, 'destroy']);

            Route::post('{invitationId}/music/{musicId}', [MusicController::class, 'store'])->name('music.select');
            Route::get('{invitationId}/music', [MusicController::class, 'index']);
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

Route::post('/guestbook/{invitationId}', [GuestController::class, 'storeComment']);
Route::get('/{couple}', LoadInvitationController::class);
