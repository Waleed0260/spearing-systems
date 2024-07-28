// "use client"
import React, {useEffect} from 'react'
import { GoLightBulb } from "react-icons/go";
import { PiBeerBottleDuotone, PiTimerBold } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { FcSmartphoneTablet } from "react-icons/fc";
import { FaPenRuler } from "react-icons/fa6";
import AOS from "aos"
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
    const services = [
        {
            id:1,
            icon: <GoLightBulb/>,
            heading:"Design Department",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam accusamus similique quaerat autem nihil obcaecati labore earum illo soluta cum."
        },
        {
            id:2,
            icon: <PiBeerBottleDuotone/>,
            heading:"Design Department",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam accusamus similique quaerat autem nihil obcaecati labore earum illo soluta cum."
        },
        {
            id:3,
            icon: <PiTimerBold/>,
            heading:"Design Department",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam accusamus similique quaerat autem nihil obcaecati labore earum illo soluta cum."
        },
        {
            id:4,
            icon: <FcSmartphoneTablet/>,
            heading:"Design Department",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam accusamus similique quaerat autem nihil obcaecati labore earum illo soluta cum."
        },
        {
            id:5,
            icon: <TbTargetArrow/>,
            heading:"Design Department",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam accusamus similique quaerat autem nihil obcaecati labore earum illo soluta cum."
        },
        {
            id:6,
            icon: <FaPenRuler/>,
            heading:"Design Department",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam accusamus similique quaerat autem nihil obcaecati labore earum illo soluta cum."
        },
    ]

  return (
    <div className='flex flex-col justify-center items-center p-6' data-aos="fade-up">
        <b className='font-bold text-3xl heading'>Services</b>
        <div className='grid grid-cols-3 p-4 gap-3'>
            {services.map((item:any, index:any)=>{
                return(
                    <div className='flex flex-col gap-3' key={item.id}>

                    <p className='text-blue-600 text-4xl'>{item.icon}</p>
                    <b className='font-bold text-3xl mid-heading'>{item.heading}</b>
                    <p>{item.text}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services