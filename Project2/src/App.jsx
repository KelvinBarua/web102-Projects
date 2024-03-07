import { useState } from 'react';
import './App.css';
import Flashcard from './components/Flashcards';
import flashcardsContent from "./components/FlashcardContent";


const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0); //controls which flashcard is showing, initially 0.
  const [showAnswer, setShowAnswer] = useState(false); //controls whether the answer is shown or not.

  const handleToggleAnswer = () => setShowAnswer(!showAnswer);
  const nextCard = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % flashcardsContent.length);
    setShowAnswer(false); // Resets showAnswer when changing the card
  }

  const prevCard = () => {
    if(currentIndex >= 1){
      setCurrentIndex(prevIndex => (prevIndex - 1) % flashcardsContent.length);
      setShowAnswer(false); // Resets showAnswer when changing the card
    }
  }

  return (
    <div className="App">
      <h2>Chemistry 101: Basic Polyatomic Ions Flashcards</h2>
      <h3>Number of cards: {flashcardsContent.length}</h3>
      <p>Current card: {currentIndex + 1}</p>
      <Flashcard Flashcards={flashcardsContent} currIndex={currentIndex} ClickFunction={handleToggleAnswer} showAnswer={showAnswer}/>
      <button onClick={prevCard}>Prev</button>
      <button onClick={nextCard}>Next</button>
    </div>
  )
}
export default App;