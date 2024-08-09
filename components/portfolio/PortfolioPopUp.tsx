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
            // console.log("result", result)
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
        <div className="flex flex-col md:items-center items-start md:justify-center">

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
      <p className="text mt-3 text-left">
        {data.client}
      </p>

      <p className="mt-[40px] mid-heading text-2xl font-bold">The Problem</p>
      <p className="mt-3 text text-left">
        {data.problem}
      </p>
      </div>

      <p className="mt-[40px] mid-heading text-2xl font-bold flex items-center justify-center">The Solution</p>
      <p className="mt-3 text text-left">
      {data.solution?.text}
      </p>

      {data.solution?.phase1 && (
  <div className="flex items-start text flex-col mt-7">
    <p className="font-bold">{data.solution.phase1.title}</p>
    {data.solution.phase1.campaignSetup && (
      <ul className="list-disc ml-4">
        {data.solution.phase1.campaignSetup.map((item:string, index:number) => (
          <li key={index} className="text-left">{item}</li>
        ))}
      </ul>
    )}
    {data.solution.phase1.conversionTracking && (
      <ul className="list-disc ml-4 mt-2">
        {data.solution.phase1.conversionTracking.map((item:string, index:number) => (
          <li key={index} className="text-left">{item}</li>
        ))}
      </ul>
    )}
  </div>
)}

{/* Phase 2 */}
{data.solution?.phase2 && (
  <div className="flex items-start text flex-col mt-7">
    <p className="font-bold">{data.solution.phase2.title}</p>
    {data.solution.phase2.ongoingOptimization && (
      <ul className="list-disc ml-4">
        {data.solution.phase2.ongoingOptimization.map((item:string, index:number) => (
          <li key={index} className="text-left">{item}</li>
        ))}
      </ul>
    )}
    {data.solution.phase2.results && (
      <ul className="list-disc ml-4 mt-2">
        {data.solution.phase2.results.map((item:string, index:number) => (
          <li key={index} className="text-left">{item}</li>
        ))}
      </ul>
    )}
  </div>
)}

{/* Phase 3 */}
{data.solution?.phase3 && (
  <div className="flex items-start text flex-col mt-7">
    <p className="font-bold">{data.solution.phase3.title}</p>
    {data.solution.phase3.sustainedSuccess && (
      <ul className="list-disc ml-4">
        {data.solution.phase3.sustainedSuccess.map((item:string, index:number) => (
          <li key={index} className="text-left">{item}</li>
        ))}
      </ul>
    )}
  </div>
)}

      <div className="flex items-start text flex-col">
        <p className="font-bold">{data.solution?.point1}</p>
        <ul className="list-disc ml-4">
          {data.solution?.seo?.map((item:any, index:any)=>{
            return(
              <li>{item}</li>
            )
          })}
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

      <div className="flex items-start text flex-col  mt-7">
        <p className="font-bold">{data.solution?.point3}</p>
        <ul className="list-disc ml-4">
          {data.solution?.seoCampaign?.map((item:any, index:any)=>{
            return(
              <li>{item}</li>
            )
          })}
        </ul>
      </div>

      <div className="flex items-start text flex-col  mt-7">
        <p className="font-bold">{data.solution?.point4}</p>
        <ul className="list-disc ml-4">
          {data.solution?.contentMarketing?.map((item:any, index:any)=>{
            return(
              <li>{item}</li>
            )
          })}
        </ul>
      </div>

      <div className="flex items-start text flex-col  mt-7">
        <p className="font-bold">{data.solution?.point5}</p>
        <ul className="list-disc ml-4">
          {data.solution?.integratedCampaignManagement?.map((item:any, index:any)=>{
            return(
              <li>{item}</li>
            )
          })}
        </ul>
      </div>

      <p className="mt-[40px] mid-heading text-2xl font-bold flex justify-center">The Result</p>
      {data.result && (
  <div className="flex flex-col mt-7">
    {/* Render the introductory text */}
    {data.result.text && (
      <p className="font-bold">{data.result.text}</p>
    )}

    {/* Render PPC Leads */}
    {data.result.point1 && data.result.leadGeneration && (
      <div className="mt-4">
        <p className="font-semibold">{data.result.point1}</p>
        <ul className="list-disc ml-4">
          {data.result.leadGeneration.map((item:any, index:any) => (
            <li key={index} className="text-left">{item}</li>
          ))}
        </ul>
      </div>
    )}

    {/* Render Google Ads Clicks */}
    {data.result.point2 && data.result.digitalPresence && (
      <div className="mt-4">
        <p className="font-semibold">{data.result.point2}</p>
        <ul className="list-disc ml-4">
          {data.result.digitalPresence.map((item:any, index:any) => (
            <li key={index} className="text-left">{item}</li>
          ))}
        </ul>
      </div>
    )}

    {/* Render PPC Traffic */}
    {data.result.point3 && data.result.adCampaigns && (
      <div className="mt-4">
        <p className="font-semibold">{data.result.point3}</p>
        <ul className="list-disc ml-4">
          {data.result.adCampaigns.map((item:any, index:any) => (
            <li key={index} className="text-left">{item}</li>
          ))}
        </ul>
      </div>
    )}

    {/* Render Site Conversions */}
    {data.result.point4 && data.result.coversions && (
      <div className="mt-4">
        <p className="font-semibold">{data.result.point4}</p>
        <ul className="list-disc ml-4">
          {data.result.coversions.map((item:any, index:any) => (
            <li key={index} className="text-left">{item}</li>
          ))}
        </ul>
      </div>
    )}

    {/* Render Cost Efficiency */}
    {data.result.point5 && data.result.traffic && (
      <div className="mt-4">
        <p className="font-semibold">{data.result.point5}</p>
        <ul className="list-disc ml-4">
          {data.result.traffic.map((item:any, index:any) => (
            <li key={index} className="text-left">{item}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
)}
      {/* <p className="mt-3 text flex justify-center">
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
      </div> */}


    </div>
        )}

    </>

  );
};

export default PortfolioPopUp;
