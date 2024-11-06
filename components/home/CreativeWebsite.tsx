import React, { useEffect } from "react";
import { TbDeviceImacCode } from "react-icons/tb";
import mockup1 from "../../public/images/mockup1.png";
import mockup2 from "../../public/images/mockup2.png";
import mockup3 from "../../public/images/mockup3.png";
import mockup4 from "../../public/images/mockup4.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
const CreativeWebsite = () => {
  useEffect(() => {
    AOS.init({
      duration: 1900, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="w-full flex items-center justify-center">
      <div className="m-[80px] lg:max-w-[1000px]  flex items-center justify-between md:flex-row flex-col">
        <div className="flex flex-col gap-5 p-[30px] bg-white shadow-2xl text-black rounded-[15px] hover:rounded-[40px] transition-all md:w-[52%] relative z-20" data-aos="fade-right">
          <p className="text-6xl text-[#0D2137]">
            <TbDeviceImacCode />
          </p>
          <p className="heading font-bold text-2xl">
            Innovative Web Development Solutions and Creative UI/UX Design
          </p>
          <p className="text ">
            We specialize in creating dynamic web and mobile solutions through
            the power of the MERN stack, ensuring fast and scalable development.
            Our expertise extends to crafting intuitive UI/UX designs that
            provide exceptional user experiences. Additionally, we offer
            comprehensive services in WordPress, Wix, WooCommerce, and Shopify,
            delivering customized e-commerce platforms and websites tailored to
            meet your business needs.
          </p>
          <Link href={"/contact"} className="flex flex-row gap-2 items-center cursor-pointer ">
            <p className="text-[#FF832B] hover:underline">CREATE ME A BEAUTIFUL WEBSITE</p>
            <p className="text-[#FF832B] text-xl block">
              <FaRegArrowAltCircleRight />
            </p>
          </Link>
        </div>

        <div className="bg-[#FF8E2B]  rounded-[30px] md:w-[40%] w-[80vw] md:absolute md:left-[50%] p-[50px] z-10"  data-aos="fade-left">
          {/* <Image src={mockup1} alt=""/> */}
          <Swiper
            slidesPerView={1}
            modules={[Autoplay]}
            //   pagination={{clickable:true}}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full "
          >
            <SwiperSlide>
              <Image src={mockup1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={mockup2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={mockup3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={mockup4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CreativeWebsite;
