"use client";
import React from 'react'
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";


  function About() {
    return (
      
        <div id="about-Us">
          <h1 className="text-center pt-11 font-semibold">About-Us?</h1>
          <div className='p-5 sm:p-3 flex justify-center items-center'>
            <div>
              <BackgroundGradient className="rounded-[22px] w-auto md:w-[700px] p-4 sm:p-10  bg-white dark:bg-zinc-900">
                <div className="flex flex-col justify-center items-center">
                  <a className="block p-2" href="/">
                    <Image src='/logo1.png' alt="logo" width={70} height={70}/>
                  </a>
                  <h1 className="text-[30px] md:text-7xl pointer-events-none p-3 font-bold">
                    Zewd-Sport
                  </h1>
                </div>
              

                <p className="text-sm text-center p-5 text-neutral-900 dark:text-neutral-400">
                  since 1993 zewd sport was the collective vision of a small group of weekday warriors. 
                  For years, we were frustrated by the lack of active wear designed for men and women wanted 
                  something better. With that in mind, we set out to design premium apparel that is made for 
                  motion and engineered to endure.
                </p>

                <button
                  className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>Started</span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    1993 EC
                  </span>
                </button>
              </BackgroundGradient>
            </div>
          </div>
        </div>
    )
  }
  
  export default About

