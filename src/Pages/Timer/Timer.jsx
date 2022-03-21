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
    let end = new Date("4/25/2022 00:00 PM");
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

        <div className="abs-text">
          <ScrollAnimation
            duration={1.5}
            delay={500}
            animateOnce={true}
            animateIn="animate__fadeInDown"
            animatePreScroll={false}
          >
            <p>Mint countdown ends in..</p>
          </ScrollAnimation>
          <ScrollAnimation
            duration={1.5}
            delay={700}
            animateOnce={true}
            className="timer-div"
            animateIn="animate__fadeInDown"
            animatePreScroll={false}
          >
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
          </ScrollAnimation>
          <ScrollAnimation
            duration={1.5}
            delay={1000}
            animateOnce={true}
            className="button-div"
            animateIn="animate__fadeInDown"
            animatePreScroll={false}
          >
            <button className="timer-btn">Mint now</button>
            <button className="timer-btn">Connect wallet</button>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>

      <div className="bottom-timer">
        <ScrollAnimation
          duration={1.5}
          delay={300}
          animateOnce={true}
          className="sale-box"
          animateIn="animate__fadeInDown"
          animatePreScroll={false}
        >
          <h2>Public Sale</h2>
          <p>0.08</p>
        </ScrollAnimation>
        <ScrollAnimation
          duration={1.5}
          delay={600}
          animateOnce={true}
          className="sale-box"
          animateIn="animate__fadeInDown"
          animatePreScroll={false}
        >
          <h2>Pre-Sale</h2>
          <p>TBA</p>
        </ScrollAnimation>
        <ScrollAnimation
          duration={1.5}
          delay={900}
          animateOnce={true}
          className="sale-box"
          animateIn="animate__fadeInDown"
          animatePreScroll={false}
        >
          <h2>Mint Price</h2>
          <p>TBA</p>
        </ScrollAnimation>
        <ScrollAnimation
          duration={1.5}
          delay={1200}
          animateOnce={true}
          className="sale-box"
          animateIn="animate__fadeInDown"
          animatePreScroll={false}
        >
          <h2>Whitelist Mint Price</h2>
          <p>0.05</p>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Timer;
