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
      <p>Kenshikeza, an innovative online portal, stands as the epitome of seamless travel experiences, <br />
             offering a comprehensive platform that centers around tourism and the sale of related products. <br />
             Whether you're seeking enchanting destinations, curated travel packages, or memorable excursions,<br />
             Kenshikeza caters to your wanderlust with a diverse array of options. Beyond its focus on travel, <br />
              the portal elevates the user experience by facilitating hassle-free bookings for top-notch restaurants <br />
             and accommodations. With Kenshikeza, users can effortlessly plan their entire journey, from exploring <br />
             captivating landmarks to securing reservations at the finest hotels and dining establishments. <br />
         </p>
    </div>
    </div>
    
    </>
    
  )
}

export default About