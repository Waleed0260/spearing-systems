"use client"
import React, {useEffect} from 'react'
import { CiLaptop } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { AiTwotoneCreditCard } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import service1 from "../../public/images/service1.png"
import service2 from "../../public/images/service2.png"
import Image from 'next/image';
import AOS from "aos"
import 'aos/dist/aos.css';
    const SecondSection = () => {
    useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration
        once: true, // Whether animation should happen only once - while scrolling down
      });
    }, []);
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='w-[80%] flex flex-row justify-between m-[30px]' data-aos="fade-up">
            <div className='flex flex-col '>
                <p className='font-bold text-3xl heading'>WEBSITE DESIGN & BUILD</p>
                <p className='text mt-[30px]'>Websites can no longer just make sales, as in this day and age they also need to be able to engage and entertain. This is where we can help.</p>
                <p className='mt-4 font-bold text-2xl'>Services include</p>

                <div className='grid grid-cols-2 gap-2 p-7 mt-4'>
                    <div className='flex flex-col items-center'>
                        <p className='text-4xl'><CiLaptop/></p>
                        <p className='text text-center w-[180px]'>Full Custom Website development</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-4xl'><HiOutlineSpeakerphone/></p>
                        <p className='text text-center w-[180px]'>Full Custom Website development</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-4xl'><AiTwotoneCreditCard/></p>
                        <p className='text text-center w-[180px]'>Full Custom Website development</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-4xl'><IoSettingsOutline/></p>
                        <p className='text text-center w-[180px]'>Full Custom Website development</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center'>
                <div className='w-[520px] h-[496px]'>
                    <Image src={service1} alt="sss"/>
                </div>
                <div className='w-[412] h-[400px] relative bottom-[160px] left-[50px]'>
                    <Image src={service2} alt="sss"/>
                </div>
            </div>
        </div>
     </div>
  )
}

export default SecondSection