import React from "react";
import "./About.css";
import img from "../../Assets/about.png";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <div id="about" className="about">
      <ScrollAnimation
        animatePreScroll={false}
        duration={1.5}
        animateOnce={true}
        className="top-about"
        animateIn="animate__jackInTheBox"
      >
        <h1 className="heading">About Us</h1>
        <p>Our main motive and goal you all may need to know about</p>
      </ScrollAnimation>
      <div className="bot-about">
        <ScrollAnimation
          animatePreScroll={false}
          duration={1.5}
          animateOnce={true}
          className="left-about"
          animateIn="animate__slideInLeft"
        >
          <div className="wrapper-about">
            <h1 className="heading">What is Pharaoh God’s club</h1>
            <div className="text-div-about">
              <p>
                Pharaoh God's club is a set of 5555 custom designed NFTS made in
                3 category.
              </p>
              <ul>
                <li> Female pharaoh God's</li>
                <li> Male pharaoh God's</li>
                <li>Mutated God's</li>
              </ul>
              <p>
                Each of them have unique utilities like providing staking
                features and earning god coin, our native currency that will be
                used in our onchain strategy game coming September 2022
              </p>
            </div>
            <p className="yellow-abt">
              Come and join us in this fabulous adventure and explore our NFT’s
              Collection
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animatePreScroll={false}
          duration={1.5}
          animateOnce={true}
          className="right-about"
          animateIn="animate__flipInX"
        >
          <img src={img} alt="" />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default About;
