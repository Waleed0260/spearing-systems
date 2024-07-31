import React, {useEffect} from 'react'
import case4 from "../../public/images/case4.png"
import case5 from "../../public/images/case5.png"
import Image from 'next/image'
import AOS from "aos"
import 'aos/dist/aos.css';
const Client = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className='w-[80%] flex md:flex-row flex-col jusitfy-between m-[50px]'>
        <div className='flex flex-col' data-aos="fade-left">
            <p className='font-bold text-3xl heading'>The Client</p>
            <p className='text mt-[20px]'>Websites can no longer just make sales, as in this day and age they also need to be able to engage and entertain. This is where we can help.</p>
            <p className='mt-[20px] text'>Now in their fifth decade, they continue that approach with a commitment to professionalism,lasting relationships, and leadership among groundwater professionals in California.</p>
            <div>
            <Image src={case4} alt="" className='w-[460px] h-[298px]'/>
            </div>
        </div>

        <div className='flex flex-col mt-[20px] md:mt-0' data-aos="fade-right">
            <p className='font-bold text-3xl heading'>The Goal</p>
            <p className='text mt-[20px]'>Websites can no longer just make sales, as in this day and age they also need to be able to engage and entertain. This is where we can help.</p>
            <Image src={case5} alt="" className='w-[300px] h-[250px]'/>
        </div>
    </div>
  )
}

export default Client