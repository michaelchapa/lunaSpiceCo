import React, { useContext } from 'react';
import { Product } from './Product';
import { CartContext } from './CartContext';

export default function ProductList() {
    const [cart, setCart, totalPrice] = useContext(CartContext);

    const database = [
        {name: "Spice Mix A", price: 13.99, id: 1}, 
        {name: "Spice Mix B", price: 13.99, id: 2}, 
        {name: "Spice Mix C", price: 10.99, id: 3}
    ]

    return (
        <div>
            {cart.map(product => {
            return <Product name = {product.name} price = {product.price} key = {product.id} id = {product.id} />
            })}
        </div>
    )
}