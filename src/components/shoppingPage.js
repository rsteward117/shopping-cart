import React from "react"
import RenderProducts from './RenderProducts'
import products from './products'
const ShoppingPage = (props)=>{
    return(
        <div>
           {products.map((product) =>{
                return(
                    <RenderProducts  product={product} /> 
                )
            })}   
        </div>
    )
}

export default ShoppingPage ;