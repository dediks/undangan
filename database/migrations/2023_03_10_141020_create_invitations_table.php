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
        Schema::create('invitations', function (Blueprint $table) {
            $table->id();
            $table->string('bride_nickname', 100)->nullable();
            $table->string('groom_nickname', 100)->nullable();
            $table->string('bride_fullname')->nullable();
            $table->string('groom_fullname')->nullable();
            $table->string('bride_photo')->nullable();
            $table->string('groom_photo')->nullable();
            $table->string('groom_father')->nullable();
            $table->string('groom_mother')->nullable();
            $table->string('bride_mother')->nullable();
            $table->string('bride_father')->nullable();
            $table->integer('bride_as_child_position')->default(0);
            $table->integer('groom_as_child_position')->default(0);
            $table->timestamps();

            $table->unsignedBigInteger('user_id');

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invitations');
    }
};
