import {
  GET_PASSED_USER_INFO_FROM_API,
  SET_USER_BASIC_DETAILS,
  SET_USER_Identity_DETAILS,
} from "../../constants";
import { getPersonDataAPI } from "../../../API";

export const getPassedPersonDataThunk = () => {
  return (dispatch) => {
    getPersonDataAPI().then((data) => {
      dispatch(setPassedPersonDataAC(data.data[0]));
    });
  };
};

const setPassedPersonDataAC = (person) => ({
  type: GET_PASSED_USER_INFO_FROM_API,
  person,
});

export const setUserBasicDetailAC = (value, name) => ({
  type: SET_USER_BASIC_DETAILS,
  value,
  name,
});

export const setUserIdentityDetailAC = (value, name) => ({
  type: SET_USER_Identity_DETAILS,
  value,
  name,
});