import { getPlaying } from "@/lib/playing";
import Image from "next/image";
import React from "react";

const SongInfo = () => {
  const playingData = getPlaying();
  return (
    <div className="flex flex-col items-center gap-4 justify-center">
      <div className="flex flex-col gap-4">
        <Image
          src={playingData.image}
          alt="playing"
          width={500}
          height={500}
          className="w-60 h-60 sm:w-70 sm:h-70 md:w-80 md:h-80 lg:w-70 lg:h-70 rounded-lg object-cover"
        />

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-md font-bold">{playingData.title}</h1>
          <p className="text-sm font-normal text-muted-foreground">
            {playingData.artist}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SongInfo;
