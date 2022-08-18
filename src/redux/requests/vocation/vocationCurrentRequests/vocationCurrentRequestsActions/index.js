import {
  GET_VOCATION_REQUESTS_FROM_API_TO_STATE,
  SET_NEW_VOCATION_REQUEST_ON_SAVE,
  SET_VOCATION_REQUESTS_FROM_API_TO_STATE,
} from "../../../../constants";

export const setCurrentRequestsAC = (vocationCurrentRequests) => ({
  type: SET_VOCATION_REQUESTS_FROM_API_TO_STATE,
  vocationCurrentRequests,
});

export const setNewRequestOnSaveAC = (newRequest) => ({
  type: SET_NEW_VOCATION_REQUEST_ON_SAVE,
  newRequest,
});

export const getCurrentRequestsAC = () => ({
  type: GET_VOCATION_REQUESTS_FROM_API_TO_STATE,
});
