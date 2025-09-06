import Link from 'next/link'
import React from 'react'
import { GoHomeFill, GoPlus } from 'react-icons/go'
import { LuSearch } from 'react-icons/lu'
import { HiLibrary } from "react-icons/hi";
import { FaRegHeart } from 'react-icons/fa';


const MobileNav = () => {
  return (
    <div className="py-3 rounded px-2 gap-1 bg-secondary flex sm:hidden items-center justify-between border-t border-border dark:bg-black transition-all duration-300 sticky bottom-0 z-50 mx-2 opacity-80 ">
      <Link href='/home' className='flex flex-col gap-1 items-center justify-center'>
        <GoHomeFill className='text-white' size={25} />
        <h2 className='text-xs'>Home</h2>
      </Link>
      <Link href='/search' className='flex flex-col gap-1 items-center justify-center'>
        <LuSearch  className='text-white' size={25} />
        <h2 className='text-xs'>Search</h2>
      </Link>
      <Link href='/profile' className='flex flex-col gap-1 items-center justify-center'>
        <HiLibrary  className='text-white' size={25} />
        <h2 className='text-xs'>Your Library</h2>
      </Link>
      <Link href='/liked' className='flex flex-col gap-1 items-center justify-center'>
        <FaRegHeart  className='text-white' size={25} />
        <h2 className='text-xs'>Liked</h2>
      </Link>
      <Link href='/create-playlist' className='flex flex-col gap-1 items-center justify-center'>
        <GoPlus  className='text-white' size={25} />
        <h2 className='text-xs'>Create</h2>
      </Link>
      
    </div>
  )
}

export default MobileNav
