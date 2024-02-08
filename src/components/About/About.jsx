import React from 'react'
import gorilla from '../../assets/gorilla.jpg'
import Line4 from '../../assets/Line 4.png'
import './About.css'

const About = () => {
  return (
    <>
    <div className='image-container'>
        <img src={gorilla} alt="" />
    </div>
    <div className="texts">
      <h1>ABOUT US</h1>
    </div>
    </>
    
  )
}

export default About