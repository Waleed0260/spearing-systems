import React from 'react'
import case1 from "../../public/images/case1.png"
import case2 from "../../public/images/case2.png";
import case3 from "../../public/images/case3.png";
import case4 from "../../public/images/case4.png";
import case5 from "../../public/images/case5.png";
import case6 from "../../public/images/case6.png";
import case7 from "../../public/images/case7.png";
import case8 from "../../public/images/case8.png";
import case9 from "../../public/images/case9.png";
import Image from 'next/image';
import Link from 'next/link';
const Portfolio = () => {

    const images = [
        { src: case1, heading: "STRATEGY", text: "Digital Experience Development Case" },
        { src: case2, heading: "STRATEGY", text: "Digital Experience Development Case" },
        { src: case3, heading: "STRATEGY", text: "Digital Experience Development Case" },
        { src: case4, heading: "STRATEGY", text: "Digital Experience Development Case" },
        { src: case5, heading: "STRATEGY", text: "Digital Experience Development Case" },
        { src: case6, heading: "STRATEGY", text: "Digital Experience Development Case" },
        { src: case7, heading: "STRATEGY", text: "Digital Experience Development Case" },
        { src: case8, heading: "STRATEGY", text: "Digital Experience Development Case" },
        { src: case9, heading: "STRATEGY", text: "Digital Experience Development Case" },
      ];

  return (
    <div className='w-full flex items-center justify-center'>
        <div className='w-[80%] flex flex-col items-center justify-center m-[30px]'>
            <p className='heading font-bold text-3xl'>Portfolio</p>
            <div className='grid grid-cols-3 '>
                {images.map((item:any)=>{
                    return(
                        <div className='flex p-[20px]'>
                            <Link href={"/portfolio-detail/22"}>
                        <div className='relative'>
                            <Image src={item.src} alt="" className='w-[350px] h-[500px] rounded-md'/>
                            <div className='absolute inset-0 flex items-center justify-center '>
                                <div className='text-left bg-orange-700 bg-opacity-50 p-4 m-6 text-white'>
                                    <p>{item.heading}</p>
                                    <p className='text-2xl font-bold heading'>{item.text}</p>
                                </div>
                            </div>
                        </div>
                            </Link>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Portfolio