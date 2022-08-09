import { GET_TESTS_FROM_API } from "../../constants";
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
