import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const Product = (props) => {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const product = {name: props.name, price: props.price, id: props.id}
        setCart(curr => [...curr, product]);
    }

    return(
        <div>
            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
            <br />
            <button onClick = {addToCart}>Add to Cart</button>
        </div>
    )
}