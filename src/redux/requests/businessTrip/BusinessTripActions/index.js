import {
  GET_BUSINESS_TRIPS_FROM_API_TO_STATE,
  SET_BUSINESS_TRIPS_FROM_API_TO_STATE,
} from "../../../constants";

export const setBusinessTripsFromServerAC = (BusinessTrips) => ({
  type: SET_BUSINESS_TRIPS_FROM_API_TO_STATE,
  BusinessTrips,
});
export const getBusinessTripsAC = () => ({
  type: GET_BUSINESS_TRIPS_FROM_API_TO_STATE,
});
