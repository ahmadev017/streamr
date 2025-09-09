import Image from 'next/image'
import React from 'react'
import SearchInput from '../reusable/SearchInput'
import { getLikedSongs } from '@/lib/liked'

const LikedPageInfo = () => {
    const likedSongs = getLikedSongs()
  return (
    <div className='p-2 flex flex-col gap-4'>
        <div className="flex flex-col gap-2">
        <Image
          src={likedSongs[0].image}
          alt="liked"
          width={100}
          height={100}
          className="rounded-lg"
        />
        <div className="flex gap-6 items-center">
          <h1 className="text-lg font-bold">Liked Songs</h1>
          
        </div>
      </div>
      
      <div>
        <SearchInput placeholder="Search" paddingY="2" />
      </div>
      </div>
  )
}

export default LikedPageInfo
