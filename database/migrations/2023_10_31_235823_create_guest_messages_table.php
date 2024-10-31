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
        Schema::create('guest_messages', function (Blueprint $table) {
            $table->id();
            $table->text('message')->nullable();
            $table->enum('will_attend', ['yes', 'no'])->default('no');
            $table->timestamps();

            $table->foreignUuid('invitation_id')->references('id')->on('invitations')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('guest_id')->nullable()->references('id')->on('guests')->cascadeOnUpdate()->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('guest_messages');
    }
};
