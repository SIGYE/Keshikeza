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
      <h2>ABOUT US</h2>
      <div className="welcome">
      <h1>Welcome to <span>KENSHIKEZA</span></h1>
    </div>
    </div>
    
    </>
    
  )
}

export default About