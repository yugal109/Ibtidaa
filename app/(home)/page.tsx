import Home from "@/components/shared/home/Home";
import Services from "@/components/shared/home/Services";
// import js from "../../three.js";
import Script from "next/script";
import "../globals.css";

export default function page() {
  return (
    <div className="pt-20">
      <Home />
      <Services />
    </div>
  );
}
