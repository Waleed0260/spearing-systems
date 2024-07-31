import React from 'react'
import { Button } from '../ui/button'
import { CiLaptop } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { AiTwotoneCreditCard } from "react-icons/ai";


const ThirdSection = () => {
  return (
    <div className='w-full flex justify-center items-center'>

    <div className='w-[80%] flex md:flex-row flex-col justify-between m-[50px]'>
        <div className='flex flex-col'>
            <p className='font-bold text-4xl heading'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <p className='font-bold text-xl heading mt-[60px]'>Here's how to make it happen</p>
            <Button className='w-[150px] h-[50px] bg-orange-700 text-white rounded-[100px] mt-8'>Get a purposal</Button>
        </div>

        <div className='flex flex-col gap-4 mt-[20px] md:mt-0'>
            <div className='flex flex-row gap-3'>
                <p className='text-4xl'><CiLaptop/></p>
                <div className='flex flex-col gapa-4'>
                    <p>FULL WEBSITE DEVELOPMENT</p>
                    <p>It is a long established fact that a reader will be distracted by the readable</p>
                </div>
            </div>

            <div className='flex flex-row gap-3'>
                <p className='text-4xl'><CiLaptop/></p>
                <div className='flex flex-col gapa-4'>
                    <p>UI/UX</p>
                    <p>It is a long established fact that a reader will be distracted by the readable</p>
                </div>
            </div>

            <div className='flex flex-row gap-3'>
                <p className='text-4xl'><CiLaptop/></p>
                <div className='flex flex-col gapa-4'>
                    <p>Mobile optimization</p>
                    <p>It is a long established fact that a reader will be distracted by the readable</p>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default ThirdSection