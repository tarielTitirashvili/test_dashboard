import {
    SET_MIDTERM_EVALUATIONS_FROM_API_TO_STATE,
  } from "../../../constants";
  
  const initState = {
    midtermEvaluations: [],
  };
  
  export default function midtermEvaluationReducer(state = initState, action) {
    switch (action.type) {
      case SET_MIDTERM_EVALUATIONS_FROM_API_TO_STATE:
        return {
          ...state,
          midtermEvaluations: action.midtermEvaluations,
        };
      default:
        return state;
    }
  }
  