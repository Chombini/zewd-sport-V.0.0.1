import Image from 'next/image'
import React from 'react'

function HomePage2() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src="/img-1.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  )
}

export default HomePage2