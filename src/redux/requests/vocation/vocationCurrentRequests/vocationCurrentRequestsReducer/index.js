import {
  SET_NEW_VOCATION_REQUEST_ON_SAVE,
  SET_VOCATION_REQUESTS_FROM_API_TO_STATE,
} from "../../../../constants";

const initState = {
  vocationCurrentRequests: [],
};

export default function vocationCurrentRequestsReducer(
  state = initState,
  action
) {
  switch (action.type) {
    case SET_VOCATION_REQUESTS_FROM_API_TO_STATE:
      return {
        ...state,
        vocationCurrentRequests: action.vocationCurrentRequests,
      };
    case SET_NEW_VOCATION_REQUEST_ON_SAVE:
      return {
        ...state,
        vocationCurrentRequests: [
          ...state.vocationCurrentRequests,
          action.newRequest,
        ],
      };
    default:
      return state;
  }
}
