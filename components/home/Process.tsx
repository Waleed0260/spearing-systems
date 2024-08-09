import React from 'react'
import { AiOutlineFileSearch } from "react-icons/ai";
import { LuAtom } from "react-icons/lu";
import { TbSettingsCog } from "react-icons/tb";
import { SiTicktick } from "react-icons/si";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GoGoal } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

const Process = () => {
  return (
    <div className='relative w-full h-full bg-cover bg-fixed' style={{
        backgroundImage: `url('/images/process.jpg')`,
      }}>
        <div className='flex items-center justify-center'>
         <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='w-[80%] flex flex-col items-center sm:items-center justify-center relative z-10 text-white m-[30px]'>
            <p className='text-4xl font-bold heading mt-6'>Our flawless process</p>
            <p className='mt-[20px] w-[70%] text'>We believe in a seamless approach to delivering results that exceed expectations. Our process is designed to be meticulous, efficient, and focused on your business goals, ensuring that every project we undertake is executed flawlessly from start to finish.
            </p>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-[20px]'>
                <div className='w-[200px] h-[200px] rounded-[200px] mt-[10px] flex items-center flex-col justify-center border-[2px] border-white ml-[13px]'>
                    <p className='font-bold text-5xl heading'>
                    <GoGoal/>
                    </p>
                    Strategy
                </div>
                <div className='w-[200px] h-[200px] rounded-[200px] mt-[10px] flex items-center flex-col justify-center border-[2px] border-white ml-[13px]'>
                    <p className='font-bold text-5xl heading'>
                    <FaCode/>
                    </p>
                    Development
                </div>
                <div className='w-[200px] h-[200px] rounded-[200px] mt-[10px] flex items-center flex-col justify-center border-[2px] border-white ml-[13px]'>
                    <p className='font-bold text-5xl heading'>
                    <TbSettingsCog />
                    </p>
                    Testing
                </div>
                <div className='w-[200px] h-[200px] rounded-[200px] mt-[10px] flex items-center flex-col justify-center border-[2px] border-white ml-[13px]'>
                    <p className='font-bold text-5xl heading'>
                    <BsFillRocketTakeoffFill/>
                    </p>
                    Launch
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Process