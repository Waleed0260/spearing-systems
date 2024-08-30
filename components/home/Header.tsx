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
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Header = (color:any) => {
  const [bgColor, setBgColor] = useState("[#ffffff]");
  const[btnColor, setBtnColor] = useState("[#0D2137]")
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setBgColor("[#0D2137]");
        setBtnColor("white")
      } else {
        setBgColor("[#ffffff]");
        setBtnColor("[#0D2137]")
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
        <Link href={"/"} className="h-[170px] z-10">
          <Image src={logo} alt="" className="w-full h-full " />
        </Link>
        <div>
          <ul className={`flex flex-row gap-4 relative z-10 text-white`}>
            <li className="list-none mid-heading">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="list-none mid-heading relative group transition-all">
    <Link href={"/services"}>Our Services</Link>
    <ul className="absolute left-0 top-full mt-0  bg-gray-800 p-3 hidden group-hover:flex flex-col items-start w-[240px] transition-all">
      <li className="py-1 w-full hover:text-[#FF8E2B] transition-all">
        <Link href={"/service/website_development"} className="block w-full h-full">Website Development</Link>
      </li>
      <li className="py-1 w-full hover:text-[#FF8E2B] transition-all">
        <Link href={"/service/google_ads"} className="block w-full h-full">Google Ads</Link>
      </li>
      <li className="py-1 w-full hover:text-[#FF8E2B] transition-all">
        <Link href={"/service/social_media_marketing"} className="block w-full h-full">Social Media Marketing</Link>
      </li>
      <li className="py-1 w-full hover:text-[#FF8E2B] transition-all">
        <Link href={"/service/search_engine"} className="block w-full h-full">SEO</Link>
      </li>
      <li className="py-1 w-full hover:text-[#FF8E2B] transition-all">
        <Link href={"/service/branding"} className="block w-full h-full">Branding</Link>
      </li>
        <li className="py-1 w-full hover:text-[#FF8E2B] transition-all">
        <Link href={"/service/email_marketing"} className="block w-full h-full">Email Marketing</Link>
      </li>
    </ul>
  </li>
            {/* <li className='list-none mid-heading'>Page</li> */}
            <li className="list-none mid-heading">
              <Link href={"/portfolio"}>Portfolio</Link>
            </li>
            <li className="list-none mid-heading">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="list-none mid-heading">
              <Link href={"/contact"}>Contact</Link>
            </li>          </ul>
        </div>
        <div className="relative z-10">
          <Button className={`bg-${btnColor} hover:bg-[#FF8E2B] ${btnColor === "white" ? "text-black":""}`}> <Link href={"https://calendly.com/spearingsystems"} target="blank">FREE CONSULTATION</Link> </Button>
        </div>
      </div>

      <div className="flex md:hidden flex-row justify-around p-2 items-center w-full h-[100px] bg-[#0D2137]">
        <div className="h-[150px] w-[150px]  relative z-10">
          <Image src={logo} alt="" className="h-full w-full" />
        </div>

        <Sheet>
          <SheetTrigger className="text-white hover:text-[#FF8E2B]  text-2xl">
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
                  <Button className={`bg-[#FF8E2B] ${btnColor === "white" ? "text-black":""}`}> <Link href={"https://calendly.com/spearingsystems"} target="blank">FREE CONSULTATION</Link> </Button>
                  </ul>

              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="fixed bottom-[20px] right-[100px] z-50">
      <FloatingWhatsApp
              phoneNumber="+923392073100"
              accountName="SpearingSystem"
              statusMessage="Replies within 15 minutes"
              chatMessage="Hello there! How can I help you ?"
              avatar="/images/logoAvatar.png"
              chatboxHeight={350}
              buttonClassName="floating-whatsapp-button"
              />
              </div>
    </>
  );
};

export default Header;
