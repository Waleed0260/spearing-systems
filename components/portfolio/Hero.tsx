import React from "react";
import Header from "../home/Header";
const Hero = (text:any) => {
  return (
    <>
      <Header />
      <div
  className="w-full flex flex-col items-center justify-center bg-cover h-[39rem] overflow-hidden relative"
>
  <div
    className="w-full h-full flex flex-col items-center justify-center bg-cover bg-center hero-animation"
    style={{ backgroundImage: `url('/images/aboutBanner.png')` }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <p className="font-bold text-4xl text-white heading relative" data-aos="zoom-in" data-aos-delay="300">{text?.text}</p>
  </div>
</div>

    </>
  );
};

export default Hero;
