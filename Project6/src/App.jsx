import { useState } from 'react'
import axios from 'axios'
import './App.css'
import ComicData from './components/ComicData'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [dates, setDates] = useState([]);
  const [pageCounts, setPageCounts] = useState([]);
  const [prices, setPrices] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleMinPriceInputChange = (e) =>{
    const value = e.target.value;
    const floatValue = value ? parseFloat(value) : '';
    
    if (!isNaN(floatValue) || value === '' || value === '.' || value.match(/^\d+\.$/)){ //this branch and the next if branch should allow me to type periods in the input text field. I had a problem where I couldn't type periods in the 'Min-Price' filter. 
      setMinPrice(floatValue);
    }

    if (!isNaN(value) || value === '' || value === '.') {
      setMinPrice(value); // Use the input value directly, not the floatValue
    }

    /*
    lines 20-25 ensure that the input you give is always converted into a float so that it matches the nature of price formats. The problem occurs when you erase the form and it becomes a blank string causing this value to become NaN. So those lines make sure that you can always type a float. 
    */
  }

  const handelMaxPriceInputChange = (e) =>{
    const value = e.target.value;
    const floatValue = value ? parseFloat(value) : '';
    
    if (!isNaN(floatValue) || value === '' || value === '.' || value.match(/^\d+\.$/)){ //this branch and the next if branch should allow me to type periods in the input text field. I had a problem where I couldn't type periods in the 'Min-Price' filter. 
      setMaxPrice(floatValue);
    }

    if (!isNaN(value) || value === '' || value === '.') {
      setMaxPrice(value); // Use the input value directly, not the floatValue
    }

    /*
    lines 20-25 ensure that the input you give is always converted into a float so that it matches the nature of price formats. The problem occurs when you erase the form and it becomes a blank string causing this value to become NaN. So those lines make sure that you can always type a float. 
    */
  }

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
        
        <Navbar 
        handleMinPriceInputChange={handleMinPriceInputChange} 
        minPrice={minPrice} 
        handelMaxPriceInputChange={handelMaxPriceInputChange} 
        maxPrice={maxPrice}
        />

        <div className="data-container">
          <div className ="stats-container">
            <h3>Total Comics 📚: {count}</h3>
            <h3>Comics Year Range 🗓️: {getDateRange()}</h3>
            <h3>Page Counts Range 📃: {getPageCountRange()}</h3>
            <form>
              <input
              className='search-input' 
              type='float' 
              placeholder='search'
              id='search-input'
              value={searchInput}
              onChange={handleInputChange}></input>
              <button onClick={handleSubmit} type='submit'>Search</button>
            </form>
          </div>
          <ComicData 
          setCount={setCount} 
          userInput={searchInput} 
          dates={dates} 
          setDates={setDates} 
          pageCounts={pageCounts} 
          setPageCounts={setPageCounts}
          prices={prices}
          setPrices={setPrices}
          minPrice={minPrice}
          maxPrice={maxPrice}/>
        </div>
      </div>
    </>
  )
}

export default App
