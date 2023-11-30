"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo.png";

import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export const sidebarLinks = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/#website",
    label: "Services",
  },
  {
    route: "/portfolio",
    label: "Portfolio",
  },
  {
    route: "/contact-us",
    label: "Contact Us",
  },
  {
    route: "/about-us",
    label: "About Us",
  },
];

const SidebarContent = () => {
  const pathname = usePathname();
  return (
    <section className=" flex h-full flex-col gap-6 ">
      {sidebarLinks.map((item) => {
        const isActive =
          // (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive && "bg-secondary text-white "
              } flex items-center justify-start gap-4 p-4 rounded`}
            >
              <p>{item.label}</p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className=" max-md:flex hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <Link href="/">
          <Image src={logo} width={150} alt="Ibtidaa Logo" />
        </Link>
        <div>
          <SheetClose asChild>
            <SidebarContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
