"use client";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/aceternity/background-gradient";

const appList = [
  {
    name: "FastMoney",
    description:
      "FastMoney is a cutting-edge fintech app based in Nepal, revolutionizing financial transactions and services. With a user-friendly interface, it offers swift and secure digital payments, money transfers, and innovative financial solutions. FastMoney is designed to provide users in Nepal with convenient access to modern financial tools, contributing to a seamless and efficient digital banking experience.",
    path: "/images/fastmoney.png",
    url: "https://play.google.com/store/apps/details?id=com.mpin.fastmoney&hl=en&gl=US",
  },
  {
    name: "Bidesh Online",
    description:
      "Bidesh is a Nepali app offering vital information on overseas work and study opportunities. Tailored for Nepali users, it provides insights into jobs, educational programs, and essential resources, serving as a convenient platform for those aspiring to explore opportunities abroad.",
    path: "/images/bidesh.png",
    url: "https://play.google.com/store/apps/details?id=com.bideshonline.bideshapp&hl=en&gl=US",
  },
  {
    name: "Eatonline ",
    path: "/images/eatonline.png",
    url: "https://play.google.com/store/apps/details?id=be.nepasoft.eatonline_terminal_dashboard",
  },
  {
    name: "Neptunes",
    path: "/images/neptunes.png",
    url: "https://play.google.com/store/apps/details?id=com.neptunes.neptunes",
  },
];
export default function AppContent() {
  return (
    <div className=" max-w-5xl">
      <div className=" grid xl:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 py-10 ">
        {appList.map((p) => {
          return (
            <Link href={p.url} key={p.name} className="group">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
                <div className="h-[250px] max-lg:h-[300px] max-md:h-[250px] cursor-pointer overflow-hidden">
                  <Image
                    className="scale-1 group-hover:scale-[1.1] duration-300 object-contain"
                    src={p.path}
                    alt=""
                    height={200}
                    width={300}
                  />
                </div>
                <div className="text-center p-3 group-hover:underline cursor-pointer">
                  <p className="text-xl font-bold">{p.name}</p>
                </div>
              </BackgroundGradient>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
