import React from "react";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import adult from "../../public/images/adult.png";
import technical from "../../public/images/technical.png";
import external from "../../public/images/external.png";
import internal from "../../public/images/internal.png";
import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Help = ({process}:any) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[80%] flex flex-col items-center justify-center mt-[60px] ">
        <p className="font-bold heading sm:text-4xl text-2xl text-center leading-tight">{process?.heading}
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1  mt-4 w-full max-w-6xl gap-8 mx-auto">
          {process?.process.map((item:any, index:any)=>{
            return(
              <div key={index} className={`flex flex-col items-center w-full sm:w-auto p-3 rounded-lg shadow-2xl transition duration-300 ease-in-out ${
                [1, 3, 5].includes(index) ? 'md:ml-8' : ''
              } hover:bg-[#0D2137] hover:text-white`}>
                {item.icon ? <i className={`fas fa-${item.icon}`} style={{ fontSize: '2rem', padding:"15px", borderRadius:"100px", color:"#FF8E2B" }}></i>: 
                <>
            <div className="">
                <Image
                  src={item.img ? item.img : technical}
                  alt="image"
                  className="w-full h-full overflow-hidden"
                  />
              </div>
                  </>}
              <p className="mid-heading">{item.heading}
              </p>
              <p className="text">
                {item.text}
              </p>
            </div>
            )
          })}
          </div>
      </div>
    </div>
  );
};

export default Help;
