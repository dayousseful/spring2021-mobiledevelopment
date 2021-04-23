import React from "react";

function Workouts(props) {
  return (
    <div>
      <h2>Workouts: {props.state.workouts}</h2>
      <button onClick={() => props.dispatch({ type: "increment2" })}>
        Add Workout
      </button>
      <button onClick={() => props.dispatch({ type: "decrement2" })}>
        Remove Workout
      </button>
    </div>
  );
}
export default Workouts;
