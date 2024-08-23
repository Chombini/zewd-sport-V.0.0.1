"use client"
import React from 'react';
import WordRotate from "@/components/magicui/word-rotate";
import Image from 'next/image';
import ThankYouHeader from "../../_componets/ThankYouHeader"

function page() {
  return (
    <div>
      <div className='w-full sticky'>
        <ThankYouHeader/> 
      </div>
      <div className="h-[100vh] w-full flex flex-col justify-center items-center p-2">
        <div>
          <Image src="/im-7.jpeg" alt="img" width={350} height={350}/>
        </div>
        <div className="flex flex-col justify-center items-center">
          <WordRotate
            className="text-[35px] p-2 font-bold text-black dark:text-white"
            words={["Thank You!!", "For Ordering!!"]}/>
        </div>
      </div>
    </div>
  )
}

export default page
