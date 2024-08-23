"use client"
import Image from 'next/image'
import React from 'react'
import TranLink from './TranLink'

function OrderHeader() {
  return (
    <div>
      <header className="bg-neutral-900 w-full sticky top-0 z-[20]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block" href="/">
               <Image src='/logo.png' alt="logo" width={70} height={70}/>
              </a>
            </div>         

            <div className="flex items-center gap-9">
              <nav aria-label="Global">
               <ul className="flex items-center gap-6 text-sm">
                 <li>
                    <TranLink label="Back to Home" href="/">
                      Home
                    </TranLink>
                 </li>
               </ul>
              </nav>

            <div className="flex items-center gap-2">
              <div className="flex sm:flex sm:gap-2">
                  {/* <div className='flex justify-center items-center p-2'>
                  {isLoaded&&user?<UserButton afterSignOutUrl='/'/>:""} 
                  </div>  */}
              </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default OrderHeader