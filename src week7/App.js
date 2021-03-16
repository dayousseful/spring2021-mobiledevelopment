import Meals from "./components/Meals";

const { default: Workouts } = require("./components/Workouts");

function App() {
  return (
    <div>
      <h1>Exercise Tracker. </h1>
      <Workouts />
      <Meals />
    </div>
  );
}

export default App;
