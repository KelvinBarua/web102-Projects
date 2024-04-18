import React from 'react'
import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

//components
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='container'>
      <Navbar />
      <div className='button-area'>
        <Link to="/createPost"><button>Create Post ✍️</button></Link>
      </div>
    </div>
  )
}

export default App
