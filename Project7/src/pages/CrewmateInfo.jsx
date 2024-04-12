import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";

import Red from "../assets/crewmates/redCrew.png";
import Blue from "../assets/crewmates/blueCrew.png";
import Green from "../assets/crewmates/greenCrew.png";
import UpdateForm from "../components/UpdateForm";
import Modal from "../components/Modal";

import { supabase } from "../supabaseClient";

function CrewmateInfo() {
  let { state } = useLocation();

  const [crewmateName, setName] = useState(state ? state.Name : "");
  const [crewmateSpeed, setSpeed] = useState(state ? state.Speed : "");
  const [crewmateColor, setColor] = useState(state ? state.Color : "");
  const [crewmateID, setCrewmateID] = useState(state? state.id : 0); //sets the id of the crewmate to be initially what state feeds it, then it can be whatever after it is updated. That way after the successful update, the info page will also update the crewmate info along with it. 

  const [filteredCrewmates, setFilteredCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase.from("Crewmates").select();

      if (error) {
        console.log("Error fetching data:", error);
      } else {
        const filtered = data.filter(crewmate => crewmate.id == crewmateID); //we just want the crewmate Whose info we are viewing.
        setFilteredCrewmates(filtered);
      }
    };

    fetchCrewmates();
  }, [filteredCrewmates]); //anytime this change, i.e. after the update, the info page will also update. 

  const updateCrewmate = async (event) => {
    event.preventDefault();
    await supabase
      .from("Crewmates")
      .update({ Name: crewmateName, Speed: crewmateSpeed, Color: crewmateColor })
      .eq("id", crewmateID);
    setName("");
    setSpeed("");
    setColor("");
  };

  const deleteCrewmate = async (toggleModal) => {
  
    await supabase
      .from('Crewmates')
      .delete()
      .eq('id', crewmateID); 
    
      toggleModal();
  }

  return (
    <div className="container">
      <Navbar />
      <div className="main-area">
        {filteredCrewmates.map((crewmate) => (
          <div key={crewmate.id}>
            <h1 className="main-title">Crewmate: {crewmate.Name}</h1>
            {crewmate.Color === "Red" && <img id="detailed-view-crewmateIMG" alt="Red crewmate" src={Red} />}
            {crewmate.Color === "Blue" && <img id="detailed-view-crewmateIMG" alt="Blue crewmate" src={Blue} />}
            {crewmate.Color === "Green" && <img id="detailed-view-crewmateIMG" alt="Green crewmate" src={Green} />}
            <p>Crewmate Speed: {crewmate.Speed}</p>
          </div>
        ))}

        <h2>Update Crewmate</h2>
        <UpdateForm crewmateName={crewmateName} setName={setName} crewmateSpeed={crewmateSpeed} setSpeed={setSpeed} crewmateColor={crewmateColor} setColor={setColor} crewmateID={crewmateID} setCrewmateID={setCrewmateID} updateCrewmate={updateCrewmate} />
        <Modal deleteCrewmate={deleteCrewmate}/>
        <Link to="/crewmateGalleryPage">⬅️ Go Back</Link>
      </div>
    </div>
  );
}

export default CrewmateInfo;
