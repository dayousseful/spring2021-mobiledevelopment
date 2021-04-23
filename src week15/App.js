import React, { useReducer } from "react";
import { state, reducer } from "./components/ApplicationState/index";
import Workouts from "./components/Meals/index";
import Meals from "./components/Workouts/index";

function App() {
  const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <div>
      <h1>Exercise Tracker. </h1>
      <Workouts state={currentState} dispatch={dispatch} />
      <Meals state={currentState} dispatch={dispatch} />
    </div>
  );
}

export default App;
