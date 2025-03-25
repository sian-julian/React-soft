import React from 'react'
import { FaStar } from "react-icons/fa";
import img from './hill.png'

const Mapping = () => {
    const data=[{name:"anu",age:44 ,image:img},{name:"ammu",age:56}]
  return (
    <div className='bg-slate-500'>
    {data.map((item)=>(
      <div>
        <h1>{item.name}</h1>
        <h1>{item.age}</h1>
        <img src={item.image} alt="" />
        <FaStar size={56} />

      </div>
    ))}

  </div>
  )
}

export default Mapping