import { Link } from "react-router-dom";
import Home_btn from "../assets/home_btn.png";
import Create_btn from "../assets/Create-a-crewmate-btn.png";
import Gallery_btn from "../assets/gallery-btn.png";

const Navbar = () =>{
  return (
    <div className="navbar">
      <Link id="HomeLink" to="/"><img id="NavBtn" src={Home_btn} /></Link>
      <Link id="CreateLink" to="/createCrewmatePage"><img id="NavBtn" src={Create_btn} /></Link>
      <Link id="GalleryLink" to="/crewmateGalleryPage"><img id="NavBtn" src={Gallery_btn}/></Link>
    </div>
  )
}

export default Navbar;