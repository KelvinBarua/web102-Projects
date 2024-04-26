import { Link } from "react-router-dom";

const Navbar = ({searchInput, setSearchInput}) => {
  return (
    <div className="navbar">
      <div className="nav-btns">
        <Link to="/"><button id="nav-home-btn">Home</button></Link>
      </div>

      <div className="search-form-container">
        <form className="search-form">
          <label id="search-bar-label" for="search-input">Search</label>
          <input 
          type="text" 
          id="search-input"
          value={searchInput}
          onChange={(e) => {setSearchInput(e.target.value)}}></input>
        </form>
      </div>

      <h1>💪 StrengthSquad Formus 💪</h1>
    </div>
  )
}

export default Navbar;