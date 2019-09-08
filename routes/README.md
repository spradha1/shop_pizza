# SHOP PIZZA

### Description

The project is a simple shopping app that allows user to select items out of a pizza menu to place an order. The order process only involves a click of button with no functionality as of now. The project uses Laravel as the backend framework and React.js as the frontend framework. Instructions here assume you have Postgres database has set up on your machine for the pizza data that will be migrated from the Laravel Seeder.

### Installation & Running

Download or clone the project to your system. Replace my dummy database credentials with yours in the .env file as follows:

    DB_CONNECTION=pgsql
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_DATABASE= <YOUR DATABASE NAME>
    DB_USERNAME= <YOUR DATABASE USERNAME>
    DB_PASSWORD= <YOUR DATABASE PASSWORD>

In the root directory, the following command should invoke the seeder to populate your database:

    php artisan migrate --seed

You should be able to see the data in your postgres.  
You can now go ahead and install the required node dependencies as follows:

    npm install

Then you can use the following command to compile:

    npm run dev

Finally, to serve the data from laravel:

    php artisan serve

The preferred browser is Chrome and the app should be visible at   
    
    http://127.0.0.1:8000

### Functionailty Visualization

One can see the pizzas lined up in columns, number depending on response to the screen size. A checkout button at the bottom takes the user to the cart page confirming the total purchase. Placing the order through a button will give a message at the end and one can go back to the menu from there as well.

### Pitfalls

The React components have not been set up with HashRouter for now and hitting the refresh button once navigated away from the menu page will result in an error. I am welcome to feedback, suggestions and questions!