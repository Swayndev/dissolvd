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
        Schema::create('person_movie', function (Blueprint $table) {
            $table->foreignId('movie_id');
            $table->foreignId('people_id');
            $table->boolean('is_cast');
            $table->string('job');
            $table->string('character');

           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('person_movie');
    }
};
