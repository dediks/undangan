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
        Schema::create('gmap_sections', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('query');
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            $table->integer('zoom')->default(0);
            $table->integer('type')->default(0);
            $table->boolean('show')->default(false);
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
        Schema::dropIfExists('gmap_sections');
    }
};
