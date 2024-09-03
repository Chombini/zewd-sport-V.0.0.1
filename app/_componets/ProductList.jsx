"use client";
import React, { useEffect, useState } from 'react'
import ProdactItem from './ProdactItem'
import supabase from '@/supabaseConfig';
import { useUser } from '@clerk/nextjs';
import CatagoryFilter from '../_componets/CatagoryFilter'
import { ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react'
import Link from "next/link"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import HomePage from '../_pages/Home';
import ItemFilterColor from './ItemFilterColor';
import ItemFilterSize from './ItemFilterSize';
import ItemFilterStyle from './ItemFilterStyle';
import Carousel from "./HomeSlider"

export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action."





function ProductList() {
  const [fetchError, setFetchError] = useState(null)
  const [data, setData] = useState(null)
  const [dataOrg, setDataOrg] = useState(null)
  const {user,isLoaded}= useUser();
  

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
      .from('data')
      .select()

      if (error) {
        setFetchError('We Have Some Errors!!')
        setData(null)
        console.log(fetchError)
      }

      if(data) {
        setData(data)
        setDataOrg(data)
      } 

    }
    fetchData();
   },[isLoaded])

   const filterProdacts = (catagory)=>{
      if(catagory=="all"){
        setData(dataOrg);
        return ;
      }

      const filterValue = dataOrg.filter(prodact=>{
        return prodact.catagory.includes(catagory);
      })

      setData(filterValue);
   }

  return data&&(
    <>
       <div className='flex justify-center items-center bg-gray-200 top-14 py-2 mt-[-10px] h-16 w-full sticky z-[19]'>
            <ChevronLeft className='sm:hidden w-11 h-9 mt-2'/>
              <CatagoryFilter selectedCategory={(catagory)=>filterProdacts(catagory)}/>
            <ChevronRight className='sm:hidden w-11 h-9 mt-2'/>
        </div>
        
          
        <Carousel/>

        {/* <HomePage/> */}


        <Card>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">

              <div className="hidden border-r bg-muted/40 md:block w-60">

                  <div className="flex h-full max-h-screen flex-col gap-2">

                    <div className="flex h-14 items-center border-b py-3 px-4 lg:h-[60px] lg:px-6">
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Filter className="h-6 w-6" />
                        <span>Filter</span>
                        </Link>
                    </div>

                  <div className="flex-1">

                      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <ItemFilterColor/>
                        <ItemFilterSize/>
                        <ItemFilterStyle/>
                      </nav>

                  </div>

                  </div>

              </div>

              <div className="flex flex-col">

                  <header className="md:hidden flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            className="shrink-0 md:hidden px-9 gap-2"
                        >
                            <SlidersHorizontal className="h-5 w-5" />
                            <span className='font-bold'>Filter</span>
                        </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                        <nav className="grid gap-2 text-lg font-medium overflow-scroll">
                              <ItemFilterColor/>
                              <ItemFilterSize/>
                              <ItemFilterStyle/>
                        </nav>
                        </SheetContent>
                    </Sheet>
                  </header>

                  <main className="grid grid-cols-2 gap-2 lg:gap-3 mt-5 md:grid-cols-3 lg:grid-cols-3 p-3">
                    {data.map(product => (
                        <ProdactItem product={product} id={product.id} key={product.id} />
                      ))}
                  </main>

              </div>

            </div>
        </Card> 
    </>
  )
}

export default ProductList





