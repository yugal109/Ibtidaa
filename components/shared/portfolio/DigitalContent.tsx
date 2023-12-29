"use client";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import Image from "next/image";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const appList = [
  {
    name: "Salaka Farm",
    description:
      "Salaka Farm, a pioneering digital marketing channel in Nepal, focuses on elevating agricultural businesses. Specializing in online advertising and social media campaigns, it aims to empower local farmers by enhancing their visibility and connecting them with potential buyers through modern marketing strategies.",
    path: "/images/website.png",
  },
];
export default function DigitalContent() {
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
          className="gridCol max-lg:w-screen "
        >
          {appList.map((p) => {
            return (
              <SwiperSlide key={p.name} className="max-lg:px-5 w-screen mt-10 ">
                <Card className="p-5 w-[310px]">
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
                    {/* <Link href={p.url} target="_blank"> */}
                    {p.name}
                    {/* </Link> */}
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
