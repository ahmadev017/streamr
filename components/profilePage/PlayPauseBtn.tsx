"use client"
import React, { useState } from 'react'
import { GiPauseButton } from 'react-icons/gi';
import { IoPlay } from 'react-icons/io5';

const PlayPauseBtn = () => {
    const [isPlay, setIsPlay] = useState(true);
  return (
     <div className="absolute text-black bottom-3 right-2 rounded-full p-2 hover:bg-streamr/80 bg-streamr flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 cursor-pointer">
        {isPlay ? 
          <button onClick={() => setIsPlay(false)} className="cursor-pointer"><IoPlay size={25} /></button>
          : 
          <button onClick={() => setIsPlay(true)} className="cursor-pointer"><GiPauseButton size={25} /></button>}
      </div>
  )
}

export default PlayPauseBtn
