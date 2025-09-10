import React from 'react'
import IconButton from '../reusable/IconButton'
import { FaRegHeart } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import Image from 'next/image'
import Link from 'next/link'
import { getPlaying } from '@/lib/playing'

const LikeAddBtn = () => {
  const songInfo = getPlaying()
  return (
    <div className=' flex gap-6 mx-6'>
          <div className='flex flex-col gap-1 items-center justify-center'>
            <IconButton icon={FaRegHeart} size={20}/>
            <h1 className='text-xs text-muted-foreground'>Like</h1>
        </div>
             <div className='flex flex-col gap-1 items-center justify-center'>
              <IconButton icon={GoPlus} size={20}/>
              <h1 className='text-xs text-muted-foreground'>Add to playlist</h1>
             </div> 
             <div className='flex flex-col items-center mb-2 '>
                <div className='mt-1.5 rounded-full -mb-1'>
                  <Image src={songInfo.createrProfile} alt='createrProfile' width={30} height={30}/>
                </div>
                         
                <h1 className='text-xs text-muted-foreground mt-2'>Created By <Link href='/profile' className='font-md text-streamr underline cursor-pointer'>{songInfo.createdBy}</Link></h1>
              </div>
        </div>
  )
}

export default LikeAddBtn
