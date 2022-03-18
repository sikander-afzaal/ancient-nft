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
        <div className="left-about">
          <div className="wrapper-about">
            <ScrollAnimation
              animatePreScroll={false}
              duration={1}
              animateOnce={true}
              animateIn="animate__slideInLeft"
            >
              <h1 className="heading">What is Pharaoh God’s club</h1>
            </ScrollAnimation>

            <div className="text-div-about">
              <ScrollAnimation
                animatePreScroll={false}
                duration={1}
                animateOnce={true}
                delay={1000}
                animateIn="animate__fadeInUp"
              >
                <p>
                  Pharaoh God's club is a set of 5555 custom designed NFTS made
                  in 3 category.
                </p>
              </ScrollAnimation>

              <ul>
                <ScrollAnimation
                  animatePreScroll={false}
                  duration={1}
                  animateOnce={true}
                  delay={1200}
                  animateIn="animate__fadeInUp"
                >
                  <li> Female pharaoh God's</li>
                </ScrollAnimation>
                <ScrollAnimation
                  animatePreScroll={false}
                  duration={1}
                  animateOnce={true}
                  delay={1400}
                  animateIn="animate__fadeInUp"
                >
                  <li> Male pharaoh God's</li>
                </ScrollAnimation>
                <ScrollAnimation
                  animatePreScroll={false}
                  duration={1}
                  animateOnce={true}
                  delay={1500}
                  animateIn="animate__fadeInUp"
                >
                  <li>Mutated God's</li>
                </ScrollAnimation>
              </ul>
              <ScrollAnimation
                animatePreScroll={false}
                duration={1}
                animateOnce={true}
                delay={1600}
                animateIn="animate__fadeInUp"
              >
                <p>
                  Each of them have unique utilities like providing staking
                  features and earning god coin, our native currency that will
                  be used in our onchain strategy game coming September 2022
                </p>
              </ScrollAnimation>
            </div>
            <ScrollAnimation
              animatePreScroll={false}
              duration={1}
              animateOnce={true}
              delay={1650}
              animateIn="animate__fadeInUp"
            >
              <p className="yellow-abt">
                Come and join us in this fabulous adventure and explore our
                NFT’s Collection
              </p>
            </ScrollAnimation>
          </div>
        </div>
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
