import {
    GET_MIDTERM_EVALUATIONS_FROM_API_TO_STATE,
    SET_MIDTERM_EVALUATIONS_FROM_API_TO_STATE,
  } from "../../../constants";
  
  export const setMidtermEvaluationsFromServerAC = (midtermEvaluations) => ({
    type: SET_MIDTERM_EVALUATIONS_FROM_API_TO_STATE,
    midtermEvaluations,
  });
  export const getMidtermEvaluationsAC = () => ({
    type: GET_MIDTERM_EVALUATIONS_FROM_API_TO_STATE,
  });
  