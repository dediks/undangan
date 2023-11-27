<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('invitations', function (Blueprint $table) {
            $table->dropForeign(['user_id']); // Use the right key name

            // Create a new foreign key constraint with onDelete cascade
            $table->foreignUuid('invitations_user_id_foreign')->references('id')->on('users')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('invitations', function (Blueprint $table) {
            $table->dropForeign(['user_id']); // Use the right key name

            // Create a new foreign key constraint with onDelete cascade
            $table->foreignUuid('invitations_user_id_foreign')->references('id')->on('users')->cascadeOnUpdate();
        });
    }
};
