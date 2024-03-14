import React from 'react';

const Flashcard = (props) => {
  const currentCard = props.Flashcards[props.currIndex]; // You may want to use currentIndex here

  return (
    <div className="Flashcard" onClick={props.ClickFunction} id={props.id}>
      {props.showAnswer ? (
        <p>⚛ Answer:{currentCard.answer}</p>
      ) : (
        <p>🧪 {currentCard.question}  🧪</p>
      )}
    </div>
  )
};

export default Flashcard;