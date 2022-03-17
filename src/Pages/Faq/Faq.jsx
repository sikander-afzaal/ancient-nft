import React, { useState } from "react";
import "./Faq.css";
function Faq() {
  const [open, setOpen] = useState([false, false, false, false, false]);

  //function to check which faq is opened
  const clickHandler = (e) => {
    const num = e.target.dataset.num;
    setOpen((prev) => {
      let arr = [...prev];
      let newArr = arr.map((elem, index) => {
        if (index == num) {
          return !elem;
        } else {
          return elem;
        }
      });
      return newArr;
    });
  };
  return (
    <div className="faq">
      <div className="heading-div">
        <h1 className="heading">Frequently Asked Questions</h1>
        <p>Let’s checkout answers of your questions</p>
      </div>
      <div className="faq-div">
        <div className="faq-q-div">
          <div
            data-num={0}
            onClick={clickHandler}
            className={`faq-btn ${open[0] ? "border-radius" : ""}`}
          >
            <span className={`arrow2 ${open[0] ? "active2" : ""}`}>+</span>
            <p className={`${open[0] ? "active-btn" : ""}`}>What is an NFT?</p>
          </div>
          <div className={`faq-answer ${open[0] ? "active" : ""}`}>
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, repudiandae. Eligendi qui et quam aspernatur nostrum in
              rem est fuga!
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={1}
            onClick={clickHandler}
            className={`faq-btn ${open[1] ? "border-radius" : ""}`}
          >
            <span className={`arrow2 ${open[1] ? "active2" : ""}`}>+</span>
            <p className={`${open[1] ? "active-btn" : ""}`}>Who is the Team?</p>
          </div>
          <div className={`faq-answer ${open[1] ? "active" : ""}`}>
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, repudiandae. Eligendi qui et quam aspernatur nostrum in
              rem est fuga!
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={2}
            onClick={clickHandler}
            className={`faq-btn ${open[2] ? "border-radius" : ""}`}
          >
            <span className={`arrow2 ${open[2] ? "active2" : ""}`}>+</span>
            <p className={`${open[2] ? "active-btn" : ""}`}>
              How many can I Mint?
            </p>
          </div>
          <div className={`faq-answer ${open[2] ? "active" : ""}`}>
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, repudiandae. Eligendi qui et quam aspernatur nostrum in
              rem est fuga!
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={3}
            onClick={clickHandler}
            className={`faq-btn ${open[3] ? "border-radius" : ""}`}
          >
            <span className={`arrow2 ${open[3] ? "active2" : ""}`}>+</span>
            <p className={`${open[3] ? "active-btn" : ""}`}>
              What wallets can be supported during Mint?
            </p>
          </div>
          <div className={`faq-answer ${open[3] ? "active" : ""}`}>
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, repudiandae. Eligendi qui et quam aspernatur nostrum in
              rem est fuga!
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={4}
            onClick={clickHandler}
            className={`faq-btn ${open[4] ? "border-radius" : ""}`}
          >
            <span className={`arrow2 ${open[4] ? "active2" : ""}`}>+</span>
            <p className={`${open[4] ? "active-btn" : ""}`}>What is an NFT?</p>
          </div>
          <div className={`faq-answer ${open[4] ? "active" : ""}`}>
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, repudiandae. Eligendi qui et quam aspernatur nostrum in
              rem est fuga!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
