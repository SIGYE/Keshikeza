import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import nyungwe from "../../assets/nyungwe.jpeg"

const Navbar = () => {
  return (
    <div className="full-container">
      
        <div className='logo-container'>
        <img src={logo} color='greenyellow'/>
        <p>|</p>
          <h1>KENSHIKEZA</h1>
        </div>
        <div className='nav-container'>
        {/* <div className='image-container'>
        <img src={nyungwe} />
    </div> */}
          
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li> 
            <li><a href="#">About</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Sites</a></li>
            <li><a href="#">Contact</a></li>
          
          <button className='register'>Register</button>
     
          
        </div>
      
    </div>
  );
  
}

export default Navbar