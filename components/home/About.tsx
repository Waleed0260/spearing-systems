// "use client"
import React, {useEffect} from 'react'
import Image from 'next/image'
import about1 from "../../public/images/about1.png"
import AOS from "aos"
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
    <div className='flex flex-col justify-center items-center p-4'>
        <b className='font-bold text-2xl'>About</b>
        <div className='w-[70%] p-6 flex flex-col '>
            <div className='flex flex-row justify-between items-center p-6'>
                <p className='font-bold text-5xl w-[50%] heading'>Ultimate Eperiences with story, emotion and purpose
                </p>
                <p className='w-[45%] text'>Commodo, hendrerit tellus gravida ultrices tortor augue malesuada. Sit tempus laoreet suspendisse ullamcorper viverra tellus, ac. Dui sit sem enim in sed malesuada velit, lorem massa. Purus mattis vel sit interdum sollicitudin. Ut integer fringilla commodo turpis nisl. Ante ut volutpat sapien, nisi viverra eu nisl. Fringilla id accumsan nisl eu non, placerat malesuada.</p>
            </div>

            <div className='flex flex-row justify-between items-center gap-3'>
                <div className='w-[50%]'>
                    <Image src={about1} alt=""/>
                </div>
                <p className='font-semibold text-4xl w-[50%]'>
                “ Our mission is to produce the highest quality work for every clients, on every project with full of energy we have ”
                </p>
            </div>
        </div>
    </div>
  )
}

export default About