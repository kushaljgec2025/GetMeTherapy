import React, { useState, useEffect } from "react";
import SpeedSlider from "./SpeedSlider";
import ShareButton from "./ShareButton";
import { FaShareAlt } from "react-icons/fa";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());
  const [endTime, setEndTime] = useState(null); // Initialize endTime with useState

  const [url, setUrl] = useState(null);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const getInitialSpeed = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const speedParam = urlParams.get("speed");
    return speedParam ? parseFloat(speedParam) : 1;
  };
  const [speed, setSpeed] = useState(getInitialSpeed());
  const handleShare = () => {
    const newUrl = `${window.location.origin}${window.location.pathname}?speed=${speed}`;
    console.log(`Sharing URL: ${newUrl}`);
    setUrl(newUrl);
  };

  useEffect(() => {
    setEndTime(new Date(new Date().getTime() - 120 * 60 * 1000));
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (endTime && time.getTime() <= endTime.getTime()) {
        clearInterval(timerId);
      } else {
        setTime((prevTime) => new Date(prevTime.getTime() - 1000));
      }
    }, 1000 / speed);

    return () => {
      clearInterval(timerId);
    };
  }, [speed, endTime, time]);

  useEffect(() => {
    console.log(`URL Updated: ${url}`);
  }, [url]);
  const formattedCurrentTime = time.toLocaleTimeString("en-US", options);
  const formattedEndTime = endTime
    ? endTime.toLocaleTimeString("en-US", options)
    : "Initializing...";

  return (
    <div className="flex flex-col items-center">
      <span>Current Time: {formattedCurrentTime}</span>
      <span>End Time: {formattedEndTime}</span>
      <SpeedSlider speed={speed} setSpeed={setSpeed} />
      <div className="clock bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(255,130,0,0.8)_0%,rgba(255,255,255,0.8)_100%)] border-b-2 border-b-primary shadow-xl">
        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${time.getHours() * 30}deg)`,
          }}
        />
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${time.getMinutes() * 6}deg)`,
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${time.getSeconds() * 6}deg)`,
          }}
        />
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>

      <ShareButton handleShare={handleShare} url={url} />
    </div>
  );
};

export default AnalogClock;
