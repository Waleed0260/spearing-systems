// "use client"
import React, { useEffect } from "react";
import Image from "next/image";
import about2 from "../../public/images/about2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiTicktick } from "react-icons/si";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1900, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
      <div className="md:w-[80%] m-[50px] w-[89vw] flex md:flex-row flex-col gap-5">
        <div className="flex md:flex-col flex-col justify-between items-start md:w-[50%]" data-aos="fade-right">
        <div className="md:w-[80%] h-[330px] overflow-hidden" >
  <Image src={about2} alt="" className="w-full h-full object-cover" />
</div>
          <p className="font-bold text-4xl heading mt-3">
            Incredibly fast and amazing features{" "}
          </p>
          <p className="md:w-[100%] text mt-3">
            We provide digital experience services to startups and small
            businesses velit purus aliquet, massa fringilla
          </p>
        </div>

        <div className="flex flex-col justify-between md:w-[50%]" data-aos="fade-left">
          <b className="font-bold text-md mid-heading">BUSINESS GROWTH</b>
          <p className="text-3xl heading">
            BEST DIGITAL CREATIVE AGENCY
          </p>
          <p className="mt-[10px] md:w-[70%]  mid-heading">
            There are many variations of passages of lorem in free market to
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words
          </p>
          <div className="flex flex-row gap-3 items-center border-[1px] p-3 mt-2 bg-[#f5f4f2] border-[#1c1c1c]">
            <p className="text-[#FF8E2B]">
            <SiTicktick />
            </p>
            <p className="text ">For marketing professionals </p>
          </div>
          <div className="flex flex-row gap-3 items-center border-[1px] p-3 mt-2 bg-[#f5f4f2] border-[#1c1c1c]">
            <p className="text-[#FF8E2B]">
            <SiTicktick />
            </p>
            <p className="text ">For marketing professionals </p>
          </div>
          <div className="flex flex-row gap-3 items-center border-[1px] p-3 mt-2 bg-[#f5f4f2] border-[#1c1c1c]">
            <p className="text-[#FF8E2B]">
            <SiTicktick />
            </p>
            <p className="text ">For marketing professionals </p>
          </div>
          <p className="text md:w-[70%] mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            fuga voluptatum minima, officiis accusantium obcaecati quo
            consectetur praesentium fugit qui nemo error officia quia soluta
            facilis voluptates! Fugit, id nesciunt.
          </p>
        </div>
      </div>
  );
};

export default About;
