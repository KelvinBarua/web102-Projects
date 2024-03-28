import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

const API_KEY = '74e59ba98ef13b65b7f9463b1922cc5b';
const PRIVATE_KEY = '575f3182cbf7be8ede606d94df460e7f69246d72';
const timestamp = (new Date().getTime()) / 1000;
const hash = md5(timestamp + PRIVATE_KEY + API_KEY);
const limit = 100;

const url = `https://gateway.marvel.com:443/v1/public/comics?dateRange=1945-01-01%2C2024-03-28&limit=${limit}&apikey=${API_KEY}&ts=${timestamp}&hash=${hash}&format=comic&formatType=comic`;


const ComicData = () => {
  const [comics, setComics] = useState([]);
  const [error, setError] = useState('');
  const [offset, setOffset] = useState(0);

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
        const comics_data = response.data.data.results.filter(comic => comicHasCoverImage(comic));
        setComics(prevComics => [...prevComics, ...comics_data]);
        setOffset(prevOffset => prevOffset + limit);
      } catch (error) {
        setError("Couldn't fetch data :(");
        console.error(error);
      }
    }
    fetchComic();
    console.log(url);
  }, []);

  const comicHasCoverImage = (comic) =>{ //function will check if the a comic has a cover image or not. 
    return comic.thumbnail && comic.thumbnail.path && comic.thumbnail.extension;
  }

  return (
    <div className='comic-component'>
      {error && <p>{error}</p>}
      {comics.length > 0 ? (
        <div className='comics-grid'>
          {comics.map((comic) => (
            <div key={comic.id} className='comics-container'>
              <p className='comic-title'>{comic.title}</p>
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