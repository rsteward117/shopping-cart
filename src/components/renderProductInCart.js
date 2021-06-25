import React from 'react'

const RenderProductInCart = (props) => {
    return(
        <div>
            <img src={props.item.src} alt={props.item.name}/>
            <h2> {props.item.name} </h2>
            <h2> {props.item.cost} </h2>
            <button onClick={()=> props.removeProduct(props.index)}>Remove item from cart</button>
        </div>
    )
}
export default RenderProductInCart;