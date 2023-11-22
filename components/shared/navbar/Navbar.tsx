import Sidebar from "../sidebar/Sidebar";
import NavbarContent from "./NavbarContent";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      style={{ zIndex: 1000 }}
      className="fixed h-20 w-full border-b-[1px] bg-background"
    >
      <div className=" max-w-7xl m-auto flex items-center justify-between h-full px-5">
        <Link className="font-bold" href={"/"}>
          <Image
            style={{ width: 200, height: 220, marginTop: 20 }}
            src={logo}
            alt="h"
          />
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
