import React, { useEffect, useState } from "react";
import './NewCollections.css'
import Item from "../Item/Item";
// import new_collection from "../Assets/new_collection";
const NewCollection=()=>{
    const[new_collection,setNew_collection]=useState([])
    useEffect(()=>{
fetch('http://localhost:8000/newcollections')
.then((response)=>response.json())
.then((data)=>setNew_collection(data));
    },[])
    return(
        <div className="new-collections">
        <h1>New Collection</h1>
        <hr/>
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>

        </div>
    )
}
export default NewCollection;