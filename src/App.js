import React, {useState} from 'react';
import Navbar from './components/navbar'
import './css/App.css'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './components/home'
import Shoppingpage from './components/shoppingPage'

function App(){
    
    
    return (
    <BrowserRouter>
        <div className="App">
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/shoppingPage' component={Shoppingpage} />
        </div>
      </BrowserRouter>
  );
}
export default App;
