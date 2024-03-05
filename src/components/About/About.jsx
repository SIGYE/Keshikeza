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
      <img src={Line4} alt=""/>
      <h1>ABOUT US</h1>
    </div>
    </>
    
  )
}

export default About