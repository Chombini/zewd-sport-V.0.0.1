import Image from 'next/image'
import React from 'react'


function Loading() {
   
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <Image className="animate-pulse" src='/logo1.png' alt="Loding..." width={70} height={70}/>
    </div>
  )
}

export default Loading