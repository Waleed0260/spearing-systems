"use client"
import React, {useEffect} from "react";
import { Button } from "../ui/button";
import { FaPlay } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AOS from "aos"
import 'aos/dist/aos.css';

const Video = () => {
  useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration
        once: true, // Whether animation should happen only once - while scrolling down
      });
    }, []);
  return (
    <div
      className="relative w-full h-[40rem] p-6 bg-black flex md:flex-row bg-cover bg-center flex-col justify-around items-center"
      style={{
        backgroundImage: `url('https://up2client.com/envato/azota/assets/images/hero/hero-1.jpg')`,
      }}
      data-aos="fade-up"
    >
            <div className='absolute inset-0 bg-black opacity-50'></div>

      <div className=" relative z-10 flex flex-col w-[90%] text-white">
        <p className="font-bold text-4xl heading" data-aos="fade-up">
          Mission is to Protect your Businesses & Much More
        </p>
        <Button className="mt-2 w-[200px] rounded-[100px] font-bold bg-transparent text-white" variant={"outline"} data-aos="fade-right">CHECK OUT PLAN</Button>
      </div>

      <div>
        <Dialog>
          <DialogTrigger>
            <div className="rotate-svg">
                <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="70" cy="70" r="69" stroke="#FD8558" strokeWidth="2" strokeDasharray="8 8"></circle>
								</svg>
            </div>
            {/* <div className="bg-gray-600 rounded-600px"> */}
              <p className="text-2xl font-bold bg-gray-600 relative bottom-[125px] left-[20px] rounded-[50px] flex items-center w-[100px] h-[100px] flex items-center justify-center">
                <FaPlay />
              </p>
            {/* </div> */}
          </DialogTrigger>
          <DialogContent className="sm:max-w-[925px] h-[85%] ">
            <DialogHeader>
              {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
              <DialogDescription>
                <iframe
                  width="850"
                  height="515"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Video;
