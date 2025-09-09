import { getPlaylistInfo, getPlaylistSongs } from '@/lib/playlist'
import Image from 'next/image'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import SearchInput from '../reusable/SearchInput'
import Link from 'next/link'

const PlayListInfo = () => {
    const playlistInfo = getPlaylistInfo()
    const playlistSongs =getPlaylistSongs()
  return (
    <div className='p-2 flex flex-col gap-4'>
     <div className="flex flex-col gap-2">
      <div className='flex gap-8'>
        <Image src={playlistSongs[0].image} alt="liked" width={100} height={100} className="rounded-lg"/>
        <div className='w-sm mt-4'>
          <p className='text-sm text-streamr/40'>{playlistInfo.bio}</p>
        </div>
          </div>
        
        <div className="flex gap-6 items-center">
          <h1 className="text-lg font-bold">{playlistInfo.name}</h1>
          <div className="flex flex-col justify-center items-center">
            <FaRegHeart size={15} className="text-streamr" />
            <span className="text-xs text-muted-foreground">{playlistInfo.likes} likes</span>
          </div>
          <h1 className='text-sm text-muted-foreground mt-2'>Created By <Link href='/profile' className='font-md text-streamr underline cursor-pointer'>{playlistInfo.createdBy}</Link></h1>
          
        </div>
      </div>
      
      <div>
        <SearchInput placeholder="Search" paddingY="2" />
      </div>
      </div>
  )
}

export default PlayListInfo
