import React from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = React.useState([
        {name: "Spice Mix A", price: 13.99, id: 1, quantity: 0}, 
        {name: "Spice Mix C", price: 10.99, id: 2, quantity: 0}
    ]);

    const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2);
    const itemsInCart = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    return (
        <CartContext.Provider value = {[cart, setCart, totalPrice, itemsInCart]}>
            {props.children}
        </CartContext.Provider>
    )
}