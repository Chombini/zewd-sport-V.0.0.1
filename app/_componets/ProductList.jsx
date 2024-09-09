"use client";
import React, { useEffect, useState } from 'react'
import ProdactItem from './ProdactItem'
import supabase from '@/supabaseConfig';
import { useUser } from '@clerk/nextjs';
import CatagoryFilter from '../_componets/CatagoryFilter'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Carousel from "./HomeSlider"
import HomeSlider1 from './HomeSlider1';

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
        {/* <Carousel/> */}
        <HomeSlider1/>
        <main className="grid grid-cols-2 gap-2 lg:gap-3 mt-5 md:grid-cols-4 lg:grid-cols-4 p-3">
          {data.map(product => (
              <ProdactItem product={product} id={product.id} key={product.id} />
            ))}
        </main>
    </>
  )
}

 

export default ProductList





