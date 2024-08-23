import ShineBorder from "@/components/magicui/shine-border";
import Image from "next/image";
import React from 'react'


  function About() {
    return (
     <div id="about-Us">
      <h1 className="text-center pt-11 font-semibold">About-Us?</h1>
       <div className='p-5 sm:p-3 flex justify-center items-center'>
        <ShineBorder 
        className="relative flex w-full h-[500px] md:w-[800px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background transition ease-in-out delay-150 hover:shadow-xl" 
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}> 
          <a className="block p-2" href="/">
           <Image src='/logo1.png' alt="logo" width={70} height={70}/>
          </a> 
          <span className="sm:text-5xl md:text-7xl pointer-events-none whitespace-pre-wrap p-3 bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-[40px] font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Zewd-Sport
          </span>
          <p className="text-center p-5 md:text-[16px] max-w-lg sm:text-[10px] font-normal text-stone-800">
              since 1993 zewd sport was the collective vision of a small group of weekday warriors. 
              For years, we were frustrated by the lack of active wear designed for men and women wanted 
              something better. With that in mind, we set out to design premium apparel that is made for 
              motion and engineered to endure. 
          </p>
        </ShineBorder>
       </div>
     </div>
    )
  }
  
  export default About