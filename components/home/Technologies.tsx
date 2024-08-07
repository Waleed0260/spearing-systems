import React from 'react'
import google from "../../public/images/google.png"
import Image from 'next/image'
import adobe from "../../public/images/adobe.png"
import meta from "../../public/images/meta.png"
import shopify from "../../public/images/Shopify.png"
import googleads from "../../public/images/googleads.png"
import hubspot from "../../public/images/hubspot.png"
import kyaviyo from "../../public/images/kyaviyo.png"
import magento from "../../public/images/magento.png"
import react from "../../public/images/react.png"
import woocommerce from "../../public/images/woocommerce.png"
import wordpress from "../../public/images/wordpress.png"

const Technologies = () => {
  return (
    <div className='flex flex-col items-center '>
        <p className='font-bold text-2xl heading'>Experts  in Best Class Technology Platforms</p>
        <div className='w-[80%] flex flex-col items-center justify-center'>
            <div className="grid grid-cols-6 gap-3">
                <Image src={adobe} alt="" className='w-[150px] h-[100px]'/>
                <Image src={meta} alt="" className='w-[150px] h-[100px]'/>
                <Image src={shopify} alt="" className='w-[150px] h-[100px]'/>
                <Image src={googleads} alt="" className='w-[100px] h-[100px]'/>
                <Image src={hubspot} alt="" className='w-[150px] h-[100px]'/>
                <Image src={kyaviyo} alt="" className='w-[150px] h-[100px]'/>
            </div>
            <div className="grid grid-cols-4 gap-3">
            <Image src={magento} alt="" className='w-[150px] h-[100px]'/>
                <Image src={woocommerce} alt="" className='w-[150px] h-[100px]'/>
                <Image src={react} alt="" className='w-[150px] h-[100px]'/>
                <Image src={wordpress} alt="" className='w-[150px] h-[100px]'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies