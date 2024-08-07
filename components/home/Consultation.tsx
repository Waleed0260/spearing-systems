import React from 'react'
import chart from "../../public/images/Chart.png"
import Image from 'next/image'
import { Button } from '../ui/button'

const Consultation = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className="w-[80%] flex flex-col items-center m-3">

        <p className='font-bold text-2xl heading'>READY TO GROW YOUR BUSINESS</p>
        <div className='flex flex-row m-6 items-center gap-4'>
            <div className='w-[30%]'>
                <Image src={chart} alt='chart' className='w-full h-full overflow-hidden'/>
            </div>
            <div className=' flex flex-col w-[65%] m-4'>
                <p className='font-bold text-xl mid-heading'>Get a Free consultation</p>
                <form action="" className='flex flex-col p-5 bg-[#F5F5F5]'>
                    <label className='mt-4' htmlFor="name">Full Name</label>
                    <input type="text" name="name" id="" placeholder='Name'  className='p-4 bg-white border-[1px] border-[#F5F5F5]'/>
                    <label className='mt-4' htmlFor="email">Email</label>
                    <input type="text" name='email' placeholder='Enter Email'  className='p-4 bg-white border-[1px] border-[#F5F5F5]'/>
                    <label className='mt-4' htmlFor="email">Subject</label>
                    <input type="text" name='email' placeholder='Enter Subject'  className='p-4 bg-white border-[1px] border-[#F5F5F5] '/> 
                    <label className='mt-4' htmlFor="email">Message</label>
                    <input type="text" name='email' placeholder='Enter Email'  className='p-4 bg-white border-[1px] border-[#F5F5F5]'/>
                    <Button className='bg-white text-black mt-4 rounded-[100px]'>SUBMIT</Button>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Consultation