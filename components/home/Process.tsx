import React from 'react'
import { AiOutlineFileSearch } from "react-icons/ai";
import { LuAtom } from "react-icons/lu";
import { TbSettingsCog } from "react-icons/tb";
import { SiTicktick } from "react-icons/si";
import { Button } from '../ui/button';
import portfolio2 from "../../public/images/portfolio2.png"
import Image from 'next/image';

const Process = () => {
  return (
    <div className='relative w-full  bg-center bg-fixed ' style={{
        backgroundImage: `url('https://up2client.com/envato/azota/assets/images/hero/hero-1.jpg')`,
      }}>
        <div className='flex items-center justify-center'>
         <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='w-[80%] flex flex-col relative z-10 text-white pt-[100px]'>
            <p className='text-4xl font-bold heading'>Our flawless process</p>
            <p className='mt-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo et esse rerum ut modi, harum nesciunt aliquam porro iusto dolore voluptatibus saepe officia dicta cum error asperiores eius optio nihil beatae dolor eligendi facere? Ab quia atque nostrum? Veniam, obcaecati?</p>
            <div className='grid grid-cols-4 mt-[20px]'>
                <div className='w-[200px] h-[200px] rounded-[200px] flex items-center flex-col justify-center border-[2px] border-white ml-[13px]'>
                    <p className='font-bold text-5xl heading'>
                    <AiOutlineFileSearch />
                    </p>
                    Page Search
                </div>
                <div className='w-[200px] h-[200px] rounded-[200px] flex items-center flex-col justify-center border-[2px] border-white ml-[13px]'>
                    <p className='font-bold text-5xl heading'>
                    <LuAtom />
                    </p>
                    Developer
                </div>
                <div className='w-[200px] h-[200px] rounded-[200px] flex items-center flex-col justify-center border-[2px] border-white ml-[13px]'>
                    <p className='font-bold text-5xl heading'>
                    <TbSettingsCog />
                    </p>
                    Testing
                </div>
                <div className='w-[200px] h-[200px] rounded-[200px] flex items-center flex-col justify-center border-[2px] border-white ml-[13px]'>
                    <p className='font-bold text-5xl heading'>
                    <SiTicktick />
                    </p>
                    Launch
                </div>
            </div>

        </div>
        </div>
        <div className='flex items-center justify-center'>
        <div className='w-[80%] h-[400px] rounded-[20px] bg-white flex flex-row items-center justify-between relative top-[110px] shadow-md'>
            <div className='w-[50%]'>
            <Image src={portfolio2} alt="" className='h-[400px]'/>
            </div>
            <div className='w-[70%]'>
            <p className='font-bold text-4xl'>Do You Need Best Help For Business Corporating Related Issues !
            </p>
            <Button className='bg-blue-700 mt-[50px]'>FREE CONSULTATION</Button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Process