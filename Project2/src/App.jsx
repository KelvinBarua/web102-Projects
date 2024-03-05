import { useState } from 'react';
import './App.css';
import Flashcard from './components/Flashcards';
import flashcardsContent from "./components/FlashcardContent";


const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggleAnswer = () => setShowAnswer(!showAnswer);
  const changeCard = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % flashcardsContent.length);
    setShowAnswer(false); // Resets showAnswer when changing the card
  }

  return (
    <div className="App">
      <p>Current card: {currentIndex}</p>
      <Flashcard Flashcard={flashcardsContent} currIndex={currentIndex} ClickFunction={handleToggleAnswer} showAnswer={showAnswer}/>
      <button onClick={changeCard}>Next</button>
    </div>
  )
}
export default App;