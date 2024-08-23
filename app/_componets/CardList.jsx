import { LoaderCircle, Trash2 } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

function CardList({data,handleDelete,isLoading2}) {
  
  return (
    <div>
      {data && (
        <div className='h-[500px] overflow-auto'>
          {data.map((cart, index) => (
            <div className='flex gap-11 p-3 items-center' key={index}>
                <div className='flex gap-6 items-center'>
                <Image className='rounded-lg' src={cart.productImg} width={70} height={70} alt='img' />

                <div>
                  <h1 className='font-bold text-[15px]'>{cart.productName}</h1>
                  <h1> Number of Items: {cart.quantitys}</h1>
                  <h1 className='sm:text-lg font-bold text-[15px]'>{cart.amount}birr</h1>
                </div>

                </div>{isLoading2?
                   <LoaderCircle className="animate-spin text-gray-500"/>:
                   <Trash2 onClick={()=>handleDelete(cart.id)} className='text-gray-500 cursor-pointer'/>
                }
            </div>
          ))}
        </div>
       )}
    </div>
  );
}

export default CardList;
