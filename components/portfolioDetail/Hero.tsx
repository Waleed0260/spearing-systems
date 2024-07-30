import React from 'react'
import Header from '../home/Header'

const Hero = () => {
  return (
    <div className='w-full flex flex-col'>
        <Header/>
        {/* <div className=' flex items-center justify-center m-[200px]'> */}
        <div className='w-full flex flex-col items-center justify-center bg-[#edf2f2] h-[30rem] m-[30px]'>
            <p className='font-bold text-3xl heading'>
            Gateway Website Design Project case
            </p>
            <p >Our crew was tasked with the challenge to take the world of data engineering and turn it upside down to create a soothing</p>
        </div>
        </div>
    // </div>
  )
}

export default Hero