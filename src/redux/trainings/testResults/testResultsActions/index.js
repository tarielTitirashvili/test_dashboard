import {
  GET_TESTS_FROM_API,
  SET_NEW_TEST_ON_SAVE,
  SET_TESTS_FROM_API_TO_STATE,
} from "../../../constants";

export const getTestResultsAC = () => ({
  type: GET_TESTS_FROM_API,
});
export const setTestResultsAC = (tests) => ({
  type: SET_TESTS_FROM_API_TO_STATE,
  tests,
});

export const setNewTestOnSaveAC = (newTest) => ({
  type: SET_NEW_TEST_ON_SAVE,
  newTest,
});
