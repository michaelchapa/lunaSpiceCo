import React from 'react';
import { Product } from './Product';

export default function ProductList() {
    const database = [
        {name: "Spice Mix A", price: 13.99, id: 1}, 
        {name: "Spice Mix B", price: 13.99, id: 2}, 
        {name: "Spice Mix C", price: 10.99, id: 3}
    ]

    return (
        <div>
            {database.map(product => {
            return <Product name = {product.name} price = {product.price} key = {product.id} />
            })}
        </div>
    )
}