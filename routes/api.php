<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Our first basic API with 23 movies stored into PHPmyAdmin
Route::get('/movie', 'Api\MovieController@index');


Route::post('/movie/{movie_id?}', 'Api\MovieController@rate_and_review');


Route::post('/opinion/{opinion_id?}', 'Api\OpinionController@rate_and_review');
