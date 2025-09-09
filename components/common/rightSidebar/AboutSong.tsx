import IconButton from '@/components/reusable/IconButton';
import { getPlaying } from '@/lib/playing';
import Image from 'next/image'
import React from 'react'
import { TiTick } from 'react-icons/ti';

const AboutSong = () => {
  const playingData = getPlaying();
  return (
    <div className="flex flex-col gap-1">
          <div className="relative w-full aspect-square">
            <Image
              src={playingData.image}
              alt="playing"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-between px-2">
            <div className="flex flex-col">
              <h1 className="text-md font-bold">{playingData.title}</h1>
            <p className="text-sm text-muted-foreground">
              {playingData.artist}
            </p>
            </div>
            
              <IconButton icon={TiTick} size={15}/>
            
            
          </div>
        </div>
  )
}

export default AboutSong
