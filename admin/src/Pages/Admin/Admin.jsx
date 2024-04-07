import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Route,Routes } from "react-router-dom";
import AddProduct from "../../Components/AddProduct/AddProduct";
import ListProduct from "../../Components/ListProduct/ListProduct";
import AddBackgroundColor from "../../Components/AddBackgroundColor/AddBackgroundColor";

const Admin=()=>{
  return(
    <div className='admin'>
    <Sidebar/>
    <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
        <Route path="/addbackgroundcolor" element={<AddBackgroundColor/>}/>
    </Routes>

    </div>

  )
}
export default Admin