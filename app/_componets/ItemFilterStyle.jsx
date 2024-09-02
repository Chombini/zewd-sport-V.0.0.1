"use client"
import React from 'react'

function ItemFilterStyle() {
    const filterOptions=[
        {
            id:1,
            name: "Modern",
            value:"modern",
            className:"h-5 w-5",
        },{
            id:2,
            name:"Granite",
            value:"granite",
            className:"h-5 w-5"
        },{
            id:3,
            name:"Fashion",
            value:"fashion",
            className:"h-5 w-5"
        }
    ];
  return (
    <div className='p-3'>
       <h1 className='font-semibold'>Style</h1>
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

export default ItemFilterStyle
