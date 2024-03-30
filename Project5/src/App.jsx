import { useState } from 'react'
import axios from 'axios'
import './App.css'
import ComicData from './components/ComicData'

function App() {
  const [count, setCount] = useState(0);

  const [searchInput, setSearchInput] = useState('');


  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput('');
  }

  return (
    <>
      <div className="container">
        <div className="navbar-container">
          <h1>Navbar</h1>
        </div>

        <div className="data-container">
          <div className ="stats-container">
            <h3>Total Comics 📚: {count}</h3>
            <h3>Comics Date-range 🗓️: </h3>
            <form>
              <input
              className='search-input' 
              type='text' 
              placeholder='search'
              id='search-input'
              value={searchInput}
              onChange={handleInputChange}></input>
              <button onClick={handleSubmit} type='submit'>Search</button>
            </form>
          </div>
          <ComicData setCount={setCount} userInput={searchInput}/>
        </div>
      </div>
    </>
  )
}

export default App
