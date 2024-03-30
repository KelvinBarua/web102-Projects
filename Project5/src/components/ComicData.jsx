import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';
import titleTracker from './titleTracker';

const API_KEY = '74e59ba98ef13b65b7f9463b1922cc5b';
const PRIVATE_KEY = '575f3182cbf7be8ede606d94df460e7f69246d72';
const timestamp = (new Date().getTime()) / 1000;
const hash = md5(timestamp + PRIVATE_KEY + API_KEY);
const limit = 100;

const url = `https://gateway.marvel.com:443/v1/public/comics?dateRange=1945-01-01%2C2024-03-28&limit=${limit}&apikey=${API_KEY}&ts=${timestamp}&hash=${hash}&format=comic&formatType=comic`;


const ComicData = ({setCount, userInput, dates, setDates, pageCounts, setPageCounts}) => {
  const [comics, setComics] = useState([]);
  const [comicTitles, setComicTitles] = useState([]);
  const [error, setError] = useState('');
  const [offset, setOffset] = useState(0);
  const [filteredComics, setFilteredComics] = useState([]);

  useEffect(() => {
    const fetchComic = async () =>{
      try {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?`, {
          params: {
            hash:  hash,
            ts: timestamp,
            apikey: API_KEY,
            limit: limit,
            offset: offset,
          }
        });

        const comics_data = response.data.data.results.filter(comic => (!titleTracker.includes(comic.title)));

        const titles = comics_data.map(comic => comic.title);

        const dates = comics_data.map(comic => parseInt(comic.dates[1].date.substring(0, 4)));
        setDates(prevDates => [...prevDates, ...dates]);

        const pageCountsFromData = comics_data.map(comic => comic.pageCount);
        setPageCounts(prevPageCounts => [...prevPageCounts, ...pageCountsFromData]);
        
        titles.forEach(title => { //study this branch later, this pushes all comic titles to the array i created...
          if(!titleTracker.includes(title)){
            titleTracker.push(title);
            setComicTitles([...titleTracker]);
          }
        });

        setComics(prevComics => [...prevComics, ...comics_data]);
        setOffset(prevOffset => prevOffset + limit);
      } catch (error) {
        setError("Couldn't fetch data :(");
        console.error(error);
      }
    }
    fetchComic();
    console.log(url);
    for(var i = 0; i < titleTracker.length; i++){
      titleTracker.pop();
    }
  }, []);

  useEffect(() => {
    if(userInput) {
      const filtered = comics.filter(comic => comic.title.toLowerCase().includes(userInput.toLowerCase()));
      setFilteredComics(filtered);
    } else {
      setFilteredComics(comics);
    }
  }, [userInput, comics]);

  return (
    <div className='comic-component'>
      {console.log(pageCounts)}
      {error && <p>{error}</p>}
      {comics.length > 0 ? (
        <div className='comics-grid'>
          {setCount(titleTracker.length)}
          {filteredComics.map((comic, index) => (
            <div key={index} className='comics-container'>
              <h3 className='comic-title'>{comic.title}</h3>
              <img id='comic-img' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
            </div>
          ))}
        </div>
        ) : (
        <p>Loading comics...</p>
      )}
    </div>
  );
};

export default ComicData;