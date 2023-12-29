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
];
export default function WebContent() {
  return (
    <section className=" pt-10 pb-[2rem] ">
      <div className="lg:mx-auto max-w-7xl ">
        <Swiper
          modules={[Grid, Pagination, Navigation]}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          navigation
          grid={{
            rows: 2,
            fill: "row",
          }}
          className=" max-lg:w-screen "
        >
          {appList.map((p) => {
            return (
              <SwiperSlide key={p.name} className="max-lg:px-5 mt-10 md:ml-20 ">
                <Card className="p-5  ">
                  <CardHeader className="h-[250px] max-lg:h-[300px] max-md:h-[250px] cursor-pointer overflow-hidden">
                    <Image
                      className="scale-1 hover:scale-[1.1] duration-300 object-contain"
                      src={p.path}
                      alt=""
                      height={200}
                      width={300}
                    />
                  </CardHeader>
                  <CardTitle className="text-center p-3 hover:underline cursor-pointer">
                    <Link href={p.url} target="_blank">
                      {p.name}
                    </Link>
                  </CardTitle>
                  {/* <CardDescription>{p.description}</CardDescription> */}
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
