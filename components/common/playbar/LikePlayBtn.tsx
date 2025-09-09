"use client";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";
import { IoPlay } from "react-icons/io5";

const LikePlayBtn = () => {
  const [isLiked, setIsLiked] = useState(true);
  const [play, setPlay] = useState(true);
  return (
    <div className="flex gap-4 text-white mr-2">
      {isLiked ? (
        <button onClick={() => setIsLiked(false)} className="cursor-pointer">
          <FaHeart size={20} className="text-streamr" />
        </button>
      ) : (
        <button onClick={() => setIsLiked(true)} className="cursor-pointer">
          <FaRegHeart size={20} className="text-streamr" />
        </button>
      )}

      {play ? (
        <button onClick={() => setPlay(false)} className="cursor-pointer">
          <IoPlay size={25} />
        </button>
      ) : (
        <button onClick={() => setPlay(true)} className="cursor-pointer">
          <GiPauseButton size={25} />
        </button>
      )}
    </div>
  );
};

export default LikePlayBtn;
