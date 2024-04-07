import React from "react";
import logo from '../Assets/logo.avif'
import './Footer.css'
const Footer=()=>{
    return(
        <div className="footer">
        <div className="footer-logo">
        <img src={logo} alt="logo" style={{ width: '40px', height: '40px' }}/>
            <p>PSN</p>
        </div>
        <ul className="footer-links">
      <li>company</li>
      <li>Products</li>

      <li>Offices</li>
      <li>About</li>
      <li>Contact</li>

        </ul>
        <div className="footer-social-icon">
        <div className="footer-icons-container">
        {/* <img src={instagram_icon} alt=""/> */}
        </div>
        <div className="footer-icons-container">
        {/* <img src={pinterst_icon} alt=""/> */}
        </div>
        <div className="footer-icons-container">
        {/* <img src={watsapp_icon} alt=""/> */}
        </div>

        </div>
<div className="footer-copyright">
    <hr/>
    <p>Copyright @2003- All Right Reserved</p>
</div>
        </div>
    )
}
export default Footer;