import React from "react";
import "./About.css";
import img from "../../Assets/about.png";
function About() {
  return (
    <div className="about">
      <div className="heading-div">
        <h1 className="heading">About Us</h1>
        <p>Our main motive and goal you all may need to know about</p>
      </div>
      <div className="bot-about">
        <div className="left-about">
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
        </div>
        <div className="right-about">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
