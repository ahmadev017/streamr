"use client";
import { Progress } from "@/components/ui/progress";

import MobileSongInfo from "./MobileSongInfo";
import LikePlayBtn from "./LikePlayBtn";

const MobilePlaybar = () => {
  return (
    <div className="pt-2 rounded px-2 gap-1 bg-secondary flex flex-col sm:hidden items-center justify-between border-t border-border dark:bg-gray-700 transition-all duration-300 sticky bottom-0 z-50 mx-2 opacity-80 ">
      <div className="flex w-full items-center justify-between">
        <MobileSongInfo />
        <LikePlayBtn />
      </div>

      <Progress value={70} className="w-full h-[2px]" />
    </div>
  );
};

export default MobilePlaybar;
