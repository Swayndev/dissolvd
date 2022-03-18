<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('movies')->truncate();

        $movies_test_seeder = [
            [

                'id' => 770,
                'title' => "Gone with the Wind",
                'original_title' => "Gone with the Wind",
                'release_date' => "1939-12-15",

                'backdrop_path' => "/4FHcxMtVruMr7ltU2cItWssLjTP.jpg",
                'poster_path' => "/lNz2Ow0wGCAvzckW7EOjE03KcYv.jpg",

                'overview' => "The spoiled daughter of a well-to-do plantation owner is forced to use every means at her disposal to claw her way out of poverty, following Maj. Gen. William Sherman's destructive March to the Sea, during the American Civil War.",
                'runtime' => 233,


            ],

            [

                'id' => 550,
                'title' => "Fight Club",
                'original_title' => "Fight Club",
                'release_date' => "1999-10-15",

                'backdrop_path' => "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
                'poster_path' => "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",

                'overview' => "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
                'runtime' => 139,

            ],

            [

                'id' => 37495,
                'title' => "Four Lions",
                'original_title' => "Four Lions",
                'release_date' => "2010-05-07",

                'backdrop_path' => "/lwP2JtnhoKxhLoOo2u9jW3c3RIB.jpg",
                'poster_path' => "/lU9WFPChJ1CsD5kZuYoCdoAlbRd.jpg",

                'overview' => "A group of young Muslim men living in Sheffield decide to wage jihad, and they hatch an inept plan to become suicide bombers. Omar and Waj have a brief, disastrous run at a Pakistan training camp, while Faisal works on an unlikely scheme to train birds to carry bombs.",
                'runtime' => 97,

            ],

            [

                'id' => 414906,
                'title' => "The Batman",
                'original_title' => "The Batman",
                'release_date' => "2022-03-01",

                'backdrop_path' => "/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
                'poster_path' => "/74xTEgt7R36Fpooo50r9T25onhq.jpg",

                'overview' => "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
                'runtime' => 176,

            ],

            [

                'id' => 400617,
                'title' => "Phantom Thread",
                'original_title' => "Phantom Thread",
                'release_date' => "2017-12-25",

                'backdrop_path' => "/vpRMzPqHC03I7hPPET4Av2OT8dI.jpg",
                'poster_path' => "/yZ8j8xKk2xQ1d88hB8YG6LZfRQj.jpg",

                'overview' => "In 1950s London, renowned British dressmaker Reynolds Woodcock comes across Alma, a young, strong-willed woman, who soon becomes ever present in his life as his muse and lover.",
                'runtime' => 130,

            ],

            [

                'id' => 348,
                'title' => "Alien",
                'original_title' => "Alien",
                'release_date' => "1979-05-25",

                'backdrop_path' => "/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg",
                'poster_path' => "/bk9GVjN4kxmGekswNigaa5YIdr5.jpg",

                'overview' => "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
                'runtime' => 117,

            ],

            [

                'id' => 562,
                'title' => "Die Hard",
                'original_title' => "Die Hard",
                'release_date' => "1988-07-15",

                'backdrop_path' => "/oIwfoUFfWfESn0Y8u8jv9lc8li1.jpg",
                'poster_path' => "/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg",

                'overview' => "NYPD cop John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when, minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.",
                'runtime' => 131,

            ],

            [

                'id' => 78,
                'title' => "Blade Runner",
                'original_title' => "Blade Runner",
                'release_date' => "1982-06-25",

                'backdrop_path' => "/eIi3klFf7mp3oL5EEF4mLIDs26r.jpg",
                'poster_path' => "/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",

                'overview' => "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
                'runtime' => 118,

            ],

            [

                'id' => 15,
                'title' => "Citizen Kane",
                'original_title' => "Citizen Kane",
                'release_date' => "1941-04-17",

                'backdrop_path' => "/ruF3Lmd4A8MHbnEBE6lxPMbsHGL.jpg",
                'poster_path' => "/1RodLEV25rM3WDsiRZqFhyxuRj9.jpg",

                'overview' => "Newspaper magnate, Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event.",
                'runtime' => 119,

            ],

            [

                'id' => 269,
                'title' => "Breathless",
                'original_title' => "À bout de souffle",
                'release_date' => "1960-03-16",

                'backdrop_path' => "/5VGmkeXybclhOqBaLprigVG9Ucz.jpg",
                'poster_path' => "/aUaTg7Rz0LeNV3EsiMXTxcOCb19.jpg",

                'overview' => "A small-time thief steals a car and impulsively murders a motorcycle policeman. Wanted by the authorities, he attempts to persuade a girl to run away to Italy with him.",
                'runtime' => 90,

            ],
            [

                'id' => 18148,
                'title' => "Tokyo Story",
                'original_title' => "東京物語",
                'release_date' => "1953-11-03",

                'backdrop_path' => "/jLq0ol1f0ZKXni9R9GsPBcyPrNN.jpg",
                'poster_path' => "/g2YbTYKpY7N2yDSk7BfXZ18I5QV.jpg",

                'overview' => "The elderly Shukishi and his wife, Tomi, take the long journey from their small seaside village to visit their adult children in Tokyo. Their elder son, Koichi, a doctor, and their daughter, Shige, a hairdresser, don't have much time to spend with their aged parents, and so it falls to Noriko, the widow of their younger son who was killed in the war, to keep her in-laws company.",
                'runtime' => 137,

            ],

            [

                'id' => 862,
                'title' => "Toy Story",
                'original_title' => "Toy Story",
                'release_date' => "1995-10-30",

                'backdrop_path' => "/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
                'poster_path' => "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",

                'overview' => "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
                'runtime' => 81,

            ],

            [

                'id' => 489,
                'title' => "Good Will Hunting",
                'original_title' => "Good Will Hunting",
                'release_date' => "1997-12-05",

                'backdrop_path' => "/bpV8wn48s82au37QyUJ51S7X2Vf.jpg",
                'poster_path' => "/bABCBKYBK7A5G1x0FzoeoNfuj2.jpg",

                'overview' => "Will Hunting has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau, who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire.",
                'runtime' => 127,

            ],

            [

                'id' => 278,
                'title' => "The Shawshank Redemption",
                'original_title' => "The Shawshank Redemption",
                'release_date' => "1994-09-23",

                'backdrop_path' => "/wPU78OPN4BYEgWYdXyg0phMee64.jpg",
                'poster_path' => "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",

                'overview' => "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
                'runtime' => 142,

            ],

            [

                'id' => 670,
                'title' => "Oldboy",
                'original_title' => "올드보이",
                'release_date' => "2003-11-21",

                'backdrop_path' => "/47rioCQJLDe6gT7NYdPf7IRy3Nu.jpg",
                'poster_path' => "/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",

                'overview' => "With no clue how he came to be imprisoned, drugged and tortured for 15 years, a desperate businessman seeks revenge on his captors.",
                'runtime' => 120,

            ],

            [

                'id' => 238,
                'title' => "The Godfather",
                'original_title' => "The Godfather",
                'release_date' => "1972-03-14",

                'backdrop_path' => "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
                'poster_path' => "/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",

                'overview' => "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
                'runtime' => 175,

            ],

            [

                'id' => 240,
                'title' => "The Godfather: Part II",
                'original_title' => "The Godfather: Part II",
                'release_date' => "1974-12-20",

                'backdrop_path' => "/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg",
                'poster_path' => "/9Baumh5J9N1nJUYzNkm0xsgjpwY.jpg",

                'overview' => "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
                'runtime' => 202,

            ],

            [

                'id' => 26405,
                'title' => "Wake in Fright",
                'original_title' => "Wake in Fright",
                'release_date' => "1971-07-21",

                'backdrop_path' => "/uTuDBuaHUGtV36VsPf8aiM7aLh6.jpg",
                'poster_path' => "/kZ0XAZdokIHmjIWSqO53KjDeEQ7.jpg",

                'overview' => "Wake in Fright is the story of John Grant, a bonded teacher who arrives in the rough outback mining town of Bundanyabba planning to stay overnight before catching the plane to Sydney, but as one night stretches into several he plunges headlong into his own destruction.",
                'runtime' => 109,

            ],

            [

                'id' => 18491,
                'title' => "Neon Genesis Evangelion: The End of Evangelion",
                'original_title' => "新世紀エヴァンゲリオン劇場版 Air／まごころを、君に",
                'release_date' => "1997-07-19",

                'backdrop_path' => "/AfyuI3glMCBDFmNPj9PY6DwbgGp.jpg",
                'poster_path' => "/m9PTii0XWCIKZBBrCrOn8RLTK0w.jpg",

                'overview' => "The second of two theatrically released follow-ups to the Neon Genesis Evangelion series. Comprising of two alternate episodes which were first intended to take the place of episodes 25 and 26, this finale answers many of the questions surrounding the series, while also opening up some new possibilities.",
                'runtime' => 87,

            ],

            [

                'id' => 406,
                'title' => "La Haine",
                'original_title' => "La Haine",
                'release_date' => "1995-05-31",

                'backdrop_path' => "/viGCwLxupyoaLsa6hrnu1gYrB0B.jpg",
                'poster_path' => "/bW4tXG8kZ89ZCurPnzDDSzJbeF5.jpg",

                'overview' => "After a chaotic night of rioting in a marginal suburb of Paris, three young friends, Vinz, Hubert and Saïd, wander around unoccupied waiting for news about the state of health of a mutual friend who has been seriously injured when confronting the police.",
                'runtime' => 98,

            ],

            [

                'id' => 603,
                'title' => "The Matrix",
                'original_title' => "The Matrix",
                'release_date' => "1999-03-30",

                'backdrop_path' => "/ncEsesgOJDNrTUED89hYbA117wo.jpg",
                'poster_path' => "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",

                'overview' => "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
                'runtime' => 136,

            ],

            [

                'id' => 313369,
                'title' => "La La Land",
                'original_title' => "La La Land",
                'release_date' => "2016-11-29",

                'backdrop_path' => "/jL6B8mm9TR8vmh9VtgEg0GC7jPy.jpg",
                'poster_path' => "/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",

                'overview' => "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
                'runtime' => 129,

            ],

            [

                'id' => 153,
                'title' => "Lost in Translation",
                'original_title' => "Lost in Translation",
                'release_date' => "2003-09-18",

                'backdrop_path' => "/3ZY8iEsv5XKiMU19T1MIvHET5Ih.jpg",
                'poster_path' => "/wkSzJs7oMf8MIr9CQVICsvRfwA7.jpg",

                'overview' => "Two lost souls visiting Tokyo -- the young, neglected wife of a photographer and a washed-up movie star shooting a TV commercial -- find an odd solace and pensive freedom to be real in each other's company, away from their lives in America.",
                'runtime' => 102,

            ],


        ]; // end of $movies_test_seeder array


        foreach ($movies_test_seeder as $movie) {

            // dd($movies_test_seeder);
            
            $new_movie = new Movie();
            $new_movie->id = $movie['id'];    // CHECK THIS 
            $new_movie->title = $movie['title'];
            $new_movie->original_title = $movie['original_title'];
            $new_movie->release_date = $movie['release_date'];
            
            $new_movie->backdrop_path = $movie['backdrop_path'];
            $new_movie->poster_path = $movie['poster_path'];
            
            $new_movie->overview = $movie['overview'];
            $new_movie->runtime = $movie['runtime'];
            
            $new_movie->save();


        }

            // Movie::create(
            //     [
            //         'id' => $movie['id'],
            //         'original_title' => $movie['original_title'],
            //         'release_date' => $movie['release_date'],
        
            //         'poster_path' => $movie['poster_path'],
            //         'backdrop_path' => $movie['backdrop_path'],
        
            //         'overview' => $movie['overview'],
            //         'runtime' => $movie['runtime'],
        
            //     ]
            // );

    } // end of the run function
}
