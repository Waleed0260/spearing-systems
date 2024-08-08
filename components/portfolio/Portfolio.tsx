import React from "react";
import case1 from "../../public/images/case1.png";
import case2 from "../../public/images/case2.png";
import case3 from "../../public/images/case3.png";
import case4 from "../../public/images/case4.png";
import case5 from "../../public/images/case5.png";
import case6 from "../../public/images/case6.png";
import case7 from "../../public/images/case7.png";
import case8 from "../../public/images/case8.png";
import case9 from "../../public/images/case9.png";
import Image from "next/image";
// import portfolio1 from "../../public/images/portfolio1.png"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import PortfolioPopUp from "./PortfolioPopUp";
  import {PPC} from "./PortfolioArray"
  const Portfolio = () => {

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[80%] flex flex-col items-start justify-center m-[30px]">
        <div className="flex flex-row gap-4 ml-[20px]">
          <p className="mid-heading font-semibold text-xl">ALL</p>
          <p className="mid-heading font-semibold text-xl">Google Ads</p>
          <p className="mid-heading font-semibold text-xl">Website Development</p>
          <p className="mid-heading font-semibold text-xl">SEO</p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {PPC.map((item: any) => {
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
  );
};

export default Portfolio;
