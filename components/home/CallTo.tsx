import React from 'react'
import { Button } from '../ui/button'

const CallTo = () => {
  return (
    <div className='bg w-full flex items-center justify-center mb-6'>
        <div className='flex md:flex-row flex-col w-[80%] items-center justify-between p-4'>
            <div className='flex flex-col'>
                <p className='font-bold text-2xl heading'> Let's Collaborate</p>
                <p className='text mt-3 text-white'>Bring your vision to life with tailored solutions. Reach out today</p>
            </div>
            <Button className='bg-white text-black text-center'>CONTACT US</Button>
        </div>
    </div>
  )
}

export default CallTo