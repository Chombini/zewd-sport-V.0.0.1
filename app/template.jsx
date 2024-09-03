"use client"
import { animatePageIn } from "@/utils/animation";
import Image from "next/image";
import { useEffect } from "react";


export default function Template({ children }) {
    useEffect(()=>{
       animatePageIn()
    },[])

    return(
    <div>
        <div id="bannerOne" className="min-h-screen bg-neutral-900 z-[100] fixed top-0 left-0 w-full">
          <div className='flex justify-center items-center min-h-screen'>
            <Image className="animate-pulse" src='/logo.png' alt="Loding..." width={60} height={60}/>
          </div>
        </div>
        {children}
    </div>)
  }