import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Topbar from './TopBar';
import Home from './Home';
import Cart from './Cart';
import Ordered from './Ordered';

export default class PizzaApp extends Component {

    constructor(props) {
        super(props);
        this.onAddToCart = this.onAddToCart.bind(this);
        this.onRemoveFromCart = this.onRemoveFromCart.bind(this);
    }

    state = {
        pizzas: []
	}

	// fetch data before mounting app
	componentDidMount() {
		this.fetcher();
	}

	// grab posts from laravel backend
	fetcher = () => {
		fetch('/api/pizzas',  {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
		.then(res => { return res.json(); })
        .then(data => this.setState({ pizzas: data }));
    }
    
    // add to cart
    onAddToCart = (item) => {
        fetch('/api/add/' + item.id, {
            method: 'PUT',
            body: JSON.stringify(item),
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        this.fetcher();
    }

    // remove from cart
    onRemoveFromCart = (item) => {
        fetch('/api/remove/' + item.id, {
            method: 'PUT',
            body: JSON.stringify(item),
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        this.fetcher();
    }


	render() {
		return (
			<div>
                <Topbar />
                <Route exact path='/' render={() => 
                    <Home 
                        pizzas={this.state.pizzas} 
                        onAddToCart={this.onAddToCart}
                        onRemoveFromCart={this.onRemoveFromCart}
                    />}
                />
                <Route exact path='/cart' render={() =>
                    <Cart cartPizzas={this.state.pizzas}/>
                } />
                <Route exact path='/ordered' render={() =>
                    <Ordered 
                        pizzas={this.state.pizzas}
                        onRemoveFromCart={this.onRemoveFromCart} />
                } />
			</div>
		)
	}
}

if (document.getElementById('main')) {
    ReactDOM.render(<BrowserRouter>
                        <PizzaApp />
                    </BrowserRouter>, document.getElementById('main'));
}