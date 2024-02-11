import React, { useState, useEffect }from "react";
import "../App.css";
const COUNTDOWN_TARGET = new Date("2024-02-14T23:59:59");



	
const Countdown = () => {
    const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [inputDate, setInputDate] = useState("14 Feb 2024");
  const [currentDate, setCurrentDate] = useState(inputDate);

  useEffect(() => {
    const changingDate = new Date(inputDate);
    const currentDate = new Date();
    const totalSeconds = (changingDate - currentDate) / 1000;

    setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
    setHours(Math.floor(totalSeconds / 3600) % 24);
    setMinutes(Math.floor(totalSeconds / 60) % 60);
    setSeconds(Math.floor(totalSeconds % 60));
  }, [currentDate]);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  const onChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const onClickHandler = () => {
    setCurrentDate(inputDate);
  };
    return (
            
            <div className="countdown-container mt-5">
                <h1 className="text-center">Time Left for the List</h1>
      <div className="countdown-values">
        <div className="countdown-value">
          <p className="big-text days">{days}:</p>
          <span>days</span>
        </div>
        <div className="countdown-value">
          <p className="big-text hours">{hours}:</p>
          <span>hours</span>
        </div>
        <div className="countdown-value minutes">
          <p className="big-text">{minutes}:</p>
          <span>mins</span>
        </div>
        <div className="countdown-value seconds">
          <p className="big-text">{seconds}</p>
          <span>seconds</span>
        </div>
      </div>
      
        </div>
        
        

    );
};
export default Countdown;