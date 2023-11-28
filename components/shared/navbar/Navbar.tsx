import Sidebar from "../sidebar/Sidebar";
import NavbarContent from "./NavbarContent";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed h-20 w-full border-b bg-background z-50">
      <div className=" max-w-7xl m-auto flex items-center justify-between h-full px-5">
        <Link className="font-bold" href={"/"}>
          <Image src={logo} alt="Ibtida Logo" className=" w-40" />
        </Link>
        <div className="flex gap-5">
          <NavbarContent />
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
