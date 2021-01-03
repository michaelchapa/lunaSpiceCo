import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const Product = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const productID = props.id - 1

    const subtractOne = () => {
        console.log("subtracted 1");
        setCart((cart) => {
            // TODO
        })
    }

    const addOne = () => {
        // const product = {name: props.name, price: props.price, id: props.id}
        // setCart(curr => [...curr, product]);
        console.log("added 1")
    }

    return(
        <div>
            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
            <button onClick = {subtractOne}>-1</button>
            <p>{cart[productID].quantity}</p>
            <p>ID: {props.id}</p>
            <button onClick = {addOne}>+1</button>
            <hr />
        </div>
    )
}