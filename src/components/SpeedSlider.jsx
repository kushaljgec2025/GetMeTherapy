import React from "react";

const SpeedSlider = ({ speed, setSpeed }) => {
  return (
    <div className="w-full flex justify-around items-center  p-4 bg-primary  ">
      <input
        type="range"
        min="1"
        max="10"
        step="0.1"
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
        className="h-2 w-[50vw] cursor-pointer appearance-none rounded-md bg-white"
        id="basic-range-slider-usage"
        aria-orientation="horizontal"
      />

      <div className="text-center text-white bg-white/25  px-4 py-1 rounded-full  font-bold">
        Speed: <span className="">{speed}x</span>
      </div>
    </div>
  );
};

export default SpeedSlider;
