import { SET_BUSINESS_TRIPS_FROM_API_TO_STATE, SET_NEW_BUSINESS_TRIP_FROM_API_TO_STATE } from "../../../constants";
  
  const initState = {
    BusinessTrips: [],
  };
  
  export default function businessTripReducer(state = initState, action) {
    switch (action.type) {
      case SET_BUSINESS_TRIPS_FROM_API_TO_STATE:
        return {
          ...state,
          BusinessTrips: action.BusinessTrips,
        };
      case SET_NEW_BUSINESS_TRIP_FROM_API_TO_STATE:
        return {
          ...state,
          BusinessTrips: [...state.vocationStatistics, action.newBusinessTrip],
        };
      default:
        return state;
    }
  }
  