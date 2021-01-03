import React from 'react';
import { withRouter } from 'react-router-dom';

function Cart( { history }) {
    function goto(step) {
        if(step === 0)
            history.push('/checkout');
    }

    return (
        <div>
            <h1>Cart</h1>
            <span>Items in Cart: 0</span><br />
            <span>Total Price: 0</span><br />

            <button onClick = {() => goto(0)}>Checkout</button>
        </div>
    )
}

export default withRouter(Cart);