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

const webList = [
  {
    name: "Neptunes",
    description:
      "NepTunes is Nepal's inaugural online music streaming platform, providing a diverse selection of Nepali and international music. As the country's first service of its kind, NepTunes offers a user-friendly interface, allowing music enthusiasts to explore genres and create personalized playlists for a seamless and enjoyable listening experience.",
    path: "/images/neptunes.png",
    url: "https://neptunes.app/",
  },
  {
    name: "Rudra Trek",
    description: "Trekking Website",
    path: "/images/rudratrek.png",
    url: "https://rudratrek.com/",
  },
  {
    name: "Rozai",
    description:
      "Rozai is a prominent e-commerce platform based in Nepal, offering a wide range of products for online shoppers. With a user-friendly interface, Rojaai enables customers to explore diverse categories, make secure online transactions, and enjoy the convenience of doorstep deliveries. Known for its commitment to quality service, Rojaai has become a go-to destination for residents in Nepal seeking a seamless and reliable online shopping experience",
    path: "/images/rozai.png",
    url: "https://rozai.com.np/",
  },
  {
    name: "Ssoche",
    description:
      "SSOCHE is the website for the Student's Society of Chemical Engineers at Pulchowk Campus. It provides information on academic events, workshops, and social activities for chemical engineering students. The platform fosters community engagement and serves as a hub for resources and announcements.",
    path: "/images/bitfly.png",
    url: "https://ssoche.pcampus.edu.np/",
  },
  {
    name: "Bisworupi",
    description:
      "SSOCHE is the website for the Student's Society of Chemical Engineers at Pulchowk Campus. It provides information on academic events, workshops, and social activities for chemical engineering students. The platform fosters community engagement and serves as a hub for resources and announcements.",
    path: "/images/bishworupi.png",
    url: "https://ssoche.pcampus.edu.np/",
  },
  {
    name: "Bidesh Online",
    description:
      "Bidesh is a Nepali app offering vital information on overseas work and study opportunities. Tailored for Nepali users, it provides insights into jobs, educational programs, and essential resources, serving as a convenient platform for those aspiring to explore opportunities abroad.",
    path: "/images/bidesh.png",
    url: "https://bidesh.online/",
  },
];
export default function WebContent() {
  return (
    <div className=" max-w-5xl">
      <div className=" grid xl:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 py-10 ">
        {webList.map((p) => {
          return (
            <Link href={p.url} key={p.name} className="group" target="_blank">
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
