import React from 'react'
import google from "../../public/images/google.png"
import Image from 'next/image'

const Technologies = () => {
  return (
    <div className='flex flex-col items-center '>
        <p className='font-bold text-2xl heading'>Experts  in Best Class Technology Platforms</p>
        <div className='w-[80%] flex flex-col items-center justify-center'>
            <div className="grid grid-cols-6 gap-3">
                <Image src={google} alt="" className='w-[200px] h-[150px]'/>
                <Image src={google} alt="" className='w-[200px] h-[150px]'/>
                <Image src={google} alt="" className='w-[200px] h-[150px]'/>
                <Image src={google} alt="" className='w-[200px] h-[150px]'/>
                <Image src={google} alt="" className='w-[200px] h-[150px]'/>
                <Image src={google} alt="" className='w-[200px] h-[150px]'/>
            </div>
            <div className="grid grid-cols-4">
            <Image src={google} alt="" className='w-[200px] h-[150px]'/>
                <Image src={google} alt="" className='w-[200px] h-[150px]'/>
                <Image src={google} alt="" className='w-[200px] h-[150px]'/>
                <Image src={google} alt="" className='w-[200px] h-[150px]'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies