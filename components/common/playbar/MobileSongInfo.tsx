import { getPlaying } from "@/lib/playing";
import Image from "next/image";
import React from "react";

const MobileSongInfo = () => {
  const playingData = getPlaying();
  return (
    <div className="flex gap-3">
      <div className="relative h-full w-10 aspect-square border-2 rounded border-white">
        <Image
          src={playingData.image}
          alt="playing"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col mt-1">
        <h1 className="text-[10px] font-bold">{playingData.title}</h1>
        <p className="text-[10px] -mt-0.5 text-muted-foreground">
          {playingData.artist}
        </p>
      </div>
    </div>
  );
};

export default MobileSongInfo;
