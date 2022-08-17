import { SET_NEW_TEST_ON_SAVE, SET_TESTS_FROM_API_TO_STATE } from "../../constants";

const initState = {
  tests: [],
};

export default function testsResultsReducer(state = initState, action) {
  switch (action.type) {
    case SET_TESTS_FROM_API_TO_STATE:
      return {
        ...state,
        tests: action.tests,
      };
    case SET_NEW_TEST_ON_SAVE:
      return {
        ...state,
        tests: [...state.tests, action.newTest],
      };
    default:
      return state;
  }
}
