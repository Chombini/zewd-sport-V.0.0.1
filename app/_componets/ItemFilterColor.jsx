"use client"
import React from 'react'

function ItemFilterColor() {
    const filterOptions=[
        {
            id:1,
            name: "White",
            value:"white",
            className:"h-5 w-5 rounded-full bg-stone-200 border border-black",
        },{
            id:2,
            name:"Black",
            value:"Black",
            className:"h-5 w-5 rounded-full bg-black",
        },{
            id:3,
            name:"Blue",
            value:"blue",
            className:"h-5 w-5 rounded-full bg-blue-700",
        },{
            id:4,
            name:"Red",
            value:"red",
            className:"h-5 w-5 rounded-full bg-red-600",
        },{
            id:5,
            name: "Green",
            value:"green",
            className:"h-5 w-5 rounded-full bg-green-700",
        },{
            id:6,
            name:"Yellow",
            value:"yellow",
            className:"h-5 w-5 rounded-full bg-yellow-400",
        }
    ];
  return (
    <div className='p-3'>
       <h1 className='font-semibold'>Colors</h1>
       <div className='p-3'>
       {filterOptions.map((item,index) => (
            <div key={index} className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground">
                <button 
                // onClick={()=>{selectedCategory(item.value);}} 
                className={item.className}></button>
                <h3>{item.name}</h3>
            </div>
        ))}
       </div>
    </div>
  )
}

export default ItemFilterColor