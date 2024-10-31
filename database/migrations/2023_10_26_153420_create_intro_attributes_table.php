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
        Schema::create('intro_section_attributes', function (Blueprint $table) {
            $table->id();
            $table->string('attribute_name');
            $table->string('value')->nullable();
            $table->timestamps();

            $table->foreignId('intro_section_id')->references('id')->on('intro_sections')->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('intro_section_attributes');
    }
};
