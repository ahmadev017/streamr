"use client";
import React from "react";
import HomeContent from "@/components/reusable/HomeContent";
import { getRecents, getRecomended, getTrending } from "@/lib/trending";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Page = () => {
  const trendingData = getTrending();
  const recentData = getRecents();
  const recomendedData = getRecomended();

  return (
    <div
      className="py-2 px-2 flex flex-col gap-4 rounded-md 
             overflow-y-auto overflow-hidden top-0 custom-scrollbar sm:h-[calc(100vh-115px)] h-[calc(100vh-200px)] "
    >
      <div className="sm:block hidden md:hidden">
        <SidebarTrigger />
      </div>

      <h1 className="text-2xl text-streamr font-bold">Good Evening</h1>
      <div className="relative block sm:hidden mx-2">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          size={18}
        />
        <Input
          className="rounded-full h-12 pl-12 pr-4"
          placeholder="What do you want to play?"
        />
      </div>
      <div className="flex flex-col gap-2">
        <HomeContent title="Top Playlists" data={trendingData} pl={2} />
        <HomeContent title="Recently played" data={recentData} pl={30} />
        <HomeContent title="Recommended" data={recomendedData} pl={2} />
      </div>
    </div>
  );
};

export default Page;
