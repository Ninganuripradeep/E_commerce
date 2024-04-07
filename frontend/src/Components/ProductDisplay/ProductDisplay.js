import React, { useContext,useState } from "react";
import star_icon from "../Assets/star_icon.avif"
import { ShopContext } from "../../Context/ShopContext";
import './ProductDisplay.css'
import ReactImageMagnify from 'react-image-magnify';
const ProductDisplay=(props)=>{
    const{product}=props;
    const {addToCart}=useContext(ShopContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
      setIsHovered(!isHovered);
    };
  
    const enlargedImageDimensions = isHovered
      ? { width: 150, height: 225 } // Adjust the zoomed-in size when hovered
      : { width: 500, height: 600 }; // Default size when not hovered
  

    return(
        
        <div className="productdisplay">
 
<div className="productdisplay-left">
{/* <div className="productdisplay-img-list">
    <img src={product.image}  style={{ width: '50px', height:'50px' }} alt=""/>
    <img src={product.image}  style={{ width: '50px', height:'50px' }} alt=""/>
    <img src={product.image}  style={{ width: '50px', height:'50px' }} alt=""/>
    <img src={product.image}   style={{ width: '50px', height:'50px' }}alt=""/>
</div> */}
<div className="productdisplay-img" onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: 'Wristwatch by Ted Baker London',
              isFluidWidth: true,
              src: product.image,
              width: 350,
              height: 350,
            },
            largeImage: {
              src: product.image,
              width: 1200,
              height: 1800,
            },
            enlargedImagePosition: 'over',
            enlargedImageContainerDimensions: enlargedImageDimensions,
          }}
        />
      </div>



</div>
<div className="productdisplay-right">
    <h1>{product.name}</h1>
    {/* <div className="productdisplay-right-star">
        <img src={star_icon}style={{ width: '5px', height:'5px' }} alt=""/>
        <img src={star_icon} alt=""/>
        <img src={star_icon} alt=""/>
        <img src={star_icon} alt=""/>
        <img src={star_icon} alt=""/>
        <p>(122)</p>
    </div> */}
    <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">Rs.{product.old_price}</div>
        <div className="productdisplay-right-price-new">Rs.{product.new_price}</div>

    </div>

<div className="productdisplay-right-description">
    loadmore 2 line
</div>
<div className="productdisplay-right-size">
    <h1>Select Size</h1>
    <div className="productdisplay-right-sizes">
        <div>small</div>
        <div>medium</div>
        <div>large</div>
        <div>XL</div>
        <div>XXl</div>
    </div>
</div>
<button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
</div>

{/* <p className="productdisplay-right-category"><span>category:</span>Women,T-shirt,croptop</p>
<p className="productdisplay-right-category"><span>Tags:</span>modern,latest</p> */}
        
        </div>
    )
}
export default ProductDisplay;