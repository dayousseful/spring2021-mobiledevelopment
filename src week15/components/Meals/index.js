import React from "react";

function Meals(props) {
  return (
    <div>
      <h2>Meals: {props.state.meals}</h2>
      <button onClick={() => props.dispatch({ type: "increment1" })}>
        {" "}
        Add Meal
      </button>

      <button onClick={() => props.dispatch({ type: "decrement1" })}>
        Remove Meal
      </button>
    </div>
  );
}
export default Meals;
