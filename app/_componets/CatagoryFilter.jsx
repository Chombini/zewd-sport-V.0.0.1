"use client"
import React, {useState} from 'react'

function CatagoryFilter({selectedCategory}) {
    const [activeIndex, setActiveIndex] = useState(0)
    const filterOptions=[
        {
            id:1,
            name: "All",
            value:"all",
        },{
            id:2,
            name:"Jersey(kids)",
            value:"Jersey-for-kids",
        },{
            id:3,
            name:"Jersey(adults)",
            value:"Jersey-for-adults",
        },{
            id:4,
            name:"Equipment",
            value:"Sport Equipment",
        },{
            id:5,
            name: "Balls",
            value:"Balls",
        },{
            id:6,
            name:"Medals",
            value:"Medals",
        },{
            id:7,
            name:"Socks(kids)",
            value:"Socks for kids",
        },{
            id:8,
            name:"Socks(adults)",
            value:"Socks for adults",
        },{
            id:9,
            name:"Cones",
            value:"Cones",
        },{
            id:10,
            name:"Shinguard",
            value:"Shinguard",
        }
    ];
  return (
    <div className='flex pt-3 pb-3 gap-2 mt-2 overflow-y-auto'>
        {filterOptions.map((item,index) => (
            <button key={index} 
            onClick={()=>{setActiveIndex(index); selectedCategory(item.value)}}
            className={`border border-gray-400 p-2 px-4 text-[12px] rounded-md hover:border-primary font-semibold 
            ${activeIndex==index?'bg-primary text-white border border-primary':null}`}>
                <h2>{item.name}</h2>
            </button>
        ))}
    </div>
  )
}

export default CatagoryFilter