import React from 'react';

export const Product = (props) => {
    return(
        <div>
            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
            <br />
            <button>Add to Cart</button>
        </div>
    )
}