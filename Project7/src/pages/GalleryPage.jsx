import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { supabase } from "../supabaseClient";

import Red from "../assets/crewmates/redCrew.png"
import Blue from "../assets/crewmates/blueCrew.png"
import Green from "../assets/crewmates/greenCrew.png"
import { Link } from "react-router-dom";

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
            <Link className="crewmateCard" to={`/crewmateGalleryPage/${crewmate.id}`} state={{ Name: `${crewmate.Name}`, Speed: `${crewmate.Speed}`, Color: `${crewmate.Color}`, id: `${crewmate.id}` }}>
            <div key={index}>
              {crewmate.Color == "Red" && <img alt="Red crewmate" src={Red} id="crewmateIMG" />}
              {crewmate.Color == "Blue" && <img alt="Blue crewmate" src={Blue} id="crewmateIMG"/>}
              {crewmate.Color == "Green" && <img alt="Green crewmate" src={Green} id="crewmateIMG"/>}
              <h3>{crewmate.Name}</h3>
              <p>Speed: {crewmate.Speed}</p>
              <p>Color: {crewmate.Color}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryPage;