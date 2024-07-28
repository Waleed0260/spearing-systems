import React from 'react'
import banner from "../../public/images/banner.jpg"
import Header from '../home/Header'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className='relative w-full bg-cover' style={{backgroundImage: `url('/images/banner.jpg')`}}>
    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    <div className="relative z-10 text-white">
    <Header/>
        <div className='flex items-center justify-center p-[100px] flex-col '>
            <p className='text-6xl heading'>A <b className='font-bold'>CREATIVE</b>Team</p>
            <Button  className='mt-4 h-[60px] w-[250px] rounded-xl bg-transparent' variant={"outline"}>HAVE A PROJECT ? </Button>
        </div>
        </div> 

        </div>
        )
}

export default Hero