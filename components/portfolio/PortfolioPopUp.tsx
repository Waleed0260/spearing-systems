"use client"
import React, {useState, useEffect} from "react";
import problem from "../../public/images/problem.jpg";
import solution from "../../public/images/solution.jpg";
import result from "../../public/images/result.png";
import Image from "next/image";
// import demoCase from "../../public/images/demoCase.jpg";
import portLogo from "../../public/images/portLogo.png"

import Loader from "../home/Loader";
const PortfolioPopUp = ({id}:any) => {
    console.log("id", id)
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(`/api/caseStudies/${id}`);
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await res.json();
            setData(result);
            setLoading(false)
            console.log("result", result)
          } catch (error) {
            // setError(error.message);
            console.log(error)
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, [id]);
  return (
    <>
    {loading ? (
        <Loader/>
    ) : (

    <div className="flex flex-col text-black bg-[#0D2137]  text-white">
        <div className="flex flex-col items-center justify-center">

      <Image
        src={data.img}
        alt=""
        className=" overflow-hidden"
      />
      <p className="font-bold text-4xl heading mt-3">
        {data.title}
      </p>
      {/* <p className='text text-xl mt-1'>Lorem ipsum dolor sit amet.</p>
        <p className='text-3xl text mt-4'>How Spiral Marketing Orchestrated a 65,167% Increase in Paid Traffic for This SaaS Technology Company</p> */}
      <p className="font-bold text-2xl mid-heading mt-4">The Client</p>
      <p className="text mt-3 text-center">
        {data.client}
      </p>

      <p className="mt-[40px] mid-heading text-2xl font-bold">The Problem</p>
      <p className="mt-3 text text-center">
        {data.problem}
      </p>
      </div>

      <p className="mt-[40px] mid-heading text-2xl font-bold flex items-center justify-center">The Solution</p>
      <p className="mt-3 text flex justify-center">
      {data.solution?.text}
      </p>

      <div className="flex items-start text flex-col">
        <p className="font-bold">{data.solution?.point1}</p>
        <ul className="list-disc ml-4">
          {data.solution?.seo?.map((item:any, index:any)=>{
            return(
              <li>{item}</li>
            )
          })}
          {/* <li>
            Conducted an in-depth SEO audit to identify areas for improvement.
          </li>
            <li>
              Optimized website content with targeted keywords to improve search
              engine rankings.
            </li>
            <li>
              Implemented technical SEO enhancements to boost site performance
              and user experience.
            </li> */}
        </ul>
      </div>

      <div className="flex items-start text flex-col  mt-7">
        <p className="font-bold">{data.solution?.point2}</p>
        <ul className="list-disc ml-4">
          {data.solution?.adsCampaign?.map((item:any, index:any)=>{
            return(
              <li>{item}</li>
            )
          })}
        </ul>
      </div>

      <p className="mt-[40px] mid-heading text-2xl font-bold flex justify-center">The Result</p>
      <p className="mt-3 text flex justify-center">
      Our collaborative efforts yielded significant results for THINK:      </p>

      <div className="flex items-start text flex-col">
        <p className="font-bold">Increased Lead generation</p>
        <ul className="list-disc ml-4">
          <li>
            Conducted an in-depth SEO auEnhanced lead generation through diverse paid advertising channels, resulting in a higher volume of quality leads.dit to identify areas for improvement.
          </li>
        </ul>

        <p className="font-bold mt-6">Improved Digital Presence</p>
        <ul className="list-disc ml-4">
          <li>
          Achieved better search engine rankings, increasing organic traffic to the website.
          </li>
          <li>
          Successfully showcased new product lines through targeted content, attracting potential clients.
          </li>
        </ul>
        <p className="font-bold mt-6">Optimized Ad Campaigns</p>
        <ul className="list-disc ml-4">
          <li>
          Delivered higher click-through rates (CTR) and conversions from Google AdWords campaigns, maximizing THINK’s advertising budget.          </li>
        </ul>
      </div>


    </div>
        )}

    </>

  );
};

export default PortfolioPopUp;
