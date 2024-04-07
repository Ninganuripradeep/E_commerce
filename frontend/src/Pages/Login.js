import React from "react";
import './CSS/LoginSignup.css';
import { Link } from "react-router-dom";
const Login=()=>{
    return(
        <div className="loginsignup">
        <div className="loginsignup-container">
            <h1>Sign In</h1>
            <div className="loginsignup-fields">
              
                <input type="email" placeholder="email address"/>
                <input type="password" placeholder="password"/>
            </div>
           <button type="submit">login</button>
            <p className="loginsignup-login">Don't have an account?</p>
            <Link to="/register"><button>Register</button></Link>
           
        </div>

        </div>
    )
}
export default Login;