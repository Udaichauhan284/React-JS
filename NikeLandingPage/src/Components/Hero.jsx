import React from "react";
import "./style.css";
import brandShoeImage from "./Assets/shoe_image.png";
import flipkartIcon from './Assets/flipkart.png';
import amazonIcon from './Assets/amazon.png';
const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-buttons">
            <button className="first">Shop Now</button>
            <button className="second">Category</button>
          </div>
          <div className="hero-footer">
            <p>Also Available On</p>
            <div className="hero-footer-shop-icon">
              <button><img src={flipkartIcon}></img></button>
              <button><img src={amazonIcon}></img></button>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={brandShoeImage} />
        </div>
      </div>
    </>
  );
};
export default Hero;
