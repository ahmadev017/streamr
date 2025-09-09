"use client";
import React from "react";
import HomeContent from "@/components/reusable/HomeContent";
import { getRecents, getRecomended, getTrending } from "@/lib/home";
import { SidebarTrigger } from "@/components/ui/sidebar";
import SearchInput from "@/components/reusable/SearchInput";

const Page = () => {
  const trendingData = getTrending();
  const recentData = getRecents();
  const recomendedData = getRecomended();

  return (
    <div className="p-2 flex flex-col gap-4 rounded-md overflow-y-auto overflow-hidden top-0 custom-scrollbar sm:h-[calc(100vh-115px)] h-[calc(100vh-200px)]">
      <div className="sm:block hidden md:hidden">
        <SidebarTrigger />
      </div>

      <h1 className="text-2xl text-streamr font-bold">Good Evening</h1>
      <div className="block sm:hidden">
        <SearchInput placeholder="What do you want to play?"/>
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
