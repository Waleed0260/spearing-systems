import React from 'react'
import { Button } from '../ui/button'

const CallTo = ({tell}:any) => {
  return (
    <div className='bg w-full flex items-center justify-center'>
        <div className='flex md:flex-row flex-col w-[80%] gap-4 md:gap-0 items-center justify-between p-4'>
            <div className='flex flex-col'>
                <p className='font-bold text-2xl heading'> {tell?.heading ? tell.heading :"Let's Collaborate"}</p>
                <p className='text mt-3 text-white'>{tell?.text ? tell.text :"Bring your vision to life with tailored solutions. Reach out today"}</p>
            </div>
            <Button className='bg-white hover:bg-[#FF8E2B] text-black text-center'>CONTACT US TODAY</Button>
        </div>
    </div>
  )
}

export default CallTo