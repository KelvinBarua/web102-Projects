import React from "react";
import { useState } from "react";

const AnswerForm = ({correctAnswer, userInput, setUserInput, answerFeedback, setAnswerFeedback, resetAnswerFeedback}) => {

  const onCheckAnswer = (e) => {
    e.preventDefault();

    if(userInput.toLowerCase() == correctAnswer.toLowerCase()){
      setAnswerFeedback("Correct");
      setUserInput(`${userInput} is correct!`);
    }
    else if(userInput.toLowerCase() != correctAnswer.toLowerCase()){
      setAnswerFeedback("Wrong");
      setUserInput("Wrong, try again :D");
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
          onChange={(e) => setUserInput(e.target.value)}></input>

          <button type="submit" onClick={onCheckAnswer}>Check Answer</button>
        </form>
    </>
  )
}

export default AnswerForm;