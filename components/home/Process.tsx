import React from 'react'
import { AiOutlineFileSearch } from "react-icons/ai";
import { LuAtom } from "react-icons/lu";
import { TbSettingsCog } from "react-icons/tb";
import { SiTicktick } from "react-icons/si";
const Process = () => {
  return (
    <div className='relative w-full h-full bg-cover' style={{
        backgroundImage: `url('/images/process.jpg')`,
      }}>
        <div className='flex items-center justify-center'>
         <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='w-[80%] flex flex-col items-center sm:items-center justify-center relative z-10 text-white m-[30px]'>
            <p className='text-4xl font-bold heading mt-6'>Our flawless process</p>
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
    </div>
  )
}

export default Process