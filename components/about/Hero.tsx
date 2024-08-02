"use client"
import React from "react";
import Header from "../home/Header";

const Hero = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      {/* <div className=' flex items-center justify-center m-[200px]'> */}
      <div
    className="w-full flex flex-col items-center justify-center bg-cover h-[39rem] overflow-hidden"
  >
    <div
      className="w-full h-full flex flex-col items-center justify-center bg-cover hero-animation bg-center"
      style={{ backgroundImage: `url('/images/banner3.png')` }}
    >
      <p className="font-bold text-3xl text-white heading">ABOUT US</p>
    </div>
  </div>
    </div>
  );
};

export default Hero;