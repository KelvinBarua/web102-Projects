import { useState } from 'react'
import Navbar from '../components/navbar';
import { supabase } from '../supabaseClient';
import CreateForm from '../components/CreateForm'

function CreatePage() {
  const [crewmateName, setName] = useState('');
  const [crewmateSpeed, setSpeed] = useState('');
  const [crewmateColor, setColor] = useState('');
  
  const createCrewmate = async (event) => {
    event.preventDefault();  
    
    try {
      const { data, error } = await supabase
        .from('Crewmates')
        .insert([
          { Name: crewmateName, Speed: Number(crewmateSpeed), Color: crewmateColor }
        ]);
  
      if (error) throw error;
  
      // Reset the form fields after successful insertion
      setName('');
      setSpeed('');
      setColor('');
    } catch (err) {
      console.error('Error inserting data:', err);
      alert('Failed to create crewmate: ' + err.message);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className='main-area'>
        <h1 className='main-title'>Create a Crewmate!</h1>

        <CreateForm crewmateName={crewmateName} setName={setName} crewmateSpeed={crewmateSpeed} setSpeed={setSpeed} crewmateColor={crewmateColor} setColor={setColor} createCrewmate={createCrewmate}/>
      </div>
    </div>
  )
}

export default CreatePage;
