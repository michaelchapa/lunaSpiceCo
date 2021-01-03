import React, {useContext} from 'react';
import { withRouter } from 'react-router-dom';
import { CartContext } from './CartContext';

function Cart( { history }) {
    const [cart, setCart, totalPrice] = useContext(CartContext);
    // const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <div>
            <h1>Cart</h1>
            <span>Items in Cart: {cart.length}</span><br />
            <span>Total Price: {totalPrice}</span><br />

            <button onClick = {() => history.push('/checkout')}>Checkout</button>
        </div>
    )
}

export default withRouter(Cart);