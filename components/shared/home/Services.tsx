import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Laptop from "./Laptop";

const Services = () => {
  return (
    <div className=" max-w-7xl m-auto px-5 h-full pt-20">
      <div className=" w-full  flex justify-center">
        <Badge>Our Services</Badge>
      </div>

      <div className="pt-24" id="website">
        <div className=" flex justify-between items-center lg:gap-x-44 gap-x-10 max-md:flex-col max-md:space-y-10  ">
          <div className="flex-1 space-y-10 max-md:space-y-7 gap-7">
            <h1 className=" text-4xl max-md:text-5xl">Website Development</h1>
            <p className="text-xl tracking-wider max-md:text-lg ">
              Unlock your online potential with our tailored website
              development. From captivating landing pages to powerful e-commerce
              platforms, Ibtidaa crafts digital spaces that seamlessly merge
              style and functionality.
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

      <div className="pt-24" id="app">
        <div className=" flex justify-between items-center lg:gap-x-44 gap-x-10 max-md:flex-col max-md:space-y-10  ">
          <div className="flex-1 space-y-10 max-md:space-y-7 gap-7 md:order-2">
            <h1 className=" text-4xl max-md:text-5xl">
              IOS/Android App Development
            </h1>
            <p className="text-xl tracking-wider max-md:text-lg">
              Stay connected with your audience through our iOS and Android app
              development. We transform ideas into user-friendly mobile
              experiences, ensuring your brand is at your users&apos;
              fingertips, whether on Apple or Android devices.
            </p>
            <Button className=" rounded">
              <Link href={"/portfolio"}>See in Action</Link>
            </Button>
          </div>
          <div>
            <Image
              src={"/images/app_dev.png"}
              alt="Website"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      <div className="pt-24" id="digital-marketing">
        <div className=" flex justify-between items-center lg:gap-x-44 gap-x-10 max-md:flex-col max-md:space-y-10  ">
          <div className="flex-1 space-y-10 max-md:space-y-7 gap-7">
            <h1 className=" text-4xl max-md:text-5xl">Digital Marketing</h1>
            <p className="text-xl tracking-wider max-md:text-lg">
              Boost your online presence with our strategic digital marketing
              services. From SEO to social media, as we maximizes your
              visibility, driving traffic and conversions to help your brand
              stand out in the digital crowd.
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

      <div className=" py-24" id="ui-ux-design">
        <div className=" flex justify-between items-center lg:gap-x-44 gap-x-10 max-md:flex-col max-md:space-y-10  ">
          <div className="flex-1 space-y-10 max-md:space-y-7 gap-7 md:order-2">
            <h1 className=" text-4xl max-md:text-5xl">UI/UX design</h1>
            <p className="text-xl tracking-wider max-md:text-lg">
              Leave a lasting impression with our exceptional UI/UX design
              services. At Ibtidaa, we create immersive and intuitive digital
              journeys, ensuring every interaction enhances user satisfaction
              and loyalty.
            </p>
            <Button className=" rounded">
              <Link href={"/portfolio"}>See in Action</Link>
            </Button>
          </div>
          <div>
            <Image
              src={"/images/ui.png"}
              alt="Website"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
