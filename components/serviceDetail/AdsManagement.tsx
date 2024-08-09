import React from 'react'

const AdsManagement = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className='w-[90%] flex flex-col items-center justify-center m-[20px]'>
        <p className='text-2xl font-bold heading'>Google Ads Mangement that makes a differnece</p>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-[30px] gap-2 w-[90%]'>
            <div className='w-[90%] flex flex-col p-2'>
                <p className='mid-heading text-xl'>Home Service Industries</p>
                <ul className='mt-3 ml-5 list-disc text'>
                <li>Contractors, Plumbers, Painters</li>
  <li>Maid Services, Pressure Washing</li>
  <li>Pest Control, Mold Remediation</li>
  <li>Handyman, Woodworking</li>
  <li>Glass Repair, Locksmiths</li>
  <li>Paving, Roofing, Siding, Windows</li>
  <li>and more...</li>
                </ul>
            </div>

            <div className='w-[90%] flex flex-col p-2'>
                <p className='mid-heading text-xl'>Professional Services</p>
                <ul className='mt-3 ml-5 list-disc text'>
                <li>Doctors, Dentists, Lawyers, Therapists</li>
  <li>Website Design, Social Media Agencies</li>
  <li>Colleges, Tutoring Services</li>
  <li>Financial Services, Insurance</li>
  <li>Engineering Firms, Architects</li>
  <li>IT Services, Computer Security</li>
  <li>and more...</li>
                </ul>
            </div>

            <div className='w-[90%] flex flex-col p-2'>
                <p className='mid-heading text-xl'>Retail, Jewellery</p>
                <ul className='mt-3 ml-5 list-disc text'>
                <li>Jewelry, Weddings</li>
  <li>Automotive Body, Repair, Parts, Glass</li>
  <li>Industrial Suppliers</li>
  <li>Gifts, Holidays</li>
  <li>Custom Made Items, Printed Items</li>
  <li>Eco-Friendly Items</li>
  <li>and more...</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AdsManagement