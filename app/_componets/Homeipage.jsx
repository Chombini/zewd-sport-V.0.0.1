import BoxReveal from '@/components/magicui/box-reveal'
import React from 'react'


       
     

function Homeipage() {
  return (
     <div className='col-span-2 ml-5 mr-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:justify-between gap-2 mt-9'>
              <div className='hidden sm:flex h-40 md:h-80 w-full  flex-col justify-center lg:px-32 mt-10'>
                <BoxReveal boxColor={"#31B65D"} duration={0.5}>
                  <h1 className="text-4xl font-extrabold sm:text-5xl text-neutral-900">
                    Zewd-Sport
                    <strong className="block font-extrabold text-primary">
                      new mastery.
                    </strong>
                  </h1>
                </BoxReveal>
                <BoxReveal boxColor={"#31B65D"} duration={0.5}>
                  <p className="mt-4 text-[15px] max-w-lg sm:text-1xl/relaxed text-stone-400">
                    Are You ready for an epic learning adventure?  At Moonglows, 
                    we turn playtime into knowledge with interactive Ways, exciting stories, 
                    and quests that unlock amazing discoveries! Join us!! 
                  </p>
                </BoxReveal>
              </div>

              <div className='h-[550px] md:h-[550px] w-full flex items-center justify-center z-10'>
                <img alt='img' src="/file.png" className="w-full h-full bg-cover object-cover right-1 shadow-sm"/>
              </div>

              {/* <div className='sm:hidden flex h-40 md:h-80 w-full  flex-col justify-center lg:px-32 mt-6'>
                <BoxReveal boxColor={"#31B65D"} duration={0.5}>
                  <h1 className="text-4xl font-extrabold sm:text-5xl text-neutral-900">
                    Zewd-Sport
                    <strong className="block font-extrabold text-primary">
                      new mastery.
                    </strong>
                  </h1>
                </BoxReveal>
                <BoxReveal boxColor={"#31B65D"} duration={0.5}>
                  <p className="mt-4 text-[15px] max-w-lg sm:text-1xl/relaxed text-stone-400">
                    Are You ready for an epic learning adventure?  At Moonglows, 
                    we turn playtime into knowledge with interactive Ways, exciting stories, 
                    and quests that unlock amazing discoveries! Join us!! 
                  </p>
                </BoxReveal>
              </div> */}

{/* <div className='flex flex-row justify-between gap-3 items-center'>
        <div className='h-full w-[40%] bg-yellow-500'>
        heloo
        </div>
       
      </div> */}


        </div>
      </div>
  )
}

export default Homeipage