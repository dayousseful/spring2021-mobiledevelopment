import Meals from "./components/Meals";
import "./style.css";

const { default: Workouts } = require("./components/Workouts");

function App() {
  return (
    <div>
      <h1>Exercise Tracker</h1>
      <h4>by Youssef Ibrahim</h4>
      <Workouts />
      <Meals />
    </div>
  );
}

export default App;
