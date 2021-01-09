import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

export default function Navigation() {
    const [cart, setCart] = useContext(CartContext);

    return (
        <>
            <h1>Luna Spice Co</h1>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/cart">Cart</Link>
            <span>TODO: Items in Cart</span>
        </>
    )
}