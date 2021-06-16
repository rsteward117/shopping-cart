import products from './products'
import React from 'react'

const RenderProducts = (props) => {
    return(
        <div>
            <img src={props.products.src} alt={props.products.name}/>
            <h2> {props.products.name} </h2>
            <h2> {props.products.cost} </h2>
            <p> {props.products.description} </p>  
        </div>
    )
}
export default RenderProducts;