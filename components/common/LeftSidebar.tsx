"use client";
import { IoMdHome, IoIosAddCircle } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";

const items = [
  { title: "Home", url: "/home", icon: IoMdHome },
  { title: "Search from youtube", url: "/search", icon:CiSearch  },
  { title: "Your Library", url: "/profile", icon: LuLayoutDashboard },
  { title: "Create Playlist", url: "/create-playlist", icon: IoIosAddCircle },
  { title: "Liked songs", url: "/liked", icon: FaRegHeart },

];

export const LeftSidebar: React.FC = () => {
  const path = usePathname();

  return (
    <Sidebar
  side="left"
  className=" text-muted-foreground font-md bg-secondary transition-colors duration-300
             h-[calc(100vh-115px)] mt-[60px] rounded-xl shadow-md overflow-hidden"
>
  <SidebarContent className="bg-secondary transition-colors duration-300">
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu className="pl-2 pt-8">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link
                  href={item.url}
                  className={`flex items-center gap-2 rounded-md px-3 py-2 transition-colors duration-300 ${
                    path === item.url
                      ? " bg-streamr/90 hover:bg-streamr hover:text-black !text-black"
                      : "hover:bg-streamr/50 hover:text-black dark:hover:text-black"
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  </SidebarContent>
</Sidebar>

  );
};


export default LeftSidebar;
