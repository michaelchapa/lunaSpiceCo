import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import { InventoryContext } from '../InventoryContext'
import styles from './Homepage.module.css'

export default function Homepage() {
    const [inventory] = useContext(InventoryContext);
    const [cart, setCart, sidebar, setSidebar, showSidebar] = useContext(CartContext);

    function AddItemToCart(e) {
        e.preventDefault();

        showSidebar();

        const productID = e.target.value;
        if(cart.has(productID)){
            // console.log(cart.get(productID))
            let item = cart.get(productID);
            item.quantity += 1;
            setCart(cart => new Map(cart).set(productID, item));
            console.log(cart);
        } else {
            let productToAdd = inventory[productID];
            productToAdd.quantity = 1;
            setCart(cart => new Map([...cart, [productID, productToAdd]]));
            console.log(cart);
        }
    }  

    return (
        <>
        <h1>Luna Spice Co.</h1>
        <div>
            <img className = {styles.productImage} src = {inventory[0].image} 
                 alt = {inventory[0].name} />
            <span id = {styles.product1Header}>{inventory[0].name}</span>
            <span id = {styles.product1} className = {styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi condimentum posuere nulla, vel viverra enim accumsan a. 
                Etiam auctor accumsan malesuada. Integer sagittis porttitor arcu sed finibus. 
                Sed eget purus nec lorem elementum luctus id non risus. 
                Sed tellus nisi, fringilla a fermentum et, rutrum et diam. 
            </span>
            <button id = {styles.addToCartButton} value = {inventory[0].id}
                onClick = {AddItemToCart} href = "#">Add to Cart</button>
        </div>
        <div>
            <img className = {styles.productImage} src = {inventory[1].image}
                alt = {inventory[1].name} />
            <span id = {styles.product2Header}>{inventory[1].name}</span>
            <span id = {styles.product2} className = {styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi condimentum posuere nulla, vel viverra enim accumsan a. 
                Etiam auctor accumsan malesuada. Integer sagittis porttitor arcu sed finibus. 
                Sed eget purus nec lorem elementum luctus id non risus. 
                Sed tellus nisi, fringilla a fermentum et, rutrum et diam. 
            </span>
            <button id = {styles.addToCartButton} value = {inventory[1].id}
                onClick = {AddItemToCart} href = "#">Add to Cart</button>
        </div>
        </>
    );
}
