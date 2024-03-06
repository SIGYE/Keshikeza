import React from 'react'
import gorilla from '../../assets/gorilla.jpg'
import Line4 from '../../assets/Line 4.png'
import './About.css'
import {arrow-right} from 'react-icons'

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
      <p>Kenshikeza, an innovative online portal, stands as the epitome of seamless travel experiences, <br />
             offering a comprehensive platform that centers around tourism and the sale of related products. <br />
           Beyond its focus on travel, the portal elevates the user experience by facilitating hassle-free bookings <br />
            for top-notch restaurants and accommodations. 
         </p>
    </div>
      <div className="dest-buttons">
        <a href="#">First Class </a>
      </div>
    </div>
    
    </>
    
  )
}

export default About