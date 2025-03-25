import React,{ useState } from 'react'

const States = () => {
    const[count,setcount]=useState(0)

    let increment=()=>{
        setcount(count+1)
    }

    let decrement=()=>{
        setcount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment} >Increment</button><br></br>
        <button onClick={decrement} >Decrement</button>
    </div>
  )
}

export default States