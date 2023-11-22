"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../../ui/button";
import NavbarContent from "../navbar/NavbarContent";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex md:hidden">
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>LOGO</SheetTitle>
          <SheetClose asChild className="pt-10">
            {/* <Link href="">
              <span>Home</span>
            </Link> */}
            <NavbarContent />
          </SheetClose>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
