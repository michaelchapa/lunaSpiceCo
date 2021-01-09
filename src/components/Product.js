import React from 'react'

export default function Product(props) {

    return(
        <>
        <span className = "product-name">{props.name}</span>
        <span className = "product-price">{props.price}</span>
        <img className = "product-image" src = {props.image} />
        </>
    )
}