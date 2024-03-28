import { useState } from 'react'
import axios from 'axios'
import './App.css'
import ComicData from './components/ComicData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="navbar-container"></div>

        <div className="data-container">
          <ComicData />
        </div>
      </div>
    </>
  )
}

export default App
