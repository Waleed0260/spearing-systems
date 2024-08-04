import React from 'react'

const Benefits = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className="w-[80%] flex flex-col items-start m-[30px]">
            {/* <div className='flex items-start '></div> */}
            <p className='heading text-2xl font-bold'>The Benefits of SEO with Spearing Systems            </p>
            <ul className='list-disc text mt-[20px] ml-[20px]'>
                <li className='mt-4'>
                  <div className='flex flex-row gap-3'>

                  <p className='font-bold'>Increased Organic Traffic:</p>
                  <p>Drive more visitors to your website without paying for ads.</p>
                  </div>
                </li>
                <li className='mt-4'>
                  <div className='flex flex-row gap-3'>

                  <p className='font-bold'>Enhanced User Experience:</p>
                  <p>Improve your website's usability and engagement.</p>
                  </div>
                </li>
                <li className='mt-4'>
                  <div className='flex flex-row gap-3'>

                  <p className='font-bold'>Higher Conversion Rates:</p>
                  <p>Attract and retain customers more effectively.</p>
                  </div>
                </li>
                <li className='mt-4'>
                  <div className='flex flex-row gap-3'>

                  <p className='font-bold'>Long-Term Results:</p>
                  <p>Enjoy sustained growth and online presence.</p>
                  </div>
                </li>
            </ul>
            <p className='text mt-3'>Unlock your business's potential with Spearing Systems' SEO services. Contact us today to elevate your online presence and drive growth!
            </p>
        </div>
    </div>
  )
}

export default Benefits