import React, {useEffect} from 'react'
import Header from '../home/Header'
import Image from 'next/image'
import servicedetail from "../../public/images/servicedetail.png"
import AOS from "aos"
import 'aos/dist/aos.css';
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className='w-full '>
        <Header/>

        <div className='flex justify-between items-center lg:flex-row flex-col lg:h-[50rem]  relative' data-aos="fade-up">

            <div className='flex flex-col items-center p-[100px] mt-[20px] lg:mt-0'>
                <p className='font-bold text-6xl heading'>Web Design & Competitor Analysis</p>
                <p className='mid-heading font-bold text-2xl mt-12'>This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.</p>
                <p className='text leading-7 mt-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word</p>
            </div>

            <div className='w-full lg:w-[75vw] flex-1 h-full overflow-hidden'>
    <Image src={servicedetail} alt="" className='w-full h-full object-cover'/>
  </div>
        </div>
    </div>
  )
}

export default Hero