import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import Product from './Product'

export default function Inventory() {
    const database = [
        {id: 0, name: "Spice Mix A", price: 13.99}, 
        {id: 1, name: "Spice Mix B", price: 10.99}
    ]

    return (
        <>
            {database.map(item => {
            return <Product 
                        key = {item.id} 
                        name = {item.name} 
                        price = {item.price}
                        image = {item.image}
                    />
            })}
        </>
    )
}