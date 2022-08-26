import {
  SET_DRIVING_LICENSE_FROM_API_TO_STATE,
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
    default:
      return state;
  }
}
