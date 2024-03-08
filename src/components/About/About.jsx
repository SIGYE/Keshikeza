import React, {useState, useEffect} from 'react'
import gorilla from '../../assets/gorilla.jpg'
import Line4 from '../../assets/Line 4.png'
import './About.css'
import { GoArrowRight } from "react-icons/go";

const About = () => {
  const [scrolled, setScrolled] = useState(false)
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    
    <div className={`image-container ${scrolled ? 'scrolled' : ''}`}>
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
        <a href="#"><GoArrowRight color='greenyellow'/>First Class Flights</a>
        <a href="#"><GoArrowRight color='greenyellow'/>Handpicked Hotels</a>
        <a href="#"><GoArrowRight color='greenyellow'/>Accommodations</a>
        <a href="#"><GoArrowRight color='greenyellow'/>Latest  model Vehicles</a>
        <a href="#"><GoArrowRight color='greenyellow'/>Premium City Tours</a>
        <a href="#"><GoArrowRight color='greenyellow' />24/7 Services</a>        
      </div>
      
      <button className="about-button">Explore More</button>
    </div>
    
    </>
    
  )
}

export default About