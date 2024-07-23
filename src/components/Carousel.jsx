import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import landing1 from "../assets/img/land1.png";
import landing2 from "../assets/img/land2.png";
import landing3 from "../assets/img/land3.png";
import progress_button from "../assets/img/Progress button.png";
import { useNavigate, Link } from "react-router-dom";

const slab = [1, 2, 3];
const imgArray = [
  {
    component: landing1,
    alt: "burger_img1",
  },
  {
    component: landing2,
    alt: "burger_img2",
  },
  {
    component: landing3,
    alt: "burger_img3",
  },
];

const Carousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const filteredImages = imgArray.filter((_, index) => index === currentIndex);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const redirectTacklingPage = () => {
    navigate("/login");
  };
  console.log(currentIndex);
  return (
    <div className="flex justify-center items-center w-[100vw]">
      {filteredImages.map((image, index) => (
        <img
          key={index}
          src={image.component}
          alt={image.alt}
          className="w-[100vw] h-screen  object-cover "
        />
      ))}
      <div className="w-[134px] h-[5px] rounded-full fixed bottom-[8px] bg-white z-20"></div>
      <div className="w-[311px] h-[400px] bg-primary  rounded-[48px] fixed bottom-[36px] p-4 flex flex-col items-center ">
        <div className="flex w-full justify-center  ">
          <div className="w-[64vw]">
            <h1 className="text-[2em]  font-inter font-semibold leading-[40px] text-center  text-white">
              We serve incomparable delicacies
            </h1>
            <p className="text-center text-small leading-[20px] my-[16px]  text-white">
              All the best restaurants with their top menu waiting for you, they
              can't wait for your order!!
            </p>
          </div>
        </div>
        <div className="flex w-[80px] gap-[4px] justify-center my-4">
          {slab.map((data, index) => (
            <div
              key={index}
              className={`w-[24px] transition-transform duration-300 h-[6px] ${
                index == currentIndex ? "bg-white" : "bg-gray"
              } rounded-full`}
            ></div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center absolute bottom-10">
          <div>
            <img
              src={progress_button}
              alt="Progress Button"
              className={` transition-transform duration-300 w-[94px] ${
                currentIndex == 2 ? "block" : "hidden"
              }`}
              onClick={redirectTacklingPage}
            />
          </div>
          <div
            className={`flex w-full justify-between px-8 ${
              currentIndex == 2 ? "hidden" : "block"
            }`}
          >
            <Link to="/login" className="text-small font-semibold text-white">
              Skip
            </Link>
            <button
              className="flex justify-center items-center space-x-2"
              onClick={nextSlide}
            >
              <span className="text-small font-semibold text-white">Next</span>
              <FaArrowRight className="text-white" size={"20px"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
