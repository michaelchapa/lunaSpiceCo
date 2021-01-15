import React from 'react';
import { withRouter } from 'react-router-dom';

function Cart({ history }) {

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