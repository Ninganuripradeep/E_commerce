import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const AddBackgroundColor=()=>{
    const[color,setColor]=useState("");
    useEffect(()=>{
        const fetchBackgroundColor=async()=>{
            try{
                const response=await fetch("http://localhost:8000/getbackgroundcolor");
                const data=await response.json();
                setColor(data.color||"");
            }catch(error){
                console.error("Error:",error);
            }
        };
        fetchBackgroundColor();
    },[])
    
    const handleColorChange=(e)=>{
        setColor(e.target.value);
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
            const response=await fetch('http://localhost:8000/addbackgroundcolor',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({color}),
            })
                if(response.ok){
                    console.log('bg color added');
                }else{
                    console.error('error adding bg color');
                }
            }catch(error){
                console.error('Error:',error);
            }
  
    
};
return(
    <form onSubmit={handleSubmit}>
        <label>
            Color:
            <input type="text" value={color} onChange={handleColorChange}/>

        </label>
        <button type="submit">Submit</button>
    </form>
)
    };
    export default AddBackgroundColor;