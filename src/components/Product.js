import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const Product = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const productID = props.id - 1

    const subtractOne = () => {
        // Validate against negative Quantity
        if(cart[productID].quantity <= 0)
            return

        setCart(cart.map((product) => {
            if(product.id === props.id){
                return {'name': product.name, 'price': product.price, 
                        'id': product.id, 'quantity': product.quantity - 1};
            }
            return product;
        }));
    }

    const addOne = () => {
        setCart(cart.map((product) => {
            if(product.id === props.id){
                return {'name': product.name, 'price': product.price, 
                        'id': product.id, 'quantity': product.quantity + 1};
            }
            return product;
        }));
    }

    const addToCart = () => {
        console.log('TODO: Product.addToCart')
    }

    return(
        <div>
            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
            <button className = "quantity-button" onClick = {subtractOne}>-</button>
            <span>{cart[productID].quantity}</span>
            <button className = "quantity-button" onClick = {addOne}>+</button>
            <button onClick = {addToCart}>Add to Cart</button>
            <hr />
        </div>
    )
}