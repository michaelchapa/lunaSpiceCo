import React from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = React.useState(new Map());
    const [sidebar, setSidebar] = React.useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    // const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2);
    // const itemsInCart = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    return (
        <CartContext.Provider value = {[cart, setCart, sidebar, setSidebar, showSidebar]}>
            {props.children}
        </CartContext.Provider>
    )
}