import React, { useState } from "react";

const banList = ({catNameList, catOriginList}) =>{
  const [buttonName, setButtonName] = useState('');


  return (
    <>
      <div className="ban-list-container">
        <h2>Ban List</h2>
      </div>
    </>
  )
};

export default banList;