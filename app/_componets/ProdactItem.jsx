import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ProdactDetail from './ProdactDetail'


function ProdactItem({product,id}) {
  return (
    <div key={id} className='bg-white flex flex-col p-2 gap-2 border border-gray-300 rounded-lg hover:shadow-md transition-all ease-in-out cursor-pointer'>
       <Image className='rounded-lg' width={500} height={200} alt='img' src={product.img}/>
       <h2 className='font-bold text-[10px] sm:text-[20px]'>{product.name}🔥</h2>

       {/* <div className='flex gap-3'>
              <h1 className='font-bold'>Price : {product.price}Br</h1>
              {product.noprice&&<h1 className='text-gray-400 line-through font-bold text-[15px] sm:text-[20px]'>{product.noprice}Br</h1>}
       </div> */}

       <Dialog>
          <DialogTrigger asChild>
           <Button variant='outline' className="bg-primary text-white border-none text-[12px] md:text-[15px]">Add to Cart</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{product.name}</DialogTitle>
              <DialogDescription>
                <ProdactDetail product={product}/>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
       </Dialog>
    </div>
  )
}

export default ProdactItem