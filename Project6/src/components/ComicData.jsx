import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';
import titleTracker from './titleTracker';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const API_KEY = '74e59ba98ef13b65b7f9463b1922cc5b';
const PRIVATE_KEY = '575f3182cbf7be8ede606d94df460e7f69246d72';
const timestamp = (new Date().getTime()) / 1000;
const hash = md5(timestamp + PRIVATE_KEY + API_KEY);
const limit = 100;

const url = `https://gateway.marvel.com:443/v1/public/comics?limit=${limit}&apikey=${API_KEY}&ts=${timestamp}&hash=${hash}&format=comic&formatType=comic`;


const ComicData = ({setCount, userInput, dates, setDates, pageCounts, setPageCounts, prices, setPrices, minPrice, setMinPrice, maxPrice, setMaxPrice}) => {
  const [comics, setComics] = useState([]);
  const [comicTitles, setComicTitles] = useState([]);
  const [error, setError] = useState('');
  const [offset, setOffset] = useState(0);
  const [filteredComics, setFilteredComics] = useState([]);

  useEffect(() => {
    const fetchComic = async () =>{
      try {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?dateRange=1930-01-01%2C2024-01-01`, {
          params: {
            hash:  hash,
            ts: timestamp,
            apikey: API_KEY,
            offset: offset,
            limit: 100,
          }
        });

        const comics_data = response.data.data.results.filter(comic => (!titleTracker.includes(comic.title)) && !(comic.description == null || comic.description == "" || comic.description == "#N/A") && !(comic.title.includes("(Variant)")));

        const titles = comics_data.map(comic => comic.title);

        const dates = comics_data.map(comic => parseInt(comic.dates[1].date.substring(0, 4)));
        setDates(prevDates => [...prevDates, ...dates]);

        const pageCountsFromData = comics_data.map(comic => comic.pageCount);
        setPageCounts(prevPageCounts => [...prevPageCounts, ...pageCountsFromData]);

        const pricesFromData = comics_data.map(comic => comic.prices[0].price);
        setPrices(prevPrices => [...prevPrices, ...pricesFromData]);
        
        titles.forEach(title => { //study this branch later, this pushes all comic titles to the array i created...
          if(!titleTracker.includes(title)){
            titleTracker.push(title);
            setComicTitles([...titleTracker]);
          }
        });

        setComics(prevComics => [...prevComics, ...comics_data]);
      } catch (error) {
        setError("Couldn't fetch data :(");
        console.error(error);
      }
    }
    if(offset <= 100 + 3){
      fetchComic();
      setOffset(prevOffset => prevOffset + 50);
    }
    console.log(url);
    for(var i = 0; i < titleTracker.length; i++){
      titleTracker.pop();
    }
  }, [offset]);

  useEffect(() => {
    let filtered = comics;
  
    // Filter by user input
    if (userInput) {
      filtered = filtered.filter(comic => comic.title.toLowerCase().includes(userInput.toLowerCase()));
    }
  
    // Filter by min price
    if (minPrice) {
      filtered = filtered.filter(comic => comic.prices[0].price >= minPrice);
    }
  
    // Filter by max price
    if (maxPrice) {
      filtered = filtered.filter(comic => comic.prices[0].price <= maxPrice);
    }
  
    setFilteredComics(filtered);
  }, [userInput, minPrice, maxPrice, comics]);


  useEffect(() => {
    if(maxPrice) {
      const filtered = comics.filter(comic => comic.prices[0].price < maxPrice);
      setFilteredComics(filtered);
    } else {
      setFilteredComics(comics);
    }
  }, [maxPrice, comics]);

  return (
    <div className='comic-component'>
      {error && <p>{error}</p>}
      {comics.length > 0 ? (
        <div className='comics-grid'>
          {setCount(filteredComics.length)}
          {filteredComics.map((comic, index) => (
            <Link key={comic.id} to={`${comic.id}`} state={{ title: `${comic.title}`, price: `${comic.prices[0].price}`, comic_cover: `${comic.thumbnail.path}.${comic.thumbnail.extension}`, description: `${comic.description}`,
            }}>
              <div key={index} className='comics-container'>
                <h3 className='comic-title'>{comic.title}</h3>
                <img id='comic-img' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
                <p id='comic-price'>Price: ${comic.prices[0].price}</p>
              </div>
            </Link>
          ))}
        </div>
        ) : (
        <p>Loading comics...</p>
      )}
    </div>
  );
};

export default ComicData;