import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import landing1 from "../assets/img/land1.png";
import landing2 from "../assets/img/land2.png";
import landing3 from "../assets/img/land3.png";
import progress_button from "../assets/img/Progress button.png";
import { useNavigate } from "react-router-dom";

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

const Landing_Qoute = [
  {
    title: "We serve incomparable delicacies ",
    description:
      "All the best restaurants with their top menu waiting for you, they can't wait for your order!!",
  },

  {
    title: "Gourmet Delights Await",
    description:
      "Discover a world of gourmet delights with our handpicked menu, featuring the best of local and international cuisines, just a click away.",
  },
  {
    title: "Taste the Finest Cuisines",
    description:
      "Indulge in a variety of exquisite dishes crafted by top chefs from around the world, ready to delight your taste buds.",
  },
];

const Carousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const filteredImages = imgArray.filter((_, index) => index === currentIndex);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Landing_Qoute.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Landing_Qoute.length - 1 : prevIndex - 1
    );
  };

  const redirectTacklingPage = () => {
    navigate("/signup");
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

      <div className="w-[90vw] h-[50vh] bg-gradient-to-tr from-70% from-primary to-[#ffb35b] rounded-[64px] fixed bottom-4 p-4 flex flex-col items-center ">
        <div className="flex w-full space-x-4">
          {Landing_Qoute.map((data, index) => (
            <div
              key={index}
              className={`w-[100vw] transition-transform duration-300 ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              <h1 className="text-3xl font-bold text-center my-2 text-white">
                {data.title}
              </h1>
              <p className="text-center text-white">{data.description}</p>
            </div>
          ))}
        </div>
        <div className="flex w-[40vw] space-x-2 justify-center my-4">
          {slab.map((data, index) => (
            <div
              key={index}
              className={`w-[40vw] transition-transform duration-300 h-2 ${
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
              className={` transition-transform duration-300 ${
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
            <button className="text-[1em] text-white">skip</button>
            <button
              className="flex justify-center items-center space-x-2"
              onClick={nextSlide}
            >
              <span className="text-[1em] text-white">Next</span>
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
