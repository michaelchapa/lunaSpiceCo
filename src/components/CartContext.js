import React from 'react';
import photo1 from '../hotCheetos.jpeg';
import photo2 from '../spiceMix2.png';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = React.useState([
        {id: 1, name: "Spice Mix A", price: 13.99, quantity: 0, image: photo1}, 
        {id: 2, name: "Spice Mix C", price: 10.99, id: 2, quantity: 0, image: photo2}
    ]);

    const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2);
    const itemsInCart = cart.reduce((acc, curr) => acc + curr.quantity, 0);

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

    return (
        <CartContext.Provider value = {[cart, setCart, totalPrice, itemsInCart, cartContents]}>
            {props.children}
        </CartContext.Provider>
    )
}