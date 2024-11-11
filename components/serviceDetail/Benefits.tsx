import React from 'react'

const Benefits = ({benefits}:any) => {
  return (
    <div className='w-full flex items-center justify-center mt-4'>
        <div className="w-[80%] flex flex-col items-start m-[30px]" data-aos="fade-up" data-aos-delay="300">
            {/* <div className='flex items-start '></div> */}
            <p className='heading text-2xl font-bold'>{benefits?.heading}</p>
            <ul className='list-disc text mt-[20px] ml-[20px]'>
              {benefits?.benefits.map((item:any)=>{
                return(
                  <>
                  <li className='mt-4'>
                  <div className='flex sm:flex-row flex-col gap-3'>

                  <p className='font-bold'>{item.heading}</p>
                  <p>{item.text}</p>
                  </div>
                </li>
                  </>
                )
              })}
            </ul>
        </div>
    </div>
  )
}

export default Benefits