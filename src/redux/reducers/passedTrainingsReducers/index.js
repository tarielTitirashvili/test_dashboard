import { GET_PASSED_TRAININGS_FROM_API } from "../../constants";

const initState = {
  passedTrainings: [],
};

export default function passedTrainingsReducer(state = initState, action) {
  switch (action.type) {
    case GET_PASSED_TRAININGS_FROM_API:
      return {
        ...state,
        passedTrainings: action.passedTrainings,
      };
    default:
      return state;
  }
}
