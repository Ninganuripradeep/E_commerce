import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.avif'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    const[menu,setMenu]=useState("shop");
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" style={{ width: '40px', height: '40px' }}/>
                <p>PSN</p>
            </div>
    
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
               <Link to='/cart'><img src={cart_icon} style={{ width: '40px', height: '40px' }} alt="cart icon"/></Link> 
                
            </div> 

        </div>
    )
}
export default Navbar;