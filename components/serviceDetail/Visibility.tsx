"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import seo from "../../public/images/seo.jpg";

const Visibility = ({ heading, text, CTA, id }: any) => {

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="w-[80vw] flex flex-col items-start justify-center sm:mt-[200px] mt-[120px]">
        <p className="heading font-bold text-3xl">{heading}</p>

        <div className="flex md:flex-row flex-col justify-between items-start gap-3 mt-[50px]">
          <div className="flex flex-col md:w-[65%] w-[90vw] gap-3">
            <p className="text w-[85%] mt-4">{text}</p>
            <Button
              variant={"outline"}
              className="mt-[20px] sm:w-[400px] w-[70vw] bg-blue-700 rounded-[100px] text-white"
            >
              {CTA}
            </Button>
            <div className="w-[450px] h-[350px] mt-[20px]">
              <Image
                src={seo}
                alt="seo"
                className="h-full sm:w-full w-[70vw] overflow-hidden"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:w-[35%] w-[90vw] shadow-2xl mt-[30px]">
            <div className="flex flex-col items-center justify-center p-6 mt-5">
              <p className="text-4xl text-center">
                Get Started with Our SEO Services Today!
              </p>

              <form
                action=""
                className="flex items-center justify-center flex-col mt-[60px]"
              >
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[23vw] h-[40px] mt-6 rounded-md p-5 border-[2px] border-black"
                  placeholder="Name*"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[23vw] h-[40px] mt-6 rounded-md p-5 border-[2px] border-black"
                  placeholder="Email*"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[23vw] h-[40px] mt-6 rounded-md p-5 border-[2px] border-black"
                  placeholder="Message*"
                />
                <Button
                  variant={"outline"}
                  className="w-[200px] mt-[20px] bg-blue-700 rounded-[100px] text-white"
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
