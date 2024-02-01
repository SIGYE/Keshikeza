import React from 'react'
import './DisplayContent.css';
<style>
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@700&family=Poppins:ital,wght@0,400;0,500;0,600;1,300&display=swap');
</style>

const DisplayContent = () => {
  return (
    <div>
        <div className="heading">
        <h1>ENJOYING YOUR VACATION IN <br /> Rwanda</h1> <br />
        <p>Welcome to Your Home Away From Home. Kenshikeza is Here To Walk You Through Your Exciting Journey.</p>
        <div className="search">
          <input type="text" placeholder='Nyungwe Forest..' />
          <button>Search</button>
          
        </div>
        </div>
        
    </div>
  )
}

export default DisplayContent