<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index()
    {
        $movies = Movie::get();
        return json_encode($movies);
        // return view('layouts.main', compact('movies'));
    }

    public function rate_and_review($movie_id, Request $request)
    {
        $movie = Movie::findOrFail($movie_id);

        if (!$request->input('rating') && !$request->input('review')) {
            return $movie;
        }
        $movie->rating = $request->input('rating') ?? null;
        $movie->review = $request->input('review') ?? '';

        $movie->save();

        return $movie;
        
    }
}
