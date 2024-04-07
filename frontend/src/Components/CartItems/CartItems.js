import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import './CartItems.css'
const CartItems=()=>{
    const{gotTotalCartAmount, all_product,CartItems,removeFromCart}=useContext(ShopContext);
    const imageStyle = {
        height: '70px', 
        width: '70px', 
    };
    return(
        <div className="cartitems">
<div className="cartitems-format-main">
    <p>product</p>
    <p>title</p>
    <p>price</p>
    <p>quantity</p>
    <p>total</p>
    
</div>
<hr/>
{all_product.map((e)=>{
if(CartItems[e.id]>0){
    return <div>
    <div className="cartitems-format cartitems-format-main">
        <img src={e.image} style={imageStyle} alt=""/>
        <p>{e.name}</p>
        <p>{e.new_price}</p>
        <button className="cartitems-quantity" >{CartItems[e.id]}</button>
        <p>{e.new_price*CartItems[e.id]}</p>
        
    </div>
</div>
}
return null;
})}
<div className="cartitems-down">
<div className="cartitems-total">
    <h1>Cart total</h1>
    <div>
    <div className="cartitems-total-item">
        
        <p>subtotal</p>
        <p>{gotTotalCartAmount()}</p>
    </div>
    <hr/>
    <div className="cartitems-total-item">
        <p>shopping fee</p>
        <p>free</p>

    </div>
    <hr/>
    <div className="cartitems-total-item">
    <h3>total</h3>
    <h3>{gotTotalCartAmount()}</h3>

    </div>
</div>
<button>proceed to checkout</button>
    
</div>

        </div>
        </div>
    )
}
export default CartItems;