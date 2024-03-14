import { useState } from 'react';
import './App.css';
import Flashcard from './components/Flashcards';
import flashcardsContent from "./components/FlashcardContent";
import currentCardTracker from './currentCardTracker';
import AnswerForm from './components/AnswerForm';



const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0); //controls which flashcard is showing, initially 0.

  const [showAnswer, setShowAnswer] = useState(false);

  //to be used in AnswerForm component:
  const[answerFeedback, setAnswerFeedback] = useState('');
  const[userInput, setUserInput] = useState('');
  //end of AnswerForm component variables.

  const resetAnswerFeedback = () => {
    setAnswerFeedback('');
  }

  const resetUserInput = () => {
    setUserInput('');
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const handleToggleAnswer = () => setShowAnswer(!showAnswer);

  var currCard = 0;
  if(currentCardTracker.length == 0){
    currentCardTracker.push(currCard);
  } //pushes the initial card.

  const nextCard = () => {
    currCard = getRandomInt(flashcardsContent.length);
    currentCardTracker.push(currCard);
    console.log(currentCardTracker);  
    setCurrentIndex(prevIndex => (currCard));
    setShowAnswer(false); // Resets showAnswer when changing the card
    resetAnswerFeedback();
    resetUserInput();
  }

  const prevCard = () => {
    if(currentCardTracker.length > 1){
      setCurrentIndex(prevIndex => (currentCardTracker[currentCardTracker.length - 1]));
      currentCardTracker.pop();
      console.log(currentCardTracker);
      setShowAnswer(false); // Resets showAnswer when changing the card
      resetAnswerFeedback();
      resetUserInput();
    }
  }

  return (
    <div className="App">
      <h2>Chemistry 101: Basic Polyatomic Ions Flashcards👩🏻‍🔬</h2>
      <h3>⚗️Memorize the molecular formulas of the basic polyatomic ions!⚗️</h3>
      <h3>Number of cards: {flashcardsContent.length}</h3>
      <p>Current card: {currentIndex + 1}</p>
      <Flashcard Flashcards={flashcardsContent} currIndex={currentIndex} ClickFunction={handleToggleAnswer} showAnswer={showAnswer} />
      <AnswerForm correctAnswer={flashcardsContent[currentIndex].typeAnswer} showAnswer={showAnswer} answerFeedback={answerFeedback} userInput={userInput} setUserInput={setUserInput} setAnswerFeedback={setAnswerFeedback} resetAnswerFeedback={resetAnswerFeedback} />
      <button onClick={prevCard}>Prev</button>
      <button onClick={nextCard}>Next</button>
    </div>
  )
}

export default App;