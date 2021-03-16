import React, { Component } from "react";

class Workouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>Workouts: {this.state.days}</h2>
        <button onClick={() => this.setState({ days: this.state.days + 1 })}>
          {" "}
          Workouts{" "}
        </button>
        <button onClick={() => this.setState({ days: 0 })}>
          Reset Counter
        </button>
      </div>
    );
  }
}
export default Workouts;
