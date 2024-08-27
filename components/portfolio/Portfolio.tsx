import React, {useState} from "react";
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
  import {PPC, SEO, WEBSITE} from "./PortfolioArray"

  const Portfolio = () => {
    const [portfolio, setPortfolio] = useState(PPC);

    const [isAllActive, setAllActive] = useState(true);
    const [isGoogleAdsActive, setGoogleAdsActive] = useState(false);
    const [isWebsiteDevelopmentActive, setWebsiteDevelopmentActive] = useState(false);
    const [isSEOActive, setSEOActive] = useState(false);
  
    // Step 2: Create onClick handlers for each category
    const handleAllClick = () => {
      setAllActive(true);
      setGoogleAdsActive(false);
      setWebsiteDevelopmentActive(false);
      setSEOActive(false);
      setPortfolio(PPC)
    };
  
    const handleGoogleAdsClick = () => {
      setAllActive(false);
      setGoogleAdsActive(true);
      setWebsiteDevelopmentActive(false);
      setSEOActive(false);
      setPortfolio(PPC)
    };
  
    const handleWebsiteDevelopmentClick = () => {
      setAllActive(false);
      setGoogleAdsActive(false);
      setWebsiteDevelopmentActive(true);
      setSEOActive(false);
      setPortfolio(WEBSITE);
    };
  
    const handleSEOClick = () => {
      setAllActive(false);
      setGoogleAdsActive(false);
      setWebsiteDevelopmentActive(false);
      setSEOActive(true);
      setPortfolio(SEO)
    };
  

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[80%] flex flex-col items-start justify-center m-[30px]">
      <div className="flex flex-row gap-4 text-center breakpoint ml-3">
      <p
        className={`font-bold cursor-pointer text ${isAllActive ? 'text-[#FF8E2B]' : ''}`}
        onClick={handleAllClick}
      >
        All
      </p>
      <p
        className={`font-bold cursor-pointer text ${isGoogleAdsActive ? 'text-[#FF8E2B]' : ''}`}
        onClick={handleGoogleAdsClick}
      >
        Google Ads
      </p>
      <p
        className={`font-bold cursor-pointer text ${isWebsiteDevelopmentActive ? 'text-[#FF8E2B]' : ''}`}
        onClick={handleWebsiteDevelopmentClick}
      >
        Website Development
      </p>
      <p
        className={`font-bold cursor-pointer text ${isSEOActive ? 'text-[#FF8E2B]' : ''}`}
        onClick={handleSEOClick}
      >
        SEO
      </p>

</div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {portfolio.map((item: any) => {
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
                        <p className="text-2xl font-bold  heading">
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
