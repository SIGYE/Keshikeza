import About from "../About/About";
import DisplayContent from "../DisplayContent/DisplayContent";
import Navbar from "../Navbar/Navbar";
import './Homepage.css';




const Homepage = () => {
  return (
    <div>
      <div className="top">
      <Navbar/>
        <DisplayContent/>
        
        <About/>
      </div>
      
       
        
    </div>
  )
}

export default Homepage