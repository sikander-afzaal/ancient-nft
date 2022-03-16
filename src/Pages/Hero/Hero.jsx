import React from "react";
import "./Hero.css";
import img from "../../Assets/hero.png";
function Hero() {
  return (
    <div className="hero">
      <img src={img} alt="" className="heroImg" />
    </div>
  );
}

export default Hero;
