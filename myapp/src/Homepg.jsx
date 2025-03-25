import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

const Homepg = () => {
    const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div>
        <div className='bg-slate-900 h-[50px] text-white flex justify-between place-items-center '>
            <h1 className='ml-[100px] font-semibold text-xl md:text-center'>ALORA</h1>
            <nav className='mr-[150px] hidden sm:flex space-x-8 text-xl'>
                <Link to='/hpg'><a className='hover:text-red-400' href='/hpg'>Home</a></Link>
                <Link to='/abt'><a className='hover:text-red-400'  href='/abt'>About</a></Link>
                <Link to='/cnt'><a className='hover:text-red-400'  href='/cnt'>Contact</a></Link>
            </nav>

            <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden text-3xl">
                {menuOpen ? <FaTimes /> : <GiHamburgerMenu />}
            </button>
        </div>

        {menuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-slate-800 text-white py-4 space-y-4">
          <a className="hover:text-red-400" href="#">Home</a>
          <a className="hover:text-red-400" href="#">About</a>
          <a className="hover:text-red-400" href="#">Contact</a>
        </div>
        )}

        <div className='bg-gray-500 h-[400px] text-center flex flex-col justify-center'>
            <h1 className='text-4xl font-semibold text-white mb-4'>Welcome to Our Website</h1>
            <h5 className='text-xl font-normal text-slate-200'>We're delighted to have you here. Discover our services and learn how we can help you<br></br>achieve your goals</h5>
            <div className='flex flex-row justify-center'>
                <Link to='/abt'><button className='text-xl mt-6 mr-4 text bg-blue-600 rounded-md p-4 hover:bg-red-500 hover:text-white'>Learn More</button></Link>
                <Link to='/cnt'><button className='text-xl mt-6 text bg-blue-600 rounded-md p-4 hover:bg-red-500 hover:text-white'>Contact</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Homepg