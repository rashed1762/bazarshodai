import React from 'react'
import { useState, useEffect } from 'react';

const Countdown = ({targetDate}) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        const updateCountdown = () => {
          const now = new Date();
          const distance = new Date(targetDate) - now;
    
          if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            setTimeLeft({ days, hours, minutes, seconds });
          } else {
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          }
        };
    
        const intervalId = setInterval(updateCountdown, 1000);
    
        return () => clearInterval(intervalId);
      }, [targetDate]);
    
  
  
  return (
    <div className=" grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-emerald-50 rounded-full border  text-xl h-20 w-20 text-black ">
    <span className="flex justify-center countdown font-mono  text-green-500 text-3xl ">

      <span style={{"--value":timeLeft.days}}></span>
    </span>
    days
  </div>
  <div className="flex flex-col p-2 bg-emerald-50 rounded-box  text-xl h-20 text-black w-20 rounded-full">
    <span className="flex justify-center countdown font-mono text-3xl">
      <span style={{"--value":timeLeft.hours}}></span>
    </span>
    hours
  </div>
  <div className="flex flex-col p-2 bg-emerald-50 rounded-box  text-xl h-20 text-black w-20 rounded-full">
    <span className="flex justify-center countdown font-mono text-3xl">
      <span style={{"--value":timeLeft.minutes}}></span>
    </span>
    min
  </div>
  <div className="flex flex-col p-2 bg-emerald-50 rounded-box  text-xl h-20 text-black w-20 rounded-full">
    <span className="flex justify-center countdown font-mono text-3xl">
      <span style={{"--value":timeLeft.seconds}}></span>
    </span>
    sec
  </div>
</div>
  )
}

export default Countdown