import React from "react";
import { Link } from "react-router-dom";
import './SideBar.css'
const Sidebar=()=>{
  return(
    <div className="sidebar">
    <Link to='/addproduct' >
        <div>
            <p>Add product</p>
        </div>
    </Link>
    <Link to ='/listproduct' >
        <div>
            <p>list product</p>
        </div>
    </Link>
    <Link to ='/addbackgroundcolor' >
        <div>
            <p>BackgroundColor</p>
        </div>
    </Link>
    
    </div>

  )
}
export default Sidebar