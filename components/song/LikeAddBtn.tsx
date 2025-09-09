import React from 'react'
import IconButton from '../reusable/IconButton'
import { FaRegHeart } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'

const LikeAddBtn = () => {
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
        </div>
  )
}

export default LikeAddBtn
