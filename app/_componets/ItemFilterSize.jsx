"use client"
import React from 'react'

function ItemFilterSize() {
    const filterOptions=[
        {
            id:1,
            name: "XL",
            value:"xl",
            className:"h-5 w-5",
        },{
            id:2,
            name:"XXL",
            value:"xxl",
            className:"h-5 w-5"
        },{
            id:3,
            name:"L",
            value:"l",
            className:"h-5 w-5"
        },{
            id:4,
            name:"M",
            value:"m",
            className:"h-5 w-5"
        },{
            id:5,
            name: "S",
            value:"s",
            className:"h-5 w-5"
        }
    ];
  return (
    <div className='p-3'>
       <h1 className='font-semibold'>Size</h1>
       <div className='p-3'>
       {filterOptions.map((item,index) => (
            <div key={index} className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground">
                <input 
                // onChange={()=>{selectedCategory(item.value);}} 
                type="radio" className={item.className}/>
                <h3>{item.name}</h3>
            </div>
        ))}
       </div>
    </div>
  )
}

export default ItemFilterSize
