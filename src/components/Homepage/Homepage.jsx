import About from "../About/About";
import DisplayContent from "../DisplayContent/DisplayContent";
import Navbar from "../Navbar/Navbar";
import './Homepage.css';
import Services from "../Services/Services";




const Homepage = () => {
  return (
    <div>
      <div className="top">
      <Navbar/>
        <DisplayContent/>
        <About/>
        
        <Services/>
      </div>
      
       
        
    </div>
  )
}

export default Homepage