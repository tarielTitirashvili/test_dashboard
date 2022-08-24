import { SET_ERROR_STATUS } from "../../constants";

const initState = {
  error: null,
};

export default function errorReducer(state = initState, action) {
  switch (action.type) {
    case SET_ERROR_STATUS:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
