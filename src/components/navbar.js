import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../css/navbar.css'
const Navbar = () => {
    return(
        <div className="nav-bar">
            <div className="nav-bar-companyName">
                <h1> <Link to="/"> SoundExpress </Link></h1>
            </div>
            <div className="nav-bar-links">
                <ul> 
                    <li><Link to="/shopping">Shopping</Link></li> 
                </ul>
            </div>
        </div>
    )
}

export default Navbar;