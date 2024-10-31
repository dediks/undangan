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
        Schema::create('quote_sections', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->mediumText('subtitle')->nullable();
            $table->text('text')->nullable();
            $table->string('author')->nullable();
            $table->boolean('show')->default(false);
            $table->timestamps();

            $table->foreignUuid('invitation_id')->references('id')->on('invitations')->cascadeOnUpdate()->cascadeOnDelete();

            $table->foreignId('quote_id')->nullable()->references('id')->on('quotes')->cascadeOnUpdate()->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quote_sections');
    }
};
