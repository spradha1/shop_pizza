import React, {Component} from 'react';
import '../../styles/home.css';

class Item extends Component {

    state = {
        
    }

    // add or remove from cart
    toggleCart = (item) => {
        if (item.is_added)
            this.props.onRemoveFromCart(item);        
        else
            this.props.onAddToCart(item);
    }

    render() {
        const url = "/images/" + this.props.item.imageURL;
        return (
            <div className='pizzaItem'>
                <div className='crop'>
                    <img src={url} />
                </div>
                <p className="info">{this.props.item.name}, ${this.props.item.price} </p>
                <div className='button' onClick={() => this.toggleCart(this.props.item)}>
                    {this.props.item.is_added ? (
                        <b>REMOVE</b>
                    ):(
                        <b>ADD</b>
                    )}
                </div>
            </div>
        )
    }
}

export default Item;