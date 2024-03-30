import { useState } from 'react'
import axios from 'axios'
import './App.css'
import ComicData from './components/ComicData'

function App() {
  const [count, setCount] = useState(0);

  const [searchInput, setSearchInput] = useState('');

  const [dates, setDates] = useState([]);

  const [pageCounts, setPageCounts] = useState([]);


  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput('');
  }

  const getDateRange = () => {
    if (dates.length === 0) {
      return "No date range available";
    }

    const validDates = dates.filter(date => date > 0 && date < 2025); // Remove any NaN values
    if (validDates.length === 0) {
      return "No valid dates available";
    }

    const earliestDate = Math.min(...validDates);
    const latestDate = Math.max(...validDates);
    return `${earliestDate} - ${latestDate}`;
  };

  const getPageCountRange = () => {
    if (pageCounts.length === 0){
      return "No page count data available";
    }

    const ValidPageCounts = pageCounts.filter(pageCount => pageCount > 0);
    if(ValidPageCounts.length === 0){
      return "No page count data available";
    }

    const smallestPageCount = Math.min(...ValidPageCounts);
    const largestPageCount = Math.max(...ValidPageCounts);
    return `${smallestPageCount} - ${largestPageCount}`;
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
            <h3>Comics Year Range 🗓️: {getDateRange()}</h3>
            <h3>Page Counts Range 📃: {getPageCountRange()}</h3>
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
          <ComicData setCount={setCount} userInput={searchInput} dates={dates} setDates={setDates} pageCounts={pageCounts} setPageCounts={setPageCounts}/>
        </div>
      </div>
    </>
  )
}

export default App
