import React from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = React.useState([]);

    // const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2);
    // const itemsInCart = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    /*
    const cartContents = 
    <table style = {{margin: "auto"}}>
        <thead>
            <tr>
                <th>Spice</th><th>Price</th><th>Qty</th>
            </tr>
        </thead>
        <tbody>
        {cart.map(item => {
            return (
                <tr key = {item.id}>
                    <th>{item.name}</th>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                </tr>
            )
        })}
        </tbody>
    </table>;
    */

    return (
        <CartContext.Provider value = {[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}