import { AboutIconCard } from "@/components/shared/about/AboutIconCard";
import React from "react";

const tech = [
  {
    title: "Bootstrap",
    icon: "bootstrap",
  },
  {
    title: "C Language",
    icon: "c",
  },
  {
    title: "CSS",
    icon: "css",
  },
  {
    title: "Django",
    icon: "django",
  },
  {
    title: "Express",
    icon: "express",
  },
  {
    title: "Firebase",
    icon: "firebase",
  },
  {
    title: "Flutter",
    icon: "flutter",
  },
  {
    title: "Git",
    icon: "git",
  },
  {
    title: "Heroku",
    icon: "heroku",
  },
  {
    title: "Html",
    icon: "html",
  },
  {
    title: "Javascript",
    icon: "javascript",
  },
  {
    title: "MongoDB",
    icon: "mongodb",
  },
  {
    title: "Node.js",
    icon: "nodejs",
  },
  {
    title: "Postman",
    icon: "postman",
  },
  {
    title: "React Native",
    icon: "react",
  },
  {
    title: "React",
    icon: "react",
  },
  {
    title: "Redux",
    icon: "redux",
  },
  {
    title: "Saas",
    icon: "saas",
  },
  {
    title: "Tailwind",
    icon: "tailwind",
  },
  {
    title: "Typescript",
    icon: "typescript",
  },
];

const AboutPage = () => {
  return (
    <div className="pt-20 max-w-7xl m-auto p-5">
      <div className="py-10 flex flex-col gap-5">
        <h1 className="md:text-5xl text-4xl text-primary text-center">
          A bit About Us
        </h1>
        <h2 className="md:text-2xl text-xl text-white ">
          {`We're a team of web developer and Mobile App Developer with
          experience in designing new features from ideation to production,
          implementation of wireframes and design flows into high performance
          software applications. We take into consideration the user experience
          while writing reusable and efficient code.`}
        </h2>
      </div>
      <div className="pt-10 flex flex-col gap-5">
        <h1 className="md:text-5xl text-4xl text-primary text-center">
          Technologies and Tools
        </h1>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 ">
        {tech.map((tech) => (
          <AboutIconCard key={tech.title} title={tech.title} icon={tech.icon} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
