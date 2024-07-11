import Image from "next/image";
import React from "react";
import Logo from "../../public/ui/logo.svg";
import { LaptopMinimal } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-between h-11 px-5 fixed top-0 z-40 bg-slate-600 ">
      <Image src={Logo} alt="Logo" className="blur-none" width={40} height={40} />
      <div className="w-2/3 bg-slate-600 opacity-70 h-full"></div>
      <LaptopMinimal color="white" size={30} />
    </div>
  );
};

export default Navbar;
