import {
  GET_PASSED_TRAININGS_FROM_API,
  SET_PASSED_TRAININGS_ON_SAVE,
} from "../../constants";

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
    case SET_PASSED_TRAININGS_ON_SAVE:
      return {
        ...state,
        passedTrainings: [...state.passedTrainings, action.training],
      };
    default:
      return state;
  }
}
