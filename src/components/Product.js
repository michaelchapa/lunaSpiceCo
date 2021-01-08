import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useSpring, animated } from 'react-spring'; 

export const Product = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const styleProps = useSpring({opacity: 1, from: {opacity: 0}})


    const subQuantity = () => {
        // Validate against negative Quantity
        if(cart[props.id - 1].quantity <= 0)
            return

        setCart(cart.map((product) => {
            if(product.id === props.id){
                return {'name': product.name, 'price': product.price, 
                        'id': product.id, 'quantity': product.quantity - 1};
            }
            return product;
        }));
    }

    const addQuantity = () => {
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
        <animated.div style = {styleProps}>
            <h2>{props.name}</h2>
            <h3>{props.price}</h3>
            <button className = "quantity-button" onClick = {subQuantity}>-</button>
            <span>{cart[props.id - 1].quantity}</span>
            <button className = "quantity-button" onClick = {addQuantity}>+</button>
            <button onClick = {addToCart}>Add to Cart</button>
            <hr />
        </animated.div>
    )
}