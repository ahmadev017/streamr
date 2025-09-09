import Link from "next/link";
import React from "react";
import { GoHomeFill, GoPlus } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { HiLibrary } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";

const MobileNav = () => {
  const items = [
    { title: "Home", url: "/home", icon: GoHomeFill },
    { title: "Search", url: "/search", icon: LuSearch },
    { title: "Your Library", url: "/profile", icon: HiLibrary },
    { title: "Liked", url: "/liked", icon: FaRegHeart },
    { title: "Create", url: "/create-playlist", icon: GoPlus },
  ];

  return (
    <div className="py-3 rounded px-2 gap-1 bg-secondary flex sm:hidden items-center justify-between border-t border-border dark:bg-black transition-all duration-300 sticky bottom-0 z-50 mx-2 opacity-80 ">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className="flex flex-col gap-1 items-center justify-center"
        >
          <item.icon className="text-white" size={25} />
          <h2 className="text-xs">{item.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
