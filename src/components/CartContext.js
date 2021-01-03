import React, {useState} from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = React.useState([
        {name: "Spice Mix A", price: 13.99, id: 1, quantity: 0}, 
        {name: "Spice Mix B", price: 13.99, id: 2, quantity: 0}, 
        {name: "Spice Mix C", price: 10.99, id: 3, quantity: 0}
    ]);

    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <CartContext.Provider value = {[cart, setCart, totalPrice]}>
            {props.children}
        </CartContext.Provider>
    )
}