import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Choose = ({choose}:any) => {
  return (
    <div className='w-full flex items-center justify-center '>
        <div className='w-[80%] flex flex-col items-center justify-center m-[20px]'>
            <p className='font-bold text-2xl heading'>{choose?.heading}</p>
            <div className='flex flex-row m-4'>

            {choose?.choose.map((item:any)=>{
                return(
                    <div className='w-[90%]  m-3 p-4 flex flex-col items-center justify-center gap-3 shadow-2xl'>
          <i className={`fas fa-brain`} style={{ fontSize: '2rem', backgroundColor:"green", padding:"15px", borderRadius:"50px" }}></i>
          <p className='mid-heading font-bold text-2xl'>{item.heading}</p>
                        <p className='text-center text'>{item.text}</p>
                    </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default Choose