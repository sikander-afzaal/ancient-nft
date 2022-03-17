import React from "react";
import "./Team.css";
import img from "../../Assets/nft-img.png";
function Team() {
  return (
    <div className="team">
      <div className="heading-div">
        <h1 className="heading">Our team</h1>
        <p>Let’s explore our team member</p>
      </div>
      <div className="team-div">
        <div className="team-box">
          <img src={img} alt="" />
          <h1>Name</h1>
          <p>Founder</p>
        </div>
        <div className="team-box centerBox">
          <img src={img} alt="" />
          <h1>Name</h1>
          <p>Founder</p>
        </div>
        <div className="team-box">
          <img src={img} alt="" />
          <h1>Name</h1>
          <p>Founder</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
