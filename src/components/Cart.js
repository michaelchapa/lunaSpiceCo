import React, {useContext} from 'react';
import { withRouter } from 'react-router-dom';
import { CartContext } from './CartContext';

function Cart({ history }) {
    // eslint-disable-next-line
    const [cart, setCart, totalPrice, itemsInCart, cartContents] = useContext(CartContext);

    return (
        <div>
            <h1>Cart</h1>
            {cartContents}
            <span>Total: ${totalPrice}</span><br />
            <button onClick = {() => history.push('/checkout')}>Checkout</button>
        </div>
    )
}

export default withRouter(Cart);