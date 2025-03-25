import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { IoIosPhonePortrait } from "react-icons/io"
import { CiLocationOn } from "react-icons/ci"
import { Link } from "react-router-dom";

const Contact = () => {
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
              <Link to='/hpg'><a className='hover:text-red-400' href='/hpg'>Home</a></Link>
                <Link to='/abt'><a className='hover:text-red-400'  href='/abt'>About</a></Link>
                <Link to='/cnt'><a className='hover:text-red-400'  href='/cnt'>Contact</a></Link>
            </div>
            )}
    
            <div className='bg-slate-200 h-[250px] text-center flex flex-col justify-center'>
                <h1 className='text-4xl font-semibold text-black mb-4'>Get In Touch</h1>
                <h5 className='text-xl font-normal text-slate-600'>Have a question or want to work together? Feel free to contact me!</h5>
            </div>

            <div className='bg-slate-300 h-[700px] flex'>
                <div className=' w-[500px] ml-[100px] p-[50px]'>
                <h1 className='text-4xl font-semibold text-black mb-4'>Contact Information</h1>
                <div className='m-4'>
                    <div className='flex'>
                        <AiOutlineMail size={30} className='mr-5 mb-3 text-gray-600 hover:text-black transition duration-300'/>
                    <h6 className='text-lg'>sianjulian.prof@gmail.com</h6>
                    </div>

                    <div className='flex'>
                        <IoIosPhonePortrait size={30} className='mr-5  mb-3 text-gray-600 hover:text-black transition duration-300'/>
                        <h6 className='text-lg'>9778473889</h6>
                    </div>
                    
                    <div className='flex'>
                        <CiLocationOn size={30} className='mr-5 text-gray-600 hover:text-black transition duration-300'/>
                        <h6 className='text-lg'>Calicut,Kerala</h6>
                    </div>

                </div>
                </div>
                <div className=" w-[600px] h-[600px] ml-16 mt-10 p-6 bg-white shadow-md rounded-lg">
                    <h2 className="text-3xl font-semibold mb-6">Send Me a Message</h2>

                    <form className="space-y-4">

                        <div>
                        <label className="block text-lg font-medium">Name</label>
                        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        <div>
                        <label className="block text-lg font-medium">Email</label>
                        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        <div>
                        <label className="block text-lg font-medium">Subject</label>
                        <input type="text" placeholder="Subject" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        <div>
                        <label className="block text-lg font-medium">Message</label>
                        <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>

                        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">Send Message</button>
                    </form>
                </div>

            </div>

        </div>
  )
}

export default Contact