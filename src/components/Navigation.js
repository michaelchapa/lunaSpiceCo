import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { Spring } from 'react-spring/renderprops';
// import {useSpring, animated} from 'react-spring';

export default function Navigation() {
    const [cart, setCart, totalPrice, itemsInCart] = useContext(CartContext);

    return (
        <div>
            <h1>Luna Spice Co</h1>
            <Link to = "/">Home</Link>
            <Link to = "/cart">Cart</Link>
            <span>{itemsInCart}</span>
            <span>{totalPrice}</span>
        </div>
    )
}

const HeaderStyle = {
    border: '#7FFF00',
    color: 'white',
    padding: '1.5rem'
}
