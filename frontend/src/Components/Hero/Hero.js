import React from "react";
import './Hero.css'
import hand_icon from '../Assets/hand_icon.webp'
import arrow_icon from '../Assets/arrow.jpg'
import hero_image from '../Assets/hero_image.png'
const Hero=()=>{
    return(
        <div className="hero">
<div className="hero-left">
<h2>new arrivers only</h2>
<div>
    <div className="hero-hand-icon">
    <p>new </p>
        <img src={hand_icon} style={{ width: '100px', height: '100px' }} alt='hand icon'></img>
    </div>
    <p>collection</p>
    <p>for everyone</p>
</div>
<div className="hero-latest-btn">
    <div>latest collection</div>
    {/* <img src={arrow_icon} alt='arrow icon'></img> */}
</div>
</div>
<div className="hero-right"></div>
<img src={hero_image} alt='hero profile'></img>
        </div>
    )
}
export default Hero;