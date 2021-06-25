import products from './products'
import React from 'react'

const RenderProducts = (props) => {
    const index = props.product.productID
    return(
        <div>
            <img src={props.product.src} alt={props.product.name}/>
            <h2> {props.product.name} </h2>
            <h2> {props.product.cost} </h2>
            <p> {props.product.description} </p>
            <button onClick={()=> props.addProducts(index)}>Add item to cart</button>
        </div>
    )
    console.log(props.product.name)
}
export default RenderProducts;