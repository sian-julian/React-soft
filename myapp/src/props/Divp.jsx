import React from 'react'
import Divs from './Divs'
import img from './shoes.PNG'

const Divp = () => {
  return (
    <div>
        <Divs img={img} name='Adam Johnson' pos='Developer'></Divs>
        {/* <Divs></Divs> */}
    </div>
  )
}

export default Divp