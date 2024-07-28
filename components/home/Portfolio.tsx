import React from 'react'
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

const Portfolio = () => {
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
        <div className='grid grid-cols-3 gap-4 m-3'>
            {portfolio.map((item:any)=>{
                return(
                    <div className='flex flex-col' key={item.id}>
     <div className='relative h-[475px] w-[366px]'>
      <Image src={item.img} alt="" className='w-full h-full' />
      <div className='absolute inset-0 bg-black opacity-50'></div>
    </div>

                        <Dialog>
          <DialogTrigger>
          <div className='w-[310px] bg-black text-white relative bottom-[140px] flex justify-evenly flex-row hover:bg-orange-700 transition-all'>
                            <div>
                            <p className='p-4 mid-heading text'>{item.bold}</p>
                            <p className='p-4 font-bold text-4xl heading'>{item.heading}</p>
                            </div>
                            <div>
                            <p className='text-white p-6'><FaArrowRight/></p>
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