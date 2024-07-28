import React from 'react'
import banner from "../../public/images/banner.jpg"
import Header from '../home/Header'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
    <Header/>
    {/* <div className=' flex items-center justify-center m-[200px]'> */}
    <div className='w-full flex flex-col items-center justify-center bg-cover relative h-[37rem]' style={{backgroundImage: `url('/images/banner5.png')`}}>
        <p className='font-bold text-3xl text-white heading'>
        Services
        </p>
    <div className='absolute inset-0 bg-black opacity-50'></div>
        {/* <p >Our crew was tasked with the challenge to take the world of data engineering and turn it upside down to create a soothing</p> */}
    </div>
    </div>  
        )
}

export default Hero