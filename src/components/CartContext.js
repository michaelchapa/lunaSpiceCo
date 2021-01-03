import React, {useState} from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = React.useState([]);

    return (
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
}