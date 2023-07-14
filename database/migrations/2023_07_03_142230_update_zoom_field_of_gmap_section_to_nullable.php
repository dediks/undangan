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
        Schema::table('gmap_sections', function (Blueprint $table) {
            $table->integer('zoom')->nullable()->change();
            $table->integer('type')->nullable()->change();
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('gmap_sections', function (Blueprint $table) {
            $table->integer('zoom')->change();
        });
    }
};
