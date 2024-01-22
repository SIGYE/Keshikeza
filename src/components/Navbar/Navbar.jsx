import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="full-container">
      
        <div className='logo'>
          <h1>KENSHIKEZA</h1>
        </div>
        <div className='nav-container'>
          
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