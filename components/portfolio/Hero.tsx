import React from "react";
import Header from "../home/Header";
const Hero = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center justify-center">
        {/* <div className=' flex items-center justify-center m-[200px]'> */}
        <div
          className="w-full flex flex-col items-center justify-center bg-cover relative h-[37rem]"
          style={{ backgroundImage: `url('/images/aboutBanner.png')` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <p className="font-bold text-3xl text-white heading relative z-10">
            PORTFOLIO
          </p>
          {/* <p >Our crew was tasked with the challenge to take the world of data engineering and turn it upside down to create a soothing</p> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
