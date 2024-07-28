import React from "react";
import Header from "./Header";
import { Button } from "../ui/button";
const Hero2 = (img: any) => {
  return (
    <div
      className="w-full h-[50rem] bg-cover"
      style={{ backgroundImage: `url('/images/banner.jpg)` }}
    >
      <Header />
      <div className="flex items-center justify-center p-[100px] flex-col">
        <p className="text-6xl">A creative team</p>
        <Button
          className="mt-4 h-[60px] w-[250px] rounded-xl bg-transparent"
          variant={"outline"}
        >
          HAVE A PROJECT ?{" "}
        </Button>
      </div>
    </div>
  );
};

export default Hero2;
