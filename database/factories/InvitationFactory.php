<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Invitation>
 */
class InvitationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'couple_id' => 'dedik-someone',
            'groom_nickname' => 'dedik',
            'bride_nickname' => 'someone',
            'theme_id' => 'Theme_1'
        ];
    }
}
