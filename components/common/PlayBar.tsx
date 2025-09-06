"use client"
import Image from "next/image";
import React, { useState } from "react";
import {Volume2, VolumeOff } from "lucide-react";
import { getPlaying } from "@/lib/playing";
import { Progress } from "../ui/progress";
import { FaHeart, FaPauseCircle, FaPlay, FaPlayCircle, FaRegHeart } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { BsArrowRepeat } from "react-icons/bs";
import { IoPlay, IoRepeatSharp } from "react-icons/io5";
import IconButton from "../reusable/IconButton";
import { TiTick } from "react-icons/ti";
import { GiPauseButton } from "react-icons/gi";
import { Slider } from "../ui/slider";

const PlayBar = () => {
  const playingData = getPlaying()
  const [isLiked, setIsLiked] = useState(true)
  const [volume, setVolume] = useState(true)
  const [play, setPlay] = useState(true)
  return (
    <>
    <div className="py-1 hidden transition-colors duration-300 px-2 sm:flex items-center justify-between border-t border-border bg-secondary  sticky bottom-0 z-50 ">

      <div className="sm:flex gap-3 hidden ">
         <div className="relative h-full w-10 aspect-square">
                 <Image
                   src={playingData.image}
                   alt="playing"
                   fill
                   className="object-contain"
                 />
               </div>
               <div className="flex flex-col mt-1">
        <h1 className="text-[10px] font-bold">{playingData.title}</h1>
        <p className="text-[10px] -mt-0.5 text-muted-foreground">{playingData.artist}</p>
      </div>
      </div>
        <div className="hidden sm:flex">
          <IconButton icon={TiTick} size={15}/>
        </div>
      
      

      <div className="flex flex-col gap-1">
        <div className=" flex items-center justify-center gap-8">
          <div className=" flex items-center justify-center">
            <button className="cursor-pointer mr-4">
            <IoRepeatSharp size={15} className="text-muted-foreground"/>
          </button>
          <button className="cursor-pointer">
            <GrFormPrevious size={20} className="text-muted-foreground" />
          </button>
          
          {
            play?
            <button onClick={()=>setPlay(false)} className="cursor-pointer">
            <FaPlayCircle size={25}/>     
          </button> :
          <button onClick={()=>setPlay(true)} className="cursor-pointer">
            <FaPauseCircle size={25} />
          </button>
          
          }
          <button className="cursor-pointer">
            <MdNavigateNext size={20} className="text-muted-foreground" />
          </button>
          <button className="cursor-pointer ml-4">
            <BsArrowRepeat size={15} className="text-muted-foreground"/>
          </button>
          </div>
          {
          isLiked?
          <button onClick={()=>setIsLiked(false)} className="cursor-pointer">
          <IconButton icon={FaHeart} size={10} />
        </button> :
        <button onClick={()=>setIsLiked(true)} className="cursor-pointer">
          <IconButton icon={FaRegHeart} size={10} />
        </button>
        }
            
            
          
          
          
             
        </div>
        <div className="flex gap-2 items-center">
            <p className="text-[10px] text-muted-foreground">{playingData.played}</p>
          <Progress value={70}  className="w-70 md:w-100 lg:w-120 h-[4px]"/>
          <p className="text-[10px] text-muted-foreground">{playingData.total}</p>
        </div>

      </div>

      <div className="flex items-center gap-2 mr-8">
        {
          volume?
          <button onClick={()=>setVolume(false)} className="cursor-pointer">
          <Volume2 size={15}/>
        </button> :
        <button onClick={()=>setVolume(true)} className="cursor-pointer">
          <VolumeOff size={15}/>
        </button>
        }
        
        
        
        <Slider defaultValue={[33]} max={100} step={1} className="w-10 md:w-15 lg:w-20 h-[1px]"/>

      </div>
      
    </div>
    <div className="pt-2 rounded px-2 gap-1 bg-secondary flex flex-col sm:hidden items-center justify-between border-t border-border dark:bg-gray-700 transition-all duration-300 sticky bottom-0 z-50 mx-2 opacity-80 ">
      <div className="flex w-full items-center justify-between">
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
        <p className="text-[10px] -mt-0.5 text-muted-foreground">{playingData.artist}</p>
      </div>
        </div>
        <div className="flex gap-4 text-white mr-2">
          {
          isLiked?
          <button onClick={()=>setIsLiked(false)} className="cursor-pointer">
          <FaHeart size={20} className="text-streamr"/>
        </button> :
        <button onClick={()=>setIsLiked(true)} className="cursor-pointer">
          <FaRegHeart size={20} className="text-streamr"/>
        </button>
        }

        {
          play?
          <button onClick={()=>setPlay(false)} className="cursor-pointer">
          <IoPlay size={25} />
        </button> :
        <button onClick={()=>setPlay(true)} className="cursor-pointer">
          <GiPauseButton size={25}/>
        </button>
        }
         
        </div>
        
      </div>
      
        

      <Progress value={70}  className="w-full h-[2px]"/>
    </div>

    </>
    
  );
};

export default PlayBar;