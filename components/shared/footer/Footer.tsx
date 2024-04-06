import { Heart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className=" h-16 w-full border-t-[1px] bg-background">
      <div className="h-full flex justify-center items-center">
        <h1 className="flex items-center gap-x-1">
          Made with <Heart className="text-primary" fill="red" /> by Ibtidaa
          Team
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
