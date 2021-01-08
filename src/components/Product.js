import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useSpring, animated } from 'react-spring'; 

export const Product = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const springStyle = useSpring({
        opacity: 1, from: {opacity: 0}
    });

    const subQuantity = () => {
        if(cart[props.id - 1].quantity <= 0)
            return

        setCart(cart.map((product) => {
            if(product.id === props.id){
                return {'id': product.id, 'name': product.name, 
                        'price': product.price, 'quantity': product.quantity - 1, 
                        'image': product.image};
            }
            return product;
        }));
    }

    const addQuantity = () => {
        setCart(cart.map((product) => {
            if(product.id === props.id){
                return {'id': product.id, 'name': product.name, 
                        'price': product.price, 'quantity': product.quantity + 1, 
                        'image': product.image};
            }
            return product;
        }));
    }

    const addToCart = () => {
        console.log('TODO: Product.addToCart')
    }

    return(
        <animated.div style = {springStyle}>
            <h2>{props.name}</h2>
            <h3>{props.price}</h3>
            <img style = {{width: "40%", height: "auto", margin: "auto"}} src = {cart[props.id - 1].image} />
            <button className = "quantity-button" onClick = {subQuantity}>-</button>
            <span>{cart[props.id - 1].quantity}</span>
            <button className = "quantity-button" onClick = {addQuantity}>+</button>
            <button onClick = {addToCart}>Add to Cart</button>
            <hr />
        </animated.div>
    )
}