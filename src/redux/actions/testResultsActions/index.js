import { SET_TRAININGS_FROM_API } from "../../constants";
import { getTrainingAPI } from "../../../API";

export const getTestsThunk = () => {
  return (dispatch) => {
    getTrainingAPI().then((data) => {
      console.log(data);
      dispatch(setTrainingsAC(data.data));
    });
  };
};

const setTrainingsAC = (trainings) => ({
  type: SET_TRAININGS_FROM_API,
  trainings,
});
