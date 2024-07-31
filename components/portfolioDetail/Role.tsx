import React, {useEffect} from 'react'
import strategy from "../../public/images/strategy.png"
import ux from "../../public/images/ux.png"
import response from "../../public/images/response.png"
import coding from "../../public/images/coding.png"
import vector from "../../public/images/vector.png"
import Image from 'next/image'
import AOS from "aos"
import 'aos/dist/aos.css';
const Role = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
        <div className='md:w-[80%] w-[85vw] flex md:flex-row flex-col justify-between m-[70px]' data-aos="fade-up">
            <div className='flex flex-col md:w-[50%]'>
                <p className='heading font-bold text-2xl '>OUR ROLE</p>
                <div className='grid grid-cols-4 mt-[30px]'>
                    <div>
                        <Image src={strategy} alt="" className="w-[50px] h-[50px]"/>
                        <b className='font-bold heading'>STRATEGY</b>
                    </div>
                    <div>
                        <Image src={ux} alt="" className="w-[50px] h-[50px]"/>
                        <b className='font-bold heading'>UI/UX</b>
                    </div>
                    <div>
                        <Image src={response} alt="" className="w-[50px] h-[50px]"/>
                        <b className='font-bold heading'>Responsive</b>
                    </div>
                    <div>
                        <Image src={coding} alt="" className="w-[50px] h-[50px]"/>
                        <b className='font-bold heading'>DEVELOPMENT</b>
                    </div>
                </div>

                <p className='text mt-[40px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even Lorem Ipsum</p>
            </div>

            <div className='md:w-[50%]'>
                <Image src={vector} alt="" className=' h-[250px]'/>
            </div>
        </div>
  )
}

export default Role