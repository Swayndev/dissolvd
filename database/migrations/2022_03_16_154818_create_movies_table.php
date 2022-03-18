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
        Schema::create('movies', function (Blueprint $table) {
            $table->id();

            $table->string('title');                        // this is good and checked
            $table->string('original_title');              // this is good and checked
            $table->string('release_date')->nullable();    // this is good and checked

            $table->string('poster_path')->nullable();    // this is good and checked
            $table->string('backdrop_path')->nullable(); // this is good and checked

            $table->text('overview')->nullable();      // this is good and checked
            $table->integer('runtime')->nullable();   // this is good and checked
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movies');
    }
};
