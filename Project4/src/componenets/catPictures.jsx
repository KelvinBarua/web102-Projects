import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import BanList from './banList';


const catPictures = () =>{
  const [catImg, setCatImg] = useState('');
  const [breedData, setBreedData] = useState([]);
  const [catName, setCatName] = useState('');
  const [catOrigin, setCatOrigin] = useState('');

  const [catNameList, updateNameList] = useState([]);
  const [catOriginList, updateOriginList] = useState([]);

  const fetchRandomCat = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
        headers: {
          'x-api-key': 'live_nMvneXXtI7dQdOeDQWdz3wBivuV9M58ydyVOKGRLauosLWMLMCDkQu5bdza0P4of',
        },
      }
      );

      if(response.data[0].breeds.length > 0 && response.data[0].breeds[0].name && response.data[0].breeds[0].origin && (!catNameList.includes(response.data[0].breeds[0].name) && !catOriginList.includes(response.data[0].breeds[0].origin))){
        setCatImg(response.data[0].url);
        setCatName(response.data[0].breeds[0].name);
        setCatOrigin(response.data[0].breeds[0].origin);
        setBreedData(response.data[0].breeds);
      }
      else {
        fetchRandomCat();
      }
    } catch (error) {
      console.error("Couldn't fetch cat :(", error);
    }
  };

  useEffect(() => {
    fetchRandomCat();
  }, []);

  const resetCatBreedData = () =>{
    setBreedData([]);
  }

  const onNewRequest = () =>{
    resetCatBreedData();
    fetchRandomCat();
  }

  const updateListofNames = () => {
    if (!catNameList.includes(catName)) {
      updateNameList((prevList) => [...prevList, catName]);
    }
  };
  
  const updateListofOrigins = () => {
    if (!catOriginList.includes(catOrigin)) {
      updateOriginList((prevList) => [...prevList, catOrigin]);
    }
  };

  const removeNameFromList = (catName) => {
    updateNameList((prevList) => prevList.filter(name => name !== catName));
  };
  
  const removeOriginFromList = (catOrigin) => {
    updateOriginList((prevList) => prevList.filter(origin => origin !== catOrigin));
  };

  return (
    <div>
      <h1>Random Cat Generator</h1>
      <div className="randomCatContainer">
        <div className="cat_img_and_ban_list_container">
          {catImg && <img className="cat_Img" src={catImg} alt="Random Cat" />}
          <BanList 
          catNameList={catNameList} 
          catOriginList={catOriginList} 
          removeNameFromList={removeNameFromList}
          removeOriginFromList={removeOriginFromList}/>
        </div>
        <div className="cat-data">
        {breedData.length > 0 && <button className="cat-name-button" onClick={updateListofNames}>{breedData[0].name}</button>}
        {breedData.length > 0 && <button className="cat-origin-button" onClick={updateListofOrigins}>{breedData[0].origin}</button>}
        </div>
        <button className="getNewCat-button" onClick={onNewRequest}>Get New Cat</button>
      </div>
    </div>
  );
};
export default catPictures;