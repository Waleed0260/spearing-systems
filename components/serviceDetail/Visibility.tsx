"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import seo from "../../public/images/seo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Visibility = ({ heading, text, CTA, img }: any) => {
  useEffect(() => {
    AOS.init({
      duration: 1900, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden" data-aos="fade-up">
      <div className="w-[80vw] flex flex-col items-start justify-center sm:mt-[70px] mt-[120px]">
        <p className="heading font-bold text-3xl">{heading}</p>

        <div className="flex md:flex-row flex-col sm:justify-between items-end gap-3 mt-[50px]">
          <div className="flex flex-col md:w-[65%] w-[90vw] gap-3 justify-between ">
            <p className="text w-[85%] mt-4">{text}</p>
            <Button
              variant={"outline"}
              className="mt-[20px] sm:w-[150px] w-[70vw] bg-[#0D2137] hover:bg-[#FF8E2B] rounded-[100px] text-white"
            >
              Contact Us
            </Button>
            <div className="w-[550px] h-[350px] mt-[20px]">
              <Image
                src={img ? img: null}
                alt="seo"
                className="h-full sm:w-full w-[70vw] overflow-hidden"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:w-[35%] w-[70vw] shadow-2xl h-full mt-[30px] justify-between">
            <div className="flex flex-col items-center justify-center p-6 mt-5">
              <p className="text-4xl text-center">
                {CTA}
              </p>

              <form
                action=""
                className="flex items-center justify-center flex-col mt-[60px]"
              >
                <input
                  type="text"
                  name=""
                  id=""
                  className="sm:w-[23vw] w-[40vw] h-[40px] mt-6 rounded-md p-5 border-[2px] border-black"
                  placeholder="Name*"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="sm:w-[23vw] w-[40vw] h-[40px] mt-6 rounded-md p-5 border-[2px] border-black"
                  placeholder="Email*"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="sm:w-[23vw] w-[40vw] h-[40px] mt-6 rounded-md p-5 border-[2px] border-black"
                  placeholder="Message*"
                />
                <Button
                  variant={"outline"}
                  className="w-[210px] mt-[20px] bg-[#0D2137] hover:bg-[#FF8E2B] p-4 rounded-[100px] text-white"
                >
                  CLICK HERE TO GET AHEAD
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visibility;
