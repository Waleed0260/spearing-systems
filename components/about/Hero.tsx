"use client"
import React from "react";
import Header from "../home/Header";

const Hero = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      {/* <div className=' flex items-center justify-center m-[200px]'> */}
      <div
        className="w-full flex flex-col items-center justify-center bg-cover  h-[37rem]"
        style={{ backgroundImage: `url('/images/banner3.png')` }}
      >
        <p className="font-bold text-3xl text-white heading">ABOUT US</p>
        {/* <p >Our crew was tasked with the challenge to take the world of data engineering and turn it upside down to create a soothing</p> */}
      </div>
    </div>
  );
};

export default Hero;
