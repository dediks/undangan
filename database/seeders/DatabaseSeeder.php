<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Guest;
use App\Models\Invitation;
use App\Models\Permission;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();


        $user = User::factory()->create();

        $invitation = Invitation::factory()->for($user)->create();

        Guest::factory()->for($invitation)->create();

        Permission::factory()->count(18)->sequence(
            ['name' => 'invitation.index'],
            ['name' => 'invitation.create'],
            ['name' => 'invitation.store'],
            ['name' => 'invitation.show'],
            ['name' => 'invitation.edit'],
            ['name' => 'invitation.destroy'],
            ['name' => 'user.index'],
            ['name' => 'user.create'],
            ['name' => 'user.store'],
            ['name' => 'user.show'],
            ['name' => 'user.edit'],
            ['name' => 'user.destroy'],
            ['name' => 'event.index'],
            ['name' => 'event.create'],
            ['name' => 'event.store'],
            ['name' => 'event.show'],
            ['name' => 'event.edit'],
            ['name' => 'event.destroy'],
        )->create();
    }
}
