import React from 'react'
import { withRouter } from 'react-router-dom'
import ShippingForm from './ShippingForm'


function Checkout({ history }) {
    function goto(step) { 
        if(step === 0) {
            history.push('/cart');
        }
    }

    return (
        <div>
            <h1>Checkout</h1>
            <p>1. Display Cart Contents</p>
            <ShippingForm />
            <p>3. Calculate Shipping</p>
            <p>4. Collect Payment Information</p>
            <p>5. SUBMISSION :O</p>
            <button onClick = {() => goto(0)}>Edit Cart</button>
            <input type = "submit" value = "Complete Order" />
        </div>
    )
}

export default withRouter(Checkout);