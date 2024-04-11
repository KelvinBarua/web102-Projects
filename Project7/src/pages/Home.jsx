import { useState } from 'react'
import Navbar from '../components/navbar';

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Navbar />
      <div className='main-area'>
        <h1 className='main-title'>Welcome to the Crewmate Creator!</h1>
        <h3>Create a custom crewmate lobby before deploying them into the Among Us Games!</h3>

        <div className="crewmateModArea">
          <form id="create-form">
            <label for="name-field">Crewmate Name: </label>
            <input id="name-field" type="text"></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home;
