import { SET_GLOBAL_LOADING_STATUS } from "../../constants";

const initState = {
  loading: true,
};

export default function loadingStatus(state = initState, action) {
  switch (action.type) {
    case SET_GLOBAL_LOADING_STATUS:
      return {
        ...state,
       loading: action.status
      };
    default:
      return state;
  }
}
