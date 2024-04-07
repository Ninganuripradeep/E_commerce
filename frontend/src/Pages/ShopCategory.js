import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import './CSS/ShopCategory.css'

const ShopCategory=(props)=>{
     const {all_product}=useContext(ShopContext)
    return(
    
        <div className="shop-category">
        <img className="shocategory-banner" src={props.banner} style={{ width: '100%', height:'400px' }} alt=""/>
<div className="shopcategory-indexSort">
    <p>
        <span>showing 1-12</span> out of 36 products
    </p>
    <div className="shopcategory-sort">
        sort by <img src="" alt=""/>
    </div>
</div>
<div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
        </div>
    )
}
export default ShopCategory;