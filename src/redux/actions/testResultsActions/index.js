import { GET_TESTS_FROM_API, SET_NEW_TEST_ON_SAVE } from "../../constants";
import { getTestResultsAPI } from "../../../API";

export const getTestsThunk = () => {
  return (dispatch) => {
    getTestResultsAPI().then((data) => {
      dispatch(setTestResultsAC(data.data));
    });
  };
};

const setTestResultsAC = (tests) => ({
  type: GET_TESTS_FROM_API,
  tests,
});

export const setNewTestOnSaveAC = (newTest) => ({
  type: SET_NEW_TEST_ON_SAVE,
  newTest,
});