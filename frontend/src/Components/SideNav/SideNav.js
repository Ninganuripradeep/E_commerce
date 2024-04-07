import React from "react";
import { useNavigate } from "react-router-dom";
import './SideNav.css';

const SideNav = ({ closeSideNav }) => {
    const navigate = useNavigate();

    const handleUserDetailsClick = () => {
        closeSideNav(); 
        navigate("/userdetails");
    };

    return (
        <div className="sidenav">
            <button className="close-btn" onClick={closeSideNav}>
                Close
            </button>
            <ul>
                <li>New Arrival</li>
                <li>Popular</li>
                <li onClick={handleUserDetailsClick}>User Details</li>
            </ul>
        </div>
    );
}

export default SideNav;
