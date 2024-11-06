"use client"
import Image from 'next/image'
import React, {useEffect} from 'react'
import { IoCloudDoneOutline } from "react-icons/io5";
import about2 from "../../public/images/about2.png"
import about3 from "../../public/images/about3.png"
import AOS from "aos"
import 'aos/dist/aos.css';
import { SiTicktick } from "react-icons/si";

const Growth = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
    <div className='w-full flex  justify-center items-center'>
        <div className='w-[90%] m-[30px] flex lg:flex-row flex-col'>
            <div className='flex items-start justify-center w-[50%]' data-aos="fade-right">
                <div className='w-[550px] h-[350px]'>
                <Image src={about2} alt="" className='w-full'/>
                    </div>
                    <div className='w-[550px] h-[300px] hidden md:flex relative right-[40px] top-[140px]'>
                <Image src={about3} alt=""/>
                    </div>
            </div>

            <div className="flex flex-col justify-between md:w-[50%]" data-aos="fade-left">
          <b className="font-bold text-md mid-heading">BUSINESS GROWTH</b>
          <p className="text-3xl heading">
            BEST DIGITAL CREATIVE AGENCY
          </p>
          <p className="mt-[10px] md:w-[70%]  mid-heading">
          At Spearing Systems, we don't just follow digital trends—we set them. As a premier digital marketing agency, we combine innovative strategies with creative excellence to deliver results that exceed expectations. 
          </p>
          <div className="flex flex-row gap-3 items-center border-[1px] p-3 mt-2 bg-[#f5f4f2] border-[#1c1c1c]">
            <p className="text-[#FF8E2B]">
            <SiTicktick />
            </p>
            <p className="text ">Data Driven Strategies </p>
          </div>
          <div className="flex flex-row gap-3 items-center border-[1px] p-3 mt-2 bg-[#f5f4f2] border-[#1c1c1c]">
            <p className="text-[#FF8E2B]">
            <SiTicktick />
            </p>
            <p className="text ">Client Centric Approach </p>
          </div>
          <div className="flex flex-row gap-3 items-center border-[1px] p-3 mt-2 bg-[#f5f4f2] border-[#1c1c1c]">
            <p className="text-[#FF8E2B]">
            <SiTicktick />
            </p>
            <p className="text ">End to End Solutions </p>
          </div>
        </div>
        </div>

    </div>
  )
}

export default Growth