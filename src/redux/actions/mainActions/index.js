import {
  GET_PASSED_USER_INFO_FROM_API,
  SET_USER_DATA_DETAILS,
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

export const setUserDataDetailAC = (value, name, objName) => ({
  type: SET_USER_DATA_DETAILS,
  value,
  name,
  objName,
});
