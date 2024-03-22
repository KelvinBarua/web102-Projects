import { useState } from 'react';
import CatPictures from './componenets/catPictures';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CatPictures/>
      </div>
    </>
  )
}

export default App;

