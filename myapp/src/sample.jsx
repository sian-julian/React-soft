import React from 'react'
import './style.css'
import Demo from './Demo'
import img from './Group 54.png'

const Sample = () => {
  return (
    <div className='abc'>
        <h2 style={{color:"red"}}>helooo</h2>
        <h1 className='bg-pink-500 '>heloooo</h1>
        <img src={img} alt="" />
        <Demo></Demo>
    </div>
   
  )
}

export default Sample