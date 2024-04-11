import { Link } from "react-router-dom";
import Home_btn from "../assets/home_btn.png";
import Create_btn from "../assets/Create-a-crewmate-btn.png";

const Navbar = () =>{
  return (
    <div className="navbar">
      <Link id="HomeLink" to="/"><img id="NavBtn" src={Home_btn} /></Link>
      <Link id="CreateLink"><img id="NavBtn" src={Create_btn} /></Link>
    </div>
  )
}

export default Navbar;