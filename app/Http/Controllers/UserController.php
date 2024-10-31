<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
        $users = User::exceptAuth()->get();

        return Inertia::render('Admin/Users/Index', ['users' => $users]);
    }

    public function destroy(User $user)
    {
        DB::beginTransaction();

        dd($user->delete());
        try {
            // Perform the deletion
            dd($user->delete());

            // Commit the transaction
            DB::commit();

            // Return a success response
            return back()->with('success', 'Resource deleted successfully.');
        } catch (\Exception $e) {
            // Rollback the transaction on any other exception
            DB::rollback();

            // Log the exception if necessary
            // Log::error($e);

            // Return a generic error response
            return back()->with('error', 'Failed to delete resource.');
        }
    }
}
