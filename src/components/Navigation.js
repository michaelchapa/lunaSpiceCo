import React from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
// import {useSpring, animated} from 'react-spring';

export default function Navigation() {
    return (
        <div>
            <h1>Luna Spice Co</h1>
            <Link to = "/homepage">Home</Link>
            <Link to = "/cart">Cart</Link>
        </div>  
    )
}

const HeaderStyle = {
    background: 'steelblue', 
    color: 'white',
    padding: '1.5rem'
}
