let state = {
  meals: 0,
  workouts: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment1":
      return { meals: state.meals + 1, workouts: state.workouts };
    case "increment2":
      return { meals: state.meals, workouts: state.workouts + 1 };
    case "decrement1":
      return { meals: state.meals - 1, workouts: state.workouts };
    case "decrement2":
      return { meals: state.meals, workouts: state.workouts - 1 };
    default:
      throw new Error();
  }
}
export { state, reducer };
