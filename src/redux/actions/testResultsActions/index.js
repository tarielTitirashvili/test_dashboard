import { SET_TESTS_FROM_API } from "../../constants";
import { getTestResultsAPI } from "../../../API";

export const getTestsThunk = () => {
  return (dispatch) => {
    getTestResultsAPI().then((data) => {
      dispatch(setTestResultsAC(data.data));
    });
  };
};

const setTestResultsAC = (tests) => ({
  type: SET_TESTS_FROM_API,
  tests,
});
