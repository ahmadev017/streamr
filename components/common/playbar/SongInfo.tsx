import IconButton from '@/components/reusable/IconButton'
import { getPlaying } from '@/lib/playing'
import Image from 'next/image'
import React from 'react'
import { TiTick } from 'react-icons/ti'

const SongInfo = () => {
  const playingData = getPlaying()
  return (
    <div className="sm:flex sm:gap-3 lg:gap-12 hidden items-center justify-center">
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
        <IconButton icon={TiTick} size={15} />
      </div>
              
      </div>
  )
}

export default SongInfo
