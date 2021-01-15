import React, { useContext } from 'react'
import { InventoryContext } from '../InventoryContext'
import styles from './Homepage.module.css'

export default function Homepage() {
    const [inventory, setInventory] = useContext(InventoryContext);

    function handleOpenCart(e) {
        e.preventDefault();
        console.log("Open mini-cart with product ID: " + e.target.value);
    }

    function closeNav(e) {
        e.preventDefault();
        console.log("Close Nav");
    }

    const featureProduct2 = 
        <h2>{inventory[1].name}</h2>;

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
            <a id = {styles.addToCartButton} onClick = {handleOpenCart} 
                    value = {0}>Add to Cart</a>
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
                    value = {1}>Add to Cart</a>
        </div>
        </>
    )
}
