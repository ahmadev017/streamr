import LoginHeader from '@/components/common/LoginHeader';
import React from 'react'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=' bg-white dark:bg-black text-black dark:text-white transition-colors duration-300'>
      
      <LoginHeader/>
      {children}
    </div>
  )
}

export default layout
