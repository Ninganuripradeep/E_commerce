import React, { useState } from "react";
import axios from 'axios';
import './AddProduct.css'


const AddProduct=()=>{

    // const { id, name, category, new_price, old_price ,image} = productDetails;
    // const response = await axios.post('http://localhost:8000/addproduct', {
    //     name,
    //     category,
    //     new_price,
    //     old_price,
    //     id,
    //     image
    //   });
    const[image,setImage]=useState(false)
    const [productDetails,setProductDetails]=useState({
        name:"",
        category:"women",
        new_price:"",
        old_price:"",
        id:"",
        image:"",
        animeType: "",
        model: "",
        sellType: "new arrival"
    })
const imageHandler=(e)=>{
    setImage(e.target.files[0]);
}
 
 const changeHandler=(e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
}
const Add_Product=async()=>{
    console.log(productDetails);
let responseData;
let product=productDetails;
let formData=new FormData();
formData.append('product',image);
await fetch('http://localhost:8000/upload',{
    method:"POST",
    headers:{
        Accept:'application/json',

    },
    body:formData,
}).then((resp)=>resp.json()).then((data)=>{responseData=data})
if(responseData.success){
    product.image=responseData.image_url;
    console.log(product);
    await fetch('http://localhost:8000/addproduct',{
        method:"POST",
        headers:{
            Accept:'application/json',
           'Content-Type':'application/json'
    
        },
        body:JSON.stringify(product),
    }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("product added"):alert("failed")
    })
}
}

  return(
    <div className="add-product">
    <div className="addproduct-itemfield">
    <p>id</p>
    <input type="text"  value={productDetails.id} onChange={changeHandler} name="id" placeholder="type here"/>
        <p>product title</p>
        <input type="text"  value={productDetails.name} onChange={changeHandler} name="name" placeholder="type here"/>
    </div>
    <div className="addproduct-price">
    <div className="addproduct-itemfield">
        <p>price</p>
        <input type="text"  value={productDetails.old_price} onChange={changeHandler} name="old_price" placeholder="type here"/>
        
    </div>
    <div className="addproduct-itemfield">
        <p> offer price</p>
        <input type="text"  value={productDetails.new_price} onChange={changeHandler}  name="new_price" placeholder="type here"/>
        
    </div>
   
    </div>
    <div className="addproduct-itemfield">
    <p>Anime Type</p>
    <input type="text" value={productDetails.animeType} onChange={changeHandler} name="animeType" placeholder="type here" />
</div>
<div className="addproduct-itemfield">
    <p>Model</p>
    <input type="text" value={productDetails.model} onChange={changeHandler} name="model" placeholder="type here" />
</div>
<p>Sell Type</p>
<select value={productDetails.sellType} onChange={changeHandler} name="sellType" className="add-product-selector">
    <option value="new arrival">New Arrival</option>
    <option value="popular">Popular</option>
</select>
    <p>product category</p>
    <select  value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
        <option value="women">women</option>
        <option value="men">men</option>
        <option value="kids">kids</option>
    </select>
    <label htmlFor="file-input">
        <p>add image</p>
        
    </label>
    <input onChange={imageHandler} type="file" name="image" id="file"/>
    <div><button onClick={ Add_Product} className="addproduct-btn">ADD</button>
</div>
    
        </div>

  )
}

export default AddProduct