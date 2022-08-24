import { SET_ERROR_STATUS } from "../../constants";

export const setErrorAC = (error) => ({
  type: SET_ERROR_STATUS,
  error,
});
