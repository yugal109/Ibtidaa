import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Laptop from "./Laptop";

const Services = () => {
  return (
    <div className=" max-w-7xl m-auto px-5 h-full pt-10">
      <div className=" w-full  flex justify-center">
        <Badge>Our Services</Badge>
      </div>

      <div className="py-10" id="website">
        <div className=" flex justify-between items-center md:gap-32 lg:gap-52 max-md:flex-col ">
          <div className="flex-1 space-y-10 max-md:space-y-7 gap-7">
            <h1 className=" text-4xl max-md:text-5xl">Website Development</h1>
            <p className="text-xl tracking-wider max-md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad
              porro, alias, repellat ut adipisci ipsam quae ex cumque commodi
              illum obcaecati facere qui exercitationem, quod minus sit earum
              officia.
            </p>
            <Button className=" rounded">
              <Link href={"/portfolio"}>See in Action</Link>
            </Button>
          </div>
          <div>
            <Image
              src={"/images/web_dev.png"}
              alt="Website"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      <div className="py-10" id="app">
        <div className=" flex justify-between items-center md:gap-32 lg:gap-52 max-md:flex-col ">
          <div className=" max-md:order-2">
            <Image
              src={"/images/app_dev.png"}
              alt="Website"
              width={400}
              height={300}
            />
          </div>
          <div className="flex-1 space-y-10 max-md:space-y-5">
            <h1 className=" text-4xl max-md:text-5xl">
              IOS/Android App Development
            </h1>
            <p className="text-xl tracking-wider max-md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad
              porro, alias, repellat ut adipisci ipsam quae ex cumque commodi
              illum obcaecati facere qui exercitationem, quod minus sit earum
              officia.
            </p>
            <Button className=" rounded">
              <Link href={"/portfolio"}>See in Action</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="py-10" id="digital-marketing">
        <div className=" flex justify-between items-center md:gap-52 max-md:flex-col max-md:space-y-10 ">
          <div className="flex-1 space-y-10 max-md:space-y-7 gap-7">
            <h1 className=" text-4xl max-md:text-5xl">Digital Marketing</h1>
            <p className="text-xl tracking-wider max-md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad
              porro, alias, repellat ut adipisci ipsam quae ex cumque commodi
              illum obcaecati facere qui exercitationem, quod minus sit earum
              officia.
            </p>
            <Button className=" rounded">
              <Link href={"/portfolio"}>See in Action</Link>
            </Button>
          </div>
          <div>
            <Image
              src={"/images/digital_marketing.png"}
              alt="Website"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      <div className="py-10" id="ui-ux-design">
        <div className=" flex justify-between items-center md:gap-32 lg:gap-52 max-md:flex-col ">
          <div className=" max-md:order-2">
            <Image
              src={"/images/ui.png"}
              alt="Website"
              width={400}
              height={400}
            />
          </div>
          <div className="flex-1 space-y-10 max-md:space-y-5">
            <h1 className=" text-4xl max-md:text-5xl">UI/UX design</h1>
            <p className="text-xl tracking-wider max-md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad
              porro, alias, repellat ut adipisci ipsam quae ex cumque commodi
              illum obcaecati facere qui exercitationem, quod minus sit earum
              officia.
            </p>
            <Button className=" rounded">
              <Link href={"/portfolio"}>See in Action</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
