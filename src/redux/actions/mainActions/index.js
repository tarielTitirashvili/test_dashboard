import {
  GET_PASSED_USER_INFO_FROM_API,
  SET_USER_DATA_DETAILS,
  SET_USER_DATA_TO_INITIAL_DATA,
  SET_CORPORATE_PHONES_DATA,
  SET_CORPORATE_NUMBER_OF_RELATIVES,
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
export const setPersonDataToInitialAC = () => ({
  type: SET_USER_DATA_TO_INITIAL_DATA,
});

export const setCorporatePhonesAC = (newValue) => ({
  type: SET_CORPORATE_PHONES_DATA,
  newValue,
});

export const setCorporateNumberOfRelativesAC = (data) => ({
  type: SET_CORPORATE_NUMBER_OF_RELATIVES,
  data,
});

export const setUserDataDetailAC = (value, name, objName) => ({
  type: SET_USER_DATA_DETAILS,
  value,
  name,
  objName,
});
