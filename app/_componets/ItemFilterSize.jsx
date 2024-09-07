"use client"
import React from 'react'

function ItemFilterSize() {
    const filterOptions=[
        {
            id:1,
            name: "XL",
            value:"xl",
            className:"h-4 w-4",
        },{
            id:2,
            name:"XXL",
            value:"xxl",
            className:"h-4 w-4"
        },{
            id:3,
            name:"L",
            value:"l",
            className:"h-4 w-4"
        },{
            id:4,
            name:"M",
            value:"m",
            className:"h-4 w-4"
        },{
            id:5,
            name: "S",
            value:"s",
            className:"h-4 w-4"
        }
    ];
  return (
    <div>
       <h1 className='font-semibold p-1'>Size</h1>
       <div className='flex flex-wrap justify-center '>
       {filterOptions.map((item,index) => (
            <div key={index} className="flex gap-2 rounded-lg p-2 text-muted-foreground">
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
