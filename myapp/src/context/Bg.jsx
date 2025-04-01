import React, { useContext } from 'react'
import Themecontext from './Themecontext'
import './Bg.css'

const Bg = () => {

    const value=useContext(Themecontext)
    console.log(value);

  return (
    <div className={value.theme==='light'?'light':'dark'}>
     <p>hhh</p>
        <button onClick={value.toggletheme}>click</button>
    </div>
  )
}

export default Bg