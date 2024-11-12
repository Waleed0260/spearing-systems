"use client"
import React, {useEffect} from 'react'
// import { Progress } from "@/components/ui/progress"
// import about3 from "../../public/images/about5.png"
// import digitalSolutions from "../../public/images/digitalSolutions.jpg"
import Image from 'next/image'
import AOS from "aos"
import 'aos/dist/aos.css';
import unique from "../../public/images/unique.webp"
import Link from 'next/link';
const WhyUs = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
    <div className='w-full flex items-center justify-center ' data-aos="fade-up">
       <div className="w-[80%] m-[30px] flex md:flex-row flex-col md:items-start items-start justify-between">
  <div className="flex flex-col md:w-[45%] md:h-[500px] justify-between">
    <p className="font-bold sm:text-4xl text-2xl heading">Our Unique Selling Point</p>
    <p className="text mt-[30px]">
      Our dedicated focus on the architect and Interior design industry sets us apart. We understand your unique market challenges and leverage our niche expertise to develop creative, high-impact strategies that drive growth. With industry-aligned designs, innovative ad campaigns, and proven techniques, we help your brand stand out and succeed.
      <br />
      Our specialized approach means quicker, more effective solutions tailored precisely to your needs—allowing you to achieve measurable results and scale with confidence.
    </p>
    <button className="btn p-3 text-white rounded-[100px] mt-3 transition-all">
      <Link href="/contact">Book a free Consultation</Link>
    </button>
  </div>

  <div className="md:w-[50%] h-full md:h-[500px] md:mt-0 mt-5">
    <Image src={unique} alt="Our unique selling point" className="h-full object-cover" />
  </div>
</div>
    </div>

    
  )
}

export default WhyUs