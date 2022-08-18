import {
  GET_TRAININGS_FROM_API,
  SET_TRAININGS_FROM_API_TO_STATE,
} from "../../../constants";

export const setTrainingsAC = (trainings) => ({
  type: SET_TRAININGS_FROM_API_TO_STATE,
  trainings,
});

export const getTrainingsAC = () => ({
  type: GET_TRAININGS_FROM_API,
});
