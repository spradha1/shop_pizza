import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/cart.css';

class Cart extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        
    }


    render() {
        const addedPizzas = this.props.cartPizzas.filter(p => p.is_added);
        let tot = 0;
        addedPizzas.forEach(element => {
            tot += parseFloat(element.price);
        });

        return (
            <div className="wrapper">
                <div className="flexcart">
                    <p className='cartHeader'>YOUR CART ({addedPizzas.length}) </p>
                    {addedPizzas.map((item, idx) => {
                        return (
                            <div className='cartItem' key={idx}>
                                <span className='info'>{item.name}</span>
                                <div className='freq'>
                                    ${item.price}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <p className='cost'>YOUR TOTAL: ${tot.toFixed(2)}</p>
                    <Link to='/ordered'><div className="orderbutton">PLACE ORDER</div></Link>
                    <Link to='/'><div className="orderbutton">BACK</div></Link>
                </div>
            </div>
        )
    }
}

export default Cart;