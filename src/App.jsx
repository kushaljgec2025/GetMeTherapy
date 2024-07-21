import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { FaArrowRight } from "react-icons/fa6";
import Carousel from "./components/Carousel";

import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <Carousel />
      </div>
    </>
  );
}

export default App;
