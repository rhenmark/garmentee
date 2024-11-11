"use client";
import { Button } from "@nextui-org/react";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <>
      <video
        autoPlay
        playsInline
        muted
        loop
        className="fixed z-0 top-0 left-0 right-0 w-full object-cover h-screen"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="relative grid place-items-center w-full min-h-[80dvh] z-10 px-4 lg:px-0">
        <span className="text-[48px] lg:text-[64px] font-bold w-full lg:w-[50%] text-center ">
          Your One-Stop shop for your Tailoring needs.
        </span>
        <span className="w-full lg:w-[50%] text-center">
          Welcome to your go-to place for tailoring, where skilled craftsmanship
          meets your personal style. Explore our custom suits, alterations, and
          a wide selection of raw materials to help you create your perfect
          garment!
        </span>
        <Button
          className="bg-secondary text-black h-20 rounded-full w-full lg:w-[480px] text-2xl"
          size="lg"
          endContent={<span className="bg-black py-2 px-8 rounded-full ml-4"><MoveRight color="#fff" /></span>}
        >
          Explore our Products
        </Button>
      </div>
    </>
  );
};

export default Hero;
