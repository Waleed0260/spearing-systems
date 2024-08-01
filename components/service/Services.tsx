import React from 'react'
import { FaRocket, FaIdCard } from "react-icons/fa";
import { ImPen } from "react-icons/im";
import { TbTargetArrow } from "react-icons/tb";
import { MdContentPasteGo } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import Link from 'next/link';
const Services = () => {
        const services = [
            {
                id:1,
                icon: <FaRocket/>,
                heading:"SEM",
                text: "Need something changed or is there something not quite working Aellente humour or randomised words"
            },
            {
                id:2,
                icon: <FaIdCard/>,
                heading:"PPC",
                text: "Need something changed or is there something not quite working Aellente humour or randomised words"
            },
            {
                id:3,
                icon: <TbTargetArrow/>,
                heading:"Advertisement",
                text: "Need something changed or is there something not quite working Aellente humour or randomised words"
            },
            {
                id:4,
                icon: <ImPen/>,
                heading:"BRANDING",
                text: "Need something changed or is there something not quite working Aellente humour or randomised words"
            },
            {
                id:5,
                icon: <MdContentPasteGo/>,
                heading:"WEBSITE DEVELOPMENT",
                text: "Need something changed or is there something not quite working Aellente humour or randomised words"
            },
            {
                id:6,
                icon: <GrSystem/>,
                heading:"MOJMASTI",
                text: "Need something changed or is there something not quite working Aellente humour or randomised words"
            },
        ]
  return (
    <div className='flex flex-col items-center justify-center m-5 bg-transparent'>
        <p className='font-bold heading'>What we offer</p>
        <p  className='font-bold text-5xl heading'> What We’re Offering Creative
        Digital Service</p>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 m-8'>
            {services.map((item:any, index:any)=>{
                return (
                    <div className='lg:w-[22vw] sm:w-[34vw] w-[70vw] h-[23rem] m-4 flex flex-col justify-center items-left border-[1px] border-black rounded-10px servicebox bg-[#f5f6f7] rounded-md' key={item.id}>
                        <Link href={"/service-detail/34"}>
                        <div className='p-5'>
                        <p className='font-bold text-4xl '>{item.icon}</p>
                        <p className='font-bold text-3xl heading mt-3'>{item.heading}</p>
                        <p className='text mt-6'>{item.text}</p>
                        </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services