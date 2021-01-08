import { CartContext } from './CartContext';
import React, { useContext } from 'react';
import { Product } from './Product';

export default function ProductList() {
    // eslint-disable-next-line
    const [cart, setCart, totalPrice] = useContext(CartContext);

    return (
        <div>
            {cart.map(product => {
            return <Product name = {product.name} price = {product.price} key = {product.id} id = {product.id} />
            })}
        </div>
    )
}