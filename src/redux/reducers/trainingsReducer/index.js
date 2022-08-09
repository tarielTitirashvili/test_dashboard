import { GET_TRAININGS_FROM_API } from "../../constants";

const initState = {
  trainings: [],
};
export default function trainingsReducer(state = initState, action) {
  switch (action.type) {
    case GET_TRAININGS_FROM_API:
      return {
        ...state,
        trainings: action.trainings,
      };
    default:
      return state;
  }
}
