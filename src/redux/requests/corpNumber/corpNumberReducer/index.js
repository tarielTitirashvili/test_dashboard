import {
    SET_CORP_NUMBERS_FROM_API_TO_STATE,
  } from "../../../constants";
  
  const initState = {
    corpNumbers: [],
  };
  
  export default function corpNumberReducer(state = initState, action) {
    switch (action.type) {
      case SET_CORP_NUMBERS_FROM_API_TO_STATE:
        return {
          ...state,
          corpNumbers: action.corpNumbers,
        };
      default:
        return state;
    }
  }
  