import { getPlaying } from '@/lib/playing'
import Image from 'next/image'
import React from 'react'

const SongInfo = () => {
    const playingData = getPlaying()
  return (
    <div className='flex flex-col items-center gap-4 justify-center h-[50%] sm:h-[60%]'>
        <div className='flex flex-col gap-4'>
          <Image src={playingData.image} alt='playing' width={170} height={170}/>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-md font-bold'>{playingData.title}</h1>
          <p className='text-sm font-normal text-muted-foreground'>{playingData.artist}</p>
        </div>
        
        </div>
        

      </div>
  )
}

export default SongInfo
