import { SET_TESTS_FROM_API } from "../../constants";

const initState = {
  tests: [],
};

export default function trainingsReducer(state = initState, action) {
  switch (action.type) {
    case SET_TESTS_FROM_API:
      return {
        ...state,
        tests: action.tests,
      };
    default:
      return state;
  }
}
