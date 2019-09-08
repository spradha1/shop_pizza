import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import '../../styles/home.css';

class Home extends Component {

    state = {
		
    }

    render() {
        return (
            <div className='wrapper'>
                <div id="container">
                    {this.props.pizzas.map((item, idx) => (
                        <Item 
                            item={item} 
                            key={idx} 
                            onAddToCart={this.props.onAddToCart}
                            onRemoveFromCart={this.props.onRemoveFromCart} 
                        />
                    ))}
                </div>
                <Link to='/cart'>
                    <div className="orderbutton">CHECKOUT</div>
                </Link>
            </div>
        )
    }
}

export default Home;