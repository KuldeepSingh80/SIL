import React from 'react'
import { useState, useEffect } from 'react';

const Timer = () => {

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);






  const clearTimer = (e) => {

    setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000)
  }


  useEffect(() => {
    clearTimer();
  }, []);

  return (
    <h2>{minutes} {seconds}</h2>
  );
}

export default Timer;