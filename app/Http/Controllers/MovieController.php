<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Movie;

class MovieController extends Controller
{
    public function index(Request $request)
    {
        // get the search term from the request
        $search_term = $request->input('search');
        $status = $request->input('status');

        //       FROM `movie`
        $query = Movie::query();

        if ($search_term !== null) {
            //      WHERE `name`   LIKE   'james%'
            $query->where('name', 'like', $search_term . '%');
        }

        if ($status !== null) {
            $query->where('status_id', $status);
        }

        $movie = $query
            ->orderBy('name', 'asc') // ORDER BY `name` ASC
            ->limit(8)              // LIMIT 50
            ->get();                 // SELECT *

        return $movie;
    }
}
