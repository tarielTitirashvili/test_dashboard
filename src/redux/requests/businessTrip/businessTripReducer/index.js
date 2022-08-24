import { SET_BUSINESS_TRIPS_FROM_API_TO_STATE } from "../../../constants";
  
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
      default:
        return state;
    }
  }
  