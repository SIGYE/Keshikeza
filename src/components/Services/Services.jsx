import React from 'react'
import {FaGlobe} from "react-icons/fa"
import Line4 from "../../assets/Line 4.png"
import './Services.css'

const Services = () => {
  return (
   <>
    <div className="service">
        <img src={Line4} alt="" className="one" />
        <h2>Services</h2>
        <img src={Line4} alt="" className="two" />
        <h1>Our Services</h1>
    </div>
   <div className="service-cards">
    <FaGlobe color='green' width={100}/>
    <h1>Road Trips</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
         Aliquam, ab ad incidunt consectetur neque animi aut officia <br />
         libero temporibus unde, dolore maiores ex commodi! Alias <br />
          ad possimus pariatur saepe necessitatibus.</p>
   </div>
   </>
  )
}

export default Services