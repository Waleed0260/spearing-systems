import React from "react";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import adult from "../../public/images/adult.png";
import technical from "../../public/images/technical.png";
import external from "../../public/images/external.png";
import internal from "../../public/images/internal.png";
import Image from "next/image";
const Help = ({process}:any) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[80%] flex flex-col items-center justify-center mt-[30px] m-[30px]">
        <p className="font-bold heading text-4xl">{process?.heading}
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4 w-full max-w-6xl">
          {process?.process.map((item:any)=>{
            return(
              <div className="flex flex-col items-center w-[32vw] p-3 m-3 ">
            <div className="">
                <Image
                  src={adult}
                  alt="image"
                  className="w-full h-full overflow-hidden"
                />
              </div>
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
