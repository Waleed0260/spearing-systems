import React from 'react'
import { AiOutlineFileSearch } from "react-icons/ai";
import { LuAtom } from "react-icons/lu";
import { TbSettingsCog } from "react-icons/tb";
import { SiTicktick } from "react-icons/si";
import { Button } from '../ui/button';
import portfolio2 from "../../public/images/portfolio2.png"
import Image from 'next/image';
import { FaPhone } from "react-icons/fa6";
import { CgShapeZigzag } from "react-icons/cg";
import process from "../../public/images/process.jpg"
const Process = () => {
  return (
    <div className='relative w-full  bg-center bg-fixed ' style={{
        backgroundImage: `url('https://up2client.com/envato/azota/assets/images/hero/hero-1.jpg')`,
      }}>
        <div className='flex items-center justify-center'>
         <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='w-[80%] flex flex-col items-center sm:items-center relative z-10 text-white pt-[100px]'>
            <p className='text-4xl font-bold heading'>Our flawless process</p>
            <p className='mt-[20px] w-[70%] text-center text'>Sodales imperdiet nunc quia omnis maecenas cubilia, purus, dolor! Est volutpat aliquid, elit excepturi.Laoreet! Sodales imperdiet nunc quia omnis maecenas cubilia, purus, dolor!</p>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-[20px]'>
                <div className='w-[200px] h-[200px] rounded-[200px] mt-[10px] flex items-center flex-col justify-center border-[2px] border-white ml-[13px]'>
                    <p className='font-bold text-5xl heading'>
                    <AiOutlineFileSearch />
                    </p>
                    Page Search
                </div>
                <div className='w-[200px] h-[200px] rounded-[200px] mt-[10px] flex items-center flex-col justify-center border-[2px] border-white ml-[13px]'>
                    <p className='font-bold text-5xl heading'>
                    <LuAtom />
                    </p>
                    Developer
                </div>
                <div className='w-[200px] h-[200px] rounded-[200px] mt-[10px] flex items-center flex-col justify-center border-[2px] border-white ml-[13px]'>
                    <p className='font-bold text-5xl heading'>
                    <TbSettingsCog />
                    </p>
                    Testing
                </div>
                <div className='w-[200px] h-[200px] rounded-[200px] mt-[10px] flex items-center flex-col justify-center border-[2px] border-white ml-[13px]'>
                    <p className='font-bold text-5xl heading'>
                    <SiTicktick />
                    </p>
                    Launch
                </div>
            </div>

        </div>
        </div>
        <div className='flex items-center justify-center'>
        <div className='md:w-[70%] w-[90vw] md:h-[300px] sm:h-[600px] h-[600px] rounded-[20px] bg-white flex md:flex-row flex-col  justify-around gap-3 relative top-[110px] shadow-md'>
            <div className='md:w-[40%] w-[100%]'>
            <Image src={process} alt="" className='sm:h-[300px] h-[200px]'/>
            </div>
            <div className='w-[70%] md:mt-[20px] mt-[-70px] m-5 sm:m-0'>
                <p className='text-6xl text-blue-700'><CgShapeZigzag/></p>
            <p className='font-bold md:text-4xl text-2xl'>Do You Need Best Help For Business Corporating Related Issues !
            </p>
            <hr  className='mt-[20px]'/>
            <div className='flex sm:flex-row flex-col gap-3 mt-[20px] justify-around'>
            <Button className='bg-blue-700 mt-[30px]'>FREE CONSULTATION</Button>
            <div className='flex flex-row'>
                <p className='font-bold text-3xl bg-gray-700 bg-opacity-20 text-center p-[20px] flex items-center rounded-[100px]'><FaPhone/></p>
                <div>
                <p className='mid-heading'>24/7 hours available</p>
                <p className='font-bold text-2xl text-blue-700'>+923342987718</p>
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Process