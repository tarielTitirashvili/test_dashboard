import { SET_TRAININGS_FROM_API_TO_STATE } from "../../../constants";

const initState = {
  trainings: [],
};
export default function trainingsReducer(state = initState, action) {
  switch (action.type) {
    case SET_TRAININGS_FROM_API_TO_STATE:
      return {
        ...state,
        trainings: action.trainings,
      };
    default:
      return state;
  }
}
