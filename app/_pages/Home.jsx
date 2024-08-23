"use client";
import React from 'react'
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import Homeipage from '../_componets/Homeipage';
import HomePage2 from '../_componets/HomePage2';

function HomePage() {
  return (
    <div className='w-100%'>
     <div className="relative flex h-full w-full flex-col items-center overflow-hidden bg-background">
      <Homeipage/>
      {/* <HomePage2/> */}
       <GridPattern
         squares={[
           [4, 4],
           [5, 1],
           [8, 2],
           [5, 3],
           [5, 5],
           [10, 10],
           [12, 15],
           [15, 10],
           [10, 15],
           [15, 10],
           [10, 15],
           [15, 10],
         ]}
         className={cn(
           "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
           "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
         )}
       />
     </div>
    </div>
    
  )
}

export default HomePage
