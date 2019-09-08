<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Pizza;
use Faker\Generator as Faker;

$factory->define(Pizza::class, function (Faker $faker) {
    return [
        'name' => $faker->lexify('????? Pizza'),
        'price' => $faker->randomFloat(2, 0.0, 10.0),
        'imageURL' => $faker->lexify('????.jpg'),
    ];
});
