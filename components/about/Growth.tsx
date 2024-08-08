"use client"
import Image from 'next/image'
import React, {useEffect} from 'react'
import { IoCloudDoneOutline } from "react-icons/io5";
import about2 from "../../public/images/about2.png"
import about3 from "../../public/images/about3.png"
import aboutGrowth from "../../public/images/aboutGrowth.jpg"
import AOS from "aos"
import 'aos/dist/aos.css';
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
            <div className='flex items-center justify-center w-[50%]' data-aos="fade-left">
                <div className='w-[450px] h-[500px]'>
                <Image src={aboutGrowth} alt=""/>
                    </div>
            </div>

            <div className='flex flex-col p-[20px]' data-aos="fade-right">
                <p className='font-bold heading'>Business Growth</p>
                <p className='text-4xl heading font-bold mt-[20px]'>Best Digital
                Creative Agency</p>
                <p className='mt-[20px] text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laboriosam, magni asperiores repellendus veritatis maxime labore! Dolores distinctio sed, saepe et corporis esse est aliquid consequuntur accusamus suscipit, nobis animi aliquam id perferendis? Veniam amet, magnam consectetur impedit at assumenda!</p>

                <div className='flex flex-row gap-4 '>
                    <div className='flex flex-col p-4 bg-[#f0f0f0] mt-2 w-[200px]'>
                        <p className='text-xl'><IoCloudDoneOutline/></p>
                        <p className='text'>For marketing professionals</p>
                    </div>
                    <div className='flex flex-col p-4 bg-[#f0f0f0] mt-2 w-[200px] '>
                        <p className='text-xl'><IoCloudDoneOutline/></p>
                        <p className='text'>Event marketing opportunities</p>
                    </div>
                </div>

                <p className='heading text-2xl mt-[40px]'>We Design & Build Powerful Websites</p>
                <p className='text mt-[10px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum veritatis iure quidem sint quasi saepe minus eos unde iusto aspernatur! Eligendi aperiam nihil iure nam porro, deleniti natus magni aut!</p>
            </div>
        </div>

    </div>
  )
}

export default Growth