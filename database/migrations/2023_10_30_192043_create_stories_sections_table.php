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
        Schema::create('story_sections', function (Blueprint $table) {
            $table->id();
            $table->string('title')->default("");
            $table->string('description')->nullable();
            $table->string('background_image')->nullable();
            $table->timestamps();

            $table->foreignUuid('invitation_id')->references('id')->on('invitations')->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('story_sections');
    }
};
