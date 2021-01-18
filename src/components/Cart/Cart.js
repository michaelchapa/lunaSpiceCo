import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { CartContext } from '../CartContext'
import { IoMdTrash } from 'react-icons/io'
import { ImMinus, ImPlus } from 'react-icons/im'

function Cart({ history }) {
    const [cart, setCart] = useContext(CartContext);

    function decreaseQuantity(e){
        console.log("Decrease:");
        console.log(e.target);
    }

    function increaseQuantity(e){
        console.log("Increase:");
        console.log(e.target.value);
    }

    function deleteItem(e){
        console.log("Delete:");
        console.log(e.target);
    }

    const cartContents = cart.map((item, index) => {
        return(
            <div key = {item.id}>
                <span className = "item-name">{item.name}</span>
                <span className = "item-price">{item.price}</span>
                <IoMdTrash className = "delete-button" onClick = {() => console.log("DELETE ITEM :)")} />
                <ImMinus className = "subtract-button" onClick = {decreaseQuantity} />
                <span className = "item-quantity">{item.quantity}</span>
                <ImPlus className = "add-button" value = {12} onClick = {increaseQuantity} />
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