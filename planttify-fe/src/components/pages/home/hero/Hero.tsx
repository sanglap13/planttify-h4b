import React, { useEffect, useState } from "react";
import { HeroIMG } from "../../../../assets";
import About from "../about/About";

const textOptions = ["Trees", "Earth"];

const Hero = () => {
  const [currentText, setCurrentText] = useState(textOptions[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(textOptions[currentIndex]);
  }, [currentIndex]);

  return (
    <>
    <div
      className="relative w-full h-[40rem] px-10 overflow-hidden flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroIMG})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 text-left text-white">
        <h1 className="text-4xl md:text-8xl font-bold mb-4">
          Save{" "}
          <span
            className="animate-fadeInOut"
            style={{ animation: "fadeInOut 2s linear infinite" }}
          >
            {currentText}
          </span>{" "}
          !
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Trees are poems that the earth writes upon the sky.
        </p>
        <button className="bg-green-600 shodow-md hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Join Groups
        </button>
      </div>
    </div>
    <About/>
    </>
  );
};

export default Hero;
