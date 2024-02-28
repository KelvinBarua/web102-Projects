import React from "react";

const WorkoutCards = (props) => {
  return (
    <div className="WorkoutCard">
      <p>{props.Split}</p>
      <div className="WorkoutDesc">
        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default WorkoutCards;