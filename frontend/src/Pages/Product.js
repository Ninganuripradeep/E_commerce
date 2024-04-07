import React, { useContext } from "react";
import {  useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

import ProductDisplay from "../Components/ProductDisplay/ProductDisplay"
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
const Product=()=>{
    const{all_product}=useContext(ShopContext);
    const{productId}=useParams();
    console.log("productId:", productId);
    console.log("all_product:", all_product);
  
    const product=all_product.find((e)=>e.id===Number(productId));
    return(
        <div>

<ProductDisplay product={product}/>
{/* <DescriptionBox/> */}

        </div>
    )
}
export default Product;