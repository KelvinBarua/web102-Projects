import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";

function CrewmateInfo() {
  let { state } = useLocation();
  return (
    <div className='container'>
      <Navbar />
      <div className="main-area">
        <h1 className='main-title'>Crewmate: {state.Name}</h1>
        <Link to="/crewmateGalleryPage">⬅️ Go Back</Link>
      </div>
    </div>
  )
}

export default CrewmateInfo;