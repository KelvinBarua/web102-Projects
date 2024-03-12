import React from "react";
import { useState } from "react";

const AnswerForm = () => {

  const[answerCorrect, setCorrectAnswer] = useState('');

  return (
    <>
      <div className="Guess-Answer-Container"></div>
        <form>
          <input id="AFtxtInput" type="text" name="Guess Answer:" placeholder="Type molecular formula. Use _ for subscript and ^ for superscript."></input>
          <button type="submit">Check Answer</button>
        </form>
    </>
  )
}

export default AnswerForm;