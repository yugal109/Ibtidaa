"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import AnimatedNumber from "../AnimateNumber";
import Link from "next/link";
import Sphere from "./Sphere";
import Laptop from "./Laptop";
import { useState } from "react";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/aceternity/typewriter-effect";

const words = [
  {
    text: "Hello",
    className: "text-white",
  },
  {
    text: "from,",
    className: "text-white ",
  },
];

const words2 = [
  {
    text: "Ibtidaa",
    className: "text-primary ",
  },
  {
    text: "Softwares.",
    className: "text-primary ",
  },
];

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="max-w-7xl m-auto pt-16 max-md:pt-8 h-full px-5 ">
      <div className="flex flex-col md:flex-row items-center   ">
        <div className="flex-1 space-y-10 max-md:space-y-8 ">
          <div className=" gap-2 ">
            {/* <h1 className=" text-7xl  ">Hey,</h1>
            <h1 className=" text-7xl  ">There !</h1> */}
            <TypewriterEffect words={words} />
            <TypewriterEffectSmooth words={words2} />
          </div>
          <div>
            <p className="text-xl tracking-wider ">
              Welcome to Ibtidaa Softwares, your trusted software solution
              partner nestled in the heart of Kathmandu, Nepal. We blend
              innovation with expertise, offering bespoke services to propel
              your business into the digital forefront.
            </p>
          </div>
          <div className="flex gap-6">
            <Button className=" rounded" size={"lg"}>
              <Link href="/portfolio">Start Here !</Link>
            </Button>
            <Button className=" rounded" variant="outline" size={"lg"}>
              <Link href={"/contact-us"}>Contact Us</Link>
            </Button>
          </div>
        </div>
        <div>
          {/* {show ? <Sphere setShow={setShow} /> : <Laptop setShow={setShow} />} */}
        </div>
      </div>
      <div className="grid md:grid-cols-2 max-w-4xl m-auto pt-20 h-full max-sm:gap-5 ">
        <div className="grid grid-flow-col h-28 items-center gap-x-4  ">
          <div className="flex flex-col items-center">
            <div className="flex">
              <AnimatedNumber stopAt={60} />
              <p className=" text-4xl self-center"> +</p>
            </div>
            <span className="text-lg">PROJECTS</span>
          </div>
          <Separator orientation="vertical" />
          <div>
            <p className="text-xl tracking-wide ">
              {`We've had the pleasure of working with a diverse range of clients,
              each with unique needs and challenges`}
            </p>
          </div>
        </div>
        <div className="grid grid-flow-col h-28 items-center gap-x-5  ">
          <div className="flex flex-col items-center">
            <div className="flex">
              <AnimatedNumber stopAt={40} />
              <p className=" text-4xl self-center"> +</p>
            </div>

            <span className="text-lg ">CLIENTS</span>
          </div>
          <Separator orientation="vertical" className=" ml-3.5" />
          <p className="text-xl tracking-wide  ">
            From small businesses to multinational corporations, our client
            portfolio spans a wide spectrum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
