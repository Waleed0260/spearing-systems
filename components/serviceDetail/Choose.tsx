import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Choose = ({choose}:any) => {
  return (
    <div className='w-full flex items-center justify-center '>
        <div className='w-[80%] flex flex-col items-center justify-center m-[20px]'>
            <p className='font-bold text-2xl heading'>{choose?.heading}</p>
            <div className='lg:flex lg:flex-row grid sm:grid-cols-2 grid-cols-1 m-4'>

            {choose?.choose.map((item:any)=>{
                return(
                    <div className='w-[90%]  m-3 p-4 flex flex-col items-center justify-center gap-3 shadow-2xl'>
          <i className={`fas fa-${item.icon}`} style={{ fontSize: '2rem', backgroundColor:"#FF8E2B", padding:"15px", borderRadius:"100px" }}></i>
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