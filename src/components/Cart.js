import React, {useContext} from 'react';
import { withRouter } from 'react-router-dom';
import { CartContext } from './CartContext';

function Cart({ history }) {
    const [cart, setCart] = useContext(CartContext);

    return (
        <div>
            <h1>Cart</h1>
            <span>1. Cart Contents</span>
            <span>Total: $ totalPrice</span>
            <span>Quantity: ?</span>
            <button onClick = {() => history.push('/checkout')}>Checkout</button>
        </div>
    );
}

export default withRouter(Cart);