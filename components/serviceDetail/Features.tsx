import Image from 'next/image'
import React from 'react'
import responsiveWebsite from "../../public/images/responsiveWebsite.webp"

const Features = ({features}:any) => {
  return (
    <div className='w-full flex itesm-center justify-center bg-gray-700 text-white'>
        <div className="flex flex-col items-center justify-center w-[80%] m-6">
          <p className='font-bold text-2xl'>website features that you will love</p>
          <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 p-3 '>
            {features?.map((item:any)=>{
              return(
                <>
                <div className='w-[90%] flex flex-col gap-3 items-start justify-center'>
                  <div className='m-3'>
                  <Image src={item.img} alt="" className='w-[70px] h-[70px]' width={100} height={100}/>
                  <p className='heading font-bold text-xl'>{item.heading}</p>
                  <p className='text'>{item.text}</p>
                  </div>
                </div>
                </>
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default Features