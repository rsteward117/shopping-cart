import React, {useState} from 'react';
import Navbar from './components/navbar'
import './css/App.css'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './components/home'
import Shoppingpage from './components/shoppingPage'
import Checkout from './components/checkout'
import {Link, NavLink} from 'react-router-dom'


function App(){
    //this is setting the states for the cart items array
    const [cartProducts, setCartProducts] = useState([]);
    //addproducts is a function that will add an object to the list array when the user clicks on one of the buttons that are assign to the product based on it's id in products.js.
    const addProducts = (productID, number=1) => {
        let list = Object.assign([],cartProducts);
        list.push({
            productID:productID,
            number:number
        });
        //list is being set as the new cartproducts
        setCartProducts(list)
    }
    
    //A function that clears the cart back to an empty array 
    const clearCart = () => {
        setCartProducts([])
    }
    
    //this fuction removes one of the selected items from the cart array
    const removeProduct = (index) =>{
        let list = Object.assign([], cartProducts)
        list.splice(index,1)
        setCartProducts(list)
    }

    return (
        <div className="App">
            <BrowserRouter>
                <div className="nav-bar">
                    <div className="nav-bar-companyName">
                        <h1> <Link to="/"> SoundExpress </Link></h1>
                    </div>
                    <div className="nav-bar-links">
                        <ul> 
                            <li><Link to="/shopping">Shopping</Link></li>
                            <li><Link to="/cart">cart({cartProducts.length})</Link></li>
                        </ul>
                    </div>
                </div>
                    <Route exact path='/' component={Home} />
                    <Route path='/shopping'
                        render={()=>(
                            <Shoppingpage addProducts={addProducts} />
                    )}/>
                    <Route path='/cart'
                        render={()=>(
                            <Checkout cartProducts={cartProducts} clearCart={clearCart} removeProduct={removeProduct} />
                    )}/>
            </BrowserRouter>
        </div>
  );
}
export default App;
