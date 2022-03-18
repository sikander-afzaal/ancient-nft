import React from "react";
import "./Team.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import img from "../../Assets/nft-img.png";
function Team() {
  return (
    <div id="team" className="team">
      <ScrollAnimation
        duration={1.5}
        animateOnce={true}
        className="heading-div"
        animateIn="animate__jackInTheBox"
      >
        <h1 className="heading">Our team</h1>
        <p>Let’s explore our team member</p>
      </ScrollAnimation>

      <div className="team-div">
        <ScrollAnimation
          delay={500}
          duration={1}
          animateOnce={true}
          className="team-box"
          animateIn="animate__lightSpeedInLeft"
        >
          <img src={img} alt="" />
          <h1>Name</h1>
          <p>Founder</p>
        </ScrollAnimation>
        <ScrollAnimation
          delay={1500}
          duration={1}
          animateOnce={true}
          className="team-box centerBox"
          animateIn="animate__lightSpeedInLeft"
        >
          <img src={img} alt="" />
          <h1>Name</h1>
          <p>Founder</p>
        </ScrollAnimation>
        <ScrollAnimation
          delay={2000}
          duration={1}
          animateOnce={true}
          className="team-box"
          animateIn="animate__lightSpeedInLeft"
        >
          <img src={img} alt="" />
          <h1>Name</h1>
          <p>Founder</p>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Team;
