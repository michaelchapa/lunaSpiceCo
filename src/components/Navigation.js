import React from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
// import {useSpring, animated} from 'react-spring';

export default function Navigation() {
    // calcualte cart total and add it to the cart
    return (
        <div>
            <h1>Luna Spice Co</h1>
            <Link to = "/">Home</Link>
            <Link to = "/cart">Cart</Link>
        </div>
    )
}

const HeaderStyle = {
    border: '#7FFF00',
    color: 'white',
    padding: '1.5rem'
}
