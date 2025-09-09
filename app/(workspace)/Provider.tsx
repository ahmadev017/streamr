import Header from "@/components/common/Header";
import LeftSidebar from "@/components/common/LeftSidebar";
import MobileNav from "@/components/common/MobileNav";
import PlayBar from "@/components/common/PlayBar";
import RightSidebar from "@/components/common/RightSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <SidebarProvider>
          <div className=" flex-none overflow-y-auto">
            <LeftSidebar />
          </div>
          <div className="flex-1 bg-secondary transition-colors duration-300 overflow-hidden h-[calc(100vh-115px)] rounded-md mx-2  w-[10vw] md:w-[40vw] lg:w-[50vw]">
            {children}
          </div>
        </SidebarProvider>
        <div className="hidden lg:block flex-none">
          <SidebarProvider>
            <RightSidebar />
          </SidebarProvider>
        </div>
      </main>
      <PlayBar />
      <MobileNav />
    </div>
  );
};

export default Provider;
