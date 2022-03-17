<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $movies_seeder_test = [
            [

                'id' => 770,
                'original_title' => "Gone with the Wind",
                'release_date' => "1939-12-15",

                'backdrop_path' => "/4FHcxMtVruMr7ltU2cItWssLjTP.jpg",
                'poster_path' => "/lNz2Ow0wGCAvzckW7EOjE03KcYv.jpg",

                'overview' => "The spoiled daughter of a well-to-do plantation owner is forced to use every means at her disposal to claw her way out of poverty, following Maj. Gen. William Sherman's destructive March to the Sea,” during the American Civil War.",
                'genres' => 'drama',

                'original_language' => "en",

            ],

            [

                'id' => 550,
                'original_title' => "Fight Club",
                'release_date' => "1999-10-15",

                'backdrop_path' => "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
                'poster_path' => "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",

                'overview' => "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
                'genres' => 'drama',

                'original_language' => "en",

            ]

            // {
            //     id: 660,
            //     original_title: "Thunderball",
            //     release_date: "1965-12-11",

            //     overview: "A criminal organization has obtained two nuclear bombs and are asking for a 100 million pound ransom in the form of diamonds in seven days or they will use the weapons. The secret service sends James Bond to the Bahamas to once again save the world.",

            //     original_language: "en",

            //     genres: [
            //         {
            //         id: 12,
            //         name: "Adventure"
            //         },
            //         {
            //         id: 28,
            //         name: "Action"
            //         },
            //         {
            //         id: 53,
            //         name: "Thriller"
            //         }
            //     ],

            //     backdrop_path: "/7mn0IFuByr9bsmlprotTdeO71Km.jpg",
            //     poster_path: "/oJ5ybB57eidPLqZUltrVjshqwcs.jpg"
            // }

        ];  // end of $movies_seeder_test array

    } // end of the run function
}
