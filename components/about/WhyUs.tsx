"use client"
import React, {useEffect} from 'react'
import { Progress } from "@/components/ui/progress"
import about3 from "../../public/images/about5.png"
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
            <div className='flex flex-col p-[30px] w-[80%]' data-aos="fade-right">
                <b>WHy US</b>
                <p className='font-bold text-3xl heading'>Lorem ipsum dolor sit amet.</p>
                <p className='text mt-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam obcaecati tenetur quos ipsam facere magnam, totam excepturi! Quibusdam, vel voluptatum corporis totam unde atque similique dolore suscipit aperiam, nulla quis quasi odio esse iste neque doloribus facere? Eveniet odit voluptatum maxime praesentium? Consequatur excepturi sint mollitia explicabo quis modi maxime?</p>
                <div className='w-[400px] flex justify-between items-center mt-[30px]'>
                    <p>Website developmetn</p>
                    <p>90%</p>
                </div>
                <Progress value={80}/>

                <div className='w-[400px] flex justify-between items-center'>
                    <p>Digital products</p>
                    <p>90%</p>
                </div>
                <Progress value={80}/>


                <div className='w-[400px] flex justify-between items-center'>
                    <p>Website developmetn</p>
                    <p>90%</p>
                </div>
                <Progress value={80}/>


            </div>

            <div className='w-[100%] h-[100%]' data-aos="fade-left">
                <Image src={about3} alt="asas"/>
                </div>
        </div>
    </div>
  )
}

export default WhyUs