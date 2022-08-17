import {
  GET_PASSED_TRAININGS_FROM_API,
  SET_PASSED_TRAININGS_ON_SAVE,
} from "../../constants";
import { getPassedTrainingsAPI } from "../../../API";

export const getPassedTrainingsThunk = () => {
  return (dispatch) => {
    getPassedTrainingsAPI().then((data) => {
      dispatch(setPassedTrainingsAC(data.data));
    });
  };
};

const setPassedTrainingsAC = (passedTrainings) => ({
  type: GET_PASSED_TRAININGS_FROM_API,
  passedTrainings,
});

export const setPassedTrainingsOnSaveAC = (training) => ({
  type: SET_PASSED_TRAININGS_ON_SAVE,
  training,
});
