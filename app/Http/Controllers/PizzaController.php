<?php

namespace App\Http\Controllers;

use App\Pizza;
use Illuminate\Http\Request;

class PizzaController extends Controller {
    // get all pizzas from db
    public function index() {
        $pizzas = Pizza::orderBy('id', 'asc')->get();
        return $pizzas->toJson();
    }

    // change the is_added to true
    public function markAsAdded(Pizza $pizza) {
        $pizza->is_added = true;
        $pizza->update();
        return response()->json('Pizza updated!');
    }

    // change the is_added to false
    public function unmarkAsAdded(Pizza $pizza) {
        $pizza->is_added = false;
        $pizza->update();
        return response()->json('Pizza updated!');
    }
}
