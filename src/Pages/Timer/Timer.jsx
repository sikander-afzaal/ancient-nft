import React, { useRef, useState, useEffect } from "react";
import "./Timer.css";
import bg from "../../Assets/timer-bg.png";
import small from "../../Assets/small-triangle.png";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
function Timer() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    let end = new Date("5/15/2022 3:00 PM");
    interval = setInterval(() => {
      let _second = 1000;
      let _minute = _second * 60;
      let _hour = _minute * 60;
      let _day = _hour * 24;
      let now = new Date();
      let nowUTC = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );
      let distance = end - nowUTC;
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      if (distance < 0) {
        clearInterval(interval.current);
        return;
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className="timer">
      <img src={small} alt="" className="abs-triangle tri1" />
      <img src={small} alt="" className="abs-triangle tri2" />
      <ScrollAnimation
        duration={1.5}
        animateOnce={true}
        className="triangle-div"
        animateIn="animate__fadeIn"
        animatePreScroll={false}
      >
        <img src={bg} alt="" />

        <ScrollAnimation
          duration={1.5}
          delay={500}
          animateOnce={true}
          className="abs-text"
          animateIn="animate__bounceInLeft"
          animatePreScroll={false}
        >
          <p>Mint countdown ends in..</p>
          <div className="timer-div">
            <div className="timer-box">
              <h1>{timerDays}</h1>
              <p>Days</p>
            </div>
            <p>:</p>
            <div className="timer-box">
              <h1>{timerHours}</h1>
              <p>Hours</p>
            </div>
            <p>:</p>
            <div className="timer-box">
              <h1>{timerMinutes}</h1>
              <p>Mins</p>
            </div>
            <p>:</p>
            <div className="timer-box">
              <h1>{timerSeconds}</h1>
              <p>Seconds</p>
            </div>
          </div>
          <div className="button-div">
            <button className="timer-btn">Mint now</button>
            <button className="timer-btn">Connect wallet</button>
          </div>
        </ScrollAnimation>
      </ScrollAnimation>

      <ScrollAnimation
        duration={1.5}
        animateOnce={true}
        className="bottom-timer"
        animateIn="animate__fadeIn"
        animatePreScroll={false}
      >
        <div className="sale-box">
          <h2>Public Sale</h2>
          <p>TBA</p>
        </div>
        <div className="sale-box">
          <h2>Pre-Sale</h2>
          <p>TBA</p>
        </div>
        <div className="sale-box">
          <h2>Mint Price</h2>
          <p>TBA</p>
        </div>
        <div className="sale-box">
          <h2>Gas Fee</h2>
          <p>TBA</p>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Timer;
