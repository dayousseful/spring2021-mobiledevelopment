import React, { Component } from "react";

class Meals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Meal_s: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>Meals: {this.state.Meal_s}</h2>
        <button
          onClick={() => this.setState({ Meal_s: this.state.Meal_s + 1 })}
        >
          {" "}
          Meals{" "}
        </button>
        <button onClick={() => this.setState({ Meal_s: 0 })}>
          Reset Counter
        </button>
      </div>
    );
  }
}
export default Meals;
