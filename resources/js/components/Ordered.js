import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/cart.css';
import '../../styles/home.css';

class Ordered extends Component {

    state = {

    }

    componentDidMount () {
        let addedPizzas = this.props.pizzas.filter(e => e.is_added);
        addedPizzas.forEach(element => {
            this.props.onRemoveFromCart(element);
        });
    }

    render () {
        return (
            <div className='done'>
                You order is received!
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className='backbutton'>
                        BACK TO MENU
                    </div>
                </Link>
            </div>
        )
    }
}

export default Ordered;