import {
    GET_CORP_NUMBERS_FROM_API_TO_STATE,
    SET_CORP_NUMBERS_FROM_API_TO_STATE,
  } from "../../../constants";
  
  export const setCorpNumbersFromServerAC = (corpNumbers) => ({
    type: SET_CORP_NUMBERS_FROM_API_TO_STATE,
    corpNumbers,
  });
  export const getCorpNumbersAC = () => ({
    type: GET_CORP_NUMBERS_FROM_API_TO_STATE,
  });
  