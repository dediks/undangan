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
        Schema::table(
            'guests',
            function (Blueprint $table) {
                $table->dropColumn('will_attend');
            }
        );

        Schema::table('guests', function (Blueprint $table) {
            $table->enum('will_attend', ['dontknow', 'yes', 'no'])->default('dontknow');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table(
            'guests',
            function (Blueprint $table) {
                $table->dropColumn('will_attend');
            }
        );

        Schema::table('guests', function (Blueprint $table) {
            $table->enum('will_attend', ['yes', 'no'])->default('no');
        });
    }
};
