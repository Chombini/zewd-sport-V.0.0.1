import React from 'react'
// import CatagoryFilter from '../_componets/CatagoryFilter'
// import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductList from '../_componets/ProductList'

function Product() {

  return (
    <div id='products'>
      <h1 className='text-center font-bold text-[20px] p-2'>🔥New Products🔥</h1>
       <ProductList/>
    </div>
  )
}

export default Product