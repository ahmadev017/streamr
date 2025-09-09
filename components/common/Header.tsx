import Image from "next/image";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { GoHomeFill } from "react-icons/go";
import Link from "next/link";
import StreamrLogo from "../reusable/StreamrLogo";
import SearchInput from "../reusable/SearchInput";

const Header = () => {
  return (
    <div className="h-[60px] w-screen px-4 sm:px-10  flex items-center justify-between  sticky top-0 z-50">
      <div className="flex gap-6 items-center">
        <StreamrLogo />
        
        <div className=" hidden sm:flex">
          <Link
            href={"/home"}
            className="rounded-full hidden lg:block bg-secondary transition-colors        duration-300 p-2"
          >
            <GoHomeFill size={30} />
          </Link>
          <div className="mx-6">
            <SearchInput placeholder="What do you want to play?" paddingY="6" />
          </div>
          
        </div>
      </div>
      
       <div className="flex items-center space-x-3">
      <Link href={'/profile'}>
        <Image
          className="cursor-pointer"
          src="/profile.png"
          width={32}
          height={32}
          alt="profile"
        /></Link>
        <ThemeToggle /></div>
      
    </div>
  );
};

export default Header;
