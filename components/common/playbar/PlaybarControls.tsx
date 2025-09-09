"use client";
import IconButton from "@/components/reusable/IconButton";
import { Progress } from "@/components/ui/progress";
import { getPlaying } from "@/lib/playing";
import React, { useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import {
  FaHeart,
  FaPauseCircle,
  FaPlayCircle,
  FaRegHeart,
} from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { IoRepeatSharp } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";

const PlaybarControls = () => {
  const playingData = getPlaying();
  const [play, setPlay] = useState(true);
  const [isLiked, setIsLiked] = useState(true);
  return (
    <div className="flex flex-col gap-1">
      <div className=" flex items-center justify-center gap-8">
        <div className=" flex items-center justify-center">
          <button className="cursor-pointer mr-4">
            <IoRepeatSharp size={15} className="text-muted-foreground" />
          </button>
          <button className="cursor-pointer">
            <GrFormPrevious size={20} className="text-muted-foreground" />
          </button>

          {play ? (
            <button onClick={() => setPlay(false)} className="cursor-pointer">
              <FaPlayCircle size={25} />
            </button>
          ) : (
            <button onClick={() => setPlay(true)} className="cursor-pointer">
              <FaPauseCircle size={25} />
            </button>
          )}
          <button className="cursor-pointer">
            <MdNavigateNext size={20} className="text-muted-foreground" />
          </button>
          <button className="cursor-pointer ml-4">
            <BsArrowRepeat size={15} className="text-muted-foreground" />
          </button>
        </div>

         {/*Like button*/}

        {isLiked ? (
          <button onClick={() => setIsLiked(false)} className="cursor-pointer">
            <IconButton icon={FaHeart} size={10} />
          </button>
        ) : (
          <button onClick={() => setIsLiked(true)} className="cursor-pointer">
            <IconButton icon={FaRegHeart} size={10} />
          </button>
        )}
      </div>

      {/*lower progressbar*/}

      <div className="flex gap-2 items-center">
        <p className="text-[10px] text-muted-foreground">
          {playingData.played}
        </p>
        <Progress value={70} className="w-70 md:w-100 lg:w-120 h-[4px]" />
        <p className="text-[10px] text-muted-foreground">{playingData.total}</p>
      </div>
    </div>
  );
};

export default PlaybarControls;
