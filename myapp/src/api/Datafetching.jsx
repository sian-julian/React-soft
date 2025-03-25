import React,{ useState } from 'react'
import axios from 'axios'

const Datafetching = () => {
    const[data,setdata]=useState([])

    const fetchdata=async()=>{
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
        setdata(response.data)
        console.log(data);
    }
  return (
    <div>
        <button onClick={fetchdata}>click</button>
        <ul>
            {data.map((post) => (
            <li>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Datafetching