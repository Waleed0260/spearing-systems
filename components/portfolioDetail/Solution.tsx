import React, {useEffect} from "react";
import { CiLaptop } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { AiTwotoneCreditCard } from "react-icons/ai";
import AOS from "aos"
import 'aos/dist/aos.css';
const Solution = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="w-[80%] flex flex-row justify-between m-[30px]" data-aos='fade-up'>
      <div className="flex flex-col w-[50%]">
        <p className="heading text-3xl font-bold">Our Solution</p>
        <p className="mid-heading mt-[20px]">
          Our crew proudly accomplished the approach of custom user interaction
          by implementing unique water transitions & subtle animations. All
          photography work throughout the site was custom acquired and altered
          to produce an impactful and consistent theme from every page to each
          unique project.
        </p>

        <p className="heading text-xl font-bold mt-[20px]">
          Here’s how we make that happen:
        </p>
        <p>
          Our crew proudly accomplished the approach of custom user interaction
          by implementing unique water transitions & subtle animations.
        </p>
      </div>
      <div className="w-[50%]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-3">
            <p className="text-4xl">
              <CiLaptop />
            </p>
            <div className="flex flex-col gapa-4">
              <p>FULL WEBSITE DEVELOPMENT</p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <p className="text-4xl">
              <HiOutlineSpeakerphone />
            </p>
            <div className="flex flex-col gapa-4">
              <p>UI/UX</p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <p className="text-4xl">
              <AiTwotoneCreditCard />
            </p>
            <div className="flex flex-col gapa-4">
              <p>Mobile optimization</p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
