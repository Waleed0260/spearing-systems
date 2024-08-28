import React, {useEffect} from 'react'
import Header from '../home/Header'
import Image from 'next/image'
import servicedetail from "../../public/images/servicedetail.png"
import AOS from "aos"
import 'aos/dist/aos.css';
const Hero = (id:any) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  const formattedId = id.id.replace(/_/g, ' ');

  return (
    <div className='w-full flex flex-col'>
    <Header/>
    <div
  className="w-full flex flex-col items-center justify-center bg-cover h-[29rem] overflow-hidden relative"
>
  <div
    className="w-full h-full flex flex-col items-center justify-center bg-cover bg-center hero-animation"
    style={{ backgroundImage: `url('/images/aboutBanner.png')` }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <p className="font-bold text-3xl text-white heading relative uppercase">{formattedId}</p>
  </div>
</div>
    </div>  
  )
}

export default Hero