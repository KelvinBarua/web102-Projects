import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { supabase } from "../supabaseClient";

import Red from "../assets/crewmates/redCrew.png"
import Blue from "../assets/crewmates/blueCrew.png"
import Green from "../assets/crewmates/greenCrew.png"

function GalleryPage() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('Crewmates')
        .select();
      
      if (error) {
        console.log("Error fetching data:", error);
      } else {
        setCrewmates(data);
      }
    };

    fetchCrewmates();
  }, [crewmates]);

  return (
    <div className="container">
      <Navbar />
      <div className="main-area">
        <h1 className="main-title">Your Crewmates 👨‍👩‍👧‍👦</h1>
        <div className="gallery">
          {crewmates.map((crewmate, index) => (
            <div className="crewmateCard" key={index}>
              {crewmate.Color == "Red" && <img src={Red} id="crewmateIMG" />}
              {crewmate.Color == "Blue" && <img src={Blue} id="crewmateIMG"/>}
              {crewmate.Color == "Green" && <img src={Green} id="crewmateIMG"/>}
              <h3>{crewmate.Name}</h3>
              <p>Speed: {crewmate.Speed}</p>
              <p>Color: {crewmate.Color}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;