"use client";
import React, { useEffect, useState } from 'react'
import ProdactItem from './ProdactItem'
import supabase from '@/supabaseConfig';
import { useUser } from '@clerk/nextjs';
import CatagoryFilter from '../_componets/CatagoryFilter'
import { ChevronLeft, ChevronRight } from 'lucide-react'




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
       <div className='flex justify-center items-center m-0'>
            <ChevronLeft className='sm:hidden w-11 h-9'/>
              <CatagoryFilter selectedCategory={(catagory)=>filterProdacts(catagory)}/>
            <ChevronRight className='sm:hidden w-11 h-9'/>
        </div>
        <div className='grid grid-cols-2 gap-2 lg:gap-4 mt-5 md:grid-cols-3 lg:grid-cols-4'>  
            {data.map(product => (
                <ProdactItem product={product} id={product.id} key={product.id} />))
              }
        </div>
    </>
  )
}

export default ProductList





