"use client"
import CallTo from '@/components/home/CallTo'
import CreativeWebsite from '@/components/home/CreativeWebsite'
import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import Loader from '@/components/home/Loader'
import AdsManagement from '@/components/serviceDetail/AdsManagement'
import AdsService from '@/components/serviceDetail/AdsService'
import Benefits from '@/components/serviceDetail/Benefits'
import Choose from '@/components/serviceDetail/Choose'
import Email from '@/components/serviceDetail/Email'
import Features from '@/components/serviceDetail/Features'
import Help from '@/components/serviceDetail/Help'
import Hero from '@/components/serviceDetail/Hero'
import Portfolio from '@/components/serviceDetail/Portfolio'
import Testimonial from '@/components/serviceDetail/Testimonial'
import Visibility from '@/components/serviceDetail/Visibility'
import WhyUs from '@/components/serviceDetail/WhyUs'
import React, {useEffect, useState} from 'react'

const page = ({ params }: { params: { ID: string } }) => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(`/api/serviceDetails/${params.ID}`);
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
      }, [params.ID]);

  return (
    <>
    {loading ? (
      <Loader/>
    ): (
      <>
      {/* <Header color="[#0D2137]"/> */}
      <Hero id={params.ID}/>
    <Visibility heading={data?.heading} text={data?.text} CTA={data?.CTA} img={data?.img}/>
    <WhyUs help={data?.help}/>
    <Choose choose={data?.choose}/>
    {data?.video_id === "website_development" ? <CreativeWebsite/>:null}
    <Help process={data?.process}/>
    {data.video_id === "google_ads" || data.video_id === "website_development" ? null : <Benefits benefits={data?.benefits}/>}
    
    {data?.video_id === "google_ads" ? 
      <>
    {/* <AdsManagement/> */}
    <AdsService/> 
    </>: data?.video_id === "email_marketing" ? <Email />:null}

    {/* <Portfolio id={params.ID}/> */}
    <Testimonial testimonial={data?.testimonials}/>
    <CallTo tell={data?.tellUs}/>
    <Footer/>
    </>
  )}
    </>
  )
}

export default page