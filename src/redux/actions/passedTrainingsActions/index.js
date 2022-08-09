import { GET_PASSED_TRAININGS_FROM_API } from '../../constants';
import { getPassedTrainingsAPI } from '../../../API';

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
