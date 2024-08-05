import React from "react";
import setup from "../../public/images/setup.svg";
import land from "../../public/images/land.svg";
import optimize from "../../public/images/optimize.svg";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { Button } from "../ui/button";

const AdsService = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[80%] flex flex-col items-center justify-center">
        <p className="heading text-2xl">
          Google Ads Management Services that Make a Difference
        </p>
        <div className="grid grid-cols-3 gap-3 m-6">
          <div className="flex flex-col w-[90%] p-5 shadow-2xl">
            <p>Google Ads Setup and Launch</p>
            <Image src={setup} alt="" className="w-[200px] h-[200px]" />
            <p>
              Advanced Google campaign and ads setup adhering to best practices,
              with strategic targeting to maximize ROI.
            </p>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Account Audit</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Competitor Research</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>CRM Research</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Strategy</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Tracking</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Search Campaign</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Shopping Campaign</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Display Campaign</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Retargeting Campaign</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Video</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>SKAG</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Keyword Optimization</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Bid Strategy</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Ads/Copy</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Reporting</p>
            </div>
            <Button className="w-[200px] rounded-[100px] mt-3">GET FREE PURPOSAl</Button>
          </div>

          <div className="flex flex-col w-[90%] p-5 shadow-2xl">
            <p>Landing Page Design</p>
            <Image src={land} alt="" className="w-[200px] h-[200px]" />
            <p>
              No cookie-cutter approach; instead, custom landing pages tailored
              for search campaigns and fully integrated with CRM.
            </p>
            <div className="flex flex-row items-center mt-2 gap-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>No Templates</p>
            </div>
            <div className="flex flex-row items-center mt-2 gap-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Custom Design</p>
            </div>
            <div className="flex flex-row items-center mt-2 gap-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>CRM Integration</p>
            </div>
            <div className="flex flex-row items-center mt-2 gap-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Custom Images</p>
            </div>
            <div className="flex flex-row items-center mt-2 gap-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Optimized Videos</p>
            </div>
            <div className="flex flex-row items-center mt-2 gap-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Engaging Copy</p>
            </div>
            <div className="flex flex-row items-center mt-2 gap-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>CTA</p>
            </div>
            <div className="flex flex-row items-center mt-2 gap-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Social Proof</p>
            </div>
            <div className="flex flex-row items-center mt-2 gap-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Dynamic Content</p>
            </div>
            <div className="flex flex-row items-center mt-2 gap-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Heat Maps</p>
            </div>
            <div className="flex flex-row items-center mt-2 gap-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Tracking</p>
            </div>
            <div className="flex flex-row items-center mt-2 gap-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Device Customization</p>
            </div>
            <div className="flex flex-row items-center mt-2 gap-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>Attribution</p>
            </div>
            <div className="flex flex-row items-center mt-2 gap-2">
              <p className="p-1 rounded-xl bg-orange-700 text-white">
                <FaCheck />
              </p>
              <p>A/B Testing</p>
            </div>
            <Button className="w-[200px] rounded-[100px] mt-3">GET FREE PURPOSAl</Button>

          </div>

          <div className="flex flex-col w-[90%] p-5 shadow-2xl">
            <p>Google Ads Optimization</p>
            <Image src={optimize} alt="" className="w-[200px] h-[200px]" />
            <p>
              Utilize split testing, comprehensive reporting, and data-driven
              campaign optimization to improve conversions.
            </p>
            <div className='flex flex-row items-center mt-2 gap-2'>
      <p className="p-1 rounded-xl bg-orange-700 text-white"><FaCheck /></p>
      <p>A/B Testing Ads</p>
    </div>
    <div className='flex flex-row items-center mt-2 gap-2'>
      <p className="p-1 rounded-xl bg-orange-700 text-white"><FaCheck /></p>
      <p>A/B Testing Landing Pages</p>
    </div>
    <div className='flex flex-row items-center mt-2 gap-2'>
      <p className="p-1 rounded-xl bg-orange-700 text-white"><FaCheck /></p>
      <p>Dynamic Copy Testing</p>
    </div>
    <div className='flex flex-row items-center mt-2 gap-2'>
      <p className="p-1 rounded-xl bg-orange-700 text-white"><FaCheck /></p>
      <p>Keyword Optimization</p>
    </div>
    <div className='flex flex-row items-center mt-2 gap-2'>
      <p className="p-1 rounded-xl bg-orange-700 text-white"><FaCheck /></p>
      <p>Improve Quality Score</p>
    </div>
    <div className='flex flex-row items-center mt-2 gap-2'>
      <p className="p-1 rounded-xl bg-orange-700 text-white"><FaCheck /></p>
      <p>Bidding Strategy Refinement</p>
    </div>
    <div className='flex flex-row items-center mt-2 gap-2'>
      <p className="p-1 rounded-xl bg-orange-700 text-white"><FaCheck /></p>
      <p>Enhancing Geo-targeting</p>
    </div>
    <div className='flex flex-row items-center mt-2 gap-2'>
      <p className="p-1 rounded-xl bg-orange-700 text-white"><FaCheck /></p>
      <p>Manual Bid Optimization</p>
    </div>
    <div className='flex flex-row items-center mt-2 gap-2'>
      <p className="p-1 rounded-xl bg-orange-700 text-white"><FaCheck /></p>
      <p>Automatic Bid Optimization</p>
    </div>
    <div className='flex flex-row items-center mt-2 gap-2'>
      <p className="p-1 rounded-xl bg-orange-700 text-white"><FaCheck /></p>
      <p>Exploring Scaling Opportunities</p>
    </div>
    <div className='flex flex-row items-center mt-2 gap-2'>
      <p className="p-1 rounded-xl bg-orange-700 text-white"><FaCheck /></p>
      <p>Reporting</p>
    </div>
    <Button className="w-[200px] rounded-[100px] mt-3">GET FREE PURPOSAl</Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsService;
