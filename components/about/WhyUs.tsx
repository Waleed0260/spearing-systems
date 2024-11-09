"use client"
import React, {useEffect} from 'react'
// import { Progress } from "@/components/ui/progress"
// import about3 from "../../public/images/about5.png"
// import digitalSolutions from "../../public/images/digitalSolutions.jpg"
import Image from 'next/image'
import AOS from "aos"
import 'aos/dist/aos.css';
import whyAbout from "../../public/images/whyAbout.png"

const WhyUs = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
    <div className='w-full flex items-center justify-center ' data-aos="fade-up">
        <div className='w-[80%] m-[30px] flex md:flex-row flex-col md:items-start items-start justify-between'>
            <div className='flex flex-col md:w-[45%] ' >
                <b className='mid-heading '>Why US</b>
                <p className='font-bold sm:text-4xl text-2xl heading'>We Have an Incredibly Rich Past and Amazing Future Ahead </p>
                <p className='text mt-[30px]'>Spearing Systems has a storied history of transforming brands and leading them to new heights. Our journey is marked by innovative campaigns, long-lasting partnerships, and a relentless pursuit of excellence. </p>
                <ul className="list-disc pl-5">
  <li className='mt-2'>
    <div className='flex flex-col gap-2'>
      <p className='font-bold'>Proven Expertise:</p>
      <p className='text'>With years of experience across diverse industries, we bring a wealth of knowledge and a results-driven approach to every project.</p>
    </div>
  </li>
  <li className='mt-2'>
    <div className='flex flex-col gap-2'>
      <p className='font-bold'>Tailored Solutions:</p>
      <p className='text'>We understand that no two businesses are alike. That’s why we create customized strategies that align with your unique goals and target audience.</p>
    </div>
  </li>
  <li className='mt-2'>
    <div className='flex flex-col gap-2'>
      <p className='font-bold'>Innovative Approach:</p>
      <p className='text'>We stay ahead of the curve, leveraging the latest technologies and trends to keep your business at the forefront of your industry.</p>
    </div>
  </li>
  <li className='mt-2'>
    <div className='flex flex-col gap-2'>
      <p className='font-bold'>Commitment to Quality:</p>
      <p className='text'>We don’t just meet expectations—we exceed them. Our meticulous attention to detail ensures that every aspect of our work is of the highest quality.</p>
    </div>
  </li>
</ul>


            </div>

            <div className='md:w-[50%] h-full md:mt-0 mt-5' >
                <Image src={whyAbout} alt="asas"/>
                </div>
        </div>
    </div>

    
  )
}

export default WhyUs