"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
// import ConsultationPopup from "./ConsultationPopup"
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Header = (color:any) => {
  const [bgColor, setBgColor] = useState("[#ffffff]");
  // const[color, setColor] = useState("[#ffffff]")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setBgColor("[#0D2137]");
      } else {
        setBgColor("[#ffffff]");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`md:flex hidden flex-row items-center justify-evenly w-full fixed transition-all h-[80px] z-50 bg-${color.color ? color.color: bgColor}`}
      >
        <div className="h-[170px] z-10">
          <Image src={logo} alt="" className="w-full h-full " />
        </div>
        <div>
          <ul className={`flex flex-row gap-4 relative z-10 text-white`}>
            <li className="list-none mid-heading">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="list-none mid-heading">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="list-none mid-heading relative group transition-all">
    <Link href={"/services"}>Our Services</Link>
    <ul className="absolute left-0 top-full mt-0  bg-gray-800 p-3 hidden group-hover:flex flex-col items-start w-[240px] transition-all">
      <li className="py-1 w-full hover:text-[#FF8E2B] transition-all">
        <Link href={"/service-detail/website_development"} className="block w-full h-full">Website Development</Link>
      </li>
      <li className="py-1 w-full hover:text-[#FF8E2B] transition-all">
        <Link href={"/service-detail/page_per_click"} className="block w-full h-full">Google Ads</Link>
      </li>
      <li className="py-1 w-full hover:text-[#FF8E2B] transition-all">
        <Link href={"/service-detail/social_media_marketing"} className="block w-full h-full">Social Media Marketing</Link>
      </li>
      <li className="py-1 w-full hover:text-[#FF8E2B] transition-all">
        <Link href={"/service-detail/search_engine"} className="block w-full h-full">SEO</Link>
      </li>
      <li className="py-1 w-full hover:text-[#FF8E2B] transition-all">
        <Link href={"/service-detail/branding"} className="block w-full h-full">Branding</Link>
      </li>
        <li className="py-1 w-full hover:text-[#FF8E2B] transition-all">
        <Link href={"/service-detail/email_marketing"} className="block w-full h-full">Email Marketing</Link>
      </li>
    </ul>
  </li>
            {/* <li className='list-none mid-heading'>Page</li> */}
            <li className="list-none mid-heading">
              <Link href={"/portfolio"}>Portfolio</Link>
            </li>
            <li className="list-none mid-heading">
              <Link href={"/contact"}>Contact</Link>
            </li>          </ul>
        </div>
        <div className="relative z-10 mb-[30px]">
          <Button className="bg-[#0D2137] hover:bg-[#FF8E2B]">FREE CONSULTATION</Button>
          {/* <ConsultationPopup/> */}
        </div>
      </div>

      <div className="flex md:hidden flex-row justify-around items-center w-full bg-[#0D2137]">
        <div className="h-[100px] w-[100px] relative z-10">
          <Image src={logo} alt="" height={200} width={200} />
        </div>

        <Sheet>
          <SheetTrigger className="text-white text-2xl">
            <IoMenu />
          </SheetTrigger>
          <SheetContent className="bg-[#0D2137] text-white">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
                <ul className={`flex flex-col gap-4 relative z-10 text-white items-start`}>
                  <li className="list-none mid-heading">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="list-none mid-heading">
                    <Link href={"/services"}>Our Services</Link>
                  </li>
                  <li className="list-none mid-heading">
                    <Link href={"/portfolio"}>Portfolio</Link>
                  </li>
                  <li className="list-none mid-heading">
                    <Link href={"/about"}>About</Link>
                  </li>
                  <li className="list-none mid-heading">
                    <Link href={"/contact"}>Contact</Link>
                  </li>
                <Button>GET A CONSULTATION</Button>
                </ul>

              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <FloatingWhatsApp
              phoneNumber="+923392073100"
              accountName="SpearingSystem"
              statusMessage="Replies within 15 minutes"
              chatMessage="Hello there! How can I help you ?"
              avatar="/images/logoAvatar.png"
              chatboxHeight={350}
              buttonClassName="floating-whatsapp-button"
      />
    </>
  );
};

export default Header;
