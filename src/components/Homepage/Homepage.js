import React, { useContext } from 'react'
import { InventoryContext } from '../InventoryContext'
import styles from './Homepage.module.css'

export default function Homepage() {
    const [inventory] = useContext(InventoryContext);

    function handleOpenCart(e) {
        e.preventDefault();
        console.log("Value: " + e.target.value);
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
            <a id = {styles.addToCartButton} value = {inventory[0].id} 
               onClick = {handleOpenCart} href = "#" >Add to Cart</a>
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
            <a id = {styles.addToCartButton} onClick = {handleOpenCart} 
                    value = {inventory[1].id} href = "#">Add to Cart</a>
        </div>
        </>
    )
}
