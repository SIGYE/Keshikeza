import React from 'react'
import nyungwe from '../../assets/nyungwe.jpeg'
import './Display.css';

const Display = () => {
  return (
    <div className='image-container'>
        <img src={nyungwe} />
    </div>
  )
}

export default Display