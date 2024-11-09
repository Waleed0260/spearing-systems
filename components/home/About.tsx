// "use client"
import React, { useEffect } from "react";
import Image from "next/image";
import marketing from "../../public/images/marketing.jpg";
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
      <div className="lg:w-[80%] m-[50px] w-[89vw] flex md:flex-row flex-col gap-5">
        <div className="flex md:flex-col flex-col justify-between items-start md:w-[50%]" data-aos="fade-right">
        <div className="md:w-[80%] h-[330px] overflow-hidden" >
  <Image src={marketing} alt="" className="w-full h-full object-cover" />
</div>
          <p className="font-bold sm:text-4xl text-2xl heading mt-3" data-aos="fade-up" data-ao-delay="300">
          We Have an Incredibly Rich Past and Amazing Future Ahead
          </p>
        </div>

        <div className="flex flex-col justify-between md:w-[50%]" data-aos="fade-left">
          <b className="font-bold text-md mid-heading">BUSINESS GROWTH</b>
          <p className="sm:text-3xl text-2xl heading">
            BEST DIGITAL CREATIVE AGENCY
          </p>
          <p className="mt-[10px] md:w-[70%]  mid-heading">
          At Spearing Systems, we don't just follow digital trends—we set them. As a premier digital marketing agency, we combine innovative strategies with creative excellence to deliver results that exceed expectations. 
          </p>
          <div className="flex flex-row gap-3 items-center border-[1px] p-3 mt-2 bg-[#f5f4f2] border-[#1c1c1c]" data-aos="fade-up" data-ao-delay="300">
            <p className="text-[#FF8E2B]">
            <SiTicktick />
            </p>
            <p className="text ">Data Driven Strategies </p>
          </div>
          <div className="flex flex-row gap-3 items-center border-[1px] p-3 mt-2 bg-[#f5f4f2] border-[#1c1c1c]" data-aos="fade-up" data-ao-delay="300">
            <p className="text-[#FF8E2B]">
            <SiTicktick />
            </p>
            <p className="text ">Client Centric Approach </p>
          </div>
          <div className="flex flex-row gap-3 items-center border-[1px] p-3 mt-2 bg-[#f5f4f2] border-[#1c1c1c]" data-aos="fade-up" data-ao-delay="300">
            <p className="text-[#FF8E2B]">
            <SiTicktick />
            </p>
            <p className="text ">End to End Solutions </p>
          </div>
        </div>
      </div>
  );
};

export default About;
