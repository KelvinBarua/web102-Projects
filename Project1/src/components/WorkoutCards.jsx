import React from "react";

const WorkoutCards = (props) => {
  return (
    <div className="WorkoutCard">
      <p>{props.Split}</p>
      <div>
        <img id="WorkoutCardImg" src={props.src} alt='workout image' />
      </div>
      <div className="WorkoutDesc">
        <p id={props.id}>{props.desc}</p>
      </div>
    </div>
  )
}

export default WorkoutCards;