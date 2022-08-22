import {
  GET_DRIVING_LICENSE_FROM_API_TO_STATE,
  SET_DRIVING_LICENSE_FROM_API_TO_STATE,
} from "../../../constants";

export const setDivingLicensesFromServerAC = (drivingLicenses) => ({
  type: SET_DRIVING_LICENSE_FROM_API_TO_STATE,
  drivingLicenses,
});
export const getVocationStatisticsAC = () => ({
  type: GET_DRIVING_LICENSE_FROM_API_TO_STATE,
});
