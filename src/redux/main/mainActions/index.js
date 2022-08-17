import {
  SET_USER_DATA_DETAILS,
  SET_USER_DATA_TO_INITIAL_DATA,
  SET_CORPORATE_PHONES_DATA,
  SET_CORPORATE_NUMBER_OF_RELATIVES,
  SET_PASSED_USER_INFO_FROM_API,
  GET_DATA_FROM_API,
} from "../../constants";

export const setPersonInfoAC =(person)=>({
  type:SET_PASSED_USER_INFO_FROM_API,
  person
})

export const setPersonDataToInitialAC = () => ({
  type: SET_USER_DATA_TO_INITIAL_DATA,
});

export const getDataFromAPIAC=()=>({
  type:GET_DATA_FROM_API,
})

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
