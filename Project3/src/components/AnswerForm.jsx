import React from "react";
import { useState } from "react";

const AnswerForm = ({correctAnswer}) => {

  const[userInput, setUserInput] = useState('');
  const[answerFeedback, setAnswerFeedback] = useState('');

  const [showAnswer, setShowAnswer] = useState(false);

  const onCheckAnswer = (e) => {
    e.preventDefault();

    if(userInput.toLowerCase() == correctAnswer.toLowerCase()){
      setAnswerFeedback("Correct");
      setShowAnswer(true);
      setUserInput("");
    }
    else if(userInput.toLowerCase() != correctAnswer.toLowerCase()){
      setAnswerFeedback("Wrong");
      setShowAnswer(false);
    }
  }

  return (
    <>
      <div className="Guess-Answer-Container"></div>
        <form>
          <input id="AFtxtInput"
          className={answerFeedback} 
          value={userInput} 
          type="text" 
          name="Guess Answer:" 
          placeholder="Type molecular formula"
          onChange={(e) => setUserInput(e.target.value)}></input>

          <button type="submit" onClick={onCheckAnswer}>Check Answer</button>
        </form>
    </>
  )
}

export default AnswerForm;