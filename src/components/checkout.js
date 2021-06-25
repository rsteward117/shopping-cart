import React, {useEffect} from 'react'
//useHistory allows you to go back the previous component or target component.
import {useHistory} from 'react-router-dom'
import products from './products'
import RenderProductInCart from './renderProductInCart'

const Checkout = (props) => {
    let history = useHistory()
    useEffect(() => {
        if(props.cartProducts.length === 0){
            setTimeout(() => {history.push('/shoppingPage');},1000)
        }
    })
    return(
        <div> 
            {props.cartProducts.length > 0
            ?
                <div>
                    <div className="cart-proucts">
                        {props.cartProducts.map((item, index)=>{
                            return(
                                <RenderProductInCart item={products[item.productID]} index={index} removeProduct={props.removeProduct}/>
                            )
                        })}
                        <div className="total">
                            <p>Total: </p>
                            <p>${props.cartProducts.reduce((total,item) =>{
                                return total+parseInt(products[item.productID].cost
                                 );
                            },0)}</p>
                        </div>
                    </div>
                    <div className="clear-Cart">
                        <button onClick={props.clearCart}>Clear Cart
                        </button>
                        <button>Checkout</button>
                    </div>
                </div>
            :    
                <div className="cart-empty">
                    <h1>Cart is empty</h1>
                    <h2> Redirecting to shop </h2>
                </div>
            }
        </div>
    )
}

export default Checkout