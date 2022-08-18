import {
  SET_PASSED_TRAININGS_FROM_API_TO_STATE,
  SET_PASSED_TRAININGS_ON_SAVE,
} from "../../../constants";

const initState = {
  passedTrainings: [],
};

export default function passedTrainingsReducer(state = initState, action) {
  switch (action.type) {
    case SET_PASSED_TRAININGS_FROM_API_TO_STATE:
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
