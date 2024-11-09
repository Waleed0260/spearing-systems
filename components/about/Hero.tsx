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
      style={{ backgroundImage: `url('/images/about.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <p className="font-bold text-3xl text-white heading relative" data-aos="zoom-in" data-aos-delay="300">ABOUT US</p>
    </div>
  </div>
    </div>
  );
};

export default Hero;
