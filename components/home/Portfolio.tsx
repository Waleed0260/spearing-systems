import React, {useEffect} from 'react'
import portfolio1 from "../../public/images/portfolio1.png"
import portfolio2 from "../../public/images/portfolio2.png"
import portfolio3 from "../../public/images/portfolio3.png"
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import popup1 from "../../public/images/popup1.jpg"

  import AOS from "aos"
import 'aos/dist/aos.css';


const Portfolio = () => {
  useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration
        once: true, // Whether animation should happen only once - while scrolling down
      });
    }, []);
    const portfolio = [
        {
            id:1,
            img: portfolio1,
            bold: "leadership",
            heading: "Business growth"
        },
        {
            id:2,
            img: portfolio2,
            bold: "Management",
            heading: "management growth"
        },
        {
            id:3,
            img: portfolio3,
            bold: "strategy",
            heading: "Finance consulting"
        },
    ]
  return (
    <div className='flex flex-col justify-center items-center  m-[50px]'>
        <p className='font-bold text-4xl heading'>
            portfolio
        </p>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 m-3'>
            {portfolio.map((item:any)=>{
                return(
                    <div className='flex flex-col' key={item.id} data-aos="fade-up">
     <div className='relative h-[475px] md:w-[25vw] w-[70vw]'>
      <Image src={item.img} alt="" className='w-full h-full' />
      <div className='absolute inset-0 bg-black opacity-50'></div>
    </div>

                        <Dialog>
          <DialogTrigger>
          <div className='md:w-[21vw] w-[60vw] bg-black text-white relative bottom-[140px] flex justify-evenly hover:bg-orange-700 transition-all'>
                            <div>
                            <p className='p-4 mid-heading text'>{item.bold}</p>
                            <p className='p-4 font-bold md:text-4xl text-2xl heading'>{item.heading}</p>
                            </div>
                        </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[925px] h-[85%] overflow-auto">
            <DialogHeader>
              {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
              <DialogDescription>
                <div>
                <Image src={portfolio1} alt='' />
                </div>
                <b className='font-bold text-4xl'>Developing A Small Finance Framework                </b>
                <p>Business growth is a phenomenon that occurs when business owners, employees and outside factors influence the success of a company. A business grows when it expands a customer base, increases revenue or produces more product. Growth is the goal of most businesses and is the reason behind many decisions that affect the daily workings of a company both internally and externally. Business growth is impacted by consumer trends, market opportunities and decisions made by company leadership.</p>

                <b className='font-bold text-3xl'> Finance growth strategies</b>
                <ul>
                    <li>Market penetration</li>
                    <li>Product development</li>
                    <li>Market expansion</li>
                    <li>New businee models</li>
                    <li>Market suggestions</li>
                </ul>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
                     
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Portfolio