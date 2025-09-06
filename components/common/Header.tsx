import Image from "next/image";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { GoHomeFill } from "react-icons/go";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-[60px] w-screen px-4 sm:px-10  flex items-center justify-between  sticky top-0 z-50">
      
      {/* Logo */}
      <div className="flex gap-6 items-center">
        <div className="flex gap-2 items-center">
          <Image src="/logo.png" width={28} height={28} alt="logo" />
        <h1 className="text-[18px] font-bold">Streamr</h1>
        </div>
        <div className=" hidden sm:flex">
          <Link href={'/home'} className="rounded-full hidden lg:block bg-secondary transition-colors duration-300 p-2">
        
          <GoHomeFill size={30} />
        
          
        </Link>
       <div className="relative flex-1 sm:w-sm md:w-md lg:w-lg mx-6 bg-secondary transition-colors duration-300 rounded-full">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          size={20}
        />
        <Input className="rounded-full py-6 pl-12" placeholder="What do you want to play?" />
      </div>
        </div>
        

      </div>

      {/* Search Bar */}
      

      {/* Profile + Theme toggle */}
      <div className="flex items-center space-x-3">
        <Image
          className="cursor-pointer"
          src="/profile.png"
          width={32}
          height={32}
          alt="profile"
        />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;

