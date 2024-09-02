"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import AddToCartButton from './AddToCartButton'


function ProdactDetail({product}) {
  
    
   const [quantitys,setQuantity] = useState(1);
   const [productTotalPrice,setProdactTotalPrice] = useState(
      product.price?
      product.price:
      product.noprice
   )
   

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-5 text-black gap-0'>
        <div className='flex justify-center items-center'>
        <Image src={product.img} alt='prodact-img' className='rounded-lg object-left w-[220px] h-[250px] md:w-[250px] md:h-[300px]' width={300} height={300}/>
        </div>
       
        <div className='flex flex-col md:gap-3 gap-2'>
           <h2 className='md:text-2xl text-[18px] font-bold md:p-0 p-2'>{product.name}</h2>
           <h2 className='text-sm text-gray-500'>{product.dic}</h2>
           {/* <div className='flex gap-3 text-2xl justify-center items-center md:justify-normal'>
              <h1 className='font-bold'>Price : {product.price}Br</h1>
              {product.noprice&&<h1 className='text-gray-400 line-through font-bold'>{product.noprice}Br</h1>}
           </div> */}
           <h2 className='font-medium text-md'>Quantity ({product.numItems})</h2>
           <div className='flex flex-col md:items-baseline gap-5 justify-center items-center md:justify-normal'>
            <div className='flex gap-3 items-center'>
                <div className='p-3 border border-gray-400 flex md:gap-9 gap-6 items-center px-5'>
                    <button className='font-semibold p-1' disabled={quantitys==1} onClick={()=>setQuantity(quantitys-1)}> - </button>
                    <h2 className='font-semibold p-1'>{quantitys}</h2>
                    <button className='font-semibold p-1' onClick={()=>setQuantity(quantitys+1)}> + </button>
                </div>
                {/* <h1 className='md:text-1xl text-[18px] font-bold'>= {(quantitys*productTotalPrice).toFixed(2)}Br</h1> */}
            </div>
            
            <AddToCartButton product={product} quantitys={quantitys}/>
           </div>
        </div>
    </div>
  )
}

export default ProdactDetail