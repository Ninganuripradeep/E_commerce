import React from "react";
import './Item.css'
import { Link } from "react-router-dom";
const Item=(props)=>{
    const imageStyle = {
        height: '250px', 
        width: '250px', 
    };
    return(
        <div className="item">
        <Link to={`/product/${props.id}`}><img src={props.image} style={imageStyle} alt='' onClick={window.scrollTo(0,0)}/></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                Rs.{props.new_price}
            </div>
            <div className="item-price-old">
                Rs.{props.old_price}
            </div>
        </div>

        </div>
    )
}
export default Item;