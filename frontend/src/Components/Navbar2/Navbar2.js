import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar2.css';
import logo from '../Assets/logo.avif';
import cart_icon from '../Assets/cart_icon.png';
import SideNav from '../SideNav/SideNav';

const Navbar2 = () => {
    const [menu, setMenu] = useState("shop");
    const [showSideNav, setShowSideNav] = useState(false);

    const navigate = useNavigate();

    const toggleSideNav = () => {
        setShowSideNav(!showSideNav);
    };

    const closeSideNav = () => {
        setShowSideNav(false);
    };

    const openUserDetailsPage = () => {
        closeSideNav(); 
        navigate('/userdetails');
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                {/* <img src={logo} alt="logo" style={{ width: '40px', height: '40px' }} /> */}
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("mens") }}>
                    <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link> {menu === "mens" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("womens") }}>
                    <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link> {menu === "womens" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("kids") }}>
                    <Link style={{ textDecoration: 'none' }} to='/kids'>Kid</Link> {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>

            <button className="open-side-nav-button" onClick={toggleSideNav}>
                Open Side Nav
            </button>

            {showSideNav && (
                <SideNav closeSideNav={closeSideNav} />
            )}
        </div>
    );
}

export default Navbar2;