<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Opinion;

class OpinionController extends Controller
{
    public function rate_and_review(Request $request)
    {
        
        $user_opinion = new Opinion;

        // if (!$request->input('rating') && !$request->input('review')) {
        //     return $user_opinion;
        // }

        $user_opinion->rating = $request->input('rating') ?? null;
        $user_opinion->review = $request->input('review') ?? '';
        $user_opinion->checked = $request->input('checked') ?? false;

        $user_opinion->movie_id = $request->input('movie_id') ?? null;
        $user_opinion->user_id = $request->input('user_id') ?? null;

        $user_opinion->save();
    }
}
