import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Countdown.css";
// Images
import Image1 from "../../Image/welcome.png";
import Image2 from "../../Image/Course plan.png";
import Image3 from "../../Image/supperbatch.PNG";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("June 4, 2022 21:59:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //   stop our timer
        clearInterval(interval.current);
      } else {
        //   update time
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <Container fluid>
        <div className="counterMy">
          <h1>Days: {timerDays}</h1>
          <h1 className="resNone">||</h1>
          <h1 className="cd_hr">
            <hr />
          </h1>
          <h1>Hours: {timerHours}</h1>
          <h1 className="cd_hr">
            <hr />
          </h1>
          <h1 className="resNone">||</h1>
          <h1>Minutes: {timerMinutes}</h1>
          <h1 className="cd_hr">
            <hr />
          </h1>
          <h1 className="resNone">||</h1>
          <h1>Seconds: {timerSeconds}</h1>
        </div>
        <br />
        <h1>
          <marquee behavior="" direction="">
            Time Left For 2nd Assignment Submit 
          </marquee>
          <br />
          <hr />
          <div className="welcomeImg">
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />
          </div>
        </h1>
      </Container>
    </>
  );
};

export default Countdown;
