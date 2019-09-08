<?php

namespace App\Http\Controllers;

use App\Pizza;
use Illuminate\Http\Request;

class PizzaController extends Controller {
    public function index() {
        $pizzas = Pizza::orderBy('id', 'asc')->get();
        return $pizzas->toJson();
    }

    public function markAsAdded(Pizza $pizza) {
        $pizza->is_added = true;
        $pizza->update();
        return response()->json('Pizza updated!');
    }

    public function unmarkAsAdded(Pizza $pizza) {
        $pizza->is_added = false;
        $pizza->update();
        return response()->json('Pizza updated!');
    }
}
