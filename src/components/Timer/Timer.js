import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer(props) {
  const {initialSeconds = 60, index = 0} = props;
  const [seconds, setSeconds ] = useState(initialSeconds);

  const reset = () => {    
    setSeconds(initialSeconds)
  }

  const barWidth = () => {   
    return { width: "calc(" + Math.round(100.0*seconds/initialSeconds) + "% - 4px)"};
  }

  useEffect(()=>{
  let timerInterval = setInterval(() => {
          if (seconds > 0) {
              setSeconds(seconds - 1);
          } else if (seconds === 0) {
              clearInterval(timerInterval)
          }
      }, 1000)
      return ()=> {
          clearInterval(timerInterval);
        };
  });

  useEffect(()=>{
    reset();
  }, [index]);

  useEffect(()=>{
  }, [seconds]);

  return (
    <div className="timer">
      <div className="bar" style={barWidth()}></div>
      <div className="text">{seconds}</div>
      <img className="icon-clock" src="/img/clock@2x.svg" />      
    </div>
  );
}

export default Timer;