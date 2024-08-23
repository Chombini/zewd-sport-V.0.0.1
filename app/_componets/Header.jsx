"use client"
import React, { useContext, useEffect, useState } from 'react';
import { UserButton,useUser } from '@clerk/nextjs'
import { CircleCheck, Search, ShoppingCart} from 'lucide-react'
import Image from 'next/image'
import supabase from '@/supabaseConfig';
import { UpdateCartContext } from '../_context/UpdateCartContext';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import CardList from './CardList';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

import { motion } from "framer-motion";
import TranLink from './TranLink';





function Header() {
  const {updateCart,setUpdateCart} =useContext(UpdateCartContext)
  const router = useRouter()
  const { user,isLoaded } = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  
  const [fetchError, setFetchError] = useState(null);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isLoading2, setIsLoading2] = useState(false);
 

  


  // i need user name here!!
// const userName = user?.primaryEmailAddress.userName;

    useEffect(() => {
      getCartItems();
    }, [userEmail&&updateCart]);



    useEffect(()=>{
      let total = 0;
      data.forEach(element => {
        total=total+element.amount
      });
      setTotal(total.toFixed(2))
    },[data])




const getCartItems=async() =>{
    try {
      const { data, count, error } = await supabase
        .from('cart')
        .select('*', { count: 'exact' })
        .filter('userEmail', 'eq', userEmail);

      if (error) {
        setFetchError(error.message);
      } else {
        setCount(count);
        setData(data);
      }
    } catch (error) {
      setFetchError('Unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
    // console.log(fetchError);
  };

const handleDelete = async () => {
    setIsLoading2(true);
    try {
      const { data, error } = await supabase
        .from('cart')
        .delete()
        .eq('userEmail', userEmail);

      if (error) {
        toast('Error deleting data');
      } else {
        toast(" Item Removed!! ",
          {action: {
          label: <CircleCheck className="text-primary"/>,
        }})
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    } finally {
      setIsLoading2(false);
      getCartItems();
    }
  };

  
  

  return (
    <motion.header 
      animate={{ y: -2 }} 
      initial={{ y: -19 }} 
      transition={{ type: "tween", duration: "0.9" }}
    className="bg-neutral-900 w-full sticky top-0 z-[20]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a class="block" href="/">
               <Image src='/logo.png' alt="logo" width={70} height={70}/>
              </a>
            </div>         

            <div className="md:flex md:items-center md:gap-9">
              <nav aria-label="Global" className="hidden md:block">
               <ul className="flex items-center gap-6 text-sm">
                 <li>
                  <a className="text-gray-200 transition hover:text-gray-400/75" href="#about-Us"> About-Us </a>
                 </li>

                <li>
                  <a className="text-gray-200 transition hover:text-gray-400/75" href="#products"> Products </a>
                </li>

                <li>
                  <a className="text-gray-200 transition hover:text-gray-400/75" href="#contact-us"> Contact-Us </a>
                </li>

                <li>{!user&&isLoaded?
                      <a
                      className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                        href="/sign-up"
                      >
                      Login
                      </a>:""}
                </li>
               </ul>
              </nav>

            <div className="flex items-center gap-2">
              <div className="flex sm:flex sm:gap-2">
                <div className='gap-3 hidden md:flex'>
                <form className="ml-auto flex-1 sm:flex-initial bg-transparent">
                 <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                      type="search"
                      placeholder="Search products..."
                      className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-transparent border border-gray-600 text-gray-100"/>
                 </div>
                </form> 
                  </div> 
                  {user?

                      <Sheet>
                        <SheetTrigger>
                          <div className='flex justify-center items-center pl-3 cursor-pointer'>
                            <ShoppingCart className='text-emerald-100 gap-3 w-5 h-5'/>
                            <span className='text-emerald-400 sm:text-[20px] font-bold p-1 pt-2'>
                                {count !== null ? count : 0}
                            </span>
                          </div>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle className="p-2">Your Cart</SheetTitle>
                              <SheetDescription>
                                  <CardList data={data} handleDelete={handleDelete} isLoading2={isLoading2}/>
                              </SheetDescription>
                          </SheetHeader>
                          <SheetClose asChild>
                            <div className='absolute w-[90%] bg-white bottom-6 flex flex-col'>
                              <h2 className='text-lg font-bold flex justify-between p-2'>Total<span>{total}birr</span></h2>
                              <TranLink label="Order👍" href={count === 0 ? '/' : '/order'}/> 
                              {/* <Button onClick={()=>router.push(count === 0?"/":"/order")}>Order👍</Button> */}
                            </div>
                          </SheetClose>
                        </SheetContent>
                      </Sheet>:      

                      <div className='flex justify-center items-center pl-3 cursor-pointer'>
                        <ShoppingCart className='text-emerald-100 gap-3 w-5 h-5'/>
                        <span className='text-emerald-400 sm:text-[20px] font-bold p-1 pt-2'>
                          0
                        </span>
                      </div>

                      }

                  <div className='flex justify-center items-center p-2'>
                    {user&&isLoaded?<UserButton/>:""} 
                  </div>
                      
              </div>

            <div class="block md:hidden"> 
               <Sheet>

                <SheetTrigger asChild>
                   <button class="rounded bg-transparent p-1 text-gray-100 transition hover:text-gray-400/75">
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      width="30" 
                      height="30" viewBox="0 0 24 24" 
                      fill="none" stroke="currentColor" 
                      stroke-width="2" stroke-linecap="round" 
                      stroke-linejoin="round" 
                      class="lucide lucide-align-right">
                        <line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="9" y1="12" y2="12"/><line x1="21" x2="7" y1="18" y2="18"/>
                      </svg>
                   </button>
                </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Menu</SheetTitle>
                      <SheetClose asChild>
                            <div className='w-[90%] bg-white flex gap-2 m-4 flex-col text-left'>
                                <Button className='p-3 text-black bg-slate-200 rounded-md hover:bg-primary hover:text-white' onClick={()=>router.push("#about-Us")}>About-us 👍</Button>
                                <Button className='p-3 text-black bg-slate-200 rounded-md hover:bg-primary hover:text-white' onClick={()=>router.push("#products")}>Products ⚽</Button>
                                <Button className='p-3 text-black bg-slate-200 rounded-md hover:bg-primary hover:text-white' onClick={()=>router.push("#contact-us")}>Contact-us 📱</Button>
                            </div>
                      </SheetClose> 
                    </SheetHeader>
                  </SheetContent>
               </Sheet>
            </div>
              </div>
            </div>
          </div>
        </div>
    </motion.header>
  )
}

export default Header