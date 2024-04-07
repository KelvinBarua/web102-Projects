import { Link } from "react-router-dom";
import Home_btn from "../assets/home_btn.png";

const Navbar = () =>{
  return (
    <div className="navbar">
      <Link id="HomeLink" to="/"><img id="HomeBtn" src={Home_btn} /></Link>
    </div>
  )
}

export default Navbar;