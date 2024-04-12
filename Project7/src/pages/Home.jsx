import { useState } from 'react'
import Navbar from '../components/navbar';
import { supabase } from '../supabaseClient';

function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className='main-area'>
        <h1 className='main-title'>Welcome to the Crewmate Creator!</h1>
        <h3>Create a custom crewmate lobby before deploying them into the Among Us Games!</h3>
      </div>
    </div>
  )
}

export default Home;
