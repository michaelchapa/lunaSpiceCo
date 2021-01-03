import React, {useState} from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = React.useState([]);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <CartContext.Provider value = {[cart, setCart, totalPrice]}>
            {props.children}
        </CartContext.Provider>
    )
}