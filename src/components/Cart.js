import React from 'react';
import { withRouter } from 'react-router-dom';

function Cart( { history }) {
    function goto(step) {
        if(step === 0)
            history.push('/shipping');
    }

    return (
        <div>
            <h1>Cart</h1>
            <button onClick = {() => goto(0)}>Checkout</button>
        </div>
    )
}

export default withRouter(Cart);