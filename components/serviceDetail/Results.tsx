import React from 'react'
import fifteen from "../../public/images/fifteen.png"
import Image from 'next/image'
import decrease from "../../public/images/decrease.png"
import eighty from "../../public/images/eighty.png"
import oneEighty from "../../public/images/oneEighty.png"
import sixtyfive from "../../public/images/sixtyfive.png"
import thirtynine from "../../public/images/thirtynine.png"

const Results = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-[80%] flex flex-col items-center mt-[20px] m-[30px]'>

        <p className='font-bold text-2xl'>THE TYPICAL RESULTS</p>
        <p className='text text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta numquam possimus obcaecati delectus ipsam eaque, quas maiores ex magni qui quidem libero neque amet, voluptates a eos modi cumque.</p>
        <div className='w-[300px] h-[130px] flex items-center justify-center'>
            <Image src={fifteen} alt="" className="h-full w-full overflow-hidden"/>
        </div>

        <div className='mt-[50px]'>
            <p className='heading font-bold text-2xl'>OUR RESULTS</p>
            <p className='text'>Here’s a look at just some of the outcomes we’ve helped clients achieve:
            </p>

            <div className='grid grid-cols-3 mt-3'>
                <div className='flex flex-col w-[25vw] items-center justify-center p-5'>
                    <div className='w-[190px] h-[70px]'>
                        <Image src={eighty} alt="" className='w-full h-full overflow-hidden'/>
                    </div>
                        <p className='text-center text'>An orthodontics practice increased its annual leads by more than 89%</p>
                </div>
                <div className='flex flex-col w-[25vw] items-center justify-center p-5'>
                    <div className='w-[190px] h-[70px]'>
                        <Image src={oneEighty} alt="" className='w-full h-full overflow-hidden'/>
                    </div>
                        <p className='text-center text'>A nonprofit-focused technology firm saw its yearly organic traffic jump 186%</p>
                </div>
                <div className='flex flex-col w-[25vw] items-center justify-center p-5'>
                    <div className='w-[190px] h-[70px]'>
                        <Image src={sixtyfive} alt="" className='w-full h-full overflow-hidden'/>
                    </div>
                        <p className='text-center text'>A maid service was able to grow total annual traffic by 65%</p>
                </div>
                <div className='flex flex-col w-[25vw] items-center justify-center p-5'>
                    <div className='w-[190px] h-[70px]'>
                        <Image src={thirtynine} alt="" className='w-full h-full overflow-hidden'/>
                    </div>
                        <p className='text-center text'>A software vendor experienced a spike in year-over-year organic traffic of 39%</p>
                </div>
                <div className='flex flex-col w-[25vw] items-center justify-center p-5'>
                    <div className='w-[190px] h-[70px]'>
                        <Image src={decrease} alt="" className='w-full h-full overflow-hidden'/>
                    </div>
                        <p className='text-center text'>A California remodeling firm attained the top Google ranking for keyword combinations such as “remodeling San Jose” and lowered its cost-per-conversion by 37%</p>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Results