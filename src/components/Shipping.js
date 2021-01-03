import React from 'react'
import { withRouter } from 'react-router-dom'

function Shipping({ history }) {
    function goto(step) { 
        if(step === 0)
            history.push('/payment');
    }

    return (
        <div>
            <h1>Shipping</h1>
            <p>Collect Shipping information</p>
            <p>Calculate Shipping</p>
            <button onClick = {() => goto(0)}>To Payment</button>
            <form>
            </form>
        </div>
    )
}

export default withRouter(Shipping);