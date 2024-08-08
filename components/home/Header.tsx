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
        className={`sm:flex hidden flex-row items-center justify-evenly w-full fixed transition-all h-[80px] z-50 bg-${color.color ? color.color: bgColor}`}
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
            <li className="list-none mid-heading">
              <Link href={"/portfolio"}>Our Services</Link>
            </li>
            {/* <li className='list-none mid-heading'>Page</li> */}
            <li className="list-none mid-heading">
              <Link href={"/services"}>Portfolio</Link>
            </li>
            <li className="list-none mid-heading">Contact</li>
          </ul>
        </div>
        <div className="relative z-10">
          <Button>GET A CONSULTATION</Button>
        </div>
      </div>

      <div className="flex sm:hidden flex-row justify-around items-center w-full bg-[#0D2137]">
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
                <ul className={`flex flex-col gap-4 relative z-10 text-white`}>
                  <li className="list-none mid-heading">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="list-none mid-heading">
                    <Link href={"/about"}>About</Link>
                  </li>
                  <li className="list-none mid-heading">
                    <Link href={"/portfolio"}>Portfolio</Link>
                  </li>
                  <li className="list-none mid-heading">
                    <Link href={"/services"}>Services</Link>
                  </li>
                  <li className="list-none mid-heading">Blog</li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Header;
