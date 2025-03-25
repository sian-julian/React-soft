import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"
import { FaTimes } from "react-icons/fa";
import img from './yamal.jpeg'
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { Link } from "react-router-dom";

const About = () => {
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
    
            <div className='bg-zinc-700 h-[300px] text-center flex flex-col justify-center'>
                <h1 className='text-4xl font-semibold text-white mb-4'>About Me</h1>
                <h5 className='text-xl font-normal text-gray-300'>Python Full Stack Developer & UI/UX Enthusiast</h5>
            </div>

            <div className='bg-slate-300 h-[500px] flex'>
              <div className=' w-[500px] ml-[100px] p-[50px]'>
                <img  className='rounded-full border-2 border-black ml-[90px]' src={img} alt=''/>
                <div className='flex justify-center m-4'>
                  <FaGithub size={30} className='mr-5 text-gray-600 hover:text-black transition duration-300'/>
                  <FaLinkedin size={30} className='mr-5 text-gray-600 hover:text-black transition duration-300' />
                </div>
              </div>
              <div className='pt-8'>
                <h1 className='text-4xl font-semibold text-black mb-4'>Sian Julian</h1>
                <h5 className='text-xl font-thin text-black'>Full Stack Developer with 5+ years of experience</h5><br></br>
                <p>I'm a passionate web developer dedicated to creating intuitive, responsive, and user-friendly websites. With expertise in<br></br>
                   both front-end and back-end technologies, I strive to deliver high-quality solutions that meet client needs and exceed<br></br>expectations.</p><br></br>

                <p>My journey in web development began during my college years, and since then, I've been constantly learning and<br></br>
                 adapting to new technologies and methodologies. I believe in clean code, responsive design, and building applications<br></br> that provide real value to users.</p><br></br>

                 <h2 className='text-2xl font-semibold text-black mb-4'>Technical Skills</h2>
                 <h3>HTML 5,CSS3,Bootstrap 3,C,Python,Javascript,Django,React,Tailwind CSS,SQL,Figma</h3>
              </div>
            </div>
        </div>
  )
}

export default About