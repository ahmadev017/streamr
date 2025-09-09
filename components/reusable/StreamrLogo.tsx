import Image from 'next/image'
import React from 'react'

const StreamrLogo = () => {
  return (
    <div className="flex gap-2">
            <Image src="/logo.png" width={20} height={20} alt="logo" />
            <h1 className="text-[18px] font-bold">Streamr</h1>
          </div>
  )
}

export default StreamrLogo
