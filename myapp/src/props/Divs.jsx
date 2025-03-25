import React from 'react'
import img from './shoes.PNG'

const Divs = (prop) => {
  return (
    <div>

        <div className='flex justify-around mt-[50px]'>
          <div className='bg-slate-300 w-[250px] h-[300px]'>
          <img src={prop.img} className='rounded-full w-[200px] m-auto'></img>
            <h3 className='text-lg font-medium text-center'>{prop.name}</h3>
            <h5 className='text-base font-light text-center'>{prop.pos}</h5>
          </div>
          
          <div className='bg-slate-300 w-[250px] h-[300px]'>
          <img src={prop.img} className='rounded-full w-[200px] m-auto'></img>
            <h3 className='text-lg font-medium text-center'>{prop.name}</h3>
            <h5 className='text-base font-light text-center'>{prop.pos}</h5>
          </div>

          <div className='bg-slate-300 w-[250px] h-[300px]'>
          <img src={prop.img} className='rounded-full w-[200px] m-auto'></img>
            <h3 className='text-lg font-medium text-center'>{prop.name}</h3>
            <h5 className='text-base font-light text-center'>{prop.pos}</h5>
          </div>
        </div>


        <div className='flex justify-around mt-[50px]'>
          <div className='bg-slate-300 w-[250px] h-[300px]'>
          <img src={prop.img} className='rounded-full w-[200px] m-auto'></img>
            <h3 className='text-lg font-medium text-center'>{prop.name}</h3>
            <h5 className='text-base font-light text-center'>{prop.pos}</h5>
          </div>
          
          <div className='bg-slate-300 w-[250px] h-[300px]'>
          <img src={prop.img} className='rounded-full w-[200px] m-auto'></img>
            <h3 className='text-lg font-medium text-center'>{prop.name}</h3>
            <h5 className='text-base font-light text-center'>{prop.pos}</h5>
          </div>

          <div className='bg-slate-300 w-[250px] h-[300px]'>
          <img src={prop.img} className='rounded-full w-[200px] m-auto'></img>
            <h3 className='text-lg font-medium text-center'>{prop.name}</h3>
            <h5 className='text-base font-light text-center'>{prop.pos}</h5>
          </div>
        </div>
    </div>
  )
}

export default Divs