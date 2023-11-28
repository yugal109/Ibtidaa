"use client";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import Image from "next/image";

import bidesh from "@/assets/projectimg/bidesh.png";
import bishworupi from "@/assets/projectimg/bishworupi.png";
import bitfly from "@/assets/projectimg/bitfly.png";
import fastmoney from "@/assets/projectimg/fastmoney.png";
import rozai from "@/assets/projectimg/rozai.png";
import tune7 from "@/assets/projectimg/tune7.png";

const projectList = [
  {
    img: bidesh,
    title: "Bidesh",
  },
  {
    img: bishworupi,
    title: "bishworupi",
  },
  {
    img: bitfly,
    title: "bitfly",
  },
  {
    img: fastmoney,
    title: "fastmoney",
  },
  {
    img: rozai,
    title: "rozai",
  },
  {
    img: tune7,
    title: "tune7",
  },
];

export default function GridCollumn() {
  return (
    <section className=" pt-20 pb-[2rem] min-h-screen ">
      <div className="lg:mx-auto max-w-7xl mx-[1.5rem]  p-10">
        <h1 className="text-[3rem] font-bold mb-[2rem] text-center">
          Projects
        </h1>

        <Swiper
          modules={[Grid, Pagination, Navigation]}
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 2,
            },
          }}
          navigation
          grid={{
            rows: 2,
          }}
          className="gridCol "
        >
          {projectList.map((p) => {
            return (
              <SwiperSlide key={p.title}>
                <div className="p-5 ">
                  <div className="flex flex-col items-center">
                    <div className=" h-[400px] max-md:h-[180px] cursor-pointer overflow-hidden">
                      <Image
                        className="scale-1 hover:scale-[1.1] duration-300 "
                        src={p.img}
                        height={500}
                        width={500}
                        alt={p.title}
                      />
                    </div>
                    <p className="text-white text-3xl pt-4">{p.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
