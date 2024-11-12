import React, {useEffect} from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
const Choose = ({choose}:any) => {
    useEffect(() => {
        AOS.init({
          duration: 1900, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
    <div className='w-full flex items-center justify-center ' data-aos='fade-up'>
        <div className=' w-[80%] flex flex-col items-center justify-center mt-8'>
            <p className='font-bold text-2xl md:text-4xl heading text-center'>{choose?.heading}</p>
            <div className='lg:flex lg:flex-row grid sm:grid-cols-2 grid-cols-1 gap-4 mt-5'>

            {choose?.choose.map((item:any)=>{
                return(
                    <div className='w-[100%]  p-4 flex flex-col items-center justify-between gap-3 shadow-2xl transition duration-300 ease-in-out hover:bg-[#0D2137] hover:text-white rounded-lg'>
<p
    className="flex items-center justify-center w-16 h-16 bg-[#FF8E2B] rounded-full"
  >
    <i
      className={`fas fa-${item.icon}`}
      style={{
        fontSize: '2rem',
        // color: '#FF8E2B'
      }}
    ></i>
  </p>          <p className='mid-heading font-bold text-2xl text-center'>{item.heading}</p>
                        <p className='text-center text'>{item.text}</p>
                    </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default Choose