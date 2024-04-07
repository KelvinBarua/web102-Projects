import { useState } from 'react'
import Navbar from '../components/navbar';

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Navbar />
    </div>
  )
}

export default Home;
