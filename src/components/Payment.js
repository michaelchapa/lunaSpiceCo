import React from 'react'
import { withRouter } from 'react-router-dom'

function Payment( { history }) {
    function goto(step) {
        if(step === 0)
            history.push('/shipping');
        else if(step === 1)
            history.push('/confirmation');
    }

    return (
        <div>
            <h1>Payment</h1>
            <p>Collect Payment information</p>
            <button onClick = {() => goto(0)}>Update Shipping</button>
            <button onClick = {() => goto(1)}>To Confirmation</button>
        </div>
    )
}

export default withRouter(Payment);