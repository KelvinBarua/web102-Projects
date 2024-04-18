import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-btns">
        <Link to="/"><button id="nav-home-btn">Home</button></Link>
      </div>

      <div className="search-form-container">
        <form className="search-form">
          <label for="search-input">Search</label>
          <input type="text" id="search-input"></input>
        </form>
      </div>
    </div>
  )
}

export default Navbar;