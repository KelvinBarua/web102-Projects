import React from "react";
import { Link } from "react-router-dom";



const Navbar = (props) => {
  return (
    <div className="navbar-container">
        <h1>Marvel Comics</h1>
        <Link className="nav-home-button" to="/">Home 🏠</Link>
        {props.showStatsLink && 
          <Link className="nav-home-button" to="/StatsPage" state={{data: props.data}}>Comic Statistics 📊</Link>
        }
        {props.showForm && 
          <div className="filters">
          <h2>Filters</h2>
          <form>
            <label for='min-price-input'>Min Price: </label>
            <input
              type='text'
              className='min-price-input'
              id='min-price-input'
              placeholder='Minimum Price'
              onChange={props.handleMinPriceInputChange}
              value={props.minPrice}
              ></input>

              <label for='max-price-input'>Max Price: </label>
              <input
              type='text'
              className='max-price-input'
              id='max-price-input'
              placeholder='Maximum Price'
              onChange={props.handelMaxPriceInputChange}
              value={props.maxPrice}
              ></input>
            </form>
          </div>
        }
    </div>
  )
}

export default Navbar;