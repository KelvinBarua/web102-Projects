import React from "react";

const WorkoutCards = (props) => {
  return (
    <div className="WorkoutCard">
      <p id="Split_txt"><a href={props.link} target="_blank">{props.Split}</a></p>
      <div>
        <img id="WorkoutCardImg" src={props.src} alt='workout image' />
      </div>
      <div className="WorkoutDesc">
        <p id={props.desc_id}>{props.desc}</p>
      </div>
    </div>
  )
}

export default WorkoutCards;