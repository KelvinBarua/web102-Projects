import React from "react";
import { useState } from "react";

  const AnswerForm = ({correctAnswer, userInput, setUserInput, answerFeedback, setAnswerFeedback, resetAnswerFeedback, numAttempts, setNumAttempts}) => {

  const onCheckAnswer = (e) => {
    e.preventDefault();

    if(userInput.toLowerCase() == correctAnswer.toLowerCase()){
      setAnswerFeedback("Correct");
      setUserInput(`${userInput} is correct!`);
    }
    else if(userInput.toLowerCase() != correctAnswer.toLowerCase()){
      setNumAttempts(numAttempts + 1);
      setAnswerFeedback("Wrong");
      if(numAttempts == 0){
        setUserInput("Wrong, try again :D");
      }
      else if(numAttempts >= 1){
        setUserInput("Try again.");
      }
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
          placeholder="Type your guess! If charge magnitude >1, use ( )"
          onChange={(e) => setUserInput(e.target.value)}
          onClick={(e) => {setUserInput('');resetAnswerFeedback();}}
          onKeyDown={(e) => {if(e.key == 'Backspace' && answerFeedback != ""){setUserInput(''); resetAnswerFeedback()}}}></input>

          <button type="submit" onClick={onCheckAnswer}>Check Answer</button>
        </form>
    </>
  )
}

export default AnswerForm;