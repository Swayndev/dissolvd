<?php

use Illuminate\Support\Facades\Route;

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/{path?}', 'HomeController@index')->where('path', '.*');


// If you want to protect your routes from unauthenticated access
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// ROUTE FOR EXAMPLE
// Route::get('/', 'HomeController@index')->middleware('auth')->name('home');
