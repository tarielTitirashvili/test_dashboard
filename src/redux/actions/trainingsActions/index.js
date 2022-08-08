import { SET_TRAININGS_FROM_API } from '../../constants';
import { getTrainingsAPI } from '../../../API';

export const getTrainingsThunk = () => {
  return (dispatch) => {
    getTrainingsAPI().then((data) => {
      dispatch(setTrainingsAC(data.data));
    });
  };
};

export const setTrainingsAC = (trainings) => ({
  type: SET_TRAININGS_FROM_API,
  trainings,
});
