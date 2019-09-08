<?php

use Illuminate\Http\Request;
use app\Http\Middleware\cors;
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
Route::get('pizzas', 'PizzaController@index')->middleware('cors');
Route::put('add/{pizza}', 'PizzaController@markAsAdded')->middleware('cors');
Route::put('remove/{pizza}', 'PizzaController@unmarkAsAdded')->middleware('cors');