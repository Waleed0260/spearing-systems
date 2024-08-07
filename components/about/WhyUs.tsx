"use client"
import React, {useEffect} from 'react'
import { Progress } from "@/components/ui/progress"
import about3 from "../../public/images/about5.png"
import digitalSolutions from "../../public/images/digitalSolutions.jpg"
import Image from 'next/image'
import AOS from "aos"
import 'aos/dist/aos.css';

const WhyUs = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
    <div className='w-full flex items-center justify-center '>
        <div className='w-[80%] m-[30px] flex flex-row justify-between'>
            <div className='flex flex-col p-[30px] w-[50%]' data-aos="fade-right">
                <b className='mid-heading'>WHy US</b>
                <p className='font-bold text-6xl heading'>We Give You Digital Solutions</p>
                <p className='text mt-[30px]'>Sed lectus vestibulum mattis ullamcorper velit sed ullamcorperbi. Fusce id velit ut tortor pretium viverra suspendisse fuis ultricies lacus sed turpis tincidunt id aliquet. Sed viverra tellus sed lectus vestibulum mattis</p>
                <br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nobis eius, accusantium, fugiat consequatur ut labore at itaque reprehenderit asperiores laudantium neque ea accusamus perspiciatis expedita. Nesciunt harum labore delectus nostrum ipsa quis temporibus explicabo ipsam. Quod velit pariatur, accusantium unde, amet reprehenderit esse placeat porro commodi saepe autem. Repellendus!</p>


            </div>

            <div className='w-[50%] h-full' data-aos="fade-left">
                <Image src={digitalSolutions} alt="asas"/>
                </div>
        </div>
    </div>
  )
}

export default WhyUs