import React from 'react'
import banner from "../../public/images/banner.jpg"
import Header from '../home/Header'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className='w-full flex flex-col'>
    <Header/>
    <div
    className="w-full flex flex-col items-center justify-center bg-cover h-[39rem] overflow-hidden"
  >
    <div
      className="w-full h-full flex flex-col items-center justify-center bg-cover hero-animation bg-center"
      style={{ backgroundImage: `url('/images/banner5.png')` }}
    >
                <div className="absolute inset-0 bg-black opacity-50"></div>

      <p className="font-bold text-3xl text-white heading z-10">Services</p>
    </div>
  </div>
    </div>  
    )
}

export default Hero