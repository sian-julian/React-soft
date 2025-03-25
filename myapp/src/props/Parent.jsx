import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="aplle" age="45"></Child>
        <Child name="orange" age="67"></Child>
        <Child name="kiwi" age="67"></Child>
    </div>
  )
}

export default Parent