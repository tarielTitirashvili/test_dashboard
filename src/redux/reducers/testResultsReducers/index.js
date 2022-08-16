import { GET_TESTS_FROM_API, SET_NEW_TEST_ON_SAVE } from "../../constants";

const initState = {
  tests: [],
};

export default function testsResultsReducer(state = initState, action) {
  switch (action.type) {
    case GET_TESTS_FROM_API:
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
