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
            else{
                return product;
            }
        }));
    }

    const addOne = () => {
        setCart(cart.map((product) => {
            if(product.id === props.id){
                return {'name': product.name, 'price': product.price, 
                        'id': product.id, 'quantity': product.quantity + 1};
            }
            else{
                return product;
            }
        }));
    }

    return(
        <div>
            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
            <button onClick = {subtractOne}>-</button>
            <p>{cart[productID].quantity}</p>
            <button onClick = {addOne}>+</button>
            <hr />
        </div>
    )
}