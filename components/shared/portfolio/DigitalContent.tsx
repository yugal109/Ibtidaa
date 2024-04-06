"use client";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import Image from "next/image";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundGradient } from "@/components/ui/aceternity/background-gradient";
import { Link } from "lucide-react";

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
    <div className=" max-w-5xl">
      <div className=" py-10 ">
        {appList.map((p) => {
          return (
            <div key={p.name} className="group">
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
                <div className="text-center ">
                  <p className="text-base">{p.description}</p>
                </div>
              </BackgroundGradient>
            </div>
          );
        })}
      </div>
    </div>
  );
}
