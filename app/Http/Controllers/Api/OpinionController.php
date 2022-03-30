<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Opinion;

class OpinionController extends Controller
{
    public function store(Request $request)
    {

        $user_opinion = new Opinion;

        // if (!$request->input('rating') && !$request->input('review')) {
        //     return $user_opinion;
        // }

        $user_opinion->rating = $request->input('rating') ?? null;
        $user_opinion->review = $request->input('review') ?? '';
        $user_opinion->is_watched = $request->input('is_watched') ?? false;

        $user_opinion->movie_id = $request->input('movie_id') ?? null;
        $user_opinion->user_id = $request->input('user_id') ?? null;

        $user_opinion->save();
    }

    public function display()
    {
        $opinion_displayed = Opinion::orderby('created_at', 'desc')
            ->limit(15)
            ->get();

        return $opinion_displayed;
    }

    public function update()
    {
    }

    public function delete()
    {
    }
}
