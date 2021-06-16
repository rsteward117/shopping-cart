import React from "react"
import renderproducts from './renderProducts'
import products from './products'
const ShoppingPage = (props)=>{
    return(
        <div>
           {products.map((product) =>{
                return(
                    <renderproducts product={product} /> 
                )
            })}   
        </div>
    )
}

export default ShoppingPage ;