import React, { useState } from "react";
import { useEffect } from "react";

const banList = ({catNameList, catOriginList, removeNameFromList, removeOriginFromList}) =>{
  const [nameButtons, setNameButtons] = useState('');
  const [originButtons, setOriginButtons] = useState('');

  useEffect(() => {
    const generateNameButtons = () => {
      const buttons = catNameList.map((name, index) => (
        <button key={index} className="ban-button" onClick={() => removeNameFromList(name)}>{name}</button>
      ));
      setNameButtons(buttons);
    };

    const generateOriginButtons = () => {
      const buttons = catOriginList.map((origin, index) => (
        <button key={index} className="ban-button" onClick={() => removeOriginFromList(origin)}>{origin}</button>
      ));
      setOriginButtons(buttons);
    };

    generateNameButtons();
    generateOriginButtons();
  }, [catNameList, catOriginList]);


  return (
    <>
      <div className="ban-list-container">
        <h1><u>Ban List</u></h1>
        <div className="name-ban-list">
          <h3>Cat Names:</h3>
          {nameButtons}
        </div>
        <div className="origin-ban-list">
          <h3>Cat Origins:</h3>
          {originButtons}
        </div>
      </div>
    </>
  )
};

export default banList;