import React from "react";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import adult from "../../public/images/adult.png";
import technical from "../../public/images/technical.png";
import external from "../../public/images/external.png";
import internal from "../../public/images/internal.png";
import Image from "next/image";
const Help = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[80%] flex flex-col items-center justify-center mt-[30px] m-[30px]">
        <p className="font-bold heading text-4xl">Our Proven SEO Process
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4 w-full max-w-6xl">
        <div className="flex flex-col items-center w-[32vw] p-3 m-3 ">
            <div className="">
                <Image
                  src={adult}
                  alt="image"
                  className="w-full h-full overflow-hidden"
                />
              </div>
              <p className="mid-heading">Comprehensive SEO Audit
              </p>
              <p className="text">
              We conduct an in-depth analysis of your website to identify strengths, weaknesses, and opportunities.

              </p>
            </div>

            <div className="flex flex-col items-center w-[32vw] p-3 m-3 ">
            <div className="">
                <Image
                  src={technical}
                  alt="image"
                  className="w-full h-full overflow-hidden"
                />
              </div>
              <p className="mid-heading">Technical SEO</p>
              <p className="text">
              Our experts optimize your website's structure, speed, and performance to ensure it meets search engine standards.

              </p>
            </div>

            <div className="flex flex-col items-center w-[32vw] p-3 m-3 ">
            <div className="">
                <Image
                  src={external}
                  alt="image"
                  className="w-full h-full overflow-hidden"
                />
              </div>
              <p className="mid-heading">External SEO</p>
              <p className="text">
              Our link-building strategies enhance your website's authority and credibility, driving higher rankings.
              </p>
            </div>

            <div className="flex flex-col items-center w-[32vw] p-3 m-3 ">
            <div className="">
                <Image
                  src={internal}
                  alt="image"
                  className="w-full h-full overflow-hidden"
                />
              </div>
              <p className="mid-heading"> INTERNAL SEO</p>
              <p className="text">
              We enhance your content with strategic keyword optimization, ensuring it resonates with your target audience.

              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Help;
