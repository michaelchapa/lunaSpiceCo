import React from 'react'
import { withRouter } from 'react-router-dom'

function Confirmation( { history }) {
    function goto(step) {
        if(step === 0)
            history.push('/shipping')
        else if(step === 1)
            history.push('/payment')
        else if(step === 2)
            history.push('/')
    }

    return (
        <div>
            <h1>Confirmation</h1>
            <p>Print Shipping and Payment info</p>
            <button onClick = {() => goto(0)}>Update Shipping</button>
            <button onClick = {() => goto(1)}>Update Payment</button>
            <button onClick = {() => goto(2)}>Complete Order</button>
        </div>
    )
}

export default withRouter(Confirmation);
