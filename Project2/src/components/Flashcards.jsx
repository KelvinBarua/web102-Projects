import React from 'react';

const Flashcard = (props) => {
  const currentCard = props.Flashcards[props.currIndex]; // You may want to use currentIndex here

  return (
    <div className="Flashcard" onClick={props.ClickFunction}>
      {props.showAnswer ? (
        <p>Answer: {currentCard.answer}</p>
      ) : (
        <p>Question: {currentCard.question}</p>
      )}
    </div>
  )
};

export default Flashcard;