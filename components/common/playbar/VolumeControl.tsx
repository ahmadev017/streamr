"use client";
import { Slider } from "@/components/ui/slider";
import { Volume2, VolumeOff } from "lucide-react";
import React, { useState } from "react";

const VolumeControl = () => {
  const [volume, setVolume] = useState(true);
  return (
    <div className="flex items-center gap-2 mr-8">
      {volume ? (
        <button onClick={() => setVolume(false)} className="cursor-pointer">
          <Volume2 size={15} />
        </button>
      ) : (
        <button onClick={() => setVolume(true)} className="cursor-pointer">
          <VolumeOff size={15} />
        </button>
      )}

      <Slider
        defaultValue={[33]}
        max={100}
        step={1}
        className="w-10 md:w-15 lg:w-20 h-[1px]"
      />
    </div>
  );
};

export default VolumeControl;
