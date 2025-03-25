import React from 'react'
import img from './shoes.PNG'
import img2 from './earpod.png'
import img3 from './watch.png'
import img4 from './mobile.png'
import { FaStar } from "react-icons/fa";

const Shopping = () => {
    const products = [
        { id: 1, name: "Shoes", price: 100.0, image: img },
        { id: 2, name: "Earphone", price: 40.0, image: img2 },
        { id: 3, name: "Watch", price: 70.84, image: img3 },
        { id: 4, name: "Mobile", price: 1000.84, image: img4 },
      ];
  return (
    <div className='mt-[100px]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {products.map((item)=>(
            <div className='h-[480px] w-[300px] bg-slate-50 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ml-8 rounded-2xl'>
                <img className='h-[180px] w-[180px] ml-14 mt-8 pb-5' src={item.image} alt=''/>
                <h1 className='text-xl text-center font-semibold'>{item.name}</h1>
                <p className='text-center text-slate-600 pb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <h3 className='text-xl text-center font-semibold pb-4'>{item.price}</h3>
                
                <div className='flex gap-5 justify-center'>
                <FaStar color='gold'  size={20}/>
                <FaStar color='gold'  size={20}/>
                <FaStar color='gold'  size={20}/>
                <FaStar color='gold'  size={20}/>
                <FaStar color='gold'  size={20}/>
                </div>
                <div className='flex justify-center mt-4'>
                <button className=' bg-cyan-500 w-[250px] h-[40px] rounded-full  text-lg'>Buy Now</button>
                </div> 
               
                <br></br><br></br>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Shopping