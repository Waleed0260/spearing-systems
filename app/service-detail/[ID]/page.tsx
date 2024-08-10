"use client"
import CallTo from '@/components/home/CallTo'
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
import Portfolio from '@/components/serviceDetail/Portfolio'
import Results from '@/components/serviceDetail/Results'
import Tell from '@/components/serviceDetail/Tell'
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
      <Header color="[#0D2137]"/>
    <Visibility heading={data.heading} text={data.text} CTA={data.CTA} id={params.ID}/>
    <WhyUs help={data.help}/>
    <Choose choose={data.choose}/>
    <Help process={data.process}/>
    <Benefits benefits={data.benefits}/>
    {data.video_id === "page_per_click" ? 
      <>
    <AdsManagement/>
    <AdsService/> 
    </>:data.video_id === "website_development" ? <Features features={data.features}/>: data.video_id === "email_marketing" ? <Email />:null}

    <Portfolio id={params.ID}/>
    <Testimonial testimonial={data.testimonials}/>
    <CallTo tell={data.tellUs}/>
    <Footer/>
    </>
  )}
    </>
  )
}

export default page