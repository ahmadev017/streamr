import { getPlaying } from '@/lib/playing';
import Image from 'next/image'
import React from 'react'

const AboutArtist = () => {
   const playingData = getPlaying();
  return (
    <div className="flex flex-col">
          <div className="relative w-full aspect-square">
            <Image
              src={playingData.artistImage}
              alt="artist"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col pl-2">
            <h1 className="text-md font-bold">{playingData.artist}</h1>
            <p className="text-sm text-muted-foreground">
              {playingData.monthlyListners} monthly listeners
            </p>
          </div>
        </div>
  )
}

export default AboutArtist
