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

const webList = [
  {
    name: "Neptunes",
    description:
      "NepTunes is Nepal's inaugural online music streaming platform, providing a diverse selection of Nepali and international music. As the country's first service of its kind, NepTunes offers a user-friendly interface, allowing music enthusiasts to explore genres and create personalized playlists for a seamless and enjoyable listening experience.",
    path: "/images/neptunes.png",
    url: "https://neptunes.com",
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
    url: "https://rozai.com/",
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
    <section className=" pt-10 pb-[2rem] ">
      <div className="lg:mx-auto max-w-5xl ">
        <Swiper
          modules={[Grid, Pagination, Navigation]}
          slidesPerView={3}
          spaceBetween={10}
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
            // fill: "row",
          }}
          className="gridCol max-lg:w-screen "
        >
          {webList.map((p) => {
            return (
              <SwiperSlide key={p.name} className="max-lg:px-5 w-screen">
                <Card className="p-5">
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
