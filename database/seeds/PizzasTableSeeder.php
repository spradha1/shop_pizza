<?php

use Illuminate\Database\Seeder;
use App\Pizza;

class PizzasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $pizzas = [
        [
            'id' => 1,
            'name' => 'Hawaiian Pizza',
            'price' => 5.00,
            'imageURL' => 'hawaiian.jpeg',
            'is_added' => 0,
        ],
        [
            'id' => 2,
            'name' => 'Chicken Pizza',
            'price' => 5.50,
            'imageURL' => 'chicken.jpg',
            'is_added' => 0,
        ],
        [
            'id' => 3,
            'name' => 'Mixed Pizza',
            'price' => 3.00,
            'imageURL' => 'mixed.jpeg',
            'is_added' => 0,
        ],
        [
            'id' => 4,
            'name' => 'BBQ Pizza',
            'price' => 1.50,
            'imageURL' => 'bbq.jpeg',
            'is_added' => 0,
        ],
        [
            'id' => 5,
            'name' => 'Mushroom Pizza',
            'price' => 3.40,
            'imageURL' => 'mushroom.jpeg',
            'is_added' => 0,
        ],
        [
            'id' => 6,
            'name' => 'Veggie Pizza',
            'price' => 3.50,
            'imageURL' => 'veggie.jpg',
            'is_added' => 0,
        ],
        [
            'id' => 7,
            'name' => 'Buffalo Pizza',
            'price' => 4.00,
            'imageURL' => 'buffalo.jpeg',
            'is_added' => 0,
        ],
        [
            'id' => 8,
            'name' => 'Pepperoni Pizza',
            'price' => 2.00,
            'imageURL' => 'pepperoni.jpeg',
            'is_added' => 0,
        ],
        [
            'id' => 9,
            'name' => 'Cheese Pizza',
            'price' => 3.00,
            'imageURL' => 'cheese.jpeg',
            'is_added' => 0,
        ],
        [
            'id' => 10,
            'name' => 'Mutton Pizza',
            'price' => 3.50,
            'imageURL' => 'mutton.jpeg',
            'is_added' => 0,
        ]];

        foreach ($pizzas as $pizza) {
           Pizza::create($pizza);
        }
    }
}