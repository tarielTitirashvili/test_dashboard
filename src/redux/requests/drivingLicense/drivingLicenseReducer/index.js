import {
  SET_DRIVING_LICENSE_FROM_API_TO_STATE,
  SET_NEW_VOCATION_REQUEST_ON_SAVE,
} from "../../../constants";

const initState = {
  drivingLicenses: [],
};

export default function drivingLicenseReducer(state = initState, action) {
  switch (action.type) {
    case SET_DRIVING_LICENSE_FROM_API_TO_STATE:
      return {
        ...state,
        drivingLicenses: action.drivingLicenses,
      };
    case SET_NEW_VOCATION_REQUEST_ON_SAVE:
      return {
        ...state,
        vocationStatistics: [...state.vocationStatistics, action.newVocation],
      };
    default:
      return state;
  }
}
