import React from 'react'
import img from './hill.png'

const Comp2 = () => {
  return (
    <div className='flex justify-between'>
        <img className='h-[600px] pt-5 pl-5' src={img} alt="" />
        <div className='bg-slate-200 h-[280px] w-[350px] mt-44 mr-[230px] ml-[50px]'>
            <form>
                <div className='m-6'>
                <label>Enter Username</label><br></br>
                <input className='bg-slate-400 w-[280px] h-[40px]' type='text'></input>
                </div>
                <div className='ml-6'>
                <label>Enter Password</label><br></br>
                <input className='bg-slate-400 w-[280px] h-[40px]' type='text'></input>
                </div>
                <div className='m-6 flex justify-end mr-11' >
                <button className=' bg-red-500 w-[90px] h-[40px] rounded-full py-px text-lg' >Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Comp2