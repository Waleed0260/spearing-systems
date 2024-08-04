import React from 'react'
import { Button } from '../ui/button'

const Tell = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className='w-[70%] flex flex-col items-center justify-center m-[30px] p-4'>
            <p className='heading text-3xl'>TELL US ABOUT YOUR PROJECT</p>
            <p className='text text-md text-center'>Discover how Spearing Systems can transform your business with our expert SEO services. To learn more about how we can help you achieve your goals, please get in touch with us today.            </p>
            <Button variant={"outline"} className='w-[200px] mt-[20px] bg-blue-700 rounded-[100px] text-white border-none' >GET IN TOUCH</Button>
        </div>
    </div>
  )
}

export default Tell