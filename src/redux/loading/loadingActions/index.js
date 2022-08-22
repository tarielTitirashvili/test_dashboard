import { SET_GLOBAL_LOADING_STATUS } from "../../constants";

export const setGlobalLoadingStatusAC = (status) => ({
    type: SET_GLOBAL_LOADING_STATUS,
    status,
  });