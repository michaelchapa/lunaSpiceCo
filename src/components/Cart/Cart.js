import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { CartContext } from '../CartContext'
import { IoMdTrash } from 'react-icons/io'
import { ImMinus, ImPlus } from 'react-icons/im'
import './Cart.css'
import { Link } from 'react-router-dom'

function Cart({ history }) {
    const [cart, setCart] = useContext(CartContext);

    function decreaseQuantity(productID){
        let updatedCart = [];

        for(const item of cart){
            if(item.id == productID){
                item.quantity = item.quantity - 1;
                if(item.quantity < 0)
                    item.quantity = 0;

                updatedCart.push(item);
            } else{
                updatedCart.push(item);
            }
        }
        setCart(updatedCart);
    }

    function increaseQuantity(productID){
        let updatedCart = [];

        for(const item of cart){
            if(item.id == productID){
                item.quantity = item.quantity + 1;
                updatedCart.push(item);
            } else {
                updatedCart.push(item);
            }
        }
        setCart(updatedCart);
    }

    function deleteItem(productID){
        let updatedCart = [];

        for(const item of cart){
            if(item.id == productID){
                continue;
            } else {
                updatedCart.push(item);
            }
        }
        setCart(updatedCart);
    }

    const cartContents = cart.map((item, index) => {
        return(
            <div key = {item.id}>
                <span className = "item-name">{item.name}</span>
                <span className = "item-price">{item.price}</span>
                <Link to = "#" className = "trash-icon" onClick = {() => deleteItem(item.id)}>
                    <IoMdTrash className = "delete-button" />
                </Link>
                <Link to = "#" className = "subtract-icon" onClick = {() => decreaseQuantity(item.id)}>
                    <ImMinus className = "subtract-button" />
                </Link>
                <span className = "item-quantity">{item.quantity}</span>
                <Link to = "#" className = "add-icon" onClick = {() => increaseQuantity(item.id)}>
                    <ImPlus className = "add-button" />
                </Link>
            </div>
        );
    });

    return (
        <div>
            <h1>Cart</h1>
            {cartContents}
            <span>Total: $ totalPrice</span>
            <button onClick = {() => history.push('/checkout')}>Checkout</button>
        </div>
    );
}

export default withRouter(Cart);