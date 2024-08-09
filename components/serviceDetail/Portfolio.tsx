"use client"
import React, {useEffect} from 'react'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
  } from "@/components/ui/dialog";

  import AOS from "aos"
import 'aos/dist/aos.css';
import {PPC, seo, website} from "../portfolio/PortfolioArray"
import PortfolioPopUp from '../portfolio/PortfolioPopUp'
const Portfolio = (id:any) => {
    let array = PPC;
    if(id.id === "search_engine") {
        array = seo;
    } else if(id.id == "website_development"){
        array = website
    }
    else if (id.id ==="page_per_click") {
        array = PPC;
    } else {
        array = PPC
    }
  useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration
        once: true, // Whether animation should happen only once - while scrolling down
      });
    }, []);
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='flex flex-col w-[80%] m-[30px] items-center justify-center'>

        <p className='font-bold text-4xl heading'>
        Explore Our Cutting-Edge Projects
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {array.slice(0,3).map((item: any) => {
            return (
                <>
              <Dialog key={item.id}>
          <DialogTrigger>
          <div className="flex p-[20px]" >
                  <div className="relative port-box">
                    <Image
                      src={item.image}
                      alt=""
                      className="md:w-[27vw] sm:w-[39vw] w-[70vw] h-[500px] rounded-md"
                      />
                    <div className="absolute inset-0 flex items-center justify-center ">
                      <div className="text-left bg-[#0D2137] bg-opacity-50 p-4 m-6 text-white animation">
                        <p>{item.title}</p>
                        <p className="text-2xl font-bold heading">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[90vw] h-[85%] overflow-auto bg-[#0D2137] border-none text-white">
            <DialogHeader>
              {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
              <DialogDescription>
                <div className="flex flex-col items-start">
                  <PortfolioPopUp id={item.link}/>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
                      </>
            );
          })}
        </div>

      </div>

    </div>
  )
}

export default Portfolio