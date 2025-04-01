import axios from 'axios'
import React, { useState } from 'react'

const Users = () => {
    const[data,setdata]=useState({})
    const handlechange=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const handlesubmit=(event)=>{
        event.preventDefault()
        setdata(data)
    }
    console.log(data);



  return (
    <div>
       <form onSubmit={handlesubmit}>
        <label htmlFor="">name</label>
        <input onChange={handlechange} type="text" name='name' />
        <label htmlFor="">age</label>
        <input onChange={handlechange} type="text" name='age'/>
        <button type='submit'>submit</button>
       </form>
    </div>
  )
}

export default Users