import React from 'react'
import products from './products'

const RenderProducts = (props) => {
    return(
        <div>
            <img src='' alt={props.product.name}/>
            <h2> {props.product.name} </h2>
            <h2> {props.product.cost} </h2>
            <p> {props.product.description} </p>  
        </div>
    )
}
export default RenderProducts