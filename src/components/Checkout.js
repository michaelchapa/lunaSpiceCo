import React from 'react'
import { withRouter } from 'react-router-dom'

function Checkout({ history }) {
    function goto(step) { 
        if(step === 0)
            history.push('/cart');
    }

    return (
        <div>
            <h1>Checkout</h1>
            <p>Calculate Total</p>
            <p>Collect Shipping information</p>
            <p>Calculate Shipping</p>
            <p>Collect Payment Information</p>
            <p>SUBMISSION >:O</p>
            <button onClick = {() => goto(0)}>Edit Cart</button>
            <input type = "submit" value = "Complete Order" />
        </div>
    )
}

export default withRouter(Checkout);