"use client";
import ProfileAllSections from "@/components/profilePage/profileAllSections";
import ProfileInfo from "@/components/profilePage/profileInfo";
import ProfileNavs from "@/components/profilePage/ProfileNavs";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {getLiked,getPrivatePlaylists,getPublicPlaylists,getUserCreations,} from "@/lib/profile";
import React, { useState } from "react";

const Page = () => {
  const publicPlaylists = getPublicPlaylists();
  const privatePlaylists = getPrivatePlaylists();
  const userCreations = getUserCreations();
  const liked = getLiked();

  const [activeTab, setActiveTab] = useState<
    "all" | "public" | "private" | "creations" | "liked"
  >("all");

  return (
    <div className="flex flex-col gap-6 rounded-md overflow-y-auto overflow-hidden top-0 custom-scrollbar sm:h-[calc(100vh-115px)] h-[calc(100vh-200px)]">
      <ProfileInfo />
      <div className="flex flex-col gap-4 mx-3">
        <ProfileNavs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProfileAllSections
        activeTab={activeTab}
        publicPlaylists={publicPlaylists}
        privatePlaylists={privatePlaylists}
        userCreations={userCreations}
        liked={liked}
      />
      </div>
      
    </div>
  );
};

export default Page;




