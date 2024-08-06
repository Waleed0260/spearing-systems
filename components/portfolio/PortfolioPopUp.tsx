import React from 'react'
import problem from "../../public/images/problem.jpg"
import solution from "../../public/images/solution.jpg"
import result from "../../public/images/result.png"
import Image from 'next/image'

const PortfolioPopUp = () => {
  return (
    <div className='flex flex-col text-black bg-[#0D2137] text-white'>
        <p className='font-bold text-4xl heading '>Jumped Paid Traffic from 3 to 1,958, a more than 65,000% Increase        </p>
        <p className='text text-xl mt-1'>Lorem ipsum dolor sit amet.</p>
        <p className='text-3xl text mt-4'>How Spiral Marketing Orchestrated a 65,167% Increase in Paid Traffic for This SaaS Technology Company</p>
        <div className='flex md:flex-row flex-col'>
            <div className='md:w-[50%] flex flex-col'>


        <p className='text font-bold mt-5 text-2xl'> Problem</p>
        <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt recusandae hic libero blanditiis beatae harum esse doloribus praesentium optio quis, neque, minus delectus eaque ipsam distinctio. Molestias, labore? Error sunt numquam tenetur quisquam ad nulla dolorem aut cupiditate quis dolore fugiat recusandae, atque pariatur debitis nihil aperiam odio eos, praesentium possimus! Rem hic, non a temporibus id error expedita, quos eveniet corporis tempore assumenda illo obcaecati distinctio ullam laborum? Minima, eius! Facilis aperiam consequuntur repudiandae laudantium ea pariatur dignissimos sunt!</p>

        <p className='font-bold text-lg'>Problem Summary</p>
        <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, accusamus! Aliquid magni explicabo officia, deserunt at inventore consequatur maiores? Quod modi aliquid enim explicabo natus doloremque blanditiis error mollitia maiores, quo minima inventore dicta harum corrupti atque ratione at architecto assumenda pariatur libero? Culpa voluptates totam amet tenetur quam omnis, est quidem quos dicta ab nesciunt maxime explicabo ex reprehenderit.</p>
            </div>
            <div className='md:w-[50%] flex flex-col'>
                <Image src={problem} alt="" className='w-full h-full overflow-hidden'/>
            </div>
        </div>

        <div className='mt-[30px] bg-[#0D2137] text-white p-4 flex md:flex-row flex-col items-center'>
            <div className='md:w-[50%] flex flex-col'>

            <p className='font-bold text-2xl heading'>Solution</p>
            <p className="text">To reach the company’s goals, Spiral Marketing implemented a digital marketing strategy that included monthly content creation (blog, newsletter, and social posts), as well as pay-per-click (PPC) Google Ads and paid social media advertising.To track results, demonstrate successes, and adjust strategy where needed, monthly reporting was provided.</p>
            <p className='text font-bold'>Solution Summary</p>
            <ul className='mt-3 list-disc ml-3'>
                <li>Implemented a digital marketing campaign that included content creation and paid advertising efforts</li>
                <li>Underpinned the campaign with SEO strategy and reporting</li>
            </ul>
            </div>

            <div className='md:w-[50%] flex flex-col'>
                <Image src={solution} alt="" className='w-full h-full overflow-hidden'/>
            </div>
        </div>


        <div className='mt-[30px] flex md:flex-row flex-col items-center'>
            <div className='md:w-[50%] flex flex-col'>

            <p className='font-bold heading text-2xl'>The Results</p>
            <p className='text'>After Spiral Marketing’s efforts, this client saw traffic increases across the site and social media channels. Facebook likes increased annually by 234%, and LinkedIn traffic increased annually by 450%. Total traffic increased annually by 288%. Leads and conversions were boosted as well. Total leads across all channels increased annually by 350%, and site conversions increased annually by 620%. The most significant strides were made in paid traffic. Increases could be seen monthly and annually, but the lifetime data is most telling. Total paid traffic increased from 3 in August 2018 to 1,958 in December 2019, for a lifetime increase of 65,167%.
            </p>
            </div>
            <div className='md:w-[50%] flex flex-col'>
                <Image src={result} alt="" className='w-full h-full overflow-hidden'/>
            </div>
        </div>
    </div>
  )
}

export default PortfolioPopUp