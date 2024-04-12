import { useState } from 'react'
import Navbar from '../components/navbar';
import { supabase } from '../supabaseClient';

function Home() {
  const [crewmateName, setName] = useState('');
  const [crewmateSpeed, setSpeed] = useState('');
  
  // const createCrewmate = async (event) =>{
  //   event.preventDefault();

  //   await supabase
  //     .from('Crewmates')
  // }

  return (
    <div className="container">
      <Navbar />
      <div className='main-area'>
        <h1 className='main-title'>Welcome to the Crewmate Creator!</h1>
        <h3>Create a custom crewmate lobby before deploying them into the Among Us Games!</h3>

        <div className="crewmateModArea">
          <form id="create-form">
            <label for="name-field">Crewmate Name: </label>
            <input 
            id="name-field" 
            type="text"
            onChange={(e) => {setName(e.target.value)}}></input>
            <button>Create Crewmate!</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home;
